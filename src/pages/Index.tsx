import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <StorySection />
      <ServicesSection />
      <ProductsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
