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


# JF-WEB-APP-HOOK VERSION CHANGELOG:

## "version": "1.2.4"
2020年08月07日10:56:56
1. 修改单元测试的配置,优化单元测试的开发方式
2. 依赖项升级
```
    npm install --save antd@4.5.2 sass-loader@9.0.3 webpack@4.44.1 @babel/core@7.11.1 @babel/preset-env@7.11.0 @babel/runtime@7.11.2 css-loader@4.2.1 jest@26.2.2  
    npm install --save-dev @babel/plugin-transform-runtime@7.11.0 terser-webpack-plugin@4.0.0

```
3. 优化profile组件


