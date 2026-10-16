import styles from './SpookyParticles.module.css';

export default function SpookyParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 2}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${Math.random() * 4 + 3}s`,
    color: Math.random() > 0.5 ? '#ff7b00' : '#39ff14',
  }));

  return (
    <div className={styles.container}>
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}