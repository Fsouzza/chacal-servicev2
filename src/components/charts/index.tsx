import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend, } from 'chart.js';
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
  const departamentos = [];

  for(let i=0; i<lista.length; i++){
    if(lista[i].lancamentos === 'Entrada'){
      vEntrada.push(lista[i].valor);
    }
    if(lista[i].lancamentos === 'Saída'){
      vSaida.push(lista[i].valor);
      departamentos.push(lista[i].departamento);
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

  const data2 = {
    labels: departamentos,
    datasets: [{
      label: 'Administrativo',
      data: vSaida,
      backgroundColor: '#F23D3D',
      borderColor: '#F23D3D',
      borderWidth: 3,
      pointBorderColor: '#F23D3D',
      pointBorderWidth: 4, 
      tension: 0.5,
    }],
  };
  
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Demonstrativo por lançamento',
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
          borderColor: '#262626'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [15],
          borderWidth: 2,
          borderColor: '#262626'
        }
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
      <div className={styles.charts__chartBox}>
        <Bar 
          data={data2} 
          options={options}
        />
      </div>
    </div>
  );

};
