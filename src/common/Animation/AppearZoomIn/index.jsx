import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppearZoomIn = ({
  children,
  className,
  duration = 0.3,
  delay = 0,
  scaleStart = 0.5,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold });

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key={`zoom-${inView}-${Date.now()}`}
            className={className}
            initial={{ opacity: 0, scale: scaleStart }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay, duration },
            }}
            exit={{
              opacity: 0,
              scale: scaleStart,
              transition: { duration: duration + 0.1 },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppearZoomIn;
