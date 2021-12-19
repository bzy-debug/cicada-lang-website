import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/articles",
    component: () => import("@/views/articles/article-list.vue"),
  },
  {
    path: "/articles/*",
    component: () => import("@/views/articles/article-root.vue"),
    props: (route) => ({
      link: route.params.pathMatch,
    }),
  },
]
