import { useQuery } from "@apollo/client";
import client from "../components/apollo/apollo";
import { GET_MENUS } from "../components/queries/get-menus";
export default function Home({ menus }) {
  console.log("launches", menus);

  return (
    <>
      <div className="container">home</div>
    </>
  );
}

export async function getStaticProps() {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  });
  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges
      }
    }
  };
}
