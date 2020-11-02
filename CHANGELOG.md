# JF-WEB-APP-HOOK VERSION CHANGELOG:

## "version": "alpha"  
2019年12月24日14:03:08  
1. 增加bundle analyze模式 

## "version": "alpha"  
2020年01月09日10:15:34
1. 增加react-dev-utils,支持windows兼容

## "version": "1.0.1"  
2020年03月11日13:27:42  
1. 解决windows上无法启动子进程的bug  
2. 相关依赖项升级,执行脚本:  
```
npm install --save node-sass@4.13.1 sass-loader@8.0.2 webpack-dev-server@3.10.3 @babel/core@7.8.7 @babel/plugin-proposal-class-properties@7.8.3 @babel/polyfill@7.8.7 @babel/preset-env@7.8.7 @babel/preset-react@7.8.3 @babel/register@7.8.6 @babel/runtime@7.8.7 @babel/runtime-corejs3@7.8.7 file-loader@5.1.0 react@16.13.0 react-dom@16.13.0 react-redux@7.2.0 react-test-renderer@16.13.0 webpack@4.42.0 antd@4.0.2 babel-jest@25.1.0 jest@25.1.0 jsdom@16.2.1
```

## "version": "1.0.1"  
2020年03月16日09:57:45  
1. 依赖项版本锁定  
2. 相关依赖项升级,执行脚本:  
```
npm install --save antd@4.0.3
npm install --save-dev @babel/plugin-transform-modules-commonjs@7.8.3
```

## "version": "1.0.2"  
2020年03月17日15:32:31  
1. 增加跨项目通信逻辑  
2. 在执行build时,chunk分包逻辑优化.  

## "version": "1.0.3"  
2020年03月19日14:22:28  
1. ~~移除对less的支持~~  
2. 增加打包时模块分析模式,打包时输出各个模块打包时间.  
3. 修复分析模式只能分析dev环境的bug,可以在分析模式中查看打包后的chunk分块是否合理的情况.  
4. 相关依赖项升级,执行脚本:  
```
npm install --save core-js@3.6.4 css-loader@3.4.2 style-loader@1.1.3 less@3.11.1 axios@0.19.2 
```


## "version": "1.0.4"
2020年03月23日09:43:33
1. 相关依赖项升级,执行脚本:
```
 npm install --save react@16.13.1 react-dom@16.13.1 react-test-renderer@16.13.1 speed-measure-webpack-plugin@1.3.3 @babel/core@7.9.0 @babel/preset-env@7.9.0 @babel/preset-react@7.9.1 @babel/register@7.9.0 @babel/runtime@7.9.2 @babel/runtime-corejs3@7.9.2 babel-loader@8.1.0 html-loader@1.0.0 
 npm install --save-dev react-dev-utils@10.2.1 @babel/plugin-transform-modules-commonjs@7.9.0 @babel/plugin-transform-runtime@7.9.0 
```
2. 修改框架初始化显示,增加changelog的显示.
3. 增加路由过渡组件,使页面在进行路由跳转的时候更加平滑.

##  "version": "1.0.5"
2020年04月13日10:00:47
1. 相关依赖项升级,执行脚本:
```
npm install --save-dev chalk@4.0.0 
npm install --save @babel/preset-env@7.9.5 @babel/preset-react@7.9.4 core-js@3.6.5 cross-spawn@7.0.2 jsdom@16.2.2 webpack@4.42.1 antd@4.1.2 babel-jest@25.3.0 css-loader@3.5.2 html-loader@1.1.0 jest@25.3.0 url-loader@4.1.0 html-webpack-plugin@4.2.0 
```   

##   "version": "1.0.6"
2020年05月06日16:02:59
1. 相关依赖项升级,执行脚本:
```
npm install --save @babel/core@7.9.6 @babel/preset-env@7.9.6 @babel/runtime@7.9.6 @babel/runtime-corejs3@7.9.6 css-loader@3.5.3 antd@4.2.0 html-webpack-plugin@4.3.0 node-sass@
4.14.1 style-loader@1.2.1 webpack@4.43.0 babel-jest@26.0.1 jest@26.0.1 less-loader@6.0.0 
```
2. 修改打包清空文件夹逻辑
3. less-loader配置修改

##   "version": "1.0.7"
2020年05月09日10:51:18
1. 修复全局化配置中,未能正确处理国际化语言的bug.
2. 暂时关闭redux


##   "version": "1.0.8"
2020年05月13日19:11:33
1. 相关依赖项升级,执行脚本:
```
npm install --save antd@4.2.2 less-loader@6.1.0 react-router-dom@5.2.0 webpack-dev-server@3.11.0
npm install --save-dev terser-webpack-plugin@3.0.1 
```
2. 处理file-loader缺失的bug

##   "version": "1.0.9"
2020年05月29日09:24:58
1. 相关依赖项升级,执行脚本:
```
npm install --save antd@4.2.5 cross-spawn@7.0.3 @babel/core@7.10.1 @babel/plugin-proposal-class-properties@7.10.1 @babel/preset-env@7.10.1 @babel/preset-react@7.10.1 @babel/register@7.10.1 @babel/runtime@7.10.1 @babel/runtime-corejs3@7.10.1
npm install --save-dev terser-webpack-plugin@3.0.2 @babel/plugin-proposal-decorators@7.10.1 @babel/plugin-transform-modules-commonjs@7.10.1 @babel/plugin-transform-runtime@7.10.1 webpack-bundle-analyzer@3.8.0
```
2. 处理无法在css中引用url()路径为背景图片的bug

##  "version": "1.1.0"
2020年06月01日13:36:17
1. 相关依赖项升级,执行脚本:
```
npm install --save @babel/core@7.10.2 @babel/preset-env@7.10.2 @babel/runtime@7.10.2 @babel/runtime-corejs3@7.10.2 less@3.11.2 @babel/polyfill@7.10.1 antd@4.3.0
```  
2. 处理无法再css中引入url()路径为字体文件的bug
3. package.json版本固定,移除部分无用依赖,减少node_modules体积

##  "version": "1.1.1"
2020年06月09日10:12:56
1. 相关依赖项升级,执行脚本:
```
npm install --save antd@4.3.3 less@3.11.3 
npm install --save-dev terser-webpack-plugin@3.0.3 
```
2. 移除redux,并不再对redux做技术支持.
3. 增加/src/view/data 文件夹,用来存放默认数据和接口请求

##  "version": "1.1.2"
2020年06月17日16:14:40
1. 相关依赖项升级,执行脚本:
```
    npm install --save antd@4.3.4 less-loader@6.1.1 css-loader@3.6.0
    npm install --save-dev terser-webpack-plugin@3.0.5 chalk@4.1.0
```
2.  打包逻辑优化,打包后自动生成带随机数的zip压缩包
3.  package.json中,需要增加projectName字段

##  "version": "1.1.3"
2020年07月03日14:54:50
1. 相关依赖项升级,执行脚本:
```
    npm install --save @babel/core@7.10.4 @babel/plugin-proposal-class-properties@7.10.4 @babel/polyfill@7.10.4 @babel/preset-env@7.10.4 @babel/preset-react@7.10.4 @babel/register@7.10.4 @babel/runtime@7.10.4 @babel/runtime-corejs3@7.10.4 less-loader@6.1.3 antd@4.4.0 babel-jest@26.1.0 jest@26.1.0 sass-loader@9.0.0 
    npm install --save-dev @babel/plugin-proposal-decorators@7.10.4 @babel/plugin-transform-modules-commonjs@7.10.4 @babel/plugin-transform-runtime@7.10.4 terser-webpack-plugin@3.0.6 webpack-cli@3.3.12
```

##  "version": "1.1.4"
2020年07月13日09:22:49
1. 相关依赖项升级,执行脚本:
```
    npm install --save antd@4.4.2 sass-loader@9.0.2 jsdom@16.3.0 less-loader@6.2.0
    npm install --save-dev lodash@4.17.19
```
 
##  "version": "1.2.0"
2020年07月16日16:43:54
1. 修复babel兼容性的若干bug.
2. 增加对otf字体文件的支持.
3. 相关依赖项升级,执行脚本:
```
    npm install --save @babel/core@7.10.5 @babel/register@7.10.5 @babel/runtime@7.10.5 @babel/runtime-corejs3@7.10.5 less@3.12.2 
    npm install --save-dev @babel/plugin-proposal-decorators@7.10.5 @babel/plugin-transform-runtime@7.10.5 terser-webpack-plugin@3.0.7
```

##  "version": "1.2.1"
2020年07月20日10:21:20
1. 增加对qiankun前端微应用的兼容,项目可作为子应用直接被父应用直接调用.
2. 修复babel兼容性的若干bug.
3. 修复IE浏览器兼容性问题若干
4. 移除.babelrc方式


##  "version": "1.2.2"
2020年07月27日10:58:21
1. 修复项目不能启动的bug
2. 依赖项升级
3. 编译速度优化

## "version": "1.2.3"
2020年07月29日15:05:22
1. 相关依赖项升级,执行脚本:
```
    npm install --save-dev terser-webpack-plugin@3.0.8 
    npm install --save antd@4.5.1
```
2. 优化报错信息
3. 增加4个public-*组件,分别是组件渲染监控的profile组件,组件错误降级捕获的errorBoundary组件,组件骨架屏支持的suspense组件,组件加载套件spin


## "version": "1.2.4"
2020年08月07日10:56:56
1. 修改单元测试的配置,优化单元测试的开发方式
2. 依赖项升级
```
    npm install --save antd@4.5.2 sass-loader@9.0.3 webpack@4.44.1 @babel/core@7.11.1 @babel/preset-env@7.11.0 @babel/runtime@7.11.2 css-loader@4.2.1 jest@26.2.2  
    npm install --save-dev @babel/plugin-transform-runtime@7.11.0 terser-webpack-plugin@4.0.0

```
3. 优化profile组件


## "version": "1.2.5"
2020年08月10日10:36:02
1. 修改单元测试的配置,优化单元测试的开发方式
2. 配合单元测试,暂时关闭webpack的自动导入和按需引入功能.
3. 依赖项升级
```
    npm install --save antd@4.5.3 enzyme-adapter-react-16@1.15.3 @babel/runtime-corejs3@7.11.2 babel-jest@26.2.2 jsdom@16.4.0
```

## "version": "1.2.6"
2020年08月17日09:47:55
1. 依赖项升级
```
    npm install --save antd@4.5.4 babel-jest@26.3.0 jest@26.4.0
    npm install --save-dev lodash@4.17.20 terser-webpack-plugin@4.1.0 
```
2. 修复部分初始化报错信息


## "version": "1.2.7:
2020年09月03日10:01:51
1. 依赖项升级
```
    npm install --save @babel/core@7.11.5 @babel/preset-env@7.11.5 css-loader@4.2.2 enzyme-adapter-react-16@1.15.4 jest@26.4.2 @babel/polyfill@7.11.5 @babel/register@7.11.5 antd@4.6.2 file-loader@6.1.0 html-loader@1.3.0 html-webpack-plugin@4.4.1 less-loader@7.0.0 sass-loader@10.0.1 axios@0.20.0
    npm install --save-dev @babel/plugin-transform-runtime@7.11.5 optimize-css-assets-webpack-plugin@5.0.4 mini-css-extract-plugin@0.11.0
``` 

## "version": "1.2.8":
2020年09月14日10:06:16
1. 依赖项升级
```
    npm install --save antd@4.6.4 less-loader@7.0.1 sass-loader@10.0.2 css-loader@4.3.0 postcss-loader@4.0.1
    npm install --save-dev terser-webpack-plugin@4.2.0 mini-css-extract-plugin@0.11.2
```

## "version": "1.3.0" 
2020年11月02日14:22:15
1. 依赖项升级
```
npm install --save enzyme-adapter-react-16@1.15.5 html-loader@1.3.2 less-loader@7.0.2 postcss-loader@4.0.4 raw-loader@4.0.2 sass-loader@10.0.4 url-loader@4.1.1 @babel/core@7.12.3 @babel/plugin-proposal-class-properties@7.12.1 @babel/polyfill@7.12.1 @babel/preset-env@7.12.1 @babel/preset-react@7.12.1 @babel/register@7.12.1 @babel/runtime@7.12.1 @babel/runtime-corejs3@7.12.1 antd@4.7.3 babel-jest@26.6.1 file-loader@6.2.0 html-webpack-plugin@4.5.0 jest@26.6.1 css-loader@5.0.0 markdown-loader@6.0.0 node-sass@5.0.0 postcss-import@13.0.0 react@17.0.1 react-dom@17.0.1 react-test-renderer@17.0.1 style-loader@2.0.0 webpack@5.3.2 axios@0.21.0

npm install --save-dev babel-plugin-import@1.13.1 @babel/plugin-proposal-decorators@7.12.1 @babel/plugin-syntax-class-properties@7.12.1 @babel/plugin-transform-modules-commonjs@7.12.1 @babel/plugin-transform-runtime@7.12.1 webpack-bundle-analyzer@3.9.0 mini-css-extract-plugin@1.2.1 react-dev-utils@11.0.0 terser-webpack-plugin@5.0.3 webpack-cli@4.1.0
```
2. bug修复
    - 修复在微应用架构中作为子应用不兼容的跨域问题
    - 其他优化
2. 重要说明:  
   此次版本升级有底层框架重大版本的升级(webpack4 => webpack5, react16 => react17),需谨慎升级.