import { useEffect, useRef, memo } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    fadeDirection: number;
}

export const LightParticles = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configurar tamaño del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Crear partículas
        const createParticles = () => {
            const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
            particles.current = [];
            
            for (let i = 0; i < particleCount; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.3,
                    fadeDirection: Math.random() > 0.5 ? 1 : -1,
                });
            }
        };
        createParticles();

        // Animar partículas
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((particle) => {
                // Actualizar posición
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Rebote en los bordes
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Efecto de parpadeo suave
                particle.opacity += particle.fadeDirection * 0.005;
                if (particle.opacity >= 0.8 || particle.opacity <= 0.2) {
                    particle.fadeDirection *= -1;
                }

                // Dibujar partícula con efecto de resplandor
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 4
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
                gradient.addColorStop(0.5, `rgba(217, 119, 6, ${particle.opacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.4 }}
            aria-hidden="true"
        />
    );
});

LightParticles.displayName = 'LightParticles';
