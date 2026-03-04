import Navbar from "@/components/Navbar";
import HeroHeadline from "@/components/HeroHeadline";
import HeroSection from "@/components/HeroSection";
import GuidedBySection from "@/components/GuidedBySection";
import JoinCommunityHeadline from "@/components/JoinCommunityHeadline";
import DiscoverPotentialSection from "@/components/DiscoverPotentialSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHeadline />
        <HeroSection />
        <GuidedBySection />
        <JoinCommunityHeadline />
        <DiscoverPotentialSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
