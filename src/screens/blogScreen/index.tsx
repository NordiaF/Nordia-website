import Image from "next/image";
import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";

import ActionTiles from "@/components/actionTiles";
import infoIcon from "@/asset/icons/infoIcon.svg";
import calenderIcon from "@/asset/icons/calenderIcon.svg";
import handShakeIcon from "@/asset/icons/handShakeIcon.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import NewsletterSection from "@/components/newsletterSection";

const BlogScreen = () => {
  return (
    <div>
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-center w-full leading-tight">
          Blog
        </Typography.H1>
      </div>
      <div className="flex flex-col items-center mt-16 space-y-10">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Let’s Light the Path Together
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          At Nordia Foundation, we believe truth grows stronger when it’s
          shared. We create a space where knowledge, insight, and transformation
          meet. Through storytelling, education, and awareness, we’ll share
          voices, stories, and research that illuminate truth and inspire action
          across health, education, finance, and energy.
        </Typography.BigText>

        <div className="w-[70%] mx-auto space-x-5 space-y-5 sm:space-y-0 sm:flex justify-center">
          <PrimaryButton className="w-full sm:w-[60%] bg-[#F6BA63]" href="/">
            Learn About Our Mission
          </PrimaryButton>
          <PrimaryButton
            className="w-full sm:w-[60%] bg-[#F6BA63]"
            href="/what-we-do"
          >
            See Our Impact in Action
          </PrimaryButton>
        </div>
      </div>

      <div className="mt-16">
        <NewsletterSection />
      </div>

      <div className="flex flex-col items-center mt-16">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Keep Exploring
        </Typography.H2>
      </div>
      <ActionTiles
        items={[
          {
            label: "Learn About Us",
            href: "/work",
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
            label: "Join an Upcoming Event",
            href: "/outreach",
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
            label: "Support Our Mission",
            href: "/donate",
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

export default BlogScreen;
