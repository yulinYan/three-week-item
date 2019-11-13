<template>
    <div>
        <router-link to="/main/home" class="back">返回首页</router-link>
        <div class="top">
            <img src="../assets/images/login/milogo.png" alt="">
            <p>小米账号登录</p>
        </div>
        <div class="mid">
            <div class="input">
                <span>+86></span><input type="text" placeholder="手机号码">
            </div>
            <div class="input">
                <input type="text" placeholder="短信验证"><span id="get">获取验证码</span>
            </div>
            <div class="input inp_btn">
                <button >立即登录/注册</button>
            </div>
            <div class="input inp_btn second">
                <button >用户名密码登录</button>
            </div>
<div class="bottom">
    <img src="../assets/images/login/login.png" alt="">
</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }

</script>

<style  scoped>
    /*//scoped   表示样式只在当前组件生效  不会与其他样式产生冲突*/
.top{
    width: 100%;
    padding: 0.5rem 0 0.1rem;
    text-align: center;
}
.top img{
    width: 0.48rem;
    height: 0.48rem;
}
.top p{
    font-size: 0.18rem;
    margin-top: 0.1rem;
}

    .input{
        height: 0.4rem;
        line-height: 0.4rem;
        /*align-items: center;*/
        font-size: 0.16rem;
        border-bottom: 1px solid #d3d3d3;
        padding-top:0.15rem;
        width: 90%;
        margin: 0 auto;
        text-align: left;
    }
    .input input{
        border: none;
        font-size: 0.16rem;
        outline: none;
    }
    .input span{
        margin-right: 0.1rem;
    }
    #get{
        font-size: 0.14rem!important;
        color: #2ea5e5;
    }
    .input button{
        width: 100%;
        height: 0.44rem;
        line-height: 0.44rem;
        border-radius: 0.08rem;
        background-color: #ff6700;
        font-size: 0.2rem;
        color: #efefef;
    }
    .inp_btn{
        border: none!important;
        padding-bottom: 0.02rem;
        margin-top: 0.2rem;
    }
    .second button{
        background-color: #fff;
        color: black;
        border: 1px solid #d3d3d3;
    }
    .bottom{
        width: 100%;
        height:1.2rem;
        margin-top: 0.6rem;
    }
    .bottom img{
        width: 100%;
        height: 100%;
    }
    .back{
        float: right;
        margin-right: 0.2rem;
        font-size: 0.12rem;
        margin-top: 0.1rem;
    }
</style>