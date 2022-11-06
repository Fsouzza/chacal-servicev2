import { items } from 'data/itens';
import { dateToString, monthToString } from './dateFilter';

const month = [...items.sort((a,b) => a.date > b.date ? 1 : -1)];
const stringFormat = month.map((lancamentos) => monthToString(lancamentos.date));
const ParamsYear = (date: number) => {
  const monthStart = (new Date(2022 + date, 0, 1));
  const monthEnd = new Date(2022 + date, 12, 0);
  const filterByYear = [...month.filter((item) => item.date).filter(item => item.date >= monthStart && item.date <= monthEnd)];
  const yearToString = filterByYear.map((lancamentos) => dateToString(lancamentos.date));
  return yearToString;
};

export const DataChartInit = () => {
  const newListMonth = [...new Set(stringFormat)];
  return newListMonth;
};

export const DataChartFilter = (date: number) => {
  const newListYear = ParamsYear(date);
  const yearFiltered = [...new Set(newListYear)];
  return yearFiltered;
};

export const Releases = (lancamentos: string) => {
  const newReleases = [...new Set(stringFormat)];
  return newReleases.map((label) => {
    return items
      .filter(item => monthToString(item.date) === label)
      .filter((item) => item.lancamentos === lancamentos)
      .reduce((acc, cur) => acc + cur.valor, 0);
  });
};

export const ReleasesFiltered = (date: number, lancamentos: string ) => {
  const newReleasesFilter = ParamsYear(date);
  const yearFiltered = [... new Set(newReleasesFilter)];
  return yearFiltered.map((label) => {
    return items
      .filter(item => dateToString(item.date) === label)
      .filter((item) => item.lancamentos === lancamentos)
      .reduce((acc, cur) => acc + cur.valor, 0);
  });
};