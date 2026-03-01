import Image from "next/image";
import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";
import snapShot1 from "@/asset/images/snapShot1.webp";
import healthAwarenessImg from "@/asset/images/healthAwarenessImg.webp";
import financialWorkshop from "@/asset/images/financialWorkshop.webp";
import partnerImg from "@/asset/images/partnerImg.webp";

import ActionTiles from "@/components/actionTiles";
import whiteHeart from "@/asset/icons/whiteHeart.svg";
import moneyStand from "@/asset/icons/moneyStand.svg";
import whiteCalender from "@/asset/icons/whiteCalender.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SplitSection from "@/components/splitSection";

const EventsOutreachScreen = () => {
  const agendas = [
    {
      title: "The Blissful Secondary School Experience",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            A day of learning, laughter, and light. We spent time with students
            exploring lessons on resilience, confidence, and critical thinking.
            They asked bold questions, shared dreams, and reminded us what it
            means to believe in the power of education. <br />
            <br />
            Before leaving, we supported three exceptional students with tuition
            aid a seed of hope and a promise of possibility.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "See More Stories of Impact",
      image: snapShot1,
      imgBgColor: "#1A4598",
    },
    {
      title: "Health Awareness Drives",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            We collaborate with health professionals to counter misinformation
            through verified, life-saving education. From hygiene to nutrition
            and mental health awareness each session helps families make
            healthier choices confidently.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "Join a Health Campaign",
      image: healthAwarenessImg,
      imgBgColor: "#FAA629",
    },
    {
      title: "Financial Literacy Workshops",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            Through engaging and practical sessions, we simplify money
            management, savings, and entrepreneurship. These workshops empower
            youth and women to create sustainable livelihoods and break cycles
            of financial dependence.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "Partner With Us",
      image: financialWorkshop,
      imgBgColor: "#1A4598",
    },
    {
      title: "Partner With Us",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            We help communities understand renewable energy and climate-smart
            practices in simple, relatable ways. By making technical information
            easy to grasp, we empower people to take small, sustainable actions
            every day.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "Learn More About Our Energy Pillar",
      image: partnerImg,
      imgBgColor: "#FAA629",
    },
  ];

  return (
    <div>
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-center w-full leading-tight">
          Events and Outreaches
        </Typography.H1>
      </div>
      <div className="flex flex-col items-center mt-16 space-y-10">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Where Knowledge Meets Action
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          At Nordia Foundation, our outreach programs turn learning into living.
          Each event is a bridge connecting truth to communities, awareness to
          action, and people to purpose. Whether it’s a school visit, health
          campaign, or financial literacy session, our goal is simple: <br />
          <span className="font-[700]">
            To help people see, understand, and act on truth.
          </span>
        </Typography.BigText>

        <div className="w-full flex justify-center">
          <PrimaryButton
            className="w-full sm:w-[60%] bg-[#F6BA63]"
            href="/media"
          >
            Support Our Next Outreach
          </PrimaryButton>
        </div>
      </div>

      <div
        className="bg-primary p-10 w-full flex flex-col items-center mt-10 space-y-3 bg-cover"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="text-white text-center">
          Community Events That Inspire Change
        </Typography.H1>
        <Typography.BigText className="text-white md:text-[18px] font-extralight text-center w-[80%]">
          We believe true impact begins with connection. That’s why Nordia
          partners with schools, organizations, and local leaders to create
          events that enlighten and empower. Here’s a look at some of our
          signature outreach moments
        </Typography.BigText>
      </div>

      <div>
        {agendas.map((el, i) => (
          <SplitSection
            header={el.title}
            body={el.body}
            image={el.image}
            link={el.link}
            linkText={el.linkText}
            reverse={i % 2 !== 0 ? true : false}
            key={i}
            imgBgColor={el.imgBgColor}
          />
        ))}
      </div>

      <div className="flex flex-col items-center space-y-5 mt-16">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Be Part of the Movement
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[55%]">
          There’s always room for another bright mind and willing heart at
          Nordia. Join us in bringing truth, knowledge, and transformation to
          communities that need it most.
        </Typography.BigText>
      </div>
      <ActionTiles
        items={[
          {
            label: "Volunteer With Us",
            href: "/volunteer",
            Icon: (
              <Image
                src={whiteHeart}
                alt="white-heart-img"
                width={60}
                height={60}
              />
            ),
            variant: "primary",
          },
          {
            label: "Donate Now",
            href: "/donate",
            Icon: (
              <Image
                src={moneyStand}
                alt="white-heart-img"
                width={60}
                height={60}
              />
            ),
            variant: "accent",
          },
          {
            label: "Attend An Outreach",
            href: "/outreach",
            Icon: (
              <Image
                src={whiteCalender}
                alt="white-heart-img"
                width={60}
                height={60}
              />
            ),
            variant: "primary",
          },
        ]}
      />
      <div className="flex flex-col items-center mb-16 space-y-5">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
        Moments That Matter
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[55%]">
          Coming soon a gallery of photos and videos from our recent outreach
          programs.
        </Typography.BigText>

        <div className="w-full flex justify-center">
          <PrimaryButton
            className="w-full sm:w-[45%] bg-[#F6BA63]"
            href="/media"
          >
            See Our Work in Action
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default EventsOutreachScreen;
