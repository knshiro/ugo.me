import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tags.map((tag) => (
        <li className={styles['tags__list-item']} key={tag.name}>
          <Link to={tag.slug} className={styles['tags__list-item-link']}>
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
