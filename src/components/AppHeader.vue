<script>
export default {
  name: "AppHeader.vue",
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar-expand justify-content-center d-flex navbar-light bg-light shadow"
    >
      <div class="container">
        <div class="nav navbar-nav">
          <img
            class="logo"
            src="../assets/img/logo-header.jpg"
            alt=""
            srcset=""
          />
          <a class="nav-item nav-link fs-2" href="#">Yu-Gi-Oh API</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  width: 150px;
}
</style>
