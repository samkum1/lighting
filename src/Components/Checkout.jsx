
import { useNavigate } from "react-router-dom"
import CheckIcon from "../assets/Check.svg"
const Checkout = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#F4F6F8] w-full'>
            <div className='px-20 pt-5 flex items-center mt-10 flex-col'>

                <p className="text-[1.5rem]">Checkout</p>
                <p className="text-[rgba(0,0,0,0.6)] font-semibold">Proceed to pay from your selected plan</p>

                <div className='border w-[40%] bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem] mt-5'>

                    <div className="flex justify-center border-b pb-2 border-[rgba(22,117,255,0.4)]">
                        <p className="text-[1.5rem]">Residential <span className="text-[#1675FF] font-semibold">1GB</span></p>
                    </div>

                    <p className="text-center text-[rgba(0,0,0,0.5)] text-[0.9rem] py-3 border-b border-[rgba(22,117,255,0.4)]">
                        Ideal proxies for any use case & purpose. By accessing our 10M+ IP pool non-subnet linked, bans and blocks are non-existent.
                    </p>

                    <div className="py-3">
                        <div className="flex justify-between py-1">
                            <p className="text-[rgba(0,0,0,0.5)] text-[1.1rem]">Bandwidth</p>
                            <p className="text-[1.1rem] font-semibold">1 GB</p>
                        </div>
                        <div className="flex justify-between py-1">
                            <p className="text-[rgba(0,0,0,0.5)] text-[1.1rem]">Proxy Type</p>
                            <p className="text-[1.1rem] font-semibold">Residential</p>
                        </div>
                        <div className="flex justify-between py-1">
                            <p className="text-[rgba(0,0,0,0.5)] text-[1.1rem]">Duration</p>
                            <p className="text-[1.1rem] font-semibold">3 Months</p>
                        </div>
                        <div className="flex justify-between py-1">
                            <p className="text-[rgba(0,0,0,0.5)] text-[1.1rem]">Threads</p>
                            <p className="text-[1.1rem] font-semibold">Unlimited</p>
                        </div>
                    </div>

                    <div className="py-3">
                        <p className="text-[rgba(0,0,0,0.5)] font-semibold">Coupon code (Optional)</p>
                        <div className='relative mt-1'>
                            <input type="text" placeholder="Enter coupon code" className='border px-3 py-3 font-semibold w-full rounded-xl'></input>
                            <p className='absolute bottom-[25%] font-semibold right-[3%] text-[#1675FF]'>APPLY</p>
                        </div>
                    </div>

                    <div className="py-3 flex items-center gap-1 text-[1.1rem]">
                        <p className="font-[400]">Payment Method :</p>
                        <input type="radio" name="" id="" checked={true} />
                        <p className="font-[400]">Balance</p>
                    </div>

                    <div className="flex items-center justify-between border-t pt-5 mt-2 border-[rgba(22,117,255,0.4)]">
                        <p className="flex items-baseline"> <span className="text-[1rem]">Total:</span> <span className="text-[#1675FF] text-[1.5rem] font-bold ml-1">$</span> <span className="text-[1.5rem]">4.50</span></p>

                        <button onClick={navigate("/checkout")} className=' bg-[#1675FF] px-[125px] text-[white] rounded-[.65019rem] py-3 font-[600]'>
                            Pay
                        </button>
                    </div>
                </div>

                <div className='flex  items-center w-[40%] justify-center mt-6'>
                        <img className='h-[3rem]' src="https://lightningproxies.net/assets/images/cryptoMus.svg" alt="" />
                        <span className='ml-2'>|</span>
                        <img className='h-[2.5rem]' src="https://lightningproxies.net/assets/images/stripe_logo.svg" alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Checkout