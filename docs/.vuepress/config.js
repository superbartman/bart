const path = require('path')

module.exports = {
  title: 'Bart',
  description: '',
  head: [
    ['link', { rel: 'icon', href: 'http://pic.8pig.com/avatar/u_94/633694/fcddab0c421aabc21d390fa75a77cb30.jpg' }]
  ],
  themeConfig: {
    nav: [
      {
         text: '随笔',
         link: '/blog/'
      },
      {
        text: '健康',
        link: '/health/'
     },
     {
      text: '阅读',
      link: '/read/'
   },
    ],
    sidebar: {
      '/blog/': [
        'VirgilAbloh',
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, '../img')
      }
    }
  },
  // plugins: [
  //   '@vuepress/blog',
  //   {
  //     directories: [
  //       {
  //         // 当前分类的唯一 ID
  //         id: 'diary',
  //         // 目标文件夹
  //         dirname: 'diary',
  //         path: '/diary',
  //       },
  //     ],
  //   },
  // ],
}
