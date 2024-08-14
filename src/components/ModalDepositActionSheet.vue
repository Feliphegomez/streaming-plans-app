<template>
    <div class="modal fade action-sheet" id="depositActionSheet" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Agregar Saldo</h5>
                </div>
                <div class="modal-body">
                    <div class="action-sheet-content">
                        <FormDeposit />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModalDepositActionSheet',
}
</script>