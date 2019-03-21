import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon, title }) => (
  <svg className={styles['icon']} viewBox={icon.viewBox} title={title}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
