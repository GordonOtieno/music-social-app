
import axios from 'axios'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
  state: () => ({
    songs: null,
  }),

  actions: {
        async fetchVideosByUserId(userId){
        let res = await axios.get('youtube/' + userId)
        this.$state.videos = res.data.videos_by_user
    },

    async clearSong(){
        this.$state.videos = null

    },
  },
  persist: true,
})