import React from 'react'

const Deposit = () => {
    return (
        <div className='bg-[#F4F6F8] w-full'>
            <div className='px-20 pt-5 flex flex-col'>
                <div>
                    <p className='text-[1.375rem] font-[500]'>Deposit Balance</p>
                    <p className='text-[#181818bf] text-[1rem] font-[400]'>Add balance to your account, using cryptocurrency</p>
                </div>

                <div className='bg-white border rounded-[.6rem] w-[40%] mt-6 p-6'>
                    <p className='text-[#18181880] text-[.9375rem] font-[500]'>Enter Topup Amount</p>
                    <input type="number" placeholder='$0' className='px-3 border border-[#1818181a] h-[2.625rem] rounded-xl w-full mt-2' />
                    <button className='w-full rounded-xl text-white bg-[#2FB851] mt-6 h-[42px] text-[1rem] font-[600]'>Add Balance using Cryptocurrency</button>
                    <button className='w-full rounded-xl text-white bg-[#635BFF] mt-2 h-[42px] text-[1rem] font-[600]'>Add Balance using Stripe</button>
                </div>


                <div className='flex  items-center w-[40%] justify-center mt-6'>
                    <img className='h-[3rem]' src="https://lightningproxies.net/assets/images/cryptoMus.svg" alt="" />
                    <span className='ml-2'>|</span>
                    <img className='h-[2.5rem]' src="https://lightningproxies.net/assets/images/stripe_logo.svg" alt="" />
                    <div className='rounded-xl bg-[#635BFF] text-white px-2 py-[1px] text-[0.75rem]'>+5%</div>
                </div>
            </div>
        </div>
    )
}

export default Deposit