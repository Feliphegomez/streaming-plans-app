<template>
    <div class="register">
        <div class="appHeader no-border transparent position-absolute">
            <div class="left">
                <!-- <a href="#" class="headerButton goBack">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </a> -->
            </div>
            <div class="pageTitle"></div>
            <div class="right">
                <a href="/login" class="headerButton">
                    ¿Ya tienes cuenta?
                </a>
            </div>
        </div>
        
        <div id="appCapsule">
            <div class="section mt-2 text-center">
                <h1>Regístrate ahora</h1>
                <h4>Crea una cuenta</h4>
            </div>
            <div class="section mb-5 p-2">
                <form @submit.prevent="submit">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group basic">
                                <div class="input-wrapper">
                                    <label class="label" for="email1">Correo electronico</label>
                                    <input type="email" class="form-control" id="email1" placeholder="tu correo" v-model="form.username" required />
                                    <i class="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                </div>
                            </div>
                            <div class="form-group basic">
                                <div class="input-wrapper">
                                    <label class="label" for="password1">Contraseña</label>
                                    <input type="password" class="form-control" id="password1" autocomplete="off" placeholder="tu contraseña / clave de acceso" v-model="form.password" required />
                                    <i class="clear-input">
                                        <ion-icon name="close-circle"></ion-icon>
                                    </i>
                                </div>
                            </div>

                            <div class="form-group basic">
                                <div class="input-wrapper">
                                    <label class="label" for="password2">Confirme la contraseña</label>
                                    <input type="password" class="form-control" id="password2" autocomplete="off" placeholder="Escriba de nuevo su contraseña" v-model="form.password2" />
                                    <i class="clear-input">
                                        <ion-icon name="close-circle"></ion-icon>
                                    </i>
                                </div>
                            </div>

                            <div class="custom-control custom-checkbox mt-2 mb-1">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="customCheckb1">
                                    <label class="form-check-label" for="customCheckb1">
                                        Al crear una cuenta se aceptan <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">terminos & condiciones</a>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="form-button-group transparent">
                        <button type="submit" class="btn btn-primary btn-block btn-lg">Crear cuenta</button>
                    </div>
                </form>
                <p v-if="showError" id="error">{{ messageError }}</p>
            </div>
        </div>
        <!-- * App Capsule -->

        <!-- Terms Modal -->
        <div class="modal fade modalbox" id="termsModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Términos y condiciones</h5>
                        <a href="#" data-bs-dismiss="modal">Cerrar</a>
                    </div>
                    <div class="modal-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum, urna eget finibus
                            fermentum, velit metus maximus erat, nec sodales elit justo vitae sapien. Sed fermentum
                            varius erat, et dictum lorem. Cras pulvinar vestibulum purus sed hendrerit. Praesent et
                            auctor dolor. Ut sed ultrices justo. Fusce tortor erat, scelerisque sit amet diam rhoncus,
                            cursus dictum lorem. Ut vitae arcu egestas, congue nulla at, gravida purus.
                        </p>
                        <p>
                            Donec in justo urna. Fusce pretium quam sed viverra blandit. Vivamus a facilisis lectus.
                            Nunc non aliquet nulla. Aenean arcu metus, dictum tincidunt lacinia quis, efficitur vitae
                            dui. Integer id nisi sit amet leo rutrum placerat in ac tortor. Duis sed fermentum mi, ut
                            vulputate ligula.
                        </p>
                        <p>
                            Vivamus eget sodales elit, cursus scelerisque leo. Suspendisse lorem leo, sollicitudin
                            egestas interdum sit amet, sollicitudin tristique ex. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos. Phasellus id ultricies eros. Praesent
                            vulputate interdum dapibus. Duis varius faucibus metus, eget sagittis purus consectetur in.
                            Praesent fringilla tristique sapien, et maximus tellus dapibus a. Quisque nec magna dapibus
                            sapien iaculis consectetur. Fusce in vehicula arcu. Aliquam erat volutpat. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Terms Modal -->
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
        password2: "",
      },
      showError: false,
      messageError: "",
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        this.showError = false
        this.messageError = null
        await this.Register(this.form);
        console.log('despues de registrar')
        this.showError = false
        alert("Registro existoso, ahora puedes ingresar")
        this.$router.push("/login");
      } catch (error) {
        console.log("error: ", error)
        this.showError = true
        this.messageError = error
      }
    },
  },
};
</script>
