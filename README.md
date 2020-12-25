# JF-WEB-APP-HOOK LATEST VERSION CHANGELOG:


## "version": "1.3.2"
2020年12月25日15:48:07
1. 依赖项升级
```
npm install --save @babel/core@7.12.10 @babel/preset-env@7.12.11 @babel/preset-react@7.12.10 @babel/register@7.12.10 antd@4.9.4 core-js@3.8.1 babel-plugin-module-resolver@4.1.0 less-loader@7.2.0 axios@0.21.1
npm install --save-dev @babel/plugin-proposal-decorators@7.12.12 @babel/plugin-transform-runtime@7.12.10 mini-css-extract-plugin@1.3.3
```
2. 降级webpack和webpack-dev-server,来兼容IE浏览器
3. 降级react到16.x
4. 增加useSyncState方法,用来进行同步的setState
5. 增加jsconfig.json,优化编辑器对类组件的装饰器的显示兼容性


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


