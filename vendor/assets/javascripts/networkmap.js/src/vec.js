networkMap.vec2 = SVG.math.Point;

SVG.math.Point.create = function(x, y){
	return new SVG.math.Point(x, y);
};

SVG.extend(SVG.math.Point, {
	clone: function(){
		return SVG.math.Point.create(this.x, this.y);
	},
	
	add: function(v){
		this.x += v.x;
		this.y += v.y;

		return this;
	},

	sub: function(v){
		this.x -= v.x;
		this.y -= v.y;

		return this;
	},

	distance: function(v){
		var x = v.x - this.x,
		y = v.y - this.y;
		return Math.sqrt(x*x + y*y);
	},

	len: function(){
		var x = this.x,
			y = this.y;
		return Math.sqrt(x*x + y*y);
	},

	normalize: function() {
		
		var x = this.x,
			y = this.y,
			len = x*x + y*y;
			
		if (len > 0) {
			len = 1 / Math.sqrt(len);
			this.x = x * len;
			this.y = y * len;
		}
		return this;
	},
	
	angle: function(){
		var angle = Math.atan2(this.y, this.x);

		while (angle < 0){
			angle += 2 * Math.PI;
		}

		return angle;
	},

	maxDir: function(){
		var x = this.x, 
			y = this.y,
			al0 = Math.abs(x),
			al1 = Math.abs(y);

		if (al0 > al1){
			this.x = x / al0;
			this.y = 0;
		}
		else{
			this.x = 0;
			this.y = y / al1;
		}
		return this;
	},
	
	roundDir: function(snapAngle){
		var angle = this.angle();
		var length = this.len();
		angle = angle - angle % snapAngle;
		
		this.x = length * Math.cos(angle);
		this.y = length * Math.sin(angle);
		
		return this;
	},

	scale: function(s){
		this.x *= s;
		this.y *= s;		

		return this;
	},

	mul: function(v){
		this.x *= v.x;
		this.y *= v.y; 
		
		return this;
	},

	confine: function(v){
		var x = this.x, y = this.y, x2 = v.x, y2 = v.y;

		this.x = (Math.abs(x) < Math.abs(x2)) ? x : x / Math.abs(x)*x2;
		this.y = (Math.abs(y) < Math.abs(y2)) ? y : y / Math.abs(y)*y2;

		return this;
	}
});

/*

networkMap.vec2 = function(x, y){
	this.x = x;
	this.y = y;
};

networkMap.vec2.create = function(x,y){
	return new networkMap.vec2(x,y);	
};

networkMap.extend(networkMap.vec2, {
	clone: function(){
		return networkMap.vec2.create(this.x, this.y);
	},
	
	add: function(v){
		this.x += v.x;
		this.y += v.y;

		return this;
	},

	sub: function(v){
		this.x -= v.x;
		this.y -= v.y;

		return this;
	},

	distance: function(v){
		var x = v.x - this.x,
		y = v.y - this.y;
		return Math.sqrt(x*x + y*y);
	},

	len: function(){
		var x = v.x,
			y = v.y;
		return Math.sqrt(x*x + y*y);
	},

	normalize: function() {
		
		var x = this.x,
			y = this.y,
			len = x*x + y*y;
			
		if (len > 0) {
			len = 1 / Math.sqrt(len);
			this.x = x * len;
			this.y = y * len;
		}
		return this;
	},

	maxDir: function(){
		var x = this.x, 
			y = this.y,
			al0 = Math.abs(x),
			al1 = Math.abs(y);

		if (al0 > al1){
			this.x = x / al0;
			this.y = 0;
		}
		else{
			this.x = 0;
			this.y = y / al1;
		}
		return this;
	},

	scale: function(s){
		this.x *= s;
		this.y *= s;		

		return this;
	},

	mul: function(v){
		this.x *= v.x;
		this.y *= v.y; 
		
		return this;
	},

	confine: function(v){
		var x = this.x, y = this.y, x2 = v.x, y2 = v.y;

		this.x = (Math.abs(x) < Math.abs(x2)) ? x : x / Math.abs(x)*x2;
		this.y = (Math.abs(y) < Math.abs(y2)) ? y : y / Math.abs(y)*y2;

		return this;
	}
});
*/
