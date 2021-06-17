import React from "react";
import { useSelector } from "react-redux";

const AppearanceCard = () => {
  const hidden = useSelector((state) => state.settingsPages[0].show);
  return <React.Fragment>{hidden && <div>A</div>}</React.Fragment>;
};

export default AppearanceCard;
