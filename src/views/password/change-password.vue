<template>
    <section class="change-password">
        <phone-img :phoneNum="myTel"></phone-img>
        <section class="change-input">
            <password-input labelText="原密码：">
                <input slot="right-part"
                       type="password"
                       placeholder="请输入原密码"
                       v-model="oldPassword"
                       class="password-input-content" />
            </password-input>
            <password-input labelText="新密码：">
                <input slot="right-part"
                       type="password"
                       v-model="newPassword"
                       placeholder="请输入6～20位数字或字母"
                       class="password-input-content" />
            </password-input>
            <!-- <p class="forgetPasword">
                <span @click="clickForget">忘记密码?</span>
            </p> -->
            <ck-button class="change-password-bts" :disabled="!oldPassword || !newPassword || queryStatus"
                       @click="handleQuery">确定</ck-button>
        </section>
        <frame-view-sub v-if="findStatus"
                        v-model="findStatus"
                        :z="150"
                        title="找回登录密码">
            <find-password :userMebile="userMebile" @closePage="findStatus = false"></find-password>
        </frame-view-sub>
    </section>
</template>
<script>
import FindPassword from './find-password'
export default {
    props: {
        myTel: {
            type: String,
            default: ''
        }
    },
    components: {
        FindPassword
    },
    data() {
        return {
            oldPassword: '',
            newPassword: '',
            queryStatus: false,
            findStatus: false,
            userMebile:'',
        }
    },
    methods: {
        handleQuery() {
            let reg = /^[a-zA-Z0-9]{6,20}$/;
            if (!reg.test(this.newPassword)) {
                this.$toast('新密码格式不正确！');
                return false
            }
            this.$request('usersPasswordChange',{
                old_password:this.oldPassword,
                new_password:this.newPassword,
                business_type:5
            }).then(({data})=>{
                this.queryStatus = true;
                if(data.code === 0){
                    this.$toast('修改登录密码成功')
                    this.$emit('bankConfig')
                }else{
                    this.$toast(data.msg)
                }
            }).finally(()=>{
                this.queryStatus = false;
            })
        },
        clickForget(){
            this.findStatus = true;
            this.userMebile = this.myTel
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.change-password {
    min-height: 100%;
    background: #fff;
    .change-input {
        width: 625px;
        margin: 0 auto;
        .password-input-content {
            width: 100%;
            box-sizing: border-box;
            font-size: 34px;
            border: 0;
            display: block;
            line-height: 60px;
            height: 60px;
            padding-left: 35px;
        }
        .forgetPasword {
            margin: 0;
            margin: 16px 0 66px;
            @include right;
            span {
                display: block;
                color: #f05962;
                line-height: 40px;
                font-size: 24px;
            }
        }
        .change-password-bts{
            margin-top: 106px;
        }
    }
}
</style>
