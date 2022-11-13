import styles from './Search.module.scss';

const Search = () => {
  return(
    <section className={styles.search}>
      <div>
        <select>
          <option>Select 1</option>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
        <input type={'text'}></input>
        <button>Inserir contrato</button>
      </div>
    </section>
  );
};

export default Search;