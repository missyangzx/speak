<template>
    <div class="warp">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-col :span="4" style="border-right:1px solid #38b2ff;">
                        <p class="box-p">VUEADMIN</p>
                    </el-col>
                    <el-col :span="20" style="border-right:1px solid #38b2ff;" class="space">
                        <i class="el-icon-s-fold icon"></i>
                        <el-col :span="3"  class="space1">
                           <span>张某某</span>
                           <img src="../../../static/img/singer.jpg" class="box-logo">
                        </el-col>
                    </el-col>
                </div>
            </el-col>     
        </el-row>
    </div>
</template>
<script>
	
</script>
<style scoped>
    .el-row {
	    &:last-child {
	      margin-bottom: 0;
	    }
	}
  	.bg-purple-dark {
    	background: #20a1ff;
  	}
  	.bg-purple {
    	background: #d3dce6;
  	}
  	.bg-purple-light {
    	background: #e5e9f2;
  	}
 	.grid-content {
    	min-height: 75px;
  	}
  	.row-bg {
   		padding: 10px 0;
    	background-color: #f9fafc;
  	}
  	.grid-content[data-v-00cd70ee]{
      	padding: 0px ;
  	}
  	.box-p{
      	color:white;
      	font-size:20px;
      	line-height: 75px;
      	padding-left:25px; 
  	}
  	.icon{
      	font-size:15px;
      	color:white;
      	line-height: 75px;
      	margin-left:27px; 
  	}
  	.space{
      	display: flex;
      	padding: 0px 10px 0px 10px;
      	justify-content: space-between;
  	}
  	.space1{
      	display: flex;
      	line-height: 75px;
      	color:white;
      	justify-content: space-between;
      	width: 10%;
  	}
  	.box-logo{
      	width:50px;
      	height:50px;
      	margin-top:12.5px; 
      	border-radius: 50%;
  	}
  	.flex{
      	display: flex;
      	height:500px;
      	background: red;
  	}
</style>
