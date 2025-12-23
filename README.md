# PickPic - Enhanced Edition

> **Note:** This is an enhanced fork of the original open-source [PickPic](https://github.com/yaolifeng0629/PickPic) project.

One-click downloader for images and videos from any webpage, with enhanced support for WeChat Official Account articles.

## 🚀 New Features & Changes in this Version

This version includes significant improvements and localizations over the original release:

### 🌍 **New Language Support**
- **Arabic Language Support (العربية):** Fully localized interface with Right-to-Left (RTL) layout support.
- **Enhanced Chinese Translation:** The Chinese translation has been updated and refined using AI.
  - ⚠️ **Disclaimer:** The Chinese translations were generated/modified by AI and may not be 100% accurate.
  - 📝 **How to contribute:** All translation strings are located in `i18n.js`. If you find any errors, you can easily edit this file to correct or improve the Chinese translations.

### 🛠 **UI & Functionality Improvements**
- **Smart Image Preview:** Double-clicking an image now opens it in a **popup modal** directly within the page, instead of opening a new tab.
- **Real-time Language Switching:** Changing the language updates the UI instantly (including the Settings page) without requiring a page refresh.
- **Fixed Refresh Button:** The refresh button now correctly reloads the active tab to re-scan for new content.
- **Privacy & About Pages:** Added fully translated "Privacy Policy" and "About" sections directly within the extension.
- **Optimized Performance:** Improved text replacement logic to prevent translation conflicts and ensure persistent UI states.

---

## 📄 Original Project Description

**PickPic** is a powerful browser extension that helps you download images and videos from any webpage with just one click.

### Supported Platforms
- 微信公众号文章 (WeChat Official Accounts)
- yaolifeng.com
- 掘金 (Juejin)
- 知乎 (Zhihu)
- InfoQ
- 简书 (Jianshu)
- 阿里云 (Aliyun)
- 腾讯云 (Tencent Cloud)
- CSDN
- 博客园 (Cnblogs)
- 51CTO
- 新浪微博 (Sina Weibo)
- 豆瓣 (Douban)
- 哔哩哔哩 (Bilibili)
- 微博 (Weibo)
- 思否 (SegmentFault)
- 今日头条 (Toutiao)
- **Other Web Pages (Universal Support)**

### Key Features
- **Universal Support:** Works on any webpage to extract images and videos.
- **Enhanced WeChat Support:** Special features for WeChat Official Account articles.
  - Article details view (title, author, description).
  - Optimized content extraction from article body.
  - Smart filtering of article images (excludes profile images, QR codes, etc.).
- **Flexible Downloads:**
  - Select and download individual items or all at once.
  - Single image downloads directly.
  - Multiple items automatically packaged as a ZIP archive.
- **Media Support:** Supports both images and videos.
- **Side Panel UI:** Easy access without disrupting your browsing.
- **Responsive Design:** Optimized for different screen sizes.

### Permissions Explained
This extension requires the following permissions:
- `activeTab`: To access the current webpage to extract images and videos.
- `storage`: To save your preferences (language, settings).
- `downloads`: To download images, videos, and ZIP files to your computer.
- `sidePanel`: To display the extension interface in the browser side panel.
- `<all_urls>`: To work on any website you visit (media is only extracted when you click the extension icon).

> **Privacy:** This extension does not collect, store, or transmit any personal data. All processing happens locally in your browser.

### Installation & Development

#### From Source (Development)
**Prerequisites:**
- Node.js 16+ and pnpm installed
- Git

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/pickpic.git
   cd pickpic
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

4. **Load extension in Chrome:**
   - Open `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `build/chrome-mv3-dev` directory

#### Production Build
To create a production build for distribution:
```bash
pnpm build
```
The production bundle will be created in the `build/chrome-mv3-prod` directory.

To package the extension into a ZIP file:
```bash
pnpm package
```

### Tech Stack
- **Framework:** Plasmo
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Internationalization:** i18next (Core logic enhanced in `i18n.js`)
- **Archive Creation:** JSZip
- **Build Tool:** pnpm

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### Author & Credits
- **Original Author:** [Immerse](https://github.com/yaolifeng0629) (@yaolifeng0629)
- **Modifications:** Added Arabic support, improved i18n system, and UI enhancements.
