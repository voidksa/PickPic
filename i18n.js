(() => {
  const rootId = "__plasmo";
  const LANG_KEY = "lang";
  const DEFAULT_LANG = "en";

  // Comprehensive Dictionary
  const concepts = {
    // General
    settings: { en: "Settings", zh: "设置", ar: "الإعدادات", variants: ["Settings", "设置", "الإعدادات"] },
    general: { en: "General", zh: "常规", ar: "عام", variants: ["General", "常规", "عام"] },
    appearance: { en: "Appearance", zh: "外观", ar: "المظهر", variants: ["Appearance", "外观", "المظهر"] },
    shortcuts: { en: "Shortcuts", zh: "快捷键", ar: "اختصارات", variants: ["Shortcuts", "快捷键", "اختصارات"] },
    about: { en: "About", zh: "关于", ar: "حول", variants: ["About", "关于", "حول"] },
    version: { en: "Version", zh: "版本", ar: "الإصدار", variants: ["Version", "版本", "الإصدار"] },
    language: { en: "Language", zh: "语言", ar: "اللغة", variants: ["Language", "语言", "اللغة"] },

    // Actions
    preview: { en: "Preview", zh: "预览", ar: "معاينة", variants: ["Preview", "预览", "معاينة"] },
    download: { en: "Download", zh: "下载", ar: "تنزيل", variants: ["Download", "下载", "تنزيل"] },
    downloadAll: { en: "Download All", zh: "全部下载", ar: "تنزيل الكل", variants: ["Download All", "全部下载", "تنزيل الكل", "Download All Images", "Download all images"] },
    downloadSelected: { en: "Download Selected", zh: "下载选中", ar: "تنزيل المحدد", variants: ["Download Selected", "下载选中", "تنزيل المحدد", "Download Selected Images", "Download selected images"] },
    refresh: { en: "Refresh", zh: "刷新", ar: "تحديث", variants: ["Refresh", "刷新", "تحديث"] },
    save: { en: "Save", zh: "保存", ar: "حفظ", variants: ["Save", "保存", "حفظ"] },
    saveAs: { en: "Save As", zh: "另存为", ar: "حفظ باسم", variants: ["Save As", "另存为", "حفظ باسم"] },
    copy: { en: "Copy", zh: "复制", ar: "نسخ", variants: ["Copy", "复制", "نسخ"] },
    copyUrl: { en: "Copy URL", zh: "复制链接", ar: "نسخ الرابط", variants: ["Copy URL", "复制链接", "نسخ الرابط"] },
    open: { en: "Open", zh: "打开", ar: "فتح", variants: ["Open", "打开", "فتح"] },
    close: { en: "Close", zh: "关闭", ar: "إغلاق", variants: ["Close", "关闭", "إغلاق"] },
    cancel: { en: "Cancel", zh: "取消", ar: "إلغاء", variants: ["Cancel", "取消", "إلغاء"] },
    confirm: { en: "Confirm", zh: "确认", ar: "تأكيد", variants: ["Confirm", "确认", "تأكيد"] },
    apply: { en: "Apply", zh: "应用", ar: "تطبيق", variants: ["Apply", "应用", "تطبيق"] },
    ok: { en: "OK", zh: "确定", ar: "موافق", variants: ["OK", "确定", "موافق"] },
    retry: { en: "Retry", zh: "重试", ar: "إعادة المحاولة", variants: ["Retry", "重试", "إعادة المحاولة"] },
    clear: { en: "Clear", zh: "清除", ar: "مسح", variants: ["Clear", "清除", "مسح"] },
    remove: { en: "Remove", zh: "移除", ar: "إزالة", variants: ["Remove", "移除", "إزالة"] },
    add: { en: "Add", zh: "添加", ar: "إضافة", variants: ["Add", "添加", "إضافة"] },
    start: { en: "Start", zh: "开始", ar: "بدء", variants: ["Start", "开始", "بدء"] },
    stop: { en: "Stop", zh: "停止", ar: "إيقاف", variants: ["Stop", "停止", "إيقاف"] },
    pause: { en: "Pause", zh: "暂停", ar: "إيقاف مؤقت", variants: ["Pause", "暂停", "إيقاف مؤقت"] },
    resume: { en: "Resume", zh: "继续", ar: "استئناف", variants: ["Resume", "继续", "استئناف"] },
    openInNewTab: { en: "Open in new tab", zh: "在新标签页打开", ar: "فتح في تبويب جديد", variants: ["Open in new tab", "在新标签页打开", "فتح في تبويب جديد", "Open In New Tab"] },
    convertToJpg: { en: "JPG", zh: "JPG", ar: "JPG", variants: ["Convert to JPG", "转为 JPG", "تحويل لـ JPG"] },
    convertToPng: { en: "PNG", zh: "PNG", ar: "PNG", variants: ["Convert to PNG", "转为 PNG", "تحويل لـ PNG"] },
    converting: { en: "Converting...", zh: "转换中...", ar: "جارٍ التحويل...", variants: ["Converting...", "转换中...", "جارٍ التحويل..."] },

    // Content
    noArticle: { en: "No Article", zh: "未找到文章", ar: "لا يوجد مقال", variants: ["No Article", "未找到文章", "لا يوجد مقال"] },
    noImagesFound: { en: "No images found", zh: "未找到图片", ar: "لم يتم العثور على صور", variants: ["No images found", "未找到图片", "لم يتم العثور على صور"] },
    images: { en: "Images", zh: "图片", ar: "صور", variants: ["Images", "图片", "صور"] },
    videos: { en: "Videos", zh: "视频", ar: "فيديوهات", variants: ["Videos", "视频", "فيديوهات"] },
    title: { en: "Title", zh: "标题", ar: "العنوان", variants: ["Title", "标题", "العنوان"] },
    author: { en: "Author", zh: "作者", ar: "الكاتب", variants: ["Author", "作者", "الكاتب"] },
    description: { en: "Description", zh: "描述", ar: "الوصف", variants: ["Description", "描述", "الوصف"] },
    coverImage: { en: "Cover Image", zh: "封面图", ar: "صورة الغلاف", variants: ["Cover Image", "封面图", "صورة الغلاف"] },
    url: { en: "URL", zh: "链接", ar: "الرابط", variants: ["URL", "链接", "الرابط"] },
    filename: { en: "Filename", zh: "文件名", ar: "اسم الملف", variants: ["Filename", "文件名", "اسم الملف"] },
    size: { en: "Size", zh: "大小", ar: "الحجم", variants: ["Size", "大小", "الحجم"] },
    type: { en: "Type", zh: "类型", ar: "النوع", variants: ["Type", "类型", "النوع"] },
    count: { en: "Count", zh: "数量", ar: "العدد", variants: ["Count", "数量", "العدد"] },
    width: { en: "Width", zh: "宽度", ar: "العرض", variants: ["Width", "宽度", "العرض"] },
    height: { en: "Height", zh: "高度", ar: "الارتفاع", variants: ["Height", "高度", "الارتفاع"] },
    ext: { en: "Extension", zh: "扩展名", ar: "اللاحقة", variants: ["Extension", "Ext", "扩展名", "اللاحقة"] },
    date: { en: "Date", zh: "日期", ar: "التاريخ", variants: ["Date", "日期", "التاريخ"] },
    actions: { en: "Actions", zh: "操作", ar: "الإجراءات", variants: ["Actions", "操作", "الإجراءات"] },
    selected: { en: "Selected", zh: "已选", ar: "تم التحديد", variants: ["Selected", "已选", "تم التحديد"] },

    // Status
    loading: { en: "Loading...", zh: "加载中...", ar: "جارٍ التحميل...", variants: ["Loading...", "加载中...", "جارٍ التحميل..."] },
    error: { en: "Error", zh: "错误", ar: "خطأ", variants: ["Error", "错误", "خطأ"] },
    progress: { en: "Progress", zh: "进度", ar: "التقدّم", variants: ["Progress", "进度", "التقدّم"] },
    completed: { en: "Completed", zh: "已完成", ar: "مكتمل", variants: ["Completed", "已完成", "مكتمل"] },
    failed: { en: "Failed", zh: "失败", ar: "فشل", variants: ["Failed", "失败", "فشل"] },
    success: { en: "Success", zh: "成功", ar: "نجاح", variants: ["Success", "成功", "نجاح"] },

    // Sorting & Filtering
    selectAll: { en: "Select All", zh: "全选", ar: "تحديد الكل", variants: ["Select All", "全选", "تحديد الكل"] },
    deselectAll: { en: "Deselect All", zh: "取消全选", ar: "إلغاء تحديد الكل", variants: ["Deselect All", "取消全选", "إلغاء تحديد الكل"] },
    filter: { en: "Filter", zh: "筛选", ar: "تصفية", variants: ["Filter", "筛选", "تصفية"] },
    sort: { en: "Sort", zh: "排序", ar: "ترتيب", variants: ["Sort", "排序", "ترتيب"] },
    sortAsc: { en: "Sort Ascending", zh: "升序", ar: "تصاعدي", variants: ["Sort Ascending", "升序", "تصاعدي"] },
    sortDesc: { en: "Sort Descending", zh: "降序", ar: "تنازلي", variants: ["Sort Descending", "降序", "تنازلي"] },
    smartFilter: { en: "Smart Filter", zh: "智能过滤", ar: "تصفية ذكية", variants: ["Smart Filter", "智能过滤", "تصفية ذكية"] },
    hideSmall: { en: "Hide Small Images", zh: "隐藏小图", ar: "إخفاء الصور الصغيرة", variants: ["Hide Small Images", "隐藏小图", "إخفاء الصور الصغيرة"] },

    // Languages
    english: { en: "English", zh: "英文", ar: "الإنجليزية", variants: ["English", "英文", "الإنجليزية"] },
    chinese: { en: "Chinese", zh: "中文", ar: "الصينية", variants: ["Chinese", "中文", "الصينية"] },
    arabic: { en: "Arabic", zh: "阿拉伯语", ar: "العربية", variants: ["Arabic", "阿拉伯语", "العربية"] },

    // Settings Specific (Guessed)
    downloadPath: { en: "Download Path", zh: "下载路径", ar: "مسار التنزيل", variants: ["Download Path", "下载路径", "مسار التنزيل"] },
    autoDownload: { en: "Auto Download", zh: "自动下载", ar: "تنزيل تلقائي", variants: ["Auto Download", "自动下载", "تنزيل تلقائي"] },
    theme: { en: "Theme", zh: "主题", ar: "السمة", variants: ["Theme", "主题", "السمة"] },
    dark: { en: "Dark", zh: "深色", ar: "داكن", variants: ["Dark", "深色", "داكن"] },
    light: { en: "Light", zh: "浅色", ar: "فاتح", variants: ["Light", "浅色", "فاتح"] },
    system: { en: "System", zh: "系统", ar: "النظام", variants: ["System", "系统", "النظام"] },
    privacy: { en: "Privacy", zh: "隐私", ar: "الخصوصية", variants: ["Privacy", "隐私", "الخصوصية"] },
    help: { en: "Help", zh: "帮助", ar: "مساعدة", variants: ["Help", "帮助", "مساعدة"] },
    feedback: { en: "Feedback", zh: "反馈", ar: "ملاحظات", variants: ["Feedback", "反馈", "ملاحظات", "Send Feedback", "发送反馈", "إرسال ملاحظات"] },
    reset: { en: "Reset", zh: "重置", ar: "إعادة تعيين", variants: ["Reset", "重置", "إعادة تعيين"] },
    default: { en: "Default", zh: "默认", ar: "افتراضي", variants: ["Default", "默认", "افتراضي"] },
    import: { en: "Import", zh: "导入", ar: "استيراد", variants: ["Import", "导入", "استيراد"] },
    export: { en: "Export", zh: "导出", ar: "تصدير", variants: ["Export", "导出", "تصدير"] },
    keyboardShortcuts: { en: "Keyboard Shortcuts", zh: "键盘快捷键", ar: "اختصارات لوحة المفاتيح", variants: ["Keyboard Shortcuts", "键盘快捷键", "اختصارات لوحة المفاتيح"] },
    global: { en: "Global", zh: "全局", ar: "عام", variants: ["Global", "全局", "عام"] },
    local: { en: "Local", zh: "本地", ar: "محلي", variants: ["Local", "本地", "محلي"] },

    // Legal & Support
    privacyPolicy: { en: "Privacy Policy", zh: "隐私政策", ar: "سياسة الخصوصية", variants: ["Privacy Policy", "隐私政策", "سياسة الخصوصية"] },
    termsOfService: { en: "Terms of Service", zh: "服务条款", ar: "شروط الخدمة", variants: ["Terms of Service", "服务条款", "شروط الخدمة"] },
    donate: { en: "Donate", zh: "捐赠", ar: "تبرع", variants: ["Donate", "捐赠", "تبرع"] },
    support: { en: "Support", zh: "支持", ar: "دعم", variants: ["Support", "支持", "دعم"] },
    reportIssues: { en: "Report Issues", zh: "报告问题", ar: "الإبلاغ عن المشكلات", variants: ["Report Issues", "报告问题", "الإبلاغ عن المشكلات"] },
    starGithub: { en: "Star on GitHub", zh: "在 GitHub 上加星", ar: "ضع نجمة على GitHub", variants: ["Star on GitHub", "在 GitHub 上加星", "نجمة على GitHub", "ضع نجمة على GitHub"] },
    waysToSupport: { en: "Ways to Support", zh: "支持方式", ar: "طرق الدعم", variants: ["Ways to Support", "支持方式", "طرق الدعم"] },
    donateTitle: { en: "Support PickPic", zh: "支持 PickPic", ar: "دعم PickPic", variants: ["Support PickPic", "支持 PickPic", "دعم PickPic"] },

    // Detailed Privacy Content
    privacyIntro: {
      en: "PickPic respects your privacy and is committed to protecting your personal information.",
      zh: "PickPic 尊重您的隐私，并致力于保护您的个人信息。",
      ar: "تحترم PickPic خصوصيتك وتلتزم بحماية معلوماتك الشخصية.",
      variants: ["PickPic respects your privacy and is committed to protecting your personal information."]
    },
    dataCollection: { en: "Data Collection", zh: "数据收集", ar: "جمع البيانات", variants: ["Data Collection"] },
    dataCollectionDesc: {
      en: "This extension does NOT collect, store, or transmit any personal data. All operations are performed locally on your device.",
      zh: "此扩展程序不收集、存储或传输任何个人数据。所有操作均在您的设备上本地执行。",
      ar: "لا يقوم هذا الامتداد بجمع أو تخزين أو نقل أي بيانات شخصية. يتم تنفيذ جميع العمليات محليًا على جهازك.",
      variants: ["This extension does NOT collect, store, or transmit any personal data. All operations are performed locally on your device."]
    },
    permissions: { en: "Permissions", zh: "权限", ar: "الأذونات", variants: ["Permissions"] },
    permissionsDesc: {
      en: "The extension requires the following permissions:",
      zh: "扩展程序需要以下权限：",
      ar: "يتطلب الامتداد الأذونات التالية:",
      variants: [
        "The extension requires the following permissions:",
        "The extension requires the following permissions"
      ]
    },
    permActiveTabDesc: { en: "To access the current webpage", zh: "访问当前网页", ar: "للوصول إلى صفحة الويب الحالية", variants: ["To access the current webpage"] },
    permStorageDesc: { en: "To save user preferences locally", zh: "在本地保存用户偏好设置", ar: "لحفظ تفضيلات المستخدم محليًا", variants: ["To save user preferences locally"] },
    permDownloadsDesc: { en: "To download images from articles", zh: "从文章下载图片", ar: "لتنزيل الصور من المقالات", variants: ["To download images from articles"] },
    permSidePanelDesc: { en: "To display the side panel UI", zh: "显示侧边栏界面", ar: "لعرض واجهة اللوحة الجانبية", variants: ["To display the side panel UI"] },
    permContextMenusDesc: { en: "To add a quick download option in the right-click menu on images", zh: "在图片的右键菜单中添加快速下载选项", ar: "لإضافة خيار تنزيل سريع في قائمة النقر بزر الماوس الأيمن على الصور", variants: ["To add a quick download option in the right-click menu on images"] },
    permAllUrlsDesc: { en: "To extract content from any website", zh: "从任何网站提取内容", ar: "لاستخراج المحتوى من أي موقع ويب", variants: ["To extract content from any website"] },
    thirdPartyServices: { en: "Third-Party Services", zh: "第三方服务", ar: "خدمات الطرف الثالث", variants: ["Third-Party Services"] },
    thirdPartyDesc: {
      en: "This extension does not use any third-party analytics or tracking services.",
      zh: "此扩展程序不使用任何第三方分析或跟踪服务。",
      ar: "لا يستخدم هذا الامتداد أي خدمات تحليل أو تتبع تابعة لجهات خارجية.",
      variants: ["This extension does not use any third-party analytics or tracking services."]
    },

    // Detailed Feedback Content
    feedbackSupport: { en: "Feedback & Support", zh: "反馈与支持", ar: "الملاحظات والدعم", variants: ["Feedback & Support"] },

    githubIssues: {
      en: "GitHub Issues",
      zh: "GitHub 问题",
      ar: "بلاغات GitHub",
      variants: ["GitHub Issues", "GitHub Issues", "GitHub 问题"]
    },

    githubIssuesDesc: {
      en: "Report bugs or request features on our GitHub repository.",
      zh: "在我们的 GitHub 仓库中报告错误或请求功能。",
      ar: "الإبلاغ عن الأخطاء أو طلب ميزات في مستودع GitHub الخاص بنا.",
      variants: ["Report bugs or request features on our GitHub repository."]
    },

    openIssue: {
      en: "Open an Issue",
      zh: "新建 Issue",
      ar: "إنشاء بلاغ",
      variants: ["Open an Issue", "提交 Issue", "提交问题"]
    },

    emailContact: { en: "Email Contact", zh: "邮件联系", ar: "التواصل عبر البريد الإلكتروني", variants: ["Email Contact", "邮件联系", "الاتصال عبر البريد الإلكتروني", "التواصل عبر البريد الإلكتروني"] },

    emailContactDesc: {
      en: "Send us your feedback or questions via email.",
      zh: "通过电子邮件发送您的反馈或问题。",
      ar: "أرسل لنا ملاحظاتك أو أسئلتك عبر البريد الإلكتروني.",
      variants: ["Send us your feedback or questions via email."]
    },

    feedbackAppreciation: {
      en: "We appreciate your feedback and will do our best to respond as quickly as possible.",
      zh: "我们感谢您的反馈，并将尽最大努力尽快回复。",
      ar: "نحن نقدر ملاحظاتك وسنبذل قصارى جهدنا للرد في أسرع وقت ممكن.",
      variants: ["We appreciate your feedback and will do our best to respond as quickly as possible."]
    },

    // About Content
    aboutPickPic: { en: "About PickPic", zh: "关于 PickPic", ar: "حول PickPic", variants: ["About PickPic", "关于 PickPic", "حول PickPic"] },
    copyright: { en: "© 2025 All rights reserved", zh: "© 2025 版权所有", ar: "© 2025 جميع الحقوق محفوظة", variants: ["© 2025 All rights reserved", "© 2025 版权所有", "© 2025 جميع الحقوق محفوظة"] },
    versionNum: { en: "v1.1.0", zh: "v1.1.0", ar: "v1.1.0", variants: ["v1.0.0", "v1.0.2", "v1.1.0"] },

    // App Specific
    appTitle: {
      en: "PickPic: One-click Downloader",
      zh: "PickPic：一键下载器",
      ar: "PickPic: أداة التحميل بنقرة واحدة",
      variants: [
        "PickPic: One-click Downloader",
        "PickPic: One-click downloader for images and videos from any webpage",
        "PickPic: 一键下载器",
        "yaolifeng0629/PickPic: 一键下载器，可从任何网页下载图片和视频，并增强对微信公众号文章的支持（One-click downloader for images and videos from any webpage, with enhanced support for WeChat Official Account articles.）",
        "yaolifeng0629/PickPic"
      ]
    }
  };


  const variantsIndex = [];
  Object.values(concepts).forEach((c) => {
    c.variants.forEach((v) => variantsIndex.push({ v, key: Object.keys(concepts).find((k) => concepts[k] === c) }));
  });

  function getLang() {
    return new Promise((resolve) => {
      try {
        chrome.storage.sync.get([LANG_KEY], (res) => {
          resolve(res[LANG_KEY] || DEFAULT_LANG);
        });
      } catch {
        resolve(DEFAULT_LANG);
      }
    });
  }

  function setLang(lang) {
    try {
      chrome.storage.sync.set({ [LANG_KEY]: lang });
    } catch { }
  }

  function t(lang, key) {
    const c = concepts[key];
    if (!c) return key;
    return c[lang] || c.en;
  }

  function applyDir(lang) {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // Also adjust body and main containers if needed
    if (lang === "ar") {
      document.body.style.textAlign = "right";
    } else {
      document.body.style.textAlign = "left";
    }
  }

  function applyTranslations(lang) {
    applyDir(lang);
    document.title = t(lang, "appTitle");
    const mapping = {};
    Object.keys(concepts).forEach((key) => {
      mapping[key] = t(lang, key);
    });

    // 0. Optimized update for already identified elements
    document.querySelectorAll("[data-pickpic-key]").forEach(el => {
      const key = el.getAttribute("data-pickpic-key");
      const targetVal = t(lang, key);

      // Try to find the text node to update
      let updated = false;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let node;
      while (node = walker.nextNode()) {
        const val = node.nodeValue.trim();
        if (!val) continue;

        // Handle suffix colon logic
        let lookupVal = val;
        let suffix = "";
        if (val.endsWith(":") || val.endsWith("：")) {
          suffix = val.slice(-1);
          lookupVal = val.slice(0, -1).trim();
        }

        const fullTarget = targetVal + suffix;

        // If already correct
        if (val === fullTarget) {
          updated = true;
          break;
        }

        // Check against variants (strict match ignoring case)
        const c = concepts[key];
        const lowerVal = lookupVal.toLowerCase();
        if (c && c.variants.some(v => lowerVal === v.toLowerCase())) {
          node.nodeValue = fullTarget;
          updated = true;
          break;
        }
      }
      // If no text node matched (maybe structure changed), try setting textContent if safe
      if (!updated && el.children.length === 0) {
        el.textContent = targetVal;
      }
    });

    // 1. Text Nodes (Discovery)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const val = node.nodeValue && node.nodeValue.trim();
      if (!val) continue;

      // Skip language menu items (User request: keep them static)
      if (node.parentElement && node.parentElement.closest && node.parentElement.closest('#pickpic-lang-menu')) {
        continue;
      }

      // Skip if already handled via data-pickpic-key
      if (node.parentElement && node.parentElement.hasAttribute("data-pickpic-key")) {
        continue;
      }

      // Special check for the known long title or its parts
      if (
        val.includes("yaolifeng0629/PickPic") ||
        (val.includes("One-click downloader") && val.length > 50) ||
        val.includes("PickPic: أداة التحميل بنقرة واحدة") ||
        val.includes("PickPic: 一键下载器")
      ) {
        node.nodeValue = mapping["appTitle"];
        continue;
      }

      // Dynamic strings (Buttons)
      // "Download All Images (5)"
      const downloadAllMatch = val.match(/Download All Images \((\d+)\)/i);
      if (downloadAllMatch) {
        const count = downloadAllMatch[1];
        if (lang === 'ar') node.nodeValue = `تنزيل الكل (${count})`;
        else if (lang === 'zh') node.nodeValue = `全部下载 (${count})`;
        else node.nodeValue = `Download All (${count})`;
        continue;
      }
      // "Download Selected (0)"
      const downloadSelectedMatch = val.match(/Download Selected( Images)? \((\d+)\)/i);
      if (downloadSelectedMatch) {
        const count = downloadSelectedMatch[2];
        if (lang === 'ar') node.nodeValue = `تنزيل المحدد (${count})`;
        else if (lang === 'zh') node.nodeValue = `下载选中 (${count})`;
        else node.nodeValue = `Download Selected (${count})`;
        continue;
      }
      // "View More Projects"
      const viewMoreVariants = ["View More Projects", "عرض المزيد من المشاريع", "查看更多项目"];
      if (viewMoreVariants.some(v => val.includes(v))) {
        if (lang === 'ar') node.nodeValue = "عرض المزيد من المشاريع";
        else if (lang === 'zh') node.nodeValue = "查看更多项目";
        else node.nodeValue = "View More Projects";
        continue;
      }
      // "Developed by Immerse"
      const developedByVariants = ["Developed by Immerse", "طُوّر بواسطة Immerse", "由 Immerse 开发"];
      if (developedByVariants.some(v => val.includes(v))) {
        if (lang === 'ar') node.nodeValue = "طُوّر بواسطة Immerse ✨";
        else if (lang === 'zh') node.nodeValue = "由 Immerse 开发 ✨";
        else node.nodeValue = "Developed by Immerse ✨";
        continue;
      }

      // Handle suffix colon (e.g. "Width:")
      let lookupVal = val;
      let suffix = "";
      if (val.endsWith(":") || val.endsWith("：")) {
        suffix = val.slice(-1);
        lookupVal = val.slice(0, -1).trim();
      }

      // Special case: "123 images" or "123 videos"
      // This is dynamic content like "3 images"
      const countMatch = lookupVal.match(/^(\d+)\s+(images|videos|items)$/i);
      if (countMatch) {
        const num = countMatch[1];
        const type = countMatch[2].toLowerCase();
        let translatedType = type;
        if (type === "images") {
          if (lang === "ar") translatedType = "صور";
          else if (lang === "zh") translatedType = "图片";
        } else if (type === "videos") {
          if (lang === "ar") translatedType = "فيديوهات";
          else if (lang === "zh") translatedType = "视频";
        }
        // Reconstruct
        if (lang === "ar") node.nodeValue = `${num} ${translatedType}` + suffix;
        else if (lang === "zh") node.nodeValue = `${num} ${translatedType}` + suffix;
        // en default
        continue;
      }

      // Case-insensitive match
      const lowerVal = lookupVal.toLowerCase();
      let matched = false;
      for (const { v, key } of variantsIndex) {
        if (lowerVal === v.toLowerCase()) {
          node.nodeValue = mapping[key] + suffix;
          if (node.parentElement) {
            node.parentElement.setAttribute("data-pickpic-key", key);
          }
          matched = true;
          break;
        }
      }
      if (matched) continue;
    }

    // 2. Data Attributes (explicit)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(lang, key);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", t(lang, key));
    });

    // 3. Common Attributes (placeholder, title, etc)
    const attrs = ["placeholder", "title", "aria-label", "alt", "value", "label"];
    document.querySelectorAll("*").forEach((el) => {
      attrs.forEach((attr) => {
        const val = el.getAttribute(attr);
        if (!val) return;

        // Handle suffix colon logic if needed (usually not for attributes but let's be safe)
        // Usually attributes don't have colons.

        const lowerVal = val.trim().toLowerCase();
        for (const { v, key } of variantsIndex) {
          if (lowerVal === v.toLowerCase()) {
            el.setAttribute(attr, mapping[key]);
            break;
          }
        }
      });
    });
    // 4. Force update Language Button Text if found
    const langBtn = document.querySelector('[data-lang-menu-attached="1"]');
    if (langBtn) {
      const labelMap = {
        en: "English",
        zh: "Chinese",
        ar: "العربية"
      };
      // Find text node to update
      const walker = document.createTreeWalker(langBtn, NodeFilter.SHOW_TEXT);
      let node;
      while (node = walker.nextNode()) {
        const txt = node.nodeValue.trim().toLowerCase();
        // Check if it looks like a language name
        if (["english", "chinese", "العربية", "language", "lang", "en", "zh", "ar", "اللغة", "لغة", "中文", "arabic", "الصينية", "英文", "الإنكليزية", "الانجليزية"].some(t => txt.includes(t) || t.includes(txt))) {
          node.nodeValue = labelMap[lang];
          break;
        }
      }
    }
  }

  function attachLanguageMenu(lang) {
    // Attempt to find a language button
    const candidates = Array.from(document.querySelectorAll('button, [role="button"], .btn, .icon-button'));
    const matchText = (el) => {
      const txt = (el.innerText || "").trim().toLowerCase();
      return txt === "language" || txt.includes("语言") || txt.includes("中文") || txt === "en" || txt.includes("lang") || txt === "العربية" || txt === "english" || txt === "chinese" || txt === "ar" || txt === "zh" || txt.includes("اللغة") || txt.includes("لغة") || txt.includes("الإنجليزية") || txt.includes("الصينية");
    };
    const matchLabel = (el) => {
      const title = (el.getAttribute("title") || "").toLowerCase();
      const aria = (el.getAttribute("aria-label") || "").toLowerCase();
      return title.includes("language") || aria.includes("language") || title.includes("语言") || aria.includes("语言") || title.includes("اللغة") || aria.includes("اللغة") || title.includes("chinese") || aria.includes("chinese") || title.includes("english") || aria.includes("english") || title.includes("arabic") || aria.includes("arabic");
    };

    const langBtn = candidates.find((el) => matchText(el) || matchLabel(el));
    if (!langBtn) return;

    // Mark as attached
    if (langBtn.getAttribute("data-lang-menu-attached")) return;
    langBtn.setAttribute("data-lang-menu-attached", "1");

    langBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();

      const lang = await getLang();

      const existing = document.getElementById("pickpic-lang-menu");
      if (existing) {
        existing.remove();
        return;
      }

      const menu = document.createElement("div");
      menu.id = "pickpic-lang-menu";
      const rect = langBtn.getBoundingClientRect();

      menu.style.position = "fixed";
      menu.style.top = `${rect.bottom + 6}px`;
      menu.style.left = lang === "ar" ? `${rect.left}px` : `${rect.left - 100}px`; // Adjust based on RTL/LTR
      if (menu.style.left.startsWith("-")) menu.style.left = "10px"; // safety

      menu.style.zIndex = "2147483647"; // Max z-index
      menu.style.background = "#111827";
      menu.style.color = "#fff";
      menu.style.border = "1px solid #374151";
      menu.style.borderRadius = "8px";
      menu.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
      menu.style.padding = "6px";
      menu.style.minWidth = "160px";
      menu.style.fontFamily = "system-ui, sans-serif";
      menu.style.direction = "ltr"; // Keep menu LTR for consistency or depend on lang? let's keep LTR for menu items structure

      const options = [
        { value: "en", text: "English" },
        { value: "zh", text: "Chinese" },
        { value: "ar", text: "العربية" }
      ];

      options.forEach(({ value, text }) => {
        const item = document.createElement("button");
        item.type = "button";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.width = "100%";
        item.style.textAlign = "start";
        item.style.background = "transparent";
        item.style.color = "#e5e7eb";
        item.style.border = "none";
        item.style.padding = "8px 12px";
        item.style.borderRadius = "6px";
        item.style.cursor = "pointer";
        item.style.fontSize = "14px";

        // Checkmark
        const check = document.createElement("span");
        check.style.width = "16px";
        check.style.marginRight = "8px";
        check.textContent = lang === value ? "✓" : "";

        item.appendChild(check);
        item.appendChild(document.createTextNode(text)); // Display static name

        if (lang === value) {
          item.style.background = "#374151";
          item.style.color = "#fff";
        }

        item.addEventListener("click", () => {
          setLang(value);
          // Apply immediately to current page
          applyTranslations(value);
          updateContextMenuLanguage(value);
          menu.remove();
        });

        item.addEventListener("mouseenter", () => {
          if (lang !== value) item.style.background = "#1f2937";
        });
        item.addEventListener("mouseleave", () => {
          if (lang !== value) item.style.background = "transparent";
        });

        menu.appendChild(item);
      });

      document.body.appendChild(menu);

      // Close on outside click
      const onDocClick = (ev) => {
        if (!menu.contains(ev.target) && ev.target !== langBtn) {
          menu.remove();
          document.removeEventListener("click", onDocClick, true);
        }
      };
      // Use capture to catch it before other handlers if possible, or just bubble
      setTimeout(() => document.addEventListener("click", onDocClick, true), 0);
    }, { capture: true });
  }

  function updateContextMenuLanguage(lang) {
    try {
      chrome.runtime.sendMessage({ type: "UPDATE_CONTEXT_MENU_LANG", lang });
    } catch { }
  }

  function fixRefreshButton(lang) {
    const refreshText = (concepts.refresh[lang] || concepts.refresh.en).toLowerCase();

    // Helper to check if an element is the refresh button
    const isRefreshBtn = (el) => {
      const txt = (el.innerText || el.textContent || "").trim().toLowerCase();
      const title = (el.getAttribute("title") || "").toLowerCase();
      const aria = (el.getAttribute("aria-label") || "").toLowerCase();

      const target = refreshText;

      // Check text/title/aria against translated or English "refresh"
      if (txt === target || title === target || aria === target) return true;
      if (txt === "refresh" || title === "refresh" || aria === "refresh") return true;

      // Check for Lucide icon class
      if (el.querySelector(".lucide-refresh-cw")) return true;

      return false;
    };

    // Find all potential buttons
    const candidates = document.querySelectorAll('button, [role="button"], .btn, .icon-button');
    candidates.forEach(btn => {
      if (isRefreshBtn(btn)) {
        // Always ensure title is set for accessibility/hover
        if (!btn.getAttribute("title")) {
          btn.setAttribute("title", concepts.refresh[lang] || concepts.refresh.en);
        }

        if (btn.getAttribute("data-refresh-fixed")) return;

        btn.setAttribute("data-refresh-fixed", "1");

        // Remove existing clones to prevent duplicates if we run this multiple times
        // (Actually we can't easily remove event listeners, but we can clone and replace to strip them)
        // detailed fix: clone node to strip old listeners, then add ours.
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          // Reload the active tab in the current window
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs[0]) {
              chrome.tabs.reload(tabs[0].id);
              // Close window if it's a popup? No, sidepanel stays open.
            }
          });
        }, { capture: true });
      }
    });
  }

  function initSmartFilter(lang) {
    // Check if already initialized
    if (document.getElementById("pickpic-smart-filter-toggle")) return;

    const container = document.getElementById(rootId) || document.body;

    // Create Toggle Button
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "pickpic-smart-filter-toggle";
    toggleBtn.textContent = t(lang, "smartFilter") + ": OFF";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "16px";
    toggleBtn.style.right = "16px";
    toggleBtn.style.zIndex = "2147483640";
    toggleBtn.style.padding = "8px 12px";
    toggleBtn.style.background = "#374151";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "1px solid #4b5563";
    toggleBtn.style.borderRadius = "20px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.fontSize = "12px";
    toggleBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    toggleBtn.style.fontWeight = "bold";

    let isActive = false;

    toggleBtn.addEventListener("click", () => {
      isActive = !isActive;
      toggleBtn.textContent = t(lang, "smartFilter") + ": " + (isActive ? "ON" : "OFF");
      toggleBtn.style.background = isActive ? "#10b981" : "#374151";
      applyFilter();
    });

    document.body.appendChild(toggleBtn);

    const applyFilter = () => {
      const images = document.querySelectorAll("img");
      images.forEach(img => {
        // Skip preview images in modal
        if (img.closest("#pickpic-preview-modal")) return;

        if (!isActive) {
          img.style.display = "";
          if (img.parentElement) img.parentElement.style.display = "";
          return;
        }

        // Filter logic: < 100px width or height
        if (img.naturalWidth < 100 || img.naturalHeight < 100) {
          // Hide the image container if possible, or just the image
          // Usually images are in a card or list item.
          // Let's try to find the closest list item or card
          const card = img.closest(".image-card") || img.closest("li") || img.closest(".item");
          if (card) {
            card.style.display = "none";
          } else {
            img.style.display = "none";
          }
        } else {
          const card = img.closest(".image-card") || img.closest("li") || img.closest(".item");
          if (card) {
            card.style.display = "";
          } else {
            img.style.display = "";
          }
        }
      });
    };

    // Re-apply on mutations if active
    const observer = new MutationObserver(() => {
      if (isActive) applyFilter();
    });
    observer.observe(container, { childList: true, subtree: true });
  }

  function addPreviewButtons(lang) {
    // Skip settings page
    if (window.location.pathname.includes("settings.html")) return;

    const container = document.getElementById(rootId) || document.body;

    const addForImage = (img) => {
      if (!img || !img.src) return;
      if (img.getAttribute("data-has-preview-btn")) return;

      // Container for buttons
      const btnContainer = document.createElement("div");
      btnContainer.style.display = "flex";
      btnContainer.style.flexWrap = "wrap";
      btnContainer.style.gap = "8px";
      btnContainer.style.marginTop = "4px";
      btnContainer.style.marginBottom = "12px";

      // 1. Preview Button
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = t(lang, "preview");
      btn.setAttribute("data-i18n", "preview");

      // Styling
      btn.style.fontSize = "12px";
      btn.style.background = "#3b82f6"; // Blue
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "4px";
      btn.style.padding = "4px 8px";
      btn.style.cursor = "pointer";

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Open in Modal instead of new tab
        const modalId = "pickpic-preview-modal";
        let modal = document.getElementById(modalId);

        // Create modal if not exists
        if (!modal) {
          modal = document.createElement("div");
          modal.id = modalId;
          modal.style.position = "fixed";
          modal.style.top = "0";
          modal.style.left = "0";
          modal.style.width = "100%";
          modal.style.height = "100%";
          modal.style.backgroundColor = "rgba(0,0,0,0.9)";
          modal.style.zIndex = "2147483647"; // Max
          modal.style.display = "flex";
          modal.style.alignItems = "center";
          modal.style.justifyContent = "center";
          modal.style.flexDirection = "column";
          modal.style.cursor = "zoom-out";

          // Image Container
          const imgContainer = document.createElement("div");
          imgContainer.id = "pickpic-modal-content";
          imgContainer.style.maxWidth = "90%";
          imgContainer.style.maxHeight = "90%";
          imgContainer.style.position = "relative";

          const previewImg = document.createElement("img");
          previewImg.style.maxWidth = "100%";
          previewImg.style.maxHeight = "90vh";
          previewImg.style.borderRadius = "8px";
          previewImg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
          previewImg.style.cursor = "default";

          // Close button (X)
          const closeBtn = document.createElement("button");
          closeBtn.textContent = "×";
          closeBtn.style.position = "absolute";
          closeBtn.style.top = "-40px";
          closeBtn.style.right = "0";
          closeBtn.style.background = "transparent";
          closeBtn.style.border = "none";
          closeBtn.style.color = "#fff";
          closeBtn.style.fontSize = "32px";
          closeBtn.style.cursor = "pointer";
          closeBtn.style.lineHeight = "1";

          closeBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            modal.style.display = "none";
          });

          imgContainer.appendChild(closeBtn);
          imgContainer.appendChild(previewImg);
          modal.appendChild(imgContainer);

          // Close on click outside
          modal.addEventListener("click", (ev) => {
            if (ev.target === modal) {
              modal.style.display = "none";
            }
          });

          document.body.appendChild(modal);
        }

        // Update Image Source
        const previewImg = modal.querySelector("img");
        if (previewImg) {
          previewImg.src = img.src;
        }

        modal.style.display = "flex";
      });

      btnContainer.appendChild(btn);

      // 2. JPG Button (Auto Convert)
      const jpgBtn = document.createElement("button");
      jpgBtn.type = "button";
      jpgBtn.textContent = t(lang, "convertToJpg");
      jpgBtn.setAttribute("data-i18n", "convertToJpg");
      jpgBtn.style.fontSize = "12px";
      jpgBtn.style.background = "#10b981"; // Green
      jpgBtn.style.color = "#fff";
      jpgBtn.style.border = "none";
      jpgBtn.style.borderRadius = "4px";
      jpgBtn.style.padding = "4px 8px";
      jpgBtn.style.cursor = "pointer";

      jpgBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const originalText = jpgBtn.textContent;
        jpgBtn.textContent = t(lang, "converting");
        jpgBtn.disabled = true;

        try {
          // Create a canvas to convert
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const response = await fetch(img.src);
          const blob = await response.blob();
          const bitmap = await createImageBitmap(blob);

          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          ctx.drawImage(bitmap, 0, 0);

          const jpgUrl = canvas.toDataURL("image/jpeg", 0.9);

          // Trigger download
          const a = document.createElement("a");
          a.href = jpgUrl;
          // Generate filename
          const originalName = img.src.split("/").pop().split("?")[0] || "image";
          const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "");
          a.download = `${nameWithoutExt}.jpg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } catch (err) {
          console.error("Conversion failed:", err);
          alert(t(lang, "error"));
        } finally {
          jpgBtn.textContent = originalText;
          jpgBtn.disabled = false;
        }
      });

      btnContainer.appendChild(jpgBtn);

      // 3. PNG Button (Auto Convert)
      const pngBtn = document.createElement("button");
      pngBtn.type = "button";
      pngBtn.textContent = t(lang, "convertToPng");
      pngBtn.setAttribute("data-i18n", "convertToPng");
      pngBtn.style.fontSize = "12px";
      pngBtn.style.background = "#8b5cf6"; // Purple
      pngBtn.style.color = "#fff";
      pngBtn.style.border = "none";
      pngBtn.style.borderRadius = "4px";
      pngBtn.style.padding = "4px 8px";
      pngBtn.style.cursor = "pointer";

      pngBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const originalText = pngBtn.textContent;
        pngBtn.textContent = t(lang, "converting");
        pngBtn.disabled = true;

        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const response = await fetch(img.src);
          const blob = await response.blob();
          const bitmap = await createImageBitmap(blob);

          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          ctx.drawImage(bitmap, 0, 0);

          const pngUrl = canvas.toDataURL("image/png");

          const a = document.createElement("a");
          a.href = pngUrl;
          const originalName = img.src.split("/").pop().split("?")[0] || "image";
          const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "");
          a.download = `${nameWithoutExt}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } catch (err) {
          console.error("Conversion failed:", err);
          alert(t(lang, "error"));
        } finally {
          pngBtn.textContent = originalText;
          pngBtn.disabled = false;
        }
      });

      btnContainer.appendChild(pngBtn);

      // Insert after image
      img.insertAdjacentElement("afterend", btnContainer);
      img.setAttribute("data-has-preview-btn", "1");
    };

    // Initial scan
    container.querySelectorAll("img").forEach(addForImage);

    // Observe
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.tagName === "IMG") addForImage(node);
          if (node.querySelectorAll) node.querySelectorAll("img").forEach(addForImage);
        });
      });
    });
    mo.observe(container, { childList: true, subtree: true });
  }

  // Init
  (async () => {
    const lang = await getLang();

    // Initial Application
    attachLanguageMenu(lang);
    applyTranslations(lang);
    initSmartFilter(lang);
    addPreviewButtons(lang);
    fixRefreshButton(lang);
    updateContextMenuLanguage(lang);

    // Watch for DOM changes to re-apply translations to new elements (e.g. dynamic content)
    // We use a debounce to avoid performance hit
    let timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getLang().then(l => {
          attachLanguageMenu(l);
          applyTranslations(l);
          fixRefreshButton(l);
        });
      }, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Watch for Storage changes (Sync across tabs/pages)
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === "sync" && changes[LANG_KEY]) {
        const newLang = changes[LANG_KEY].newValue;
        applyTranslations(newLang);
        updateContextMenuLanguage(newLang);
        // Also re-render preview buttons text
        document.querySelectorAll('[data-i18n="preview"]').forEach(el => {
          el.textContent = t(newLang, "preview");
        });
        document.querySelectorAll('[data-i18n="convertToJpg"]').forEach(el => {
          el.textContent = t(newLang, "convertToJpg");
        });
        document.querySelectorAll('[data-i18n="convertToPng"]').forEach(el => {
          el.textContent = t(newLang, "convertToPng");
        });

        // Update Smart Filter Text
        const sfBtn = document.getElementById("pickpic-smart-filter-toggle");
        if (sfBtn) {
          const isActive = sfBtn.style.background !== "rgb(55, 65, 81)" && sfBtn.style.background !== "#374151"; // Check if active
          sfBtn.textContent = t(newLang, "smartFilter") + ": " + (isActive ? "ON" : "OFF");
        }
      }
    });

  })();
})();
