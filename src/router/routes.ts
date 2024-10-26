export const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: "/trains",
    name: "trains",
    component: () => import("@/pages/TrainsPage.vue"),
  },
  ,
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/pages/ProfilePage.vue"),
  },
  {
    path: "/booking/:trainId",
    name: "booking",
    component: () => import("@/pages/BookingPage.vue"),
  },
];
