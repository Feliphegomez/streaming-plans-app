<template>
    <div class="appHeader">
        <div class="left">
            <a href="/transactions" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Detalle de la transacción
        </div>
        <div class="right">
            <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#DialogBasic">
                <ion-icon name="trash-outline"></ion-icon>
            </a>
        </div>
    </div>

    <div class="modal fade dialogbox" id="DialogBasic" data-bs-backdrop="static" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete</h5>
                </div>
                <div class="modal-body">
                    Are you sure?
                </div>
                <div class="modal-footer">
                    <div class="btn-inline">
                        <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">CANCEL</a>
                        <a href="#" class="btn btn-text-primary" data-bs-dismiss="modal">DELETE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="appCapsule" class="full-height">
        <div class="section mt-2 mb-2">
            <div class="listed-detail mt-3">
                <div class="icon-wrapper">
                    <div class="iconbox">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
                <h3 class="text-center mt-2">{{ record.type }}</h3>
            </div>

            <ul class="listview flush transparent simple-listview no-space mt-3">
                <!-- <li>
                    <strong>Status</strong>
                    <span class="text-success">ss</span>
                </li>
                <li>
                    <strong>To</strong>
                    <span>Jordi Santiago</span>
                </li>
                <li>
                    <strong>Bank Name</strong>
                    <span>Envato Bank</span>
                </li> -->
                <li>
                    <strong> </strong>
                    <span>{{ record.title }}</span>
                </li>
                <li>
                    <strong>Description</strong>
                    <span>{{ record.description }}</span>
                </li>
                <li>
                    <strong>Fecha de Registro</strong>
                    <span>{{ record.created }}</span>
                </li>
                <li>
                    <strong>Cantidad</strong>
                    <h3 class="m-0">$ {{ record.amount }}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TransactionsView',
  data() {
    return {
        hash: '',
        id_query: '',
        record: {
            id: 0,
            user_id: 0,
            type: '',
            title: '',
            description: '',
            amount: 0,
        },
    };
  },
  mounted() {
    let self = this
    console.log('transaction Ini', this.$route.params.hash)
    this.hash = this.$route.params.hash
    let sol = atob(this.$route.params.hash).split(':')
    self.id_query = sol[1]
    axios.get('transaction-view/' + sol[1], {})
    .then((response) => {
        if (response.status == 200) {
            self.record = response.data
        }
    })
    .catch(e => console.error(e))
  },
  methods: {
  },
}
</script>