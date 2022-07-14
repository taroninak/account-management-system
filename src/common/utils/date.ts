export const getStartOfDay = (day?: Date) => {
  const today = day ? new Date(day) : new Date();
  today.setUTCHours(0, 0, 0, 0);
  return today;
};

export const getEndOfDay = (day?: Date) => {
  const today = day ? new Date(day) : new Date();
  today.setUTCHours(23, 59, 59, 59);
  return today;
};
