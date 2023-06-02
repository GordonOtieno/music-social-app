
import axios from 'axios'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: null,
  }),

  actions: {
        async fetchPostsByUserId(userId){
        let res = await axios.get('user/' + userId +'/posts')
        this.$state.posts = res.data.posts_by_user
    },
    postImage(image){
      return process.env.VUE_APP_API_URL + 'images/posts/'+image;
    },

    async clearPosts(){
        this.$state.posts = null

    },
   
  },
  persist: true,
})