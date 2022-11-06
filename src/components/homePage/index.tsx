import Footer from 'components/footer';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';

const PageDesignPadrao = () => {
  return(
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PageDesignPadrao;

