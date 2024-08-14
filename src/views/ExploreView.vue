<template>
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Explorar Productos y Servicios
        </div>
        <div class="right">
            <!-- <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#actionSheetForm">
                <ion-icon name="add-outline"></ion-icon>
            </a> -->
        </div>
    </div>
    <!-- <div class="extraHeader pe-0 ps-0">
        <ul class="nav nav-tabs lined" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#waiting" role="tab">
                    Plataformas
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#paid" role="tab">
                    Tecnologia
                </a>
            </li>
        </ul>
    </div> -->
    <div class="extraHeader pe-0 ps-0">
        <ul class="nav nav-tabs lined" role="tablist">
            <li class="nav-item" v-for="(record, i2) in records">
                <a v-bind:class="'nav-link' + (i2 == 0 ? '  active' : '')" data-bs-toggle="tab" v-bind:href="'#plataform-id-' + record.id" role="tab">
                    {{ record.name }}
                </a>
            </li>
        </ul>
    </div>
    <div class="modal fade action-sheet" id="actionSheetForm" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Bill</h5>
                </div>
                <div class="modal-body">
                    <div class="action-sheet-content">
                        <form>
                            <div class="form-group basic">
                                <label class="label">Bill ID</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1">#</span>
                                    <input type="text" class="form-control" placeholder="Enter an amount" value="41512">
                                </div>
                                <div class="input-info">Enter the ID of the bill you want to add.</div>
                            </div>
                            <div class="form-group basic">
                                <button type="button" class="btn btn-primary btn-block btn-lg"
                                    data-bs-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="appCapsule" class="extra-header-active full-height">
        <div class="section tab-content mt-2 mb-1">
            <div v-bind:class="'tab-pane fade' + (i == 0 ? ' show active' : '')" v-for="(plataform, i) in records" v-bind:id="'plataform-id-' + plataform.id" role="tabpanel">
                <div class="row">
                    <div class="col-6 mb-2" v-for="(plan, i_p) in plataform.plans">
                        <ItemPlan :record="plan" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemPlan from '@/components/ItemPlan.vue';
import axios from 'axios';
export default {
    name: 'ExploreView',
    data() {
        return {
            records: [],
        };
    },
    mounted() {
        console.log('ExploreView')
        this.loadFirst()
    },
    methods: {
        loadFirst() {
            let self = this
            self.loadPlans()
        },
        loadPlans() {
            let self = this
            this.$root.API('cat-explore', {}, (response) => {
                self.records = response
            })
        },
    },
}
</script>