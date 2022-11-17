export type SelectOption = {
  label: string;
  value?: string | number | undefined;
}

export type SelectProps = {
  placeholder: string;
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}