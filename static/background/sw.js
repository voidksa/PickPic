importScripts("index.js");
chrome.runtime.onInstalled.addListener(() => {
    ensureContextMenus();
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "preview-image" && info.srcUrl) {
        chrome.tabs.create({ url: info.srcUrl });
    }
    if (info.menuItemId === "download-image" && info.srcUrl) {
        chrome.runtime.sendMessage({ type: "DOWNLOAD_IMAGE_DIRECT", url: info.srcUrl });
    }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "UPDATE_CONTEXT_MENU_LANG") {
        updateContextMenuTitles(msg.lang).then(() => sendResponse({ ok: true }));
        return true;
    }
    return false;
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync" && changes.lang) {
        updateContextMenuTitles(changes.lang.newValue);
    }
});

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

function ensureContextMenus() {
    chrome.contextMenus.create({
        id: "download-image",
        title: "Download this image",
        contexts: ["image"]
    });
    chrome.contextMenus.create({
        id: "preview-image",
        title: "Preview this image",
        contexts: ["image"]
    });
    chrome.storage.sync.get([LANG_KEY], (res) => {
        const lang = res[LANG_KEY] || DEFAULT_LANG;
        updateContextMenuTitles(lang);
    });
}

function updateContextMenuTitles(lang) {
    return new Promise((resolve) => {
        const titles = {
            en: {
                download: "Download this image",
                preview: "Preview this image"
            },
            zh: {
                download: "下载此图片",
                preview: "预览此图片"
            },
            ar: {
                download: "تحميل هذه الصورة",
                preview: "معاينة هذه الصورة"
            }
        };
        const t = titles[lang] || titles[DEFAULT_LANG];
        try {
            chrome.contextMenus.update("download-image", { title: t.download });
            chrome.contextMenus.update("preview-image", { title: t.preview });
        } catch { }
        resolve();
    });
}
