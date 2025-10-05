# 🚀 Deployment Guide

Your Warhammer 40K portfolio is ready to deploy! Here are the easiest ways to get it online:

## ⚡ Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your repository from GitHub
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. **Done!** Your site will be live at `https://your-project.vercel.app`

**Deployment time: ~2 minutes**

### Option 2: Netlify (Also Very Easy)

1. Visit [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"
7. **Done!** Your site will be live at `https://your-project.netlify.app`

**Deployment time: ~2 minutes**

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Run:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in your repo settings
5. **Done!** Live at `https://yourusername.github.io/repo-name`

**Deployment time: ~5 minutes**

### Option 4: Railway

1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects and deploys
6. **Done!** You'll get a live URL

**Deployment time: ~3 minutes**

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Free tier is generous
- ✅ Perfect for React/Vite apps
- ✅ Automatic git integration (every push deploys)

## 📝 Steps for Vercel (Detailed)

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit https://vercel.com/signup
   - Click "Continue with GitHub"

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your repository
   - Keep all default settings
   - Click "Deploy"

4. **Get Your Link**:
   - Wait ~60 seconds for build
   - Copy your live URL: `https://nilabh-deka-portfolio.vercel.app`
   - Share it with the world! 🎉

## 🔧 Custom Domain (Optional)

Once deployed, you can add a custom domain:
- **Vercel**: Project Settings → Domains → Add
- **Netlify**: Site Settings → Domain Management → Add custom domain

Popular registrars:
- [Namecheap](https://www.namecheap.com) - $10-15/year
- [Google Domains](https://domains.google) - $12/year
- [Cloudflare](https://www.cloudflare.com/products/registrar/) - At cost pricing

## 🎨 Post-Deployment

After deployment, you can:
1. **Update social links** in `src/components/Contact.jsx`
2. **Add your email** to the email link
3. **Connect analytics** (Vercel Analytics, Google Analytics)
4. **Add your actual GitHub/LinkedIn URLs**

## 🐛 Troubleshooting

If deployment fails:
- Check that `package.json` has correct scripts
- Ensure all dependencies are in `package.json`
- Try clearing cache and rebuilding
- Check build logs for specific errors

## 📊 Performance

Your site is optimized but you can improve further:
- Add lazy loading for 3D components
- Optimize bundle size with code splitting
- Use Lighthouse to check performance scores

---

**For the Emperor! Deploy with glory!** 🚀

Need help? Check the hosting provider's documentation or create an issue.
