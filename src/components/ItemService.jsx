import Icon from "../assets/icons/icon_search.png";

import React from "react";

export default function item() {
  return (
    <div className="w-[350px] h-[354px] rounded-[20px] shadow-xl drop-shadow-xl px-12 py-[72px] flex flex-col justify-between">
      <div>
        <img src={Icon} alt="" />
      </div>
      <h3 className="text-[24px] font-bold">Search doctor</h3>
      <p className="text-[16px] text-text">
        Choose your doctor from thousands of specialist, general, and trusted
        hospitals
      </p>
    </div>
  );
}
