class playListManager{
    constructor(intitalCapacity){

        this.capacity = intitalCapacity
        this.playlist = []
    }

    playList (song){

const index = this.playList.indexOf(song)

if(index != -1){
    this.playList.splice(index,1)
}

this.playList.unshift(song)

if(this.playList.length > this.capacity){

    this.playList.pop()
}
    }

getPlayList(song){
    this.playList.slice(song)
}


    }


   const initialCapacity = 3
   const playlistManager = new playListManager(initialCapacity)

   playlistManager.playSong('S3')
   playlistManager.playSong('S2')
   playlistManager.playSong('S1')

