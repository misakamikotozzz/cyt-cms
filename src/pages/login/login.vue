<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <h3 class="title">流式仪器管理系统</h3>
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span>
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password"></svg-icon>
                </span>
                <el-input name="password" :type="pwdType" @keyup.enter.native="login" v-model="loginForm.password" autoComplete="on"
                placeholder="password"></el-input>
                <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="login">
                Sign in
                </el-button>
            </el-form-item>
        </el-form>
        </div>
        <!-- <div class="logo"></div>
        <div class="content">
            <div class="content-inner">
                <div class="login-wrap">
                    <div class="login-come">
                        <div class="login-title">优利特</div>
                        <div class="login-subtitle">室间质评网站</div>
                    </div>
                    <div class="login-form-wrapper">
                        <div class="login-logo text-center">
                            <div class="q-img q-img--menu" role="img" style="width: 128px;">
                                <div style="padding-bottom: 32%;"></div>
                                <div class="q-img__container absolute-full">
                                    <img class="q-img__image q-img__image--with-transition q-img__image--loaded" width="0"
                                        loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false"
                                        src="../../assets/image/logo/urit_logo.svg"
                                        style="object-fit: cover; object-position: 50% 50%;">
                                </div>
                                <div class="q-img__content absolute-full q-anchor--skip"></div>
                            </div>
                        </div>
                        <div class="login-form-error-msg"></div>
                        <form class="q-form">
                            <div class="">
                                <form class="q-form q-gutter-md">
                                    <label
                                        class="q-field row no-wrap items-start q-field--outlined q-input q-field--float q-field--dense q-field--with-bottom"
                                        for="f_a8bcffe8-3dae-4cf5-9275-66416d09800e">
                                        <div class="q-field__inner relative-position col self-stretch">
                                            <div class="q-field__control relative-position row no-wrap" tabindex="-1">
                                                <div
                                                    class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                                                    <input class="q-field__native q-placeholder" tabindex="0" placeholder="用户名"
                                                        id="f_a8bcffe8-3dae-4cf5-9275-66416d09800e" type="text">
                                                </div>
                                            </div>
                                            <div class="q-field__bottom row items-start q-field__bottom--animated">
                                                <div class="q-field__messages col"></div>
                                            </div>
                                        </div>
                                    </label>
                                    <label
                                        class="q-field row no-wrap items-start q-field--outlined q-input q-field--float q-field--dense q-field--with-bottom"
                                        for="f_41bf9b51-7ea1-4b56-89bd-8a56b5f8a106">
                                        <div class="q-field__inner relative-position col self-stretch">
                                            <div class="q-field__control relative-position row no-wrap" tabindex="-1">
                                                <div
                                                    class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                                                    <input class="q-field__native q-placeholder" tabindex="0" placeholder="密码"
                                                        id="f_41bf9b51-7ea1-4b56-89bd-8a56b5f8a106" type="password">
                                                </div>
                                                <div class="q-field__append q-field__marginal row no-wrap items-center">
                                                    <i class="q-icon notranslate material-icons cursor-pointer"
                                                        aria-hidden="true" role="presentation"
                                                        >visibility_off</i>
                                                </div>
                                            </div>
                                            <div class="q-field__bottom row items-start q-field__bottom--animated">
                                                <div class="q-field__messages col"></div>
                                            </div>
                                        </div>
                                    </label>
                                    <div class="q-checkbox cursor-pointer no-outline row inline no-wrap items-center q-ma-none q-ml-sm"
                                        tabindex="0" role="checkbox" aria-label="记住密码" aria-checked="false">
                                        <div
                                            class="q-checkbox__inner relative-position non-selectable q-checkbox__inner--falsy">
                                            <input class="hidden q-checkbox__native absolute q-ma-none q-pa-none"
                                                type="checkbox">
                                            <div class="q-checkbox__bg absolute">
                                                <svg class="q-checkbox__svg fit absolute-full" viewBox="0 0 24 24"
                                                    aria-hidden="true">
                                                    <path class="q-checkbox__truthy" fill="none"
                                                        d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                                    <path class="q-checkbox__indet" d="M4,14H20V10H4"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span class="no-outline" tabindex="-1"></span>
                                        <div class="q-checkbox__label q-anchor--skip">记住密码</div>
                                    </div>
                                    <div>
                                        <button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-px-lg full-width"
                                            tabindex="0" type="button">
                                            <span class="q-focus-helper"></span>
                                            <span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <span class="block">登录</span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
            preserveAspectRatio="none" shape-rendering="auto" data-v-3770ee36="">
            <defs data-v-3770ee36="">
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    data-v-3770ee36=""></path>
            </defs>
            <g class="parallax" data-v-3770ee36="">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.2)" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.1)" data-v-3770ee36=""></use>
            </g>
        </svg> -->

        <!-- <div class="content" data-v-3770ee36="">
            <div class="content-inner" data-v-3770ee36="">
                <div class="login-wrap" data-v-3770ee36="">
                    <div class="login-come" data-v-3770ee36="">
                        <div class="login-title" data-v-3770ee36="">优利特</div>
                        <div class="login-subtitle" data-v-3770ee36="">室间质评网站</div>
                    </div>
                    <div class="login-form-wrapper" data-v-3770ee36="">
                        <div class="login-logo text-center" data-v-3770ee36="">
                            <div class="q-img q-img--menu" role="img" data-v-3770ee36="" style="width: 128px;">
                                <div style="padding-bottom: 32%;"></div>
                                <div class="q-img__container absolute-full">
                                    <img class="q-img__image q-img__image--with-transition q-img__image--loaded"
                                        width="0" loading="lazy" fetchpriority="auto" aria-hidden="true"
                                        draggable="false" src="../../assets/image/logo/urit_logo.svg"
                                        style="object-fit: cover; object-position: 50% 50%;">
                                </div>
                                <div class="q-img__content absolute-full q-anchor--skip"></div>
                            </div>
                        </div>
                        <div class="login-form-error-msg" data-v-3770ee36=""></div>
                        <form class="q-form" data-v-3770ee36="">
                            <div class="" data-v-3770ee36="">
                                <form class="q-form q-gutter-md" data-v-3770ee36="">
                                    <label
                                        class="q-field row no-wrap items-start q-field--outlined q-input q-field--float q-field--dense q-field--with-bottom"
                                        for="f_a8bcffe8-3dae-4cf5-9275-66416d09800e" data-v-3770ee36="">
                                        <div class="q-field__inner relative-position col self-stretch">
                                            <div class="q-field__control relative-position row no-wrap" tabindex="-1">
                                                <div
                                                    class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                                                    <input class="q-field__native q-placeholder" tabindex="0"
                                                        placeholder="用户名" id="f_a8bcffe8-3dae-4cf5-9275-66416d09800e"
                                                        type="text">
                                                </div>
                                            </div>
                                            <div class="q-field__bottom row items-start q-field__bottom--animated">
                                                <div class="q-field__messages col"></div>
                                            </div>
                                        </div>
                                    </label>
                                    <label
                                        class="q-field row no-wrap items-start q-field--outlined q-input q-field--float q-field--dense q-field--with-bottom"
                                        for="f_41bf9b51-7ea1-4b56-89bd-8a56b5f8a106" data-v-3770ee36="">
                                        <div class="q-field__inner relative-position col self-stretch">
                                            <div class="q-field__control relative-position row no-wrap" tabindex="-1">
                                                <div
                                                    class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                                                    <input class="q-field__native q-placeholder" tabindex="0"
                                                        placeholder="密码" id="f_41bf9b51-7ea1-4b56-89bd-8a56b5f8a106"
                                                        type="password">
                                                </div>
                                                <div class="q-field__append q-field__marginal row no-wrap items-center">
                                                    <i class="q-icon notranslate material-icons cursor-pointer"
                                                        aria-hidden="true" role="presentation"
                                                        data-v-3770ee36="">visibility_off</i>
                                                </div>
                                            </div>
                                            <div class="q-field__bottom row items-start q-field__bottom--animated">
                                                <div class="q-field__messages col"></div>
                                            </div>
                                        </div>
                                    </label>
                                    <div class="q-checkbox cursor-pointer no-outline row inline no-wrap items-center q-ma-none q-ml-sm"
                                        tabindex="0" role="checkbox" aria-label="记住密码" aria-checked="false"
                                        data-v-3770ee36="">
                                        <div
                                            class="q-checkbox__inner relative-position non-selectable q-checkbox__inner--falsy">
                                            <input class="hidden q-checkbox__native absolute q-ma-none q-pa-none"
                                                type="checkbox">
                                            <div class="q-checkbox__bg absolute">
                                                <svg class="q-checkbox__svg fit absolute-full" viewBox="0 0 24 24"
                                                    aria-hidden="true">
                                                    <path class="q-checkbox__truthy" fill="none"
                                                        d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                                    <path class="q-checkbox__indet" d="M4,14H20V10H4"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span class="no-outline" tabindex="-1"></span>
                                        <div class="q-checkbox__label q-anchor--skip">记住密码</div>
                                    </div>
                                    <div data-v-3770ee36="">
                                        <button
                                            class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-px-lg full-width"
                                            tabindex="0" type="button" data-v-3770ee36="">
                                            <span class="q-focus-helper"></span>
                                            <span
                                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                                                <span class="block">登录</span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-v-3770ee36="">
            <defs data-v-3770ee36="">
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    data-v-3770ee36=""></path>
            </defs>
            <g class="parallax" data-v-3770ee36="">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.2)" data-v-3770ee36=""></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.1)" data-v-3770ee36=""></use>
            </g>
        </svg>
    </div> -->
</template>

<script>
import { login } from '@/api/permission'
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('请输入正确的用户名'))
            } else {
                callback()
            }
        }
        const validatePass = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('密码不能小于5位'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validateUsername
                    }
                ],
                password: [
                    { required: true, trigger: 'blur', validator: validatePass }
                ]
            },
            loading: false,
            pwdType: 'password'
        }
    },
    methods: {
        showPwd() {
            if (this.pwdType === 'password') {
                this.pwdType = ''
            } else {
                this.pwdType = 'password'
            }
        },
        async login() {
            try {
                let data = await login(this.loginForm)
                let token = data.token
                this.$store.commit('LOGIN_IN', token)
                this.$router.replace('/')
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<!-- <style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 90%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;

            &:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style> -->

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d65ad;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;

    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;

        &_login {
            font-size: 20px;
        }
    }

    .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }

    .fontcontainer {
        color: #889aa4;
        padding-left: 10px;
    }
}

.vue-puzzle-vcode {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #0000004d;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s
}

.vue-puzzle-vcode.show_ {
    opacity: 1;
    pointer-events: auto
}

.vue-auth-box_ {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #fff;
    user-select: none;
    border-radius: 3px;
    box-shadow: 0 1px 3px #0000004d
}

.vue-auth-box_ .auth-body_ {
    position: relative;
    overflow: hidden;
    border-radius: 3px
}

.vue-auth-box_ .auth-body_ .loading-box_ {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000c;
    z-index: 20;
    opacity: 1;
    transition: opacity .1s;
    display: flex;
    align-items: center;
    justify-content: center
}

.vue-auth-box_ .auth-body_ .loading-box_.hide_ {
    opacity: 0;
    pointer-events: none
}

.vue-auth-box_ .auth-body_ .loading-box_.hide_ .loading-gif_ span {
    animation-play-state: paused
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ {
    flex: none;
    height: 5px;
    line-height: 0
}

@keyframes load {
    0% {
        opacity: 1;
        transform: scale(1.3)
    }

    to {
        opacity: .2;
        transform: scale(.3)
    }
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span {
    display: inline-block;
    width: 5px;
    height: 100%;
    margin-left: 2px;
    border-radius: 50%;
    background-color: #888;
    animation: load 1.04s ease infinite
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(1) {
    margin-left: 0
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(2) {
    animation-delay: .13s
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(3) {
    animation-delay: .26s
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(4) {
    animation-delay: .39s
}

.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(5) {
    animation-delay: .52s
}

.vue-auth-box_ .auth-body_ .info-box_ {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    font-size: 13px;
    background-color: #83ce3f;
    opacity: 0;
    transform: translateY(24px);
    transition: all .2s;
    color: #fff;
    z-index: 10
}

.vue-auth-box_ .auth-body_ .info-box_.show {
    opacity: .95;
    transform: translateY(0)
}

.vue-auth-box_ .auth-body_ .info-box_.fail {
    background-color: #ce594b
}

.vue-auth-box_ .auth-body_ .auth-canvas2_ {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    z-index: 2
}

.vue-auth-box_ .auth-body_ .auth-canvas3_ {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .6s;
    z-index: 3
}

.vue-auth-box_ .auth-body_ .auth-canvas3_.show {
    opacity: 1
}

.vue-auth-box_ .auth-body_ .flash_ {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #ffffff1a;
    z-index: 3
}

.vue-auth-box_ .auth-body_ .flash_.show {
    transition: transform .6s
}

.vue-auth-box_ .auth-body_ .reset_ {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 35px;
    height: auto;
    z-index: 12;
    cursor: pointer;
    transition: transform .2s;
    transform: rotate(0)
}

.vue-auth-box_ .auth-body_ .reset_:hover {
    transform: rotate(-90deg)
}

.vue-auth-box_ .auth-control_ .range-box {
    position: relative;
    width: 100%;
    background-color: #eef1f8;
    margin-top: 20px;
    border-radius: 3px;
    box-shadow: 0 0 8px #f0f0f099 inset
}

.vue-auth-box_ .auth-control_ .range-box .range-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #b7bcd1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    width: 100%
}

.vue-auth-box_ .auth-control_ .range-box .range-slider {
    position: absolute;
    height: 100%;
    width: 50px;
    background-color: #6aa0ffcc;
    border-radius: 3px
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 50px;
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 4px #ccc;
    cursor: pointer
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn>div {
    width: 0;
    height: 40%;
    transition: all .2s;
    border: solid 1px #6aa0ff
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn>div:nth-child(2) {
    margin: 0 4px
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:first-child,
.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:first-child {
    border: solid 4px transparent;
    height: 0;
    border-right-color: #6aa0ff
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:nth-child(2),
.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:nth-child(2) {
    border-width: 3px;
    height: 0;
    border-radius: 3px;
    margin: 0 6px;
    border-right-color: #6aa0ff
}

.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover>div:nth-child(3),
.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown>div:nth-child(3) {
    border: solid 4px transparent;
    height: 0;
    border-left-color: #6aa0ff
}

.vue-puzzle-overflow {
    overflow: hidden !important
}

.login-container[data-v-3770ee36] {
    display: flex;
    height: 100vh;
    background-color: #0067ac
}

.login-container .logo[data-v-3770ee36] {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center
}

.login-container .content[data-v-3770ee36] {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px
}

.login-container .login-wrap[data-v-3770ee36] {
    background-color: #fff;
    border-radius: 10px;
    width: 640px;
    box-shadow: 0 0 16px #00000042;
    display: flex
}

.login-container .login-come[data-v-3770ee36] {
    display: inline-block;
    background-color: #0067ac;
    width: 320px;
    align-items: center;
    justify-content: center;
    text-align: center
}

.login-container .login-title[data-v-3770ee36] {
    margin-top: 100px;
    color: #fff;
    font-weight: 500;
    font-size: 50px;
    line-height: 32px;
    padding: 20px 0
}

.login-container .login-subtitle[data-v-3770ee36] {
    color: #f2f2f2;
    font-size: 24px;
    line-height: 24px
}

.login-container .login-form-wrapper[data-v-3770ee36] {
    display: inline-block;
    border-radius: 10px;
    padding: 32px;
    width: 420px;
    right: 0
}

.login-container .login-form-error-msg[data-v-3770ee36] {
    height: 32px;
    color: red;
    line-height: 32px
}

.waves[data-v-3770ee36] {
    position: fixed;
    width: 100%;
    bottom: 0;
    min-height: 100px;
    max-height: 220px
}

.parallax>use[data-v-3770ee36] {
    animation: move-forever-3770ee36 25s cubic-bezier(.55, .5, .45, .5) infinite
}

.parallax>use[data-v-3770ee36]:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 5s
}

.parallax>use[data-v-3770ee36]:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s
}

.parallax>use[data-v-3770ee36]:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 15s
}

.parallax>use[data-v-3770ee36]:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s
}

@keyframes move-forever-3770ee36 {
    0% {
        transform: translate3d(-90px, 0, 0)
    }

    to {
        transform: translate3d(85px, 0, 0)
    }
}

@media (max-width: 768px) {
    .waves[data-v-3770ee36] {
        height: 40px;
        min-height: 40px
    }

    .content[data-v-3770ee36] {
        height: 30vh
    }

    h1[data-v-3770ee36] {
        font-size: 24px
    }
}
</style>
