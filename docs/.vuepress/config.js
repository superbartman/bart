module.exports = {
  title: 'Bart',
  description: '',
  head: [
    ['link', { rel: 'icon', href: 'http://pic.8pig.com/avatar/u_94/633694/fcddab0c421aabc21d390fa75a77cb30.jpg' }]
  ],
  themeConfig: {
    nav: [
      {
         text: 'diary',
         link: '/diary/'
      },
    ],
    sidebar: {
      '/diary/': [
        '2023-12-28'
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'docs/img'
      }
    }
  },
  plugins: [
    '@vuepress/blog',
    {
      directories: [
        {
          // 当前分类的唯一 ID
          id: 'diary',
          // 目标文件夹
          dirname: 'diary',
          path: '/diary',
        },
      ],
    },
  ],
}
