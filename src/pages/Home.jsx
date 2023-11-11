import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components//About';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import PaymentPlans from '../components/PaymentPlans';
import Testimonials from '../components/Testimonials';
import ConsultationSection from '../components/ConsultationSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
    <Header />
    <HeroSection />
    <About />
    <Services />
    <Benefits />
    <PaymentPlans />
    <Testimonials />
    <ConsultationSection />
    <Footer />
  </Box>
  );
};

export default Home;
