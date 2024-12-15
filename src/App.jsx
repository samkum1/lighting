import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Deposit from './Components/Deposit'
import GenerateProxy from './Components/GenerateProxy'
import PurchasePlan from './Components/PurchasePlan'
import Checkout from './Components/Checkout'

const App = () => {
  return (
    <div className='flex'>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/deposit-balance" element={<Deposit />} />
          <Route path="/generate-proxy" element={<GenerateProxy />} />
          <Route path="/purchase-plan" element={<PurchasePlan />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App