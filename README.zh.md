# PickPic - 增强版 (v1.1.0)

[![Download PickPic Extension](https://img.shields.io/badge/Download-PickPic%20Extension%20(ZIP)-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](releases/PickPic-Extension-v1.1.0.zip)

> [!NOTE]
> 🇸🇦 **[العربية (Arabic)](README.md)** | 🇺🇸 **[English](README.en.md)**

> **注意:** 本仓库包含 PickPic 扩展的**编译/发行版本**，增强了阿拉伯语支持和 AI 改进的翻译。

一键下载网页上的图片和视频，特别增强了对微信公众号文章的支持。

## 🚀 此版本 (v1.1.0) 的新功能

### 🌍 **本地化支持**
- **阿拉伯语 (Arabic):** 添加了对阿拉伯语的全面支持，包括 RTL (从右到左) 布局调整 (原版未包含此功能)。
- **增强中文:** 使用 AI 更新和优化了中文翻译。
- **扩展语言切换器:** 重新设计了语言切换功能，支持多语言菜单 (阿/英/中)，替代了原来的仅英/中切换。
- **改进的 i18n 系统:** 
  - 实时语言切换无需刷新页面。
  - 针对性能优化的文本替换逻辑。

### 🛠 **UI 与功能**
- **新功能: 智能尺寸过滤 (Smart Size Filter):** 自动过滤小图 (如图标、追踪像素) 以保持列表整洁。可通过悬浮按钮切换。
- **新功能: WEBP 转 JPG/PNG (Auto Convert):** 添加了一键按钮将 WEBP 图片转换并下载为标准 JPG 或 PNG 文件。
- **新功能: 复制图片链接 (Copy Image URL):** 添加了快速按钮将图片链接复制到剪贴板，方便分享和使用。
- **新功能: 智能预览 (Smart Preview):** 添加了全新的图片预览模态框，允许用户直接在页面上查看图片而无需打开新标签页 (此功能专为本增强版开发)。
- **隐私与关于:** 原生集成的翻译页面。
- **Bug 修复:** 解决了刷新按钮和文本持久化的问题。

---

## 📦 安装说明

由于本仓库包含**未打包的扩展程序 (Unpacked extension)**，您可以直接将其安装到 Chrome/Edge 中，无需自行构建。

1. **下载/克隆此仓库:**
   ```bash
   git clone https://github.com/voidksa/PickPic.git
   ```
2. 打开您的浏览器 (Chrome 或 Edge)。
3. 访问 `chrome://extensions/`。
4. 开启右上角的 **开发者模式 (Developer mode)**。
5. 点击 **加载已解压的扩展程序 (Load unpacked)** 按钮。
6. 选择您克隆/下载此仓库的文件夹 (例如 `PickPic`)。

✅ 扩展程序现已安装并准备就绪！

---

## ✨ 主要功能

- **通用支持:** 从**任何网页**提取图片和视频。
- **微信增强:** 专门针对微信公众号文章的提取优化 (标题、作者、智能过滤)。
- **灵活下载:**
  - 单击下载。
  - 批量下载 (打包为 ZIP)。
- **媒体支持:** 同时处理图片和视频。
- **隐私专注:** 不收集数据；所有处理均在本地进行。

## 🔒 隐私与权限

- **activeTab:** 用于分析当前页面的媒体内容。
- **storage:** 用于保存您的语言和设置偏好。
- **downloads:** 用于将文件保存到您的计算机。
- **<all_urls>:** 用于在您访问的任何网站上启用提取按钮。

> **隐私政策:** 此扩展程序不收集、存储或传输任何个人数据。

---

## 📝 致谢

- **原项目:** [PickPic](https://github.com/yaolifeng0629/PickPic) 由 [@yaolifeng0629](https://github.com/yaolifeng0629) 开发
- **Chrome 应用商店原版扩展:** [Chrome Web Store](https://chromewebstore.google.com/detail/pickpic-one-click-downloa/hfdohacifjijbgobekodafjpjghflemh)
- **增强版:** 由 [@voidksa](https://github.com/voidksa) 维护

**免责声明:** 本版本中的中文翻译已使用 AI 模型进行了增强。如果您发现任何不准确之处，欢迎通过编辑 `i18n.js` 进行贡献。
