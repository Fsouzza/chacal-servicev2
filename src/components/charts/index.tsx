import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, 
  PointElement, LineElement, Tooltip, BarElement, Legend } from 'chart.js';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import styles from './charts.module.scss';
import styles2 from '../dataFilter/dataFilter.module.scss';
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
  const data = {
    labels:  labels,
    datasets: [
      {
        label: 'Entradas',
        data: incomes,
        backgroundColor: '#00b706',
        borderColor: '#00b706',
        pointBackgroundColor: '#00b706',
        borderWidth: 2.4,
        pointBorderWidth: 2,
        tension: 0.3
      },
      {
        label: 'Saídas',
        data: expanses,
        backgroundColor: '#d52727',
        borderColor: '#d52727',
        borderWidth: 2.4,
        pointBackgroundColor: '#d52727',
        pointBorderWidth: 2, 
        tension: 0.3,
      }
    ]
  };
  const options = {
    responsive: true,
    radius: 0,
    hitRadius: 10,
    hoverRadius: 7,
    hoverBackgroundColor: '#2b2c2f',
    hoverBorderWidth: 3,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: 'center' as const,
        position: 'bottom' as const,
        labels: {
          boxWidth: 20,
          padding: 22,
          usePointStyle: true
        },
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
          display: true,
          borderWidth: 3,
          borderColor: '#4b4b4b',
          color: '#3a3a3a'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          borderWidth: 3,
          borderColor: '#4b4b4b',
          color: '#3a3a3a'
        },
        ticks: {
          stepSize: 100,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value: any ) => value + ' $'
        },
      }
    },
  };

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

  return(
    <section className={styles.chart}>
      <div className={styles.chart__titulo}>
        <h2>Demonstrativo de lançamentos</h2>
        <div className={styles2.searchSelect}>
          <select className={styles2.select} onChange={(e) => filterChartByYear(Number(e.currentTarget.value))}>
            {yearOptions.map((opcao, index) => (
              <option key={index} value={opcao.value}>{opcao.label}</option>
            ))}
          </select>
          <span><AiOutlineCalendar size={22} color='#898989' /></span>
        </div>
      </div>
      <div className={styles.box}>
        <Line
          data={data} 
          options={options}
        />
      </div>
    </section>
  );
};

export default MyChart;
