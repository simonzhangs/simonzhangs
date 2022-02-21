import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'simonzhangs',
  description: 'simonzhangs\'松本博客-前端知识学习、记录和分享',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    // autoSetCategory: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
    logo: '/left-logo.png',
    author: 'simonzhangs',
    authorAvatar: '/logo.png',
    docsRepo: 'https://github.com/simonzhangs/simonzhangs.github.io',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme']
        },
        {
          text: 'module two',
          children: ['api', 'plugin']
        }
      ],
      '/blogs/interview-exp/': [
        {
          text: '腾讯---',
          children: ['tencent1', 'tencent2']
        },
        {
          text: '字节跳动---',
          children: ['bit1', 'bit2']
        }
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: '分类', link: '/categories/reco/1/' },
      { text: '标签', link: '/tags/tag1/1/' },
      { text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
      },
      {text: '时间轴', link: '/blogs/other/timeline'},
      {text: '关于', link: '/blogs/other/about'}
    ],
    //公告部分，每次刷新会在右下侧弹出
    bulletin: {
      // body: [
      //   {
      //     type: 'text',
      //     content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
      //     style: 'font-size: 12px;'
      //   },
      //   {
      //     type: 'hr',
      //   },
      //   {
      //     type: 'title',
      //     content: 'QQ 群',
      //   },
      //   {
      //     type: 'text',
      //     content: `
      //     <ul>
      //       <li>QQ群1：1037296104</li>
      //       <li>QQ群2：1061561395</li>
      //       <li>QQ群3：962687802</li>
      //     </ul>`,
      //     style: 'font-size: 12px;'
      //   },
      //   {
      //     type: 'hr',
      //   },
      //   {
      //     type: 'title',
      //     content: 'GitHub',
      //   },
      //   {
      //     type: 'text',
      //     content: `
      //     <ul>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
      //     </ul>`,
      //     style: 'font-size: 12px;'
      //   },
      //   {
      //     type: 'hr',
      //   },
      //   {
      //     type: 'buttongroup',
      //     children: [
      //       {
      //         text: '打赏',
      //         link: '/docs/others/donate.html'
      //       }
      //     ]
      //   }
      // ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
})
