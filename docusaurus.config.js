// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "hiStories",
  tagline: "Dinosaurs are cool",
  url: "https://docs-histories.netlify.app/docs/intro",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "HiStories-cc",
  projectName: "HiStories",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "hiStories Logo",
          src: "img/logo-full-light.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "HiStories",
            items: [
              {
                label: "Home",
                to: "https://www.histories.cc",
              },
              {
                label: "Mobile app",
                to: "#",
              },
            ],
          },
          {
            title: "Source code",
            items: [
              {
                label: "Documentation",
                to: "https://docs-histories.netlify.app/docs/intro/",
              },
              {
                label: "Source code",
                to: "https://github.com/histories-cc",
              },
              {
                label: "Report a bug",
                to: "https://github.com/hiStories-cc/hiStories/issues/new?assignees=&labels=&template=bug_report.md&title=",
              },
              {
                label: "Feature request",
                to: "https://github.com/hiStories-cc/hiStories/issues/new?assignees=&labels=&template=feature_request.md&title=",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github discussions",
                to: "https://github.com/hiStories-cc/hiStories/discussions",
              },
              {
                label: "Contact me",
                to: "mailto:krystof.kratky2003@gmail.com?subject=HiStories",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms & conditions",
                href: "/terms-and-conditions",
              },
              {
                label: "Privacy policy",
                href: "/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HiStories, Kryštof Krátký`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
