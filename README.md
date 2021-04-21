# JF-WEB-APP-HOOK LATEST VERSION CHANGELOG:


## "version": "1.4.1"
2021年04月21日16:40:17
1. 依赖项升级,包含react和webpack的升级,都进行了大版本升级,如果在使用过程中遇到比较棘手的问题,可以回退到上一版本进行开发.(webpack-cli@3)
2. 添加开发文档记录自动生成方案:
```
    npm run doc
``` 
3.打包逻辑优化,现在支持按路由分包方式进行代码切割,进行按需加载.

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


