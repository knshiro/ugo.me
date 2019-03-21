import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { MetaData } from '../components/Meta';


const PageTemplate = ({ data, location }) => {
  const page = data.ghostPage;

  const { title: pageTitle, html: pageBody } = page.html;

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="website"
      />
      <Layout>
        <Sidebar />
        <Page title={pageTitle}>
          <div dangerouslySetInnerHTML={{ __html: pageBody }} />
        </Page>
      </Layout>
    </>
  );
};

export const query = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`;

export default PageTemplate;
