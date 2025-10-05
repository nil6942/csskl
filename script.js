// Warhammer 40k Inspired 3D Portfolio
// Author: Nilabh Deka

class Portfolio3D {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.clock = new THREE.Clock();
        this.particles = [];
        this.energyFields = [];
        this.currentSection = 'hero';
        this.isLoaded = false;
        
        this.init();
    }

    init() {
        this.setupLoading();
        this.setup3DScene();
        this.setupParticleSystem();
        this.setupNavigation();
        this.setupAudio();
        this.animate();
    }

    setupLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.querySelector('.loading-progress');
        const percentage = document.querySelector('.loading-percentage');
        
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            percentage.textContent = Math.floor(progress) + '%';
            
            if (progress >= 100) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                        this.isLoaded = true;
                    }, 500);
                }, 500);
            }
        }, 100);
    }

    setup3DScene() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x0a0a0a, 50, 200);

        // Camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 5, 10);

        // Renderer with performance optimizations
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('canvas3d'),
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;

        // Lighting
        this.setupLighting();

        // Create 3D Environment
        this.createEnvironment();

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.5;

        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(ambientLight);

        // Directional light (main)
        const directionalLight = new THREE.DirectionalLight(0xFFD700, 1);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);

        // Point lights for atmosphere
        const pointLight1 = new THREE.PointLight(0x00BFFF, 0.8, 50);
        pointLight1.position.set(-10, 5, 0);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xDC143C, 0.6, 30);
        pointLight2.position.set(10, 3, -5);
        this.scene.add(pointLight2);

        // Spot light for dramatic effect
        const spotLight = new THREE.SpotLight(0xFFD700, 1, 100, Math.PI / 6, 0.3);
        spotLight.position.set(0, 20, 0);
        spotLight.target.position.set(0, 0, 0);
        this.scene.add(spotLight);
        this.scene.add(spotLight.target);
    }

    createEnvironment() {
        // Create a futuristic cityscape background
        this.createCityscape();
        
        // Create floating geometric shapes
        this.createFloatingShapes();
        
        // Create energy fields
        this.createEnergyFields();
        
        // Create atmospheric particles
        this.createAtmosphericParticles();
    }

    createCityscape() {
        const cityGroup = new THREE.Group();
        
        // Create building-like structures
        for (let i = 0; i < 20; i++) {
            const building = this.createBuilding();
            building.position.set(
                (Math.random() - 0.5) * 100,
                -5,
                (Math.random() - 0.5) * 100
            );
            cityGroup.add(building);
        }
        
        this.scene.add(cityGroup);
    }

    createBuilding() {
        const group = new THREE.Group();
        
        // Main structure
        const geometry = new THREE.BoxGeometry(
            2 + Math.random() * 3,
            5 + Math.random() * 15,
            2 + Math.random() * 3
        );
        const material = new THREE.MeshLambertMaterial({
            color: 0x1a1a1a,
            transparent: true,
            opacity: 0.8
        });
        const building = new THREE.Mesh(geometry, material);
        building.castShadow = true;
        building.receiveShadow = true;
        group.add(building);
        
        // Add glowing windows
        for (let i = 0; i < 5; i++) {
            const windowGeometry = new THREE.PlaneGeometry(0.2, 0.3);
            const windowMaterial = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? 0xFFD700 : 0x00BFFF,
                transparent: true,
                opacity: 0.8
            });
            const window = new THREE.Mesh(windowGeometry, windowMaterial);
            window.position.set(
                building.geometry.parameters.width / 2 + 0.01,
                -building.geometry.parameters.height / 2 + (i + 1) * (building.geometry.parameters.height / 6),
                0
            );
            group.add(window);
        }
        
        return group;
    }

    createFloatingShapes() {
        const shapesGroup = new THREE.Group();
        
        // Create various geometric shapes
        const shapes = [
            { type: 'octahedron', color: 0xFFD700 },
            { type: 'tetrahedron', color: 0x00BFFF },
            { type: 'dodecahedron', color: 0xDC143C },
            { type: 'icosahedron', color: 0x32CD32 }
        ];
        
        shapes.forEach((shapeData, index) => {
            let geometry;
            switch (shapeData.type) {
                case 'octahedron':
                    geometry = new THREE.OctahedronGeometry(1);
                    break;
                case 'tetrahedron':
                    geometry = new THREE.TetrahedronGeometry(1);
                    break;
                case 'dodecahedron':
                    geometry = new THREE.DodecahedronGeometry(1);
                    break;
                case 'icosahedron':
                    geometry = new THREE.IcosahedronGeometry(1);
                    break;
            }
            
            const material = new THREE.MeshPhongMaterial({
                color: shapeData.color,
                transparent: true,
                opacity: 0.7,
                shininess: 100
            });
            
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                Math.random() * 10 + 5,
                (Math.random() - 0.5) * 20
            );
            
            // Add rotation animation
            mesh.userData = {
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                }
            };
            
            shapesGroup.add(mesh);
        });
        
        this.scene.add(shapesGroup);
        this.floatingShapes = shapesGroup;
    }

    createEnergyFields() {
        // Create energy field rings
        for (let i = 0; i < 3; i++) {
            const ringGeometry = new THREE.RingGeometry(5 + i * 3, 6 + i * 3, 32);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xFFD700,
                transparent: true,
                opacity: 0.3,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.position.y = 2 + i * 2;
            ring.rotation.x = Math.PI / 2;
            
            ring.userData = {
                rotationSpeed: 0.01 + i * 0.005
            };
            
            this.energyFields.push(ring);
            this.scene.add(ring);
        }
    }

    createAtmosphericParticles() {
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Positions
            positions[i3] = (Math.random() - 0.5) * 200;
            positions[i3 + 1] = Math.random() * 50;
            positions[i3 + 2] = (Math.random() - 0.5) * 200;
            
            // Colors (gold, blue, red)
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
                colors[i3] = 1; // R
                colors[i3 + 1] = 0.84; // G
                colors[i3 + 2] = 0; // B (Gold)
            } else if (colorChoice < 0.7) {
                colors[i3] = 0; // R
                colors[i3 + 1] = 0.75; // G
                colors[i3 + 2] = 1; // B (Blue)
            } else {
                colors[i3] = 0.86; // R
                colors[i3 + 1] = 0.08; // G
                colors[i3 + 2] = 0.24; // B (Red)
            }
            
            // Sizes
            sizes[i] = Math.random() * 2 + 1;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
    }

    setupParticleSystem() {
        // Create additional particle effects
        this.createEnergyParticles();
        this.createSmokeEffect();
    }

    createEnergyParticles() {
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 10;
            positions[i3 + 1] = Math.random() * 5;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;
            
            velocities[i3] = (Math.random() - 0.5) * 0.02;
            velocities[i3 + 1] = Math.random() * 0.02;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            color: 0xFFD700,
            size: 3,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        this.energyParticles = new THREE.Points(geometry, material);
        this.energyParticles.userData = { velocities };
        this.scene.add(this.energyParticles);
    }

    createSmokeEffect() {
        // Create smoke-like particles
        const smokeGeometry = new THREE.BufferGeometry();
        const smokeCount = 50;
        const positions = new Float32Array(smokeCount * 3);
        
        for (let i = 0; i < smokeCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = -5 + Math.random() * 10;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;
        }
        
        smokeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const smokeMaterial = new THREE.PointsMaterial({
            color: 0x666666,
            size: 5,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        
        this.smokeParticles = new THREE.Points(smokeGeometry, smokeMaterial);
        this.scene.add(this.smokeParticles);
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                this.switchSection(targetSection);
            });
        });
        
        // Add smooth scrolling effect
        this.setupSmoothScrolling();
    }

    switchSection(sectionName) {
        // Hide current section
        const currentSection = document.querySelector('.section.active');
        if (currentSection) {
            currentSection.classList.remove('active');
        }
        
        // Show new section
        const newSection = document.getElementById(sectionName);
        if (newSection) {
            newSection.classList.add('active');
        }
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
        
        this.currentSection = sectionName;
        
        // Update camera position based on section
        this.updateCameraForSection(sectionName);
    }

    updateCameraForSection(sectionName) {
        const cameraPositions = {
            'hero': { x: 0, y: 5, z: 10 },
            'about': { x: -5, y: 3, z: 8 },
            'skills': { x: 5, y: 4, z: 7 },
            'projects': { x: 0, y: 6, z: 12 },
            'contact': { x: 0, y: 2, z: 15 }
        };
        
        const targetPosition = cameraPositions[sectionName];
        if (targetPosition) {
            this.animateCameraTo(targetPosition);
        }
    }

    animateCameraTo(targetPosition) {
        const startPosition = this.camera.position.clone();
        const duration = 1000; // 1 second
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            this.camera.position.lerpVectors(startPosition, new THREE.Vector3(
                targetPosition.x,
                targetPosition.y,
                targetPosition.z
            ), easeProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }

    setupSmoothScrolling() {
        // Add parallax effect to floating shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            if (this.floatingShapes) {
                this.floatingShapes.rotation.y = parallax * 0.01;
            }
        });
    }

    setupAudio() {
        const audioToggle = document.getElementById('audio-toggle');
        let isAudioEnabled = false;
        
        // Create audio context for atmospheric sounds
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        audioToggle.addEventListener('click', () => {
            if (!isAudioEnabled) {
                this.startAtmosphericAudio();
                audioToggle.textContent = '🔊';
                isAudioEnabled = true;
            } else {
                this.stopAtmosphericAudio();
                audioToggle.textContent = '🔇';
                isAudioEnabled = false;
            }
        });
    }

    startAtmosphericAudio() {
        // Create a low-frequency drone
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 2);
        
        oscillator.start();
        this.audioOscillator = oscillator;
    }

    stopAtmosphericAudio() {
        if (this.audioOscillator) {
            this.audioOscillator.stop();
            this.audioOscillator = null;
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (!this.isLoaded) return;
        
        const elapsedTime = this.clock.getElapsedTime();
        const deltaTime = this.clock.getDelta();
        
        // Update controls
        this.controls.update();
        
        // Performance monitoring
        if (this.frameCount % 60 === 0) {
            this.monitorPerformance();
        }
        this.frameCount = (this.frameCount || 0) + 1;
        
        // Animate floating shapes
        if (this.floatingShapes) {
            this.floatingShapes.children.forEach(shape => {
                if (shape.userData.rotationSpeed) {
                    shape.rotation.x += shape.userData.rotationSpeed.x;
                    shape.rotation.y += shape.userData.rotationSpeed.y;
                    shape.rotation.z += shape.userData.rotationSpeed.z;
                }
            });
        }
        
        // Animate energy fields
        this.energyFields.forEach((field, index) => {
            field.rotation.z += field.userData.rotationSpeed;
        });
        
        // Animate particle systems
        if (this.particleSystem) {
            this.particleSystem.rotation.y += 0.001;
        }
        
        // Animate energy particles
        if (this.energyParticles) {
            const positions = this.energyParticles.geometry.attributes.position.array;
            const velocities = this.energyParticles.userData.velocities;
            
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += velocities[i];
                positions[i + 1] += velocities[i + 1];
                positions[i + 2] += velocities[i + 2];
                
                // Reset particles that go too far
                if (positions[i + 1] > 20) {
                    positions[i + 1] = -5;
                    positions[i] = (Math.random() - 0.5) * 10;
                    positions[i + 2] = (Math.random() - 0.5) * 10;
                }
            }
            
            this.energyParticles.geometry.attributes.position.needsUpdate = true;
        }
        
        // Animate smoke particles
        if (this.smokeParticles) {
            const positions = this.smokeParticles.geometry.attributes.position.array;
            
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += 0.01;
                positions[i] += (Math.random() - 0.5) * 0.01;
                positions[i + 2] += (Math.random() - 0.5) * 0.01;
                
                // Reset particles that go too high
                if (positions[i + 1] > 15) {
                    positions[i + 1] = -5;
                    positions[i] = (Math.random() - 0.5) * 20;
                    positions[i + 2] = (Math.random() - 0.5) * 20;
                }
            }
            
            this.smokeParticles.geometry.attributes.position.needsUpdate = true;
        }
        
        // Render
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    monitorPerformance() {
        // Simple performance monitoring
        const info = this.renderer.info;
        if (info.render.triangles > 100000) {
            console.warn('High triangle count detected:', info.render.triangles);
        }
    }

    // Cleanup method for better memory management
    dispose() {
        if (this.renderer) {
            this.renderer.dispose();
        }
        if (this.audioContext && this.audioContext.state !== 'closed') {
            this.audioContext.close();
        }
    }
}

// Initialize the portfolio when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio3D();
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Update cursor position
    document.body.style.setProperty('--mouse-x', mouseX);
    document.body.style.setProperty('--mouse-y', mouseY);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const currentIndex = sections.indexOf(document.querySelector('.section.active').id);
    
    switch(e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            e.preventDefault();
            if (currentIndex < sections.length - 1) {
                const portfolio = window.portfolio3D;
                if (portfolio) {
                    portfolio.switchSection(sections[currentIndex + 1]);
                }
            }
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            e.preventDefault();
            if (currentIndex > 0) {
                const portfolio = window.portfolio3D;
                if (portfolio) {
                    portfolio.switchSection(sections[currentIndex - 1]);
                }
            }
            break;
    }
});

// Store portfolio instance globally for keyboard navigation
window.portfolio3D = null;
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio3D = new Portfolio3D();
});