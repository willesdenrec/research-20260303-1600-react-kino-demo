# Deployment Guide

This guide explains how to deploy the React-Kino demo project to various hosting platforms.

## Live Demo URL

The project is available at: https://willesdenrec.github.io/research-20260303-1600-react-kino-demo/

## Deployment Options

### 1. GitHub Pages (Recommended)

#### Automatic Deployment (GitHub Actions)

1. Enable GitHub Pages in repository settings:
   - Go to **Settings** → **Pages**
   - Source: **GitHub Actions**
   - Save

2. The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on push to main.

#### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages using gh-pages
npx gh-pages -d dist
```

### 2. Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwillesdenrec%2Fresearch-20260303-1600-react-kino-demo)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Select the repository
4. Vercel will automatically detect the Vite configuration and deploy

### 3. Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/willesdenrec/research-20260303-1600-react-kino-demo)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

### 4. Cloudflare Pages

1. Go to Cloudflare Dashboard → **Pages** → **Create a project**
2. Connect your GitHub repository
3. Configure build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click "Save and Deploy"

## Environment Variables

No environment variables are required for this demo project.

## Build Configuration

The project uses Vite with the following configuration:

- **Framework**: React 18
- **Build tool**: Vite 5
- **CSS**: Plain CSS with CSS variables
- **Bundling**: Code splitting with manual chunks
- **Optimization**: Tree-shaking, minification, source maps

## Performance Optimization

The build includes:

1. **Code splitting**: React and React-Kino are split into separate chunks
2. **Tree shaking**: Unused code is eliminated
3. **Minification**: JavaScript and CSS are minified
4. **Source maps**: For debugging in production
5. **Asset optimization**: Images and fonts are optimized

## Custom Domain

To use a custom domain:

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)
2. Add DNS records as instructed by your hosting platform
3. Configure the custom domain in your hosting platform's settings
4. Update the `base` in `vite.config.js` if needed:

```js
export default defineConfig({
  base: '/your-repo-name/', // For GitHub Pages
  // or
  base: '/', // For custom domain
})
```

## Troubleshooting

### Build Errors

1. **Node.js version**: Ensure you're using Node.js 18 or higher
2. **Dependencies**: Run `npm install` to install all dependencies
3. **Memory issues**: Increase Node.js memory limit: `NODE_OPTIONS=--max-old-space-size=4096`

### Deployment Issues

1. **404 errors on GitHub Pages**: Ensure `base` is set correctly in `vite.config.js`
2. **CORS issues**: Check if all assets are being served from the correct domain
3. **Routing issues**: For SPAs, configure redirects to `index.html`

### Performance Issues

1. **Large bundle size**: Check what's being imported
2. **Slow loading**: Enable compression on your hosting platform
3. **Render blocking**: Consider adding critical CSS inline

## Monitoring

After deployment, monitor:

1. **Page speed**: Use Google PageSpeed Insights
2. **Accessibility**: Run Lighthouse audits
3. **Browser compatibility**: Test on different browsers
4. **Mobile responsiveness**: Test on various screen sizes

## Updates and Maintenance

To update the deployed site:

1. Make changes to the code
2. Commit and push to the main branch
3. The deployment will automatically trigger (if using CI/CD)
4. Monitor the deployment logs for any issues

## Support

For deployment issues:
- Check the hosting platform's documentation
- Review build logs for errors
- Ensure all dependencies are correctly installed
- Verify Node.js version compatibility