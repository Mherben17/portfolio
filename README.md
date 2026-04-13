# CS Student Portfolio Template — Seeking Internship

A simple, modern, and fully editable portfolio website template designed specifically for Computer Science students looking for internship opportunities.

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Edit content**: Replace all placeholder text (YOUR NAME, your.email@example.com, etc.) with your own information
3. **Customize**: Edit `styles.css` to change colors, fonts, or layout
4. **Deploy**: Upload to GitHub Pages, Netlify, Vercel, or any hosting service

## Publish to your GitHub (this folder is already a Git repo)

Your project is initialized with Git and has an initial commit on branch `main`. I cannot log into **your** GitHub account from here, so you need to sign in once on your PC, then push.

### Option A — GitHub CLI (fastest)

1. Open **PowerShell** or **Git Bash** in this folder:
   `c:\Users\LENOVO L590\Music\MillanoM_Portfolio`
2. Set your commit identity (one-time, global):
   - `git config --global user.name "Your Name"`
   - `git config --global user.email "you@example.com"`
3. Sign in to GitHub:
   - `gh auth login`
   - Choose **GitHub.com**, **HTTPS**, authenticate in the browser.
4. Create the remote repo and push (pick a public name, e.g. `portfolio`):
   - `gh repo create portfolio --public --source=. --remote=origin --push`

After that, your code will be at `https://github.com/YOUR_USERNAME/portfolio` (URL depends on the name you chose).

### Option B — GitHub website (no CLI)

1. On GitHub: **New repository** → name it (e.g. `portfolio`) → **Create** (no README if the repo is empty).
2. In this folder, add the remote and push (replace `YOUR_USERNAME` and `portfolio`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Turn it into a live portfolio URL (GitHub Pages)

1. On the repo: **Settings → Pages**
2. **Build and deployment**: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → Save
4. After a minute, the site is usually at:
   `https://YOUR_USERNAME.github.io/portfolio/`  
   (If the repo is named `YOUR_USERNAME.github.io`, the site is at `https://YOUR_USERNAME.github.io/` instead.)

## 📝 What to Edit

### Essential Edits (Must Do)

1. **Personal Information** (`index.html`):
   - Replace `YOUR NAME` with your actual name (appears in header, hero, profile)
   - Update email: `your.email@example.com` → your real email
   - Update LinkedIn: `https://www.linkedin.com/in/your-handle` → your LinkedIn profile
   - Update GitHub: `https://github.com/your-handle` → your GitHub profile
   - Update location: `Your City, Country` → your location

2. **Hero Section** (`index.html`, around line 68-76):
   - Edit the hero subtitle to describe your focus/interests
   - Update availability dates in the callout card (line ~129)

3. **About Section** (`index.html`, around line 134-173):
   - Rewrite "Who I am" paragraph with your own story
   - Update location, seeking status, availability, and interests
   - Customize the "Why I'm Ready" bullets

4. **Skills Section** (`index.html`, around line 177-219):
   - Replace languages, frameworks, and tools with your actual skills
   - Add or remove skill chips as needed

5. **Projects Section** (`index.html`, around line 222-318):
   - Replace all 3-4 project examples with your real projects
   - Update project titles, descriptions, tech stacks, and links
   - Add GitHub repo links and live demo URLs

6. **Education Section** (`index.html`, around line 320-354):
   - Update university name, graduation year, GPA
   - Modify relevant coursework list
   - Add any prior internships or work experience

7. **Resume/CV**:
   - Add your resume PDF to an `assets/` folder
   - Update the resume link: `href="assets/Resume.pdf"`

### Optional Customizations

1. **Colors & Theme** (`styles.css`, lines 6-26):
   - Change `--primary` and `--primary-2` for your brand colors
   - Adjust `--bg`, `--text`, `--muted` for different color schemes

2. **Fonts** (`index.html`, line 17-19):
   - Replace Google Fonts link with your preferred font
   - Update `--font-sans` in CSS

3. **Brand Initials** (`index.html`, line 30):
   - Change `MM` to your initials in the header logo

4. **Stats Card** (`index.html`, around line 111-124):
   - Update project count, current year, graduation year

## 🎨 Features

- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Dark/Light Theme**: Toggle between themes (saves preference)
- ✅ **Smooth Scrolling**: Smooth navigation between sections
- ✅ **Active Nav Highlighting**: Shows current section in navigation
- ✅ **Mobile Menu**: Hamburger menu for small screens
- ✅ **Modern UI**: Clean, professional design with gradients and glassmorphism
- ✅ **Accessible**: Semantic HTML, ARIA labels, skip links

## 📁 File Structure

```
MillanoM_Portfolio/
├── index.html      # Main HTML file (edit content here)
├── styles.css      # All styling (customize colors/layout)
├── script.js       # Interactive features (menu, theme, etc.)
└── README.md       # This file
```

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages → Select main branch
4. Your site will be live at `username.github.io/repo-name`

### Netlify (Free)
1. Drag and drop the folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Your site is live instantly!

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## 💡 Tips

- **Keep it updated**: Add new projects as you build them
- **Show your best work**: Quality over quantity — 3-4 strong projects is better than 10 weak ones
- **Be specific**: Instead of "Built a website," say "Built a task tracker with React and Node.js"
- **Include links**: Always link to GitHub repos and live demos when possible
- **Proofread**: Check for typos and grammar before sharing

## 🔧 Advanced Customization

### Add a Contact Form Backend

Replace the mailto form with a real backend:

**Option 1: Formspree** (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

**Option 2: Netlify Forms**
```html
<form netlify name="contact">
  <!-- form fields -->
</form>
```

### Add Google Analytics

Add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📞 Need Help?

- Check the HTML comments (`<!-- EDIT HERE -->`) for guidance
- All placeholder text is clearly marked
- CSS variables at the top of `styles.css` control most styling

## 📄 License

This template is free to use and modify for personal portfolios.

---

**Good luck with your internship search! 🎓✨**
