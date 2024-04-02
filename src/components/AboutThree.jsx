import React, { useEffect } from 'react';
import * as THREE from 'three';

const VisionSection = () => {
    useEffect(() => {
        // Three.js code for creating 3D scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('vision-canvas').appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);
        
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.getElementById('vision-canvas').removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-purple-700 mb-2">Vision of CodeCafe</h2>
                <p className="text-lg text-gray-600">Empowering Developers Worldwide</p>
            </div>
            <div className="flex justify-center">
                <div id="vision-canvas" style={{ width: '600px', height: '400px', backgroundColor: 'transparent' }}></div>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-700">
                    "The vision of CodeCafe is to become the ultimate destination for developers worldwide, aiming to establish itself as the largest tech community platform where programmers from all corners of the globe can gather, connect, and engage. We envision CodeCafe as a vibrant hub where individuals come together to share knowledge, collaborate on projects, and forge meaningful relationships. Our mission is not only to provide comprehensive resources for learning and growth but also to foster a sense of belonging and camaraderie within the tech community. By uniting programmers worldwide, we aspire to create a legacy of innovation, empowerment, and collective success at CodeCafe."
                </p>
            </div>
        </div>
    );
}

export default VisionSection;
