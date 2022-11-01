import * as styled from "./styles";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const arrowIcon = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 3 } },
};

const Hero = () => {
  let { t } = useTranslation();

  return (
    <styled.Hero>
      <styled.Heading>
        <video loop muted autoPlay className="video">
          <source src="videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <styled.Title variants={sentence} initial="hidden" animate="visible">
          <h1>
            {t("common:welcome")
              .split("")
              .map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
          </h1>
          <Link href="#">
            <a>
              {t("common:explore")
                .split("")
                .map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              <motion.span
                variants={arrowIcon}
                initial="hidden"
                animate="visible"
              >
                {" "}
                <styled.ArrowIcon />
              </motion.span>
            </a>
          </Link>
        </styled.Title>
      </styled.Heading>
      <styled.Sliders>
        <styled.SlidersBtns>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </styled.SlidersBtns>
      </styled.Sliders>
    </styled.Hero>
  );
};

export default Hero;
