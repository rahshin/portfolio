# Rahul Shinde - Engineering Portfolio

A minimalist static website built with pure HTML5/CSS3, designed for professional engineering portfolios. This site deploys directly to GitHub Pages and follows best practices similar to Anthropic's documentation style guide.

## Project Structure

```
portfolio/
├── index.html              # Home / About page  
├── about.html               # Detailed bio & background 
├── experience.html          # Work history timeline section
├── patent.html             # Patents filed and pending list
├── resume.html              # Downloadable PDF resume link area
├── contact.html            # Contact form placeholder (for future use)
│
├── engineering/
│   ├── index.html           # Engineering projects overview page with project card grid layout
│   ├── privacy-by-design.html      # Privacy-focused architecture article  
│   ├── distributed-processing.html  # Distributed systems technical writing piece 
│   ├── identity-cache.html         # Caching and authentication discussion post
│   ├── ai-assisted-engineering.html    # AI tools in engineering workflow reflection
│   └── auditability.html           # Security compliance practices documentation

├── css/                     # Shared stylesheet (no frameworks)
│   └── style.css          # Single source of truth for all styling including responsive rules, design tokens and media queries  
│
├── images/                  # Image assets and placeholders
│   ├── profile-pic.jpg.txt  <!-- Replace with your photo -->
│   └── hero-placeholder.svg      <!-- Banner graphics placeholder -->
│
└── docs/                    # Documents folder for supporting files
    └── RahulShinde-Resume.pdf         <--- Your resume PDF should go here

```

## Features

- **Lightning fast load times** - Pure HTML/CSS with no JavaScript dependencies  
- **Instantly deployable to GitHub Pages** - Works natively without build steps or server configuration required for hosting 
- **Minimalist typography-first design** Inspired by Stripe's documentation, OpenAI docs and Anthropic branding aesthetic guidelines 
- **Fully responsive layout** Adapts smoothly across desktop tablets mobile devices with touch optimized controls  
- **Accessible (WCAG 2.1 AA)** Semantic HTML5 structure aria-labels sufficient color contrast keyboard navigability  
- **SEO friendly** Clean semantic markup meta descriptions for search engine crawlers

## Design Philosophy

This portfolio follows the documentation-first design principles:

### Visual Style
- White background with subtle gray accents (#fafafa secondary backgrounds)  
- Neutral palette prioritizing content readability over decoration 
- Excellent whitespace management using 8px-based spacing system  
- Typography hierarchy with careful font weights for scanability  

### Technical Debt Minimization
Zero dependencies means zero updates to worry about. The CSS uses custom properties so you can quickly tweak colors or sizing without touching the entire stylesheet structure.

## Deployment Instructions

1. Push changes to GitHub repository at: `https://github.com/rahulshin/portfolio`  
2. Enable GitHub Pages in Settings > Pages with source set to main branch and root folder
3. Your site will be live at `https://rahshin.github.io/portfolio/` within 1-5 minutes

## Customization Guide

### Replace Images (Required)
After deployment swap out placeholder files:
```bash  
cp /path/to/my-photo.jpg ./images/profile-pic.jpg  

<!-- For retina display quality --> 
create_retina_version() { cp profile.jpg images/; convert profile.jpg -resize 200% images@2x.jpg }
