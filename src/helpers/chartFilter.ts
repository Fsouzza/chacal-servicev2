import { items } from 'data/itens';
import { dateToString, monthToString } from './dateFormat';

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

export const filterTableByDateTags = (date: number) => {
  const newDate = new Date();
  const dayStart = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
  const dayEnd = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - date);
  const dateFiltered = items.filter((item) => item.date).filter(item => item.date >= dayEnd && item.date <= dayStart);
  return dateFiltered;
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

export const DataChartFilter = (date: number) => {
  const newListYear = ParamsYear(date);
  const yearFiltered = [...new Set(newListYear)];
  return yearFiltered;
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