import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AppeaFadeRight = ({
  children,
  className,
  duration = 0.3,
  delay = 0,
  offset = 20,
  triggerOnce = false,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ triggerOnce, threshold });
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (inView) {
      setTrigger(true);
    } else if (!triggerOnce) {
      setTrigger(false);
    }
  }, [inView, triggerOnce]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        {trigger && (
          <motion.div
            className={className}
            initial={{ x: offset, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay, duration } }}
            exit={{ x: offset, opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppeaFadeRight;
