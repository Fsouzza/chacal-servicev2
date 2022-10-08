import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Title } from 'chart.js';
import styles from './charts.module.scss';
import { items } from 'data/itens';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);


export const MyChart = () => {
  const lista = items;
  const vEntrada = [];
  const vSaida = [];
  const meses = [new Date('01-01-2022').getMonth() +1, 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'nov', 'dez'];

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
      borderColor: '#F23D3D',
      borderWidth: 3,
      pointBorderColor: '#F23D3D',
      pointBorderWidth: 4, 
      tension: 0.5,
    },
    {
      label: 'Entradas',
      data: vEntrada,
      backgroundColor: 'transparent',
      borderColor: '#038C3E',
      pointBorderColor: '#038C3E',
      borderWidth: 3,
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          borderWidth: 2,
          borderColor: '#262626'
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          borderDash: [15],
          borderWidth: 2,
          borderColor: '#262626'
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
