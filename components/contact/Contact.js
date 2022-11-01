import * as styled from "./styles";
import useTranslation from "next-translate/useTranslation";
import AnimatedCharacters from "components/about/MovingLetters";

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
};

const ContactSection = () => {
  let { t } = useTranslation();
  const placeholderText = [
    { type: "heading", text: t("common:titles.Contact") },
  ];

  return (
    <styled.Contact>
      <styled.ContactTitle
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {placeholderText.map((char, index) => {
          return <AnimatedCharacters {...char} key={index} />;
        })}
      </styled.ContactTitle>
    </styled.Contact>
  );
};

export default ContactSection;
