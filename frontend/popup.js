
document.getElementById("startScraping").addEventListener("click", function () {
  const linkedinProfileLinks = [
      "https://www.linkedin.com/in/saurabh-soni-1540a0250/",
      "https://www.linkedin.com/in/shobithacc/",
      "https://www.linkedin.com/in/pratibha-singh-a9baab27b"
  ];

  let currentIndex = 0;

  function scrapeNextProfile() {
      if (currentIndex < linkedinProfileLinks.length) {
          const url = linkedinProfileLinks[currentIndex];
          chrome.tabs.update({ url: url }, function (tab) {
              chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                  if (changeInfo.status === "complete" && tabId === tab.id) {
                    console.log(tab.id);
                      chrome.tabs.onUpdated.removeListener(listener);

                      currentIndex++;
                  scrapeNextProfile();

                      chrome.scripting.executeScript({
                          target:{tabId:tab.id,allFrames:true},
                           files: ["/frontend/content.js" ],
                         } )    .then(() => console.log("script injected in all frames"));
                  }
              });
          });
      } else {
          console.log("Scraping complete");
      }
  }
  scrapeNextProfile();

});
