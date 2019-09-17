##第一章 JavaScript基础

###一.JavaScript概述

1.JavaScript历史
  1993年网景公司开发了第一款浏览器Nosaic,继续一种脚本语言让用户与浏览器进行交互,从而提升"用户体验".

2.JavaScript的创始人
  布兰登·艾奇,仅用十天时间开发了JavaScript,后因为Java火热的缘故,将其改为JavaScript.

3.ECMAScript
  1997年网景公司的JavaScript1.1作为草案,提交给欧洲计算机制造商协会(ECMA),制定一个脚本语言的规范.

4.JavaScript的实现
  一个完整的JavaScript结构应该包括三个部分:原生ECMAScript、DOM(文档对象模型)、BOM(浏览器对象模型)

5.JavaScript版本

###二、JavaScript脚本

1.script标签
  将JS的脚本语言写在script标签里面,两种方法:内部脚本,外部脚本.

    <script>
        alert('hello');
    </script>
  
2.内部脚本
  JS的内部脚本是写在script标签里的,并且将其直接放入html文档里的<!DOCTYPE html>下,位置有不同.

3.外部脚本
  利用script标签的src属性引入一个外部的JS文件,该脚本放在head标签或者body标签中.
  
    <script src="外部脚本.js"></script>
  
 