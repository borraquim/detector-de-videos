video ="";
objects = [];
status="";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status !="")
    {
        objectDetector.detector(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objetos Detectados";
            document.getElementById("numberOfObjects").innerHTML = "Quantidade de objeto detectados: "+ objects.length;

            fill("#FF0000");
            percent = floor(objects[i].cofindence * 100);
            text(objects1[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objets[i].x, objects[i].y, objects[i].width, objects.height,)
        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objects";
}

function modelLoaded() {
    console.log("Modelo Carregado!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results) {
    if(error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
}