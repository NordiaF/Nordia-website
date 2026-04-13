"use client";
import Image from "next/image";
import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";
import ourNameImg from "@/asset/images/transformImg.jpg.webp";
import ourPromiseImg from "@/asset/images/ourPromiseImg.png";
import CompassPoints from "@/components/compassPoints";
import infoIcon from "@/asset/icons/infoIcon.svg";
import whiteHeart from "@/asset/icons/whiteHeart.svg";
// import whiteMoneyStandIcon from "@/asset/icons/whiteMoneyStandIcon.svg";
import calenderIcon from "@/asset/icons/calenderIcon.svg";
import ActionTiles from "@/components/actionTiles";
// import { useRef, useState } from "react";
// import { IoIosPlayCircle } from "react-icons/io";
import PromiseSection from "@/components/promiseSection";
import CardGrid from "@/components/cardGrid";

import whiteFinanceIcon from "@/asset/icons/whiteFinanceIcon.svg";
import educationIcon from "@/asset/icons/educationIcon.svg";
import energyIcon from "@/asset/icons/energyIcon.svg";
import whiteHealthIcon from "@/asset/icons/whiteHealthIcon.svg";

// import profileImg1 from "@/asset/images/profileImg1.webp";
// import profileImg2 from "@/asset/images/profileImg2.webp";
// import profileImg3 from "@/asset/images/profileImg3.webp";
// import profileImg4 from "@/asset/images/profileImg4.webp";
// import profileImg5 from "@/asset/images/profileImg5.webp";
// import profileImg6 from "@/asset/images/profileImg6.webp";
// import profileImg7 from "@/asset/images/profileImg7.webp";
// import profileImg8 from "@/asset/images/profileImg8.webp";
// import TeamSection from "@/components/teamSection";

const AboutScreen = () => {
  // const [ playing, setPlaying] = useState<boolean>(false);
  // const vidRef = useRef<HTMLVideoElement>(null);

  const compassPoints = [
    {
      letter: "C",
      title: "Credibility",
      description:
        "Truth is our foundation. Everything we share is verified, research-backed, and trustworthy.",
      bgColor: "#1A4598",
    },
    {
      letter: "O",
      title: "Objectivity",
      description:
        "We speak from facts not opinions. Our mission is driven by truth, free from bias or personal interest.",
      bgColor: "#549FD7",
    },
    {
      letter: "R",
      title: "Resilience",
      description:
        "Even in a world filled with misinformation, we persist in sharing light that uplifts and enlightens.",
      bgColor: "#F6BA63",
      textColor: "#000000",
    },
    {
      letter: "E",
      title: "Empowerment",
      description:
        "Knowledge is power, and we use it to help people live confidently, purposefully, and freely.",
      bgColor: "#FFEBB9",
      textColor: "#000000",
    },
  ];

  const focusAreas = [
    {
      title: (
        <Typography.H3>
          Health <span className="font-normal text-[16px]">(SDG 3 & 6)</span>
        </Typography.H3>
      ),
      description:
        "Promoting Verified Health Knowledge, Awareness, And Wellbeing.",
      icon: whiteHealthIcon,
      bg: "#1A4598",
    },
    {
      title: (
        <Typography.H3>
          Finance <span className="font-normal text-[16px]">(SDG 1 & 8)</span>
        </Typography.H3>
      ),
      description:
        "Empowering People With Financial Literacy And Sustainable Income Opportunities.",
      icon: whiteFinanceIcon,
      bg: "#549FD7",
    },
    {
      title: (
        <Typography.H3 className="text-black">
          Education <span className="font-normal text-[16px]">(SDG 4)</span>
        </Typography.H3>
      ),
      description:
        "Championing Inclusive Learning And Critical Thinking For All.",
      icon: educationIcon,
      bg: "#F6BA63",
      textColor: "black",
    },
    {
      title: (
        <Typography.H3 className="text-black">
          Energy <span className="font-normal text-[16px]">(SDG 7)</span>
        </Typography.H3>
      ),
      description:
        "Advocating For Clean, Affordable, And Sustainable Energy For Every Community.",
      icon: energyIcon,
      bg: "#FAA629",
      textColor: "black",
    },
  ];

  // const team = [
  //   {
  //     name: "Leonard John Davies",
  //     title: "Cofounder",
  //     subtitle: "CEO",
  //     photo: profileImg1,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Francis Weber",
  //     title: "Vice Chairman",
  //     subtitle: "",
  //     photo: profileImg2,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Kyla Obrien",
  //     title: "Head of Authority",
  //     subtitle: "",
  //     photo: profileImg3,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Adrian Dixon",
  //     title: "Support Executive",
  //     subtitle: "",
  //     photo: profileImg4,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Freddy Busby",
  //     title: "Project Manager",
  //     subtitle: "",
  //     photo: profileImg5,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Dale Banks",
  //     title: "Accountant",
  //     subtitle: "Finance",
  //     photo: profileImg6,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Miriam Middleton",
  //     title: "Cofounder",
  //     subtitle: "CEO",
  //     photo: profileImg7,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  //   {
  //     name: "Ellen Walton",
  //     title: "Vice Chairman",
  //     subtitle: "",
  //     photo: profileImg8,
  //     facebookUrl: "#",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },
  // ];

  // const handlePlayVideo = () => {
  //   if (vidRef.current) {
  //     vidRef.current?.play();
  //   }
  //   setPlaying(true);
  // };

  // const handlePauseVideo = () => {
  //   if (vidRef.current) {
  //     vidRef.current.pause();
  //   }
  //   setPlaying(false);
  // };

  // const handleVideoEnded = () => {
  //   setPlaying(false);
  // };

  return (
    <div>
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-center w-full leading-tight">
          About us
        </Typography.H1>
      </div>
      <div className="flex flex-col items-center mt-16 space-y-10">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Who We Are
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          At Nordia Foundation, we believe that knowledge is light and that
          light should reach everyone. We exist to help people make informed
          choices through education, critical thinking, and truth-driven
          awareness that leads to growth and transformation. <br /> <br />
          In a world clouded by misinformation, we stand as a beacon of clarity
          and direction, guiding individuals and communities toward truth,
          enlightenment, and lasting impact.
        </Typography.BigText>
      </div>
      {/* <div className="relative mx-auto h-[448px] w-full max-w-4xl overflow-hidden rounded-[20px] border-[5px] border-white mt-16">
        <video
          src="https://res.cloudinary.com/kodobe/video/upload/v1770806521/yadlaub2nhhzxrln0hdz.mp4"
          width={341}
          height={218}
          className="h-full w-full cursor-pointer object-cover"
          ref={vidRef}
          onClick={playing ? handlePauseVideo : handlePlayVideo}
          onEnded={handleVideoEnded}
        >
          Your browser does not support the video tag.
        </video>
        {!playing && (
          <button
            type="button"
            onClick={handlePlayVideo}
            className="absolute inset-0 flex items-center justify-center text-gray-100"
          >
            <IoIosPlayCircle
              size={64}
              className="cursor-pointer drop-shadow-lg"
            />
          </button>
        )}
      </div> */}

      <div className="mt-10">
        <PromiseSection
          title="Our Name"
          body={
            <>
              <Typography.BigText className="text-white">
                Nordia draws inspiration from the French word “Nord”, meaning
                “North.” North represents direction, clarity, and progress and
                that’s exactly what we bring to the lives we touch. Just as the
                North guides travelers, Nordia Foundation exists to help people
                find their way toward truth and understanding.
              </Typography.BigText>
            </>
          }
          image={ourNameImg}
          textColor="white"
          backgroundImg={headingBg}
          reverse={true}
        />
      </div>

      <div
        className="bg-primary p-10 w-full flex flex-col items-center mt-10 space-y-3 bg-cover"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="text-white text-center">
          Our Dream
        </Typography.H1>
        <Typography.BigText className="text-white md:text-[18px] font-extralight text-center w-[80%]">
          A world where truth thrives, learning grows, and misinformation loses
          its power. We dream of communities built on knowledge and critical
          thinking where learning sparks confidence and awareness fuels
          transformation.
        </Typography.BigText>
      </div>

      <div className="mt-10">
        <PromiseSection
          title="Our Name"
          body={
            <>
              <Typography.BigText>
                To create sustainable, impactful programs across education,
                health, finance, and energy that:
              </Typography.BigText>
              <ul className="pl-7 space-y-1">
                <li className="list-disc">Inform and enlighten minds</li>
                <li className="list-disc">Inspire confidence and action</li>
                <li className="list-disc">
                  Empower people to make sound, life-changing decisions
                </li>
              </ul>
              <Typography.BigText>
                We don’t just share information we create transformation through
                knowledge.
              </Typography.BigText>
            </>
          }
          image={ourPromiseImg}
          textColor="black"
          bgColor="#FAA629"
        />
      </div>

      <CompassPoints
        heading="Our Compass Points"
        items={compassPoints}
        subheading="These are the values that define who we are and guide everything we do:"
      />

      <div className="flex flex-col items-center space-y-5 mt-10">
        <Typography.H1 className="text-center  md:w-[55%] leading-tight">
          Our Pillars
        </Typography.H1>
        <Typography.BigText className="text-center md:text-[24px] md:w-[50%]">
          Our logo’s four pillars represent the key sectors that drive our
          mission:
        </Typography.BigText>
        <div>
          <CardGrid cards={focusAreas} />
        </div>
        <Typography.BigText className="text-center md:text-[24px] md:w-[65%]">
          Each pillar aligns with the United Nations’ Sustainable Development
          Goals, proving that truth and knowledge can drive real, measurable
          change.
        </Typography.BigText>
      </div>

      {/* <div className="mt-16">
        <TeamSection members={team} />
      </div> */}

      <div className="flex flex-col items-center space-y-5 mt-16">
        <Typography.BigText className="text-center md:text-[24px] md:w-[55%]">
          Be part of something bigger where your voice, time, or donation
          becomes a light for others.
        </Typography.BigText>
      </div>

      <ActionTiles
        items={[
          {
            label: "See Our Work",
            href: "/what-we-do",
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
            label: "Join an Outreach",
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
                src={whiteHeart}
                alt="white-heart-img"
                width={60}
                height={60}
              />
            ),
            variant: "primary",
          },
          // The initial tile
          // {
          //   label: "Donate",
          //   href: "/donate",
          //   Icon: (
          //     <Image
          //       src={whiteMoneyStandIcon}
          //       alt="white-moneyStand-img"
          //       width={60}
          //       height={60}
          //     />
          //   ),
          //   variant: "primary",
          // },
        ]}
      />
    </div>
  );
};

export default AboutScreen;
