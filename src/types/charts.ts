export type Ichart = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
    borderWidth: number;
    pointBorderWidth: number;
    tension: number;
  }[]
}