<template>

    <!-- App Header -->
    <div class="appHeader no-border">
        <div class="left">
            <a href="/" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Soporte
        </div>
        <div class="right">
            <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#DialogBasic">Ayuda</a>
        </div>
    </div>
    <!-- * App Header -->

    <!-- Dialog Basic -->
    <div class="modal fade dialogbox" id="DialogBasic" data-bs-backdrop="static" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Escanea el código QR</h5>
                </div>
                <div class="modal-body">
                    Puede contactar a un asesor con el código QR.
                </div>
                <div class="modal-footer">
                    <div class="btn-inline">
                        <a href="#" class="btn btn-text-primary" data-bs-dismiss="modal">OK</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- * Dialog Basic -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section">
            <div class="splash-page mt-5 mb-5">
                <div class="mb-3">
                    <img src="@/assets/img/sample/qr.png" alt="QR Code" class="imaged square w140">
                </div>
                <h2 class="mb-2">Escanea el código QR</h2>
                <p>
                    Puede contactar a un asesor con el código QR.
                </p>
            </div>
        </div>

        <!-- <div class="fixed-bar">
            <div class="row">
                <div class="col-12">
                    <a href="app-pages.html" class="btn btn-lg btn-outline-secondary btn-block">Go Back</a>
                </div>
            </div>
        </div> -->

    </div>
    <!-- * App Capsule -->
</template>