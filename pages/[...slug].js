import { GET_PAGES_URI } from "../components/queries/pages/get-pages";
// import { GET_MENUS } from "../components/queries/get-menus";
import client from "../components/apollo/apollo";
import { isEmpty } from "lodash";

const Pages = ({ data }) => {
  console.log(data);
  return "Paginas";
};
export default Pages;

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGES_URI,
    variables: {
      uri: params?.slug.join("/")
    }
  });
  const defaultProps = {
    props: {
      data: data || {}
    },
    revalidate: 1
  };
  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI
  });
  const pathsData = [];
  data?.pages?.nodes &&
    data?.pages?.nodes.map(page => {
      if (!isEmpty(page?.uri)) {
        const slugs = page?.uri?.split("/").filter(pageSlug => pageSlug);
        pathsData.push({
          params: { slug: slugs }
        });
      }
    });

  return {
    paths: pathsData,
    fallback: true
  };
}
