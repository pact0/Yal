import React from "react";
import { useSelector } from "react-redux";

const AnaliticsCard = () => {
  const hidden = useSelector((state) => state.settingsPages[3].show);
  return <React.Fragment>{hidden && <div>D</div>}</React.Fragment>;
};

export default AnaliticsCard;
