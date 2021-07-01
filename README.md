# JF-WEB-APP-HOOK LATEST VERSION CHANGELOG:


## "version": "1.5.0"
2021年07月01日09:43:01
1. 增加稳定的typeScript支持,同时支持.js, .jsx, .ts, .tsx四种后缀的文件组件写法.
2. 增加css文件chunk.
3. 增加"/src/util/outInterver",使定时器更加精确,并且高度可管理.
4. 优化打包配置,允许项目内部按路由进行代码chunk按需引用,配合服务端缓存配置,可以极大的减少数据加载时间.
5. 依赖项升级

## 命令行支持:
   
`npm run dev`
   
    以开发模式启动项目,默认在8888端口,在package.json的port字段可以修改启动端口.

`npm run build`

    构建生成环境适用的build安装包.

`npm run analyze`

    构建生成环境适用的build安装包,并同步生成依赖分析报告图.

`npm run test`

    执行 /src/test/unit_testing 目录下的单元测试用例.


`npm run doc`

    生成开发文档


