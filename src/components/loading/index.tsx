import { MoonLoader } from 'react-spinners';
import styles from './loading.module.scss';

const Loading = () => {
  return( 
    <div className={styles.loading}>
      <h1>Loading</h1>
      <MoonLoader aria-label='Loading...' size={70} color={'#b0b0b0'}></MoonLoader>
    </div>
  );
};

export default Loading;