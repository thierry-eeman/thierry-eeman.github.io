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
        <h1 class="col-span-8 col-start-6 text-slate-200 text-4xl">Bouncing Atoms</h1>
      </div>

      <PageFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BouncingAtoms',
  data: () => ({}),
  mounted() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

// get mouse position
    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height/100) * (canvas.width/100)
    }

    window.addEventListener('mousemove',
      function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
      }
    );

// create particle
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.colorDistance = 0;
      }

      // method to draw individual particles
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#114a3c';
        ctx.fill();

      }

      // Check particle position, mouse position, move particle, draw particle
      update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Check collision detection - mouse position / particle position
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
        this.colorDistance = distance;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

// Create particle array
    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles*2; i++) {
        const size = (Math.random() * 5) + 1;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 5) - 2.5;
        const directionY = (Math.random() * 5) - 2.5;
        const color = '#8c5523';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

// Check if particles are close enough to draw a line between them
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (canvas.width/7) * (canvas.height/7)) {
            if (particlesArray[a].colorDistance < mouse.radius*2) {
              opacityValue = 1 - (distance/20000);
              ctx.strokeStyle = "rgba(252,150,180," + opacityValue/2 + ")";
            } else {
              opacityValue = 1 - (distance/20000);
              ctx.strokeStyle = "rgba(17,74,60," + opacityValue + ")";

            }
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

// animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

// resize event
    window.addEventListener('resize', function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.width/100) * (canvas.height/100));
        init();
      }
    );

// mouse out event
    window.addEventListener('mouseout',
      function() {
        mouse.x = undefined;
        mouse.y = undefined;
      }
    );

    init();
    animate();
  },
  methods: {}
}
</script>

