export const className = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
