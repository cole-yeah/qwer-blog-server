export class Moon {
  constructor({ x, y, r, ctx }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.beginPath();
    /**
     * x: 圆的中心的 x 坐标
     * y: 圆的中心的 y 坐标
     * r: 圆的半径
     * sAngle: 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）
     * eAngle: 结束角，以弧度计
     * counterclockwise: 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针
     */
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.shadowBlur = this.r + 5;
    this.ctx.shadowColor = "#fff";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.fill();
  }
}

export class Star extends Moon {
  constructor({ x, y, r, ctx, width }) {
    super({ x, y, r, ctx });
    this.width = width;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    this.ctx.fill();
  }
  move() {
    this.x += 0.08;
    if (this.x >= this.width) {
      this.x = 0;
    }
    this.draw();
  }
}
