import Image, { type StaticImageData } from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Typography from "@/utils/Typography";
import { cn } from "@/lib/cn";

export type TeamMember = {
  name: string;
  title: string;
  subtitle?: string;
  photo: StaticImageData | string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
};

export type TeamSectionProps = {
  heading?: string;
  subheading?: string;
  members: TeamMember[];
  className?: string;
};

export default function TeamSection({
  heading = "Meet our team",
  subheading = "Meet the passionate individuals behind Nordia’s vision of truth and transformation.",
  members,
  className,
}: TeamSectionProps) {
  return (
    <section className={cn("w-full bg-[#E2F0FB] py-14", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Typography.H1 className="text-[28px] sm:text-[32px] md:text-[36px] text-black">
            {heading}
          </Typography.H1>
          {subheading && (
            <Typography.BigText className="mt-3 mx-auto max-w-3xl text-[15px] sm:text-[16px] md:text-[18px] text-black/80">
              {subheading}
            </Typography.BigText>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full overflow-hidden rounded-3xl bg-black/5">
                <Image
                  src={member.photo}
                  alt={member.name}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="mt-4">
                <Typography.H3 className="text-[18px] sm:text-[20px] md:text-[22px]">
                  {member.name}
                </Typography.H3>
                <Typography.SubText className="mt-1 text-[13px] sm:text-[14px] text-black/70">
                  {member.title}
                  {member.subtitle ? `, ${member.subtitle}` : null}
                </Typography.SubText>
              </div>

              {(member.facebookUrl ||
                member.twitterUrl ||
                member.linkedinUrl) && (
                <div className="mt-3 flex items-center gap-4 text-black/70">
                  {member.facebookUrl && (
                    <a
                      href={member.facebookUrl}
                      aria-label={`${member.name} on Facebook`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-black"
                    >
                      <FaFacebookF size={16} />
                    </a>
                  )}
                  {member.twitterUrl && (
                    <a
                      href={member.twitterUrl}
                      aria-label={`${member.name} on Twitter`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-black"
                    >
                      <FaTwitter size={16} />
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      aria-label={`${member.name} on LinkedIn`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-black"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

