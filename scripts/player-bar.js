$(document).ready(function(){
  $('button#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  $('button#next').click(function(){
    if (player.playState !== 'playing'){return}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) {return};
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').click(function(){
    if (player.playState !== 'playing'){return}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const lastSongIndex = currentSongIndex - 1;
    if (lastSongIndex >= album.songs.length) {return};
    const lastSong = album.songs[lastSongIndex];
    player.playPause(lastSong);
  });

});
