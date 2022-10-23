import { useState } from 'react';
import styles from './addfluxo.module.scss';
import { Input } from './inputs/Input';
import { Select } from './selects/Select';

export const AddFluxoCaixa = () => {
  const [dataField, setDataField] = useState('');
  const [lancamentoField, setLancamentoField] = useState('');
  const [categoriaField, setCategoriaField] = useState('');
  const [deptoField, setDeptoField] = useState('');
  const [docField, setDocField] = useState('');
  const [idField, setIdField] = useState('');
  const [localField, setLocalField] = useState('');
  const [itemField, setItemField] = useState('');
  const [obsField, setObsField] = useState('');
  const [valorField, setValorField] = useState('');
  const documentos = ['', 'Comprovante', 'NFCe', 'NF', 'Recibo', 'S/ Recibo'];
  const lancamentos = ['', 'Entrada', 'Saída'];
  const categorias = ['', 'Compra', 'Despesa', 'Pagamentos', 'Receita', 'Refeição', 'Retirada', 'Serviços', 'Vale Transporte', 'Veiculo', 'VR+VT'];
  const departamentos = ['', 'Administrativo', 'Financeiro', 'Officeboy', 'Operacional', 'Recursos Humanos', 'Tercerizados'];


  const clearFields = () => {
    setDataField('');
    setLancamentoField('');
    setCategoriaField('');
    setDeptoField('');
    setDocField('');
    setIdField('');
    setLocalField('');
    setItemField('');
    setObsField('');
    setValorField('');
  };

  return(
    <form id='add' className={styles.add}>
      <Input htmlFor='numero' placeholder='Número do documento' label='Nº ID' id='numero' type='text' onFocus={(e) => (e.target.type='number')} onBlur={(e) => (e.target.type='text')} required={true} value={idField} setInput={value => setIdField(value)}/>
      <Input htmlFor='item' placeholder='Descrição do Item' label='Item' id='item' type='text' required={true} value={itemField} setInput={value => setItemField(value)}/>
      <Input htmlFor='data' placeholder='Data de emissão do doc...' id='data' label='Data' type='text' onFocus={(e) => (e.target.type='date')} onBlur={(e) => (e.target.type='text')} required={true} value={dataField} setInput={value => setDataField(value)}/>
      <Select label='Lançamento' id='lancamento' htmlFor='lancamento' itens={lancamentos} required={true} value={lancamentoField} setSelected={value => setLancamentoField(value)}/>
      <Select label='Tipo Documento' id='doc' htmlFor='doc' itens={documentos} required={true} value={docField} setSelected={value => setDocField(value)}/>
      <Select label='Categoria' id='categoria' htmlFor='categoria' itens={categorias} required={true} value={categoriaField} setSelected={value => setCategoriaField(value)}/>
      <Select label='Departamento' id='dpto' htmlFor='dpto' itens={departamentos} required={true} value={deptoField} setSelected={value => setDeptoField(value)}/>
      <Input htmlFor='local' placeholder='Informe o local' label='Local' id='local' type='text' required={true} value={localField} setInput={value => setLocalField(value)}/>
      <Input htmlFor='valor' placeholder='Insira o valor' label='Valor (R$)' id='numero' type='text' onFocus={(e) => (e.target.type='number')} onBlur={(e) => (e.target.type='text')} required={true} value={valorField} setInput={value => setValorField(value)}/>
      <Input htmlFor='obs' placeholder='Insira informação adicional' label='Observação' id='obs' type='text' required={true} value={obsField} setInput={value => setObsField(value)}/>
      <div>
        <button onSubmit={clearFields}>
          Adicionar
        </button>
      </div>
    </form>
  );
};