import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styles from './Layout.module.scss';

const DefaultLayout = ({ data, children, }) => {
  const site = data.allGhostSettings.edges[0].node;

  return (
  <>
    <Helmet>
      <html lang={site.lang} />
    </Helmet>
    <div className={styles.layout}>
      {children}
    </div>
  </>
  );
};

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
      query={graphql`
          query GhostSettings {
              allGhostSettings {
                  edges {
                      node {
                          ...GhostSettingsFields
                      }
                  }
              }
          }
      `}
      render={(data) => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;