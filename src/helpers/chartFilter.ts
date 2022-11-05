import { items } from 'data/itens';
import { dateToString } from './dateFilter';

const month = [...items.sort((a,b) => a.date > b.date ? 1 : -1)];

export const DataChartInit = () => {
  const convertMonth = month.map((lancamentos) => dateToString(lancamentos.date));
  const monthFormat = [...new Set(convertMonth)];
  
  return monthFormat;
};

export const DataChartFilter = (date: number) => {
  const monthStart = (new Date(2022 + date, 0, 1));
  const monthEnd = new Date(2022 + date, 12, 0);
  const filterByYear = [...month.filter((item) => item.date).filter(item => item.date >= monthStart && item.date <= monthEnd)];
  const yearToString = filterByYear.map((lancamentos) => dateToString(lancamentos.date));
  const yearFiltered = [...new Set(yearToString)];

  return yearFiltered;
};