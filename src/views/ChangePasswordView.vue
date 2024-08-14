<template>
    
    <!-- App Header -->
    <div class="appHeader no-border transparent position-absolute">
        <div class="left">
            <a href="/me/settings" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle"></div>
        <div class="right">
        </div>
    </div>
    <!-- * App Header -->

    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <h1>Cambio de contraseña</h1>
            <h4>Ingrese su contraseña actual y su nueva contraseña</h4>
        </div>
        <div class="section mb-5 p-2">
            <form @submit.prevent="submit">
                <div class="card">
                    <div class="card-body pb-1">

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="email1">Contraseña actual</label>
                                <input type="password" class="form-control" placeholder="Contraseña actual" v-model="form.password" required>
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="email1">Contraseña nueva</label>
                                <input type="password" class="form-control" placeholder="Contraseña nueva" v-model="form.new_password" required>
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="email1">Confirme su Contraseña Nueva</label>
                                <input type="password" class="form-control" placeholder="Confirme contraseña" v-model="form.confirm_password" required>
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="form-button-group transparent">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">Acualizar contraseña</button>
                </div>

            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ChangePasswordView',
    data() {
        return {
            form: {
                password: '',
                new_password: '',
                confirm_password: '',
            },
        };
    },
    methods: {
        submit() {
            let self = this
            console.log('submit', this.form)
            if (this.form.new_password !== this.form.confirm_password) {
                alert('Las contraseñas no cohinciden')
                return;
            }
            axios.post('/password', {
                username: self.$root.StateUser.username,
                password: self.form.password,
                newPassword: self.form.new_password,
            })
            .then(response => {
                console.log('response', response)
                if (response.status == 200) {
                    location.replace('/')
                }
            })
            .catch(e => {
                console.log('error', e)
                let message = e.response.data.message ?? '';
                if (message) alert(message);
            })
        },
    },
}
</script>