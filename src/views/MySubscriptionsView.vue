<template>
    
    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Mis Suscripciones
        </div>
        <div class="right">
            <a href="/explore" class="headerButton">
                <ion-icon name="add-outline"></ion-icon>
            </a>
        </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">
        <div class="section mt-2">
            <!-- card block -->
            <div class="card-block mb-2" v-for="(record, record_i) in records" v-if="records.length > 0">
                <ItemSubscription :record="record" />
            </div>
            <div class="section mt-4" v-else>
                <div class="transactions">
                    <router-link to="/explore" class="item">
                        <div class="detail">
                            <div>
                                <strong>No tienes Suscripciones</strong>
                                <p>Compra una ya!</p>
                            </div>
                        </div>
                        <div class="right">
                            Explorar
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            records: [],
        };
    },
    mounted() {
        let self = this
        self.records = []
        this.$root.API('subscriptions', {}, (response) => {
            self.records = response
        })
    },
}
</script>