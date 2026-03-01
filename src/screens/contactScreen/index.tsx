import Image from "next/image";
import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";
import snapShot1 from "@/asset/images/supportMission.webp";
import healthAwarenessImg from "@/asset/images/VisionImg.webp";
import informIcon from "@/asset/icons/informIcon.svg";
import inspireIcon from "@/asset/icons/inspireIcon.svg";
import transformIcon from "@/asset/icons/transformIcon.svg";

import ActionTiles from "@/components/actionTiles";
import infoIcon from "@/asset/icons/infoIcon.svg";
import calenderIcon from "@/asset/icons/calenderIcon.svg";
import handShakeIcon from "@/asset/icons/handShakeIcon.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SplitSection from "@/components/splitSection";
import ApproachSection from "@/components/approachSection";

const ContactScreen = () => {
  const agendas = [
    {
      title: "Support Our Mission",
      body: (
        <>
          <Typography.BigText className="sm:text-[18px]">
            Our donation, no matter the size helps us:
          </Typography.BigText>
          <ul className="pl-7 pt-2 space-y-1 sm:text-[18px] text-[16px]">
            <li className="list-disc">
              Bring verified health education to rural communities
            </li>
            <li className="list-disc">
              Support schools and students with truth-driven learning
            </li>
            <li className="list-disc">
              Empower individuals with financial literacy resources
            </li>
            <li className="list-disc">
              Simplify energy education for sustainable living
            </li>
          </ul>
          <Typography.BigText className="pt-2 sm:text-[18px] text-[16px]">
            Together, we can make truth louder than misinformation.
          </Typography.BigText>
        </>
      ),
      image: snapShot1,
      imgBgColor: "#1A4598",
    },
    {
      title: "Ways to Give",
      body: (
        <>
          <ul className="pl-7 pt-2 space-y-1 sm:text-[18px] text-[16px]">
            <li className="list-disc">One-time or recurring donations</li>
            <li className="list-disc">Sponsor a school outreach</li>
            <li className="list-disc">Support a student or local initiative</li>
            <li className="list-disc">Volunteer your time or expertise</li>
          </ul>
        </>
      ),
      image: healthAwarenessImg,
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
          Contact and Donate
        </Typography.H1>
      </div>
      <div className="flex flex-col items-center mt-16 space-y-10">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Let’s Light the Path Together
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          At Nordia Foundation, we believe truth and knowledge can transform
          lives but we can’t do it alone. Your support helps us reach more
          communities, correct misinformation, and empower people with the
          knowledge that changes lives. Whether you’d like to donate, volunteer,
          partner, or simply learn more, we’d love to hear from you.
        </Typography.BigText>

        <div className=" sm:w-[70%] mx-auto space-x-5 space-y-5 sm:space-y-0 sm:flex justify-center">
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
        <ApproachSection
          heading="Get in Touch"
          description="We’re happy to connect with you anytime!
If you have questions, collaboration ideas, or want to bring Nordia to your community, please reach out:"
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
              title: "Email",
              description: "354656uiuoljhkjghvbnm@ghgjhmnbnvbc",
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
              title: "Send Us a Message",
              description: "134567876y56453rdfhguyty",
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
              title: "Partner With Nordia",
              description: "3456yuyikjhjguytyfvnbmkjliuyutr!@ghb",
            },
          ]}
          ctaText="Partner With Us"
          ctaHref="/support"
        />
      </div>

      <div>
        {agendas.map((el, i) => (
          <SplitSection
            header={el.title}
            body={el.body}
            image={el.image}
            reverse={i % 2 !== 0 ? true : false}
            key={i}
            imgBgColor={el.imgBgColor}
          />
        ))}
      </div>

      <div className="bg-primary p-10 w-full mt-10">
        <Typography.H2 className="md:text-[32px] md:w-[55%] leading-tight text-white">
          Volunteer With Us
        </Typography.H2>
        <Typography.Text className="text-white md:text-[22px] md:w-[62%]">
          Join our growing team of changemakers who believe in the power of
          truth. <br /> Your skills can make a real difference.
        </Typography.Text>
        <div className="pt-5 sm:flex items-center space-x-5 space-y-5 sm:space-y-0">
          <PrimaryButton href="/about">Become a Volunteer</PrimaryButton>
          <PrimaryButton href="/support">
            Join an Upcoming outreach
          </PrimaryButton>
        </div>
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

export default ContactScreen;
