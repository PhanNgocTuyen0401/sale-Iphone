import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png"
import Profile from "../../assets/imgs/profile.png"
import Enter from "../../assets/imgs/enter.svg"
import Logout from "../../assets/imgs/logout.png"
import { Popover } from "antd"; //Thanh sổ user

const Navbar = () => {
  const renderContent = () => {
    return(
      <div>
        <p className="font-bold text-[18px] text-cyan-900">Tẻn Tẻn</p>
        <div className="flex gap-1 mt-4 bg-green-300 rounded-lg p-3 py-2 hover:bg-green-200 cursor-pointer">
          <img src={Logout} alt="" width={20} height={16} />
          <p>Cút</p>
          <p>OK</p>
          <p>HUHU</p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-between px-4 bg-[#219ebc] py-2">
      <div className="flex">
        <NavLink to="/" className="w-12 h-12 rounded-[50%]">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="flex justify-start gap-4 ml-12 mt-[10px]">
          <NavLink to="/">
            <p className="font-bold text-white hover:text-emerald-200">Trang chủ</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="font-bold text-white  hover:text-emerald-200">Liên hệ</p>
          </NavLink>
        </div>
      </div>
      <Popover placement="bottom" content={renderContent} >
        <div className="w-12 h-12 rounded-[50%] cursor-pointer">
          <img src={Profile} alt="" />
        </div>
      </Popover>
    </div>
  )
}

export default Navbar;