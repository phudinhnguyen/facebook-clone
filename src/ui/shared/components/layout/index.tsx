import React, { useEffect, useState } from "react";
import HeaderComponent from "./Header";
import SiderComponent from "./Sidebar";

const DefaultLayout = (props) => {
  const [toogleSider, setToogleSider] = useState(false);



  const toggle = () => {
    setToogleSider(!toogleSider)
  }

  return (
    <section className="default-layout flex bg-white h-full">
      <SiderComponent toogleSider={toogleSider} />
      <div
        className="site-layout width-area ml-auto overflow-y-scroll">
        <HeaderComponent toggle={toggle} toogleSider={toogleSider} />
        <div className={`main-content-wrapper`}>
          <div className={`wrap-content `}>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;