import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppearFadeLeft = ({
  children,
  className,
  duration = 0.3,
  delay = 0,
  offset = 20,
  triggerOnce = false,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ triggerOnce, threshold });

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        initial={{ x: -offset, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay, duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AppearFadeLeft;
