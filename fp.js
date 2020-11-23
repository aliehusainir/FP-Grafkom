var scene = new THREE.Scene();

var w = window.innerWidth;
var h = window.innerHeight;
var camera = new THREE.PerspectiveCamera(35, w/h, 1, 1000);
camera.position.y = 5;
camera.position.z = 40;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor(0xffffff);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.DirectionalLight(0xffffff, 1, 1000);
light.castShadow = true;
light.position.set(20, 20, 20);
scene.add(light);

light.shadowCameraLeft = -20;
light.shadowCameraRight = 20;
light.shadowCameraTop = 20;
light.shadowCameraBottom = -20;

// var geometry = new THREE.PlaneGeometry(2000, 2000);
// var material = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide});
// var ground = new THREE.Mesh(geometry, material);
// ground.rotateX(-Math.PI/2);
// ground.receiveShadow = true;
// scene.add(ground);

var loader = new THREE.GLTFLoader();
var modelArray = new Array();
loader.load('models/pipe.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 5, -5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(5, 5, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 5, 5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(-5, 0, -5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(-5, 0, 5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, -5, -5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(5, -5, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe2.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, -5, 5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 5, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 0, -5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(-5, 0, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(5, 0, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, 0, 5);
        scene.add(model);
        modelArray.push(model);
    }
)

loader.load('models/pipe3.glb',
    function(gltf) {
        var model = gltf.scene;
        model.position.set(0, -5, 0);
        scene.add(model);
        modelArray.push(model);
    }
)

// loader.load('models/pipe.glb',
// 	function(gltf) {
//         var model = gltf.scene;
//         // model.traverse((o) => {
//         //     if (o.isMesh) o.material = new THREE.MeshPhongMaterial();
//         // });
//         model.position.set(0, 0, 0);
// 		scene.add(model);
// 	}
// )

var isSolved = 0;
function solve() {
    var pi = Math.PI;
    modelArray[1].rotation.y = -pi/2;
    modelArray[2].rotation.x = -pi/2;
    modelArray[2].rotation.y = pi/2;
    modelArray[3].rotation.y = -pi/2;
    modelArray[4].rotation.x = -pi/2;
    modelArray[4].rotation.y = pi/2;
    modelArray[5].rotation.x = -pi/2;
    modelArray[5].rotation.y = pi/2;
    modelArray[6].rotation.y = -pi/2;
    modelArray[7].rotation.z = -pi/2;
    modelArray[8].rotation.x = pi/2;
    modelArray[8].rotation.y = -pi/2;
    modelArray[9].rotation.x = pi/2;
    modelArray[9].rotation.z = -pi/2;
    modelArray[11].rotation.x = pi;
    modelArray[12].rotation.z = pi/2;
    modelArray[13].rotation.x = -pi/2;
    modelArray[13].rotation.y = -pi/2;
    modelArray[14].rotation.x = -pi/2;
    modelArray[14].rotation.z = pi/2;
}

var mouse = new THREE.Vector2;
var raycaster = new THREE.Raycaster();
var intersected;

document.addEventListener("mousemove", event => {
  	mouse.x = (event.clientX/w)*2-1;
	mouse.y = -(event.clientY/h)*2+1;
});

var rotationMode = 0;
document.addEventListener("keydown", event => {
    if (event.key == 'X' || event.key == 'x') rotationMode = 0;
    if (event.key == 'Y' || event.key == 'y') rotationMode = 1;
    if (event.key == 'Z' || event.key == 'z') rotationMode = 2;
});

function updateMode(){
    if(rotationMode == 0) document.getElementById("rotationMode").innerHTML = "Rotation Mode: X";
    if(rotationMode == 1) document.getElementById("rotationMode").innerHTML = "Rotation Mode: Y";
    if(rotationMode == 2) document.getElementById("rotationMode").innerHTML = "Rotation Mode: Z";
}

document.addEventListener("click", function() {
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(scene.children, true);
	if (intersects.length){
        console.log(intersects[0]);
        var pi = Math.PI;
        if(rotationMode == 0) intersects[0].object.rotation.x += pi/2;
        if(rotationMode == 1) intersects[0].object.rotation.y += pi/2;
        if(rotationMode == 2) intersects[0].object.rotation.z += pi/2;
	}
});

var r = 191, g = 68, b = 92;
var rr = 0, rg = 0, rb = 0;
function animateBG() {
    var rand = Math.floor(Math.random() * 3);
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
    var colorStr = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    var col = new THREE.Color(colorStr);
    renderer.setClearColor(col);
}

function animate() {
    animateBG();
    updateMode();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // if (isSolved == 0) {
    //     solve();
    //     isSolved = 1;
    // }
}

animate();