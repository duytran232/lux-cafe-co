import { motion } from "framer-motion";

const colombiaPattern = /(colombia|colombian|colombiano|colombiana)/i;

function TextReveal({ children, highlightColombia = false }) {
  const words = String(children).split(" ");

  return (
    <span className="text-reveal">
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "");
        const shouldHighlight =
          highlightColombia && colombiaPattern.test(cleanWord);

        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={shouldHighlight ? "brand-colombia" : undefined}>
              {word}
            </span>
            &nbsp;
          </motion.span>
        );
      })}
    </span>
  );
}

export default TextReveal;