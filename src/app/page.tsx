"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="Richtech Logo"
          brandName="Richtech"
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'FAQ', id: 'faq' }, { name: 'Footer', id: 'footer' }]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Richtech"
          subtitle="Your gateway to the next-gen solutions."
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={["Innovative solutions for modern challenges.", "Delivering value through technology.", "Join our community!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Transparent and robust financial ecosystem."
          kpiItems={[{ value: "100M", description: "Total Supply", icon: SomeIcon }, { value: "70M", description: "Market Cap", icon: SomeIcon }]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[{ title: "What is Richtech?", content: "A platform for innovative solutions." }, { title: "How to buy?", content: "Follow the steps in the How to Buy section." }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Richtech Logo"
          logoText="Richtech"
          columns={[{ items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }]}]}
          copyrightText="© 2023 Richtech"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}