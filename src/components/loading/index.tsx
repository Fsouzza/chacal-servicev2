import styles from './loading.module.scss';

const Loading = () => {
  return( 
    <div className={styles.loading}>
      <h1>Loading</h1>
      <div className={styles.loader}>
        
      </div>
    </div>
  );
};

export default Loading;