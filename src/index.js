import ModuleComponent from "./module.vue";

export default {
  id: "custom",
  name: "Custom",
  icon: "face",
  routes: [
    {
      path: "/",
      component: ModuleComponent,
    },
  ],
};
