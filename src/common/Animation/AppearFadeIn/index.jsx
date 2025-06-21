import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AppearFadeIn = ({
  children,
  className,
  duration = 0.5,
  delay = 0,
  direction = "bottom",
  offset = 20,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold });
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimKey((prev) => prev + 1);
    }
  }, [inView]);

  const getInitial = () => {
    switch (direction) {
      case "top":
        return { y: -offset, opacity: 0 };
      case "bottom":
        return { y: offset, opacity: 0 };
      case "left":
        return { x: -offset, opacity: 0 };
      case "right":
        return { x: offset, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div ref={ref}>
      {inView && (
        <motion.div
          key={animKey}
          className={className}
          initial={getInitial()}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration, delay, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default AppearFadeIn;
