import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend } from 'chart.js';
import styles from './charts.module.scss';
import { items } from 'data/itens';

ChartJS.register(
  BarElement,
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
  const meses = [ 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  for(let i=0; i<lista.length; i++){
    if(lista[i].lancamentos === 'Entrada'){
      vEntrada.push(lista[i].valor);
    } else {
      vSaida.push(lista[i].valor);
    }
  }

  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Entradas',
        data: vEntrada,
        backgroundColor: 'transparent',
        borderColor: '#038C3E',
        pointBackgroundColor: '#038C3E',
        borderWidth: 2.4,
        pointBorderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Saídas',
        data: vSaida,
        backgroundColor: 'transparent',
        borderColor: '#F23D3D',
        borderWidth: 2.4,
        pointBackgroundColor: '#F23D3D',
        pointBorderWidth: 2, 
        tension: 0.4,
      }
    ]
  };
  
  const options = {
    radius: 3,
    hitRadius: 30,
    hoverRadius: 5,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Demonstrativo por Lançamento',
        font: {
          size: 24
        },
        align: 'center' as const,
        padding: {
          bottom: 20,
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderWidth: 2,
          borderColor: '#4b4b4b'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [15],
          borderWidth: 2,
          borderColor: '#4b4b4b'
        },
        ticks: {
          stepSize: 75
        },
      }
    },
  };

  return(
    <div className={styles.charts}>
      <div className={styles.charts__chartBox}>
        <Line
          data={data} 
          options={options}
        />
      </div>
    </div>
  );
};
