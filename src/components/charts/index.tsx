import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, 
  PointElement, LineElement, Tooltip, BarElement, Legend } from 'chart.js';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import styles from './charts.module.scss';
import styles2 from '../filter/filter.module.scss';
import { DataChartFilter, DataChartInit, Releases, ReleasesFiltered, } from 'helpers/chartFilter';

ChartJS.register( BarElement, LineElement, CategoryScale,
  LinearScale, PointElement, Legend, Tooltip,
);

const MyChart = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [incomes, setIncomes] = useState<number[] | undefined>();
  const [expanses, setExpanses] = useState<number[]>();
  const yearOptions = [
    {
      label: 'Filtros por ano',
      value: -1
    },
    {
      label: 'Jan 2022 a Dez 2022',
      value: 0
    },
    {
      label: 'Jan 2023 a Dez 2023',
      value: 1
    },
    {
      label: 'Jan 2024 a Dez 2024',
      value: 2
    }
  ];

  function filterChartByYear(date: number) {
    const ChartByYear = DataChartFilter(date);
    
    if(date < 0){
      setLabels(DataChartInit);
      setIncomes(Releases('Entrada'));
      setExpanses(Releases('Saída'));
    } else {
      setLabels(ChartByYear);
      setIncomes(ReleasesFiltered(date, 'Entrada'));
      setExpanses(ReleasesFiltered(date, 'Saída'));
    }
  }

  useEffect(() => {
    setLabels(DataChartInit);
    setIncomes(Releases('Entrada'));
    setExpanses(Releases('Saída'));
  }, []);

  const data = {
    labels:  labels,
    datasets: [
      {
        label: 'Entradas',
        data: incomes,
        backgroundColor: '#038C3E',
        borderColor: '#038C3E',
        pointBackgroundColor: '#038C3E',
        borderWidth: 2.4,
        pointBorderWidth: 2,
        tension: 0.3
      },
      {
        label: 'Saídas',
        data: expanses,
        backgroundColor: '#F23D3D',
        borderColor: '#F23D3D',
        borderWidth: 2.4,
        pointBackgroundColor: '#F23D3D',
        pointBorderWidth: 2, 
        tension: 0.3,
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
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        backgroundColor: 'rgba(13,13,13,0.8)',
        bodySpacing: 6,
        bodyColor: '#cecece',
        cornerRadius: 16,
        usePointStyle: true,
        padding: 12,
        titleMarginBottom: 10,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          afterTitle: function(context: any) {
            const diferenca = context[0].raw - context[1].raw;
            if(diferenca > 0) {
              return ['Manteve R$ ' + diferenca.toFixed(2) + ' do orçamento'];
            } else{
              return ['Excedeu R$ ' + Math.abs(diferenca).toFixed(2) + ' do orçamento'];
            }
          }
        },
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
          stepSize: 100,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value: any ) => value + ' $'
        },
      }
    },
  };

  return(
    <section className={styles.charts}>
      <div className={styles.chartBox}>
        <div className={styles.chartBox__titulo}>
          <h2>Demonstrativo de lançamentos</h2>
          <div className={styles2.searchSelect}>
            <select className={styles2.select} onChange={(e) => filterChartByYear(Number(e.currentTarget.value))}>
              {yearOptions.map((opcao, index) => (
                <option key={index} value={opcao.value}>{opcao.label}</option>
              ))}
            </select>
            <span><AiOutlineCalendar size={18} color='#898989' /></span>
          </div>
        </div>
        <Line
          data={data} 
          options={options}
        />
      </div>
    </section>
  );
};

export default MyChart;
