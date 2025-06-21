import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppearFadeRight = ({
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
    <motion.div
      ref={ref}
      className={className}
      initial={{ x: offset, opacity: 0 }}
      animate={{
        x: inView ? 0 : offset,
        opacity: inView ? 1 : 0,
        transition: { delay, duration },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AppearFadeRight;
