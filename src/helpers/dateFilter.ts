export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() +1;
  const day = date.getDate();

  return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`;
};

const addZeroDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month) -1, parseInt(day));
};

export const dateToString = (time: Date) => {
  return new Date(time).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'short',
  }).toUpperCase();
};