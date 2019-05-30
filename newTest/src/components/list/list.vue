<template>
	<el-row id="el-row">
		<div class="content">
			<div class="bre">
				<div class="breLeft">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">列表</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="breRight">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">导航一</el-breadcrumb-item>
						  <el-breadcrumb-item><a href="/">列表</a></el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			<div class="query">
				<el-row>
					<el-col :span="24">
						<el-input v-model="input" placeholder="姓名"></el-input>
					</el-col>
				</el-row>
				<el-button type="primary">查询</el-button>
				<!-- <slot name="newly"></slot> -->
			</div>
			<el-table :data="tableData" style="width: 100%">
				<!--<el-table-column type="selection" width="55"></el-table-column>-->
				<!-- <slot name="checke"></slot> -->
				<el-table-column type="index" width="70"></el-table-column>
				<el-table-column prop="name" label="姓名" width="100" sortable></el-table-column>
				<el-table-column prop="date" label="性别" width="100" sortable></el-table-column>
				<el-table-column prop="address" label="年龄" width="100" sortable></el-table-column>
				<el-table-column prop="address" label="生日" width="100" sortable></el-table-column>
				<el-table-column prop="address" label="地址" width="180" sortable></el-table-column>
				<!-- <slot name="operation"></slot> -->
			</el-table>
		</div>
	</el-row>
</template>

<script>
	import Edit from '@/components/edit/edit'
    export default {
		components:{
			Edit
		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		}
    }
</script>

<style lang='stylus'>
#el-row
	position: absolute
	top: 100px
	left: 225px
	width: 100%
	.content
		.bre
			display: flex
			justify-content: space-between
			margin-bottom: 16px
			.breLeft
				.el-breadcrumb__inner
					font-weight: 700
		.query
			display: flex
			padding: 8px
			background: #f2f2f2
			margin-bottom: 10px
			.el-button
				margin-left: 10px
		.el-table
			border: 1px solid #ccc
			tr
				background: none
			.el-table__header-wrapper
				background-color: #eef1f6 
			.el-table__fixed-right
				.el-table__fixed-body-wrapper
					.el-button
						border-radius: 5px;
</style>
