<template>
  <div>
    <style>
      #canvas1 {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen">
      <canvas id="canvas1" class="w-full z-2"></canvas>
      <PageHeader/>
      <div class="grid grid-cols-8 m-5 p-5 gap-3 z-1">
        <h1 class="col-span-8 col-start-6 text-slate-200 text-4xl">Artwork Overview</h1>
      </div>
      <PageFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquigglySquares',
  data: () => ({}),
  mounted() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#FFF5DE';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(0,0,0,.5)'

    let drawing = false;

// ctx.globalCompositeOperation = 'destination-over';

    class Root {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 20;
        // this.size = Math.random() + 2;
        this.size = 0;
        this.sizeVelocity = Math.random() * 0.2 + 0.5;
        this.angleX = Math.random() * 6.2;
        this.angleVelocityX = Math.random() * 0.6 - 0.3;
        this.angleY = Math.random() * 6.2;
        this.angleVelocityY = Math.random() * 0.6 - 0.3;
        this.angle = 0;
        this.angleVelocity = Math.random() * 0.02 + 0.05;
        this.lightness = 10;
      }

      update() {
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.sizeVelocity;
        this.angleX += this.angleVelocityX;
        this.angleY += this.angleVelocityY;
        this.angle += this.angleVelocity;
        if (this.lightness < 70) this.lightness += 0.25;
        if (this.size < this.maxSize) {
          const double = this.size * 2;
          const triple = this.size * 3;
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillRect(0 - this.size/2, 0 - this.size/2, this.size, this.size);
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = '#3C5186';
          ctx.strokeRect(0 - double/2, 0 - double/2, double, double);
          ctx.lineWidth = 0.2;
          ctx.strokeStyle = 'white';
          ctx.strokeRect(0 - triple/2, 0 - triple/2, triple, triple);
          requestAnimationFrame(this.update.bind(this));
          ctx.restore();
        }
      }
    }

    window.addEventListener('mousemove', function(e){
      if (drawing) {
        for (let i = 0; i < 3; i++) {
          const root = new Root(e.x, e.y);
          root.update();
        }
      }
    });

    window.addEventListener('mousedown', function() {
      drawing = true;
    });

    window.addEventListener('mouseup', function() {
      drawing = false;
    });

  },
  methods: {}
}
</script>

