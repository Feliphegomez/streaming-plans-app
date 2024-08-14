<template>
    <div class="section">
        <div class="row mt-2">
            <template v-if="recargas > 0 || gastos > 0">
                <div class="col-6">
                    <div class="stat-box">
                        <div class="title">Recargas</div>
                        <div class="value text-success">$ {{ recargas }}</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="stat-box">
                        <div class="title">Gastado</div>
                        <div class="value text-danger">$ {{ gastos }}</div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12">
                    <div class="stat-box">
                        <div class="title">Recarga</div>
                        <div class="value text-danger">Recarga</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionStatsSimple',
    data() {
        return {
            recargas: 0,
            gastos: 0,
        };
    },
    mounted() {
        let self = this
        this.$root.API('stats', {}, (response) => {
            self.recargas = response.recharges, self.gastos = response.expenses
        })
    },
}
</script>