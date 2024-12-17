import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import ApiService from '../api/apiService';
import { bytesToGB } from '../utils/utils';
import AddBandwidthModal from './AddBandwidthModal';

const GenerateProxy = () => {
    const [username, setUsername] = useState("sahil12345");
    const [accountInfo, setAccountInfo] = useState(null);

    const [usernameInfo, setUsernameInfo] = useState(null);
    const [proxyInfo, setProxyInfo] = useState(null);
    const [stickyProxyInfo, setStickyProxyInfo] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedCity, setSelectedCity] = useState()
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [selectedState, setSelectedState] = useState("")
    const [error, setError] = useState("");
    const [stickyCounter, setStickyCounter] = useState(20)
    const [stickyCount, setStickyCount] = useState(20)
    const [proxies, setProxies] = useState("")
    const [gbToBeAdded, setGbToBeAdded] = useState(0)
    const [showGBModal, setShowGBModal] = useState(false)

    const fetchUsernameInfo = async () => {
        try {
            const response = await ApiService.getUsernameInfo(username);
            setUsernameInfo(response.data.data);
        } catch (err) {
            setError(
                err.response?.data?.error || "An error occurred while fetching username info"
            );
        }
    };

    const fetchAccountInfo = async () => {
        try {
            const response = await ApiService.getAccountInfo(username);
            setAccountInfo(response.data.data);
        } catch (err) {
            setError(
                err.response?.data?.error || "An error occurred while fetching account info"
            );
        }
    };

    const getProxyList = async (type) => {
        try {
            let payload = {
                "account": accountInfo?.account,
                "password": accountInfo?.password,
                "type": type,
            }
            if (selectedCountry) {
                payload.country_code = selectedCountry.toUpperCase()
            }
            if (selectedState) {
                payload.state = selectedState
            }
            if (selectedCity) {
                payload.city = selectedCity
            }
            if (type === "sticky") {
                payload.time = stickyCounter
            }
            const response = await ApiService.getProxyList(payload);
            if (type === "sticky") {
                setStickyProxyInfo(response.data)
            }
            else {
                setProxyInfo(response.data);
            }
        } catch (err) {
            setError(
                err.response?.data?.error || "An error occurred while fetching username info"
            );
        }
    };
    const getCountryList = async () => {
        try {
            let payload = {}
            if (selectedState) {
                payload.country_code = selectedCountry
                payload.state = selectedState
            }
            else if (selectedCountry) {
                payload.country_code = selectedCountry
            }
            const response = await ApiService.getCountryList(payload);
            if (selectedState) {
                setCityList(response.data.data.data)
            }
            else if (selectedCountry) {
                setStateList(response.data.data.data)
            } else {
                setCountryList(response.data.data.data);
            }
        } catch (err) {
            setError(
                err.response?.data?.error || "An error occurred while fetching username info"
            );
        }
    };

    useEffect(() => {
        fetchUsernameInfo()
        fetchAccountInfo()
    }, [])
    useEffect(() => {
        if (accountInfo) {
            handleGenerateProxy()
        }
    }, [accountInfo])
    useEffect(() => {
        getCountryList()
    }, [selectedCountry, selectedState])

    const handleGenerateProxy = () => {
        getProxyList("rotating")
        getProxyList("sticky")
    }


    const generateRandomString = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const generateProxies = () => {
        const preFix = stickyProxyInfo?.data?.split?.("session-")
        const postFix = stickyProxyInfo?.data?.split?.("sessTime-")
        const generatedProxies = Array.from({ length: stickyCount }, () => {
            const randomSession = generateRandomString(5);
            return `${preFix?.[0]}session-${randomSession}-sessTime-${postFix?.[1]}`;
        }).join("\n");
        setProxies(generatedProxies);
    };

    useEffect(() => {
        generateProxies()
    }, [stickyCount, stickyProxyInfo])


    const saveAsTxt = () => {
        const blob = new Blob([proxies], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "proxies.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    const copyProxies = () => {
        navigator.clipboard
            .writeText(proxies)
            .then(() => alert("Proxies copied to clipboard!"))
            .catch((err) => console.error("Failed to copy text:", err));
    };

    return (
        <div className='bg-[#F4F6F8] w-full'>
            <div className='px-20 pt-5 flex flex-col'>
                <AddBandwidthModal
                    showGBModal={showGBModal}
                    setShowGBModal={setShowGBModal}
                    accountInfo={accountInfo}
                    gbToBeAdded={gbToBeAdded}
                    setGbToBeAdded={setGbToBeAdded}
                    fetchUsernameInfo={fetchUsernameInfo}
                />
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[1.375rem] font-[500]'>Generate Proxy</p>
                        <p className='text-[1rem] font-[400] text-[rgba(0,0,0,0.5)]'>Plan ID: 54sds5d5s4d54</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[1rem] font-[500]'>Need Support?</p>
                        <button className='bg-[#1675FF] text-[white] rounded-[.65019rem] p-[.62rem] font-[600]'>Contact Us</button>
                    </div>
                </div>


                <div className='mt-6 grid grid-cols-1 xl:grid-cols-[25%_25%_50%] gap-6'>
                    <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
                                <img src="https://lightningproxies.net/assets/images/icons/qube.svg" alt="" />
                            </div>
                            <div>
                                <button className='bg-[#1675ff1a] border-[0.949px] border-[#1675ff] rounded-[0.59288rem] text-[#1675ff] text-[1rem] font-[600] p-[0.5rem_0.62rem] h-[28px] flex items-center hover:bg-[#1675ff] hover:text-white'>Plan Settings</button>
                            </div>
                        </div>
                        <div>
                            <p className='mt-4 text-[rgba(0,0,0,0.5)] text-[1.125rem] font-[500]'>Current Plan</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-[1.25rem] font-[600]'>Residential 5GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
                                <img src="https://lightningproxies.net/assets/images/icons/date-w.svg" alt="" />
                            </div>
                            <div>
                                <button className='bg-[#1675ff1a] border-[0.949px] border-[#1675ff] rounded-[0.59288rem] text-[#1675ff] text-[1rem] font-semibold p-[0.5rem_0.62rem] h-[28px] flex items-center hover:bg-[#1675ff] hover:text-white'>Auto Renew</button>
                            </div>
                        </div>
                        <div>
                            <p className='mt-4 text-[rgba(0,0,0,0.5)] text-[1.125rem] font-[500]'>Plan Expiry</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-[1.25rem] font-[600]'>24 Jan 2025 03:52</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
                        <div className='flex'>
                            <div className='w-[40%] border-r-[1.5px] border-[#1675ff]'>
                                <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
                                    <img src="https://lightningproxies.net/assets/images/icons/quee.svg" alt="" />
                                </div>
                                <div>
                                    <p className='mt-4 text-[rgba(0,0,0,0.5)] text-[1.125rem] font-[500]'>Total Bandwidth</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[1.25rem] font-[600]'>5GB</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5 w-full'>
                                <div className='ml-6 max-w-[8.4rem] max-h-[8.4rem]'>
                                    <CircularProgressbarWithChildren
                                        strokeWidth={14}
                                        value={bytesToGB(usernameInfo?.bandwidthLeft)}
                                        minValue={0}
                                        maxValue={bytesToGB(usernameInfo?.all_buy)}
                                        styles={{
                                            path: {
                                                stroke: `#1675FF`,
                                                strokeLinecap: "butt",
                                                transition: "stroke-dashoffset 0.5s ease 0s",
                                            },
                                            trail: {
                                                stroke: "rgba(22, 117, 255,0.4)",
                                                strokeLinecap: "round",
                                            },
                                        }}
                                    >
                                        <p className='text-[1.25rem] font-bold'>{(bytesToGB(usernameInfo?.bandwidthLeft) * 100) / bytesToGB(usernameInfo?.all_buy)}%</p>
                                    </CircularProgressbarWithChildren>
                                </div>

                                <div className='flex justify-between gap-4 w-full'>
                                    <div>
                                        <p className='flex items-center gap-2 text-[rgba(0,0,0,0.6)]'>
                                            <div className='h-[15px] w-[15px] rounded-[50%] bg-[rgba(22,117,255,0.4)]'></div>
                                            Used Bandwidth</p>
                                        <p className='flex items-center gap-2 mt-5 text-[rgba(0,0,0,0.6)]'>
                                            <div className='h-[15px] w-[15px] rounded-[50%] bg-[rgba(22,117,255,1)]'></div>
                                            Remaining Bandwidth</p>

                                        <p className='mt-4'>Add Bandwidth</p>
                                        <div className='relative mt-1'>
                                            <input type="text" value={gbToBeAdded} onChange={(e) => setGbToBeAdded(e.target.value)} className='border px-2 py-1 rounded-md'></input>
                                            <p className='absolute bottom-[10%] right-[3%] text-[#2d5897]'>GB</p>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <p>{bytesToGB(usernameInfo?.used)} GB</p>
                                        <p className='mt-5'>{bytesToGB(usernameInfo?.all_buy)} GB</p>

                                        <button onClick={() => setShowGBModal(true)} className='mt-[42px] bg-[#1675FF] px-4 text-[white] rounded-[.65019rem] p-[.30rem] font-[600]'>Add</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between items-center mt-6'>
                    <div>
                        <p className='text-[1.375rem] font-[500]'>Configure Proxy</p>
                        <p className='text-[1rem] font-[400] text-[rgba(0,0,0,0.5)]'>Configure your proxy type, and whitelist IP</p>
                    </div>
                </div>

                <div className='mt-6 grid grid-cols-1 xl:grid-cols-[51.6%_48%] gap-5 mb-[50px]'>
                    <div>
                        <div className='bg-white border py-[0.9rem] rounded-[.74438rem] pr-[1.5rem]'>
                            <div className='flex justify-between items-start border-b'>
                                <div className='flex gap-6 '>
                                    <div className='border-b border-[#0086ff] pb-2 px-[1.5rem] text-[1.2rem] font-[500]'>User Auth & Pass</div>
                                    <div className='text-[1.2rem] text-[rgba(0,0,0,0.6)]'>Whitelist IP</div>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='flex items-center gap-2 text-[1.1rem]'><input type="radio" name="" id="" /> Standard</p>
                                    <p className='flex items-center gap-2 text-[1.1rem]'><input type="radio" name="" id="" />Regions</p>
                                </div>
                            </div>
                            <div className='pl-[1.5rem] py-[1rem]'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col w-[48.5%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Username</label>
                                        <input type="text" value={accountInfo?.account} className='border px-4 py-2 rounded-lg'></input>
                                    </div>
                                    <div className='flex flex-col w-[48.5%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Password</label>
                                        <input type="text" value={accountInfo?.password} className='border px-4 py-2 rounded-lg'></input>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='mt-4 bg-[#1675FF] w-[48.5%] text-[white] rounded-[.65019rem] py-3 font-[600]'>
                                        Country - State - City
                                    </button>
                                </div>
                                <div className='flex justify-between mt-5'>
                                    <div className='flex flex-col w-[32%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Country</label>
                                        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className='border px-4 py-[11px] rounded-lg'>
                                            <option value=""></option>
                                            {
                                                countryList?.map(country => {
                                                    return <option value={country.country_code}>{country?.country_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='flex flex-col w-[32%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">State</label>
                                        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className='border px-4 py-[11px] rounded-lg'>
                                            {
                                                stateList?.map(state => {
                                                    return <option value={state?.state}>{state?.state?.toUpperCase()}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='flex flex-col w-[32%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">State</label>
                                        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className='border px-4 py-[11px] rounded-lg'>
                                            {
                                                cityList?.map(city => {
                                                    return <option value={city?.code}>{city?.code?.toUpperCase()}</option>
                                                })
                                            }
                                        </select>
                                    </div>


                                </div>

                                <div className='flex justify-between'>
                                    <button className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
                                        API Generator
                                    </button>
                                    <button onClick={() => handleGenerateProxy()} className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
                                        Update Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border py-[0.9rem] rounded-[.74438rem]'>
                        <div className='flex justify-between border-b px-[1.75rem] items-start'>
                            <div className='flex gap-6'>
                                <div className='pb-2 text-[1.2rem] font-[500]'>Proxy</div>
                            </div>
                        </div>
                        <div className='px-[1.5rem] py-[1rem]'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col w-[48.5%]'>
                                    <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Host</label>
                                    <input type="text" value={proxyInfo?.data?.split?.(":")?.[0]} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                                <div className='flex flex-col w-[48.5%]'>
                                    <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Port (HTTP & SOCKS5)</label>
                                    <input type="text" value={proxyInfo?.data?.split?.(":")?.[1]} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                            </div>
                        </div>
                        <div className='px-[1.5rem] py-[0.3rem]'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col w-full'>
                                    <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Rotating Proxy</label>
                                    <input type="text" value={proxyInfo?.data} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                            </div>
                        </div>
                        <div className='mx-[1.5rem] bg-[#FAFAFA] px-[1.2rem] pt-[2.5rem] pb-[1.5rem] rounded-lg border mt-3'>
                            <p className='text-[1.1rem]'>Sticky Sessions ( Session time: {stickyCounter} min )</p>
                            <input value={stickyCounter} onChange={(e) => setStickyCounter(e.target.value)} type="range" className='w-full mt-4' />
                        </div>
                        <div className='mx-[1.5rem] mt-3 flex gap-3 items-center'>
                            <p>Sticky Count:</p>
                            <input value={stickyCount} onChange={(e) => setStickyCount(e.target.value)} type="text" className="border w-[100px] text-[1.2rem] px-4 py-2 rounded-xl" />
                        </div>

                        <div className='mx-[1.5rem] mt-3 flex gap-3 items-center'>
                            <textarea value={proxies} name="" className='border w-full rounded- p-2 text-[0.9rem]' id=""></textarea>
                        </div>
                        <div className='mx-[1.5rem] flex justify-between mt-3 gap-3 items-center'>
                            <button onClick={() => saveAsTxt()} className='text-[#1675FF] font-semibold text-[1.2rem]'>Save as .txt</button>
                            <button onClick={() => copyProxies()} className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
                                Copy Proxies
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GenerateProxy