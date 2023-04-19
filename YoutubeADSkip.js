javascript:(function() {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})(?:\S+)?/;
  const url = window.location.href;
  const match = url.match(regex);
  if (match) {
    const videoId = match[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?start=0&amp;autoplay=1&amp;cc_load_policy=0&amp;errorlinks=0&amp;hl=en&amp;authuser=0&amp&utm_system=NOADS&utm_size=FULLSCREEN&utm_video.quality=1080P60-140P&utm_code=NONCHANGEABLE`;
    const message = `Copy YouTube URL Below`;
    prompt(message, embedUrl);
  } else {
    const videoLink = prompt("Please enter a link to a YouTube video:");
    const match = videoLink.match(regex);
    if (match) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?start=0&amp;autoplay=1&amp;cc_load_policy=0&amp;errorlinks=0&amp;hl=en&amp;authuser=0&amp&utm_system=NOADS&utm_size=FULLSCREEN&utm_video.quality=1080P60-140P&utm_code=NONCHANGEABLE`;
      const message = `Copy YouTube URL Below`;
      prompt(message, embedUrl);
    } else {
      alert("This doesn't seem to be a valid YouTube video link.");
    }
  }
})();
