import { AnimatePresence, motion } from "framer-motion";

const AppearZoomIn = ({
  children,
  className,
  trigger = true,
  duration = 0.3,
  delay = 0,
  scaleStart = 0.5,
}) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className={className}
          initial={{ opacity: 0, scale: scaleStart }}
          animate={{ opacity: 1, scale: 1, transition: { delay } }}
          exit={{ opacity: 0, scale: scaleStart }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppearZoomIn;
