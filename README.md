# Gautam Kumar - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Java Backend Developer.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic counters
- **Project Showcase**: Detailed project cards with tech stacks and features
- **Skills Section**: Comprehensive display of technical skills
- **Contact Section**: Easy-to-use contact information cards

## 🚀 Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome Icons

## 📦 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with all styling
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🛠️ Setup & Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - For example: `gautamkumar.github.io`
4. Make sure the repository is **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all three files (index.html, styles.css, script.js)
3. Scroll down and click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository settings (click "Settings" tab)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for deployment

### Step 4: Access Your Portfolio

Your portfolio will be live at: `https://your-username.github.io`

## ✏️ Customization Guide

### Update Personal Information

1. **Contact Links**: Update your actual GitHub and LinkedIn URLs in `index.html`:
   ```html
   <a href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank">
   <a href="https://github.com/YOUR-GITHUB-USERNAME" target="_blank">
   ```

2. **Project Links**: Update GitHub repository links in the projects section:
   ```html
   <a href="https://github.com/YOUR-USERNAME/PROJECT-NAME" target="_blank">
   ```

3. **Email and Phone**: Already populated from your resume

### Customize Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... other colors ... */
}
```

### Add More Projects

Copy the project card structure in `index.html` and modify:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-icon-name project-icon"></i>
        <h3>Project Name</h3>
    </div>
    <!-- ... rest of project card ... -->
</div>
```

### Update Skills

Add or remove skills in the skills section by modifying the skill tags:

```html
<span class="skill-tag">New Skill</span>
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎨 Design Features

- **Gradient Hero Section**: Eye-catching gradient background
- **Smooth Animations**: Fade-in effects and hover animations
- **Counter Animation**: Animated statistics in the About section
- **Timeline**: Visual timeline for work experience
- **Interactive Cards**: Hoverable project and skill cards

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: Gautampb12@gmail.com
- **Phone**: +91 7973823365
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ by Gautam Kumar**
