<template>
  <div>
    <style>
      #canvas1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div
      class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
    >
      <canvas id="canvas1" class="w-full z-2"></canvas>
      <PageHeader />
      <div class="grid grid-cols-8 m-5 p-5 gap-3 z-1">
        <h1 class="col-span-8 col-start-6 text-slate-200 text-4xl z-10">
          Matrix Rain
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatrixRain',
  data: () => ({}),
  mounted() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Procedural Programming
    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.characters =
          'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクス' +
          'ツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴ' +
          'ッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.x = x
        this.y = y
        this.fontSize = fontSize
        this.text = ''
        this.canvasHeight = canvasHeight
      }

      draw(context) {
        this.text = this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        )
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        )
        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.98
        ) {
          this.y = 0
          context.fillStyle = '#A6FF7D'
        } else {
          this.y += 1
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight, fontSize) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.fontSize = fontSize
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.#initialize()
        console.log(this.symbols)
      }

      #initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
        }
      }

      resize(width, height) {
        this.canvasWidth = width
        this.canvasHeight = height
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.#initialize()
      }
    }

    const effect = new Effect(canvas.width, canvas.height, 20)
    const effect2 = new Effect(canvas.width, canvas.height, 20)
    // const effect3 = new Effect(canvas.width, canvas.height, 20);
    let lastTime = 0
    const fps = 20
    const nextFrame = 1000 / fps
    let timer = 0

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime
      lastTime = timeStamp
      if (timer > nextFrame) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.10)'
        ctx.textAlign = 'center'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#0aff0a'
        ctx.font = effect.fontSize + 'px monospace'
        effect.symbols.forEach((symbol) => symbol.draw(ctx))
        effect2.symbols.forEach((symbol) => symbol.draw(ctx))
        // effect3.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0
      } else {
        timer += deltaTime
      }
      requestAnimationFrame(animate)
    }

    animate(0)

    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      effect.resize(canvas.width, canvas.height)
    })
  },
  methods: {},
}
</script>
