### 命令行支持:

 
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


# JF-WEB-APP-HOOK LATEST VERSION CHANGELOG:

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
