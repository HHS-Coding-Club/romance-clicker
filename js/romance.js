const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const game = new CanvasGame(canvas);

const sprites = {
    pyra: {
        src: 'assets/img/pyra.png',
        image: new Image(),
        width: 100,
        height: 100,
        x: 100,
        y: 100
    }
};

game.setSize(800, 600);

function callUpdate()
{
    game.update((ctx) => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, game.width, game.height);
    
        game.drawSprite(sprites.pyra);
    });
}

function init()
{
    printInfo('Initializing game...');

    for (const key in sprites) {
        if (Object.hasOwnProperty.call(sprites, key)) {
            const sprite = sprites[key];
            sprite.image.src = sprite.src;
        }
    }

    callUpdate();
}

init();