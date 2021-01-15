export const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  card: {
    initial: {
      opacity: 0,
      x: -50,
    },

    animate: {
      opacity: 1,
      x: 0,
    },
    exit: { opacity: 0 },
  },
};
