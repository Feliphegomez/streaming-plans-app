<template>
    <div class="loaderBox" id="loader">
        <img src="@/assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div>
</template>

<script>
export default {
  name: 'LoaderBox',
  props: {
    msg: String
  },
  mounted() {
    var loader =  document.getElementById('loader');
    setTimeout(() => {
        loader.setAttribute("style", "pointer-events: none; opacity: 0; transition: 0.2s ease-in-out;");
        setTimeout(() => {
            loader.setAttribute("style", "display: none;")
        }, 1000);
    }, 450);
  },
}
</script>
