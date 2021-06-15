import React from "react";
import { useSelector } from "react-redux";

const AppearanceCard = () => {
  const hidden = useSelector((state) => state.settingsPages[0].show);
  return <div>{hidden && <div>A</div>}</div>;
};

export default AppearanceCard;
