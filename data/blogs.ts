import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    content: `Next.js is a powerful framework for building React applications. In this post, we'll dive into how to get started with it and explore its powerful features like server-side rendering (SSR) and static site generation (SSG).`,
    excerpt: "An introduction to Next.js and its powerful features.",
    featuredImage: "/images/img(1).jpg",
    author: {
      name: "John Doe",
      bio: "Web developer and Next.js enthusiast.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        website: "https://johndoe.dev"
      }
    },
    tags: ["Next.js", "React", "Web Development"],
    categories: ["Web Development", "JavaScript"],
    publishedAt: new Date("2024-09-18"),
    updatedAt: new Date("2024-09-18"),
    readingTime: "5 min read",
    isFeatured: true,
    isPublished: true,
    views: 1200,
    likes: 150,
    seo: {
      metaTitle: "Getting Started with Next.js",
      metaDescription: "Learn how to get started with Next.js, a powerful framework for building React applications.",
      metaKeywords: ["Next.js", "React", "Web Development"],
      canonicalUrl: "https://yourblog.com/getting-started-with-nextjs",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Getting Started with Next.js",
      ogDescription: "Discover the basics of Next.js and its features for building modern web applications."
    },
    comments: [
      {
        id: "c1",
        author: "Alice Johnson",
        content: "Great introduction to Next.js! Looking forward to more posts.",
        createdAt: new Date("2024-09-19"),
        likes: 20,
        replies: []
      }
    ]
  },
  {
    id: "2",
    title: "TailwindCSS for Modern Web Design",
    slug: "tailwindcss-modern-web-design",
    content: `TailwindCSS is a utility-first CSS framework that allows you to build responsive and modern designs quickly. This post will walk you through the basics of using TailwindCSS in your Next.js projects.`,
    excerpt: "Learn how TailwindCSS can simplify your workflow and help you create beautiful, responsive designs.",
    featuredImage: "/images/img(2).jpg",
    author: {
      name: "Jane Smith",
      bio: "UI/UX designer and TailwindCSS aficionado.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        website: "https://janesmith.design"
      }
    },
    tags: ["TailwindCSS", "CSS", "Web Design"],
    categories: ["Web Design", "CSS"],
    publishedAt: new Date("2024-09-17"),
    updatedAt: new Date("2024-09-17"),
    readingTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    views: 800,
    likes: 95,
    seo: {
      metaTitle: "TailwindCSS for Modern Web Design",
      metaDescription: "Explore how TailwindCSS simplifies creating modern and responsive web designs.",
      metaKeywords: ["TailwindCSS", "CSS", "Responsive Design"],
      canonicalUrl: "https://yourblog.com/tailwindcss-modern-web-design",
      ogImage: "/images/img(8).jpg",
      ogTitle: "TailwindCSS for Modern Web Design",
      ogDescription: "Understand the benefits of using TailwindCSS for your web design projects."
    },
    comments: [
      {
        id: "c2",
        author: "Mark Lee",
        content: "TailwindCSS has revolutionized my design process. Thanks for the insights!",
        createdAt: new Date("2024-09-18"),
        likes: 10,
        replies: []
      }
    ]
  },
  {
    id: "3",
    title: "Understanding Framer Motion in React",
    slug: "understanding-framer-motion",
    content: `Framer Motion is a great library for adding animations to your React projects. In this post, we'll cover how to use it to create smooth animations in your web applications.`,
    excerpt: "A comprehensive guide to using Framer Motion for animations in your React projects.",
    featuredImage: "/images/img(3).jpg",
    author: {
      name: "Chris Evans",
      bio: "Frontend developer and animation expert.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/chrisevans",
        linkedin: "https://linkedin.com/in/chrisevans",
        github: "https://github.com/chrisevans",
        website: "https://chrisevans.dev"
      }
    },
    tags: ["Framer Motion", "Animations", "React"],
    categories: ["React", "Animations"],
    publishedAt: new Date("2024-09-16"),
    updatedAt: new Date("2024-09-16"),
    readingTime: "6 min read",
    isFeatured: false,
    isPublished: true,
    views: 950,
    likes: 120,
    seo: {
      metaTitle: "Understanding Framer Motion in React",
      metaDescription: "Learn how to use Framer Motion for animations in your React applications.",
      metaKeywords: ["Framer Motion", "React", "Animations"],
      canonicalUrl: "https://yourblog.com/understanding-framer-motion",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Understanding Framer Motion in React",
      ogDescription: "A detailed guide to adding animations to React projects with Framer Motion."
    },
    comments: [
      {
        id: "c3",
        author: "Sophie Turner",
        content: "This guide really helped me understand Framer Motion. Thanks!",
        createdAt: new Date("2024-09-17"),
        likes: 15,
        replies: []
      }
    ]
  },
  {
    id: "4",
    title: "Why TypeScript is a Game-Changer",
    slug: "typescript-game-changer",
    content: `TypeScript is a strongly typed superset of JavaScript that adds static types to the language. This post will explore why TypeScript is becoming increasingly popular and how it can improve your development workflow.`,
    excerpt: "Discover why TypeScript is essential for modern JavaScript development.",
    featuredImage: "/images/img(4).jpg",
    author: {
      name: "Alice Johnson",
      bio: "Software engineer and TypeScript advocate.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
        github: "https://github.com/alicejohnson",
        website: "https://alicejohnson.dev"
      }
    },
    tags: ["TypeScript", "JavaScript", "Web Development"],
    categories: ["JavaScript", "Programming"],
    publishedAt: new Date("2024-09-15"),
    updatedAt: new Date("2024-09-15"),
    readingTime: "5 min read",
    isFeatured: true,
    isPublished: true,
    views: 1300,
    likes: 175,
    seo: {
      metaTitle: "Why TypeScript is a Game-Changer",
      metaDescription: "Learn about the benefits of using TypeScript and how it can enhance your JavaScript development experience.",
      metaKeywords: ["TypeScript", "JavaScript", "Development"],
      canonicalUrl: "https://yourblog.com/typescript-game-changer",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Why TypeScript is a Game-Changer",
      ogDescription: "Understand the advantages of adopting TypeScript in your development projects."
    },
    comments: [
      {
        id: "c4",
        author: "Liam Brown",
        content: "TypeScript has made a huge difference in my projects. Great article!",
        createdAt: new Date("2024-09-16"),
        likes: 25,
        replies: []
      }
    ]
  },
  {
    id: "5",
    title: "Exploring CSS Grid Layout",
    slug: "css-grid-layout",
    content: `CSS Grid Layout is a powerful layout system for creating complex web layouts with ease. This post will cover the basics of CSS Grid and provide examples of how to use it effectively.`,
    excerpt: "A guide to mastering CSS Grid Layout for modern web designs.",
    featuredImage: "/images/img(5).jpg",
    author: {
      name: "Emma Wilson",
      bio: "Frontend developer and CSS expert.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/emmawilson",
        linkedin: "https://linkedin.com/in/emmawilson",
        github: "https://github.com/emmawilson",
        website: "https://emmawilson.dev"
      }
    },
    tags: ["CSS Grid", "CSS", "Web Design"],
    categories: ["CSS", "Web Design"],
    publishedAt: new Date("2024-09-14"),
    updatedAt: new Date("2024-09-14"),
    readingTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    views: 650,
    likes: 80,
    seo: {
      metaTitle: "Exploring CSS Grid Layout",
      metaDescription: "Master CSS Grid Layout with this comprehensive guide on creating complex web layouts.",
      metaKeywords: ["CSS Grid", "CSS Layout", "Web Design"],
      canonicalUrl: "https://yourblog.com/css-grid-layout",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Exploring CSS Grid Layout",
      ogDescription: "Learn how to use CSS Grid Layout to build modern and responsive web designs."
    },
    comments: [
      {
        id: "c5",
        author: "Noah Davis",
        content: "CSS Grid is so powerful! This guide was really helpful.",
        createdAt: new Date("2024-09-15"),
        likes: 18,
        replies: []
      }
    ]
  },
  {
    id: "6",
    title: "A Beginner's Guide to GraphQL",
    slug: "beginners-guide-to-graphql",
    content: `GraphQL is a query language for APIs that allows clients to request exactly the data they need. This post will introduce you to GraphQL and how it differs from REST APIs.`,
    excerpt: "Learn the basics of GraphQL and how it can improve API interactions.",
    featuredImage: "/images/img(6).jpg",
    author: {
      name: "Lucas Martin",
      bio: "Backend developer and GraphQL enthusiast.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/lucasmartin",
        linkedin: "https://linkedin.com/in/lucasmartin",
        github: "https://github.com/lucasmartin",
        website: "https://lucasmartin.dev"
      }
    },
    tags: ["GraphQL", "APIs", "Backend"],
    categories: ["Backend", "APIs"],
    publishedAt: new Date("2024-09-13"),
    updatedAt: new Date("2024-09-13"),
    readingTime: "6 min read",
    isFeatured: false,
    isPublished: true,
    views: 720,
    likes: 90,
    seo: {
      metaTitle: "A Beginner's Guide to GraphQL",
      metaDescription: "An introduction to GraphQL and its advantages over traditional REST APIs.",
      metaKeywords: ["GraphQL", "APIs", "Backend Development"],
      canonicalUrl: "https://yourblog.com/beginners-guide-to-graphql",
      ogImage: "/images/img(8).jpg",
      ogTitle: "A Beginner's Guide to GraphQL",
      ogDescription: "Discover the benefits of GraphQL and how it can enhance your API interactions."
    },
    comments: [
      {
        id: "c6",
        author: "Olivia Harris",
        content: "GraphQL has really changed how I handle APIs. Great overview!",
        createdAt: new Date("2024-09-14"),
        likes: 22,
        replies: []
      }
    ]
  },
  {
    id: "7",
    title: "Mastering Responsive Design with Flexbox",
    slug: "responsive-design-flexbox",
    content: `Flexbox is a CSS layout module that provides a more efficient way to lay out, align, and distribute space among items in a container. This post will cover how to use Flexbox for responsive design.`,
    excerpt: "A guide to using Flexbox for creating responsive web layouts.",
    featuredImage: "/images/img(7).jpg",
    author: {
      name: "Mia Taylor",
      bio: "Frontend developer and Flexbox specialist.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/miataylor",
        linkedin: "https://linkedin.com/in/miataylor",
        github: "https://github.com/miataylor",
        website: "https://miataylor.dev"
      }
    },
    tags: ["Flexbox", "CSS", "Responsive Design"],
    categories: ["CSS", "Responsive Design"],
    publishedAt: new Date("2024-09-12"),
    updatedAt: new Date("2024-09-12"),
    readingTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    views: 830,
    likes: 100,
    seo: {
      metaTitle: "Mastering Responsive Design with Flexbox",
      metaDescription: "Learn how to use Flexbox for creating flexible and responsive web layouts.",
      metaKeywords: ["Flexbox", "CSS", "Responsive Design"],
      canonicalUrl: "https://yourblog.com/responsive-design-flexbox",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Mastering Responsive Design with Flexbox",
      ogDescription: "A comprehensive guide to utilizing Flexbox for responsive and modern web design."
    },
    comments: [
      {
        id: "c7",
        author: "James White",
        content: "Flexbox is fantastic for responsive design. Thanks for the great guide!",
        createdAt: new Date("2024-09-13"),
        likes: 30,
        replies: []
      }
    ]
  },
  {
    id: "8",
    title: "Building Progressive Web Apps with Next.js",
    slug: "progressive-web-apps-nextjs",
    content: `Progressive Web Apps (PWAs) offer a native app-like experience on the web. In this post, we'll explore how to build PWAs using Next.js and the benefits they offer.`,
    excerpt: "How to build Progressive Web Apps using Next.js and why they are beneficial.",
    featuredImage: "/images/img(8).jpg",
    author: {
      name: "Ethan Scott",
      bio: "Full-stack developer with a focus on PWAs.",
      profileImage: "/author.png",
      socialLinks: {
        twitter: "https://twitter.com/ethanscott",
        linkedin: "https://linkedin.com/in/ethanscott",
        github: "https://github.com/ethanscott",
        website: "https://ethanscott.dev"
      }
    },
    tags: ["PWA", "Next.js", "Web Development"],
    categories: ["Web Development", "Progressive Web Apps"],
    publishedAt: new Date("2024-09-11"),
    updatedAt: new Date("2024-09-11"),
    readingTime: "7 min read",
    isFeatured: true,
    isPublished: true,
    views: 1050,
    likes: 140,
    seo: {
      metaTitle: "Building Progressive Web Apps with Next.js",
      metaDescription: "Discover how to build Progressive Web Apps using Next.js for a native app-like experience on the web.",
      metaKeywords: ["PWA", "Next.js", "Web Development"],
      canonicalUrl: "https://yourblog.com/progressive-web-apps-nextjs",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Building Progressive Web Apps with Next.js",
      ogDescription: "A detailed guide to creating Progressive Web Apps with Next.js and their advantages."
    },
    comments: [
      {
        id: "c8",
        author: "Ava Martinez",
        content: "This guide on PWAs was exactly what I needed. Thanks!",
        createdAt: new Date("2024-09-12"),
        likes: 25,
        replies: []
      }
    ]
  },
  {
    id: "9",
    title: "Intro to Server-Side Rendering with React",
    slug: "server-side-rendering-react",
    content: `Server-Side Rendering (SSR) with React improves performance and SEO. This post will explain the basics of SSR and how to implement it in your React applications.`,
    excerpt: "Learn about Server-Side Rendering with React and its benefits for performance and SEO.",
    featuredImage: "/images/img(8).jpg",
    author: {
      name: "Sophia Clark",
      bio: "React developer and SSR advocate.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/sophiaclark",
        linkedin: "https://linkedin.com/in/sophiaclark",
        github: "https://github.com/sophiaclark",
        website: "https://sophiaclark.dev"
      }
    },
    tags: ["SSR", "React", "Performance"],
    categories: ["React", "Performance"],
    publishedAt: new Date("2024-09-10"),
    updatedAt: new Date("2024-09-10"),
    readingTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    views: 900,
    likes: 110,
    seo: {
      metaTitle: "Intro to Server-Side Rendering with React",
      metaDescription: "An introduction to Server-Side Rendering with React and its impact on performance and SEO.",
      metaKeywords: ["SSR", "React", "Performance"],
      canonicalUrl: "https://yourblog.com/server-side-rendering-react",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Intro to Server-Side Rendering with React",
      ogDescription: "Explore Server-Side Rendering with React and how it can enhance performance and SEO."
    },
    comments: [
      {
        id: "c9",
        author: "Benjamin Lewis",
        content: "SSR has been a game-changer for my React apps. Great overview!",
        createdAt: new Date("2024-09-11"),
        likes: 20,
        replies: []
      }
    ]
  },
  {
    id: "10",
    title: "Building Custom Hooks in React",
    slug: "custom-hooks-react",
    content: `Custom hooks in React allow you to extract and reuse logic across multiple components. This post will show you how to create and use custom hooks effectively.`,
    excerpt: "Learn how to build and use custom hooks in React to reuse logic across your components.",
    featuredImage: "/images/img(10).jpg",
    author: {
      name: "Charlotte Adams",
      bio: "React developer specializing in custom hooks.",
      profileImage: "/author.png",
      socialLinks: {
        twitter: "https://twitter.com/charlotteadams",
        linkedin: "https://linkedin.com/in/charlotteadams",
        github: "https://github.com/charlotteadams",
        website: "https://charlotteadams.dev"
      }
    },
    tags: ["React", "Custom Hooks", "Development"],
    categories: ["React", "Development"],
    publishedAt: new Date("2024-09-09"),
    updatedAt: new Date("2024-09-09"),
    readingTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    views: 770,
    likes: 85,
    seo: {
      metaTitle: "Building Custom Hooks in React",
      metaDescription: "A guide to creating and using custom hooks in React for reusable logic.",
      metaKeywords: ["React", "Custom Hooks", "Development"],
      canonicalUrl: "https://yourblog.com/custom-hooks-react",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Building Custom Hooks in React",
      ogDescription: "Understand how to create and use custom hooks in React for better component logic management."
    },
    comments: [
      {
        id: "c10",
        author: "Lily Johnson",
        content: "Custom hooks have made my code so much cleaner. Thanks for the guide!",
        createdAt: new Date("2024-09-10"),
        likes: 12,
        replies: []
      }
    ]
  },
  {
    id: "11",
    title: "An Introduction to Web Performance Optimization",
    slug: "web-performance-optimization",
    content: `Web performance optimization is crucial for providing a fast and smooth user experience. This post will introduce you to various techniques and tools for optimizing your website's performance.`,
    excerpt: "Learn the basics of web performance optimization and how to enhance your website's speed and efficiency.",
    featuredImage: "/images/img(11).jpg",
    author: {
      name: "David Wilson",
      bio: "Web performance specialist and optimization expert.",
      profileImage: "/author.png",
      socialLinks: {
        twitter: "https://twitter.com/davidwilson",
        linkedin: "https://linkedin.com/in/davidwilson",
        github: "https://github.com/davidwilson",
        website: "https://davidwilson.dev"
      }
    },
    tags: ["Performance", "Web Optimization", "Development"],
    categories: ["Web Development", "Performance"],
    publishedAt: new Date("2024-09-08"),
    updatedAt: new Date("2024-09-08"),
    readingTime: "6 min read",
    isFeatured: true,
    isPublished: true,
    views: 1150,
    likes: 130,
    seo: {
      metaTitle: "An Introduction to Web Performance Optimization",
      metaDescription: "Explore techniques and tools for optimizing your website's performance and enhancing user experience.",
      metaKeywords: ["Performance", "Web Optimization", "Development"],
      canonicalUrl: "https://yourblog.com/web-performance-optimization",
      ogImage: "/images/img(8).jpg",
      ogTitle: "An Introduction to Web Performance Optimization",
      ogDescription: "A beginner's guide to improving your website's speed and efficiency with performance optimization techniques."
    },
    comments: [
      {
        id: "c11",
        author: "Mason Harris",
        content: "Great tips on web performance. My site has never been faster!",
        createdAt: new Date("2024-09-09"),
        likes: 28,
        replies: []
      }
    ]
  },
  {
    id: "12",
    title: "Getting Started with Docker for Development",
    slug: "docker-for-development",
    content: `Docker is a tool designed to make it easier to create, deploy, and run applications using containers. This post will cover the basics of Docker and how to use it in your development workflow.`,
    excerpt: "Learn the basics of Docker and how it can streamline your development process.",
    featuredImage: "/images/img(12).jpg",
    author: {
      name: "Ethan Davis",
      bio: "DevOps engineer and Docker advocate.",
      profileImage: "/author.png",
      socialLinks: {
        twitter: "https://twitter.com/ethandavis",
        linkedin: "https://linkedin.com/in/ethandavis",
        github: "https://github.com/ethandavis",
        website: "https://ethandavis.dev"
      }
    },
    tags: ["Docker", "DevOps", "Development"],
    categories: ["DevOps", "Development"],
    publishedAt: new Date("2024-09-07"),
    updatedAt: new Date("2024-09-07"),
    readingTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    views: 680,
    likes: 70,
    seo: {
      metaTitle: "Getting Started with Docker for Development",
      metaDescription: "An introduction to Docker and its benefits for streamlining development workflows.",
      metaKeywords: ["Docker", "DevOps", "Development"],
      canonicalUrl: "https://yourblog.com/docker-for-development",
      ogImage: "/images/img(8).jpg",
      ogTitle: "Getting Started with Docker for Development",
      ogDescription: "Discover how Docker can simplify your development process and improve efficiency."
    },
    comments: [
      {
        id: "c12",
        author: "Aiden Johnson",
        content: "Docker has been a game-changer for my development environment. Thanks for the guide!",
        createdAt: new Date("2024-09-08"),
        likes: 15,
        replies: []
      }
    ]
  },
  {
    id: "13",
    title: "The Benefits of Using a Static Site Generator",
    slug: "static-site-generator-benefits",
    content: `Static Site Generators (SSGs) offer a way to build websites that are fast, secure, and easy to deploy. This post will explore the benefits of using an SSG and how it can improve your web development process.`,
    excerpt: "Discover the advantages of Static Site Generators and how they can enhance your web projects.",
    featuredImage: "/images/img(8).jpg",
    author: {
      name: "Olivia Moore",
      bio: "Web developer with a passion for static site generators.",
      profileImage: "/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/oliviamoore",
        linkedin: "https://linkedin.com/in/oliviamoore",
        github: "https://github.com/oliviamoore",
        website: "https://oliviamoore.dev"
      }
    },
    tags: ["SSG", "Web Development", "Static Sites"],
    categories: ["Web Development", "Static Sites"],
    publishedAt: new Date("2024-09-06"),
    updatedAt: new Date("2024-09-06"),
    readingTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    views: 850,
    likes: 95,
    seo: {
      metaTitle: "The Benefits of Using a Static Site Generator",
      metaDescription: "Explore the advantages of Static Site Generators for building fast and secure websites.",
      metaKeywords: ["SSG", "Static Sites", "Web Development"],
      canonicalUrl: "https://yourblog.com/static-site-generator-benefits",
      ogImage: "/images/img(8).jpg",
      ogTitle: "The Benefits of Using a Static Site Generator",
      ogDescription: "A comprehensive guide to the benefits of Static Site Generators and how they can enhance your web projects."
    },
    comments: [
      {
        id: "c13",
        author: "Daniel Lewis",
        content: "Static site generators are so fast! Thanks for the insights.",
        createdAt: new Date("2024-09-07"),
        likes: 20,
        replies: []
      }
    ]
  }
];
