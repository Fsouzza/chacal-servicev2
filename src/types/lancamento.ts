export type Lancamento = {
  [tag: string]: {
    title: string;
    color: string;
    expense: boolean;
  }
}