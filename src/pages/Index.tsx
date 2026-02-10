import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

import logoBehr from "@/assets/logo-behr.png";
import logoBenjaminMoore from "@/assets/logo-benjamin-moore.png";
import logoAngi from "@/assets/logo-angi.png";
import logoHomeadvisorElite from "@/assets/logo-homeadvisor-elite.png";
import logoBbbAccredited from "@/assets/logo-bbb-accredited.png";

const partnerLogos = [
  { src: logoBehr, alt: "Behr Premium Paints" },
  { src: logoBenjaminMoore, alt: "Benjamin Moore" },
  { name: "Sherwin-Williams", alt: "Sherwin-Williams" },
  { src: logoAngi, alt: "Angi Certified Pro" },
  { src: logoHomeadvisorElite, alt: "HomeAdvisor Elite Service" },
  { src: logoBbbAccredited, alt: "BBB Accredited Business" },
  { name: "Valspar", alt: "Valspar" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogoCloud logos={partnerLogos} />
      <ServicesPreview />
      <ProcessSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
