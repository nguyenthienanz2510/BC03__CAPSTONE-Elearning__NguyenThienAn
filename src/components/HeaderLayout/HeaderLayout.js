import React from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import UserNav from "./UserNav";
import { Link } from "react-scroll";

export default function HeaderLayout() {
  return (
    <div className="h-16 w-full flex items-center justify-between shadow-lg fixed top-0 left-0 z-50 bg-white">
      <NavLink to={"/"}>
        <div className="flex">
          <img src="/cybersoftlogo.png" alt="logo" className="mx-3 h-14" />
        </div>
      </NavLink>

      <div className="space-x-5 text-base hidden md:block">
        <Link
          activeClass="active"
          className="test1"
          to="MovieCarousel"
          spy={true}
          smooth={true}
          duration={500}
        >
          <NavLink to={"/"}>
            <a className="hover:text-primary">Danh sách khóa học</a>
          </NavLink>
        </Link>
      </div>
      <MobileMenu />
      <div style={{ minWidth: 200 }} className="hidden md:flex md:justify-end">
        <UserNav />
      </div>
    </div>
  );
}
