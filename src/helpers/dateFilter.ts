import { Item } from '../types/item';

export const getCurrentMonth = () =>{
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filterListByMonth = (lista: Item[], date: string): Item[] =>{
  const newList: Item[] = [];
  const [year, month] = date.split('-');

  for(const i in lista){
    if(lista[i].date.getFullYear() === parseInt(year) && (lista[i].date.getMonth() + 1) === parseInt(month)){
      newList.push(lista[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() +1;
  const day = date.getDate();

  return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`;
};

const addZeroDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};