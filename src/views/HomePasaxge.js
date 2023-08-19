import React from "react";
// import Button from "./button";
// import Header from "./header";

// ASSETS
// import logohorizontal from "../assets/images/logos/adsteak_h_dark.svg";
import heroImg from "../assets/hero.jpg";
import heroCircleShapes from "../assets/images/hero-circle-shapes.svg";
import IconData from "../assets/images/website/features-icons/data.svg";
import IconMore from "../assets/images/website/features-icons/more.svg";
import IconRadpidInterface from "../assets/images/website/features-icons/rapid-interface.svg";
import IconddvanceFilter from "../assets/images/website/features-icons/advance-filter.svg";
import IconInsights from "../assets/images/website/features-icons/insights.svg";
import IconS4Feature01 from "../assets/images/website/features-icons/S4-Feature-01.svg";
import IconS4Feature02 from "../assets/images/website/features-icons/S4-Feature-02.svg";
import IconS4Feature03 from "../assets/images/website/features-icons/S4-Feature-03.svg";
// import { useAuth0 } from "@auth0/auth0-react";
const features = [
  {
    // tagline: "Massive data",
    name: "Audience Demographics",
    description: "Explore the target audience behind some of the most popular ads including gender, ages and interests.",
    icon: IconData,
    // color: "#21D4B0",
  },
  {
    // tagline: "Massive data",
    name: "Country Filters",
    description: "Filter by country, and check the most popular ads in the country you want to sell in.",
    icon: IconddvanceFilter,
    // color: "#3B82F6",
  },
  {
    // tagline: "Massive data",
    name: "Hand Picked Ads",
    description: "Explore some of the best performing ads manually picked by our products reasearch team.",
    icon: IconInsights,
    // color: "#FFBF00",
  }
];

const s4_features = [
  {
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time.",
    icon: IconS4Feature01,
  },
  {
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time.",
    icon: IconS4Feature02,
  },
  {
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time.",
    icon: IconS4Feature03,
  },
];

const key_features = [
  {
    name: "Enhanced basic search",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconddvanceFilter,
  },
  {
    name: "Massive data",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconData,
  },
  {
    name: "Rapid interface",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconRadpidInterface,
  },
  {
    name: "Accurate demographics",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconInsights,
  },
  {
    name: "Rapid interface",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconInsights,
  },
  {
    name: "Big data",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconddvanceFilter,
  },
  {
    name: "More …",
    description:
      "A complete analysis of your competitors advertising strategy and results",
    icon: IconMore,
  },
];

const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function LandingPage() {
  // const { loginWithRedirect } = useAuth0();
  return (
    <>
      {/* <Header logo={logohorizontal} /> */}
      <main className="bg-slate-100">
        <section
          className="pt-[180px] md:pt-[220px] overflow-hidden "
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 11.91%, #F1F5F9 40.16%, #F1F5F9 100%)",
          }}
        >
          <div className="text-center mx-auto mb-8 sm:mb-20 px-4 sm:px-6 lg:px-8">
            <h1 className="hero-headline text-4xl leading-snug font-bold text-gray-900 sm:text-5xl md:text-6xl lg:leading-snug">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">You like steak, we love ads!</span>
              <br />
              <span>Drop your steak, and start spying on ads!</span>
            </h1>
            <p className="mt-5 text-lg mx-auto max-w-xl text-gray-500">
              Thousands of popular posts and ads to keep you on top of your product research game. Sign up for free and start finding your winners!
            </p>
          </div>
          <div className="grid grid-cols-6 max-w-7xl gap-8 mx-auto lg:px-8 px-4 sm:px-6 md:px-0">
            <div className="md:col-span-2 flex-col justify-center items-start pr-10 pt-6 px-4 sm:px-6 lg:px-8 md:flex hidden">
              {/* <img src={logo} alt="" className='h-9 mb-4' /> */}
              <h2 className="text-3xl font-semibold text-gray-900">
                Sign up now and take full advantage
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Discover hundreds of products handpicked by our rocket research team.
              </p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <div className="-mr-48 md:-mr-16 relative lg:m-0 lg:h-full lg:px-0 min-h-[320px] sm:min-h-[360px] lg:min-h-[720px] pr-4 md:pr-0">
                <div className="w-[190px] h-[190px] absolute -top-6 -left-12 bg-[#FFCC33] rounded-full opacity-70 z-0"></div>
                <img
                  src={heroCircleShapes}
                  className="w-[118px] h-[150px] absolute -top-14 right-0 z-0"
                  alt=""
                />
                <img
                  className="w-full rounded-t-xl rounded-r-xl shadow-xl ring-1 ring-black ring-opacity-10 absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none z-[10]"
                  src={heroImg}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16 sm:py-24 lg:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl mx-auto max-w-[786px] font-semibold text-gray-900 sm:text-5xl lg:leading-snug">
              Advanced filters & Settings
            </h2>
            <p className="mt-5 text-lg mx-auto max-w-xl text-gray-500">
              Use our advanced filters to uncover some of best performing ads to help you rock and take your business to the next level.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index}>
                    <img
                      src={feature.icon}
                      alt=""
                      width="60px"
                      className="mx-auto"
                    />
                    <p
                      className={`mt-3 uppercase font-medium text-sm text-[${feature.color}]`}
                      style={{ color: feature.color }}
                    >
                      {feature.tagline}
                    </p>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relativ py-16 sm:py-24 lg:py-24">
          <div className="mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-[786px] text-center">
              <h2 className="text-3xl mx-auto font-semibold text-gray-900 sm:text-5xl lg:leading-snug">
                Simplify everyday business tasks.
              </h2>
              <p className="mt-4 text-lg mx-auto max-w-xl text-gray-500">
                Because you’d probably be a little confused if we suggested you
                complicate your everyday business tasks instead.
              </p>
              <Button loginWithRedirect={loginWithRedirect} children="Try now for Free" className="mt-9 bg-orange-500" />
            </div>
            <div className="mt-12">
              <FeatureTabs />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-12 items-center px-4 gap-8 py-16 sm:py-24 lg:py-24">
            <div className="col-span-1 md:col-span-5">
              <h2 className="text-3xl sm:text-5xl mx-auto max-w-[786px] font-semibold text-gray-900 lg:leading-snug">
                Take inspiration from top marketers
              </h2>
              <p className="mt-5 text-lg mx-auto max-w-xl text-gray-500">
                Discover the marketing strategy behind the success of the best
                players in your niche.
              </p>
              <div className="flex flex-col gap-5 mt-8">
                {s4_features.map((feature, index) => (
                  <div className="flex items-center" key={index}>
                    <img src={feature.icon} alt="" className="mr-4" />
                    <p className="text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <Button loginWithRedirect={loginWithRedirect} children="Try now for FREE" className="mt-9" />
            </div>
            <div className="col-span-1 md:col-span-7">
              <img src={InspirationImg} alt="" />
            </div>
          </div>
        </section>

        <section className="relativ py-16 sm:py-24 lg:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-[786px] text-center">
              <h2 className="text-3xl mx-auto font-semibold text-gray-900 sm:text-5xl lg:leading-snug">
                And even more features
              </h2>
              <p className="mt-4 text-lg mx-auto max-w-xl text-gray-500">
                Because you’d probably be a little confused if we suggested you
                complicate your everyday business tasks instead.
              </p>
            </div>
            <div className="mt-12">
              <div className="flex justify-center flex-wrap gap-5 sm:gap-8">
                {key_features.map((feature, index) => (
                  <div
                    className="rounded-2xl bg-white p-6 sm:max-w-[280px] shadow-lg text-left sm:text-center"
                    key={index}
                  >
                    <div className="flex flex-row items-center mb-2 sm:flex-col sm:mx-auto">
                      <img
                        src={feature.icon}
                        alt=""
                        width="50px"
                        className="mb-0 mr-4 sm:mb-4 sm:mr-0"
                      />
                      <h3 className="text-base font-medium text-gray-900">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-auto max-w-md bg-grey-300" />

        <section className="pt-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[786px] text-center">
              <h2 className="text-3xl mx-auto font-semibold text-gray-900 sm:text-5xl lg:leading-snug">
                E-commerce has no borders, neither does AdSteak
              </h2>
              <p className="mt-4 text-lg mx-auto max-w-xl text-gray-500">
                Find products to launch in all markets, the creative styles that
                resonate best in each country, and launch in new countries with
                the right advertising codes!
              </p>
            </div>
          </div>
          <div className="mt-10 bg-white pb-12 sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-slate-100" />
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-sm font-medium leading-6 text-gray-500">
                        Markets covered by AdSteak
                      </dt>
                      <dd className="order-1 text-5xl font-bold text-orange-500">
                        + 180
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-sm font-medium leading-6 text-gray-500">
                        Analysed ads on all social networks
                      </dt>
                      <dd className="order-1 text-5xl font-bold text-orange-500">
                        + 15M
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-sm font-medium leading-6 text-gray-500">
                        Targeted users by online advertising
                      </dt>
                      <dd className="order-1 text-5xl font-bold text-orange-500">
                        + 2B
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="relativ py-16 sm:py-24 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[786px] text-center">
              <h2 className="text-3xl mx-auto font-semibold text-gray-900 sm:text-5xl lg:leading-snug">
                E-commerce has no borders, neither does AdSteak
              </h2>
              <p className="mt-4 text-lg mx-auto max-w-xl text-gray-500">
                Find products to launch in all markets, the creative styles that
                resonate best in each country, and launch in new countries with
                the right advertising codes!
              </p>
            </div>
            <div className="grid grid-cols-1 max-w-7xl gap-8 md:gap-16 mx-auto mt-12 md:grid-cols-5">
              <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center">
                <div className="relative py-0 md:py-8 align-middle flex">
                  <div className="w-[110px] h-[110px] absolute bottom-0 left-0 md:-left-8 bg-[#FFCC33] rounded-full opacity-70"></div>
                  <img
                    src={heroCircleShapes}
                    className="w-[118px] h-[150px] absolute top-0 right-0 md:-right-8"
                    alt=""
                  />
                  <img
                    className="h-auto mx-auto rounded-3xl border-[#77AF42] shadow-[0px_0px_0px_10px_rgba(255,255,255,1)] z-10"
                    src={ImgTestimonial}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 py-8">
                <blockquote>
                  <div>
                    <img src={ImgTestimonialRate} alt="" />
                    <p className="mt-5 text-lg font-regular italic sm:text-2xl">
                      “I already use this tool for 2 months, and simply for me
                      the best tool on the market today ... Simple and 100%
                      compliant. Congratulations on the excellent work and
                      continue to evolve to help us evolve as well.”
                    </p>
                  </div>
                  <footer className="mt-7">
                    <p className="text-xl font-medium">Judith Black</p>
                    <p className="text-base font-medium text-gray-500">
                      CEO at PureInsights
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:pb-16 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl mx-auto max-w-[786px] font-semibold text-white sm:text-4xl lg:leading-snug">
                    Sign up now and take full advantage.
                  </h2>
                  {/* <p className="mt-4 text-lg leading-6 text-white opacity-80">
                    Here will be a small description that excites the user to
                    click on the button below.
                  </p> */}
                  {/* <button
                    onClick={() =>
                      loginWithRedirect({
                        screen_hint: "signup",
                      })
                    }
                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 shadow hover:bg-indigo-50"
                  >
                    Sign up for Free
                  </button> */}

                </div>
              </div>
              <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 shadow-[0px_0px_0px_10px_rgba(255,255,255,.2)] sm:shadow-[0px_0px_0px_20px_rgba(255,255,255,.2)]"
                  src={heroImg}
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {footerNavigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2022 AdSteak, Inc. All rights reserved.
            </p>
          </div>
        </footer> */}
      </main>
    </>
  );
}
