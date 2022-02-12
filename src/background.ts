chrome.runtime.onInstalled.addListener(()=>{
    console.log('Extension have been successfully installed');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark saved');
})

chrome.action.onClicked.addListener(function (tab){
    console.log(tab);
});

chrome.runtime.onMessage.addListener((request, sender, resp) => {
    console.log('request',request);
    console.log('sender',sender);
    console.log('response',resp('hello world'));
});


chrome.bookmarks.onMoved.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { name: 'HHY'}, (resp) => console.log('aha'));
    });
})


