<template>

    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Transacciones
        </div>
        <div class="right">
            <!-- <a href="/notifications" class="headerButton">
                <ion-icon class="icon" name="notifications-outline"></ion-icon>
                <span class="badge badge-danger">4</span>
            </a> -->
        </div>
    </div>
    <!-- * App Header -->
    <!-- App Capsule -->
    <div id="appCapsule">
        <!-- Transactions -->
        <div class="section mt-2">
            <!-- <div class="section-title">Today</div> -->
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
            </div>
        </div>
        <!-- * Transactions -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TransactionsView',
  data() {
    return {
        records: [],
    };
  },
  mounted() {
      let self = this
      self.records = []
      axios.get('transactions', {})
      .then((response) => {
          if (response.status == 200) {
            self.records = response.data
          }
      })
      .catch(e => console.error(e))
  },
  methods: {
    urlI(id) {
        return '/transaction/' + btoa(this.$root.StateUser.id + ':' + id)
    },
  },
}
</script>