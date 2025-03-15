import { AboutUs } from "./aboutus";
import { Blog } from "./blog";
import { Hero } from "./hero";
import { HowSendbypassWorks } from "./how-sendbypass-works";
import { Opportunities } from "./opportunities";
import { YourBelongings } from "./your-belongings";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className="space-y-80 md:py-64">
        <AboutUs />
        <Opportunities />
        <HowSendbypassWorks />
        <YourBelongings />
        <Blog />
      </div>
    </div>
  );
};
