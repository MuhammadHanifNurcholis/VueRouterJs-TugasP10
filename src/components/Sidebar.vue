<template>
  <aside class="sidebar">
    <div class="logo">🩺 Sahabat Medis+</div>
    <nav>
      <RouterLink to="/" exact-active-class="active"
        ><i class="fas fa-home"></i> Beranda</RouterLink
      >
      <RouterLink to="/dokter" exact-active-class="active"
        ><i class="fas fa-user-md"></i> Dokter</RouterLink
      >
      <RouterLink to="/klinik" exact-active-class="active"
        ><i class="fas fa-clinic-medical"></i> Klinik</RouterLink
      >
      <RouterLink to="/pemesanan" exact-active-class="active"
        ><i class="fas fa-notes-medical"></i> Booking</RouterLink
      >
      <RouterLink to="/janjitemu" exact-active-class="active"
        ><i class="fas fa-calendar-check"></i> Janji temu</RouterLink
      >
      <RouterLink to="/konsultasi" exact-active-class="active"
        ><i class="fas fa-comment-medical"></i> Konsultasi</RouterLink
      >
      <RouterLink to="/rekammedis" exact-active-class="active"
        ><i class="fas fa-folder-open"></i> Rekam Medis</RouterLink
      >
      <RouterLink to="/profil" exact-active-class="active"
        ><i class="fas fa-user"></i> Profile</RouterLink
      >
      <RouterLink to="/artikel" exact-active-class="active"
        ><i class="fas fa-newspaper"></i> Artikel</RouterLink
      >
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: #1f2937;
  color: white;
  width: 250px;
  min-height: 100vh;
  padding: 20px;
  font-family: "Poppins", sans-serif;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
}

nav {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: #cbd5e1;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.2s;
  margin-bottom: 10px;
  font-size: 16px;
}

a i {
  margin-right: 8px;
}

a:hover {
  background-color: #374151;
  color: #fff;
}

.active {
  background-color: #2563eb;
  color: white;
}
</style>
