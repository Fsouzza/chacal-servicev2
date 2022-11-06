import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from 'components/loading';

const PageDesignPadrao = lazy(() => import('components/homePage'));
const FluxoCaixa = lazy(() => import('pages/fluxoCaixa'));
const Clientes = lazy(() => import('pages/clientes/clientes'));
const EstoqueDeEPI = lazy(() => import('pages/estoqueEPI/estoqueDeEPI'));
const ControleDeFinancas = lazy(() => import('pages/financas/ControleDeFinancas'));
const ListaFuncionarios = lazy(() => import('pages/funcionarios/Funcionarios'));
const Documentacao = lazy(() => import('pages/doc/Documentos'));
const Reports = lazy(() => import('pages/reports/Reports'));
const Notificacoes = lazy(() => import('pages/notificacoes/Notificacoes'));

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<PageDesignPadrao />}>
            <Route index element={<FluxoCaixa />} />
            <Route path='clientes' element={<Clientes />} />
            <Route path='estoqueEPI' element={<EstoqueDeEPI />} />
            <Route path='fluxoDeCaixa' element={<FluxoCaixa />} />
            <Route path='financas' element={<ControleDeFinancas />} />
            <Route path='funcionarios' element={<ListaFuncionarios />} />
            <Route path='documentos' element={<Documentacao />} />
            <Route path='report' element={<Reports />} />
            <Route path='notificacoes' element={<Notificacoes />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
