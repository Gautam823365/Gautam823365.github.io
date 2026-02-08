# 🚀 Quick Deployment Guide - GitHub Pages

Follow these simple steps to deploy your portfolio to GitHub Pages:

## Prerequisites
- A GitHub account (create one at github.com if you don't have one)
- Git installed on your computer (download from git-scm.com)

## Step-by-Step Deployment

### 1️⃣ Create GitHub Repository

1. Go to GitHub.com and log in
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `your-username.github.io`
   - ⚠️ Replace `your-username` with your actual GitHub username
   - Example: If your username is `gautam123`, name it `gautam123.github.io`
4. Set repository to **Public**
5. ✅ Click **"Create repository"**

### 2️⃣ Upload Your Files

**Method 1: Using Git (Recommended)**

Open terminal/command prompt in your portfolio folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

**Method 2: Direct Upload (Easier for beginners)**

1. On your repository page, click **"uploading an existing file"**
2. Drag and drop these files:
   - index.html
   - styles.css
   - script.js
3. Click **"Commit changes"**

### 3️⃣ Enable GitHub Pages

1. Go to repository **Settings** tab
2. Click **"Pages"** in left sidebar
3. Under "Source":
   - Branch: Select **"main"**
   - Folder: Keep as **"/ (root)"**
4. Click **"Save"**

### 4️⃣ Wait and Access

- Wait 2-3 minutes for deployment
- Your portfolio will be live at: `https://your-username.github.io`
- GitHub will show a green checkmark when ready

## 🔧 Important Customizations

Before deploying, update these in `index.html`:

### Update GitHub Links (Line ~145 & ~170)
```html
<!-- Change from -->
<a href="https://github.com/gautam-kumar" target="_blank">

<!-- To -->
<a href="https://github.com/YOUR-ACTUAL-USERNAME" target="_blank">
```

### Update LinkedIn Links (Line ~55 & ~165)
```html
<!-- Change from -->
<a href="https://linkedin.com/in/gautam-kumar" target="_blank">

<!-- To -->
<a href="https://linkedin.com/in/YOUR-ACTUAL-LINKEDIN" target="_blank">
```

### Update Project Repository Links (Line ~258 & ~289)
```html
<!-- Change from -->
<a href="https://github.com/gautam-kumar/assignmentbuddy" target="_blank">

<!-- To -->
<a href="https://github.com/YOUR-USERNAME/your-project-name" target="_blank">
```

## 📝 Post-Deployment Checklist

- [ ] Website is accessible at your GitHub Pages URL
- [ ] All links work correctly (LinkedIn, GitHub, Email)
- [ ] Mobile view looks good (test on phone)
- [ ] Project links point to actual repositories
- [ ] Contact information is accurate

## 🐛 Troubleshooting

**Problem: "404 Page Not Found"**
- Solution: Wait 5-10 minutes after enabling GitHub Pages
- Check repository name is exactly `your-username.github.io`

**Problem: "Styling not showing"**
- Solution: Make sure `styles.css` is in the same folder as `index.html`
- Check file names are exactly: `index.html`, `styles.css`, `script.js`

**Problem: "Links not working"**
- Solution: Update all placeholder URLs with your actual profile links

## 🎉 Next Steps

1. **Update Content**: Add your actual project repositories to GitHub
2. **Custom Domain** (Optional): You can add a custom domain in GitHub Pages settings
3. **SEO**: Add meta tags for better search engine visibility
4. **Analytics**: Add Google Analytics to track visitors

## 💡 Pro Tips

- **Regular Updates**: Update your portfolio as you complete new projects
- **Blog Section**: Consider adding a blog section for articles
- **Dark Mode**: Add a dark mode toggle for better UX
- **Animations**: The portfolio already has smooth animations included
- **Performance**: All images should be optimized (under 500KB)

## 📞 Need Help?

If you face any issues:
1. Check GitHub Pages documentation: https://pages.github.com
2. Verify all files are uploaded correctly
3. Check browser console for errors (F12 → Console tab)

---

**Your portfolio will be live at:** `https://your-username.github.io`

Good luck! 🚀
