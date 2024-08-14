//store/modules/auth.js

import axios from 'axios';
const state = {
    userStatus: 'disconnect',
    user: null,
    subscriptions: null,
};
const getters = {
    isAuthenticated: state => state.userStatus == 'connected',    
    sessionState: state => state.userStatus,
    StateUser: state => state.user,
};
const actions = {
    async loadUser({state}) {
        console.log('loadUser:Inicio')
        await axios.get('profile')
        .then(async response => {
            console.log('then profile', response.data)
            if (response.status == 200) {
                state.userStatus = 'connected';
                state.user = response.data;   
            }
        })
        .catch(error => {
            console.log('error', error)
        })
        console.log('loadUser:Fin')
    },
    async Register({dispatch}, form) {
        console.log('registrando...')
        await axios.post('/register', form)
        .then((a) => {
            console.log(a)
        })
        .catch((e) => {
            console.log(e)
            console.error(e.response.data)
            throw new Error(e.response.data.message)
        })
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },
    async LogIn(store, form) {
        let self = this
        // await commit('setUser', User.get('username'))
        await axios.post('/login', form)
        .then(async (a) => {
            console.log('login', a)
            // self.loadSession()
            await store.dispatch('loadUser')
        })
        .catch((e) => {
            console.log(e)
            console.error(e.response.data)
            throw new Error(e.response.data.message)
        })
    },
    async LogOut({state}) {
        state.userStatus = 'disconnected'
        state.user = null
        await axios.post('logout')
        .then((a) => {
            
        })
        .catch((e) => {
            console.log(e)
        })
    },
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    LogOut(state){
        state.user = null
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};
