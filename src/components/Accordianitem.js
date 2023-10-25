import React, { useState } from "react";

const Accordianitem = ({ num, title, children, currOpen, onOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  const isOpen = num === currOpen;
  const handleToggle = () => {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${isOpen}? "open" :"" `} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default Accordianitem;
