import Image from "next/image";
import heroImage from "@/asset/images/heroImage.webp";
import Typography from "@/utils/Typography";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import visionImg from "@/asset/images/VisionImg.webp";
import missionImg from "@/asset/images/missionImg.webp";
import SplitSection from "@/components/splitSection";
import CompassPoints from "@/components/compassPoints";
import whiteHeart from "@/asset/icons/whiteHeart.svg";
import moneyStand from "@/asset/icons/moneyStand.svg";
import whiteCalender from "@/asset/icons/whiteCalender.svg";
import ActionTiles from "@/components/actionTiles";
import headingBg from "@/asset/images/headingBg.png";

const HomeScreen = () => {
  const visionMission = [
    {
      title: "Our Vision",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            “To see a society where truth is popular and misinformation is
            combated” <br />
            <br /> Through transformative education and evidence-based
            awareness, we are building communities where people can make
            informed, confident, and independent decisions.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "See Our Impact",
      image: visionImg,
      imgBgColor: "#1A4598",
    },
    {
      title: "Our Mission",
      body: (
        <>
          <Typography.BigText className="sm:text-[22px]">
            “To organize initiatives across education, health, finance, and
            energy that will inform, transform, and have a sustained impact.”{" "}
            <br />
            <br /> To inform, inspire, and empower through education, health,
            finance, and energy programs that spark critical thinking and drive
            social progress. At Nordia, we turn information into action creating
            initiatives that uplift lives and promote truth as a tool for
            transformation.
          </Typography.BigText>
        </>
      ),
      link: "/about",
      linkText: "Explore Our Programs",
      image: missionImg,
      imgBgColor: "#FAA629",
    },
  ];

  const compassPoints = [
    {
      letter: "C",
      title: "Credibility",
      description:
        "Truth Is Our Foundation. We Share Verified, Research-Backed Information.",
      bgColor: "#1A4598",
    },
    {
      letter: "O",
      title: "Objectivity",
      description:
        "We're Driven By Facts, Free From Bias Or Personal Interest.",
      bgColor: "#549FD7",
    },
    {
      letter: "R",
      title: "Resilience",
      description: "Even In The Face Of Misinformation, We Keep Shining Light.",
      bgColor: "#F6BA63",
      textColor: "#000000",
    },
    {
      letter: "E",
      title: "Empowerment",
      description:
        "We Use Knowledge To Build Confidence, Awareness, And Transformation.",
      bgColor: "#FFEBB9",
      textColor: "#000000",
    },
  ];

  return (
    <div>
      <div
        className="w-full md:h-[600px] h-60 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-[24px] leading-tight">
          Empowering Minds. <br /> Illuminating Truth. <br /> Transforming
          Communities.
        </Typography.H1>
      </div>
      <div className="bg-primary p-10 w-full mt-10">
        <Typography.Text className="text-white md:text-[18px]">
          At Nordia Foundation, we believe that knowledge is light and that
          light should reach everyone. We empower individuals and communities
          with truth-driven education, awareness, and critical thinking that
          inspire lasting change.
        </Typography.Text>
        <div className="pt-5 sm:flex items-center space-x-5 space-y-5 sm:space-y-0">
          <PrimaryButton href="/about">Learn About Us</PrimaryButton>
          <PrimaryButton href="/support">Support Our Work</PrimaryButton>
        </div>
      </div>
      <div>
        {visionMission.map((el, i) => (
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
      <div
        className="bg-primary p-10 w-full bg-cover flex flex-col items-center mt-10 space-y-3"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="text-white text-center">
          Why We Exist
        </Typography.H1>
        <Typography.BigText className="text-white md:text-[18px] font-extralight text-center w-[80%]">
          In a world clouded by misinformation, confusion, and fear, Nordia
          Foundation stands as a beacon of clarity and direction. We guide
          people towards verified knowledge, truth, and understanding,
          empowering them to live with confidence and purpose.
        </Typography.BigText>
      </div>
      <CompassPoints heading="Our Compass Points" items={compassPoints} />
      <div className="flex flex-col items-center space-y-5 mt-10">
        <Typography.BigText className="text-center md:text-[24px]">
          Join the Movement
        </Typography.BigText>
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Together, we can create a world where truth leads transformation.
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[55%]">
          Be part of something bigger where your voice, time, or donation
          becomes a light for others.
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
    </div>
  );
};

export default HomeScreen;
