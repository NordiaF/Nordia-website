import Image from "next/image";
import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";
import snapShot1 from "@/asset/images/snapShot1.webp";
import snapShot2 from "@/asset/images/snapShot2.webp";
import infoIcon from "@/asset/icons/infoIcon.svg";
import calenderIcon from "@/asset/icons/calenderIcon.svg";
import ActionTiles from "@/components/actionTiles";
import CardGrid from "@/components/cardGrid";

import whiteFinanceIcon from "@/asset/icons/whiteFinanceIcon.svg";
import educationIcon from "@/asset/icons/educationIcon.svg";
import energyIcon from "@/asset/icons/energyIcon.svg";
import whiteHealthIcon from "@/asset/icons/whiteHealthIcon.svg";
import handShakeIcon from "@/asset/icons/handShakeIcon.svg";
import informIcon from "@/asset/icons/informIcon.svg";
import inspireIcon from "@/asset/icons/inspireIcon.svg";
import transformIcon from "@/asset/icons/transformIcon.svg";
import ApproachSection from "@/components/approachSection";
import ImpactSnapshotSection from "@/components/impactSnapshotSection";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const WhatWeDoScreen = () => {
  const focusAreas = [
    {
      title: <Typography.H3>Health</Typography.H3>,
      description:
        "We tackle health misinformation through campaigns, partnerships, and community outreach. Our goal is to ensure that families have access to truthful, life-saving information that empowers them to make sound health decisions.",
      icon: whiteHealthIcon,
      bg: "#1A4598",
      cta: "Join Our Health Awareness Campaigns",
      href: "#",
    },
    {
      title: <Typography.H3>Finance</Typography.H3>,
      description:
        "We believe financial literacy creates freedom. Nordia provides fact-based financial education to help individuals make wiser money decisions and achieve independence.",
      icon: whiteFinanceIcon,
      bg: "#549FD7",
      cta: "Support Financial Literacy",
      href: "#",
    },
    {
      title: <Typography.H3 className="text-black">Education</Typography.H3>,
      description:
        "We champion evidence-based learning and critical thinking. Our initiatives promote clarity, curiosity, and informed learning — the foundation for true transformation.",
      icon: educationIcon,
      bg: "#F6BA63",
      textColor: "black",
      cta: "Sponsor a Student or School Program",
      href: "#",
    },
    {
      title: <Typography.H3 className="text-black">Energy</Typography.H3>,
      description:
        "We simplify the science of sustainable energy through storytelling and awareness campaigns. We make renewable energy knowledge accessible to everyone.",
      icon: energyIcon,
      bg: "#FAA629",
      textColor: "black",
      cta: "Learn About Our Energy Projects",
      href: "#",
    },
  ];

  return (
    <div>
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-center w-full leading-tight">
          Our Work
        </Typography.H1>
      </div>
      <div className="flex flex-col items-center mt-16 space-y-10">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          What We Do
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          At Nordia Foundation, we use knowledge as a tool for transformation.
          Our programs turn truth into action helping people live healthier,
          think critically, and make informed choices that shape their future.
          Through campaigns, community outreaches, and partnerships, we address
          misinformation in health, finance, education, and energy, making
          verified information accessible to everyone.
        </Typography.BigText>

        <div className="w-full flex justify-center">
          <PrimaryButton
            className="w-full sm:w-[60%] bg-[#F6BA63]"
            href="/events-and-outreaches"
          >
            Explore Our Programs
          </PrimaryButton>
        </div>
      </div>
      <div className="mt-16">
        <ApproachSection
          heading="Our Approach"
          description="We combine research, storytelling, and community engagement to inspire action and awareness. Every program we run is built on three principles:"
          items={[
            {
              icon: (
                <Image
                  src={informIcon}
                  alt="inform-img"
                  width={51}
                  height={51}
                />
              ),
              title: "Inform",
              description: "Share verified, evidence-based information.",
            },
            {
              icon: (
                <Image
                  src={inspireIcon}
                  alt="inform-img"
                  width={51}
                  height={51}
                />
              ),
              title: "Transform",
              description:
                "Empower people to think critically and believe in their potential.",
            },
            {
              icon: (
                <Image
                  src={transformIcon}
                  alt="inform-img"
                  width={51}
                  height={51}
                />
              ),
              title: "Sustain",
              description: "Drive real-world change that improves lives.",
            },
          ]}
          // ctaText="Partner With Us"
          // ctaHref="/support"
        />
      </div>

      <div className="flex flex-col items-center space-y-5 mt-16">
        <Typography.H1 className="text-center  md:w-[55%] leading-tight">
          Our Four Pillars of Impact
        </Typography.H1>
        <div>
          <CardGrid cards={focusAreas} />
        </div>
      </div>

      <div className="mt-16">
        <ImpactSnapshotSection
          title="Impact Snapshot: Blissful Secondary School Outreach"
          quote="At Nordia, Impact Means Connection. Real People, Real Stories, Real Change."
          description={
            <Typography.Text className="mt-4 text-white/95 text-[14px] sm:text-[24px] leading-relaxed">
              We had the joy of visiting Blissful Secondary School, where
              laughter, learning, and light filled the day. Together with
              students, we explored lessons that go beyond textbook: how to
              manage time, build resilience, speak with confidence, and see
              themselves as changemakers. Before we left, we supported three
              exceptional students with tuition support — our way of saying:
              &quot;We believe in you. Keep going.&quot;
            </Typography.Text>
          }
          buttonText="See More Stories of Impact"
          buttonHref="/events-and-outreaches"
          image1={snapShot1}
          image2={snapShot2}
        />
      </div>

      <div className="flex flex-col items-center space-y-5 mt-16">
        <Typography.BigText className="text-center md:text-[24px] md:w-[55%]">
          Be part of something bigger where your voice, time, or donation
          becomes a light for others.
        </Typography.BigText>
      </div>
      <ActionTiles
        items={[
          {
            label: "Learn About Us",
            href: "/about",
            Icon: (
              <Image
                src={infoIcon}
                alt="white-info-img"
                width={60}
                height={60}
              />
            ),
            variant: "primary",
          },
          {
            label: "Attend An Outreach",
            href: "/events-and-outreaches",
            Icon: (
              <Image
                src={calenderIcon}
                alt="calender-img"
                width={60}
                height={60}
              />
            ),
            variant: "accent",
          },
          {
            label: "Volunteer With Us",
            href: "https://forms.gle/kLSgC1Z3eEicvfRQA",
            target: true,
            Icon: (
              <Image
                src={handShakeIcon}
                alt="white-moneyStand-img"
                width={60}
                height={60}
              />
            ),
            variant: "primary",
          },
        ]}
      />
    </div>
  );
};

export default WhatWeDoScreen;
