import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import User from "../assets/User.svg"
import ApiService from '../api/apiService';
import { bytesToGB } from '../utils/utils';
const Dashboard = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("sahil12345");
  const [accountInfo, setAccountInfo] = useState(null);
  const [usernameInfo, setUsernameInfo] = useState(null);
  const [error, setError] = useState("");


  const fetchAccountInfo = async () => {
    setError("");
    setAccountInfo(null); 

    try {
      const response = await ApiService.getAccountInfo(username);
      setAccountInfo(response.data.data);
    } catch (err) {
      setError(
        err.response?.data?.error || "An error occurred while fetching account info"
      );
    }
  };
  const fetchUsernameInfo = async () => {
    setError("");
    setAccountInfo(null); 

    try {
      const response = await ApiService.getUsernameInfo(username);
      setUsernameInfo(response.data.data);
    } catch (err) {
      setError(
        err.response?.data?.error || "An error occurred while fetching username info"
      );
    }
  };

  useEffect(()=> {
    fetchAccountInfo()
    fetchUsernameInfo()
  },[])


  return (
    <div className='bg-[#F4F6F8] w-full'>
      <div className='px-20 pt-5 flex flex-col'>

        <div className='flex justify-between items-center'>
          <div>
            <p className='text-[1.375rem] font-[500]'>Welcome user</p>
            <p className='text-[1rem] font-[400] text-[#181818bf]'>Welcome back, we're glad to have you.</p>
          </div>
          <button className='bg-white py-[15px] px-4 border rounded-md'>Please read! <span className='font-semibold'>Read More</span></button>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
          <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
            <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
              <img src="https://lightningproxies.net/assets/images/icons/doller.svg" alt="" />
            </div>
            <div>
              <p className='mt-4 text-[#181818bf] text-[1.125rem] font-[500]'>Active Balance</p>
              <div className='flex justify-between items-center'>
                <p className='text-[1.75rem] font-[600]'>${accountInfo?.balance}</p>
                <button className='bg-[#2fb8511a] border-[0.949px] border-[#2fb851] rounded-[0.59288rem] text-[#2fb851cc] text-[1rem] font-semibold p-[0.5rem_0.62rem] h-[28px] flex items-center hover:bg-[#2fb851cc] hover:text-white'>Add Balance</button>
              </div>
              <div className='flex justify-between items-center border-t border-[#D1E4FF] pt-[1.1rem] mt-[1.1rem]'>
                <p className='text-[16px] font-[500] text-[#181818]'>Total Balance Spent</p>
                <p className='text-[16px] font-[500]'>$50</p>
              </div>
            </div>
          </div>

          <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
            <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
              <img src="https://lightningproxies.net/assets/images/icons/cart.svg" alt="" />
            </div>
            <div>
              <p className='mt-4 text-[#181818bf] text-[1.125rem] font-[500]'>Active Plans</p>
              <div className='flex justify-between items-center'>
                <p className='text-[1.75rem] font-[600]'>1</p>
                <button className='bg-[#1675ff1a] border-[0.949px] border-[#1675ff] rounded-[0.59288rem] text-[#1675ff] text-[1rem] font-semibold p-[0.5rem_0.62rem] h-[28px] flex items-center hover:bg-[#1675ff] hover:text-white'>Purchase Balance</button>
              </div>
              <div className='flex justify-between items-center border-t border-[#D1E4FF] pt-[1.1rem] mt-[1.1rem]'>
                <p className='text-[16px] font-[500] text-[#181818]'>Total Purchase Plans</p>
                <p className='text-[16px] font-[500]'>50</p>
              </div>
            </div>
          </div>

          <div className='bg-white py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
            <div className='flex justify-between'>
              <div>
                <div className="flex items-center justify-center bg-[#0086ff] rounded-lg h-14 w-14 p-[0.7rem]">
                  <img src="https://lightningproxies.net/assets/images/icons/server.svg" alt="" />
                </div>
                <div>
                  <p className='mt-4 text-[#181818bf] text-[1.125rem] font-[500]'>Data Left</p>
                  <div className='flex justify-between items-center'>
                    <p className='text-[1.75rem] font-[600]'>{bytesToGB(usernameInfo?.bandwidthLeft)} GB</p>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ maxWidth: "8.4rem", maxHeight: "8.4rem" }}>
                  <CircularProgressbarWithChildren
                    strokeWidth={12}
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
                        stroke: "rgba(22, 117, 255,0.1)",
                        strokeLinecap: "round",
                      },
                    }}
                  >
                    <p className='text-[1.25rem] font-bold'>{(bytesToGB(usernameInfo?.bandwidthLeft) * 100) / bytesToGB(usernameInfo?.all_buy) }%</p>
                    <p className='text-[1rem] font-[500]'>Data Left</p>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-between items-center border-t border-[#D1E4FF] pt-[1.1rem] mt-[1.1rem]'>
                <p className='text-[16px] font-[500] text-[#181818]'>Total Data Purchased</p>
                <p className='text-[16px] font-[500]'>{bytesToGB(usernameInfo?.all_buy)}GB</p>
              </div>
            </div>
          </div>

          <div className='bg-white flex items-center flex-col pt-[1.75rem] pb-[1rem] px-[1.5rem] rounded-[.74438rem]'>
            <div className="flex items-center justify-center bg-[#0086ff] rounded-[50%] h-[74px] w-[74px] mb-4 p-[0.7rem]">
              <img src={User} className='w-[30px]' alt="" />
            </div>
            <p className='text-[1.30438rem] font-[600]'>user</p>
            <p className='text-[0.91306rem] font-[500] text-[#181818bf]'>{accountInfo?.account}</p>
            <div className='flex gap-2 mt-4'>
              <img src="https://lightningproxies.net/assets/images/icons/g-01.svg" alt="" />
              <img src="https://lightningproxies.net/assets/images/icons/g-02.svg" alt="" />
              <img src="https://lightningproxies.net/assets/images/icons/g-03.svg" alt="" />
              <img src="https://lightningproxies.net/assets/images/icons/g-04.svg" alt="" />
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center mt-6'>
          <div>
            <p className='text-[1.375rem] font-[500]'>Your Active Plans</p>
            <p className='text-[1rem] font-[400] text-[#181818bf]'>Generate proxies with just a click of a button</p>
          </div>
        </div>


        <div className='mt-6'>
          <div className='flex flex-col gap-4 bg-white w-[48.5%] py-[1.75rem] px-[1.5rem] rounded-[.74438rem]'>
            <div className='flex gap-4'>
              <div style={{ maxWidth: "6rem", maxHeight: "8.4rem" }}>
                <CircularProgressbarWithChildren
                  strokeWidth={12}
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
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <p className='text-[1.25rem]  font-[500]'>Residential 5GB</p>
                  <p className='text-[1.25rem]  font-[500]'>5 GB</p>
                </div>
                <p className='text-[0.8rem] text-[rgba(0,0,0,0.5)] w-[95.5%]'>Ideal proxies for any use case & purpose. By accessing our 10M+ IP pool non-submit linked, bans and block are non-existent</p>
              </div>
            </div>

            <div className='border-t border-[#D1E4FF] pt-3 flex justify-between flex-wrap items-center'>
              <div className='flex flex-col'>
                <p className='text-[1rem] font-[400]'>Plan ID</p>
                <p className='text-[1rem] font-[600]'>5d6s56d5s6d5sd2s6ds6</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-[1rem] font-[400]'>Data Left</p>
                <p className='text-[1rem] font-[600]'>3.79 GB / 5 GB</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-[1rem] font-[400]'>Expires</p>
                <p className='text-[1rem] font-[600]'>31 Oca 2025</p>
              </div>
              <div>
                <button onClick={()=> navigate("/generate-proxy")} className='bg-[#1675ff1a] border-[1.5px] border-[#1675ff] rounded-[0.59288rem] text-[#1675ff] text-[1rem] font-semibold p-[0.5rem_0.62rem] h-[28px] flex items-center hover:bg-[#1675ff] hover:text-white'>Generate Proxy</button>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard