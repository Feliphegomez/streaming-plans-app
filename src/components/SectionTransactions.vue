<template>
    <div class="section mt-4" v-if="records.length > 0">
        <div class="section-heading">
            <h2 class="title">Transacciones</h2>
            <a href="/transactions" class="link">Ver todo</a>
        </div>
        <div class="transactions">
            <router-link class="item" tag="a" v-for="(record, record_i) in records" :to="urlI(record.id)">
                <div class="detail">
                    <div>
                        <strong>{{ record.title }}</strong>
                        <p>{{ record.type }}</p>
                    </div>
                </div>
                <div class="right">
                    <div :class="'price text-' + (record.type == 'Recarga' ? 'success' : 'danger')"> $ {{ record.amount }}</div>
                </div>
            </router-link>
            <!-- <a href="app-transaction-detail.html" class="item">
                <div class="detail">
                    <img src="@/assets/img/sample/brand/2.jpg" alt="img" class="image-block imaged w48">
                    <div>
                        <strong>Apple</strong>
                        <p>Appstore Purchase</p>
                    </div>
                </div>
                <div class="right">
                    <div class="price text-danger">- $ 29</div>
                </div>
            </a> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SectionTransactions',
  props: ['userid'],
  data() {
    return {
        records: [],
    };
  },
  mounted() {
      let self = this
      self.records = []
      
        this.$root.API('transactions', {}, (response) => {
            self.records = response
        })
  },
  methods: {
    urlI(id) {
        return '/transaction/' + btoa(this.userid + ':' + id)
    },
  },
}
</script>