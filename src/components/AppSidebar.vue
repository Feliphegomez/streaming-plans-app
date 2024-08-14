<template>
    <div class="appSidebar modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <!-- profile box -->
                    <div class="profileBox pt-2 pb-2">
                        <!-- <div class="image-wrapper">
                            <img src="@/assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged  w36">
                        </div> -->
                        <div class="in">
                            <strong>{{ $root.StateUser.username }}</strong>
                            <div class="text-muted">{{ parseInt($root.StateUser.id).toString().padStart(10, '0') }}</div>
                        </div>
                        <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <ion-icon name="close-outline"></ion-icon>
                        </a>
                    </div>
                    <!-- * profile box -->
                    <!-- balance -->
                    <div class="sidebar-balance">
                        <div class="listview-title">Saldo Actual</div>
                        <div class="in">
                            <h1 class="amount">$ {{ $root.StateUser.balance }}</h1>
                        </div>
                    </div>
                    <!-- * balance -->

                    <!-- action group -->
                    <div class="action-group">
                        <a href="/recharge" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <ion-icon name="add-outline"></ion-icon>
                                </div>
                                Recargar
                            </div>
                        </a>
                        <a href="/me/subscriptions" class="action-button">
                            <div class="in">
                                <div class="iconbox">
                                    <ion-icon name="card-outline"></ion-icon>
                                </div>
                                Mis suscripciones
                            </div>
                        </a>
                    </div>
                    <!-- * action group -->

                    <!-- menu -->
                    <div class="listview-title mt-1">Menu</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="/" class="item" data-bs-dismiss="modal">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="pie-chart-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Inicio
                                    <!-- <span class="badge badge-primary">10</span> -->
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/transactions" class="item">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="document-text-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Historico
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/explore" class="item">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="apps-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Explorar
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/me/subscriptions" class="item">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="card-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Mis Suscripciones
                                </div>
                            </a>
                        </li>
                    </ul>
                    <!-- * menu -->

                    <!-- others -->
                    <div class="listview-title mt-1">Others</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="/me/settings" class="item">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="settings-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Ajustes
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/support" class="item">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Soporte
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item" @click="logOut">
                                <div class="icon-box bg-primary">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    Cerrar sesion
                                </div>
                            </a>
                        </li>
                    </ul>

                    <!-- <div class="listview-title mt-1">Send Money</div>
                    <ul class="listview image-listview flush transparent no-line">
                        <li>
                            <a href="#" class="item">
                                <img src="@/assets/img/sample/avatar/avatar2.jpg" alt="image" class="image">
                                <div class="in">
                                    <div>Artem Sazonov</div>
                                </div>
                            </a>
                        </li>
                    </ul> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap'
export default {
  name: 'AppSidebar',
  mounted() {
    const Finapp = {
        RTL: {
            enable: false, // Enable or disable RTL Mode
        },
    }
    
    var appSidebar = document.getElementById("sidebarPanel")
    //-----------------------------------------------------------------------
    // RTL (Right to Left)
    if (Finapp.RTL.enable) {
        var pageHTML = document.querySelector("html")
        pageHTML.dir = "rtl"
        document.querySelector("body").classList.add("rtl-mode")
        if (appSidebar != null) {
            appSidebar.classList.remove("panelbox-left")
            appSidebar.classList.add("panelbox-right")
        }
        document.querySelectorAll(".carousel-full, .carousel-single, .carousel-multiple, .carousel-small, .carousel-slider").forEach(function (el) {
            el.setAttribute('data-splide', '{"direction":"rtl"}')
        })
    }
    //-----------------------------------------------------------------------
    const modal = document.getElementById("sidebarPanel");
    
    modal.addEventListener('hide.bs.modal', () => {
      console.log('hide')  
    })
    modal.addEventListener('hidden.bs.modal', () => {
      console.log('hidden')
    })
    modal.addEventListener('hidePrevented.bs.modal', () => {
      console.log('hidePrevented')  
    })
    modal.addEventListener('shown.bs.modal', () => {
        
    })
  },
  methods: {
    logOut() {
        const modal = document.getElementById("sidebarPanel");
        let self = this
        console.log('logOut')
        axios.post('logout')
        .then(response => {
            console.log('response', response)
            if (response.status == 200) {
                // modal.close()
                // self.$router.push('/login')
                location.replace('/')
            }
        })
        .catch(e => console.log(e))
    },
    closeSidebar() {
        const modal = document.getElementById("sidebarPanel");
    },
  },
}
</script>
