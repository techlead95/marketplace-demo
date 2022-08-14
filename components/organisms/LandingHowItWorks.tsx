import Button from "components/atoms/Button";
import HowItWorksCard from "components/molecules/HowItWorksCard";

export default function LandingHowItWorks() {
  return (
    <div id="how-it-works" className="relative pt-8 mt-36">
      <img
        src="/images/landing/curve-fill.svg"
        alt=""
        className="absolute top-[20%] xl:top-[23%] 2xl:top-[2%] transform scale-[250%] -translate-x-[10%] z-[-1]"
      />
      <div className="container">
        <h2 className="text-center text-40 font-900">How It Works</h2>
        <div className="flex items-end gap-6 mt-20">
          <HowItWorksCard
            bgImage="/images/landing/how-it-works-1.svg"
            className="max-w-[140px]"
          >
            Sign Up and Input a Listing
          </HowItWorksCard>
          <HowItWorksCard
            bgImage="/images/landing/how-it-works-2.svg"
            className="max-w-[170px]"
          >
            Accept Bookings
          </HowItWorksCard>
          <HowItWorksCard
            bgImage="/images/landing/how-it-works-3.svg"
            className="max-w-[210px]"
          >
            Grow and Manage Your Business The New Way
          </HowItWorksCard>
        </div>
        <div className="flex justify-center mt-14">
          <Button variant="shadowed" size="md">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
}
