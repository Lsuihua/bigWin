var BigWin = window.BigWin = function(param){
  this.finalCanvas = document.getElementById(param.canvasId);
  this.finalCtx = this.finalCanvas.getContext('2d');

  // 虚拟canvas  解决动画效果闪屏问题 
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.timer = null;
  this.animate = false;
  this.init();
  this.render();
}

BigWin.prototype.init = function(){
  let _winW = window.outerWidth,
      _winH = window.outerHeight;
  this.finalCanvas.width =  this.canvas.width = _winW;
  this.finalCanvas.height = this.canvas.height = _winH;
  
  this.ctx.translate(this.canvas.width/2,this.canvas.height/2);
}

BigWin.prototype.start = function(){
  this.animate = true;
  this.animation();
}

BigWin.prototype.animation = function(){
  // 动态更新数字
  var n = Math.floor(Math.random() * 10);
  // 将虚拟画布渲染到画布
  this.finalCtx.clearRect(0,0,this.finalCanvas.width,this.finalCanvas.height);
  this.finalCtx.drawImage(this.canvas,0,0);

  this.ctx.clearRect(-this.canvas.width/2,-this.canvas.height/2,this.canvas.width/2,this.canvas.height/2);
  this.draw([n,n,n]);
  
  this.timer = requestAnimationFrame(this.animation.bind(this));
}

BigWin.prototype.stop = function(){
  // 结束动画  显示结果
  this.animate = false;
  cancelAnimationFrame(this.timer);
  this.timer = null;
  this.ctx.clearRect(-this.canvas.width/2,-this.canvas.height/2,this.canvas.width/2,this.canvas.height/2);
  this.draw([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]);
}

BigWin.prototype.draw = function(numbers){
  // numbers 数字数组
  // 坐标系平移到画布中心（0，0）;
  var gtColor = this.ctx.createLinearGradient(-100,-100,-100,100);
  gtColor.addColorStop(0,'#c18339');   //主体中间光线渐变色
  gtColor.addColorStop(.1,'#d5ab66');
  gtColor.addColorStop(.25,'#f2e9a9');
  gtColor.addColorStop(.35,'#f3ebab');
  gtColor.addColorStop(.5,'#c69352');
  gtColor.addColorStop(.6,'#b77836');
  gtColor.addColorStop(.9,'#c3863f');
  gtColor.addColorStop(1,'#d1a25e');

  var gtColor1 = this.ctx.createLinearGradient(-100,-100,-100,100);
  gtColor1.addColorStop(0,'#be9350');   //  主体两边渐变色
  gtColor1.addColorStop(.1,'#c49c59');
  gtColor1.addColorStop(.3,'#cdac64');
  gtColor1.addColorStop(.5,'#b98947');
  gtColor1.addColorStop(.6,'#a76c2e');
  gtColor1.addColorStop(1,'#924a14');

  // 两边
  var _bgs1 = this.ctx.createLinearGradient(-100,-100,-100,100);
  _bgs1.addColorStop(0,'#772302');
  _bgs1.addColorStop(.1,'#9a5b29');
  _bgs1.addColorStop(.3,'#cca15b');
  _bgs1.addColorStop(.5,'#b47c3e');
  _bgs1.addColorStop(1,'#a05518');
  var _bgs2 = this.ctx.createLinearGradient(-100,-100,-100,100);
  _bgs2.addColorStop(0,'#5b1502');
  _bgs2.addColorStop(.1,'#69290a');
  _bgs2.addColorStop(.3,'#99622f');
  _bgs2.addColorStop(.5,'#884a1e');
  _bgs2.addColorStop(1,'#7b3309');

  var lineColor = this.ctx.createLinearGradient(-100,-100,-100,100);
  lineColor.addColorStop(0,'#ad651d');   // 两边线条渐变色
  lineColor.addColorStop(.3,'#cea757');
  lineColor.addColorStop(.4,'#d6b567');
  lineColor.addColorStop(.5,'#984f14');
  lineColor.addColorStop(.9,'#a7621f');
  lineColor.addColorStop(1,'#b47830');

  var lineColor2 = this.ctx.createLinearGradient(-100,-100,-100,100);
  lineColor2.addColorStop(0,'#9d6d39');   // 两边线条渐变色
  lineColor2.addColorStop(.1,'#9e703c');
  lineColor2.addColorStop(.4,'#d6b567');
  lineColor2.addColorStop(.6,'#88491a');
  lineColor2.addColorStop(1,'#7e360c');

  //中间数字部分 渐变色
  var bg1 = this.ctx.createLinearGradient(-36,-36,-36,36);
  bg1.addColorStop(0,'#f5e39f');
  bg1.addColorStop(1,'#ae6829');

  var bg2 = this.ctx.createLinearGradient(-36,-36,-36,36);
  bg2.addColorStop(0,'#98673e');
  bg2.addColorStop(1,'#d5c98f');

  var bg3 = this.ctx.createLinearGradient(-36,-36,-36,36);
  bg3.addColorStop(0,'#120501');
  bg3.addColorStop(.1,'#323132');
  bg3.addColorStop(.2,'#656465');
  bg3.addColorStop(.3,'#f1f1f1');
  bg3.addColorStop(.5,'#8a8a8a');
  bg3.addColorStop(.6,'#f1f1f1');
  bg3.addColorStop(.8,'#656465');
  bg3.addColorStop(.9,'#323132');
  bg3.addColorStop(1,'#120501');

  // 数字底层背景渐变色
  var _bg2 = this.ctx.createLinearGradient(-70,-22,-70,22);
  _bg2.addColorStop(0,'#98673e');
  _bg2.addColorStop(1,'#d5c98f');

  var _bg3 = this.ctx.createLinearGradient(-68,-20,-68,20);
  _bg3.addColorStop(0,'#120501');
  _bg3.addColorStop(.1,'#323132');
  _bg3.addColorStop(.3,'#f1f1f1');
  _bg3.addColorStop(.5,'#929292');
  _bg3.addColorStop(.7,'#f1f1f1');
  _bg3.addColorStop(.9,'#6c6b6c');
  _bg3.addColorStop(1,'#120501');

  var _bg4 = this.ctx.createLinearGradient(-65,50,-65,90);
  _bg4.addColorStop(0,'#3c0f03');
  _bg4.addColorStop(1,'#731f05');

  // 头部标题背景渐变色
  var rectBg1 = this.ctx.createLinearGradient(-80,-40,-80,40);
  rectBg1.addColorStop(0,'#662307');
  rectBg1.addColorStop(1,'#e8cf8e');

  var rectBg2 = this.ctx.createLinearGradient(-80,-40,-80,40);
  rectBg2.addColorStop(0,'#434444');
  rectBg2.addColorStop(.5,'#262627');
  rectBg2.addColorStop(1,'#404040');

  // 中间块
  this.ctx.save();
  this.ctx.rect(-100,-100,200,200);
  this.ctx.fillStyle = gtColor;
  this.ctx.fill();

  // 头部边框
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.moveTo(-70,-40);
  this.ctx.arcTo(-70,-54,-50,-54,20);
  this.ctx.arcTo(70,-54,70,-40,20);
  this.ctx.shadowColor = '#88673b';
  this.ctx.shadowBlur = '2px';
  this.ctx.shadowOffsetY = '-2'
  this.ctx.strokeStyle = '#ad864a';
  this.ctx.lineWidth = 2;
  this.ctx.stroke();
  this.ctx.restore();

  // 绘制圆角矩形 外矩形 \内矩形
  this.ctx.beginPath();
  this.ctx.moveTo(-80,-40,);
  this.ctx.arcTo(90,-40,90,-30,10);
  this.ctx.arcTo(90,40,80,40,10);
  this.ctx.arcTo(-90,40,-90,30,10);
  this.ctx.arcTo(-90,-40,-80,-40,10);
  this.ctx.closePath();
  this.ctx.fillStyle = rectBg1;
  this.ctx.fill();

  this.ctx.beginPath();
  this.ctx.moveTo(-76,-36,);
  this.ctx.arcTo(86,-36,86,-26,10);
  this.ctx.arcTo(86,36,76,36,10);
  this.ctx.arcTo(-86,36,-86,26,10);
  this.ctx.arcTo(-86,-36,-76,-36,10);
  this.ctx.closePath();
  this.ctx.fillStyle = rectBg2;
  this.ctx.fill();
  this.ctx.restore();

  var self = this;

  for(let i = 0; i< numbers.length;i++){
    drawWinParams(numbers[i],i+1);
  }
  
  // 三个牌牌
  function drawWinParams(n,index){
    // 宽:44(-76,76) | 高: 56(-28,28)  间距：10
    // 单个间距  （172 - 4*10）/3 = 44
    drawTxt(n,index,44,-86,-36,86,36,10);
  }

  // 数字 及底层样式
  function drawTxt(text,index,width,stX,stY,edX,edY,padding){
    var _sx =  stX + padding * index + (index -1)*width, //当前块起始点X
        _ex = _sx + width,          //当前块结束点X
        _sY = stY + padding - 2,    //当前块起始点Y
        _eY = edY - padding + 2,    //当前块结束点Y
        _p1 = 4,                    //边距1层
        _p2 = 3;                    //边距2ceng
    // 第一层
    switch(index){
      case 1:
        self.ctx.save();
        self.ctx.beginPath();
        self.ctx.moveTo(_sx - 6,_sY);
        self.ctx.lineTo(_ex,_sY);
        self.ctx.lineTo(_ex,_eY);
        self.ctx.arcTo(_sx,_eY,_sx,_eY - 6,6);
        self.ctx.arcTo(_sx,_sY,_sx + 6,_sY,6);
        self.ctx.closePath();
        self.ctx.fillStyle = bg1;
        self.ctx.fill();
        break;
      case 2:
        self.ctx.beginPath();
        self.ctx.moveTo(_sx,_sY);
        self.ctx.rect(_sx,_sY,width,_eY-_sY);
        self.ctx.fillStyle = bg1;
        self.ctx.fill();
        self.ctx.closePath();
        break;
      case 3:
        self.ctx.beginPath();
        self.ctx.moveTo(_sx,_sY);
        self.ctx.arcTo(_ex,_sY,_ex,_sY+6,6);
        self.ctx.arcTo(_ex,_eY,_ex-6,_eY,6);
        self.ctx.lineTo(_sx,_eY);
        self.ctx.lineTo(_sx,_sY);
        self.ctx.closePath();
        self.ctx.fillStyle = bg1;
        self.ctx.fill();
        break;
    }

    self.ctx.beginPath();
    self.ctx.moveTo(_sx+_p1,_sY+_p1);
    self.ctx.arcTo(_ex-_p1,_sY + _p1,_ex-_p1,_sY+_p1+4,4);
    self.ctx.arcTo(_ex-_p1,_eY-_p1,_ex-_p1-4,_eY-_p1,4);
    self.ctx.arcTo(_sx+_p1,_eY-_p1,_sx+_p1,_eY-_p1-4,4);
    self.ctx.arcTo(_sx+_p1,_sY+_p1,_sx+_p1+4,_sY+_p1,4);
    self.ctx.closePath();
    self.ctx.fillStyle = _bg2;
    self.ctx.fill();

    self.ctx.save();
    self.ctx.beginPath();
    self.ctx.moveTo(_sx+_p1+_p2,_sY+_p1+_p2);
    self.ctx.rect(_sx+_p1+_p2,_sY+_p1+_p2,width-2*(_p1+_p2),(_eY-_p1-_p2)*2);
    self.ctx.closePath();
    self.ctx.fillStyle = _bg3;
    self.ctx.lineWidth = 2;
    self.strokeStyle = '#a1a1a1';
    self.ctx.stroke();
    self.ctx.fill()

    self.ctx.font = '32px STheiti, SimHei';
    self.ctx.textBaseline = 'middle';
    self.ctx.fillStyle = '#c01010';
    self.ctx.textAlign = 'center';
    self.ctx.shadowColor = '#4b0000';
    self.ctx.shadowOffsetX = '1';
    self.ctx.shadowOffsetY = '1';
    self.ctx.shadowBlur = '2';
    self.ctx.fillText(text,_sx +_p1+_p2+ (width-2*(_p1+_p2))/2,0);
    self.ctx.restore();
  }

  // 底部
  self.ctx.save();
  self.ctx.beginPath();
  self.ctx.moveTo(-65,50);
  self.ctx.arcTo(70,50,65,55,5);
  self.ctx.arcTo(50,90,45,90,5);
  self.ctx.arcTo(-50,90,-55,85,5);
  self.ctx.arcTo(-70,50,-65,50,5);
  self.ctx.closePath();
  self.ctx.fillStyle = _bg4;
  self.ctx.strokeStyle = '#e5cf8e';
  self.ctx.lineWidth = '4';
  self.ctx.fill();
  self.ctx.stroke();
  self.ctx.restore();

  // 头部
  drawHead('BIG WIN');
  function drawHead(txt){
    self.ctx.save();
    self.ctx.beginPath();
    self.ctx.moveTo(-80,-100);
    self.ctx.lineTo(90,-100);
    self.ctx.arcTo(80,-70,70,-70,10);
    self.ctx.arcTo(-80,-70,-80,-80,10);
    self.ctx.lineTo(-80,-100);
    self.ctx.closePath();
    var _bgt1 = self.ctx.createLinearGradient(-80,-100,90,-100);
    _bgt1.addColorStop(0,'#b57b3f');
    _bgt1.addColorStop(1,'#ad6c30');
    self.ctx.fillStyle = _bgt1;
    self.ctx.fill();
  
    self.ctx.beginPath();
    self.ctx.moveTo(-60,-120);
    self.ctx.arcTo(70,-120,80,-110,10);
    self.ctx.arcTo(80,-70,74,-70,6);
    self.ctx.arcTo(-80,-70,-74,-90,6);
    self.ctx.arcTo(-70,-120,-60,-120,10);
    self.ctx.closePath();
    var _bgt2 = self.ctx.createLinearGradient(-80,-120,-80,-70);
    _bgt2.addColorStop(0,'#f4e09c');
    _bgt2.addColorStop(1,'#ae6625');
    self.ctx.fillStyle = _bgt2;
    self.ctx.fill();
    self.ctx.restore();
  
    self.ctx.beginPath();
    self.ctx.moveTo(-54,-114);
    self.ctx.arcTo(64,-114,70,-104,6);
    self.ctx.arcTo(70,-80,64,-80,6);
    self.ctx.arcTo(-70,-80,-64,-104,6);
    self.ctx.arcTo(-64,-114,-54,-114,6);
    self.ctx.closePath();
    var _bgt3 = self.ctx.createLinearGradient(-80,-120,-80,-70);
    _bgt3.addColorStop(0,'#5b270a');
    _bgt3.addColorStop(1,'#ae6625');
    self.ctx.fillStyle = _bgt3;
    self.ctx.fillStyle = '#8b461a';
    self.ctx.fill();
    self.ctx.fillStyle = '#fffab2';
    self.ctx.font = '24px STheiti, SimHei';
    self.ctx.textBaseline = 'middle';
    self.ctx.textAlign = 'center';
    self.ctx.lineWidth = 6;
    self.ctx.strokeStyle = '#561e05';
    self.ctx.strokeText(txt,0,-97);
    self.ctx.fillText(txt,0,-97);
    self.ctx.restore();
  }

  // 两边半圆
  drawSlide(-1);
  drawSlide(1)
  function drawSlide(direction){
    self.ctx.save();
    
    self.ctx.beginPath();
    self.ctx.moveTo(direction*100,-92);
    self.ctx.lineTo(direction*100,92);
    self.ctx.lineTo(direction*106,92);
    self.ctx.lineTo(direction*106,-92);
    self.ctx.lineTo(direction*100,-92);
    self.ctx.closePath();
    self.ctx.fillStyle = _bgs1;
    self.ctx.fill();

    self.ctx.beginPath();
    self.ctx.moveTo(direction*106,-92);
    self.ctx.lineTo(direction*106,92);
    self.ctx.lineTo(direction*110,92);
    self.ctx.lineTo(direction*110,-92);
    self.ctx.lineTo(direction*106,-92);
    self.ctx.closePath();
    self.ctx.fillStyle = _bgs2;
    self.ctx.fill();

    self.ctx.beginPath();
    self.ctx.moveTo(direction*110,-100);
    self.ctx.quadraticCurveTo(direction*140,-95,direction*160,-80);
    self.ctx.lineTo(direction*160,80);
    self.ctx.quadraticCurveTo(direction*140,95,direction*110,100);
    self.ctx.lineTo(direction*110,-100);
    self.ctx.closePath();
    self.ctx.fillStyle = gtColor;
    self.ctx.fill();
    
    self.ctx.beginPath();
    self.ctx.moveTo(direction*160,-80);
    self.ctx.quadraticCurveTo(direction*194,-58,direction*200,-5);
    self.ctx.lineTo(direction*200,5);
    self.ctx.quadraticCurveTo(direction*194,58,direction*160,80);
    self.ctx.lineTo(direction*160,-80);
    self.ctx.closePath();
    self.ctx.fillStyle = gtColor1;
    self.ctx.fill();
    
    // 质感线条
    self.ctx.beginPath();
    self.ctx.moveTo(direction*126,-96);
    self.ctx.lineTo(direction*126,96);
    self.ctx.quadraticCurveTo(direction*128,96,direction*130,94);
    self.ctx.lineTo(direction*130,-94);
    self.ctx.quadraticCurveTo(direction*128,-96,direction*126,-96);
    self.ctx.closePath();
    self.fillStyle = lineColor;
    self.ctx.fill();

    self.ctx.beginPath();
    self.ctx.moveTo(direction*174,-69);
    self.ctx.lineTo(direction*174,69);
    self.ctx.quadraticCurveTo(direction*178,64,direction*180,60);
    self.ctx.lineTo(direction*180,-60);
    self.ctx.quadraticCurveTo(direction*178,-64,direction*174,-69);
    self.ctx.fillStyle = lineColor2;
    self.ctx.closePath();
    self.ctx.fill();
    self.ctx.restore();
  }

  // 开始把手
}

BigWin.prototype.render = function(){
  this.draw([0,0,0]);
  this.finalCtx.drawImage(this.canvas,0,0);
}