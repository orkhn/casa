import * as styled from "./styles";
import Link from "next/link";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <styled.GalleryContainer>
      <styled.SliderArea>
        <styled.Slider>
          <button className="UpBtn btn">&#8593;</button>
          <span>Discover Ways of Culture</span>
          <button className="UpBtn btn">&#8595;</button>
        </styled.Slider>
      </styled.SliderArea>
      <styled.GalleryArea>
        <div className="content"></div>
      </styled.GalleryArea>
    </styled.GalleryContainer>
  );
};

export default Gallery;
