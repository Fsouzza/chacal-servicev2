import Footer from 'components/footer';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';
import 'styles/lightMode.scss';

const PageDesignPadrao = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageDesignPadrao;

