class Helper{
  playPauseAndUpdate(song){
    const totaltime = player.getDuration();
    player.playPause(song);
    $('#time-control .total-time').text(totaltime);
 }
}
const Helper = new helper();
