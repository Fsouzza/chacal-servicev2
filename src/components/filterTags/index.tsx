import styles from './filterTags.module.scss';
import { tags } from './tags';

type Ifiltro = typeof tags[0];
interface Props{
  filtro: string | null;
  setFiltro: React.Dispatch<React.SetStateAction<string | null>>
}

export const FilterTags = ({filtro, setFiltro}: Props) =>{

  function selecionarTag(tag: Ifiltro) {
    if(filtro === tag.id) return setFiltro(null);
    return setFiltro(tag.id);
  }

  return(
    <div>
      {tags.map((tag) => (
        <button key={tag.id} onClick={() => selecionarTag(tag)}>
          {tag.label}
        </button>
      ))}
    </div>
  );

};