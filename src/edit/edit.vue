<template>
    <div class="box">
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
                label="姓名"
                prop="age"
                :rules="[
                    { required: true, message: '姓名不能为空'},
                    { type: 'string', message: '姓名必须为汉字'}
                ]"
            >
                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="性别"
                prop="age"
            >
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </el-form-item>
            <el-form-item
                label="年龄"
                prop="age"
            >
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item
                label="生日"
                prop="age"
            >
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
            </el-form-item>
            <el-form-item
                label="地址"
                prop="age"
            >
                <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                numberValidateForm: {
                    age: ''
                },
                radio: '2',
                num: 20,
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                value1: '',
                value2: '',
                textarea: ''
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>
<style lang="less">

</style>
