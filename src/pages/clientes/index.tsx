import Filters from './Filters';
import Search from './Search';
import TableContract from './table/index';

const Clientes = () => {
  return(
    <>
      <Search />
      <Filters />
      <TableContract />
    </>
  );
};

export default Clientes;