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

## "version": "1.2.6"
2020年08月17日09:47:55
1. 依赖项升级
```
    npm install --save antd@4.5.4 babel-jest@26.3.0 jest@26.4.0
    npm install --save-dev lodash@4.17.20 terser-webpack-plugin@4.1.0 mini-css-extract-plugin@0.10.0
```
2. 修复部分初始化报错信息
