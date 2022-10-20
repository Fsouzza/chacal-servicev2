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
  
  return (
    <nav ref={ref} className={styles.sidebar} onBlur={closeSideBar}>
      <ul>
        <span>Operacional</span>
        <Link to='/clientes'>
          <SideBarItems icon={<MdOutlineDashboardCustomize />} titulo={'Clientes'} />
        </Link>
        <Link to='/estoqueEPI'>
          <SideBarItems icon={<BsCartDash />} titulo={'Estoque de EPI'} />
        </Link>
      </ul>
      <ul>
        <span>Financeiro</span>
        <Link to='/'>
          <SideBarItems icon={<MdAttachMoney />} titulo={'Fluxo de caixa'} />
        </Link>
        <Link to='/financas'>
          <SideBarItems icon={<BsCash />} titulo={'Controle de finanças'} />
        </Link>
      </ul>
      <ul>
        <span>Recursos Humanos</span>
        <Link to='/funcionarios'>
          <SideBarItems icon={<FiUserPlus />} titulo={'Funcionários'} />
        </Link>
      </ul>
      <ul>
        <span>Docs</span>
        <Link to='/documentos'>
          <SideBarItems icon={<AiOutlineFilePdf />} titulo={'Documentação'} />
        </Link>
        <Link to=''>
          <SideBarItems icon={<BiArchive />} titulo={'Arquivos'} />
        </Link>
      </ul>
    </nav>
  );
};
