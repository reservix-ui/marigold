import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type PageProps = {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title?: string;
        embeddedImages?: any;
      };
      headings: { value: string }[];
    };
  };
};

const Page = ({
  data: {
    mdx: {
      body,
      frontmatter: { embeddedImages },
    },
  },
}: PageProps) => {
  // const { body } = mdx;
  const IMAGE_KEY = 'image';
  const embeddedImagesByKey =
    embeddedImages &&
    embeddedImages.reduce((images: any, image: any, index: any) => {
      console.log(images);
      console.log(image);
      console.log(index);
      images[`${IMAGE_KEY}${index + 1}`] = images[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      };
      return images;
    }, {});

  console.log(embeddedImagesByKey);
  return (
    <main>
      <MDXRenderer embeddedImages={embeddedImagesByKey}>{body}</MDXRenderer>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        embeddedImages {
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      headings(depth: h1) {
        value
      }
    }
  }
`;

export default Page;
