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
 npm install --save react@16.13.1 react-dom@16.13.1 react-test-renderer@16.13.1 speed-measure-webpack-plugin@1.3.3 @babel/core@7.9.0 @babel/preset-env@7.9.0 @babel/preset-react@7.9.1 @babel/register@7.9.0 @babel/runtime@7.9.2 @babel/runtime-corejs3@7.9.2 babel-loader@8.1.0 html-loader@1.0.0 --color=always
 npm install --save-dev react-dev-utils@10.2.1 @babel/plugin-transform-modules-commonjs@7.9.0 @babel/plugin-transform-runtime@7.9.0 --color=always
```
2. 修改框架初始化显示,增加changelog的显示.
3. 增加路由过渡组件,使页面在进行路由跳转的时候更加平滑.