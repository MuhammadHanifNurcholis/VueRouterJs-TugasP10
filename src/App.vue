<template>
  <div class="app-layout">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #f3f4f6;
}

.app-layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 40px;
}
</style>
