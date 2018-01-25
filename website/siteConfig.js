const users = [
    {
        caption: 'User1',
        image: '/test-site/img/docusaurus.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
  },
];

const siteConfig = {
    title: 'MayaOnline' /* title for your website */ ,
    tagline: 'MayaOnline guide',
    url: 'https://mayaonline.io' /* your website url */ ,
    baseUrl: '/' /* base url for your project */ ,
    projectName: 'Guide',
    headerLinks: [
        {
            doc: 'doc1',
            label: 'Docs'
        },
        {
            doc: 'doc4',
            label: 'API'
        },
        {
            blog: true,
            label: 'Blog'
        },
        {
            href: "https://app.mayaonline.io",
            label: "Login"
        },
    //{page: 'help', label: 'Help'},
  ],
    users,
    /* path to images for header/footer */
    headerIcon: 'img/mayaonline.png',
    footerIcon: 'img/maya-mule.png',
    favicon: 'img/favicon.ico',
    /* colors for website */
    colors: {
        primaryColor: '#495057',
        secondaryColor: '#205C3B',
    },
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright: 'Copyright © ' +
        new Date().getFullYear() +
        ' Your Name or Your Company Name',
    // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
    // projectName: 'test-site', // or set an env variable PROJECT_NAME
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default',
    },

};

module.exports = siteConfig;