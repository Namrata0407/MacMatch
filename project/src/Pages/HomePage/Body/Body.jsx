import React from "react";
import Carousel from "../Carousels/Carousels";
import {Carousels2} from "../Carousels2/Carousels2";
import Iphone14 from "../Iphone14/Iphone14";
import Iphone14pro from "../Iphone14pro/Iphone14pro";
import Specials from "../Specials/Specials";
import TwoImages from "../TwoImages/TwoImages";
import TwoImages2 from "../TwoImages2/TwoImages2";
import TwoImages3 from "../TwoImages3/TwoImages3";
import Video from "../Video/Video";


const Body = () => {
  return (
    <div>
      <Iphone14pro />
      <Iphone14 />
      <Video/>
      <TwoImages/>
      <TwoImages2/>
      <TwoImages3/>
      <Specials/>
      <Carousels2/>
      <Carousel/>
    </div>
  );
};

export default Body;
