import { ReactNode } from 'react';

export type Iopcoes = {
  opcoes: {label: string; value: number | string}[];
  filter: React.Dispatch<React.SetStateAction<string>>;
  icon: ReactNode;
}