import bg1Image from "~assets/bg-1.png";
import bg2Image from "~assets/bg-2.png";
import bg3Image from "~assets/bg-3.png";
import bg4Image from "~assets/bg-4.png";
import { BgImage, CtaLink, InfoBox, SectionContainer } from "~components/shared";
import "./styles.scss";
import {
    AboutUsList,
    KeyFeaturesList,
    NewsletterForm,
    PartnersList,
    ServicesList,
    TestimonialCarousel,
    TopDestinationList,
    TourPackagesList,
    TravelPointList
} from "~components/layout";

export function Main() {
    return (
        <main className="main">
            <SectionContainer heroSectionLayout horizontalContentOnLargeScreen toggleContentPositionOnLargeScreen>
                <BgImage src={bg1Image} alt="Background" />
                <InfoBox
                    size="sm"
                    leftLayoutOnLargeScreen
                    subtitle="EXPLORE THE WORLD!"
                    title="Dare to live the life you've always wanted."
                    description="Life is short and the world is wide. So, better get started."
                    content={
                        <>
                            <CtaLink text="Get Started" />
                            <CtaLink alternative text="Learn More" />
                        </>
                    }
                />
            </SectionContainer>
            <SectionContainer id="partners">
                <InfoBox subtitle="PARTNERS" />
                <PartnersList />
            </SectionContainer>
            <SectionContainer id="about-us" horizontalContentOnLargeScreen toggleContentPositionOnLargeScreen>
                <InfoBox
                    size="md"
                    leftLayoutOnLargeScreen
                    subtitle="ABOUT US"
                    title="Our tour plan is to fulfil your dream wish"
                    description="Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication."
                    content={<AboutUsList />}
                />
                <BgImage src={bg2Image} alt="Background" />
            </SectionContainer>
            <SectionContainer id="services">
                <InfoBox
                    subtitle="SERVICES"
                    title="Why book with Nomad"
                    description="Nomad takes care of everything so you can make the most of your trip."
                />
                <ServicesList />
            </SectionContainer>
            <SectionContainer id="top-destination">
                <InfoBox subtitle="TOP DESTINATION" title="Explore top destination" />
                <TopDestinationList />
            </SectionContainer>
            <SectionContainer id="tour-packages">
                <InfoBox subtitle="TOUR PACKAGES" title="The amazing places around the world" />
                <TourPackagesList />
            </SectionContainer>
            <SectionContainer id="travel-point" horizontalContentOnLargeScreen>
                <BgImage src={bg3Image} alt="Background" />
                <InfoBox
                    size="lg"
                    leftLayoutOnLargeScreen
                    subtitle="TRAVEL POINT"
                    title="We help you find your dream destination"
                    description="Explore the amazing destinations around the globe! From paradise beaches to majestic mountains, each place offers unique experiences and unforgettable memories. Your next adventure starts here!"
                    content={<TravelPointList />}
                />
            </SectionContainer>
            <SectionContainer id="key-features" horizontalContentOnLargeScreen toggleContentPositionOnLargeScreen>
                <BgImage src={bg4Image} alt="Background" />
                <InfoBox
                    size="sm"
                    leftLayoutOnLargeScreen
                    subtitle="KEY FEATURES"
                    title="We offer best services"
                    description="We provide personalized itineraries, expert advice, and 24/7 support to ensure your travels are seamless and enjoyable."
                    content={<KeyFeaturesList />}
                />
            </SectionContainer>
            <SectionContainer id="testimonial">
                <InfoBox subtitle="TESTIMONIAL" title="Satisfied travellers around the world" />
                <TestimonialCarousel />
            </SectionContainer>
            <SectionContainer id="newsletter" horizontalContentOnLargeScreen>
                <InfoBox
                    leftLayoutOnLargeScreen
                    subtitle="SUBSCRIBE TO OUR NEWSLETTER"
                    title="Prepare you self and let’s explore the beautiful of the world"
                />
                <NewsletterForm />
            </SectionContainer>
        </main>
    );
}
