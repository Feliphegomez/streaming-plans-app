<template>
    <div class="bg-white">
        <div class="appHeader">
            <div class="left">
                <a href="/" class="headerButton">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </a>
            </div>
            <div class="pageTitle">
                Detalles del plan
            </div>
            <div class="right">
                <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                    <ion-icon name="share-social-outline"></ion-icon>
                </a>
            </div>
        </div>

        <div id="appCapsule">
            <div class="section mt-2">
                <h1>{{ record.name }}</h1>
                <div class="blog-header-info mt-2 mb-2">
                    <div>
                        <img src="@/assets/img/sample/avatar/avatar1.jpg" alt="img" class="imaged w24 rounded me-05">
                        Plataforma <a href="#">{{ record.plataform.name }}</a>
                    </div>
                    <div>
                        {{ record.price }}
                    </div>
                </div>
                <!-- <div class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam fringilla euismod. Nulla viverra
                    eu ante tincidunt viverra. Sed dignissim maximus turpis et dictum.
                </div> -->
            </div>
    
            <div class="section mt-2">
                {{ record.description }}
            </div>
            
            <div class="section">
                <br />
                <!-- <a href="#" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                    <ion-icon name="share-outline"></ion-icon> Compartir
                </a> -->
                <a href="#" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#DialogBasic">
                    <ion-icon name="cash-outline"></ion-icon> Comprar
                </a>
            </div>
    
            <!-- <div class="section mt-3">
                <h2>Otros planes</h2>
                <div class="row mt-3">
                    <div class="col-6 mb-2">
                        <a href="app-blog-post.html">
                            <div class="blog-card">
                                <img src="@/assets/img/sample/photo/1.jpg" alt="image" class="imaged w-100">
                                <div class="text">
                                    <h4 class="title">What will be the value of bitcoin in the next...</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-6 mb-2">
                        <a href="app-blog-post.html">
                            <div class="blog-card">
                                <img src="@/assets/img/sample/photo/2.jpg" alt="image" class="imaged w-100">
                                <div class="text">
                                    <h4 class="title">Rules you need to know in business</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-6 mb-2">
                        <a href="app-blog-post.html">
                            <div class="blog-card">
                                <img src="@/assets/img/sample/photo/3.jpg" alt="image" class="imaged w-100">
                                <div class="text">
                                    <h4 class="title">10 easy ways to save your money</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-6 mb-2">
                        <a href="app-blog-post.html">
                            <div class="blog-card">
                                <img src="@/assets/img/sample/photo/4.jpg" alt="image" class="imaged w-100">
                                <div class="text">
                                    <h4 class="title">Follow the financial agenda with...</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
        
    </div>
    <!-- Dialog Basic -->
    <div class="modal fade dialogbox" id="DialogBasic" data-bs-backdrop="static" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Comprar Plan</h5>
                </div>
                <div class="m>odal-body">
                    <div class="section">
                        Se descontaran $ {{ record.price }} de tu saldo. Deseas continuar?
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="btn-inline">
                        <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Cancelar</a>
                        <a href="#" @click="pay" class="btn btn-text-primary" data-bs-dismiss="modal">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- * Dialog Basic -->

    <div class="modal fade action-sheet inset" id="actionSheetShare" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Share with</h5>
                </div>
                <div class="modal-body">
                    <ul class="action-button-list">
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    Facebook
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    Twitter
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    Instagram
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    Linkedin
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import axios from 'axios';

export default {
    name: 'PlanDetailsView',
    data() {
        return {
            record: {
                id: 0,
                plataform: {
                    id: 0,
                    name: '',
                },
                name: '',
                description: '',
                price: 0.000,
            },
        };
    },
    async mounted() {
        await store.dispatch('loadUser')
        this.loadplan()
    },
    methods: {
        loadplan() {
            let self = this
            console.log('loadplan OK')
            this.$root.API('/plan-view/' + this.$route.params.plan_id, {}, (response) => {
                self.record = response
            })
            // axios.get('/plan-view/' + this.$route.params.plan_id, {})
            // .then(response => {
            //     console.log('response', response.data)
            //     if (response.status == 200) {
            //         this.record = response.data
            //     }
            // })
            // .catch(e => console.error(e))
        },
        async pay() {
            let self = this
            console.log('pay new', + self.$route.params.plan_id)
            this.$root.UI('pay-plan/' + self.$route.params.plan_id, {}, (response) => {
                console.log('pv-plan', response)
                // self.$router.push('/')
                location.replace('/')
            })
        },
        // async pay2() {
        //     console.log('pay')
        //     let self = this
        //     // Restar del balance
        //     console.log('Revisando saldo actual', this.$root.StateUser.balance)
        //     if (parseFloat(this.$root.StateUser.balance) >= parseFloat(self.record.price)) {
        //         let newBalance = parseFloat(this.$root.StateUser.balance) - parseFloat(self.record.price)
        //         let newBalance_txt = parseFloat(newBalance).toFixed(8).toString()
        //         console.log('newBalance', newBalance, newBalance_txt)

        //         await axios.put('records/users/' + self.$root.StateUser.id, {
        //             id: self.$root.StateUser.id,
        //             balance: newBalance,
        //         })
        //         .then(async updatedUser => {
        //             if (updatedUser.status == 200) {
        //                 await store.dispatch('loadUser')
        //                 console.log('balance actualizado OK')
        //                 await axios.post('records/transactions', {
        //                     user_id: self.$root.StateUser.id,
        //                     type: 'Gasto',
        //                     title: 'Compra de plan - ' + self.record.plataform.name,
        //                     description: 'Compra de plan ' + self.record.name + ' para la plataforma ' + self.record.plataform.name,
        //                     amount: self.record.price,
        //                 })
        //                 .then(async responseTx => {
        //                     console.log('transaccion creada', responseTx)
        //                     if (responseTx.status == 200) {
        //                         await axios.post('records/memberships', {
        //                             user_id: self.$root.StateUser.id,
        //                             plan_id: this.$route.params.plan_id,
        //                         })
        //                         .then(responseMs => {
        //                             if (responseMs.status == 200) {
        //                                 console.log('membresia creada')
        //                                 self.$router.push('/')
        //                             }
        //                         })
        //                         .catch(e_ms => console.log(e_ms))
        //                     }
        //                 })
        //                 .catch(e_t => console.log(e_t))
        //             }
        //         })
        //         .catch(e => console.log(e))
        //     } else {
        //         alert('Saldo insuficiente, recargue su cuenta.')
        //         // self.$router.push('/')
        //         location.replace('/recharge')
        //     }

        //     // Crear transaction
        //     // await axios.post('records/transactions', {
                
        //     // })
        //     // .then(responseTX => {
        //     //     console.log('responseTX', responseTX)
        //     // })
        //     // Crear membresia
        // },
    },
}
</script>