import React from 'react';
import styles from '../styles/PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode; // Sayfa içeriği buraya gelecek
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.pageLayout}>{children}</div>;
};

export default PageLayout;
