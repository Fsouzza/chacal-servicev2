import Footer from 'components/footer';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';
import 'styles/lightMode.scss';

const PageDesignPadrao = () => {
  return(
    <main className={'app'}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PageDesignPadrao;

