chrome.runtime.onInstalled.addListener(()=> chrome.contextMenus.create({id: "", title: "Copy textContent", contexts:["page","link"]}))
chrome.contextMenus.onClicked.addListener((a, b)=> b.url[0] != "c" &&
  chrome.scripting.executeScript({
    target: (a = a.frameId) ? {tabId: b.id, frameIds:[a]} : {tabId: b.id},
    world: "MAIN",
    func: ()=> navigator.clipboard.writeText(document.activeElement.textContent)
  })
)