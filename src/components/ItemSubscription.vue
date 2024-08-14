<template>
    <div class="card-main">
        <div class="card-button dropdown">
            <button type="button" class="btn btn-link btn-icon" data-bs-toggle="dropdown">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
                <!-- <a class="dropdown-item" href="#">
                    <ion-icon name="pencil-outline"></ion-icon>Edit
                </a>
                <a class="dropdown-item" href="#">
                    <ion-icon name="close-outline"></ion-icon>Remove
                </a> -->
                <a class="dropdown-item" href="#">
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>Reportar problema
                </a>
            </div>
        </div>
        <div class="balance">
            <span class="label">Plataforma</span>
            <h1 class="title">{{ record.plataform.name }} - {{ record.plan.name }}</h1>
        </div>
        <div class="in">
            <div class="card-number"><span class="label">Usuario</span> {{ record.data.nick }}</div>
            <div class="bottom">
                <div class="card-expiry"><span class="label">Expira</span> {{ record.expire }}</div>
                <div class="card-ccv"><span class="label">CCV</span> {{ record.data.hash }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemSubscription',
    props: [
        'record'
    ],
}
</script>