export type Ifilter = {
  opcoes: {label: string; value: number | string}[];
  filter: (React.Dispatch<React.SetStateAction<string>>);
  icon: JSX.Element;
}