//Carrage a biblioteca
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

//Cria a cena ou mundo
const scene = new THREE.Scene();
//Cria a camera e define sua perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);

//Rendeniza o objeto 3d
const render = new THREE.WebGLRenderer();
//Recupera largura e altura da minha janela ou tela
render.setSize(window.innerWidth, window.innerHeight);

//Aplicando render no corpo html
document.body.appendChild(render.domElement);

//Cria o cubo 3d
const caixa = new THREE.BoxGeometry(1, 1, 1);

//Carrega textura
const texture = new THREE.TextureLoader().load("VilemFoto.jpg");

//cria material ou imagem texturizado
const material = new THREE.MeshBasicMaterial({map: texture});

//Adicionando cubo 3d
const cube = new THREE.Mesh(caixa, material);

//Adiciona cubo na cena
scene.add(cube);

//des aproxima a camera do cubo
camera.position.z = 3;

function animate() {

    //Cria looping que vai atualizar sua cena constantimente
    requestAnimationFrame(animate);

    //rotaciona o cubo nos eixos x e y
    cube.rotation.x = cube.rotation.x + 0.05;
    cube.rotation.y = cube.rotation.y + 0.05;

    //rendeniza cena ou mundo e camera
    render.render(scene, camera);
}

animate();