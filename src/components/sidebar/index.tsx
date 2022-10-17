import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsCash, BsCartDash } from 'react-icons/bs';
import { BiArchive } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { MdAttachMoney, MdOutlineDashboardCustomize } from 'react-icons/md';
import styles from './sidebar.module.scss';
import { SideBarItems } from './sidebarItens/sidebarItems';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SideBar = ({active}: any) => {
  const closeSideBar = () => {
    active(false);
  };
  
  return (
    <nav className={styles.sidebar} onBlur={closeSideBar}>
      <ul>
        <span>Operacional</span>
        <SideBarItems icon={<MdOutlineDashboardCustomize />} titulo={'Clientes'} />
        <SideBarItems icon={<BsCartDash />} titulo={'Estoque de EPI'} />
      </ul>
      <ul>
        <span>Financeiro</span>
        <SideBarItems icon={<MdAttachMoney />} titulo={'Fluxo de caixa'} />
        <SideBarItems icon={<BsCash />} titulo={'Controle de finanças'} />
      </ul>
      <ul>
        <span>Recursos Humanos</span>
        <SideBarItems icon={<FiUserPlus />} titulo={'Funcionários'} />
      </ul>
      <ul>
        <span>Docs</span>
        <SideBarItems icon={<AiOutlineFilePdf />} titulo={'Documentação'} />
        <SideBarItems icon={<BiArchive />} titulo={'Arquivos'} />
      </ul>
    </nav>
  );
};
