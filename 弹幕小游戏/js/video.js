//弹幕程序的入口
document.body.onload =game
//1.1视频元素
var videoElement
//1.2视频外的div
var videoDiv
//1.3两个画布
var canvas1
var cancas2
//1.4两个画笔
var ctx1
var ctx2
//1.5画布的宽度和高度
var canvasWidth
var canvasHeight
//1.6 上一帧执行的时间  两帧之间的时间差
//是为了让视频播放的更加平滑
var lastTime
var delatTime

//1.7 创建变量保存弹幕文字类
var data

//1.8 创建变量保存输入框元素
var msgInput


  //游戏入口函数
function game(){
	init()
	gameLoop()
}
//初始化数据函数
function init(){
	//2.1初始对应元素
	//初始化两帧之间的时间差
	lastTime =Date.now()
	deltaTime =0
	//初始化视频元素
	//找到视频元素以及外层div
	//将div隐藏
	videoElement =document.createElement("video")
	videoElement.src ="res/birds.mp4"
	videoDiv=document.createElement("div")
	videoDiv.setAttribute("style","display:none")
	//将视频元素追加到div appendChild
	videoDiv.appendChild(videoElement)
	//将带视频元素的div追加到body里面
	document.body.appendChild(videoDiv)
	//视频播放
//	videoElement.play()


//获取画布和画笔
    canvas1=document.getElementById("canvas1")
    canvas1=document.getElementById("canvas2")
    
    ctx1=canvas1.getContext("2d")
    ctx2=canvas2.getContext("2d")
    
    //获取画布高度和宽度
    canvasWidth=canvas1.width
    canvasHeight=canvas1.height
    
//  console.log(ctx1)
//  console.log(ctx2)
//  console.log(canvasWidth+":"+canvasHeight)
    data=new dataObj()
    data.init()
    
    //获得输入框元素
    msgInput=document.getElementById("msg")
    //绑定事件  keyup
    msgInput.addEventListener("keyup",inputData,false)
}
//使用定时器循环绘制弹幕内容
function gameLoop(){
//	console.log(3)
	//创建定时器循环执行
	requestAnimationFrame(gameLoop)
	//保存上一帧的时间
	var now=Date.now()
	//保存一下两帧之间的时间差
	delatTime=now
	//如果当前凉枕之间的时间差超过40等于40
	if(delatTime>40)delatTime=40
	//在屏幕之间绘制视频元素
	var x=0
	var y=50
	
	ctx2.drawImage(videoElement,x,y)
	//清除画布
	ctx1.clearRect(0,0,canvasWidth,canvasHeight)
  data.draw()
}


//处理弹幕中输入框事件
function inputData(e){
	//获取当前用户输入键
	 var code=e.keycode
	//获取用户输入回车键
	if(code==13){
		//获取用户输入内容
		var v=this.value
		//发送弹幕中的数据对象
		data.addMes(v)
	 //清空
	 this.value=""
	}
	
}
