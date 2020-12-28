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
let camera = new THREE.PerspectiveCamera(35, w/h, 1, 100);
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

let light = new THREE.DirectionalLight(0xffffff, 1, 1000);
light.castShadow = true;
light.position.set(20, 20, 20);
scene.add(light);

light.shadowCameraLeft = -20;
light.shadowCameraRight = 20;
light.shadowCameraTop = 20;
light.shadowCameraBottom = -20;

let loader = new THREE.GLTFLoader();
let pipesArray = new Array();
loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
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
        model.position.set(5, 5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 5, 0);
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
        model.position.set(5, 5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe4.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 0, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 0, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, 0, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe4.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, 0, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, 0, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, -5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, -5, -5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, -5, 0);
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

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, -5, 0);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe33.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(-5, -5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe32.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        let model = gltf.scene;
        model.position.set(5, -5, 5);
        scene.add(model);
        pipesArray.push(model);
    }
)

let axis = new THREE.AxesHelper(20);
axis.name = 'axis'
scene.add(axis);

// loader.load('models/pipe.glb',
// 	function(gltf) {
//         let model = gltf.scene;
//         // model.traverse((o) => {
//         //     if (o.isMesh) o.material = new THREE.MeshPhongMaterial();
//         // });
//         model.position.set(0, 0, 0);
// 		scene.add(model);
// 	}
// )

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
        if(intersects[0].object.name != 'axis'){
            console.log(intersects[0]);
            let pi = Math.PI;
            if(rotationMode == 0) intersects[0].object.rotateOnWorldAxis(xvec, pi/2);
            if(rotationMode == 1) intersects[0].object.rotateOnWorldAxis(yvec, pi/2);
            if(rotationMode == 2) intersects[0].object.rotateOnWorldAxis(zvec, pi/2);
            moves--;
            document.getElementById('moves').innerHTML = 'Moves: ' + moves;
        }
	}
});

let r = 191, g = 68, b = 92;
let rr = 0, rg = 0, rb = 0;
function animateBG() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0 && rr == 0) r = (r + 1) % 256;
    if (rand == 1 && rg == 0) g = (g + 1) % 256;
    if (rand == 2 && rb == 0) b = (b + 1) % 256;
    if (rand == 0 && rr == 1) r = (r - 1) % 256;
    if (rand == 1 && rg == 1) g = (g - 1) % 256;
    if (rand == 2 && rb == 1) b = (b - 1) % 256;
    if (r == 255) rr = 1;
    if (r == 50) rr = 0;
    if (g == 255) rg = 1;
    if (g == 50) rg = 0;
    if (b == 255) rb = 1;
    if (b == 50) rb = 0;
    let colorStr = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    renderer.setClearColor(colorStr);
}

function setTimer(duration) {
    var start = Date.now(), diff, minutes, seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('time').innerHTML = 'Time: ' + minutes + ':' + seconds; 
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function setMoves(maxMoves){
    moves = maxMoves;
    document.getElementById('moves').innerHTML = 'Moves: ' + moves;
}

function animate() {
    animateBG();
    updateGUI();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

setTimer(180);
setMoves(120);
animate();
displayGUI();