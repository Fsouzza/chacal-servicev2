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
  const entrada = [];
  const saida = [];
  const lista = items;

  for(let i=0; i<lista.length; i++){

    if(lista[i].lancamentos === 'Entrada'){
      entrada.push(lista[i].valor);
    }
    if(lista[i].lancamentos === 'Saída'){
      saida.push(lista[i].valor);
    }
  }

  const valoresEntrada: number[] = entrada;
  const valoresSaida: number[] = saida;
  const meses:string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  const data = {
    labels: meses,
    datasets: [{
      label: 'Saídas',
      data: valoresSaida,
      backgroundColor: 'transparent',
      borderColor: '#f26c6d',
      pointBorderColor: '#f26c6d',
      pointBorderWidth: 4, 
      tension: 0.5
    },
    {
      label: 'Entradas',
      data: valoresEntrada,
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
