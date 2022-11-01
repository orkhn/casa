import * as styled from "./styles";
import Gallery from "./Gallery";
import useTranslation from "next-translate/useTranslation";
import AnimatedCharacters from "./MovingLetters";

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
};

const AboutContent = () => {
  let { t } = useTranslation();
  const placeholderText = [
    { type: "heading", text: t("common:titles.aboutPage") },
  ];

  return (
    <styled.AboutContent>
      <styled.AboutTitle
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {placeholderText.map((char, index) => {
          return <AnimatedCharacters {...char} key={index} />;
        })}
      </styled.AboutTitle>
      <div className="content">
        <styled.InfoSection>
          <p>{t("common:aboutCompany.firstParagraph")}</p>
          <p>{t("common:aboutCompany.secondParagraph")}</p>
          <p>{t("common:aboutCompany.thirdParagraph")}</p>
          <p>{t("common:aboutCompany.forthParagraph")}</p>
        </styled.InfoSection>
        <styled.GallerySection>
          <Gallery />
        </styled.GallerySection>
      </div>
    </styled.AboutContent>
  );
};

export default AboutContent;
