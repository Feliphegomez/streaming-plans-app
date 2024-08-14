<template>
    <div class="appHeader bg-primary text-light">
        <div class="left">
            <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                <ion-icon name="menu-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            <img src="@/assets/img/logo.png" alt="logo" class="logo">
        </div>
        <div class="right">
            <!-- <a href="/notifications" class="headerButton">
                <ion-icon class="icon" name="notifications-outline"></ion-icon>
                <span class="badge badge-danger">4</span>
            </a> -->
            <a href="/me/settings" class="headerButton">
                <!-- <img src="@/assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged w32"> -->
                <ion-icon class="icon w32" name="person-circle-outline"></ion-icon>
                <!-- <span class="badge badge-danger">6</span> -->
            </a>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>  