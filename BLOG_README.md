# Blog Setup Instructions

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

### Adding New Posts

1. Create a new markdown file in the `_posts/` directory
2. Use the filename format: `post-title.md`
3. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
categories: category_name
tags: ["tag1", "tag2", "tag3"]
date: "2025-06-23"
description: "Brief description of your post"
---

# Your Post Content

Write your markdown content here...
```

### Available Categories

- `ai_development` - AI and Machine Learning posts
- `architecture` - Software architecture and design patterns
- `cloud_solutions` - Cloud computing and Azure content
- `azure_ai` - Azure AI Services specific content
- `best_practices` - Development best practices
- `tutorials` - Step-by-step guides

### Available Tags

Use relevant tags like:
- `azure`, `ai`, `machine-learning`, `cloud`
- `microservices`, `kubernetes`, `docker`
- `architecture`, `development`, `best-practices`
- `azure-ai`, `cognitive-services`, `openai`

### File Structure

```
PersonalProfile/
├── _posts/                          # Markdown blog posts
│   ├── ai-first-development-azure.md
│   ├── microservices-architecture-best-practices.md
│   └── building-intelligent-cloud-solutions.md
├── src/
│   ├── components/
│   │   └── BlogCard.astro          # Blog post preview component
│   ├── layouts/
│   │   └── Layout.astro            # Base layout
│   └── pages/
│       ├── blog.astro              # Blog listing page
│       └── blog/
│           └── [slug].astro        # Individual post page
├── astro.config.mjs               # Astro configuration
├── package.json                   # Dependencies
└── tailwind.config.mjs           # Tailwind CSS configuration
```

### Features

✅ **Static Site Generation** - Fast loading blog pages
✅ **Markdown Support** - Write posts in markdown with frontmatter
✅ **Responsive Design** - Works on desktop and mobile
✅ **Tag & Category Filtering** - Interactive filtering on blog page
✅ **Reading Time Estimation** - Automatic calculation
✅ **SEO Optimized** - Meta tags and structured data
✅ **Professional Design** - Matches your portfolio theme
✅ **Social Sharing** - LinkedIn and link sharing
✅ **Syntax Highlighting** - Code blocks with highlighting

### Deployment

The blog is configured to work with:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages, make sure to set the correct `base` path in `astro.config.mjs`.

### Customization

- **Colors**: Modify the color scheme in `tailwind.config.mjs`
- **Layout**: Edit `src/layouts/Layout.astro` for global changes
- **Blog Card**: Customize `src/components/BlogCard.astro` for post previews
- **Post Template**: Modify `src/pages/blog/[slug].astro` for individual posts

### Navigation

The blog is integrated into your main portfolio:
- Main portfolio: `/` (index.html)
- Blog listing: `/blog`
- Individual posts: `/blog/post-slug`

Navigation between portfolio and blog is seamless with consistent design.
