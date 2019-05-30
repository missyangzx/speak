<template>
	<div class='login'>
	  <p class='title'>系统登录</p>
	  <p>{{msg}}</p>
	  <p class='ins'>
	    <input type='text' class='user' v-model='userName'>
	  </p>
	  <p class='ins'>
	    <input type='password' class='password' v-model='password'>
	  </p>
	  <p class='check'>
	    <input type='checkbox'  id='remenber' checked='checked'><label for='remenber'>记住密码</label>
	  </p>
	  <p class='tologin'>
	    <input type='button' value='登录' @click='login()'>
	  </p>
	</div>
</template>
<script>
	export default{
	  name: 'login',
	  data () {
	    return {
	      userName: '',
	      password: '',
	      msg: ""
	    }
	  },
	  methods:{
			//登录验证
			login(){
				if(this.userName==""&&this.password==""){
					this.msg="用户名或者密码不能为空";
				}else if(/^1(3|4|5|7|8)\d{9}$/.test(this.userName) && /^\w.{5,15}$/.test(this.password)){
					this.$http.post("/api/login",{userName: this.userName,password: this.password}).then(res => {
						console.log(res.data.msg);
						if(res.data.code==0){
							this.$router.push({
								path: "/app"
							})
						}
					})
				}else{
					this.msg="用户名不正确";
				}
			}
		}
	}
</script>
<style lang='stylus'>
	.login
	  width: 350px;
	  height: 265px;
	  margin: 85px auto;
	  padding: 40px 35px;
	  box-shadow: 0px 0px 30px 0px rgba(0,0,0,.3);
	  border-radius: 5px;
	  p
	    margin: 0;
	    width: 100%;
	  .title
	    text-align: center;
	    font-size: 16px;
	    font-weight: 700;
	    padding-bottom: 19px;
	  .ins
	    margin: 23px 0;
	    input
	      width: 348px;
	      height: 34px;
	      text-indent: 10px;
	      font-size: 12px;
	      border:1px solid #ccc;
	      border-radius: 5px;
	  .check
	    font-size: 12px;
	    margin-bottom: 35px;
	    label
	      vertical-align:top;
	  .tologin
	    input
	      width: 100%;
	      height: 38px;
	      color: #fff;
	      background: #20a0ff;
	      border:0;
	      border-radius: 5px;
</style>
