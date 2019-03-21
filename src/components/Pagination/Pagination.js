import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !previousPagePath
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !nextPagePath
  });

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={previousPagePath} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={nextPagePath} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
