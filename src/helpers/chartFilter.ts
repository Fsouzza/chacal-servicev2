import { items } from 'data/itens';
import { dateToString, monthToString } from './dateFilter';

const month = [...items.sort((a,b) => a.date > b.date ? 1 : -1)];

export const DataChartInit = () => {
  const convertMonth = month.map((lancamentos) => monthToString(lancamentos.date));
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



export const Releases = (lancamentos: string) => {
  const stringReleases = month.map((lancamentos) => monthToString(lancamentos.date));
  const newReleases = [...new Set(stringReleases)];
  return newReleases.map((label) => {
    return items
      .filter(item => monthToString(item.date) === label)
      .filter((item) => item.lancamentos === lancamentos)
      .reduce((acc, cur) => acc + cur.valor, 0);
  });
};

export const Balanco = ( lancamentos: string ) => {
  const stringBalanco = month.map((lancamentos) => dateToString(lancamentos.date));
  const newBalanco = [... new Set(stringBalanco)];
  return newBalanco.map((label) => {
    return items
      .filter(item => dateToString(item.date) === label)
      .filter((item) => item.lancamentos === lancamentos)
      .reduce((acc, cur) => acc + cur.valor, 0);
  });
};
