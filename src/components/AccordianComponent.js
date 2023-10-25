import React, { useState } from "react";
import "./Accordian.css";
import Accordianitem from "./Accordianitem";

const AccordianComponent = ({ data }) => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <Accordianitem
          currOpen={currOpen}
          title={el.title}
          num={index}
          onOpen={setCurrOpen}
        >
          {el.text}
        </Accordianitem>
      ))}
    </div>
  );
};

export default AccordianComponent;
