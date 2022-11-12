import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsCash, BsCartDash } from 'react-icons/bs';
import { BiArchive } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { MdAttachMoney, MdOutlineDashboardCustomize } from 'react-icons/md';
import { VscReport, VscBellDot } from 'react-icons/vsc';
import styles from './sidebar.module.scss';
import { SideBarItems } from './sidebarItens/sidebarItems';

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
      to: '/fluxoDeCaixa',
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
      to: '/arquivos',
      icon: <BiArchive />
    },
  ];
  const dataSystem = [
    {
      titulo: 'Report',
      to: '/report',
      icon: <VscReport />
    },
    {
      titulo: 'Notificações',
      to: '/notificacoes',
      icon: <VscBellDot />
    }
  ];

  return (
    <nav ref={ref} className={styles.sidebar} onBlur={closeSideBar}>
      <ul>
        <span>Operacional</span>
        {dataOperat.map( (oper) => (
          <SideBarItems key={oper.titulo} icon={oper.icon} titulo={oper.titulo} to={oper.to}/>
        ))}
      </ul>
      <ul>
        <span>Financeiro</span>
        {dataFinanc.map( (financ) => (
          <SideBarItems key={financ.titulo} icon={financ.icon} titulo={financ.titulo} to={financ.to} />
        ))}
      </ul>
      <ul>
        <span>Recursos Humanos</span>
        {dataRH.map( (rh) => (
          <SideBarItems key={rh.titulo} icon={rh.icon} titulo={rh.titulo} to={rh.to} />
        ))}
      </ul>
      <ul>
        <span>Docs</span>
        {dataDoc.map( (doc) => (
          <SideBarItems key={doc.titulo} icon={doc.icon} titulo={doc.titulo} to={doc.to} />
        ))}
      </ul>
      <ul>
        <span>System</span>
        {dataSystem.map( (syst) => (
          <SideBarItems key={syst.titulo} icon={syst.icon} titulo={syst.titulo} to={syst.to} />
        ))}
      </ul>
    </nav>
  );
};
