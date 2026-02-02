Math.TAU = Math.PI*2;

// ==================== 配置 ====================
var MESSAGE = "I♥U";  // 可修改为任意字母/数字组合，支持 A-Z, 0-9, 空格, ♥
var CANVAS_WIDTH = 400;
var GAME_HEIGHT = 420;
var CLOCK_HEIGHT = 80;
var CANVAS_HEIGHT = GAME_HEIGHT + CLOCK_HEIGHT;

// ==================== 完整字母地图库（包含检查点）====================
var LETTER_MAPS = {
  '0': { circles: [{ x: 200, y: 210, radius: 100 }], player: { x: 200, y: 390 }, checkpoints: [{ x: 360, y: 210 },{ x: 200, y: 40 }], key: { x: 40, y: 210 }, door: { x: 200, y: 390 }, countdown: 230 },
  '1': { circles: [{ x: -60, y: 210, radius: 190 },{ x: 460, y: 210, radius: 190 }], player: { x: 200, y: 390 }, checkpoints: [], key: { x: 208, y: 269 }, door: { x: 200, y: 40 }, countdown: 170 },
  '2': { circles: [{ x: -20, y: 70, radius: 100 },{ x: 450, y: 300, radius: 140 },{ x: 120, y: 210, radius: 70 }], player: { x: 120, y: 50 }, checkpoints: [{ x: 340, y: 50 }], key: { x: 50, y: 380 }, door: { x: 340, y: 380 }, countdown: 230 },
  '3': { circles: [{ x: 258, y: 123, radius: 60 },{ x: 261, y: 290, radius: 60 },{ x: 86, y: 207, radius: 80 }], player: { x: 40, y: 49 }, checkpoints: [{ x: 354, y: 118 },{ x: 263, y: 207 }], key: { x: 356, y: 288 }, door: { x: 64, y: 371 }, countdown: 260 },
  '4': { circles: [{ x: 205, y: -87, radius: 110 },{ x: 185, y: 202, radius: 80 },{ x: 47, y: 72, radius: 80 },{ x: 31, y: 325, radius: 80 }], player: { x: 192, y: 54 }, checkpoints: [{ x: 106, y: 261 },{ x: 345, y: 281 }], key: { x: 312, y: 179 }, door: { x: 267, y: 367 }, countdown: 260 },
  '5': { circles: [{ x: 430, y: 70, radius: 110 },{ x: -30, y: 320, radius: 130 },{ x: 200, y: 130, radius: 55 },{ x: 168, y: 281, radius: 60 }], player: { x: 300, y: 50 }, checkpoints: [{ x: 60, y: 50 },{ x: 60, y: 180 }], key: { x: 300, y: 340 }, door: { x: 120, y: 380 }, countdown: 260 },
  '6': { circles: [{ x: 190, y: 264, radius: 80 },{ x: 430, y: 140, radius: 130 }], player: { x: 300, y: 50 }, checkpoints: [{ x: 80, y: 50 },{ x: 96, y: 340 }], key: { x: 285, y: 333 }, door: { x: 71, y: 229 }, countdown: 240 },
  '7': { circles: [{ x: 464, y: 374, radius: 220 },{ x: 187, y: 170, radius: 80 }], player: { x: 50, y: 50 }, checkpoints: [{ x: 340, y: 50 }], key: { x: 256, y: 247 }, door: { x: 160, y: 380 }, countdown: 220 },
  '8': { circles: [{ x: 200, y: 110, radius: 70 },{ x: 200, y: 310, radius: 70 }], player: { x: 200, y: 210 }, checkpoints: [{ x: 295, y: 108 },{ x: 105, y: 106 },{ x: 296, y: 329 }], key: { x: 103, y: 332 }, door: { x: 200, y: 210 }, countdown: 280 },
  '9': { circles: [{ x: 200, y: 166, radius: 80 },{ x: -30, y: 310, radius: 130 }], player: { x: 298, y: 127 }, checkpoints: [{ x: 91, y: 160 }], key: { x: 304, y: 149 }, door: { x: 200, y: 390 }, countdown: 230 },
  'A': { circles: [{ x: 203, y: 219, radius: 60 },{ x: -106, y: 189, radius: 200 },{ x: 201, y: -142, radius: 200 },{ x: 504, y: 178, radius: 200 },{ x: 206, y: 434, radius: 100 }], player: { x: 60, y: 380 }, checkpoints: [{ x: 206, y: 103 }], key: { x: 126, y: 285 }, door: { x: 340, y: 380 }, countdown: 230 },
  'B': { circles: [{ x: 213, y: 306, radius: 60 },{ x: 206, y: 127, radius: 60 },{ x: 509, y: 194, radius: 200 },{ x: -133, y: 215, radius: 200 }], player: { x: 93, y: 338 }, checkpoints: [{ x: 302, y: 36 },{ x: 108, y: 216 },{ x: 320, y: 383 }], key: { x: 112, y: 209 }, door: { x: 91, y: 41 }, countdown: 680 },
  'C': { circles: [{ x: 200, y: 210, radius: 110 },{ x: 423, y: 207, radius: 100 }], player: { x: 350, y: 50 }, checkpoints: [], key: { x: 52, y: 196 }, door: { x: 350, y: 370 }, countdown: 260 },
  'D': { circles: [{ x: 197, y: 203, radius: 100 },{ x: -38, y: 198, radius: 80 },{ x: 359, y: 382, radius: 80 },{ x: 200, y: 210, radius: 80 },{ x: 361, y: 27, radius: 80 }], player: { x: 68, y: 348 }, checkpoints: [{ x: 221, y: 50 }], key: { x: 346, y: 193 }, door: { x: 87, y: 360 }, countdown: 240 },
  'E': { circles: [{ x: -12, y: 67, radius: 80 },{ x: 12, y: 399, radius: 80 },{ x: 200, y: 134, radius: 45 },{ x: 196, y: 284, radius: 45 },{ x: 374, y: 133, radius: 60 },{ x: 280, y: 124, radius: 50 },{ x: 164, y: 92, radius: 40 }], player: { x: 349, y: 362 }, checkpoints: [{ x: 121, y: 370 },{ x: 105, y: 44 },{ x: 302, y: 44 }], key: { x: 187, y: 202 }, door: { x: 280, y: 210 }, countdown: 280 },
  'F': { circles: [{ x: -11, y: 227, radius: 80 },{ x: 410, y: 202, radius: 80 },{ x: 195, y: 151, radius: 45 },{ x: 200, y: -83, radius: 120 },{ x: 212, y: 341, radius: 80 },{ x: 290, y: 149, radius: 40 }], player: { x: 92, y: 378 }, checkpoints: [{ x: 85, y: 65 }], key: { x: 300, y: 69 }, door: { x: 295, y: 230 }, countdown: 240 },
  'G': { circles: [{ x: 154, y: 209, radius: 80 },{ x: 168, y: -19, radius: 80 },{ x: 183, y: 450, radius: 80 }], player: { x: 339, y: 77 }, checkpoints: [{ x: 31, y: 205 },{ x: 350, y: 328 }], key: { x: 277, y: 200 }, door: { x: 270, y: 279 }, countdown: 250 },
  'H': { circles: [{ x: 200, y: 70, radius: 100 },{ x: 200, y: 350, radius: 100 }], player: { x: 50, y: 380 }, checkpoints: [{ x: 50, y: 50 },{ x: 350, y: 50 }], key: { x: 350, y: 210 }, door: { x: 350, y: 380 }, countdown: 320 },
  'I': { circles: [{ x: -60, y: 210, radius: 190 },{ x: 460, y: 210, radius: 190 }], player: { x: 200, y: 380 }, checkpoints: [], key: { x: 203, y: 212 }, door: { x: 200, y: 50 }, countdown: 170 },
  'J': { circles: [{ x: 93, y: 476, radius: 120 },{ x: 347, y: 520, radius: 160 },{ x: 216, y: 314, radius: 30 },{ x: 48, y: 103, radius: 120 },{ x: 411, y: 205, radius: 80 }], player: { x: 285, y: 50 }, checkpoints: [], key: { x: 288, y: 343 }, door: { x: 149, y: 287 }, countdown: 230 },
  'K': { circles: [{ x: 306, y: 216, radius: 90 },{ x: 134, y: 123, radius: 55 },{ x: 139, y: 307, radius: 55 },{ x: -78, y: 212, radius: 120 }], player: { x: 62, y: 380 }, checkpoints: [{ x: 52, y: 50 },{ x: 104, y: 216 }], key: { x: 334, y: 48 }, door: { x: 350, y: 380 }, countdown: 440 },
  'L': { circles: [{ x: 300, y: -4, radius: 160 },{ x: -70, y: 199, radius: 110 },{ x: 159, y: 206, radius: 70 }], player: { x: 60, y: 50 }, checkpoints: [{ x: 60, y: 354 }], key: { x: 203, y: 350 }, door: { x: 341, y: 359 }, countdown: 220 },
  'M': { circles: [{ x: -77, y: 213, radius: 110 },{ x: 133, y: 208, radius: 40 },{ x: 270, y: 207, radius: 40 },{ x: 203, y: 44, radius: 80 },{ x: 202, y: 379, radius: 80 },{ x: 476, y: 207, radius: 110 }], player: { x: 64, y: 367 }, checkpoints: [{ x: 52, y: 46 },{ x: 202, y: 244 }], key: { x: 347, y: 49 }, door: { x: 343, y: 373 }, countdown: 280 },
  'N': { circles: [{ x: 203, y: 339, radius: 80 },{ x: 205, y: 74, radius: 120 },{ x: -32, y: 187, radius: 80 },{ x: 433, y: 187, radius: 80 }], player: { x: 64, y: 380 }, checkpoints: [{ x: 50, y: 50 },{ x: 94, y: 190 }], key: { x: 335, y: 378 }, door: { x: 339, y: 47 }, countdown: 260 },
  'O': { circles: [{ x: 200, y: 210, radius: 100 }], player: { x: 200, y: 390 }, checkpoints: [{ x: 360, y: 210 },{ x: 200, y: 40 }], key: { x: 40, y: 210 }, door: { x: 200, y: 390 }, countdown: 380 },
  'P': { circles: [{ x: 287, y: 348, radius: 140 },{ x: 196, y: 102, radius: 69 }], player: { x: 60, y: 380 }, checkpoints: [{ x: 50, y: 50 }], key: { x: 319, y: 124 }, door: { x: 60, y: 200 }, countdown: 220 },
  'Q': { circles: [{ x: 205, y: 195, radius: 100 },{ x: 416, y: 247, radius: 80 },{ x: 204, y: 456, radius: 80 },{ x: 200, y: -35, radius: 80 },{ x: -32, y: 202, radius: 80 },{ x: 356, y: 31, radius: 80 },{ x: 53, y: 362, radius: 80 },{ x: 42, y: 36, radius: 80 }], player: { x: 209, y: 334 }, checkpoints: [{ x: 72, y: 185 },{ x: 204, y: 71 },{ x: 212, y: 349 }], key: { x: 316, y: 279 }, door: { x: 337, y: 378 }, countdown: 280 },
  'R': { circles: [{ x: 202, y: 128, radius: 70 },{ x: 406, y: 257, radius: 120 },{ x: -28, y: 2, radius: 80 },{ x: 204, y: -57, radius: 80 },{ x: 383, y: 4, radius: 80 },{ x: 179, y: 309, radius: 80 },{ x: -256, y: 253, radius: 300 }], player: { x: 77, y: 369 }, checkpoints: [{ x: 71, y: 62 },{ x: 309, y: 100 }], key: { x: 87, y: 198 }, door: { x: 300, y: 380 }, countdown: 270 },
  'S': { circles: [{ x: 420, y: 330, radius: 100 },{ x: 205, y: 125, radius: 60 },{ x: 209, y: 291, radius: 60 },{ x: -17, y: 62, radius: 80 },{ x: 194, y: -87, radius: 120 },{ x: 215, y: 506, radius: 120 },{ x: -131, y: 300, radius: 200 }], player: { x: 338, y: 50 }, checkpoints: [{ x: 100, y: 50 },{ x: 204, y: 207 }], key: { x: 300, y: 380 }, door: { x: 94, y: 371 }, countdown: 280 },
  'T': { circles: [{ x: -58, y: 275, radius: 200 },{ x: 472, y: 268, radius: 200 },{ x: 119, y: -7, radius: 45 },{ x: 143, y: 129, radius: 45 },{ x: 288, y: -7, radius: 45 },{ x: 265, y: 127, radius: 45 }], player: { x: 60, y: 50 }, checkpoints: [{ x: 340, y: 50 }], key: { x: 200, y: 50 }, door: { x: 200, y: 380 }, countdown: 230 },
  'U': { circles: [{ x: 194, y: 210, radius: 150 }], player: { x: 50, y: 50 }, checkpoints: [], key: { x: 199, y: 395 }, door: { x: 350, y: 50 }, countdown: 380 },
  'V': { circles: [{ x: 43, y: 339, radius: 130 },{ x: 353, y: 333, radius: 130 }], player: { x: 50, y: 50 }, checkpoints: [{ x: 197, y: 332 }], key: { x: 290, y: 170 }, door: { x: 350, y: 50 }, countdown: 230 },
  'W': { circles: [{ x: 108, y: 195, radius: 70 },{ x: 289, y: 191, radius: 70 },{ x: 45, y: 380, radius: 80 },{ x: 365, y: 385, radius: 80 }], player: { x: 28, y: 49 }, checkpoints: [{ x: 123, y: 307 },{ x: 201, y: 200 }], key: { x: 323, y: 292 }, door: { x: 350, y: 50 }, countdown: 260 },
  'X': { circles: [{ x: 84, y: 211, radius: 100 },{ x: 325, y: 211, radius: 100 },{ x: 206, y: 13, radius: 100 },{ x: 206, y: 420, radius: 100 }], player: { x: 50, y: 50 }, checkpoints: [{ x: 199, y: 210 },{ x: 339, y: 364 }], key: { x: 348, y: 51 }, door: { x: 63, y: 359 }, countdown: 270 },
  'Y': { circles: [{ x: 53, y: 280, radius: 130 },{ x: 354, y: 287, radius: 130 },{ x: 209, y: 62, radius: 80 }], player: { x: 50, y: 50 }, checkpoints: [{ x: 200, y: 190 },{ x: 350, y: 50 }], key: { x: 200, y: 190 }, door: { x: 200, y: 390 }, countdown: 250 },
  'Z': { circles: [{ x: 89, y: 219, radius: 100 },{ x: 321, y: 215, radius: 100 },{ x: 380, y: 33, radius: 59 },{ x: 225, y: 340, radius: 40 }], player: { x: 50, y: 50 }, checkpoints: [{ x: 309, y: 65 }], key: { x: 50, y: 380 }, door: { x: 350, y: 380 }, countdown: 250 },
  ' ': { circles: [], player: { x: 100, y: 210 }, checkpoints: [{ x: 200, y: 210 }], key: { x: 260, y: 210 }, door: { x: 320, y: 210 }, countdown: 140 },
  '♥': { circles: [{ x: 120, y: 120, radius: 80 },{ x: 280, y: 120, radius: 80 }], player: { x: 200, y: 390 }, checkpoints: [{ x: 50, y: 190 },{ x: 50, y: 60 },{ x: 200, y: 30 },{ x: 350, y: 60 }], key: { x: 350, y: 190 }, door: { x: 200, y: 390 }, countdown: 320 },
};

///// LOAD IMAGES /////

var assetsCallback;
var onLoadAssets = function(callback){
	assetsCallback = callback;
	if(assetsLeft==0) assetsCallback();
};
var assetsLeft = 0;
var onAssetLoaded = function(){
	assetsLeft--;
	if(assetsLeft==0) assetsCallback();
};
var images = {};
function addAsset(name,src){
	assetsLeft++;
	images[name] = new Image();
	images[name].onload = onAssetLoaded;
	images[name].src = src;
}
function addSound(name,src){
	assetsLeft++;
	createjs.Sound.addEventListener("fileload", onAssetLoaded);
	createjs.Sound.registerSound({src:src, id:name});
}

//////////////

function Level(config,isIntro){

	var self = this;
	self.isIntro = isIntro;

	self.circles = config.circles || [];
	self.checkpoints = config.checkpoints || [];
	self.currentCheckpoint = 0;
	
	self.player = new Peep(config.player,self);
	self.key = new DoorKey(config.key, self);
	self.door = new Door(config.door, self);
	self.clock = new Clock(config.countdown || 120, self);

	self.canvas = config.canvas;
	self.ctx = self.canvas.getContext('2d');
	self.width = self.canvas.width;

	if(self.isIntro){
		self.height = self.canvas.height;
	}else{
		self.height = self.canvas.height - CLOCK_HEIGHT;
	}

	self.pathCanvas = document.createElement("canvas");
	self.pathCanvas.width = self.width;
	self.pathCanvas.height = self.height;
	self.pathContext = self.pathCanvas.getContext('2d');
	self.DRAW_PATH = false;

	self.keyCollected = false;
	
	// 检查点更新逻辑
	self.updateCheckpoints = function(){
		if(self.currentCheckpoint < self.checkpoints.length){
			var cp = self.checkpoints[self.currentCheckpoint];
			var dx = cp.x - self.player.x;
			var dy = cp.y - self.player.y;
			var distance = Math.sqrt(dx*dx + dy*dy);
			if(distance < 40){
				self.currentCheckpoint++;
				createjs.Sound.play("ding");
			}
		}
	};
	
	// 检查是否可以收集钥匙（需要通过所有检查点）
	self.canCollectKey = function(){
		return self.currentCheckpoint >= self.checkpoints.length;
	};
	
	self.update = function(){
		
		self.player.update();
		self.updateCheckpoints();
		self.key.update();

		var output = self.door.update();
		if(self.isIntro){
			STAGE = 1;
		}else{
			if(output=="END_LEVEL"){
				self.ctx.clearRect(0,self.height,self.canvas.width,CLOCK_HEIGHT);
			}else{
				self.clock.update();
			}
			self.recordFrame();
		}

	};

	self.drawPathLastPoint = null;
	self.draw = function(){

		var ctx = self.ctx;

		// BIGGER EVERYTHING
		if(self.isIntro){
			ctx.save();
			var introScale = 1.5;
			ctx.scale(introScale,introScale);
			ctx.translate(-self.width/2,-self.height/2);
			ctx.translate((self.width/2)/introScale,(self.height/2)/introScale);
		}

		// Clear
		if(self.isIntro){
			ctx.clearRect(self.player.x-100,self.player.y-100,200,200);
			ctx.clearRect(self.key.x-100,self.key.y-100,200,200);
			ctx.clearRect(self.door.x-100,self.door.y-100,200,200);
		}else{
			ctx.fillStyle = "#fff";
			ctx.fillRect(0,0,self.width,self.height);
		}

		// Draw shadows
		var objects = [self.player,self.key,self.door];
		for(var i=0;i<objects.length;i++){
			objects[i].drawShadow(ctx);
		}

		// Draw circles (裁剪超出场景的部分)
		ctx.save();
		ctx.beginPath();
		ctx.rect(0, 0, self.width, self.height);
		ctx.clip();
		
		ctx.fillStyle = '#333';
		for(var i=0;i<self.circles.length;i++){
			var c = self.circles[i];
			if(c.invisible) continue;
			ctx.beginPath();
			ctx.arc(c.x, c.y, c.radius, 0, Math.TAU, false);
			ctx.fill();
		}
		ctx.restore();
		
		// Draw current checkpoint as a gold coin (matching key style)
		if(!self.isIntro && self.currentCheckpoint < self.checkpoints.length){
			var cp = self.checkpoints[self.currentCheckpoint];
			
			// 金币阴影
			ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			ctx.beginPath();
			ctx.ellipse(cp.x + 2, cp.y + 18, 14, 5, 0, 0, Math.TAU);
			ctx.fill();
			
			// 金币外圈 - 深金色边框
			ctx.fillStyle = '#B8860B';
			ctx.beginPath();
			ctx.arc(cp.x, cp.y, 16, 0, Math.TAU, false);
			ctx.fill();
			
			// 金币主体 - 金色渐变效果
			var coinGradient = ctx.createRadialGradient(cp.x - 4, cp.y - 4, 0, cp.x, cp.y, 14);
			coinGradient.addColorStop(0, '#FFD700');
			coinGradient.addColorStop(0.7, '#FFC000');
			coinGradient.addColorStop(1, '#DAA520');
			ctx.fillStyle = coinGradient;
			ctx.beginPath();
			ctx.arc(cp.x, cp.y, 14, 0, Math.TAU, false);
			ctx.fill();
			
			// 金币高光
			ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
			ctx.beginPath();
			ctx.ellipse(cp.x - 3, cp.y - 5, 6, 4, -0.4, 0, Math.TAU);
			ctx.fill();
			
			// 金币内圈装饰
			ctx.strokeStyle = '#DAA520';
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.arc(cp.x, cp.y, 10, 0, Math.TAU, false);
			ctx.stroke();
		}

		// Draw Peep, Key, Door in depth
		objects.sort(function(a,b){ return a.y - b.y; });
		for(var i=0;i<objects.length;i++){
			objects[i].draw(ctx);
		}

		// Draw path?
		if(self.DRAW_PATH){
			ctx.drawImage(self.pathCanvas,0,0);

			if(!self.drawPathLastPoint){
				self.drawPathLastPoint = {
					x: self.player.x-0.1,
					y: self.player.y
				};
			}

			var pctx = self.pathContext;
			pctx.beginPath();
			pctx.strokeStyle = "#cc2727";
			pctx.lineWidth = 10;
			pctx.lineCap = "round";
			pctx.lineJoin = "round";
			pctx.moveTo(self.drawPathLastPoint.x, self.drawPathLastPoint.y);
			pctx.lineTo(self.player.x, self.player.y);
			pctx.stroke();
	
			self.drawPathLastPoint = {
				x: self.player.x,
				y: self.player.y
			};

		}

		// CLOCK
		if(self.isIntro){
		}else{
			ctx.fillStyle = "#e0e0e0";
			ctx.fillRect(0,self.height,self.canvas.width,CLOCK_HEIGHT);
			if(!self.NO_CLOCK) self.clock.draw(ctx);
		}

		// BIGGER EVERYTHING
		if(self.isIntro){
			ctx.restore();
		}

	};

	self.frames = [];
	self.recordFrame = function(){
		
		var frame = {
			player:{
				x: self.player.x,
				y: self.player.y,
				sway: self.player.sway,
				bounce: self.player.bounce,
				frame: self.player.frame,
				direction: self.player.direction
			},
			key:{
				hover: self.key.hover
			},
			door:{
				frame: self.door.frame
			},
			keyCollected: self.keyCollected,
			currentCheckpoint: self.currentCheckpoint
		};

		self.frames.push(frame);

	}

	var lastCollected = false;
	self.playbackFrame = function(frameIndex){

		var frame = self.frames[frameIndex];

		self.player.x = frame.player.x;
		self.player.y = frame.player.y;
		self.player.sway = frame.player.sway;
		self.player.bounce = frame.player.bounce;
		self.player.frame = frame.player.frame;
		self.player.direction = frame.player.direction;

		self.key.hover = frame.key.hover;
		self.door.frame = frame.door.frame;

		self.keyCollected = frame.keyCollected;
		self.currentCheckpoint = frame.currentCheckpoint || 0;
		
		if(self.keyCollected && !lastCollected && STAGE==3){
			createjs.Sound.play("unlock");
		}
		lastCollected = self.keyCollected;

		self.NO_CLOCK = true;
		self.draw();

	}

	self.clear = function(){
		var ctx = self.ctx;
		ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
	}

	self.onlyPath = function(){
		self.clear();
		self.ctx.drawImage(self.pathCanvas,0,0);
	}

}

//////////////

function Clock(countdown,level){

	var self = this;
	self.level = level;
	self.framePerTick = 30/countdown;

	self.update = function(){
		self.frame += self.framePerTick;
		if(self.frame>=30){
			createjs.Sound.play("error");
			reset();
		}
	};

	self.frame = 0;
	self.draw = function(ctx){

		ctx.save();
		ctx.translate(level.width/2,level.height+CLOCK_HEIGHT/2);

		var f = Math.floor(self.frame);
		var sw = 82;
		var sh = 82;
		var sx = (f*sw) % images.clock.width;
		var sy = sh*Math.floor((f*sw)/images.clock.width);
		ctx.drawImage(images.clock, sx,sy,sw,sh, -30,-30,60,60);
		ctx.restore();

	};

}

function DoorKey(config,level){

	var self = this;
	self.level = level;

	self.x = config.x;
	self.y = config.y;

	self.hover = 0;
	self.update = function(){

		if(level.keyCollected) return;

		self.hover += 0.07;

		// 只有通过所有检查点后才能收集钥匙
		if(!level.canCollectKey()) return;

		var dx = self.x-level.player.x;
		var dy = self.y-level.player.y;
		var distance = Math.sqrt(dx*dx + dy*dy);
		if(distance<35){
			level.keyCollected = true;

			createjs.Sound.play("unlock");

		}

	};

	self.draw = function(ctx){

		if(level.keyCollected) return;
		
		// 只有通过所有检查点后才显示钥匙
		if(!level.canCollectKey()) return;

		ctx.save();
		ctx.translate(self.x, self.y-20-Math.sin(self.hover)*5);
		ctx.scale(0.7,0.7);
		ctx.drawImage(images.key,-23,-14,47,28);
		ctx.restore();

	};
	self.drawShadow = function(ctx){

		if(level.keyCollected) return;
		
		// 只有通过所有检查点后才显示钥匙阴影
		if(!level.canCollectKey()) return;

		ctx.save();
		ctx.translate(self.x,self.y);
		ctx.scale(0.7,0.7);

		var scale = 1-Math.sin(self.hover)*0.5;
		ctx.scale(1*scale,0.3*scale);
		ctx.beginPath();
		ctx.arc(0, 0, 15, 0, Math.TAU, false);
		ctx.fillStyle = 'rgba(100,100,100,0.4)';
		ctx.fill();
		ctx.restore();

	};

}

function Door(config,level){

	var self = this;
	self.level = level;

	self.x = config.x;
	self.y = config.y;

	self.update = function(){

		if(level.keyCollected && self.frame<10){
			self.frame += 0.5;
		}

		if(level.keyCollected){
			var dx = self.x-level.player.x;
			var dy = self.y-level.player.y;
			var distance = Math.sqrt(dx*dx/25 + dy*dy);
			if(distance<6){
				if(level.isIntro){
					
					// 隐藏 intro，显示游戏界面
					document.getElementById("screen_one").style.display = "none";
					document.getElementById("screen_two").style.display = "block";

					createjs.Sound.play("ding");

					console.log('Intro complete. LEVEL_CONFIG.length:', LEVEL_CONFIG.length);
					console.log('LEVEL_CONFIG:', LEVEL_CONFIG);
					
					CURRENT_LEVEL = 0;
					var lvl = new Level(LEVEL_CONFIG[CURRENT_LEVEL]);
					levelObjects[CURRENT_LEVEL] = lvl;
					window.level = null;
					setTimeout(function(){
						window.level = lvl;
						console.log('Level 0 started');
					},1200);

					return "END_LEVEL";
				}else{
					next();
					return "END_LEVEL";
				}
			}
		}

	};

	self.frame = 0;
	self.draw = function(ctx){

		ctx.save();
		ctx.translate(self.x,self.y);
		ctx.scale(0.7,0.7);

		var f = Math.floor(self.frame);
		var sw = 68;
		var sh = 96;
		var sx = (f*sw) % images.door.width;
		var sy = sh*Math.floor((f*sw)/images.door.width);
		var dx = -34;
		var dy = -91;
		ctx.drawImage(images.door, sx,sy,sw,sh, dx,dy,sw,sh);
		ctx.restore();

	};
	self.drawShadow = function(ctx){

		ctx.save();
		ctx.translate(self.x,self.y);
		ctx.scale(0.7,0.7);
		ctx.scale(1,0.2);
		ctx.beginPath();
		ctx.arc(0, 0, 30, 0, Math.TAU, false);
		ctx.fillStyle = 'rgba(100,100,100,0.4)';
		ctx.fill();
		ctx.restore();

	};

}

//////////////

function Peep(config,level){

	var self = this;
	self.level = level;

	self.x = config.x;
	self.y = config.y;
	self.vel = {x:0,y:0};
	self.frame = 0;
	self.direction = 1;

	self.update = function(){

		// Keyboard

		var dx = 0;
		var dy = 0;

		if(Key.left) dx-=1;
		if(Key.right) dx+=1;
		if(Key.up) dy-=1;
		if(Key.down) dy+=1;

		var dd = Math.sqrt(dx*dx+dy*dy);
		if(dd>0){
			self.vel.x += (dx/dd) * 2;
			self.vel.y += (dy/dd) * 2;
		}

		if(Key.left) self.direction=-1;
		if(Key.right) self.direction=1;

		if(Key.left || Key.right || Key.up || Key.down){
			//if(self.frame==0) bounce=0.8;
			self.frame++;
			if(self.frame>9) self.frame=1;
		}else{
			if(self.frame>0) self.bounce=0.8;
			self.frame = 0;
		}

		// Velocity

		self.x += self.vel.x;
		self.y += self.vel.y;
		self.vel.x *= 0.7;
		self.vel.y *= 0.7;

		// Dealing with colliding into border
		if(self.x<0) self.x=0;
		if(self.y<0) self.y=0;
		if(self.x>level.width) self.x=level.width;
		if(self.y>level.height) self.y=level.height;

		// Dealing with collision of circles
		// Hit a circle? Figure out how deep, then add that vector away from the circle.

		for(var i=0;i<level.circles.length;i++){

			var circle = level.circles[i];

			// Hit circle?
			var dx = self.x-circle.x;
			var dy = self.y-circle.y;
			var distance = Math.sqrt(dx*dx + dy*dy);
			var overlap = (circle.radius+5) - distance;
			if(overlap>0){
				
				// Yes, I've been hit, by "overlap" pixels.
				// Push me back
				var ux = dx/distance;
				var uy = dy/distance;
				var pushX = ux*overlap;
				var pushY = uy*overlap;
				self.x += pushX;
				self.y += pushY;

			}

		}

		// Bouncy & Sway
		self.sway += swayVel;
		swayVel += ((-self.vel.x*0.08)-self.sway)*0.2;
		swayVel *= 0.9;
		self.bounce += bounceVel;
		bounceVel += (1-self.bounce)*0.2;
		bounceVel *= 0.9;

	};

	self.bounce = 1;
	var bounceVel = 0;
	self.sway = 0;
	var swayVel = 0;
	var bouncy = [0.00, 0.25, 1.00, 0.90, 0.00, 0.00, 0.25, 1.00, 0.90, 0.00];
	self.draw = function(ctx){
		
		var x = self.x;
		var y = self.y;

		// DRAW GOOFY BOUNCY DUDE //
		
		y += -6*bouncy[self.frame];

		if(self.frame==4 || self.frame==9){
			createjs.Sound.play("step",{volume:0.5});
		}

		ctx.save();
		ctx.translate(x,y);
		ctx.scale(0.5,0.5);

		ctx.rotate(self.sway);
		ctx.scale(self.direction,1);///anim.stretch, anim.stretch);
		ctx.scale(1/self.bounce, self.bounce);
		//ctx.rotate(anim.rotate*0.15);
		ctx.drawImage(images.peep,-25,-100,50,100);
		ctx.restore();

	};

	self.drawShadow = function(ctx){

		var x = self.x;
		var y = self.y;

		ctx.save();
		ctx.translate(x,y);
		ctx.scale(0.5,0.5);

		var scale = (3-bouncy[self.frame])/3;
		ctx.scale(1*scale,0.3*scale);
		ctx.beginPath();
		ctx.arc(0, 0, 20, 0, Math.TAU, false);
		ctx.fillStyle = 'rgba(100,100,100,0.4)';
		ctx.fill();
		ctx.restore();

	};

}

//// UPDATE & RENDER ////

window.requestAnimFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback){ window.setTimeout(callback, 1000/60); };

window.onload = function(){

	// 使用 GitHub Raw URL 加载资源（立即生效）
	// 生产环境建议改回 jsDelivr: https://cdn.jsdelivr.net/gh/Mona776/door-game-assets@main/
	var ASSET_BASE_URL = "https://raw.githubusercontent.com/Mona776/door-game-assets/main/";
	
	addAsset("peep", ASSET_BASE_URL + "assets/peep.png");
	addAsset("key", ASSET_BASE_URL + "assets/key.png");
	addAsset("door", ASSET_BASE_URL + "assets/door.png");
	addAsset("clock", ASSET_BASE_URL + "assets/clock.png");

	// 设置音频基础路径（解决 createjs.Sound 路径问题）
	createjs.Sound.alternateExtensions = ["ogg"];
	var audioBasePath = ASSET_BASE_URL + "audio/";
	// 暂时注释音频加载，测试图片是否正常
	// addSound("ding", audioBasePath + "ding.mp3");
	// addSound("rewind", audioBasePath + "rewind.mp3");
	// addSound("jazz", audioBasePath + "jazz.mp3");
	// addSound("step", audioBasePath + "step.mp3");
	// addSound("unlock", audioBasePath + "unlock.mp3");
	// addSound("error", audioBasePath + "error.mp3");

	onLoadAssets(function(){

		window.setTimeout(function(){
			document.getElementById("loading").style.display = "none";
		},300);

	// 初始化选择界面
	initSelectScreen();
	
	// 初始化 Custom Map 按钮
	initCustomMapButtons();
	
	// 检查 URL 中的地图参数
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		var mapData = decryptMapData(hash);
		
		if(mapData && mapData.map) {
			// 从 URL 加载地图
			MESSAGE = mapData.map;
			window.sharedMessage = mapData.msg || null;
			
			// 直接显示 intro 界面
			document.getElementById('screen_one').style.display = 'block';
			generateLevelsFromMessage();
			window.level = new Level(window.INTRO_LEVEL, true);
		} else {
			// URL hash 格式不正确，使用默认地图
			document.getElementById('screen_one').style.display = 'block';
			MESSAGE = 'I♥U';
			generateLevelsFromMessage();
			window.level = new Level(window.INTRO_LEVEL, true);
		}
	} else {
		// 没有 URL hash，显示 intro 界面并开始默认游戏
		document.getElementById('screen_one').style.display = 'block';
		MESSAGE = 'I♥U'; // 使用默认地图
		generateLevelsFromMessage();
		window.level = new Level(window.INTRO_LEVEL, true);
	}

		//////////

		var frameDirty = false;
		function update(){

			if(STAGE==0 || STAGE==1){
				if(level){
					level.update();
					frameDirty = true;
				}
			}else if(STAGE==2||STAGE==3){
				frameDirty = true;
			}

			if(STAGE==3 && !window.HAS_PLAYED_JAZZ){
				var totalLevels = LEVEL_CONFIG.length;
				if(STAGE==3 && CURRENT_LEVEL==Math.floor(totalLevels/2)){
					var framesLeft = 0;
					for(var i=CURRENT_LEVEL; i<totalLevels; i++){
						framesLeft += levelObjects[i].frames.length;
					}
					framesLeft += (rewindLevel.frames.length-rewindFrame);
					if(framesLeft<135){
						window.HAS_PLAYED_JAZZ = true;
						createjs.Sound.play("jazz");
					}
				}
			}

		}
		function render(){

			if(STAGE==0 || STAGE==1){

				if(level){
					level.draw();
				}

				frameDirty = false;

			}else if(STAGE==2){

				rewindLevel.playbackFrame(rewindFrame);
				rewindFrame--;
				if(rewindFrame<0){
					CURRENT_LEVEL--;
					if(CURRENT_LEVEL>=0){
						startRewind();
					}else{
						STAGE = 3;
						CURRENT_LEVEL = 0;
						startPlayback();

						document.getElementById("rewind_text").style.display = 'none';
						document.getElementById("replay_text").style.display = "block";

					}
				}

			}else if(STAGE==3){

				rewindLevel.playbackFrame(rewindFrame);
				rewindFrame++;
				if(rewindFrame>=rewindLevel.frames.length){
					CURRENT_LEVEL++;
					if(CURRENT_LEVEL<LEVEL_CONFIG.length){
						startPlayback();
					}else{

						document.getElementById("replay_text").style.display = "none";
						iHeartYou();
						STAGE = 4;

					}
				}

				frameDirty = false;

			}

		}

		setInterval(update,1000/30);
		(function animloop(){
			requestAnimFrame(animloop);
			if(frameDirty) render();
		})();

	});

};

var STAGE = 0;
// 0 - Intro
// 1 - Play levels in order
// 2 - Rewind levels
// 3 - Replay levels with path
// 4 - I HEART YOU
// 5 - End screen

function next(){
	CURRENT_LEVEL++;
	console.log('next() called, CURRENT_LEVEL:', CURRENT_LEVEL, 'LEVEL_CONFIG.length:', LEVEL_CONFIG.length);
	
	if(CURRENT_LEVEL<LEVEL_CONFIG.length){

		createjs.Sound.play("ding");
		console.log('Starting level', CURRENT_LEVEL);

		var lvl = new Level(LEVEL_CONFIG[CURRENT_LEVEL]);
		levelObjects[CURRENT_LEVEL] = lvl;
		window.level = null;
		setTimeout(function(){
			window.level = lvl;
		},500);

	}else{
		console.log('All levels complete, starting rewind. levelObjects:', levelObjects.length);
		level = null;
		STAGE = 2;
		CURRENT_LEVEL = LEVEL_CONFIG.length - 1;
		startRewind();

		var totalFrames = 0;
		for(var i=0; i<levelObjects.length; i++){
			totalFrames += levelObjects[i].frames.length;
		}
		var totalRewindTime = totalFrames/60;
		var extraTime = 6600 - totalRewindTime*1000;
		if(extraTime<0){
			createjs.Sound.play("rewind");
		}else{
			createjs.Sound.play("rewind","none",0,extraTime);
		}

		document.getElementById("rewind_text").style.display = 'block';

	}
}

function iHeartYou(){
	
	for(var i=0; i<levelObjects.length; i++) {
		levelObjects[i].onlyPath();
	}

	document.getElementById("canvas_container").style.backgroundPosition = "0px -" + (GAME_HEIGHT - 30) + "px";
	document.getElementById("screen_two").style.background = "#000";
	
	var can_cont_text = document.getElementById("canvas_container_text");

	var vtext = document.getElementById("valentines_text");
	vtext.style.display = "block";
	
	// 检查是否有从 URL 加载的消息
	if(window.sharedMessage) {
		vtext.textContent = window.sharedMessage;
	} else if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		var mapData = decryptMapData(hash);
		if(mapData && mapData.msg) {
			vtext.textContent = mapData.msg;
		} else {
			// 兼容旧格式
			try {
				vtext.textContent = decryptString(decodeURIComponent(hash));
			} catch(e) {
				// 如果解密失败，显示默认消息
				var userMessage = MESSAGE.replace(/ /g, '');
				vtext.textContent = "a lovely message from me to you <3 : " + userMessage;
			}
		}
	} else {
		// 显示用户输入的信息
		var userMessage = MESSAGE.replace(/ /g, '');  // 移除空格（换行符）
		vtext.textContent = "a lovely message from me to you <3 : " + userMessage;
	}

	setTimeout(function(){
		vtext.style.letterSpacing = "3px";
	},10);

	// After 9 seconds, swipe down to CREDITS.
	// No replay. Fuck it.
	setTimeout(function(){
		// 隐藏游戏界面，显示结束界面
		document.getElementById("screen_two").style.display = "none";
		document.getElementById("screen_three").style.display = "block";
	},7300);
	setTimeout(function(){
		yourMessage.focus();
	},8500);

}

var rewindFrame = 0;
var rewindLevel = null;
function startRewind(){
	rewindLevel = levelObjects[CURRENT_LEVEL];
	rewindFrame = rewindLevel.frames.length-1;
}
function startPlayback(){
	rewindLevel = levelObjects[CURRENT_LEVEL];
	rewindLevel.DRAW_PATH = true;
	rewindFrame = 0;
}

var levelObjects = [];
var CURRENT_LEVEL = 0;
function reset(){
	var lvl = new Level(LEVEL_CONFIG[CURRENT_LEVEL]);
	levelObjects[CURRENT_LEVEL] = lvl;
	if(window.level) window.level.clear();
	window.level = null;
	setTimeout(function(){
		window.level = lvl;
	},500);
}

///////////////////////////////////////////////////////////////////

// 缓存已转换的轮廓图片
var outlineCache = {};

// 从彩色图片创建白色轮廓版本（只保留边缘轮廓）
function createOutlineImage(img, cacheKey, outlineOnly, thickness) {
	thickness = thickness || 2; // 默认轮廓粗细为2像素
	var fullKey = cacheKey + (outlineOnly ? '_outline_' + thickness : '_fill');
	if (outlineCache[fullKey]) return outlineCache[fullKey];
	
	var tempCanvas = document.createElement('canvas');
	tempCanvas.width = img.width;
	tempCanvas.height = img.height;
	var tempCtx = tempCanvas.getContext('2d');
	
	// 绘制原图
	tempCtx.drawImage(img, 0, 0);
	
	// 获取图像数据
	var imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
	var data = imageData.data;
	var width = tempCanvas.width;
	var height = tempCanvas.height;
	
	if (outlineOnly) {
		// 只保留边缘轮廓 - 检测透明与非透明的边界，支持更粗的轮廓
		var resultData = new Uint8ClampedArray(data.length);
		
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				var i = (y * width + x) * 4;
				var isOpaque = data[i + 3] > 50;
				
				if (isOpaque) {
					// 检查周围 thickness 范围内是否有透明像素
					var isEdge = false;
					for (var dy = -thickness; dy <= thickness && !isEdge; dy++) {
						for (var dx = -thickness; dx <= thickness && !isEdge; dx++) {
							if (dx === 0 && dy === 0) continue;
							var nx = x + dx;
							var ny = y + dy;
							if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
								isEdge = true;
							} else {
								var ni = (ny * width + nx) * 4;
								if (data[ni + 3] <= 50) {
									isEdge = true;
								}
							}
						}
					}
					
					if (isEdge) {
						resultData[i] = 255;     // R
						resultData[i + 1] = 255; // G
						resultData[i + 2] = 255; // B
						resultData[i + 3] = 255; // A - 完全不透明，更清晰
					}
				}
			}
		}
		
		imageData.data.set(resultData);
	} else {
		// 填充模式 - 将所有非透明像素转为白色
		for (var i = 0; i < data.length; i += 4) {
			if (data[i + 3] > 50) {
				data[i] = 255;     // R
				data[i + 1] = 255; // G
				data[i + 2] = 255; // B
				data[i + 3] = 220; // A
			}
		}
	}
	
	tempCtx.putImageData(imageData, 0, 0);
	outlineCache[fullKey] = tempCanvas;
	return tempCanvas;
}

// 辅助函数：计算精灵位置和缩放，确保不超出画布
function clampSpritePosition(x, y, spriteW, spriteH, canvasW, canvasH, anchorX, anchorY) {
	// anchorX, anchorY: 0-1 表示锚点位置（0.5 = 中心）
	var left = x - spriteW * anchorX;
	var top = y - spriteH * anchorY;
	var right = left + spriteW;
	var bottom = top + spriteH;
	
	var scale = 1;
	var newX = x;
	var newY = y;
	
	// 检查是否超出边界，如果超出则缩放
	if (left < 5) {
		newX = 5 + spriteW * anchorX;
	}
	if (right > canvasW - 5) {
		newX = canvasW - 5 - spriteW * (1 - anchorX);
	}
	if (top < 5) {
		newY = 5 + spriteH * anchorY;
	}
	if (bottom > canvasH - 5) {
		newY = canvasH - 5 - spriteH * (1 - anchorY);
	}
	
	// 如果调整后仍然超出，则缩放
	var newLeft = newX - spriteW * anchorX;
	var newRight = newX + spriteW * (1 - anchorX);
	var newTop = newY - spriteH * anchorY;
	var newBottom = newY + spriteH * (1 - anchorY);
	
	if (newLeft < 5 || newRight > canvasW - 5 || newTop < 5 || newBottom > canvasH - 5) {
		var scaleX = (canvasW - 10) / spriteW;
		var scaleY = (canvasH - 10) / spriteH;
		scale = Math.min(scaleX, scaleY, 1);
	}
	
	return { x: newX, y: newY, scale: scale };
}

// 绘制关卡预览背景（仿原版 levels_bg.png 效果）
function drawLevelPreview(canvas, mapData) {
	var ctx = canvas.getContext('2d');
	var gameHeight = canvas.height - CLOCK_HEIGHT;
	
	// 只在游戏区域绘制深灰色背景（时钟区域保持透明）
	ctx.fillStyle = '#4a4a4a';
	ctx.fillRect(0, 0, canvas.width, gameHeight);
	
	// 设置裁剪区域，防止绘制超出游戏区域
	ctx.save();
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, gameHeight);
	ctx.clip();
	
	// 设置描边样式 - 更粗更清晰的线条
	ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
	ctx.lineWidth = 3;
	
	// 绘制圆形障碍物轮廓
	(mapData.circles || []).forEach(function(c) {
		if (c.invisible) return;
		ctx.beginPath();
		ctx.arc(c.x, c.y, c.radius, 0, Math.TAU);
		ctx.stroke();
	});
	
	// 使用游戏已加载的 images 对象
	if (images.door && images.key && images.peep) {
		// 绘制门轮廓
		var doorOutline = createOutlineImage(images.door, 'door', true, 3);
		var doorFrameW = images.door.width / 4;
		var doorFrameH = images.door.height / 3;
		var doorDrawW = doorFrameW * 0.7;
		var doorDrawH = doorFrameH * 0.7;
		var doorPos = clampSpritePosition(mapData.door.x, mapData.door.y, doorDrawW, doorDrawH, canvas.width, gameHeight, 0.5, 1);
		ctx.save();
		ctx.translate(doorPos.x, doorPos.y);
		var doorScale = doorPos.scale;
		ctx.drawImage(doorOutline, 
			doorFrameW, doorFrameH * 2,
			doorFrameW, doorFrameH,
			-doorDrawW * doorScale / 2, -doorDrawH * doorScale,
			doorDrawW * doorScale, doorDrawH * doorScale
		);
		ctx.restore();
		
		// 绘制钥匙轮廓
		var keyOutline = createOutlineImage(images.key, 'key', true, 3);
		var keyBaseScale = 0.7;
		var keyDrawW = keyOutline.width * keyBaseScale;
		var keyDrawH = keyOutline.height * keyBaseScale;
		var keyPos = clampSpritePosition(mapData.key.x, mapData.key.y - 5, keyDrawW, keyDrawH, canvas.width, gameHeight, 0.5, 0.5);
		ctx.save();
		ctx.translate(keyPos.x, keyPos.y);
		var keyScale = keyBaseScale * keyPos.scale;
		ctx.drawImage(keyOutline, 
			-keyOutline.width * keyScale / 2, 
			-keyOutline.height * keyScale / 2,
			keyOutline.width * keyScale,
			keyOutline.height * keyScale
		);
		ctx.restore();
		
		// 绘制玩家轮廓
		var peepOutline = createOutlineImage(images.peep, 'peep', true, 3);
		var peepBaseScale = 0.7;
		var peepDrawW = peepOutline.width * peepBaseScale;
		var peepDrawH = peepOutline.height * peepBaseScale;
		var peepPos = clampSpritePosition(mapData.player.x, mapData.player.y, peepDrawW, peepDrawH, canvas.width, gameHeight, 0.5, 1);
		ctx.save();
		ctx.translate(peepPos.x, peepPos.y);
		var peepScale = peepBaseScale * peepPos.scale;
		ctx.drawImage(peepOutline, 
			-peepOutline.width * peepScale / 2, 
			-peepOutline.height * peepScale,
			peepOutline.width * peepScale,
			peepOutline.height * peepScale
		);
		ctx.restore();
	}
	
	// 恢复裁剪状态
	ctx.restore();
}

// 根据 MESSAGE 动态生成关卡配置
function generateLevelsFromMessage(){
	var container = document.getElementById("canvas_container");
	
	// 清空现有画布
	var existingCanvases = container.querySelectorAll('canvas');
	existingCanvases.forEach(function(c){ c.remove(); });
	
	// 处理 MESSAGE，将各种心形符号统一转换
	var processedMessage = MESSAGE.toUpperCase()
		.replace(/[❤💕💖💗💘💙💚💛💜🖤💝💞💟❣️♡]/g, '♥');
	
	// 空格作为换行符，分割成两行
	var lines = processedMessage.split(' ');
	var firstLineChars = [];
	var secondLineChars = [];
	
	// 处理第一行（使用 Array.from 正确处理 Unicode 字符）
	Array.from(lines[0] || '').forEach(function(char){
		if(LETTER_MAPS[char]) firstLineChars.push(char);
	});
	
	// 处理第二行（如果有）
	if(lines.length > 1 && lines[1]) {
		Array.from(lines[1]).forEach(function(char){
			if(LETTER_MAPS[char]) secondLineChars.push(char);
		});
	}
	
	// 限制每行最多5个
	firstLineChars = firstLineChars.slice(0, 5);
	secondLineChars = secondLineChars.slice(0, 5);
	
	var validChars = firstLineChars.concat(secondLineChars);
	var totalMaps = validChars.length;
	window.LEVEL_CONFIG = [];
	
	console.log('MESSAGE:', MESSAGE);
	console.log('First line:', firstLineChars);
	console.log('Second line:', secondLineChars);
	console.log('Total maps:', totalMaps);
	
	if(totalMaps === 0) return;
	
	// 计算布局参数 - 根据空格分行
	var rows = secondLineChars.length > 0 ? 2 : 1;
	var firstRowCount = firstLineChars.length;
	var secondRowCount = secondLineChars.length;
	var mapsPerRow = Math.max(firstRowCount, secondRowCount); // 较长的那行决定宽度
	
	// 获取可用空间（考虑边距）
	var screenWidth = window.innerWidth - 100;  // 左右边距
	var screenHeight = window.innerHeight - 100; // 上下边距
	
	// 计算缩放比例
	var gap = 15;
	var maxCanvasWidth = (screenWidth - gap * (mapsPerRow - 1)) / mapsPerRow;
	var maxCanvasHeight = (screenHeight - gap * (rows - 1)) / rows;
	
	// 保持宽高比计算缩放
	var scaleByWidth = maxCanvasWidth / CANVAS_WIDTH;
	var scaleByHeight = maxCanvasHeight / CANVAS_HEIGHT;
	var scale = Math.min(scaleByWidth, scaleByHeight, 1); // 不超过原始大小
	scale = Math.max(scale, 0.3); // 最小缩放30%
	
	var scaledWidth = Math.floor(CANVAS_WIDTH * scale);
	var scaledHeight = Math.floor(CANVAS_HEIGHT * scale);
	
	console.log('Scale:', scale, 'Scaled size:', scaledWidth, 'x', scaledHeight);
	console.log('Rows:', rows, 'Maps per row:', mapsPerRow, 'Total:', totalMaps);
	
	// 设置容器尺寸 - 宽度必须足够放一整行
	var containerWidth = mapsPerRow * (scaledWidth + gap);
	container.style.width = containerWidth + 'px';
	container.style.height = 'auto';
	
	// 创建画布
	validChars.slice(0, totalMaps).forEach(function(char, index){
		var mapData = LETTER_MAPS[char];
		
		// 创建画布（使用原始尺寸绘制，然后用CSS缩放显示）
		var canvas = document.createElement('canvas');
		canvas.id = 'canvas_' + (index + 1);
		canvas.width = CANVAS_WIDTH;
		canvas.height = CANVAS_HEIGHT;
		canvas.style.width = scaledWidth + 'px';
		canvas.style.height = scaledHeight + 'px';
		canvas.style.flexShrink = '0';
		
		container.insertBefore(canvas, document.getElementById('valentines_text'));
		
		// 绘制关卡预览背景
		drawLevelPreview(canvas, mapData);
		
		// 创建关卡配置（保存缩放信息）
		var config = {
			canvas: canvas,
			player: { x: mapData.player.x, y: mapData.player.y },
			door: { x: mapData.door.x, y: mapData.door.y },
			key: { x: mapData.key.x, y: mapData.key.y },
			circles: mapData.circles.map(function(c){ return {x:c.x, y:c.y, radius:c.radius, invisible:c.invisible}; }),
			checkpoints: (mapData.checkpoints || []).map(function(cp){ return {x:cp.x, y:cp.y}; }),
			countdown: mapData.countdown || 120,
			displayScale: scale
		};
		
		window.LEVEL_CONFIG.push(config);
	});
	
	console.log('LEVEL_CONFIG.length:', window.LEVEL_CONFIG.length);
}

// Simple XOR encryption (key = 1)
// The only purpose is to obscure it in the hash

function encryptString(string){
	var result = "";
	for(var i=0;i<string.length;i++){
		result += String.fromCharCode(string.charCodeAt(i)^1);
	}
	return result;
}
function decryptString(string){
	return encryptString(string); // it's XOR, duh
}

// 加密地图数据对象
function encryptMapData(mapString, message) {
	var data = { map: mapString };
	if (message) data.msg = message;
	var jsonStr = JSON.stringify(data);
	
	// 先转换为 UTF-8 字节
	var utf8Bytes = unescape(encodeURIComponent(jsonStr));
	// XOR 加密
	var encrypted = encryptString(utf8Bytes);
	// Base64 编码（处理二进制数据）
	return btoa(encrypted);
}

// 解密地图数据对象
function decryptMapData(hash) {
	try {
		// Base64 解码
		var decoded = atob(hash);
		// XOR 解密
		var decrypted = decryptString(decoded);
		// 从 UTF-8 字节转回字符串
		var jsonStr = decodeURIComponent(escape(decrypted));
		return JSON.parse(jsonStr);
	} catch(e) {
		console.error('解密失败:', e);
		return null;
	}
}

// 通用链接生成函数
function generateShareLink(mapString, message) {
	if (!mapString) mapString = 'I♥U';
	
	if (message === null || message === undefined || message === '') {
		if (mapString === 'I♥U') {
			return window.location.origin + window.location.pathname;
		}
		message = null;
	}
	
	var encrypted = encryptMapData(mapString, message);
	return window.location.origin + window.location.pathname + '#' + encrypted;
}

// 通用复制函数（带视觉反馈）
function copyToClipboard(text, buttonElement, successCallback) {
	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(text).then(function() {
			showCopySuccess(buttonElement);
			if (successCallback) successCallback();
		}).catch(function(err) {
			fallbackCopy(text, buttonElement, successCallback);
		});
	} else {
		fallbackCopy(text, buttonElement, successCallback);
	}
}

function fallbackCopy(text, buttonElement, successCallback) {
	var textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.style.position = 'fixed';
	textarea.style.opacity = '0';
	document.body.appendChild(textarea);
	textarea.select();
	
	try {
		document.execCommand('copy');
		showCopySuccess(buttonElement);
		if (successCallback) successCallback();
	} catch (err) {
		alert('复制失败，请手动复制链接');
	}
	
	document.body.removeChild(textarea);
}

function showCopySuccess(buttonElement) {
	var originalText = buttonElement.innerHTML;
	var originalBg = buttonElement.style.background;
	
	buttonElement.innerHTML = '✓';
	buttonElement.style.background = '#4CAF50';
	
	setTimeout(function() {
		buttonElement.innerHTML = originalText;
		buttonElement.style.background = originalBg || '';
	}, 2000);
}

var yourMessage = document.getElementById("your_message");
var yourLink = document.getElementById("your_link");
function linkChangey(){
	var currentMap = MESSAGE.replace(/ /g, ''); // 当前地图
	var customMsg = yourMessage.value;
	
	// 使用统一函数生成链接
	var url = generateShareLink(currentMap, customMsg);
	yourLink.textContent = url;
};
yourMessage.onchange = linkChangey;
yourMessage.oninput = linkChangey;
linkChangey();

// 结束界面复制按钮 - 使用统一函数
var copyEndLinkBtn = document.getElementById('copy_end_link_btn');
if (copyEndLinkBtn) {
	copyEndLinkBtn.addEventListener('click', function() {
		copyToClipboard(yourLink.textContent, copyEndLinkBtn);
	});
}

function socialShare(event,type){

	var link = yourLink.textContent;
	var title = "it's a(door)able";
	var url = "";
	var width = 640;
	var height = 480;

	switch(type){
		case "facebook":
			url += "https://www.facebook.com/sharer.php?u="+encodeURIComponent(link);
			url += "&t="+encodeURIComponent("A lovely message for all my dear friends. This minigame only takes a minute to play, check it out! it's a(door)able --");
			width = 626;
			height = 436;
			break;
		case "twitter":
			url += "https://twitter.com/share?url="+encodeURIComponent(link);
			url += "&text="+encodeURIComponent("A lovely message for all my dear followers, in this 1-min minigame. http://pic.twitter.com/DK5vnPzEVn"); // add twitter pic.
			url += "&via=ncasenmare";
			width = 640;
			height = 400;
			break;
		case "plus":
			url += "https://plus.google.com/share?url="+encodeURIComponent(link);
			width = 600;
			height = 460;
			break;
		case "tumblr":
			url += "https://www.tumblr.com/share/link?url="+encodeURIComponent(link);
			url += "&name="+encodeURIComponent("it's a(door)able");
			url += "&description="+encodeURIComponent("A lovely message for all my dear followers, in this 1-min minigame.");
			width = 446;
			height = 430;
			break;
		case "reddit":
			window.open('http://www.reddit.com/submit?v=5&amp;noui&amp;jump=close&amp;url='+encodeURIComponent(link)+'&amp;title='+encodeURIComponent("it's a(door)able: a one-minute minigame"), "reddit",'toolbar=no,width=700,height=550');
			return false;
			break;
		case "stumbleupon":
			url += "http://www.stumbleupon.com/submit?url="+encodeURIComponent(link);
			break;
	}

	return sharePopup.call(this,event,{
		href: url,
		width: width,
		height: height
	});

}


///////////////////////////////////////////////////////////////////


var introCanvas = document.getElementById("canvas_intro");
introCanvas.width = window.innerWidth;
introCanvas.height = window.innerHeight;
var cx = window.innerWidth/2;
var cy = window.innerHeight/2;

window.INTRO_LEVEL = {

	canvas:document.getElementById("canvas_intro"),
	player:{ x:cx-150, y:cy-30 },
	door:{ x:cx+150, y:cy-30 },
	key:{ x:cx, y:cy+125 },
	circles: [
		{x:cx,y:cy,radius:120,invisible:true}
	],
	checkpoints: []

};

// LEVEL_CONFIG will be generated dynamically from MESSAGE by generateLevelsFromMessage()

// ==================== 选择界面逻辑 ====================
var gameStarted = false;

function initSelectScreen() {
	var messageInput = document.getElementById('message_input');
	var charButtons = document.querySelectorAll('.char_btn');
	var startBtn = document.getElementById('start_game_btn');
	var clearBtn = document.getElementById('clear_btn');
	var hasLineBreak = false; // 是否已经换行
	
	// 步骤切换元素
	var step1 = document.getElementById('step_1');
	var step2 = document.getElementById('step_2');
	var stepIndicators = document.querySelectorAll('.step');
	var nextStepBtn = document.getElementById('next_step_btn');
	var prevStepBtn = document.getElementById('prev_step_btn');
	var selectedMapDisplay = document.getElementById('selected_map_display');
	var customMessageInput = document.getElementById('custom_message_input');
	var currentStep = 1;
	
	// 切换到步骤2
	nextStepBtn.addEventListener('click', function() {
		var inputValue = messageInput.value.trim();
		var mapString = inputValue.length === 0 ? 'I♥U' : inputValue;
		
		// 更新选中的地图显示
		selectedMapDisplay.textContent = mapString;
		
		// 切换步骤
		step1.classList.remove('active');
		step2.classList.add('active');
		stepIndicators[0].classList.remove('active');
		stepIndicators[1].classList.add('active');
		currentStep = 2;
		
		// 隐藏分享链接容器（如果之前显示了）
		document.getElementById('share_link_container').style.display = 'none';
	});
	
	// 返回到步骤1
	prevStepBtn.addEventListener('click', function() {
		step2.classList.remove('active');
		step1.classList.add('active');
		stepIndicators[1].classList.remove('active');
		stepIndicators[0].classList.add('active');
		currentStep = 1;
		
		// 隐藏分享链接容器
		document.getElementById('share_link_container').style.display = 'none';
	});
	
	// 点击字符按钮添加字符
	charButtons.forEach(function(btn) {
		btn.addEventListener('click', function() {
			var char = this.getAttribute('data-char');
			var currentValue = messageInput.value;
			
			// 跳过空格按钮（换行改用回车键）
			if (char === ' ') return;
			
			// 验证字符是否有对应的地图
			var upperChar = char.toUpperCase();
			if (!LETTER_MAPS[upperChar]) {
				alert('字符 "' + char + '" 没有对应的地图！');
				return;
			}
			
		// 计算当前行的字符数
		var lines = currentValue.split('\n');
		var currentLine = lines[lines.length - 1] || '';
		
		// 每行最多5个字符
		if (currentLine.length >= 5) {
			alert('每行最多输入5个字符！');
			return;
		}
			
			messageInput.value += char;
		});
	});
	
	// 删除按钮（退格）
	var backspaceBtn = document.getElementById('backspace_btn');
	backspaceBtn.addEventListener('click', function() {
		var currentValue = messageInput.value;
		if (currentValue.length > 0) {
			var lastChar = currentValue.slice(-1);
			messageInput.value = currentValue.slice(0, -1);
			// 如果删除的是换行符，重置换行标志
			if (lastChar === '\n') {
				hasLineBreak = false;
			}
		}
	});
	
	// 换行按钮
	var newlineBtn = document.getElementById('newline_btn');
	newlineBtn.addEventListener('click', function() {
		var currentValue = messageInput.value;
		
		// 如果已经换过行，不允许再换
		if (hasLineBreak || currentValue.indexOf('\n') !== -1) {
			alert('最多只能换行一次！');
			return;
		}
		
		// 如果第一行没有内容，不允许换行
		if (currentValue.trim().length === 0) {
			alert('请先输入第一行内容！');
			return;
		}
		
		// 如果第一行已经有5个字符，可以换行
		messageInput.value += '\n';
		hasLineBreak = true;
	});
	
	// 清空按钮
	clearBtn.addEventListener('click', function() {
		messageInput.value = '';
		hasLineBreak = false;
	});
	
	// 禁止键盘输入，防止任何按键
	messageInput.addEventListener('keydown', function(e) {
		e.preventDefault();
	});
	
	messageInput.addEventListener('keypress', function(e) {
		e.preventDefault();
	});
	
	messageInput.addEventListener('input', function(e) {
		// 如果内容发生变化（可能通过粘贴等方式），恢复到之前的值
		// 这样可以确保只能通过按钮输入
	});
	
	// 生成分享链接按钮
	var generateLinkBtn = document.getElementById('generate_link_btn');
	var shareLinkContainer = document.getElementById('share_link_container');
	var shareLinkInput = document.getElementById('share_link_input');
	
	generateLinkBtn.addEventListener('click', function() {
		// 在步骤2中，使用显示的地图和输入的留言
		var mapString = selectedMapDisplay.textContent;
		var customMessage = customMessageInput.value.trim();
		var message = customMessage.length > 0 ? customMessage : null;
		
		// 使用统一函数生成 URL（包含地图和留言）
		var url = generateShareLink(mapString, message);
		
		// 显示链接
		shareLinkInput.value = url;
		shareLinkContainer.style.display = 'block';
		shareLinkInput.select();
	});
	
	// 点击输入框自动选中
	shareLinkInput.addEventListener('click', function() {
		this.select();
	});
	
	// 复制按钮 - 使用统一函数
	var copyLinkBtn = document.getElementById('copy_link_btn');
	copyLinkBtn.addEventListener('click', function() {
		copyToClipboard(shareLinkInput.value, copyLinkBtn);
	});
	
	// 保存地图按钮
	var saveMapBtn = document.getElementById('save_map_btn');
	saveMapBtn.addEventListener('click', function() {
		var mapString = selectedMapDisplay.textContent;
		var customMessage = customMessageInput.value.trim();
		
		// 保存地图和留言到 localStorage
		try {
			var saveData = {
				map: mapString,
				message: customMessage || ''
			};
			localStorage.setItem('savedMapData', JSON.stringify(saveData));
			alert('保存成功！\n\n地图：' + mapString + (customMessage ? '\n留言：' + customMessage : ''));
		} catch (e) {
			alert('保存失败：' + e.message);
		}
		
		// 返回到之前的界面
		backToPreviousScreen();
	});
	
	// 开始游戏按钮（步骤1）
	startBtn.addEventListener('click', function() {
		var inputValue = messageInput.value.trim();
		
		// 如果没有输入，使用默认地图 "I♥U"（三张地图，不换行）
		if (inputValue.length === 0) {
			MESSAGE = 'I♥U';
			startGameFromSelect();
			return;
		}
		
		// 验证字符是否都有效
		var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\n♥';
		var upperInput = inputValue.toUpperCase()
			.replace(/[❤💕💖💗💘💙💚💛💜🖤💝💞💟❣️♡]/g, '♥');
		
		for (var i = 0; i < upperInput.length; i++) {
			if (validChars.indexOf(upperInput[i]) === -1) {
				alert('包含不支持的字符: ' + inputValue[i]);
				return;
			}
		}
		
		// 将换行符转换为空格（用于 generateLevelsFromMessage）
		MESSAGE = upperInput.replace(/\n/g, ' ');
		startGameFromSelect();
	});
	
	// 开始游戏按钮（步骤2）
	var startGameStep2Btn = document.getElementById('start_game_step2_btn');
	startGameStep2Btn.addEventListener('click', function() {
		var mapString = selectedMapDisplay.textContent;
		
		// 验证地图字符
		var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ♥';
		for (var i = 0; i < mapString.length; i++) {
			if (validChars.indexOf(mapString[i]) === -1) {
				alert('地图包含无效字符');
				return;
			}
		}
		
		// 设置 MESSAGE 并开始游戏
		MESSAGE = mapString;
		startGameFromSelect();
	});
}

function startGameFromSelect() {
	if (gameStarted) return;
	gameStarted = true;
	
	// 隐藏选择界面，显示 intro 界面
	document.getElementById('screen_select').style.display = 'none';
	document.getElementById('screen_one').style.display = 'block';
	
	// 生成关卡
	generateLevelsFromMessage();
	
	// 开始 intro 关卡
	window.level = new Level(window.INTRO_LEVEL, true);
}

function initCustomMapButtons() {
	// Intro 界面的 Custom Map 按钮
	var customMapBtnIntro = document.getElementById('custom_map_btn_intro');
	if (customMapBtnIntro) {
		customMapBtnIntro.addEventListener('click', function() {
			showSelectScreen();
		});
	}
	
	// 结束界面的 Custom Map 按钮
	var customMapBtnEnd = document.getElementById('custom_map_btn_end');
	if (customMapBtnEnd) {
		customMapBtnEnd.addEventListener('click', function() {
			showSelectScreen();
		});
	}
}

function showSelectScreen() {
	// 显示选择界面
	var selectScreen = document.getElementById('screen_select');
	selectScreen.style.display = 'flex';
	
	// 隐藏其他界面
	document.getElementById('screen_one').style.display = 'none';
	document.getElementById('screen_three').style.display = 'none';
	
	// 重置游戏状态，允许重新开始
	gameStarted = false;
}
