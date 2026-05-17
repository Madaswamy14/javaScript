# Real-Time Character Counter

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A lightweight, modular, real-time message text field dynamic metrics module. It monitors user inputs instantly and provides precise string boundaries and visual threshold safety alerts.

## 🚀 Features

- **State Syncing:** Tracks changes from direct keystrokes, character deletions, and pasting actions.
- **Dynamic Metrics Engine:** Calculates string volume length thresholds recursively to monitor space configurations.
- **Visual Micro-indicators:**
  - **Normal State:** Clean metrics counter.
  - **Orange Warning:** Flags automatically when approaching strict constraints.
  - **Red Crash State:** Hard locks typing bounds at maximum allocation and triggers standard validation alerts.
- **Clean Sweep Reset:** Includes a single-click clean controller that securely purges memory arrays and structural styles back to baseline states.

## 📁 File Structure

```text
├── index.html   # Main structure with native maxlength boundary controls
├── style.css    # Centered card layouts and variable alert color definitions
└── script.js    # Logic handling input event captures and dynamic UI updates
```

## 🛠️ Installation & Usage

Save the repository files inside a dedicated local directory.

Open index.html within your preferred web browser.

Type or paste contents into the primary message window to observe color transitions and automated hard-stops.

## 📝 Performance Framework

Instead of executing complex calculations on generic keyboard configurations like keyup or keydown, this project binds logic directly to the modern native browser input event channel. This captures structural changes immediately, even from mouse-driven right-click paste commands:

```javascript
messageArea.addEventListener("input", () => {
    const currentLength = messageArea.value.length;
    // Real-time remaining and boundary limit checks run here
});
```