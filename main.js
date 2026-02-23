const tabs = document.getElementById('tabs');

tabs.addEventListener('change', (event) => {
  if (event.target.activeTabIndex === 1) {
    window.location = "./youtube-player-ex.html";
  } else if (event.target.activeTabIndex === 0) {
    window.location = "./index.html";
  } else if (event.target.activeTabIndex === 2) {
    window.location = "./about.html";
  }
});