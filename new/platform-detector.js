function downloadClient() 
{
	const platform = window.navigator.platform;
	
	console.log("The platform is " + platform);
	
	switch (platform) 
	{
		case "Win32": 
		{
			window.location.href = "https://github.com/BoomboxRapsody/YouTubePlayerEX/releases/latest/download/YouTubePlayerEX-win-Setup.exe";
			break;
		}
		case "Linux x86_64": 
		{
			window.location.href = "https://github.com/BoomboxRapsody/YouTubePlayerEX/releases/latest/download/YouTubePlayerEX-linux-x64.AppImage";
			break;
		}
	}
}

function getLang() {
    var lang = (navigator.languages != undefined)?navigator.languages[0]:navigator.language;
    // Ignore country code (example: en-US -> en)
    return lang.split("-")[0];
}
     
function translate(key, lang) {
    return (lang in dictionary)?dictionary[lang][key]:dictionary['_'][key];
}

const platform = window.navigator.platform;
var elem = document.getElementById("dl_text");

console.log("The platform is " + platform);
	
switch (platform) 
{
	case "Win32": 
	{
		var key = 'download_windows'; 
        var lang = getLang();
        elem.innerHTML = translate(key, lang);
		break;
	}
	case "Linux x86_64": 
	{
		var key = 'download_linux'; 
        var lang = getLang();
        elem.innerHTML = translate(key, lang);
		break;
	}
}