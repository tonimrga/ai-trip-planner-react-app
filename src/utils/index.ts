export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const getCurrentDate = (): string => {
  return new Date().toJSON().slice(0, 10);
};

export const getMaximumEndDateValue = (
  startDate: string
): string | undefined => {
  try {
    const date = new Date(startDate);
    date.setDate(date.getDate() + 30);
    return date.toJSON().slice(0, 10);
  } catch {
    return;
  }
};

export const formatDate = (dateString: string): string => {
  return dateString.slice(0, 10);
};
