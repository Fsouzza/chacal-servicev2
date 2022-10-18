import { useState } from 'react';
import { newDateAdjusted } from '../../../helpers/dateFilter';
import { Item } from '../../../types/item';
import styles from './addfluxo.module.scss';
import { Input } from './inputs/Input';
import { Select } from './selects/Select';

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
  const documentos = ['', 'Comprovante', 'NFCe', 'NF', 'Recibo', 'S/ Recibo'];
  const lancamentos = ['', 'Entrada', 'Saída'];
  const categorias = ['', 'Compra', 'Despesa', 'Pagamentos', 'Receita', 'Refeição', 'Retirada', 'Serviços', 'Vale Transporte', 'Veiculo', 'VR+VT'];
  const departamentos = ['', 'Administrativo', 'Financeiro', 'Officeboy', 'Operacional', 'Recursos Humanos', 'Tercerizados'];

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
      <Input htmlFor='item' placeholder='Descrição do Item' label='Item' id='item' type='text' required={true} value={itemField} setInput={value => setItemField(value)}/>
      <div>
        <label htmlFor='data'>Data*</label>
        <input id='data' type='date' required onChange={e => setDataField(e.target.value)} />
      </div>
      <Select label='Lançamento' id='lancamento' htmlFor='lancamento' itens={lancamentos} required={true} value={lancamentoField} setSelected={value => setLancamentoField(value)}/>
      <Select label='Tipo Documento' id='doc' htmlFor='doc' itens={documentos} required={true} value={docField} setSelected={value => setDocField(value)}/>
      <Select label='Categoria' id='categoria' htmlFor='categoria' itens={categorias} required={true} value={categoriaField} setSelected={value => setCategoriaField(value)}/>
      <Select label='Departamento' id='dpto' htmlFor='dpto' itens={departamentos} required={true} value={deptoField} setSelected={value => setDeptoField(value)}/>
      <Input htmlFor='local' placeholder='Informe o local' label='Local' id='local' type='text' required={true} value={localField} setInput={value => setLocalField(value)}/>
      <div>
        <label htmlFor='valor'>Valor*</label>
        <input id='valor' type='number' required onChange={e => setValorField(parseFloat(e.target.value))} />
      </div>
      <Input htmlFor='obs' placeholder='Insira informação adicional' label='Observação' id='obs' type='text' required={true} value={obsField} setInput={value => setObsField(value)}/>
      <div>
        <button onClick={handleAddEvent}>
          Adicionar
        </button>
      </div>
    </form>
  );
};