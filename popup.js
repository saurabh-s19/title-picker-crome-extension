document.getElementById("getTitleBtn").addEventListener("click", async() => {
    let [tab]=await chrome.tabs.query({active:true ,currentWindow:true});   
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:getTabTitle
    })
  });
  
  
  function getTabTitle() {
    const title = document.title;
    chrome.runtime.sendMessage({ title });

  }
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.title) {
      document.getElementById("titleDisplay").textContent = message.title;
    }
  });
  