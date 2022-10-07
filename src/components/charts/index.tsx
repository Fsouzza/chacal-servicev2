import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import styles from './charts.module.scss';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export const MyChart = () => {

  const valoresEntrada: number[] = [84,92,135,459,69,23];
  const valoresSaida: number[] = [224, 194, 69, 432, 433, 555];
  const meses:string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  const data = {
    labels: meses,
    datasets: [{
      label: 'Saídas',
      data: valoresEntrada,
      backgroundColor: 'transparent',
      borderColor: '#f26c6d',
      pointBorderColor: '#f26c6d',
      pointBorderWidth: 4, 
      tension: 0.5
    },
    {
      label: 'Entradas',
      data: valoresSaida,
      backgroundColor: 'transparent',
      borderColor: '#038C3E',
      pointBorderColor: '#038C3E',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const options = {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [10]
        }
      }
    } 
  };

  return(
    <div className={styles.chart}>
      <Line
        data={data} 
        options={options}
      />
    </div>
  );

};
