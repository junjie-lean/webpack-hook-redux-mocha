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

## "version": "1.2.5"
2020年08月10日10:36:02
1. 修改单元测试的配置,优化单元测试的开发方式
2. 配合单元测试,暂时关闭webpack的自动导入和按需引入功能.
3. 依赖项升级
```
    npm install --save antd@4.5.3 enzyme-adapter-react-16@1.15.3 @babel/runtime-corejs3@7.11.2 babel-jest@26.2.2 jsdom@16.4.0
```