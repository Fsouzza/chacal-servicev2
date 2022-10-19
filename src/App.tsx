import { Footer } from 'components/footer/footer';
import React from 'react';
import { Header } from './components/header';
import { FluxoCaixa } from './pages/fluxoCaixa';

function App() {
  return (
    <main>
      <Header />
      <FluxoCaixa />
      <Footer />
    </main>
  );
}

export default App;
