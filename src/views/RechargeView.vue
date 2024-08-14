<template>
    <!-- App Header -->
    <div class="appHeader no-border">
        <div class="left">
            <router-link to="/" class="headerButton">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </router-link>
        </div>
        <div class="pageTitle">
            Recargar cuenta
        </div>
        <div class="right"> </div>
    </div>

    <div id="appCapsule">
        <template v-if="recharge.status == 99">
            <div class="section">
                <div class="splash-page mt-5 mb-5">
                    <div class="transfer-verification">
                        <div class="transfer-amount">
                            <span class="caption">Cantidad</span>
                            <h2>$ {{ recharge.amount }}</h2>
                        </div>
                        <div class="from-to-block mb-5">
                        </div>
                    </div>
                    <h2 class="mb-2 mt-2">Verifica tu Recarga</h2>
                    <p>
                        Estás recargando <strong class="text-primary">$ {{ recharge.amount }}</strong> desde <b>{{ recharge.gateway_id.name }}</b>. <br>¿Está seguro?
                    </p>
                </div>
            </div>
    
            <div class="fixed-bar">
                <div class="row">
                    <div class="col-6">
                        <a href="/" class="btn btn-lg btn-outline-secondary btn-block">Cancelar</a>
                    </div>
                    <div class="col-6">
                        <a href="#" @click="confirmRecharge" class="btn btn-lg btn-primary btn-block">Confirmar</a>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="recharge.status <= 0">
            <div class="section">
                <FormDeposit />
            </div>
        </template>
        <template v-else-if="recharge.status == 1">
            <div class="section">
                <div class="splash-page mt-5 mb-5">
                    <div class="mb-3">
                        <img src="@/assets/img/sample/qr.png" alt="QR Code" class="imaged square w140">
                    </div>
                    <h2 class="mb-2">Escanea el código QR</h2>
                    <p>Realice la recarga y pulse en continuar</p>
                </div>
            </div>

            <div class="fixed-bar">
                <div class="row">
                    <div class="col-6">
                        <a href="app-pages.html" class="btn btn-lg btn-outline-secondary btn-block">Go Back</a>
                    </div>
                    <div class="col-6">
                        <!-- <a href="#" @click="confirmRecharge" class="btn btn-lg btn-primary btn-block">Continuar</a> -->
                    </div>
                    <div class="col-12">
                        <a href="#" @click="confirmDeposit" class="btn btn-lg btn-primary btn-block">F. manual</a>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="recharge.status == 98">
            <div class="section">
                <div class="splash-page mt-5 mb-5">
                    <div class="transfer-verification">
                        <div class="transfer-amount">
                            <span class="caption">Cantidad</span>
                            <h2>$ 50.00</h2>
                        </div>
                        <div class="from-to-block mb-5">
                            <div class="item text-start">
                                <img src="@/assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w48">
                                <strong>Jonathan</strong>
                            </div>
                            <div class="item text-end">
                                <img src="@/assets/img/sample/avatar/avatar4.jpg" alt="avatar" class="imaged w48">
                                <strong>Amanda</strong>
                            </div>
                            <div class="arrow"></div>
                        </div>
                    </div>
                    <h2 class="mb-2 mt-2">Verifica tu Recarga</h2>
                    <p>
                        Le estás recargando <strong class="text-primary">$ 50.00</strong> desde NEWUI. <br>¿Está seguro?
                    </p>
                </div>
            </div>
    
            <div class="fixed-bar">
                <div class="row">
                    <div class="col-6">
                        <a href="app-pages.html" class="btn btn-lg btn-outline-secondary btn-block">Cancel</a>
                    </div>
                    <div class="col-6">
                        <a href="app-pages.html" class="btn btn-lg btn-primary btn-block">Confirm</a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RechargeView',
    data() {
        return {
            records: [],
            recharge: {
                hash: 0,
                id: 0,
                status: -1,
                user_id: 0,
                amount: 0.00,
                gateway_id: {},
            },
        };
    },
    mounted() {
        let self = this
        
        this.$root.API('payment-gateways', {}, (response) => {
            self.records = response || [];
        })
        
        if (this.$route.params.hash) {
            this.recharge.hash = this.$route.params.hash
            let sol = atob(this.$route.params.hash).split(':')
            console.log('sol', sol)
            this.recharge.id = sol[1]
            self.loadRecharge()
        }
    },
    methods: {
        loadRecharge() {
            let self = this
            this.$root.API('recharge-view/' + this.recharge.id, {}, (response) => {
                self.recharge = response
            })
        },
        confirmRecharge() {
            let self = this
            this.$root.UI('recharge-confirm/' + this.recharge.id, {}, (response) => {
                self.loadRecharge()
            })
        },
        confirmDeposit() {
            let self = this
            console.log('confirmDeposit')
            this.$root.UI('deposit-confirm/' + this.recharge.id, {}, (response) => {
                self.loadRecharge()
                location.replace('/')
            })
        },
    },
}
</script>