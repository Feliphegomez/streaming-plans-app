<template>
    <div class="section full mt-4">
        <div class="section-heading padding">
            <h2 class="title">Mis Suscripciones</h2>
            <a href="/me/subscriptions" class="link">Ver Todo</a>
        </div>
        <div class="carousel-single-subscriptions splide" v-if="records.length > 0">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="(record, record_i) in records">
                        <!-- card block -->
                        <div class="card-block bg-primary">
                            <ItemSubscription :record="record" />
                        </div>
                        <!-- * card block -->
                    </li>
                </ul>
            </div>
        </div>
        <div class="section mt-4" v-else>
            <div class="transactions">
                <a href="/explore" class="item">
                    <div class="detail">
                        <div>
                            <strong>No tienes Suscripciones</strong>
                            <p>Compra una ya!</p>
                        </div>
                    </div>
                    <div class="right">
                        Explorar
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ItemSubscription from './ItemSubscription.vue';
export default {
    name: 'SectionMySubscriptions',
    props: ['userid'],
    data() {
        return {
            records: [],
        };
    },
    mounted() {
        let self = this
        
        // this.$root.API('subscriptions', {}, (response) => {
        //     self.records = response
        //     setTimeout(() => {
        //         self.runCarr()
        //     }, 250)  
        
        axios.get('subscriptions', {})
        .then((response) => {
            console.log('response', response.data)
            if (response.status == 200) {
                self.records = response.data
            }
        })
        .catch(e => console.error(e))
        .finally(() => {
            self.runCarr()
        })
    },
    methods: {
        runCarr() {
            document.querySelectorAll('.carousel-single-subscriptions').forEach(carousel => new Splide(carousel, {
                perPage: 3,
                rewind: true,
                type: "loop",
                gap: 16,
                padding: 16,
                arrows: false,
                pagination: false,
                breakpoints: {
                    768: {
                        perPage: 1
                    },
                    991: {
                        perPage: 2
                    }
                }
            }).mount());
        },
    },
}
</script>