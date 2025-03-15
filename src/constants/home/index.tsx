import { PRIVATE_ROUTES } from "../routes";

export const DESKTOP_TABS = [
  {
    label: "Request to Passengers",
    value: "request-to-passengers",
    icon: "plane take off",
  },
  {
    label: "Start to Shop",
    value: "start-to-shop",
    icon: "Shopping bag remove",
  },
  {
    label: "Start to Ship",
    value: "start-to-ship",
    icon: "Delivery",
  },
];

export const MOBILE_TABS = [
  {
    label: "Passengers",
    value: "request-to-passengers",
    icon: "",
  },
  {
    label: "Shopping",
    value: "start-to-shop",
    icon: "",
  },
  {
    label: "Shipping",
    value: "start-to-ship",
    icon: "",
  },
];

export const OPPORTUNITIES = [
  {
    id: 1,
    icon: "plane take off",
    title: "As a Passenger",
    caption: "Earn money and travel for free",
    href: PRIVATE_ROUTES.trips.create,
  },
  {
    id: 2,
    icon: "Shopping bag remove",
    title: "As a Shopper",
    caption: "Buy everything from anywhere",
  },
  {
    id: 3,
    icon: "bag",
    title: "As a Sender",
    caption: "Send your luggage quickly and affordably",
  },
];

export const HOW_SENDBYPASS_WORKS_TABS = [
  {
    label: "As a shopper",
    value: "shopper",
  },
  {
    label: "As a passenger",
    value: "passenger",
  },
  {
    label: "As a sender",
    value: "sender",
  },
];

export const SHOPPER_TAB_CONTENT = [
  {
    id: 1,
    label: "Tell us about your order",
  },
  {
    id: 2,
    label: "Find a passenger and make an offer or wait for them to make offers",
  },
  {
    id: 3,
    label: "Confirm details with your sender or shopper",
  },
];

export const PASSENGER_TAB_CONTENT = [
  {
    id: 1,
    label: "Tell us about your trips",
  },
  {
    id: 2,
    label:
      "Find an order you can deliver from sender or shopper and make an offer or wait for them to make offers",
  },
  {
    id: 3,
    label: "Confirm details with your sender or shopper",
  },
];

export const SENDER_TAB_CONTENT = [
  {
    id: 1,
    label: "Tell us about your trips",
  },
  {
    id: 2,
    label: "Find a passenger and make an offer or wait for them to make offers",
  },
  {
    id: 3,
    label: "Confirm details with your sender or shopper",
  },
];

export const BELONGING_ITEMS = [
  {
    id: 1,
    icon: "Shield done",
    title: "Secure Tracking",
    caption: "Follow your items in real-time with your profile",
  },
  {
    id: 2,
    icon: "Dollar badge",
    title: "Transparent Pricing",
    caption: "Clear rates with no hidden charges or surprises",
  },
  {
    id: 3,
    icon: "Check badge",
    title: "Verified Users",
    caption: "Every are vetted and background-checked",
  },
  {
    id: 4,
    icon: "Money paper",
    title: "Money-Back Promise",
    caption: "100% satisfaction guaranteed or your money back",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "London Heathrow Airport, United Kingdom (LHR)",
    href: "https://sendbypass.com/blog/london-heathrow-airport-united-kingdom-lhr/",
    image:
      "https://sendbypass.com/blog/wp-content/uploads/2025/02/Heathrow-Airport.png",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Denver International Airport, United States (DEN)",
    href: "https://sendbypass.com/blog/denver-international-airport/",
    image:
      "https://sendbypass.com/blog/wp-content/uploads/2025/02/denver-international-airport.webp",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Why Crowdsource Shipment is Necessary in Modern Era",
    href: "https://sendbypass.com/blog/why-crowdsource-shipment-is-necessary-in-modern-era/",
    image:
      "https://sendbypass.com/blog/wp-content/uploads/2025/02/Why-Crowdsource-Shipment-is-Necessary-in-Modern-Era-1.webp",
    readTime: "3 min",
  },
  {
    id: 4,
    title: "Comparison between Different Methods of Shipments: Pros and Cons",
    href: "https://sendbypass.com/blog/comparison-between-different-methods-of-shipments-pros-and-cons/",
    image:
      "https://sendbypass.com/blog/wp-content/uploads/2025/02/Traditional-Courier-Services.webp",
    readTime: "4 min",
  },
];

export const SLIDES_TEXT = [
  <h3
    key={0}
    className={`absolute top-1/4 inset-x-0 -mt-12 z-10 md:top-1/3 md:-mt-[70px] lg:-mt-24 xl:mt-0 text-center max-w-[380px] text-wrap md:max-w-[800px] lg:max-w-fit md:w-full mx-auto text-inverse-on-surface lg:text-nowrap lg:text-start transition-opacity duration-500 text-[18px] font-light md:text-[30px] md:leading-[56px] tracking-[-0.5px]`}
  >
    Need to{" "}
    <span className="text-[18px] font-bold md:text-[30px] md:leading-[56px] tracking-[-0.5px]">
      Send or Shop something?{" "}
    </span>
    Request to Passengers
  </h3>,
  <h3
    key={1}
    className={`absolute top-1/4 inset-x-0 -mt-12 z-10 md:top-1/3 md:-mt-[70px] lg:-mt-24 xl:mt-0 text-center max-w-[380px] text-wrap md:max-w-[800px] lg:max-w-fit md:w-full mx-auto text-inverse-on-surface  lg:text-nowrap lg:text-start transition-opacity duration-500 text-[18px] font-light  md:text-[30px] md:leading-[56px] tracking-[-0.5px]`}
  >
    Want to{" "}
    <span className="text-[18px] font-bold md:text-[30px] md:leading-[56px] tracking-[-0.5px]">
      travel for free by shopping for others?{" "}
    </span>
    Start to Shop{" "}
  </h3>,
  <h3
    key={2}
    className={`absolute top-1/4 inset-x-0 -mt-12 z-10 md:top-1/3 md:-mt-[70px] lg:-mt-24 xl:mt-0 text-center max-w-[380px] text-wrap md:max-w-[800px] lg:max-w-fit md:w-full mx-auto text-inverse-on-surface lg:text-nowrap lg:text-start transition-opacity duration-500 text-[18px] font-light md:text-[30px]  md:leading-[56px] tracking-[-0.5px]`}
  >
    Ready to{" "}
    <span className="text-[18px] font-bold md:text-[30px]  md:leading-[56px] tracking-[-0.5px]">
      earn money while you travel by delivering items?{" "}
    </span>
    Start to Ship{" "}
  </h3>,
];
