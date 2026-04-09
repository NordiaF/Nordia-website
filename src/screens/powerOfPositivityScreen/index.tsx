import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";

// const assessmentFormLink =
//   "https://docs.google.com/forms/d/e/1FAIpQLSfo7CcPn51m_hb-DPEUVMDOyW_GZXz_ImO56yft8iI0BlvcBg/viewform";
const embeddedAssessmentFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSfo7CcPn51m_hb-DPEUVMDOyW_GZXz_ImO56yft8iI0BlvcBg/viewform?embedded=true";

const applicationSteps = [
  {
    title: "Step 1 - Fill the Assessment Form",
    description:
      "Visit the assessment form and complete the online form. You will answer a few scenario-based questions and share your story in your own words. It takes about 15 minutes.",
  },
  {
    title: "Step 2 - Engage on Social Media",
    description:
      "Follow @nordiahq on Instagram, X, and LinkedIn. Like and share the campaign post. This is part of the entry requirement.",
  },
  {
    title: "Step 3 - Wait for the Announcement",
    description:
      "Our team reviews every entry. The top two winners are selected based on eligibility and response quality. Winners are announced on @nordiahq and contacted directly by email.",
  },
];

const PowerOfPositivityScreen = () => {
  return (
    <div className="pb-16">
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[72px] text-center w-full leading-tight">
          Power of Positivity
        </Typography.H1>
      </div>

      <section className="mx-auto mt-12 w-full max-w-10xl px-6">
        <div className="rounded-[28px] bg-[#F8F4EA] p-6 sm:p-8 md:p-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              Nordia Live Lit
            </span>
            <Typography.H2 className="mt-6 text-center md:text-[32px] md:w-[80%] leading-tight">
              Powering Students and Remote Workers in Low-Power Communities
            </Typography.H2>
            <Typography.BigText className="mt-6 text-center md:text-[22px] w-full">
              The Nordia Live Lit is a solar campaign initiative by Nordia
              Foundation, designed to support Final year students and remote
              workers living in low-power areas across Nigeria.
            </Typography.BigText>
            <Typography.BigText className="mt-4 text-center md:text-[22px] w-full">
              Two winners will each receive a solar system because reliable
              electricity shouldn&apos;t be a privilege. Apply, tell your story,
              and let us power what&apos;s possible.
            </Typography.BigText>

            {/* <div className="mt-8 flex w-full justify-center">
              <PrimaryButton
                href={assessmentFormLink}
                className="w-full sm:w-auto bg-[#F6BA63]"
              >
                Apply Now
              </PrimaryButton>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Typography.H2 className="md:text-[32px]">How to Apply</Typography.H2>
          <Typography.Text className="mt-4 text-black/70 md:text-[18px]">
            Complete the assessment form, engage with the campaign online, and
            watch for the final announcement from the Nordia team.
          </Typography.Text>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {applicationSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-[24px] border border-black/10 bg-white p-6 "
            >
              <Typography.H3 className="text-[22px] leading-tight">
                {step.title}
              </Typography.H3>
              <Typography.Text className="mt-4 text-black/75 md:text-[17px]">
                {step.description}
              </Typography.Text>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-4">
          <div className="rounded-[22px] p-3 sm:p-4">
            <div className="mx-auto mb-5 max-w-3xl text-center">
              <Typography.H3 className="text-[24px] md:text-[28px]">
                Complete the Assessment Form
              </Typography.H3>
              <Typography.Text className="mt-3 text-black/70 md:text-[17px]">
                Apply directly on this page using the embedded form below.
              </Typography.Text>
            </div>

            <iframe
              title="Nordia Live Lit Assessment Form"
              src={embeddedAssessmentFormLink}
              className="h-[450px] w-full rounded-[18px] sm:h-[450px] md:h-[400px]"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerOfPositivityScreen;
