import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Pagination.module.scss';

interface PropsPagination {
  pageCount: number;
  onPageChange: (event: {selected: number }) => void;
}

export const Pagination = ({ pageCount, onPageChange }: PropsPagination) => {
  return(
    <>
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft size={26} />}
        nextLabel={<MdOutlineKeyboardArrowRight size={26} />}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={`${styles.pagination}`}
        previousLinkClassName={`${styles.pagination__bttns}`}
        nextLinkClassName={`${styles.pagination__bttns}`}
        disabledClassName={`${styles.pagination__disabled}`}
        activeClassName={`${styles.pagination__active}`}
        pageLinkClassName={`${styles.pagination__link}`}     
      />
    </>
  );
};