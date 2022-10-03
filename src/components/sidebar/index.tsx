import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsCash, BsCreditCard, BsCartDash } from 'react-icons/bs';
import { AiOutlineFilePdf, AiOutlineSetting } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import styles from './sidebar.module.scss';

export const SideBar = () => {
  return (
    <aside className=''>
      <div>
        <img />
        <h3>Chacal Service</h3>
      </div>
      <span>Resumo</span>
      <ul>
        <li>
          <MdSpaceDashboard /> Dashboard
        </li>
      </ul>
      <span>Financeiro</span>
      <ul>
        <li>
          <BsCash /> Fluxo de caixa
        </li>
        <li>
          <BsCreditCard /> Controle de Contas
        </li>
      </ul>
      <span>Operacional</span>
      <ul>
        <li>
          <BsCartDash /> Estoque
        </li>
        <li>
          <AiOutlineFilePdf /> Documentos
        </li>
      </ul>
      <span>Sessão</span>
      <ul>
        <li>
          <a>
            <AiOutlineSetting /> Configuração
          </a>
        </li>
        <li>
          <a>
            <GrLogout /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};
