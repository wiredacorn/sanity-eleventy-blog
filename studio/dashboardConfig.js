export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615cfb62ada3c83e3d97d857',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-faqvgnbg',
                  apiId: '986ef2d0-4ef6-47bb-9b49-48959b6a87cb'
                },
                {
                  buildHookId: '615cfb625f56842d14bb9ad7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-wmfjxuge',
                  apiId: '58b146d8-f0d2-48ed-bb28-b72ecb255ff0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wiredacorn/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-wmfjxuge.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
