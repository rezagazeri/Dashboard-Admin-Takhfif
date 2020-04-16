import React, { Fragment } from "react";

import DefaultHeader from "./DefaualtHeader/DefaultHeader";
import DefaultAside from "./DefaultAside/DefaualtAside";
import DefaultFooter from "./DefaualtFooter/DeafaultFooter";
import sidebarMenuItems from "./../../sidebarMenuItems";

const DefaultLayout = (props) => {
  return (
    <div className="container">
      <DefaultAside NavItems={sidebarMenuItems} />
      <div className="content">
        {/* <DefaultHeader /> */}
        {/* <h2>محتویات</h2>
        <div class="line"></div> */}
      </div>
    </div>
  );
};
export default DefaultLayout;
