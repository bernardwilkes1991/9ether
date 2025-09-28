import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://9ether.bernardwilkes.dev",
  meta: {
    favicon: "/avatar.png",
    url: "https://9ether.bernardwilkes.dev",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/bernardwilkes91",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/bernardwilkes1991",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [
      {
        label: "AI Chat",
        link: "/en/ai-chat",
      },
      {
        label: "Journal",
        link: "/en/journal",
      },
      {
        label: "Science",
        link: "/en/science",
      },
    ],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "九醚",
  meta: {
    ...common.meta,
    title: "九醚",
    slogan: "终极人工智能应用",
    description: "科学、艺术与技术的融合平台",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "AI对话",
        link: "/zh/ai-chat",
      },
      {
        label: "日记",
        link: "/zh/journal",
      },
      {
        label: "科学",
        link: "/zh/science",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "档案",
      description: "Ether社区的所有文章和讨论",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "社区链接",
      description: "Ether社区伙伴和资源",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于伯纳德",
      description: "Bernard Denzil Wilkes和Ether的故事",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "Ether",
  meta: {
    ...common.meta,
    title: "Ether - The Ultimate AI Application",
    slogan: "Merging Science, Art, and Technology",
    description: "Real-time AI answers, personal journaling, and quantum physics exploration",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "AI Chat",
        link: "/en/ai-chat",
      },
      {
        label: "Journal",
        link: "/en/journal",
      },
      {
        label: "Science",
        link: "/en/science",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "Community Archive",
      description: "All posts and discussions in the Ether community",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "Community Links",
      description: "Ether community partners and resources",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Bernard",
      description: "The story of Bernard Denzil Wilkes and Ether",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
