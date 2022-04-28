import Home from "../pages/home";
import Login from "../pages/手动配置router";
import notMatch from "../pages/notMatch";
import Profile, { one, three, two } from "../pages/router的嵌套";
import Redirect from "../pages/Redirect";
import search from "../pages/search";
import Link_to_object from "../pages/Link_to_object";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/redirt",
    component: Redirect,
  },
  {
    path: "/search",
    component: search,
  },
  {
    path: "/link_to_object",
    component: Link_to_object,
  },
  {
    path: "/profile",
    component: Profile,
    routes: [
      { path: "/profile/listone", component: one },
      { path: "/profile/listtwo", component: two },
      { path: "/profile/listthree", component: three },
    ],
  },
  {
    component: notMatch,
  },
];
export default routes;
