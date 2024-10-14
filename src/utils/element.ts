import bookIcon from "~assets/book.svg";
import calendarIcon from "~assets/calendar.svg";
import cardIcon from "~assets/card.svg";
import emilyJohnsonImage from "~assets/emily-johnson.jpg";
import jamesMillerImage from "~assets/james-miller.jpg";
import mapIcon from "~assets/map.svg";
import newYorkImage from "~assets/new-york.png";
import package1Image from "~assets/package-1.png";
import package2Image from "~assets/package-2.png";
import package3Image from "~assets/package-3.png";
import package4Image from "~assets/package-4.png";
import parisImage from "~assets/paris.jpg";
import partnerLogo1Image from "~assets/partner-logo-1.png";
import partnerLogo2Image from "~assets/partner-logo-2.png";
import partnerLogo3Image from "~assets/partner-logo-3.png";
import partnerLogo4Image from "~assets/partner-logo-4.png";
import partnerLogo5Image from "~assets/partner-logo-5.png";
import rioDeJaneiroImage from "~assets/rio-de-janeiro.png";
import rollingSuitcaseIcon from "~assets/rolling-suitcase.svg";
import sarahWilliamsImage from "~assets/sarah-williams.jpg";
import ticketIcon from "~assets/ticket.svg";

export const navbarItems = [
    {
        href: "#about-us",
        title: "About Us"
    },
    {
        href: "#services",
        title: "Services"
    },
    {
        href: "#top-destination",
        title: "Top Destination"
    },
    {
        href: "#tour-packages",
        title: "Tour Packages"
    },
    {
        href: "#testimonial",
        title: "Testimonial"
    },
    {
        href: "#newsletter",
        title: "Newsletter"
    }
];

export const partnersListItems = [
    partnerLogo1Image,
    partnerLogo2Image,
    partnerLogo3Image,
    partnerLogo4Image,
    partnerLogo5Image
];

export const aboutListItems = [
    {
        title: "15",
        description: "Years of Experience"
    },
    {
        title: "1k",
        description: "Sucessful Trips"
    },
    {
        title: "20k",
        description: "Happy Customers"
    },
    {
        title: "4.7",
        description: "Overall Rating"
    }
];

export const serviceListItems = [
    {
        icon: rollingSuitcaseIcon,
        title: "All You Need",
        description:
            "We offer all the products you need for your journey, from flights to accommodations and attractions."
    },
    {
        icon: bookIcon,
        title: "Flexible Booking",
        description: "Make your travel planning easier with flexible options to adjust your bookings as needed."
    },
    {
        icon: cardIcon,
        title: "Secure Payment",
        description: "Pay securely using our trusted and protected payment methods."
    }
];

export const topDestinationListItems = [
    {
        image: parisImage,
        name: "Paris",
        country: "France"
    },
    {
        image: newYorkImage,
        name: "New York",
        country: "EUA"
    },
    {
        image: rioDeJaneiroImage,
        name: "Rio de Janeiro",
        country: "Brazil"
    }
];

export const tourPackagesListItems = [
    {
        image: package1Image,
        location: "Prague, Czechia",
        rating: 4.9,
        price: 200,
        days: 10
    },
    {
        image: package2Image,
        location: "Beijing, China",
        rating: 4.2,
        price: 450,
        days: 5
    },
    {
        image: package3Image,
        location: "İstanbul, Turkey",
        rating: 3.9,
        price: 150,
        days: 7
    },
    {
        image: package4Image,
        location: "Paris, France",
        rating: 4.6,
        price: 100,
        days: 10
    }
];

export const travelPointListItems = [
    {
        title: "200+",
        description: "Holiday Package"
    },
    {
        title: "450",
        description: "RedDoorz"
    },
    {
        title: "10",
        description: "Premium Airlines"
    },
    {
        title: "12k+",
        description: "Happy Customer"
    }
];

export const keyFeaturesItems = [
    {
        icon: mapIcon,
        title: "Select many location",
        text: "Chooce your favorite location"
    },
    {
        icon: calendarIcon,
        title: "Schedule your trip",
        text: "Set the date you want"
    },
    {
        icon: ticketIcon,
        title: "Big discount",
        text: "Get discount for every services"
    }
];

export const testimonialsItems = [
    {
        image: emilyJohnsonImage,
        name: "Emily Johnson",
        testimonial:
            "My trip to the Maldives was simply amazing! Everything was perfectly planned, and I could relax without any worries. I can't wait to travel again!"
    },
    {
        image: jamesMillerImage,
        name: "James Miller",
        testimonial:
            "The adventure in Patagonia was the most exciting experience of my life. The agency took care of every detail, and I felt completely safe during the entire trip."
    },
    {
        image: sarahWilliamsImage,
        name: "Sarah Williams",
        testimonial:
            "Traveling through Europe with my family was unforgettable. The guides were super attentive and knew every corner of the cities. We're already planning our next trip!"
    }
];

export const footerItems = {
    about: ["Contact Us", "Help Center", "Carreer"],
    products: ["Flights", "Hotels", "Trains", "Villas"],
    other: ["Blog", "Privacy Notice"]
};
