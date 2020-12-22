
import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(import('common/components/Footer'));
const Sidebar = dynamic(import('../../components/Sidebar'));

export default function Promotions() {

  return (
    <div>
      <Sidebar/>
      <div>
        <p>Promotions</p>
      </div>
      <Footer/>
    </div>
  )

}
