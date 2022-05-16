import React, { useState } from "react";
import Footer from "../Sheard/Footer";
import AbivleAppoinment from "./AbivleAppoinment";
import AppoinmentBanner from "./AppoinmentBanner";

const Apponment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AbivleAppoinment date={date}></AbivleAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Apponment;
