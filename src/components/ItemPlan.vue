<template>
    <div class="bill-box" v-if="record">
        <div class="img-wrapper">
            <!-- <img src="@/assets/img/sample/brand/1.jpg" alt="img" class="image-block imaged w48"> -->
        </div>
        <div class="price text-primary">{{  record.plataform.name }}</div>
        <div class="price">{{  record.name }}</div>
        <p>$ {{ record.price }}</p>
        <router-link v-bind:to="'plan/' + record.id" class="btn btn-primary btn-block btn-sm">Comprar Ahora</router-link>
    </div>
</template>

<script>
export default {
    name: 'ItemPlan',
    props: [
        'record',
    ],
}
</script>