// import { useState } from 'react'
import {Loader, Welcome,Footer, Navbar, Transactions, Services } from './component'


const App = ()=> {

  return (
    <div className="min-h-screen" >
      <div className="gradient-bg-welcome" >
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
