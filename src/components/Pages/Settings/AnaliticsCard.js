import React from "react";
import { useSelector } from "react-redux";

const AnaliticsCard = () => {
  const hidden = useSelector((state) => state.settingsPages[3].show);
  return <div>{hidden && <div>D</div>}</div>;
};

export default AnaliticsCard;
