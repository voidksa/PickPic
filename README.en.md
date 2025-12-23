# PickPic - Enhanced Edition (v1.1.0)

[![Download PickPic Extension](https://img.shields.io/badge/Download-PickPic%20Extension%20(ZIP)-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](releases/PickPic-Extension-v1.1.0.zip)

> [!NOTE]
> 🇸🇦 **[العربية (Arabic)](README.md)** | 🇨🇳 **[中文 (Chinese)](README.zh.md)**

> **Note:** This repository contains the **compiled/distribution version** of the PickPic extension, enhanced with Arabic support and AI-improved translations.

One-click downloader for images and videos from any webpage, with enhanced support for WeChat Official Account articles.

## 🚀 New Features in This Version (v1.1.0)

### 🌍 **Localization Support**
- **Arabic Language (العربية):** Added full support for Arabic, including RTL (Right-to-Left) layout adjustments (feature not present in the original version).
- **Enhanced Chinese:** Updated and refined Chinese translations using AI.
- **Expanded Language Switcher:** Redesigned the language toggle to support a multi-language menu (Ar/En/Zh), replacing the original English/Chinese-only switch.
- **Improved i18n System:** 
  - Real-time language switching without page refresh.
  - Text replacement logic optimized for performance.

### 🛠 **UI & Functionality**
- **New Feature: Smart Size Filter:** Automatically filters out small images (icons, tracking pixels) to keep the list clean. Toggleable via a floating button.
- **New Feature: Auto Convert WEBP to JPG/PNG:** Added one-click buttons to convert and download WEBP images as standard JPG or PNG files.
- **New Feature: Copy Image URL:** Added a quick button to copy the image link to your clipboard for easy sharing and usage.
- **New Feature: Smart Preview:** Added a brand new image preview modal allowing users to view images directly on the page without opening new tabs (this feature was developed specifically for this edition).
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

- **Original Project:** [PickPic](https://github.com/yaolifeng0629/PickPic) by [@yaolifeng0629](https://github.com/yaolifeng0629)
- **Original Extension on Chrome Web Store:** [Chrome Web Store](https://chromewebstore.google.com/detail/pickpic-one-click-downloa/hfdohacifjijbgobekodafjpjghflemh)
- **Enhanced Version:** maintained by [@voidksa](https://github.com/voidksa)

**Disclaimer:** The Chinese translations in this version were enhanced using AI models. If you notice any inaccuracies, please feel free to contribute by editing `i18n.js`.
