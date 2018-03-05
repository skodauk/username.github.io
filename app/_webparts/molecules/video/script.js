if ( $('[data-ytID]').length ) {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var players = [];
  var videoIds = [];
  
  function onYouTubeIframeAPIReady() {
	$('.humanise-video__video').each(function(index) {
		videoIds[index] = $(this).attr('id');
		var ytID = $('#' + videoIds[index] + '[data-ytID]').attr('data-ytID');
		players[index] = new YT.Player(videoIds[index], {
		  height: '100%',
		  width: '100%',
		  videoId: ytID,
		  playerVars: { 
			'showinfo':0,
			'controls':0, 
			'rel':0,
			'fs':0,
			'modestbranding':1,
			'loop':1,
		  },
		  events: {
			'onReady': function(event) {
				var autoplay = $('#' + videoIds[index] + '[data-ytID]').attr('data-autoplay');
				if (autoplay == 1) {
				  event.target.mute();
				  event.target.playVideo();
				}
			}
		  }
		});
	});
  }

}

