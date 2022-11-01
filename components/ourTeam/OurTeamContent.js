import * as styled from "./styles";
import useTranslation from "next-translate/useTranslation";
import AnimatedCharacters from "components/about/MovingLetters";

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
};

const OurTeamContent = () => {
  let { t } = useTranslation();
  const placeholderText = [
    { type: "heading", text: t("common:titles.OurTeam") },
  ];

  return (
    <styled.OurTeam>
      <styled.Title variants={container} initial="hidden" animate="visible">
        {placeholderText.map((char, index) => {
          return <AnimatedCharacters {...char} key={index} />;
        })}
      </styled.Title>
    </styled.OurTeam>
  );
};

export default OurTeamContent;
