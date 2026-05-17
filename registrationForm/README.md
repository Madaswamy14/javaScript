# Real-Time Registration Form with Delayed Feedback

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, highly responsive frontend registration form featuring robust client-side validation using Regular Expressions (Regex) and an optimized user experience via the **Debounce (Delayed Feedback)** pattern.

## 🚀 Features

- **Responsive Flexbox Layout:** Ditched outdated table layouts for a modern, mobile-friendly card layout.
- **Immediate Action Handling:** The submit button unlocks instantly the exact millisecond all inputs pass validation criteria.
- **Empathetic UX Validation (Debounce):** Instead of screaming errors at the user on the first keystroke, error messages wait for 1 second of typing silence before presenting visual corrections.
- **Comprehensive Regex Validation:**
  - **Name:** Only letters and spaces allowed (3 to 100 characters).
  - **Email:** Standard syntax format checker with character constraints.
  - **Password:** Alphanumeric criteria enforcing a 6 to 16 character boundary.

## 📁 File Structure

```text
├── index.html   # Semantic markup and form infrastructure
├── style.css    # Clean, modern styling using accessible layout properties
└── script.js    # Decoupled state engine and debounced event validation logic

🛠️ Installation & Usage
Clone or download this repository repository to your local system.

Open the index.html file in any modern web browser (Chrome, Firefox, Safari, Edge).

Begin interacting with the inputs to test the real-time layout adjustments and delayed error feedback.

📝 Code Implementation Highlights
This project utilizes clearTimeout and setTimeout throttling loops to delay error state evaluations while letting the submission controls remain fully operational in the primary global execution flow:

// Instant button validation
submit.disabled = !(isNameValid && isEmailValid && isPswdValid);

// Throttled visual error reporting
clearTimeout(delayTimer);
delayTimer = setTimeout(() => {
    // Error element visibility management runs here
}, 1000);