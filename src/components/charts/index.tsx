import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  Legend } from 'chart.js';
import styles from './charts.module.scss';
import { items } from 'data/itens';
import { dateToString } from 'helpers/dateFilter';

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
);

export const MyChart = () => {
  const meses = [...items.sort((a,b) => a.date > b.date ? 1 : -1).map((lancamentos) => dateToString(lancamentos.date))];
  const listaMeses = [... new Set(meses)];
  const incomes = balanco('Entrada');
  const expanses = balanco('Saída');

  function balanco(lancamentos: string){
    return listaMeses.map((label) => {
      return items
        .filter(item => dateToString(item.date) === label)
        .filter((item) => item.lancamentos === lancamentos)
        .reduce((acc, cur) => acc + cur.valor, 0);
    });
  }

  const data = {
    labels: listaMeses,
    datasets: [
      {
        label: 'Entradas',
        data: incomes,
        backgroundColor: '#038C3E',
        borderColor: '#038C3E',
        pointBackgroundColor: '#038C3E',
        borderWidth: 2.4,
        pointBorderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Saídas',
        data: expanses,
        backgroundColor: '#F23D3D',
        borderColor: '#F23D3D',
        borderWidth: 2.4,
        pointBackgroundColor: '#F23D3D',
        pointBorderWidth: 2, 
        tension: 0.4,
      }
    ]
  };
  
  const options = {
    radius: 0,
    hitRadius: 10,
    hoverRadius: 7,
    hoverBackgroundColor: '#2b2c2f',
    hoverBorderWidth: 3,
    maintainAspectRatio: false,
    options: {
      interaction: {
        mode: 'index',
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        usePointStyle: true,
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
          borderDash: [40],
          borderWidth: 2,
          borderColor: '#4b4b4b'
        },
        ticks: {
          stepSize: 75,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value: any ) => value + ' R$'
        },
      }
    },
  };

  return(
    <div className={styles.charts}>
      <div className={styles.charts__chartBox}>
        <div className={styles.charts__titulo}>
          <h2>Demonstrativo de lançamentos</h2>
        </div>
        <Line
          data={data} 
          options={options}
        />
      </div>
    </div>
  );
};
