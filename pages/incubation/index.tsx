import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-multi-carousel/lib/styles.css";
import Container from "../../components/Container";

import theme from "../../theme";
import Footer from "../../components/Footer";

import Hero from "../../components/Launchpad/Hero";
import Highlights from "../../components/Launchpad/Highlights";
import UpcomingProject from "../../components/Launchpad/UpcomingProject";
import OngoingProject from "../../components/Launchpad/OngoingProject";
import CompletedProject from "../../components/Launchpad/CompletedProject";
import KYCBanner from "../../components/Launchpad/KYCBanner";
import Staking from "../../components/Launchpad/Staking";
import CompletedSales from "../../components/Launchpad/CompletedSales";
import ProjectStories from "../../components/Launchpad/ProjectStories";
import PTabs from "../../components/Launchpad/ProjectTabs";
import Banner from "../../components/Incubation/Banner";
import Whatis from "../../components/Incubation/Whatis";
import RequirementList from "../../components/Incubation/Requirements";
import IncubatedCarousel from "../../components/Incubation/IncubatedCarousel";
import WhyIncubate from "../../components/Incubation/WhyIncubate";
import Partners from "../../components/Launchpad/Partners";
import MentorPartners from "../../components/Incubation/MentorPartners";
import IncubationFaq from "../../components/Incubation/IncubationFaq";

export default function Launchpad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Banner />
        <Whatis />
        <RequirementList />
        <WhyIncubate />
        <IncubatedCarousel />
        <MentorPartners />
        <Partners />
        <IncubationFaq />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
