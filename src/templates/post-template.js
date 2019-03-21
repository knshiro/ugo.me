import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { MetaData } from '../components/Meta';

const PostTemplate = ({ data, location }) => {
  const post = data.ghostPost;

  return (
    <>
    <MetaData
        data={data}
        location={location}
        type="article"
    />
    <Layout>
      <Post post={post} />
    </Layout>
    </>
  );
};

export const postQuery = graphql`
    query($slug: String!) {
      site {
        siteMetadata {
          author {
            name
            contacts {
              twitter
            }
          }
          disqusShortname
          subtitle
          title
          url
        }
      }
      ghostPost(slug: { eq: $slug }) {
        ...GhostPostFields
      }
    }
`;

export default PostTemplate;
