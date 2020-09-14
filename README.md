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

## "version": "1.2.8":
2020年09月14日10:06:16
1. 依赖项升级
```
    npm install --save antd@4.6.4 less-loader@7.0.1 sass-loader@10.0.2 css-loader@4.3.0 postcss-loader@4.0.1
    npm install --save-dev terser-webpack-plugin@4.2.0 mini-css-extract-plugin@0.11.2
```
