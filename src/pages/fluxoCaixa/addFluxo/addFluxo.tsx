import { useState } from 'react';
import { newDateAdjusted } from '../../../helpers/dateFilter';
import { Item } from '../../../types/item';
import styles from './addfluxo.module.scss';

type Props = {
  onAdd: (item: Item) => void;
}

export const AddFluxoCaixa = ({ onAdd}: Props) => {
  const [dataField, setDataField] = useState('');
  const [lancamentoField, setLancamentoField] = useState('');
  const [categoriaField, setCategoriaField] = useState('');
  const [deptoField, setDeptoField] = useState('');
  const [docField, setDocField] = useState('');
  const [idField, setIdField] = useState(0);
  const [localField, setLocalField] = useState('');
  const [itemField, setItemField] = useState('');
  const [obsField, setObsField] = useState('');
  const [valorField, setValorField] = useState(0);

  function handleAddEvent() {
    onAdd({
      date: newDateAdjusted(dataField),
      lancamentos: lancamentoField, 
      categoria: categoriaField,
      departamento: deptoField,
      tipo: docField,
      id: idField,
      local: localField,
      item: itemField,
      valor: valorField,
      obs: obsField,
    });
    clearFields();
  }

  const clearFields = () => {
    setDataField('');
    setLancamentoField('');
    setCategoriaField('');
    setDeptoField('');
    setDocField('');
    setIdField(0);
    setLocalField('');
    setItemField('');
    setObsField('');
    setValorField(0);
  };

  return(
    <form id='add' className={styles.add}>
      <div>
        <label htmlFor='numero'>ID Doc*</label>
        <input id='numero' type='number' maxLength={999999} required onChange={e => setIdField(parseFloat(e.target.value))} />
      </div>
      <div>
        <label htmlFor='item'>Item*</label>
        <input id='item' type='text' required onChange={e => setItemField(e.target.value)} />
      </div>
      <div>
        <label htmlFor='doc'>Tipo Documento*</label>
        <select placeholder='' id='doc' required onChange={e => setDocField(e.target.value)}>
          <option></option>
          <option>Comprovante</option>
          <option>NFCe</option>
          <option>NF</option>
          <option>Recibo</option>
          <option>S/recibo</option>
        </select>
      </div>
      <div>
        <label htmlFor='categoria'>Categoria*</label>
        <select placeholder='' id='categoria' required onChange={e => setCategoriaField(e.target.value)}>
          <option></option>
          <option>Compra</option>
          <option>Despesa</option>
          <option>Pagamentos</option>
          <option>Receita</option>
          <option>Refeição</option>
          <option>Retirada</option>
          <option>Serviços</option>
          <option>Vale Transporte</option>
          <option>Veiculo</option>
          <option>VR/VT</option>
        </select>
      </div>
      <div>
        <label htmlFor='data'>Data*</label>
        <input id='data' type='date' required onChange={e => setDataField(e.target.value)} />
      </div>
      <div>
        <label htmlFor='lancamento'>Lançamentos</label>
        <select placeholder='' id='lancamento' required  onChange={e => setLancamentoField(e.target.value)}>
          <option></option>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
      </div>
      <div>
        <label htmlFor='dpto'>Departamento*</label>
        <select placeholder='' id='dpto' required onChange={e => setDeptoField(e.target.value)}>
          <option></option>
          <option>Administrativo</option>
          <option>Financeiro</option>
          <option>Officeboy</option>
          <option>Operacional</option>
          <option>RH</option>
          <option>Terceirizado</option>
        </select>
      </div>
      <div>
        <label htmlFor='texto'>Local*</label>
        <input id='texto' type='text' required onChange={e => setLocalField(e.target.value)} />
      </div>
      <div>
        <label htmlFor='valor'>Valor*</label>
        <input id='valor' type='number' required onChange={e => setValorField(parseFloat(e.target.value))} />
      </div>
      <div>
        <label htmlFor='obs'>Observação</label>
        <input id='obs' type='text' onChange={e => setObsField(e.target.value)} />
      </div>
      <div>
        <button onClick={handleAddEvent}>
          Adicionar
        </button>
      </div>
    </form>
  );
};
