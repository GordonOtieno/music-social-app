
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    token: null,
    first_name: null,
    last_name: null,
    email: null,
    location: null,
    image: null,
    description: null,
  }),

  actions: {
    async setUserDetails(res) {
        console.log('setUserDetails',res)
      this.$state.id = res.data.user.id
      this.$state.token = res.data.token
      this.$state.first_name = res.data.user.first_name
      this.$state.last_name = res.data.user.last_name
      this.$state.email = res.data.user.email
      this.$state.location = res.data.user.location
      this.$state.image = res.data.user.image
      this.$state.description = res.data.user.description
    },
   
    async fetchUser(){
        let res = await axios.get('http://127.0.0.1:8000/api/v1/users/' + this.$state.id)
        this.$state.id = res.data.user.id
        this.$state.first_name = res.data.user.first_name
        this.$state.last_name = res.data.user.last_name
        this.$state.location = res.data.user.location
        this.$state.description = res.data.user.description
    },

    async clearUser(){
        this.$state.id = null
        this.$state.token = null
        this.$state.first_name = null
        this.$state.last_name = null
        this.$state.email = null
        this.$state.location = null
        this.$state.image = null
        this.$state.description = null
    },
    persist: true,

  },
})