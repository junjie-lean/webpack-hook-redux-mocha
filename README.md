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


## "version": "1.2.3"
2020年07月29日15:05:22
1. 相关依赖项升级,执行脚本:
```
    npm install --save-dev terser-webpack-plugin@3.0.8 
    npm install --save antd@4.5.1
```
2. 优化报错信息
3. 增加4个public-*组件,分别是组件渲染监控的profile组件,组件错误降级捕获的errorBoundary组件,组件骨架屏支持的suspense组件,组件加载套件spin


