const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
scene.add(camera);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#1f1f1f");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const ballGeometry = new THREE.SphereGeometry(1.5, 10, 10);
const wireGeometry = new THREE.SphereGeometry(2, 10, 10);
const capGeometry = new THREE.SphereGeometry(2.1, 15, 15, 0, Math.PI * 1);
const wheelGeometry = new THREE.TorusGeometry(3, 0.4, 10, 100);
const wheelWireGeometry = new THREE.TorusGeometry(3.1, 0.4, 10, 100);

const ballMaterial = new THREE.MeshStandardMaterial({ color: "blue" });
const wireMaterial = new THREE.MeshStandardMaterial({ color: 0x005555, wireframe: true });
const capMaterial = new THREE.MeshStandardMaterial({ color: "#208090" });
const wheelMaterial = new THREE.MeshStandardMaterial({ color: "teal" });
const wheelWireMaterial = new THREE.MeshStandardMaterial({ color: "lime", wireframe: true });

const ball = new THREE.Mesh(ballGeometry, ballMaterial);
const wire = new THREE.Mesh(wireGeometry, wireMaterial);
const cap = new THREE.Mesh(capGeometry, capMaterial);
const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheelWire = new THREE.Mesh(wheelWireGeometry, wheelWireMaterial);

scene.add(ball);
scene.add(wire);
scene.add(cap);
scene.add(wheel);
wheel.add(wheelWire);


const light = new THREE.PointLight({ color: 0xffffff });
const light2 = new THREE.AmbientLight({ color: "#ffffff" });
// light.add(light2);
light.position.set(25, 40, 50);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);


    ball.rotation.x -= 0.02;
    ball.rotation.y -= 0.02;

    wire.rotation.x += 0.01;
    wire.rotation.y += 0.01;

    cap.rotation.y += 0.03;

    wheel.rotation.x += 0.02;
    wheel.rotation.y += 0.01;


    renderer.render(scene, camera);
}
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
animate();