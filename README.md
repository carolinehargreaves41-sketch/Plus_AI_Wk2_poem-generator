# AI Poem Generator 🌙✨

A fun, accessible, and responsive AI-powered poem generator that creates unique poems on any topic — from clouds ☁️ to cheese 🧀 and everything in between.

🌐 **Live Site:** [https://tourmaline-bonbon-0d2044.netlify.app/](https://tourmaline-bonbon-0d2044.netlify.app/)

---

## 🌟 Project Overview

This project was created as part of the SheCodes Plus AI course to explore the potential of Artificial Intelligence and develop skills in working with AI APIs and building interactive, user-facing web applications. The app uses a simple and clean interface to let users generate a custom poem on any topic of their choice, powered by AI. The project demonstrates practical API integration using vanilla HTML, CSS, and JavaScript.

---

## 📚 Learning Objectives

- ✅ Integrate an AI API to generate dynamic content
- ✅ Handle asynchronous JavaScript with Axios
- ✅ Build a clean, user-friendly form interface
- ✅ Manage UI state (loading, error, success) gracefully
- ✅ Apply a typewriter animation effect for engaging output
- ✅ Write modular, well-structured JavaScript functions
- ✅ Deploy a project using Netlify

---

## 🛠 Technologies Used

- **HTML5** — Semantic markup and accessible form structure
- **CSS3** — Custom properties, transitions, and responsive layout
- **JavaScript (ES6)** — Async logic, DOM manipulation, and event handling
- **Axios** — Promise-based HTTP client for API requests
- **Typewriter Effect** — Animated text rendering for poem output
- **SheCodes AI API** — AI-powered poem generation
- **Google Fonts** — Roboto font family with optimised loading
- **VS Code** — Code editor
- **GitHub Desktop** — Version control and repository management
- **Netlify** — Deployment and hosting

---

## ✨ Key Features

### AI-Powered Poem Generation
- 🤖 Sends user input to the SheCodes AI API with a crafted context prompt
- 📝 Returns a unique poem formatted with HTML elements
- ⚡ Typewriter animation brings the poem to life character by character

### User Experience
- 🔄 Real-time button state management — disables during generation to prevent duplicate requests
- ✅ Input validation — requires at least 3 characters before submitting
- 🔽 Auto-scrolls to the poem output once generated
- 🧹 Clears the input field after each successful submission

### Error Handling
- ⚠️ Friendly error messages for failed API requests
- 🔍 Specific handling for 404 responses
- 🔓 Button re-enables automatically after errors so users can try again

### Design
- 🎨 Soft purple gradient background with consistent brand colours
- 🖱️ Hover and focus states on interactive elements
- 💬 Motivational quote and introductory copy to welcome users
- 📱 Responsive and readable across device sizes

---

## 📁 Project Structure

```
ai-poem-generator/
├── index.html          # Main HTML file
├── src/
│   ├── style.css       # All CSS styles
│   └── index.js        # JavaScript — API calls, validation, UI logic
```

---

## 🚀 How to View

**Option 1: View the Live Deployment**
Visit: [https://tourmaline-bonbon-0d2044.netlify.app/](https://tourmaline-bonbon-0d2044.netlify.app/)

**Option 2: Run Locally**
1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. Note: API calls require an active internet connection

**Option 3: Live Server (Recommended for Development)**
1. Install VS Code
2. Install the "Live Server" extension by Ritwick Dey
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Site opens at `http://localhost:5500`

---

## 💡 Key Learning Takeaways

### 1. Working with AI APIs Opens Up Creativity
Crafting the right `context` prompt for the AI makes an enormous difference to the quality and tone of the output. Writing a good prompt is its own skill — and a fun one.

### 2. Async JavaScript Needs Careful State Management
Disabling the submit button during an API call and re-enabling it after (success or error) is essential to prevent broken UX. Managing these states cleanly took deliberate planning.

### 3. Small UX Details Matter
Auto-scrolling to the output, clearing the input, and showing a loading message all feel like minor touches — but together they make the experience feel polished and intentional.

### 4. Error Handling is Part of the Feature
A good app anticipates failure. Writing dedicated error functions and distinguishing between error types (like 404 vs general failure) taught me that error states deserve as much thought as the happy path.

### 5. Typewriter Effects Add Personality
The Typewriter Effect library added real delight to the output. Choosing the right third-party library and learning how to implement it from documentation is a core developer skill.

---

## 🔧 Browser Compatibility

Tested and working on:
- ✅ Chrome 120+ (Desktop & Mobile)
- ✅ Firefox 121+ (Desktop & Mobile)
- ✅ Safari 17+ (Desktop & Mobile)
- ✅ Edge 120+ (Desktop)

---

## 📈 Future Enhancements

**Phase 1: Style Options**
- [ ] Let users choose a poem style (haiku, limerick, sonnet, free verse)
- [ ] Add a tone selector (funny, romantic, dramatic, uplifting)

**Phase 2: Output Features**
- [ ] Add a "Copy to Clipboard" button for the generated poem
- [ ] Allow users to download their poem as a `.txt` file
- [ ] Add a "Share" button for social media

**Phase 3: Design & Experience**
- [ ] Add a poem history — save the last 3–5 generated poems
- [ ] Implement a dark mode toggle
- [ ] Add subtle animations to the form on page load

**Phase 4: Accessibility & Performance**
- [ ] Add ARIA live region so screen readers announce when a poem is ready
- [ ] Run a full Lighthouse audit and address any findings
- [ ] Add a cookie consent banner for GDPR compliance

---

## 👤 Author

**Caroline Hargreaves**
Aspiring Web Developer | SheCodes Student

- 💻 [GitHub Profile](https://github.com/carolinehargreaves41-sketch)
- 🌐 [Live Project](https://tourmaline-bonbon-0d2044.netlify.app/)

---

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it for educational purposes.

**Usage Terms:**
- ✅ Use for learning and education
- ✅ Fork and modify for your own projects
- ✅ Use as a portfolio piece (with credit)
- ❌ Do not claim as your own work
- ❌ Do not use commercially without permission

---

## 🙏 Acknowledgments

- **SheCodes** — For the comprehensive Plus AI course
- **Matt Delac** — Founder of SheCodes and excellent instructor
- **SheCodes AI API** — For powering the poem generation
- **Typewriter Effect** — For the delightful animated text rendering
- **Axios** — For clean and reliable HTTP requests
- **Google Fonts** — For the Roboto typeface
- **Netlify** — For seamless deployment and hosting
- **MDN Web Docs** — For excellent JavaScript and CSS reference documentation

---

*Project Status: ✅ Completed December 2025.*
*Built with 💜 and lots of 🫖 in England*
