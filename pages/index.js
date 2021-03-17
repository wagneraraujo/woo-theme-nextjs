import client from "../components/apollo/apollo";
import { GET_MENUS } from "../components/queries/get-menus";
import Layout from "../components/layouts";
export default function Home({ data }) {
  return (
    <>
      <Layout data={data}></Layout>
    </>
  );
}

export async function getStaticProps() {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  });
  return {
    props: {
      data: {
        header: data?.header || [],
        footer: data?.footer || [],
        menus: {
          headerMenus: data?.headerMenus?.edges
        }
      }
    },

    revalidate: 1
  };
}
