import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const GenerateProxy = () => {
    return (
        <div className='bg-[#F4F6F8] w-full'>
            <div className='px-20 pt-5 flex flex-col'>

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
                                        value={0.76}
                                        minValue={0}
                                        maxValue={1}
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
                                        <p className='text-[1.25rem] font-bold'>76%</p>
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
                                            <input type="text" value={0} className='border px-2 py-1 rounded-md'></input>
                                            <p className='absolute bottom-[10%] right-[3%] text-[#2d5897]'>GB</p>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <p>1.2 GB</p>
                                        <p className='mt-5'>3.8 GB</p>

                                        <button className='mt-[42px] bg-[#1675FF] px-4 text-[white] rounded-[.65019rem] p-[.30rem] font-[600]'>Add</button>
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
                                        <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                    </div>
                                    <div className='flex flex-col w-[48.5%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Password</label>
                                        <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
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
                                        <select className='border px-4 py-[11px] rounded-lg'>
                                            <option value="">Germany</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col w-[32%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">State</label>
                                        <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                    </div>
                                    <div className='flex flex-col w-[32%]'>
                                        <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">City</label>
                                        <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <button className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
                                        API Generator
                                    </button>
                                    <button className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
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
                                    <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                                <div className='flex flex-col w-[48.5%]'>
                                    <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Port (HTTP & SOCKS5)</label>
                                    <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                            </div>
                        </div>
                        <div className='px-[1.5rem] py-[0.3rem]'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col w-full'>
                                    <label className='text-[rgba(0,0,0,0.5)]' htmlFor="">Rotating Proxy</label>
                                    <input type="text" value={"skjbdkjskj"} className='border px-4 py-2 rounded-lg'></input>
                                </div>
                            </div>
                        </div>
                        <div className='mx-[1.5rem] bg-[#FAFAFA] px-[1.2rem] pt-[2.5rem] pb-[1.5rem] rounded-lg border mt-3'>
                            <p className='text-[1.1rem]'>Sticky Sessions ( Session time: 22 min )</p>
                            <input type="range" className='w-full mt-4' />
                        </div>
                        <div className='mx-[1.5rem] mt-3 flex gap-3 items-center'>
                            <p>Sticky Count:</p>
                            <input type="text" className="border w-[100px] text-[1.2rem] px-4 py-2 rounded-xl" value={2000} />
                        </div>

                        <div className='mx-[1.5rem] mt-3 flex gap-3 items-center'>
                            <textarea name="" className='border w-full rounded-lg' id=""></textarea>
                        </div>
                        <div className='mx-[1.5rem] flex justify-between mt-3 gap-3 items-center'>
                            <button className='text-[#1675FF] font-semibold text-[1.2rem]'>Save as .txt</button>
                            <button className='mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
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