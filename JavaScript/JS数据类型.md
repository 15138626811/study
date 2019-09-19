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

### 三 检验基础数据类型的方式
  typeof 运算符把信息当做"字符串"返回,也就是说返回值都是字符串类型,返回值有几种情况:number,bool,undefined,function,null返回的是object,对于对象不能用typeof检测.
       var a = 10;//number
       var b = 'nihao';//string
       var c = true;//bool
       var d = false;//bool
       var e = null;//object
       var f = undefined;//undefined
       var g = ['1',2];//object
       var h = function(){
           alert(1)
       };//function
       console.log(typeof b);
      // console.log(typeof a-c);

  typeof后面的括号,在有运算的时候一定要使用,否则返回值可能不正确.

### 四 数据类型转换

1.强制转换
  强制转换只要指使用Number(),String(),Boolean()三个函数,手动将各种类型的值分别转为--数字类型,字符串类型和bool类型.

  Number()转换为数字类型:

      console.log(Number('343658'));//343658
      console.log(Number('nihao'));//NaN
      console.log(Number(''));//0
      console.log(Number(true));//1
      console.log(Number(false));//0
  
  String()转换为字符串类型:

      console.log(String(3436));//'3436'
      console.log(String(true));//'true'
      console.log(String(false));//'false'

  Boolean()转换为布尔类型:

      console.log(Boolean(3436));//true
      console.log(Boolean('nihao'));//true
      console.log(Boolean(''));//false
      console.log(Boolean(0));//false
      console.log(Boolean(NaN));//false

2.parseInt()和parseFloat()
  parseInt()函数可以将数据转换成数字类型,并取整数部分,浮点数部分不取;若先遇到非数字部分,显示为NaN.

      var a = 10.67;//10
      var b = '4.644';//4
      var c = '12e';//12
      var d = 'niaohao';//NaN
      var e = 'niaohao123';//NaN
      console.log(parseInt(a));

  parseFloat()函数可以将数据转换为数字类型,取整数和浮点数部分.

      var a = 10.67;//10.67
      var b = '4.644';//4.664
      var c = '12.4e';//12.4
      var d = 'niaohao';//NaN
      var e = 'niaohao123';//NaN
      console.log(parseInt(e));   

3.自动转换
  变量的数据类型不确定,但各种运算对数据类型是有要求的,如果运算符发现运算的数据类型与预期的不一样,就会进行自动转换.