import styles from '../buscador/buscador.module.scss';
import { ReactNode } from 'react';
import { HiOutlineAdjustments } from 'react-icons/hi';


interface Props {
  filter: (e: ReactNode) => void
}

export const FiltroData = ({ filter }: Props) => {
  const dateValues = [
    {
      'label': 'Filtro por data',
      'value' : -1
    },
    {
      'label': '7 dias',
      'value' : 7
    },
    {
      'label': '15 dias',
      'value' : 15
    },
    {
      'label': '30 dias',
      'value' : 30
    },
    {
      'label': 'Hoje',
      'value' : 0
    },
  ];

  return(
    <>
      <div className={styles.tags__tag}>
        <select onChange={(e) => filter(e.currentTarget.value)} className={styles.tags__select}>
          {dateValues.map( (item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
        <span>< HiOutlineAdjustments size={20} color='#898989' /></span>
      </div>
    </>
  );
};