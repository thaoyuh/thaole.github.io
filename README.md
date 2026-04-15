# Academic Website for Thao P. Le

A clean, professional Jekyll-based academic website with a warm academic color scheme (navy, burgundy, cream).

## 🚀 Quick Start: Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - This gives you a site at `https://yourusername.github.io`
   - OR name it anything else (e.g., `academic-site`) for a URL like `https://yourusername.github.io/academic-site`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Site

**Option A: Using GitHub's web interface (easiest)**
1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL the files from this folder
3. Click **Commit changes**

**Option B: Using Git command line**
```bash
cd academic-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait 1-2 minutes, then visit your site!

---

## 📁 File Structure

```
academic-site/
├── _config.yml          # Site configuration (EDIT THIS FIRST)
├── index.html           # About page (homepage)
├── publications.html    # Publications page
├── cv.html              # CV/Resume page
├── _data/
│   └── publications.yml # Your publications data (EDIT THIS)
├── _news/
│   └── *.md             # News items (add more here)
├── _layouts/
│   └── default.html     # Main page template
├── _includes/
│   ├── header.html      # Navigation header
│   └── footer.html      # Page footer
└── assets/
    ├── css/main.css     # Styles (edit for color tweaks)
    ├── js/main.js       # Search/filter functionality
    ├── images/
    │   ├── profile.jpg  # YOUR PHOTO GOES HERE
    │   └── favicon.svg  # Site icon
    └── files/           # PDFs, slides, etc.
```

---

## ✏️ Customization Guide

### 1. Basic Information (`_config.yml`)

Edit these fields:
```yaml
title: Thao P. Le
description: PhD Researcher in Engineering
email: your.email@university.edu
linkedin_username: your-linkedin-username
github_username: your-github-username
```

If your repo is NOT `username.github.io`, set:
```yaml
baseurl: "/your-repo-name"
```

### 2. About Page (`index.html`)

Find and replace these placeholders:
- `[Your University]`
- `[Your Department]`
- `[Advisor Name]`
- `[your research area]`
- Research interests bullet points

### 3. Profile Photo

Replace `assets/images/profile.jpg` with your photo:
- Recommended size: 400x400 pixels or larger
- Square aspect ratio works best
- JPG or PNG format

### 4. Publications (`_data/publications.yml`)

Add your papers in this format:
```yaml
- title: "Your Paper Title"
  authors:
    - "Thao P. Le"      # Your name (will be highlighted)
    - "Co-Author Name"
  year: 2024
  type: journal         # Options: journal, conference, preprint, thesis
  venue: "Journal Name"
  doi: "10.xxxx/xxxxx"
  arxiv: "2401.xxxxx"   # Optional
  pdf: "/assets/files/paper.pdf"  # Optional
  code: "https://github.com/..."  # Optional
```

**Importing from Google Scholar:**
1. Go to your Google Scholar profile
2. Select papers → Export → BibTeX
3. Convert each entry to the YAML format above

### 5. CV Page (`cv.html`)

Edit the education, research experience, awards, skills, etc. The template uses a timeline format that's easy to modify.

### 6. News Items (`_news/`)

Create new markdown files for announcements:
```markdown
---
date: 2025-04-15
type: publication  # Options: publication, talk, award, general
---
Your news content here. Supports **markdown** formatting!
```

### 7. PDF CV

To add a downloadable CV:
1. Save your CV as PDF
2. Put it in `assets/files/CV_Thao_Le.pdf`
3. The download button on the CV page will work automatically

---

## 🎨 Color Customization

The color scheme is defined at the top of `assets/css/main.css`:

```css
:root {
  --navy-deep: #1a2744;    /* Primary dark */
  --navy: #2c3e5a;          /* Navigation, buttons */
  --burgundy: #8b3a4c;      /* Accent color */
  --cream: #faf8f5;         /* Background */
  --gold: #c9a227;          /* Highlights */
}
```

Change these values to customize your color scheme!

---

## 🔧 Local Development (Optional)

To preview changes locally before pushing:

1. Install Ruby and Jekyll:
   ```bash
   # macOS
   brew install ruby
   gem install bundler jekyll

   # Ubuntu/Debian
   sudo apt install ruby-full
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   cd academic-site
   bundle install
   ```

3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open `http://localhost:4000` in your browser

---

## 📝 Adding a Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. In your repo, create a file called `CNAME` containing just your domain:
   ```
   www.thaole.com
   ```
3. Configure DNS at your domain registrar:
   - Add a CNAME record pointing to `yourusername.github.io`

---

## 🆘 Troubleshooting

**Site not updating?**
- GitHub Pages can take 1-2 minutes to rebuild
- Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check Actions tab in your repo for build errors

**Publications not showing?**
- Check YAML syntax in `_data/publications.yml` (indentation matters!)
- Use a YAML validator online if unsure

**Broken styles?**
- If repo is not `username.github.io`, make sure `baseurl` is set in `_config.yml`

---

## 📄 License

This template is free to use and modify for your personal academic website.

---

Built with ❤️ using Jekyll • Designed for academics
