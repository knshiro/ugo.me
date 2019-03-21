import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { MetaData } from '../components/Meta'


const IndexTemplate = ({ data, location, pageContext }) => {
  const { edges } = data.allGhostPost;

  return (
    <>
      <MetaData location={location} />
      <Layout>
        <Sidebar isIndex />
        <Page>
          <Feed edges={edges} />
          <Pagination pageContext={pageContext} />
        </Page>
      </Layout>
    </>
  );
};

export const query = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;

export default IndexTemplate;
