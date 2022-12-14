// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript); // chrome.action is 

async function execScript() {
  // return (<>HTML</>)
  const tabId = await getTabId();
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    files: ['./index.html']
  })
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}
