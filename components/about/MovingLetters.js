import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return (
    <span className="word-wrapper" style={{ whiteSpace: "nowrap" }}>
      {props.children}
    </span>
  );
};

const AnimatedCharacters = (props) => {
  const letter = {
    hidden: {
      opacity: 0,
      y: "150%",
      rotate: 6,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index} variants={letter}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </>
  );
};

export default AnimatedCharacters;
