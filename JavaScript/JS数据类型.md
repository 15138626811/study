#第二章 JavaScript数据类型
### 一 数据类型分类

1.基础数据类型
  基础数据类型(简单/原始数据类型),通常表示某种值,对值进行的比较.

2.引用数据类型
  引用数据类型(复杂数据类型),是键值对形式出现的,一属性和属性值构成,无序列表集合,在内存中占据独立空间,任何连个独立的对象都不相等.

### 二 基本数据类型

1.数字类型
  number,这种类型使用IEEE754格式来表示整数和浮点数.数字类型包括:整数,浮点数,NaN,Infinity.
  数字范围:最小值5e-324,最大值2的53次方.
  isNaN()方法用来验证值是否为非数字,非数字返回值为true,数字返回值为false.

      var a = 10;
      var b = '10';//字符串
      alert(isNaN(NaN)); //true
      alert(isNaN(a-b));//false
      console.log('a+b:' + isNaN(a+b));
      //alert(isNaN(a+b));//false
      //alert(isNaN(a*b));//false
      //alert(isNaN(a%b));//false

2.字符串类型
  String类型是由引号括起来的一组16位Unicode字符组成的字符序列.字符串类型通常被用于表示文本数据.

      var a = '你好';
      var b = "你们好";
      var c = '你好我叫"托尼"';

  字符串中反斜线有着特殊用途,反斜线后面加一个特殊字符,就变为了转义字符,具备一些特殊用途.

3.布尔类型
  Boolean类型,只有两个字面量值,分别是true和false,并且他们区分大小写,小写的是布尔类型的值.
  数据类型的中有以下数据类型转换后为false:
  (1)false
  (2)''空字符串
  (3)+0和-0
  (4)NaN
  (5)null
  (6)undefined

4.null
  Null类型,是一个对象,函数的参数,表示该函数不是对象,也可以当做空对象用.

     console.log(null+1);//输出为1
     //null数字类型转换为0

5.undefined
  undefined类型代表未定义,是变量的初始值,也是函数的默认返回值.
    console.log(undefined+1)
    //undefined数字类型为NaN