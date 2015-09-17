## for开发
1. npm install
2. bower install
3. gulp bundleVendors
4. gulp

## dist build
gulp dist

## 使用
```bash
cd dist
node server.js
```

## TODO

### 优化
- 首页输入姓名时，增加判断是否英文和数字，不接受中文、英文逗号、英文句号和其它特殊符号
- 查看过往log列表排序，分tab展示不同年份
- 删除某个月的log
- 下载完csv文件后，如何删除csv文件夹中的对应文件？不删除的话，csv文件夹会越来越大
