import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import styles from './charts.module.scss';
import { items } from 'data/itens';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);


export const MyChart = () => {
  const lista = items;
  const vEntrada = [];
  const vSaida = [];
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'nov', 'dez'];

  for(let i=0; i<lista.length; i++){
    if(lista[i].lancamentos === 'Entrada'){
      vEntrada.push(lista[i].valor);
    }
    if(lista[i].lancamentos === 'Saída'){
      vSaida.push(lista[i].valor);
    }
  }

  const data = {
    labels: meses,
    datasets: [{
      label: 'Saídas',
      data: vSaida,
      backgroundColor: 'transparent',
      borderColor: '#f26c6d',
      pointBorderColor: '#f26c6d',
      pointBorderWidth: 4, 
      tension: 0.5
    },
    {
      label: 'Entradas',
      data: vEntrada,
      backgroundColor: 'transparent',
      borderColor: '#038C3E',
      pointBorderColor: '#038C3E',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [10],
          borderWidthColor: '#038C3E'
        }
      }
    },
  };

  return(
    <div className={styles.chartBox}>
      <Line
        data={data} 
        options={options}
      />
    </div>
  );

};
