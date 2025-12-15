# BroCodeBox

A lightweight, self-contained JavaScript code box with syntax highlighting, line numbers, and handy action buttons — Copy, Download, and more.  
Styled with a VS Code-like dark theme for clean and modern appearance.

---

## Features

- Syntax highlighting for JavaScript (simple & safe)
- Line numbers with optional highlight range support (`data-lines="start-end"`)
- Copy to clipboard button
- Download code button (filename from `data-file`)
- File name and language display
- VS Code style dark theme
- Fully self-contained in a single JS file + injected CSS
- Easy to embed with a single script tag

---

## Usage

Include the script from CDN (use specific version for stability):

```html
<script src="https://cdn.jsdelivr.net/gh/kokhinmaungwin/BroCodeBox@1.1.0/brocodebox.js"></script>
```
Or use the latest (unstable) version:
```html
<script src="https://kokhinmaungwin.github.io/BroCodeBox/brocodebox.js"></script>
```
Add HTML markup like this:
```html
<div class="bro-box" 
     data-file="example.js" 
     data-lang="js" 
     data-lines="2-4">
  <code>
const x = 10;
function hello() {
  console.log("Hello BroCodeBox!");
}
  </code>
</div>
```
data-file - File name to show and use for download (default: code.js)

data-lang - Language label (shown but no real syntax switch yet)

data-lines - Optional line range to highlight (e.g., 3-5)



---

## Versions

|Version|Date	     |Notes |
|-------|----------|------|
|1.0.0	|2025-12-14|Initial release with basic features|
|1.0.1	|2025-12-15|Added Download button|
|1.1.0	|2025-12-15|Improved layout, added language label, better highlighting and UI fixes|



---

## Changelog

See [![CHANGELOG](https://img.shields.io/badge/CHANGELOG-View-blue)](https://github.com/kokhinmaungwin/BroCodeBox/blob/main/CHANGELOG.md) for details.


---

## License

MIT License © 2025 Khin Maung Win

See [![LICENSE](https://img.shields.io/badge/LICENSE-View-red)](https://github.com/kokhinmaungwin/BroCodeBox/blob/main/LICENSE) for details.


---

## Contribution

Feel free to fork, submit issues or pull requests on GitHub.


---

## Contact
- ![Author](https://img.shields.io/badge/Author-Khin_Maung_Win-blue)

- GitHub: [kokhinmaungwin](https://github.com/kokhinmaungwin)
  
- Project: [BroCodeBox](https://github.com/kokhinmaungwin/BroCodeBox)


---

Thank you for using BroCodeBox!
Happy coding 🚀
