import Vue from 'vue'
import Router from 'vue-router'
/**登录页 */
import Login from '@/components/login/login'
import Index from "@/components/business/index"
import Test from "@/components/business/Test"

Vue.use(Router);
const router = new Router({
	routes: [
		//登录
		{
			path: '/',
			name: 'login',
			component: Login
		},
		//测试
		{
			path: '/index',
			name: 'index',
			component: Index,
			children:[
				{
					path: '/index',
					name: 'test',
					component: Test,
				}
			]
		}
	]
})

router.beforeEach((to,from,next)=>{
	        if(to.path=="/"){
	             next();
	        }else{
	//             if(sessionStorage.username){
				if(sessionStorage.getItem('name')){
	                next()
	            }else{
	                next({path:"/"})
	            }
	        }
})
export default router