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