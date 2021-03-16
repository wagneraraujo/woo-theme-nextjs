import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";
export const GET_MENUS = gql`

    headerMenus: menuItems(where: {
  location: PRIMARY, parentId: "0"
}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          nodes {
            url
            label
            path
            id
          }
        }
      }
    }
  }
  ${MenuFragment}

`;
