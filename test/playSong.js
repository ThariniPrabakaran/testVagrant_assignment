

class PlaylistManager {
    constructor(initialCapacity) {
      this.capacity = initialCapacity;
      this.playlist = [];
    }

   
  
    playSong(song) {
      // The function will Check if the song is already in the playlist
      //store the index of song to variable index
      const index = this.playlist.indexOf(song);
  
      // If the song is in the playlist, move it to the front using splice 
      if (index != -1) {
        this.playlist.splice(index, 1); // Remove the song from its current position
      }
  
      // Add the new song to the front of the playlist using unshift
      this.playlist.unshift(song);
  
      // Trim the playlist if it exceeds capacity using pop
      if (this.playlist.length > this.capacity) {
        this.playlist.pop(); // Remove the least recently played song
      }
    }
  
    getPlaylist() {
      return this.playlist.slice(); // Return a copy of the playlist to prevent external modifications
    }
  }//
  
  // Example usage
  const initialCapacity = 3;
  const playlistManager = new PlaylistManager(initialCapacity);
  
  playlistManager.playSong("S1");
  playlistManager.playSong("S2");
  playlistManager.playSong("S3");
  
  console.log("Playlist after playing S1, S2, S3:", playlistManager.getPlaylist());
  
  playlistManager.playSong("S4");
  console.log("Playlist after playing S4:", playlistManager.getPlaylist());
  
  playlistManager.playSong("S2");
  console.log("Playlist after playing S2:", playlistManager.getPlaylist());
  
  playlistManager.playSong("S1");
  console.log("Playlist after playing S1:", playlistManager.getPlaylist());