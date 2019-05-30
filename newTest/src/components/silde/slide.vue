<template>
	<el-aside width="225px" style="background-color: rgba(0,0,0,.5)" height="500px">
	    <el-menu :default-openeds="['1', '3']" style="background-color: rgb(238, 241, 246)">
	      	<el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>导航一</template>
		        <el-menu-item-group>
		          	<el-menu-item index="1-3" v-for="item,index in slides" :key="item.name">
		          		<router-link :to='item.to'>{{item.name}}</router-link>
		          	</el-menu-item>
		        </el-menu-item-group>
		    </el-submenu>
	      	<el-submenu index="2">
		        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
		        <el-menu-item-group>
			        <el-menu-item index="1-1">选项1</el-menu-item>
	          		<el-menu-item index="1-2">选项2</el-menu-item>
          		</el-menu-item-group>
		    </el-submenu>
	      	<el-submenu index="3">
		        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
		    </el-submenu>
		    <el-submenu index="4">
		        <template slot="title"><i class="el-icon-s-data"></i>Charts</template>
		    </el-submenu>
	    </el-menu>
  	</el-aside>
</template>

<script>
	export default {
		data(){
			return {
				slides: [
					{
						name: 'Table',
						to: 'table'
					},
					{
						name: 'Form',
						to: 'form'
					},
					{
						name: '列表',
						to: 'list'
					}
				]
			}
		}
	}
</script>

<style lang="stylus">
	
</style>