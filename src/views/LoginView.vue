<template>
    <div>
        <div class="appHeader no-border transparent position-absolute">
            <div class="left">
                <a href="#" class="headerButton goBack">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </a>
            </div>
            <div class="pageTitle"></div>
            <div class="right">
            </div>
        </div>
    
    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <h1>Iniciar Sesion</h1>
            <h4>Rellena el formulario para inciar sesion</h4>
        </div>
        <div class="section mb-5 p-2">

            <form @submit.prevent="submit">
                <div class="card">
                    <div class="card-body pb-1">
                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <!-- <label class="label" for="username">Usuario</label> -->
                                <input type="text" class="form-control" id="username" placeholder="Usuario" v-model="form.username">
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <!-- <label class="label" for="password1">Password</label> -->
                                <input type="password" class="form-control" id="password1" autocomplete="off"
                                    placeholder="tu contraseña / clave de acceso" v-model="form.password">
                                <i class="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="form-links mt-2">
                    <div>
                        <a href="/register">Crear cuenta</a>
                    </div>
                    <div><a href="app-forgot-password.html" class="text-muted">¿Has olvidado tu contraseña?</a></div>
                </div>

                <div class="form-button-group  transparent">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">Ingresar</button>
                </div>

            </form>
            <p v-if="showError" id="error">{{ messageError }}</p>
        </div>

    </div>
    <!-- * App Capsule -->

    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'LoginView',
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
      messageError: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
        this.showError = false
        this.messageError = null
        await this.LogIn(this.form);
        console.log('despues de registrar')
        this.showError = false
        // alert("Registro existoso, ahora puedes ingresar")
        this.$router.push("/");
      } catch (error) {
        console.log("error: ", error)
        this.showError = true
        this.messageError = error
      }
    },
  },
}
</script>