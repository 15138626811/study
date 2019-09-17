//弹幕效果
//1.创建弹幕文字的类
var dataObj=function(){
//	console.log(1)
//创建数组保存多个弹幕中的文字
   this.rows=[]
   //创建数组保存多个弹幕中的文字的X轴坐标
   this.x=[]
   //创建数组保存多个弹幕中的文字的y轴坐标
   this.y=[]
   //创建数组保存多个弹幕中文字的速度
   this.spd=[]
}
//2.添加初始化方法
dataObj.prototype.init=function(){
//	console.log(2)
   //2.1初始化一些数值
   this.rows.push("等我来个")
   this.rows.push("我可以")
   this.rows.push("柠檬精")
   //2.2循环遍历数组中的元素
   for(var i=0;i<this.rows.length;i++){
   	//初始计算x
   	this.x[i]=canvasWidth
   	//初始计算y
   	this.y[i]=Math.random()*canvasHeight
   	//初始计算spd
   	this.spd[i]=Math.random()*0.010
   	
   }
}
//3.添加绘制方法
dataObj.prototype.draw=function(){
//	console.log(3)
	//3.1保存画笔的状态
	ctx1.save()
	//3.2保存弹幕中文字的大小
	ctx1.font="39px SimHei"
	//3.3保存弹幕中文字的颜色
	ctx1.fillStyle="#F00"
	//3.4循环  获取数组中每个弹幕中的文字
	for(var i=0;i<this.rows.length;i++){
		var msg=this.rows[i]
		//绘制文字
		ctx1.fillText(msg,this.x[i],this.y[i])
		//修改文字X值
		this.x[i]-=this.spd[i]*25*delatTime
	}
	//3.5恢复
	ctx1.restore()
}

//4.添加新弹幕文字
dataObj.prototype.addMes=function(){
	//将文字添加到数组中
	this.rows.push(msg)
	for(var i=0;i<this.rows.length;i++){
   	//初始计算x
   	   this.x[i]=canvasWidth
   	//初始计算y
   	   this.y[i]=Math.random()*canvasHeight
   	//初始计算spd
   	   this.spd[i]=Math.random()*0.010
   	
   }
}
