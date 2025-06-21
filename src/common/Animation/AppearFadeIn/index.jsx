import { AnimatePresence, motion } from "framer-motion";

const AppearFadeIn = ({
  children,
  className,
  trigger = true,
  duration = 0.3,
  delay = 0,
  direction,
  offset = 10,
}) => {
  const getInitialPosition = () => {
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
    <AnimatePresence>
      {trigger && (
        <motion.div
          className={className}
          initial={getInitialPosition()}
          animate={{ x: 0, y: 0, opacity: 1, transition: { delay } }}
          exit={{ x: 0, y: 0, opacity: 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppearFadeIn;
