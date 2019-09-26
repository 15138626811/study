# 第六章 DOM

### 一 DOM概述
#####1.DOM的概念
  DOM文档对象模型,DOM对象不仅仅是一个普通的内置对象,它还是一个巨大的API核心对象,它将文档的内容呈现在JS面前,并赋予了JS操作文档的能力.

#####2.DOM和JavaScript的关系
  一个web页面是一个文档,这文档可以在浏览器窗口或者作为HTML源代码显示出来,但上述两种情况都是同一个文档,DOM提供了对同一份文档的另一种表现,存储和操作方式.DOM能够适应JavaScript脚本语言进行修改.

#####3.DOM节点
  加载HTML页面是,web浏览器生成一个树形结构,用来表示页面的内部结构.DOM将这种结构理解为节点组成,根据w3c的HTML DOM标准,HTML文档找那个的所有内容都是节点.
  >整个文档是一个文档节点
  >每个HTML元素就是元素节点
  >HTML元素内的文本是文本节点
  >每个HTML属性都是属性节点
  >注释也是节点,叫注释节点

#####4.DOM树
  DOM树体现着HTML页面的层级结构,而DOM文档树和DOM元素树两种,DOM元素树包含的只有元素节点,而DOM文档树则包括DOM文档中的所有内容.

### 二 获取元素

#####1.用id获取元素
  getElementById()的方法,接受一个参数,获取元素的id,如果找到相应元素,则返回该元素,否则返回null.

    //用变量接  在文档中找元素  用id 'd'
      var d = document.getElementById('d');

#####2.用标签名获取元素
  getElementsByTagName()可以获取该元素名称下的所有的元素,返回一个伪数组,或者是一个节点列表.

       //伪数组
       var lis = document.getElementsByTagName('li');
       console.log(lis);

  在某一个元素中,并不是在全局文档中利用标签获取元素,这样更加精准.

       var aa = document.getElementById('aa');
       var list = aa.getElementsByTagName('li');
       console.log(list);

  当元素只有一个的时候,返回的也依然是一个列表,而不是一个元素.可以通过数组的下标找到该元素.

        var div = document.getElementsByTagName('div');
        console.log(div[0]);

#####3.用类名获取元素

       var a = document.getElementsByClassName('a');
       console.log(a);
  
#####4.用选择器获取元素
  querySelector()和querySelectorAll()可以依靠选择器找到元素,但是前者只能找到元素列表的第一个元素,而后者可以全部找到.注意,该方法性能没有直接利用标签寻找到.

        var a = document.querySelector('.a');
        var aa = document.querySelectorAll('.a');
        var b = document.querySelector('#b');
        console.log(a);
        console.log(aa);
        console.log(b);

#####4.用name属性获取元素
  getElementsByName()方法可以获取相同名称的name元素,返回一个伪数组对象.

        <input type="radio" name="sex" value="0">男 
        <input type="radio" name="sex" value="1">女
        var sex = document.getElementsByName('sex');
        console.log(sex);

### 三 获取和设置元素中的其它信息

#####1.获取元素名
  当我们使用id获取元素的时候,元素的名称会和整个元素一起显示出来,如果想要拿到该元素的元素名,也就是标签名则需要用tagName属性.该属性只能获取,不能设置.

#####2.获取元素节点里的内容
  当获取了元素之后,如果我们需要拿到元素中的内容,则需要用另一种方法.元素里的内容可能包括:文本或元素,需要用innerHTML属性

       var div = document.getElementById('mydiv');
       console.log(div);
       console.log(div.innerHTML);

  innerHTML属性除了可以获取标签内的内容外,还可以设置标签内的内容

       var div = document.getElementById('mydiv');
       console.log(div.innerHTML);
       div.innerHTML = '你好';

#####3.获取元素节点中的文本
  利用innerText属性获取的只能是文本节点,不是其它,当然inner Text属性除了获取,也可以设置元素中的文本.

      var div = document.getElementById('mydiv');
      console.log(div.innerText);
      div.innerText = '你好';

#####4.获取元素的类名
  利用className属性获取元素的类名,以字符串形式返回.可以设置新的class类名,需要注意的是,返回值是一个字符串,如果更换其中一个类,则需要考虑该字符串中其他类是否应该一起设置.

       var a = document.getElementById('mydiv');
       console.log(a.className);

#####5.获取元素样式
  style属性可以获取元素内联样式的所有属性,当然如果继续在style中找属性名,如backgroundColor,就可以得到该属性的值,以字符串的形式返回.同时也可以设置该属性,从而达到增加或更改样式,需要注意的是,以JS形式增加的样式优先级大于CSS.

#####6.获取元素属性
  getAttribute('')可以获取元素的某个属性,要将属性名称放在括号中,记得要用括号括起来,返回值就是字符串形式的属性值

    var div = document.getElementById('mydiv');
    var a = document.getElementsByTagName('a');
    console.log(div.getAttribute('date-lj'));
    console.log(a[0].getAttribute('href'));

#####7.设置元素属性
  setAttribute()可以设置元素的某一属性,第一个参数是属性名,第二个参数是属性值,都需要用括号括起来用逗号分隔.

       var div = document.getElementsByTagName('div');
       var a = document.getElementsByTagName('a');
       div[0].setAttribute('id','mydiv');
       a[0].setAttribute('href','http://www.baidu.com');

#####8.删除元素属性
  使用removeAttribuye(),可以删除某个元素的某个属性,括号中放入需要删除的属性名,用引号包裹

       var div = document.getElementById('mydiv');
       div.removeAttribute('id');

### 四 查找元素
  
#####1.创建元素节点
  使用JS创建一个元素的方法是,先在文档中创建一个标签document.createElement()括号中写标签名,当然要用字符串形式.创建之后不是就存在了,当然需要将这个已经创建的元素放到你想放到的元素(父级元素)中去.

       //用一个变量承接在文档中'创建'的一个元素
       var div = document.createElement('div');
       //将已经创建的元素放在想放的位置上
       document.body.appendChild(div);

#####2.创建文本节点
  利用JS创建元素的文本节点,先在文档中创建文本document.createTextNode('一段文字');在括号中将要创建的字符串放入,最后插入到需要的元素中

       var p = document.getElementById('p');
       var text = document.createTextNode('一段文字');
       p.appendChild(text);

#####3.css样式赋予
  style.cssText是一个css的样式集合,它可以把css层叠样式表中的css样式直接放在该属性后,就不需要一条一条去赋予样式了,可以一次性赋予样式

       var div = document.getElementById('mydiv');
       div.style.cssText = 'width:100px;height:100px;background-color:red;';

#####4.在某元素前插入创建的新元素
  insertBefore()这个函数和appendChild()用法基本一致,都是向父级元素中插入一个子元素,但区别是insertBefore()是可以选择插入的位置,它需要插入到某一个子元素之前的位置,因此需要那个子元素,insertBefore()有两个参数,第一个参数是需要插入的元素,第二个元素是在谁之前插入,两个参数用逗号分隔

    <ul id="ul">
        <li id="pg">苹果</li>
        <li id="jz">橘子</li>
        <li>香蕉</li>
    </ul>
    <script>
       var ul = document.getElementById('ul');
       var pg = document.getElementById('pg');
       var li = document.createElement('li');
       ul.insertBefore(li,jz);
       var t = document.createTextNode('火龙果');
       li.appendChild(t);
    </script>

### 五.删除和替换元素

#####1.元素的替换
  在父元素中一个子元素需要被另一个新的子元素所替代,使用replaceChild()方法,该方法有两个参数.第一个参数是将要替换的新元素,第二个是被替换的旧元素,之间用逗号分隔.

       var mydiv = document.getElementById('mydiv');
       var p = document.createElement('p');
       //在父元素中替换子元素,第一个是新的元素,第二个是旧的
       document.body.replaceChild(p,mydiv);

#####2.元素的删除
  元素的删除是在父元素的其中一个子元素需要删除,使用removeChild()方法,将要删除的元素放入括号中.

       var mydiv = document.getElementById('mydiv');
       document.body.removeChild(mydiv);

### 六 查找节点
  节点是在DOM树上的每一个节点,其中包括:元素、文本、属性、注释等等.常用的有三个:元素、文本、属性.

#####1.节点的属性

       var mydiv = document.getElementById('mydiv');
       console.log(mydiv.nodeName);
       console.log(mydiv.nodeValue);
       console.log(mydiv.nodeType);

#####2.层次节点
  节点可以分为:父节点与子节点、兄弟节点,当我们知道其中之一的时候,可以用一些方法找到另一个.

#####3.获取所有子节点
  使用childNodes属性拿到的是该元素下的所有节点,包含所有节点类型,不单单只是元素.

     <ul id="myul">
       <li>111</li>
       <li>222</li>
       <li>333</li>
    </ul>
    <script>
        var myul = document.getElementById('myul');
        //childNodes是所有节点
        //如果将li前的空格删除,节点数量为3,若不删除,则像此代码显示节点数量为7
        console.log(myul.childNodes);
    </script>

#####4.获取第一个和最后一个子节点
  用firstChild和lastChild可以拿到该父元素下的第一个和最后一个子节点,注意不一定是元素节点.

            <ul id="myul">
                <li>111</li>
                <li>222</li>
                <li>333</li>
             </ul>
             <script>
                 var myul = document.getElementById('myul');
                 console.log(myul.firstChild);
                 console.log(myul.lastChild);
             </script>

#####5.获取父节点
  使用parentNode属性可以拿到该元素的父节点,注意,父节点只要一个

    <ul id="myul"></ul>
    <script>
       var myul = document.getElementById('myul');
       console.log(myul.parentNode)
    </script>

#####6.获取兄弟节点
  使用previousSibling和nextSibling可以获得该元素的前一个和后一个兄弟节点,只能获取一个.

    <h2></h2>h2<div id="mydiv">div</div><p>p</p>
    <script>
       var mydiv = document.getElementById('mydiv');
       console.log(mydiv.previousSibling);
       console.log(mydiv.nextSibling)
    </script>

### 七.元素的宽高属性
  需要获取一个元素的宽度和高度,使用style方法是无法获取的,使用offsetWidth和offsetHeight属性,该属性可以获取元素的占位宽高,它也包含了内边距和边框.

    <div id="mydiv"></div>
    <script>
       var mydiv = document.getElementById('mydiv');
       console.log(mydiv.style);//这种方法无法拿到属性样式
       console.log(mydiv.offsetWidth);
       console.log(mydiv.offsetHeight);
    </script>

#####2.clientWidth和clientHeight
  clientWidth和clientHeight属性也可以获取元素的宽高,但与offsetWidth不同的是不包含边框.

    console.log(mydiv.clientHeight);
  
###八.子元素与父元素的距离
  offsetLeft和offsetTop是距离body左边界和上边界的距离,但如果孩子元素使用了定位属性,则offsetLeft和offsetTop参照的就不再是body而是距离它最近的父级元素

    <div id="baba">
        <div id="erzi"></div>
    </div>
    <script>
       var erzi = document.getElementById('erzi');
       console.log(erzi.offsetLeft);
    </script>
