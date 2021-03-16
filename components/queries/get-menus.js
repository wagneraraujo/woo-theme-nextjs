import { gql } from "@apollo/client";

export const GET_MENUS = gql`
  {
    header: getHeader {
      favicon
      siteLogoUrl
      siteTitle
    }
    headerMenus: menuItems(
      where: { location: HCMS_MENU_HEADER, parentId: "0" }
    ) {
      edges {
        node {
          id
          label
          url
          title
          path
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
  }
`;
