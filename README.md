# JF-WEB-APP-HOOK LATEST VERSION CHANGELOG:


## "version": "1.3.1"
2020年11月16日09:50:16
1. HTML文件增加DNS预解析元数据,该操作会有效的减少在以域名为部署方式时的渲染时间(Js code split);
2. 取消react useContext的数据存储方式,恢复react-redux状态管理机制,并增加redux-persist,使之在刷新时能保存redux的当前状态值;
3. 依赖项升级
```
npm install --save react-redux redux-persist
npm install --save @babel/preset-react@7.12.5 @babel/runtime@7.12.5 @babel/runtime-corejs3@7.12.5 babel-jest@26.6.3 jest@26.6.3 babel-loader@8.2.1 core-js@3.7.0 less-loader@7.1.0 sass-loader@10.1.0 
npm install --save-dev @svgr/webpack@5.5.0 mini-css-extract-plugin@1.3.1 
```
4. 移除部分废弃依赖项;
5. 优化qiankun micro app作为主应用和子应用的兼容性;


## 命令行支持:
   
`npm run dev`
   
    以开发模式启动项目,默认在4000端口,在package.json的port字段可以修改启动端口.

`npm run build`

    构建生成环境适用的build安装包.

`npm run analyze`

    构建生成环境适用的build安装包,并同步生成依赖分析报告图.

`npm run test`

    执行 /src/test/unit_testing 目录下的单元测试用例.

`npm run test:c`

    执行 /src/test/unit_testing 目录下的单元测试用例,并在项目根路径下同步生成自动化测试覆盖率报告 /coverage


