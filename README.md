# PickPic - Enhanced Edition (v1.1.0)

> **Note:** This repository contains the **compiled/distribution version** of the PickPic extension, enhanced with Arabic support and AI-improved translations.

One-click downloader for images and videos from any webpage, with enhanced support for WeChat Official Account articles.

## 🚀 New Features in This Version (v1.1.0)

### 🌍 **Localization Support**
- **Arabic Language (العربية):** Full RTL (Right-to-Left) support and complete interface translation.
- **Enhanced Chinese:** Updated and refined Chinese translations using AI.
- **Improved i18n System:** 
  - Real-time language switching without page refresh.
  - Text replacement logic optimized for performance.

### 🛠 **UI & Functionality**
- **Smart Preview:** Images now open in a modal popup within the page instead of a new tab.
- **Privacy & About:** Native, translated pages integrated directly into the extension.
- **Bug Fixes:** Resolved issues with the refresh button and text persistence.

---

## 📦 Installation

Since this repository contains the **unpacked extension**, you can install it directly into Chrome/Edge without building it.

1. **Download/Clone this repository:**
   ```bash
   git clone https://github.com/voidksa/PickPic.git
   ```
2. Open your browser (Chrome or Edge).
3. Navigate to `chrome://extensions/`.
4. Enable **Developer mode** (toggle switch in the top right corner).
5. Click the **Load unpacked** button.
6. Select the folder where you cloned/downloaded this repository (e.g., `PickPic`).

✅ The extension is now installed and ready to use!

---

## ✨ Key Features

- **Universal Support:** Extract images and videos from **any webpage**.
- **WeChat Enhanced:** Specialized extraction for WeChat Official Account articles (Title, Author, Smart Filtering).
- **Flexible Downloads:**
  - Single click download.
  - Batch download (packaged as ZIP).
- **Media Support:** Handles both Images and Videos.
- **Privacy Focused:** No data collection; all processing happens locally.

## 🔒 Privacy & Permissions

- **activeTab:** To analyze the current page for media.
- **storage:** To save your language and settings preferences.
- **downloads:** To save files to your computer.
- **<all_urls>:** To enable the extraction button on any site you visit.

> **Privacy Policy:** This extension does not collect, store, or transmit any personal data.

---

## 📝 Credits

- **Original Project:** [PickPic](https://github.com/yaolifeng0629/PickPic) by @yaolifeng0629
- **Enhanced Version:** maintained by @voidksa

**Disclaimer:** The Chinese translations in this version were enhanced using AI models. If you notice any inaccuracies, please feel free to contribute by editing `i18n.js`.
