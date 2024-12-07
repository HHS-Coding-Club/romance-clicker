class CanvasGame {
    canvas = null;
    ctx = null;

    width = 800;    // Default width
    height = 600;   // Default height
    fps = 60;        // Default frames per second

    deltaTime = 0;
    lastUpdateTime = 0;
    currentTime = performance.now();

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update(drawFunction) {
        this.currentTime = performance.now();
        this.deltaTime = this.currentTime - this.lastUpdateTime;

        if (this.deltaTime > 1000 / this.fps) {
            this.clear();
            drawFunction(this.ctx);
            this.lastUpdateTime = this.currentTime;
        }

        requestAnimationFrame(() => this.update(drawFunction));
    }

    drawSprite(sprite)
    {
        this.ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
    }
}