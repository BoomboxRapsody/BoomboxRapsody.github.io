function downloadClient() 
{
	const platform = window.navigator.platform;
	
	console.log("The platform is " + platform);
	
	window.location.href = "https://github.com/BoomboxRapsody/NekoPlayer/releases/latest/download/NekoPlayer-win-Setup.exe";
}

async function getLatestRelease(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github+json',
        // 인증이 필요한 private repo인 경우 아래 주석 해제
        // 'Authorization': 'Bearer YOUR_TOKEN'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Latest Version:', data.tag_name);
    console.log('Release Name:', data.name);
    console.log('Download URL:', data.html_url);
	
	const platform = window.navigator.platform;
	var elem = document.getElementById("dl_text");

	console.log("The platform is " + platform);
	
	var key = 'download_windows'; 
	var lang = getLang();
	elem.innerHTML = translate(key, lang).replace("{version}", data.name);
	
    return data;
  } catch (error) {
    console.error('Failed to fetch latest release:', error);
  }
}

// 예시: ultralytics/yolov5
getLatestRelease('BoomboxRapsody', 'NekoPlayer');

function getLang() {
    var lang = (navigator.languages != undefined)?navigator.languages[0]:navigator.language;
    // Ignore country code (example: en-US -> en)
    return lang.split("-")[0];
}
     
function translate(key, lang) {
    return (lang in dictionary)?dictionary[lang][key]:dictionary['_'][key];
}