# Portfolio Website - Deployment Instructions

## Overview
This is your personalized portfolio website showcasing your work as a Senior Data Scientist at MakeMyTrip.

## Local Testing
The website has been tested locally and is working correctly. You can view it at:
- Local URL: http://localhost:8080/index.html

## GitHub Pages Deployment Steps

### Option 1: Create New Repository on GitHub (Recommended)

1. **Go to GitHub** and create a new repository:
   - Repository name: `amaradattadola.github.io` (for personal GitHub Pages)
   - OR: `portfolio` (for project-based Pages)
   - Make it **Public**
   - Do NOT initialize with README, .gitignore, or license

2. **Push your code** (from the portfolio directory):
   ```bash
   cd /Users/mmt11937/portfolio_website/portfolio
   
   # If using username.github.io format:
   git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/amaradattadola.github.io.git
   
   # OR if using a project repository:
   git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
   
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Click Save

4. **Access your website**:
   - For username.github.io: `https://amaradattadola.github.io`
   - For project repo: `https://YOUR_GITHUB_USERNAME.github.io/portfolio`

### Option 2: Using GitHub CLI (if installed)

```bash
cd /Users/mmt11937/portfolio_website/portfolio

# Create repository
gh repo create amaradattadola.github.io --public --source=. --remote=origin

# Push code
git push -u origin main

# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

## What's Been Customized

✅ **Personal Information**
- Name: Amara Datta Dola
- Title: Senior Data Scientist I
- Email: amardattadola@gmail.com
- LinkedIn: https://www.linkedin.com/in/amara-datta-dola-6158b01b6/

✅ **Professional Experience**
- MakeMyTrip work experience and achievements
- Deep Interest Network project (12% CTR boost)
- Myra Travel Chatbot (25% accuracy improvement)
- Dynamic Persuasion System (200ms P95 latency)
- Text-to-SQL Agent (75% time reduction)
- Learning to Rank systems
- Hotel Similarity Recommendations (6% CTR lift)

✅ **Projects**
- Complex Valued CNNs (Master's Thesis - 93% accuracy)
- 3D Humanoid Segmentation (95% accuracy)
- Texture Transfer for Jio Platforms

✅ **Technical Details**
- Updated hero terminal animation: "training DIN model... +12% CTR achieved"
- Profile image placeholder (SVG with initials "AD")
- All social links updated
- Navigation sections renamed to match your profile

## Next Steps

1. **Create GitHub Repository**: Follow Option 1 or 2 above
2. **Verify Deployment**: Wait 2-3 minutes after pushing, then visit your GitHub Pages URL
3. **Add Custom Domain** (Optional): 
   - Buy a domain (e.g., amaradattadola.com)
   - Add CNAME file with your domain
   - Configure DNS settings

## Customization Tips

### To Update Profile Image:
Replace `/media/amara_profile.jpg` with your professional photo (500x500px recommended)

### To Add More Projects:
Edit `index.html` in the Projects section, following the existing card structure

### To Update Colors:
Edit `css/portfolio.css` and modify the CSS variables:
```css
:root{
    --bg-primary: #181D26;
    --h-primary: #06B6D4;
    /* etc. */
}
```

### To Update Terminal Animation:
Edit `js/hero-terminal.js` and change the `deploying` variable

## Support

If you encounter any issues:
1. Check that the repository is public
2. Verify GitHub Pages is enabled in Settings
3. Wait a few minutes for GitHub to build the site
4. Check the Actions tab for any build errors

## Files Modified
- `index.html` - Main portfolio page
- `js/hero-terminal.js` - Terminal animation
- `media/amara_profile.jpg` - Profile image (placeholder)
- Removed: `CNAME` (was pointing to previous owner's domain)

---
**Portfolio Status**: ✅ Ready for deployment
**Last Updated**: January 22, 2026
