window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    //internationalization
    button.textContent = chrome.i18n.getMessage("enableDarkModeText");
  

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkSetting';

    document.querySelector('#end').prepend(button, input,'Auto apply?');

    button.addEventListener('click', () => enableDarkMode());
    input.addEventListener('click', () => storeSetting());

    checkSetting();
};

function checkSetting() {
    chrome.storage.local.get(['enabled'],result => {
        const isEnabled = result.enabled;
        
        // console.log(isEnabled);
        const settingCheckbox = document.getElementById('darkSetting') as HTMLInputElement;

        settingCheckbox.checked = isEnabled;

        if(isEnabled){
            enableDarkMode();
        }
    })
}

function storeSetting() {
    const settingCheckbox = document.getElementById('darkSetting') as HTMLInputElement;
    const isEnabled = settingCheckbox.checked;
    const setting = { enabled: isEnabled};

    chrome.storage.local.set(setting, () => {
        console.log('stored', setting);
    })
}

function enableDarkMode(){
    const websiteBody = document.getElementsByTagName('ytd-app')[0] as HTMLElement;
    websiteBody.style.backgroundColor = 'black';
}
