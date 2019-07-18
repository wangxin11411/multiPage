# environmen

## Project setup
```
npm install
```

### src目录文件说明
```
commponents 所有项目可公用组件 引用方式@/components
project 用于放置具体项目业务逻辑代码，
public 所有项目共用静态文件或者库文件，打包时会复制到具体的项目跟路径下，项目通过url引入
```
### 运行指定项目
```
npm run serve:testb
npm run serve:testc
```

### 打包指定项目
```
npm run build:testb
npm run build:testc
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
