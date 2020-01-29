import Vue from 'vue'
import VueRouter from 'vue-router'
import Apply from "../components/Apply.vue"
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import Address from "../components/Address.vue"
import Devide from "../components/child/Devide.vue"
import Index from "../components/child/Index.vue"
import My from "../components/child/My.vue"
import Store from "../components/child/Store.vue"
import Edit from "../components/Edit.vue"
import Search from "../components/Search.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/apply",
    meta: {
      title: "注册"
    },
    component: Apply
  },
  {
    path: "/search",
    meta: {
      title: "搜索"
    },
    component: Search
  },
  {
    path: "/edit",
    meta: {
      title: "编辑地址"
    },
    component: Edit
  },
  {
    path: "/address",
    meta: {
      title: "校园超市"
    },
    component: Address
  },
  {
    path: "/login",
    meta: {
      title: "登录"
    },
    component: Login
  },
  {
    path: "/home",

    component: Home,
    children: [
      {
        path: "/home/store",
        component: Store,
        meta: {
          title: "购物车"
        }
      },
      {
        path: "/home/my",
        component: My,
        meta: {
          title: "校园超市"
        }
      },
      {
        path: "/home/index",
        component: Index,
        meta: {
          title: "首页"
        }
      },
      {
        path: "/home/devide",
        component: Devide,
        meta: {
          title: "分类"
        }
      },
      {
        path: "/home",
        redirect: "/home/index"
      }
    ]
  },
  {
    redirect: "/login",
    path: "/"
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/notFound.vue')
  },
  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   let token = getCookie("token")
//   if (to.path == "/home/my" && token) {
//     next()
//   }
// })
export default router
