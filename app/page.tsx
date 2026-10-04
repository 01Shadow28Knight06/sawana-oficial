import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { ProblemSolution } from '@/components/ProblemSolution';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#09090B] overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}