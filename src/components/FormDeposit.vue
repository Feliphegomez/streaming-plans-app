<template>
    <form @submit.prevent="submit">
        <div class="form-group basic">
            <div class="input-wrapper">
                <label class="label" for="account1">From</label>
                <select class="form-control custom-select" v-model="form.gateway" id="account1" required>
                    <option value="">Seleccione una opcion</option>
                    <option v-for="(record, i) in records" :value="record.id">{{ record.name }}</option>
                </select>
            </div>
        </div>

        <div class="form-group basic">
            <label class="label">Ingrese el monto</label>
            <div class="input-group mb-2">
                <span class="input-group-text" id="basic-addona1">$</span>
                <input type="number" step="1" class="form-control" placeholder="Cantidad" v-model="form.amount" min="1000" required>
            </div>
        </div>

        <div class="form-group basic">
            <!-- <button type="submit" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Recargar</button> -->
            <button type="submit" class="btn btn-primary btn-block btn-lg">Recargar</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormDeposit',
    data() {
        return {
            records: [],
            form: {
                gateway: '',
                amount: '',
            },
        };
    },
    mounted() {
        let self = this;
        console.log('Cargando gateways de pagos')
        this.$root.API('payment-gateways', {}, (response) => {
            self.records = response || [];
        })
    },
    methods: {
        submit() {
            let self = this
            console.log('submit', this.form)
            console.log('creando recarga')
            this.$root.UI('create-recharge', {
                amount: self.form.amount,
                gateway_id: self.form.gateway,
            }, (response) => {
                let newRouter = 'recharge/' + btoa(self.$root.StateUser.id + ':' + response)
                console.log('newRouter', newRouter)
                // self.$router.push(newRouter) Se debe solucionar el bg negro del sidebar
                location.replace(newRouter)
            })
        },
    },
}
</script>