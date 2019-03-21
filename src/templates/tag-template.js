import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { MetaData } from '../components/Meta';


const TagTemplate = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const { edges } = data.allGhostPost;

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="series"
      />
      <Layout>
        <Sidebar />
        <Page title={tag.name}>
          <Feed edges={edges} />
          <Pagination pageContext={pageContext} />
        </Page>
      </Layout>
    </>
  );
};

export const query = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
      ghostTag(slug: { eq: $slug }) {
          ...GhostTagFields
      }
      allGhostPost(
          sort: { order: DESC, fields: [published_at] },
          filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
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

export default TagTemplate;
