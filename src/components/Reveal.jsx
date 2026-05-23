import { motion } from "framer-motion";

function Reveal({ children, delay = 0, variant = "up" }) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    left: {
      hidden: { opacity: 0, x: -46, filter: "blur(10px)" },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    right: {
      hidden: { opacity: 0, x: 46, filter: "blur(10px)" },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.94, filter: "blur(12px)" },
      visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;