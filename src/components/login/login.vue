<template>
	<div class="all">
		<div class=" test">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.passwrod"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="subBtn">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			form:{
				name:'',
				passwrod:''
			}
		}
	},
  	mounted(){},
  	methods:{
		subBtn(){
			console.log(this.form.name)
			sessionStorage.setItem("name",this.form.name);
			this.$router.push({
            	name:"test",
            });
		}
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.test{
	width:400px;
	height: 200px; 
}
</style>
