import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Breeds from '@/components/Breeds';
import Footer from '@/components/Footer';
import SpookyParticles from '@/components/SpookyParticles';

export default function Home() {
  return (
    <>
      <SpookyParticles />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <Breeds />
        <Footer />
      </main>
    </>
  );
}
