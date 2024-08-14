<template>
    <div class="section full mt-4">
        <div class="section-heading padding">
            <h2 class="title">Productos Desctacados</h2>
            <a href="/explore" class="link">Ver Todo</a>
        </div>
        <div class="carousel-multiple-fast-products splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="(record, i) in records">
                        <ItemPlan :record="record" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SectionProducts',
    data() {
        return {
            records: [],
        };
    },
    async mounted() {
        await this.loadRecords()
    },
    methods: {
        async loadRecords() {
            let self = this
            self.records = []
            return axios.get('featured-explore', {})
            .then(response => {
                if (response.status == 200) self.records = response.data
            })
            .catch(e => console.log(e))
            .finally(a => {
                this.loadCarousel()
            })
        },
        loadCarousel() {
            document.querySelectorAll('.carousel-multiple-fast-products').forEach(carousel => new Splide(carousel, {
                perPage: 4,
                rewind: true,
                type: "loop",
                gap: 16,
                padding: 16,
                arrows: false,
                pagination: false,
                breakpoints: {
                    768: {
                        perPage: 2
                    },
                    991: {
                        perPage: 3
                    }
                }
            }).mount());
        },
    },
}
</script>