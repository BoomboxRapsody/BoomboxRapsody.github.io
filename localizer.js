var dictionary = {
    "_": { // when language is not supported
        "about": "About",
		"download": "Download",
		"home": "Home",
		"view_on_github": "View on GitHub",
		"yt_player_ex_desc": "The enhanced YouTube video player written in C#.\nNo ads, No bloatware, Only simply design.",
		"download_windows": "Download (Windows)",
		"download_linux": "Download (Linux)",
		"no_ads": "Stream videos without interruptions.",
		"no_ads_desc": "Immerse yourself in more of your favorite content, ad-free.",
		"compare": "Compare apps",
		"ad_free": "Ad-free YouTube videos",
		"bg_play": "Background play",
		"audio_effects": "Audio effects",
		"video_effects": "Video visual effects",
    },
    "en": {
        "about": "About",
		"download": "Download",
		"home": "Home",
		"view_on_github": "View on GitHub",
		"yt_player_ex_desc": "The enhanced YouTube video player written in C#.\nNo ads, No bloatware, Only simply design.",
		"download_windows": "Download (Windows)",
		"download_linux": "Download (Linux)",
		"no_ads": "Stream videos without interruptions.",
		"no_ads_desc": "Immerse yourself in more of your favorite content, ad-free.",
		"compare": "Compare apps",
		"ad_free": "Ad-free YouTube videos",
		"bg_play": "Background play",
		"audio_effects": "Audio effects",
		"video_effects": "Video visual effects",
    },
    "ja": {
        "about": "About",
		"download": "Download",
		"home": "Home",
		"view_on_github": "View on GitHub",
		"yt_player_ex_desc": "The enhanced YouTube video player written in C#.\nNo ads, No bloatware, Only simply design.",
		"download_windows": "Download (Windows)",
		"download_linux": "Download (Linux)",
		"no_ads": "Stream videos without interruptions.",
		"no_ads_desc": "Immerse yourself in more of your favorite content, ad-free.",
		"compare": "Compare apps",
		"ad_free": "Ad-free YouTube videos",
		"bg_play": "Background play",
		"audio_effects": "Audio effects",
		"video_effects": "Video visual effects",
    },
	"ko": {
        "about": "정보",
		"download": "다운로드",
		"home": "홈",
		"view_on_github": "GitHub에서 소스 코드 보기",
		"yt_player_ex_desc": "C# 코드로 작성된 YouTube 동영상 플레이어의 개선판입니다.\nYouTube Premium 없이 광고로 끊김 없는 오직 심플한 디자인만을 담았습니다.",
		"download_windows": "다운로드 (Windows)",
		"download_linux": "다운로드 (Linux)",
		"no_ads": "광고로 끊김 없는 동영상 스트리밍",
		"no_ads_desc": "광고로 끊김 없이 좋아하는 콘텐츠에 몰입하세요",
		"compare": "앱 비교",
		"ad_free": "광고 없는 YouTube 동영상",
		"bg_play": "백그라운드 재생",
		"audio_effects": "오디오 효과",
		"video_effects": "동영상 시각 효과",
    }
}

class HTMLLocalizer {
    constructor() {
        customElements.define('localized-text', LocalizedTextElement);
    }
}

class LocalizedTextElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var key = this.hasAttribute('key') ? this.getAttribute('key') : ''; 
        var lang = this.hasAttribute('lang') ? this.getAttribute('lang') : this.getLang();
        this.innerHTML = this.translate(key, lang);
    }

    getLang() {
        var lang = (navigator.languages != undefined)?navigator.languages[0]:navigator.language;
        // Ignore country code (example: en-US -> en)
        return lang.split("-")[0];
    }
    
    translate(key, lang) {
        return (lang in dictionary)?dictionary[lang][key]:dictionary['_'][key];
    }
}
  
new HTMLLocalizer();