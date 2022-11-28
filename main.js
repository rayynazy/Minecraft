var canvas = new fabric.Canvas("mycan");

block_image_width = 30;
block_image_height = 30;

player_X = 10;
player_Y = 10;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_Y, left: player_X });
        canvas.add(player_object);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        player_object.set({ top: player_Y, left: player_X });
        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var key_pressed = e.keycode;
    console.log(key_pressed);

    //left

    if (key_pressed == "37") {
        left();
        console.log("left");
    }

    // up
    if (key_pressed == "38") {
        up();
        console.log("up");
    }

    // right

    if (key_pressed == "39") {
        right();
        console.log("right");
    }

    // down

    if (key_pressed == "40") {
        down();
        console.log("down");
    }
    // cloud-c
    if (key_pressed == "67") {
        new_image("cloud.jpg");
        console.log("cloud");
    }
    // dark-green-d
    if (key_pressed == "68") {
        new_image("dark_green.png");
        console.log("dark_green");
    }

    // ground-g
    if (key_pressed == "71") {
        new_image("ground.png");
        console.log("ground");
    }

    // light-green-l
    if (key_pressed == "76") {
        new_image("light_green.png");
        console.log("light_green");
    }

    //roof-r
    if (key_pressed == "82") {
        new_image("roof.jpg");
        console.log("roof");
    }

    //trunk-t
    if (key_pressed == "84") {
        new_image("trunk.jpg");
        console.log("trunk");
    }

    //unique-u
    if (key_pressed == "85") {
        new_image("unique.png");
        console.log("unique");
    }

    //wall-w
    if (key_pressed == "87") {
        new_image("wall.jpg");
        console.log("wall");
    }
    //yellow-wall-y
    if (key_pressed == "89") {
        new_image("yellow_wall.png");
        console.log("yellow_wall");
    }

    //Making blocks bigger
    if (e.shiftKey && key_pressed == "80") {
        console.log("shift+P");
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        block_image_height = block_image_height + 10;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    //Making blocks smaller
    if (e.shiftKey && key_pressed == "79") {
        console.log("shift+o");
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        block_image_height = block_image_height - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

//left
function left() {
    if (player_X >= 0) {
        player_X = player_X - block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("When the left arrow is pressed, X = " + player_X + ", Y =" + player_Y);
        canvas.remove(player_object);
        player_update();
    }

}

//right
function right() {
    if (player_X <= 800) {
        player_X = player_X + block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("When the right arrow is pressed, X = " + player_X + ", Y =" + player_Y);
        canvas.remove(player_object);
        player_update();
    }

}
//up

function up() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_image_height;
        console.log("Block_image_height =" + block_image_height);
        console.log("when up is pressed,X=" + player_X + ", Y=" + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

//down

function down() {
    if (player_Y <= 550) {
        player_Y = player_Y + block_image_height;
        console.log("Block_image_height =" + block_image_height);
        console.log("when down is pressed,X=" + player_X + ", Y=" + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}