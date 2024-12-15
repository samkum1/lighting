
import { useNavigate } from "react-router-dom"
import CheckIcon from "../assets/Check.svg"
const PurchasePlan = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#F4F6F8] w-full'>
            <div className='px-20 pt-5 flex flex-col'>

                <div className='border w-[30%] bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>

                    <div className="flex justify-between border-b pb-2 border-[rgba(22,117,255,0.4)]">
                        <p className="text-[1.5rem]">Residential <span className="text-[#1675FF] font-semibold">1GB</span></p>
                        <p className="flex items-start"> <span className="text-[#1675FF] text-[1.1rem] font-bold">$</span> <span className="text-[1.5rem]">4.50</span></p>
                    </div>

                    <p className="text-[rgba(0,0,0,0.5)] text-[0.9rem] py-3 border-b border-[rgba(22,117,255,0.4)]">
                        Ideal proxies for any use case & purpose. By accessing our 10M+ IP pool non-subnet linked, bans and blocks are non-existent.
                    </p>

                    <div className="py-3">
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> 10M+ Real Residential Peers</p>
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> IP & User:Pass Authentication</p>
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> Country, State, City & ISP Targeting</p>
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> Rotating & Sticky Sessions</p>
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> Unlimited Concurrent Connections</p>
                        <p className="py-1 flex gap-2 text-[0.9rem]"> <img src={CheckIcon} className="w-[20px]" alt="" /> HTTP/SOCKS5 Protocol Supported</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <button onClick={()=> navigate("/checkout")} className='w-full mt-4 bg-[#1675FF] px-10 text-[white] rounded-[.65019rem] py-3 font-[600]'>
                            Purchase Plan
                        </button>

                        <p className="text-[rgba(0,0,0,0.5)] mt-3 text-[1.1rem]">Terms and conditions apply</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PurchasePlan