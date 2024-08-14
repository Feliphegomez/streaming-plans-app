<template>
    <div class="section wallet-card-section pt-1">
        <div class="wallet-card" v-if="user">
            <div class="balance">
                <div class="left">
                    <span class="title">Tu Saldo</span>
                    <h1 class="total">$ {{ user.balance }}</h1>
                </div>
                <div class="right">
                    <a href="#" class="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                        <ion-icon name="add-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <ModalDepositActionSheet />
</template>

<script>
export default {
    name: 'SectionWalletCardSimple',
    computed: {
        user() {
            return this.$root.StateUser || null;
        },
        balance_dec() {
            if (this.user.balance && this.user.balance > 0) return parseFloat(this.user.balance/10**2);
            else return 0;
        },
    },
}
</script>