# class-portfolio

## Change log

### Portfolio enhancements — 2026-11-12

**Prompt:** “Edit my existing portfolio website to add a dark/light mode toggle, a YouTube video section, and ScrollReveal animations.” The request also asked to preserve the existing design and responsive behavior, use vanilla JavaScript and CSS variables, remember the selected theme, support reduced motion, and keep the video embed responsive.

**Follow-up prompt:** Reported that the YouTube embed showed error 153 and asked for help getting it to load.

**Changes made:**
- Added an accessible dark/light theme toggle with saved preference and system-theme fallback in `script.js`.
- Added light and dark color palettes, visible keyboard focus styles, and a responsive 16:9 video frame in `style.css`.
- Added a featured YouTube video section and a deferred ScrollReveal CDN script in `index.html`.
- Added a referrer policy to the YouTube iframe to address error 153. When testing locally, serve the site over HTTP (for example, with VS Code Live Server) rather than opening the HTML file directly.