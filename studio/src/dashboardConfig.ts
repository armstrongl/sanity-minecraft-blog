export default {
  widgets: [
    { name: `structure-menu` },
    {
      name: `project-info`,
      options: {
        __experimental_before: [
          // {
          //   name: "netlify",
          //   options: {
          //     description:
          //       "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
          //     sites: [
          //       {
          //         buildHookId:
          //           "60b0238a26e6dd4f4dc12687",
          //         title: "Sanity Studio",
          //         name: "sanity-minecraft-blog-studio-xas7hdby",
          //         apiId: "e1926d7d-4922-4118-9548-2c53642b1ba1",
          //       },
          //       {
          //         buildHookId: "",
          //         title: "Blog Website",
          //         name: "",
          //         apiId: "",
          //       },
          //     ],
          //   },
          // },
        ],
        data: [
          {
            title: `GitHub repo`,
            value:
              `https://github.com/armstrongl/sanity-minecraft-blog`,
            category: `Code`,
          },
          {
            title: `Frontend`,
            value: ``,
            category: `apps`,
          },
        ],
      },
    },
    { name: `project-users`, layout: { height: `auto` } },
    {
      name: `document-list`,
      options: {
        title: `Recently-added blocks`,
        order: `_createdAt desc`,
        types: [`minecraftBlock`],
      },
      layout: { width: `medium` },
    },
  ],
}
