import { createRouter, createWebHistory } from "vue-router";

import Beranda from "../views/beranda.vue";
import Dokter from "../views/dokter.vue";
import JanjiTemu from "../views/janjitemu.vue";
import Pemesanan from "../views/pemesanan.vue";
import Klinik from "../views/klinik.vue";
import Konsultasi from "../views/konsultasi.vue";
import RekamMedis from '../views/rekammedis.vue';
import Profil from "../views/profil.vue";
import Artikel from "../views/artikel.vue";

const routes = [
  { path: "/", name: "beranda", component: Beranda },
  { path: "/dokter", name: "dokter", component: Dokter },
  { path: "/janjitemu", name: "janjitemu", component: JanjiTemu },
  { path: "/pemesanan", name: "pemesanan", component: Pemesanan },
  { path: "/klinik", name: "klinik", component: Klinik },
  { path: "/konsultasi", name: "konsultasi", component: Konsultasi },
  { path: "/rekammedis", name: "rekammedis", component: RekamMedis },
  { path: "/profil", name: "profil", component: Profil },
  { path: "/artikel", name: "artikel", component: Artikel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
