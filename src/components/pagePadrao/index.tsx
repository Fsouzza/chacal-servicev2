import { Footer } from 'components/footer/footer';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';

export const PageHome = () => {
  return(
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};