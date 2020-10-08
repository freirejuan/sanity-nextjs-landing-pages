export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7f9b616d30e30131868f7b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tfb7737p',
                  apiId: 'dfbb964b-1d7e-4e9e-b86e-0241e6ecb935'
                },
                {
                  buildHookId: '5f7f9b616b0fda01201a965a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bu3perwk',
                  apiId: '66dcc9e5-1aa4-4463-97ff-63e20d25d8b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freirejuan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bu3perwk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
