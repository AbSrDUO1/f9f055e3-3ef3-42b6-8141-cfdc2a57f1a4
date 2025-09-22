"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';
import { LucideDollarSign, LucideBarChart } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Mvpblocks"
          leftButtonText="Menu"
          rightButtonText="Contact"
          onLeftButtonClick={() => console.log('Clicked Menu')}
          onRightButtonClick={() => console.log('Clicked Contact')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Mvpblocks!" subtitle="Your solution for efficient SaaS management"/>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About Our Services" descriptions={["Innovative tools for your business", "Seamless integration with existing systems", "24/7 support team"]}/>
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Register an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },{ title: "Step 2", description: "Select your package", image: "/images/placeholder2.avif", position: "center", isCenter: true },{ title: "Step 3", description: "Make your payment", image: "/images/placeholder3.avif", position: "right", isCenter: false }]}/>
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="Tokenomics Overview" description="Understanding our tokens is key!" kpiItems={[{ value: "1M", description: "Total Supply", icon: LucideDollarSign }, { value: "250K", description: "Market Cap", icon: LucideBarChart }]}/>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ items={[{ title: "What is Mvpblocks?", content: "A comprehensive SaaS management platform." },{ title: "How does it work?", content: "Simply log in and integrate with your tools!" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Mvpblocks"
          logoText="Mvpblocks"
          items={[{ label: "Privacy Policy", onClick: () => console.log('Clicked Privacy') }, { label: "Terms of Service", onClick: () => console.log('Clicked Terms') }, { label: "Contact Us", onClick: () => console.log('Clicked Contact')}]} />
      </div>
    </SiteThemeProvider>
  );
}