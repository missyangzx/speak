let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
//登录接口
app.post("/login",(req,res) => {
	console.log(req.body);
	if(req.body.userName==""&& req.body.password==""){
		res.send({
			code: 1,
			msg: "用户名不能为空"
		})
	}else if(!/^1(3|4|5|7|8)\d{9}$/.test(req.body.userName) && !/^\w.{5,15}$/.test(req.body.password)){
		res.send({
			code: 2,
			msg: "输入的手机号格式不对"
		})
	}else{
		res.send({
			code: 0,
			msg: "登陆成功",
			userId: "10010"
		})
	}
})
app.listen(9090,() => {
	console.log('server is running');
});