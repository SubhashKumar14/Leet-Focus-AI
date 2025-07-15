# Deployment Guide - Free Hosting with Netlify

This guide will help you deploy your DSA Assist website to Netlify for free, making it accessible to users worldwide without needing to purchase a domain.

## What You'll Get

✅ **Free hosting** on Netlify  
✅ **Free subdomain** (e.g., `your-site-name.netlify.app`)  
✅ **Automatic HTTPS** SSL certificate  
✅ **Global CDN** for fast loading worldwide  
✅ **Automatic deployments** from Git  
✅ **Serverless functions** for your API endpoints

## Prerequisites

- A GitHub account
- Your project code pushed to a GitHub repository

## Step 1: Prepare Your Repository

### 1.1 Push Code to GitHub

If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 1.2 Verify Build Configuration

Your project is already configured for Netlify with:

- ✅ `netlify.toml` configuration file
- ✅ Build commands set up
- ✅ Serverless functions configured
- ✅ SPA routing handled

## Step 2: Deploy to Netlify

### 2.1 Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Netlify to access your repositories

### 2.2 Deploy Your Site

1. **Import Project:**

   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository from the list

2. **Configure Build Settings:**

   - **Base directory:** Leave empty (root)
   - **Build command:** `npm run build:client` (should auto-detect)
   - **Publish directory:** `dist/spa` (should auto-detect)
   - **Functions directory:** `netlify/functions` (should auto-detect)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will start building your site (takes 2-5 minutes)

### 2.3 Your Site is Live!

Once deployment completes:

- You'll get a random URL like `magical-unicorn-abc123.netlify.app`
- Your site will be live and accessible worldwide
- API endpoints will work at `/api/*`

## Step 3: Customize Your Site

### 3.1 Change Site Name

1. Go to your site dashboard on Netlify
2. Click "Site settings"
3. Under "Site details" → "Site name"
4. Change to something like `dsa-assist` or `leetcode-focus`
5. Your new URL: `dsa-assist.netlify.app`

### 3.2 Set Environment Variables (if needed)

If your extension or API needs environment variables:

1. Go to "Site settings" → "Environment variables"
2. Add any required variables
3. Redeploy your site

## Step 4: Update Extension Links

Once deployed, update your extension installation page to point to your live site.

### 4.1 Update Website URLs

In your extension's `manifest.json` or documentation, update any references:

```json
{
  "homepage_url": "https://your-site-name.netlify.app",
  "support_url": "https://your-site-name.netlify.app/extension"
}
```

### 4.2 Test Extension Download

Visit your live site and test the extension download functionality:

1. Go to `https://your-site-name.netlify.app/extension`
2. Test the "Download Extension" button
3. Verify the zip file downloads correctly

## Step 5: Set Up Automatic Deployments

### 5.1 Auto-Deploy on Git Push

Netlify automatically deploys when you push to your main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update website content"
git push origin main
# Site will automatically rebuild and deploy!
```

### 5.2 Deploy Previews

Netlify also creates preview deployments for pull requests, perfect for testing changes.

## Step 6: Monitor Your Site

### 6.1 Analytics (Free Tier)

Netlify provides basic analytics:

- Page views
- Unique visitors
- Top pages
- Bandwidth usage

### 6.2 Function Logs

Monitor your API endpoints:

1. Go to "Functions" in your site dashboard
2. View logs for debugging API issues
3. Monitor usage and performance

## Advanced Configuration (Optional)

### Custom Domain (Optional)

If you later want a custom domain:

1. Purchase a domain from any registrar
2. In Netlify: "Domain settings" → "Add custom domain"
3. Update DNS settings as instructed
4. Netlify provides free SSL automatically

### Form Handling

Netlify can handle contact forms for free:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Redirect Rules

Add more redirect rules in `netlify.toml` if needed:

```toml
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301
```

## Free Tier Limits

Netlify's free tier includes:

- ✅ **Bandwidth:** 100GB/month
- ✅ **Build minutes:** 300 minutes/month
- ✅ **Sites:** Unlimited
- ✅ **Functions:** 125K requests/month
- ✅ **Form submissions:** 100/month

This is more than enough for most projects!

## Troubleshooting

### Build Failures

1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify build commands work locally

### Function Errors

1. Check function logs in Netlify dashboard
2. Ensure all npm packages are installed
3. Verify function syntax is correct

### Extension Download Issues

1. Test the API endpoint directly: `your-site.netlify.app/api/download-extension`
2. Check if the `leetcode-focus-extension` folder exists in your repo
3. Verify the archiver package is listed in dependencies

## Success Checklist

- [ ] Site deploys successfully
- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Extension download works
- [ ] API endpoints respond correctly
- [ ] Site is accessible via custom URL

## Next Steps

1. **Share your site:** Your website is now live and shareable!
2. **Publish extension:** Follow the Chrome Web Store guide
3. **Gather feedback:** Share with friends and users
4. **Iterate:** Continue improving based on user feedback

## Example URLs

After deployment, your site structure will be:

- **Homepage:** `https://dsa-assist.netlify.app`
- **Problems:** `https://dsa-assist.netlify.app/problems`
- **Dashboard:** `https://dsa-assist.netlify.app/dashboard`
- **Extension:** `https://dsa-assist.netlify.app/extension`
- **API:** `https://dsa-assist.netlify.app/api/download-extension`

Your DSA Assist platform is now live and ready to help developers worldwide improve their coding skills! 🚀
