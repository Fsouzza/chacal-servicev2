import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsCash, BsCartDash } from 'react-icons/bs';
import { BiArchive } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { MdAttachMoney, MdOutlineDashboardCustomize } from 'react-icons/md';
import styles from './sidebar.module.scss';
import { SideBarItems } from './sidebarItens/sidebarItems';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SideBar = ({active, ref}: any) => {
  const closeSideBar = () => {
    active(false);
  };
  const dataOperat = [
    {
      titulo: 'Clientes',
      to: '/clientes',
      icon: <MdOutlineDashboardCustomize />
    },
    {
      titulo: 'Estoque de EPI',
      to: '/estoqueEPI',
      icon: <BsCartDash />
    },
  ];
  const dataFinanc = [
    {
      titulo: 'Fluxo de caixa',
      to: '/',
      icon: <MdAttachMoney />
    },
    {
      titulo: 'Controle financeiro',
      to: '/financas',
      icon: <BsCash />
    },
  ];
  const dataRH = [
    {
      titulo: 'Funcionários',
      to: '/funcionarios',
      icon:<FiUserPlus />
    },
  ];
  const dataDoc = [
    {
      titulo: 'Documentação',
      to: '/documentos',
      icon: <AiOutlineFilePdf />
    },
    {
      titulo: 'Arquivos',
      to: '',
      icon: <BiArchive />
    },
  ];
  
  return (
    <nav ref={ref} className={styles.sidebar} onBlur={closeSideBar}>
      <ul>
        <span>Operacional</span>
        {dataOperat.map( (oper, index) => (
          <Link key={index} to={oper.to}>
            <SideBarItems icon={oper.icon} titulo={oper.titulo} />
          </Link>
        ))}
      </ul>
      <ul>
        <span>Financeiro</span>
        {dataFinanc.map( (financ, index) => (
          <Link key={index} to={financ.to}>
            <SideBarItems icon={financ.icon} titulo={financ.titulo} />
          </Link>
        ))}
      </ul>
      <ul>
        <span>Recursos Humanos</span>
        {dataRH.map( (rh, index) => (
          <Link key={index} to={rh.to}>
            <SideBarItems icon={rh.icon} titulo={rh.titulo} />
          </Link>
        ))}
      </ul>
      <ul>
        <span>Docs</span>
        {dataDoc.map( (doc, index) => (
          <Link key={index} to={doc.to}>
            <SideBarItems icon={doc.icon} titulo={doc.titulo} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};
