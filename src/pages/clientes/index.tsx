import Filters from './Filters';
import Search from './Search';
import TableContract from './table/index';

const Clientes = () => {
  return(
    <>
      <Filters />
      <Search />
      <TableContract />
    </>
  );
};

export default Clientes;