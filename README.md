# vue-ele-axios-sass-init

> 集成vue + element-ui + axios + vuex + sass + i18n init初始化 项目，单页面应用的基础配置，涵盖vue全家桶。

### 0.纯净的环境，你得先全局安装node.js、webpack、vue-cli
``` bash
node -v
npm install webpack -g
npm install --global vue-cli
vue -v
```

### 1.初始化vue项目

##### init step 体验一下vue初始化项目的步骤：
``` bash
vue init webpack my-project
```
你会经历如下配置选择：
``` bash
Project name:  项目名称my-project
Project description: 项目描述xxxxxxx
Author: 作者zzh<1659725767@qq.com>
Vue build : 运行加编译(默认) standalone
Install vue-router?  是否安装vue-router Yes
Use ESLint to lint your code?  是否使用ESLint管理代码 Yes
Pick an ESLint preset   选择一个ESLint预设，编写vue项目时的代码风格  Standard
Set up unit tests 是否安装单元测试  No
Setup e2e tests with Nightwatch? 是否安装e2e测试  No
Should we run `npm install` for you after the project has been created? (recommended)  npm
……
``` 
To get started:
``` bash
  cd vue-ele-axios-sass-init
  npm run dev
```  

### 2.安装element-ui
``` bash
  npm i element-ui -S
```
然后main.js里引入
``` bash
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

render: h => h(App),
 
``` 
 
### 3.安装axios
``` bash
npm install axios --save
```
然后main.js里引入axios:
``` bash
import axios from 'axios'
``` 
在config文件夹的index.js文件中新增配置如下，可以做跨域的接口请求：
``` bash
proxyTable: {
      '/api': {
        target: 'http://localhost:9999',//设置你调用的接口域名和端口号 别忘了加http    
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://127.0.0.1:9999/user/add'，直接写‘/api/user/add’即可
        }
      }
},
```
HelloWorld.vue中使用demo:
``` bash
 test: function () {
      this.axios.get('/api/code/doCode', {
        headers: {'Content-Type': 'application/json;charset=utf8'}
      }).then(function (res) {
        console.log(res.data)
      }).catch(function (err) {
        if (err.response) {
          console.log('error not get!')
        }
      })
    }
 ``` 
 
### 4.安装sass
``` bash
npm install --save-dev node-sass
//sass-loader依赖于node-sass
npm install --save-dev sass-loader
```
在build文件夹下的webpack.base.conf.js中配置
``` bash
{
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
}
```
页面使用：
``` bash
<style scoped lang="scss">
``` 
### 5.安装vuex
``` bash
npm install vuex --save
```
在main.js中引入：
``` bash
import store from './store'

store,
``` 
在src文件夹中新增store文件夹，分别新建getter,actions,mutations，详情见js文件，页面调用如下：
``` bash
{{$store.state.count}}
``` 

### 6.想要国际化安装vue-i18n
``` bash
npm install vue-i18n --save
```
在src文件夹中新增i18n文件夹，详情见js文件，页面调用如下：
``` bash
{{$t('login.account')}}
``` 


##### ps. 以上为您集成好了，其实全部是废话，可以忽略，言归正传

最终的目录结构如下：
``` bash
.
|————build -------------------- 构建脚本目录
| |————build.js  -------------- 主配置文件，优先获取这里的配置，一般用于生产环境
| |————check-versions.js  ----- 核对mode、npm版本
| |————logo.png  -------------- 项目logo图片
| |————utils.js  -------------- 常规工具类
| |————vue-loader.conf.js  ---- loader配置
| |————webpack.base.conf.js --- 基础webpack配置
| |————webpack.dev.conf.js ---- 开发环境webpack配置
| |————webpack.prod.conf.js --- 生产环境webpack配置
|————config ------------------- 构建配置目录
| |————dev.env.js  ------------ 开发环境配置
| |————index.js  -------------- 默认基础配置
| |————prod.env.js  ----------- 生产环境配置
|————node_modules  ------------ node依赖包目录
|————src ---------------------- 源码项目目录
| |————assets ----------------- 资源目录
| |————components ------------- 组件目录
| |————i18n ------------------- 翻译目录
| |————router ----------------- 路由目录
| |————store ------------------ vuex状态管理目录
| |————App.vue ---------------- 页面级vue
| |————main.js ---------------- 页面入口文件
|————static ------------------- 静态资源文件夹
|————.babelrc  ---------------- babel缓存
|————.editorconfig  ----------- webstorm的缓存（不一定有）
|————.eslintignore  ----------- eslint静态检查忽略的文件
|————.eslintrc  --------------- eslint静态检查配置文件
|————.gitignore  -------------- git忽略的文件
|————.postcssrc.js  ----------- webstorm的缓存（不一定有）
|————index.html --------------- 入口页面
|————package.json ------------- npm包依赖配置
|————package-lock.json -------- npm包版本锁定文件, 确保每个环境安装的版本一致
|————README.md ---------------- 项目文档描述

```

##  Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
