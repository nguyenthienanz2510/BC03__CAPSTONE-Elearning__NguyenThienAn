import React from "react";
import FooterLayout from "../components/FooterLayout/FooterLayout";
import HeaderLayout from "../components/HeaderLayout/HeaderLayout";

export default function MainLayout({ Component }) {
  return (
    <div className="min-h-screen">
      <HeaderLayout />
      <Component />
      <FooterLayout />
    </div>
  );
}
