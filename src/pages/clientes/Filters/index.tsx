import styles from './Filters.module.scss';

const Filters = () => {
  return(
    <section className={styles.filter}>
      <div>
        <h2>Filtros</h2>
        <div>
          <select>
            <option>Select 1</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
          <select>
            <option>Select 2</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
          <select>
            <option>Select 3</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;