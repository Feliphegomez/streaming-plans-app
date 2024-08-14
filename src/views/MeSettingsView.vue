<template>
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Ajustes
        </div>
        <div class="right">
            <!-- <a href="/notifications" class="headerButton">
                <ion-icon class="icon" name="notifications-outline"></ion-icon>
                <span class="badge badge-danger">4</span>
            </a> -->
        </div>
    </div>

    <div id="appCapsule">
        <!-- <div class="section mt-3 text-center">
            <div class="avatar-section">
                <a href="#">
                    <img src="@/assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w100 rounded">
                    <span class="button">
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                </a>
            </div>
        </div> -->

        <div class="listview-title mt-1">Apariencia</div>
        <ul class="listview image-listview text inset no-line">
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Modo oscuro
                        </div>
                        <div class="form-check form-switch  ms-2">
                            <input class="form-check-input dark-mode-switch" type="checkbox" id="darkmodeSwitch">
                            <label class="form-check-label" for="darkmodeSwitch"></label>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="listview-title mt-1">Notificaciones</div>
        <ul class="listview image-listview text inset">
            <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Alerta de activacion
                            <div class="text-muted">
                                Enviar notificación cuando se active una membresia
                            </div>
                        </div>
                        <div class="form-check form-switch  ms-2">
                            <input class="form-check-input" type="checkbox" id="SwitchCheckDefault1">
                            <label class="form-check-label" for="SwitchCheckDefault1"></label>
                        </div>
                    </div>
                </div>
            </li>
            <!-- <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Sonido de Notificacion</div>
                        <span class="text-primary">Beep</span>
                    </div>
                </a>
            </li> -->
            <li>
                <a href="#" class="item" @click="notificationPushTest">
                    <div class="in">
                        <div>Prueba de Notificacion</div>
                        <span class="text-primary">Clic</span>
                    </div>
                </a>
            </li>
        </ul>

        <div class="listview-title mt-1">Configuracion de perfil</div>
        <div class="section mt-2">
            <!-- <div class="section-title">Basic</div> -->
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="userid1">Usuario</label>
                                <input type="text" class="form-control" id="userid1" placeholder="Enter an Username" v-model="form.username">
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- <ul class="listview image-listview text inset">
            <li>
                <a href="/me/account" class="item">
                    <div class="in">
                        <div>Cambiar datos de acceso</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Actualizar correo electronico</div>
                    </div>
                </a>
            </li>
        </ul> -->

        <div class="listview-title mt-1">Seguridad</div>
        <ul class="listview image-listview text mb-2 inset">
            <li>
                <a href="/me/change-password" class="item">
                    <div class="in">
                        <div>Actualizar contraseña</div>
                    </div>
                </a>
            </li>
            <!-- <li>
                <div class="item">
                    <div class="in">
                        <div>
                            Verificacion en 2 pasos (Doble factor)
                        </div>
                        <div class="form-check form-switch ms-2">
                            <input class="form-check-input" type="checkbox" id="SwitchCheckDefault3" checked />
                            <label class="form-check-label" for="SwitchCheckDefault3"></label>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Cerrar sesion en todos los dispositivos</div>
                    </div>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            form: {
                username: this.$root.StateUser.username
            }
        };
    },
    mounted() {
        let self = this
        var pageBody = document.querySelector("body");
        var switchDarkMode = document.querySelectorAll(".dark-mode-switch");
        // Dark Mode
        var switchDarkMode = document.querySelectorAll(".dark-mode-switch");

        function switchDarkModeCheck(value) {
            switchDarkMode.forEach(function (el) {
                el.checked = value
            })
        }
        switchDarkMode.forEach(function (el) {
            el.addEventListener("click", function () {
                var darkmodeCheck = localStorage.getItem("FinappDarkmode");
                var bodyCheck = pageBody.classList.contains('dark-mode');
                if (darkmodeCheck === 1 || darkmodeCheck === "1" || bodyCheck) {
                    pageBody.classList.remove("dark-mode");
                    localStorage.setItem("FinappDarkmode", "0");
                    switchDarkModeCheck(false);
                }
                else {
                    pageBody.classList.add("dark-mode")
                    switchDarkModeCheck(true);
                    localStorage.setItem("FinappDarkmode", "1");
                }
            })
        })
    },
    methods: {
        submit() {
            let self = this
            if (this.form.username !== this.$root.StateUser.username) {
                console.log('submit...', this.form.username, this.$root.StateUser.username)
                if (confirm("Desea cambiar el usuario de acceso por " + this.form.username)) {
                    self.$root.UI('change-user', {
                        "username": self.form.username,
                    }, (response) => {
                        console.log('response', response)
                        location.reload()
                    })
                }
            }
        },
        notificationPushTest() {
            let self = this
            if (!("Notification" in window)) {
                // Check if the browser supports notifications
                alert("This browser does not support desktop notification");
            } else if (Notification.permission === "granted") {
                // Check whether notification permissions have already been granted;
                // if so, create a notification
                const notification = new Notification("Hi there!");
                // …
            } else if (Notification.permission !== "denied") {
                // We need to ask the user for permission
                Notification.requestPermission().then((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    const notification = new Notification("Hi there!");
                    // …
                }
                });
            }

            // At last, if the user has denied notifications, and you
            // want to be respectful there is no need to bother them anymore.
        },
    },
}
</script>