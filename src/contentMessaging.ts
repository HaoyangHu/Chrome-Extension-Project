setTimeout(() => {
        chrome.runtime.sendMessage({payload: 'Hello from a content'}, 
        (resp) => console.log(resp));
        },300)

chrome.runtime.onMessage.addListener((request, sender, cb) => {
    console.log('request',request);
    console.log('sender',sender);
    cb('')
});