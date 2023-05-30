
import axios from 'axios'
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => ({
    artistId: null,
    artistName: null,
    songs: null,
  }),

  actions: {
        async fetchSongByUserId(userId){
        let res = await axios.get('user/' + userId + '/songs')
        this.$state.artistId = res.data.artist_id
        this.$state.artistName = res.data.artist_name
        this.$state.songs = res.data.songs
    },

    async clearSong(){
        this.$state.songs = null
        this.$state.artistName = null
        this.$state.artistId = null
    },
  },
  persist: true,
})