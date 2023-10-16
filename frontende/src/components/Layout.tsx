import React from 'react'
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'
import { Outlet } from 'react-router-dom'


type Props = {}

const Layout = (props: Props) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat font-subset`}>
      <Nav />
      <Header />
      <TopLeftImg />
      <Outlet />
    </div>
  )
}

export default Layout