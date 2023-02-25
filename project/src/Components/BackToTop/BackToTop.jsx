import React, { useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const [show, setShow] = useState(true);
  if (window.pageYOffset > 100) {
    setShow(true);
  }
  return (
    <>
      {show && (
        <button
          style={{
            position: "absolute",
            right: "20px",
            marginTop: "-5rem",
            padding: "1rem",
            background: "rgba(142,145,146,.7)",
            zIndex: "100",
            borderRadius: "100%",
            border: " 1px solid black",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <HiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
