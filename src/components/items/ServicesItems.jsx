import Icon from "../../assets/icons/icon_search.png";

import React from "react";

export default function item({ img, subtile, p }) {
  return (
    <div className="w-[350px] h-[354px] rounded-[20px] shadow-xl drop-shadow-xl px-12 py-[40px] flex flex-col justify-between bg-white cursor-pointer hover:border-2 hover:border-textButton">
      <div>
        <img src={img} alt="" />
      </div>
      <h3 className="text-[24px] font-bold">{subtile}</h3>
      <p className="text-[16px] text-text">{p}</p>
    </div>
  );
}
