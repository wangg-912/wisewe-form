
# wisewe-form

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/wangg-912/wisewe-form)
[![github](https://img.shields.io/badge/Author-wang-blue)](https://github.com/wangg-912)
[![document](https://img.shields.io/badge/Doc-welcome-red.svg)]()


**wisewe-form 是一个可以通过 JSON 生成具有动态渲染、数据收集、验证和提交功能的表单生成组件。支持3个UI框架，并且支持生成任何 Vue 组件。内置20种常用表单组件和自定义组件，再复杂的表单都可以轻松搞定。**


## 支持

- **element-ui**





## 文档

[简体中文](http://www.wisewe-form.com/v2/) | [English](http://www.wisewe-form.com/en/v2/)


## 包说明

| 包名             | 说明                                                |
| ------------------ | ---------------------------------------------------------- |


| @wisewe-form/element-ui [![version](https://img.shields.io/npm/v/@wisewe-form/element-ui.svg)](https://www.npmjs.com/package/@wisewe-form/element-ui) [![npm](https://img.shields.io/npm/dt/@wisewe-form/element-ui.svg)](https://www.npmjs.com/package/@wisewe-form/element-ui) | [element-ui 版本](element-ui/)        |





## 示例


- [使用生成器生成](https://jsrun.net/NQhKp/edit)

- [使用 json 生成](https://jsrun.net/NQhKp/edit)






## 安装

> 根据自己使用的 UI 安装对应的版本

iview
```shell
npm install @wisewe-form/iview
```

view-design
```shell
npm install @wisewe-form/iview4
```

element-ui
```shell
npm install @wisewe-form/element-ui
```

ant-design-vue
```shell
npm install @wisewe-form/ant-design-vue
```

## 引入

**CDN:**



element-ui
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import element -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- import wisewe-form/element -->
<script src="//unpkg.com/@wisewe-form/element-ui/dist/wisewe-form.min.js"></script>
```


**NodeJs:**


element-ui
```js
import formCreate from '@wisewe-form/element-ui'
Vue.use(formCreate)
```


##  使用

```html
<wisewe-form :rule="rule" v-model="fApi" :option="options" :value.sync="value"/>
```
```javascript
export default {
    data(){
        return {
            fApi:{},
            value:{field1:'111',field2:'222',time:'11:11:11'},
            options:{
                onSubmit:(formData)=>{
                    alert(JSON.stringify(formData))
                }
            },
            rule:[
                {type:'input', field:'field1',title:'field1',value:'aaa'},
                {type:'input', field:'field2',title:'field2',value:'sss'},
                {type:'timePicker', field:'time',title:'time',value:'12:12:12'},
                {
                    type:'ElButton',
                    title:'修改 field1',
                    native: false,
                    on:{
                        click: ()=>{
                            this.rule[0].value+='a'
                        }
                    },
                    children: ['点击'],
                }
            ]
        }
    }
}
```

## 示例

下载项目
```sh
$ git clone https://github.com/wangg-912/wisewe-form.git
$ cd wisewe-form
```
安装依赖
```sh
$ npm run bootstrap
```
查看 iview 示例
```sh 
$ npm run dev:iview
```
查看 view-design 示例
```sh 
$ npm run dev:iview4
```
查看 element-ui 示例
```sh 
$ npm run dev:ele
```
查看 ant-design-vue 示例
```sh 
$ npm run dev:antd
```


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present wang
