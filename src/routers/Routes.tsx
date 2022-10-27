import React from 'react';
import { FluxoCaixa } from '../pages/fluxoCaixa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Clientes } from './../pages/clientes/clientes';
import { PageDesignPadrao } from '../components/homePage/index';
import { EstoqueDeEPI } from './../pages/estoqueEPI/estoqueDeEPI';
import { ControleDeFinancas } from 'pages/financas/ControleDeFinancas';
import { ListaFuncionarios } from './../pages/funcionarios/Funcionarios';
import { Documentacao } from './../pages/doc/Documentos';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageDesignPadrao />}>
          <Route index element={<FluxoCaixa />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='estoqueEPI' element={<EstoqueDeEPI />} />
          <Route path='financas' element={<ControleDeFinancas />} />
          <Route path='funcionarios' element={<ListaFuncionarios />} />
          <Route path='documentos' element={<Documentacao />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
