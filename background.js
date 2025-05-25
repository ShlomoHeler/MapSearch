chrome.contextMenus.create({
    id: "searchInGoogleMaps",
    title: "search In Google Maps",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "searchInGoogleMaps" && info.selectionText) {
      const query = encodeURIComponent(info.selectionText.trim());
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
      chrome.tabs.create({ url: mapsUrl });
    }
  });
  