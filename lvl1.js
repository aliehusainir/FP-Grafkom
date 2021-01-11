let movesFlag = 0;
let timeFlag = 0;

if(location.href.match(/m=m/)){
    document.getElementById('moves').style.visibility = "visible";
    movesFlag = 1;
}
if(location.href.match(/m=t/)){
    document.getElementById('time').style.visibility = "visible";
    timeFlag = 1;
}

let scene = new THREE.Scene();

let w = window.innerWidth;
let h = window.innerHeight;
let camera = new THREE.PerspectiveCamera(35, w/h, 1, 1000);
camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 40;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor(0xffffff);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));

let light = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
let light2 = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
let light3 = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
let light4 = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
let light5 = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
let light6 = new THREE.DirectionalLight(0xffffff, 0.5, 1000);
light.position.set(1, 0, 0);
light2.position.set(-1, 0, 0);
light3.position.set(0, 1, 0);
light4.position.set(0, -1, 0);
light5.position.set(0, 0, 1);
light6.position.set(0, 0, -1);
scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);
scene.add(light5);
scene.add(light6);

let loader = new THREE.GLTFLoader();
let pipesArray = new Array();

loader.load('models/pipe.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, -5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

let axis = new THREE.AxesHelper(20);
axis.name = 'axis'
scene.add(axis);

let mouse = new THREE.Vector2;
let raycaster = new THREE.Raycaster();
let intersected;

document.addEventListener('mousemove', event => {
  	mouse.x = (event.clientX/w)*2-1;
	mouse.y = -(event.clientY/h)*2+1;
});

let rotationMode = 0;
let parameters = {
    a: 'X',
    b: true
}

let gui = new dat.GUI();
function displayGUI(){
    let val;

    let modeChange = gui.add(parameters, 'a', ['X', 'Y', 'Z']).name('Rotation Mode');
    modeChange.onChange(function(val){
        if (val == 'X') rotationMode = 0;
        if (val == 'Y') rotationMode = 1;
        if (val == 'Z') rotationMode = 2;
    });

    let axisVisibleChange = gui.add(parameters, 'b').name('Show Axis');
    axisVisibleChange.onChange(function(val){
        axis.visible = val;
    });

    gui.open();
}

document.addEventListener('keydown', event => {
    if (event.key == 'X' || event.key == 'x'){
        rotationMode = 0;
        parameters['a'] = 'X';
    }
    if (event.key == 'Y' || event.key == 'y'){
        rotationMode = 1;
        parameters['a'] = 'Y';
    }
    if (event.key == 'Z' || event.key == 'z'){
        rotationMode = 2;
        parameters['a'] = 'Z';
    }
});

function updateGUI(){
    for (let i in gui.__controllers){
        gui.__controllers[i].updateDisplay();
    }
}

let moves = 0;
let xvec = new THREE.Vector3(1, 0, 0);
let yvec = new THREE.Vector3(0, 1, 0);
let zvec = new THREE.Vector3(0, 0, 1);
document.addEventListener('click', function() {
	raycaster.setFromCamera(mouse, camera);
	let intersects = raycaster.intersectObjects(scene.children, true);
	if (intersects.length){
        if(intersects[0].object.name != 'axis' && intersects[0].object.name != 'sphere'){
            console.log(intersects[0]);
            let pi = Math.PI;
            if(rotationMode == 0) intersects[0].object.rotateOnWorldAxis(xvec, pi/2);
            if(rotationMode == 1) intersects[0].object.rotateOnWorldAxis(yvec, pi/2);
            if(rotationMode == 2) intersects[0].object.rotateOnWorldAxis(zvec, pi/2);
            moves--;
            document.getElementById('moves').innerHTML = 'Moves: ' + moves;
            if (movesFlag && moves == 0) window.location.href = "gameover.html";
        }
	}
});

loader = new THREE.TextureLoader();
let texture = new THREE.MeshStandardMaterial({map: loader.load('bg.jpg'), side: THREE.BackSide});

let geometry = new THREE.SphereBufferGeometry(60, 32, 32, 0, 2*Math.PI, 0, Math.PI);
let material = texture;
let sphere = new THREE.Mesh(geometry, material);
sphere.name = 'sphere';
scene.add(sphere);

function setTimer(duration) {
    var start = Date.now(), diff, minutes, seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('time').innerHTML = 'Time: ' + minutes + ':' + seconds; 
        if (timeFlag && diff <= 0) window.location.href = "gameover.html";
    };
    timer();
    setInterval(timer, 1000);
}

function setMoves(maxMoves){
    moves = maxMoves;
    document.getElementById('moves').innerHTML = 'Moves: ' + moves;
}

function animate() {
    updateGUI();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

setTimer(90);
setMoves(60);
animate();
displayGUI();