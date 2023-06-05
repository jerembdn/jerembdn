export const getAge = (date: Date) => {
  const diff = Date.now() - date.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
