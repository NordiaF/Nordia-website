import headingBg from "@/asset/images/headingBg.png";
import Typography from "@/utils/Typography";

const VolunteerScreen = () => {
  return (
    <div>
      <div
        className="w-full md:h-[239px] h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="p-5 text-white md:text-[88px] text-center w-full leading-tight">
          Volunteer
        </Typography.H1>
      </div>

      <div className="flex flex-col items-center mt-16 space-y-8 px-6">
        <Typography.H2 className="text-center md:text-[32px] md:w-[55%] leading-tight">
          Join Us in Bringing Truth, Hope, and Action to Communities
        </Typography.H2>
        <Typography.BigText className="text-center md:text-[24px] md:w-[75%]">
          Volunteers are a vital part of Nordia Foundation&apos;s work. Whether
          you want to support outreach programs, help amplify awareness, or
          contribute your time and skills to meaningful initiatives, we would
          love to hear from you.
        </Typography.BigText>
        <Typography.BigText className="text-center md:text-[20px] md:w-[70%]">
          Fill out the form below and our team will reach out with the next
          steps.
        </Typography.BigText>
      </div>

      <div className="mx-auto mt-12 mb-16 w-full md:max-w-5xl md:px-6">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <iframe
            title="Nordia Foundation Volunteer Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfo7CcPn51m_hb-DPEUVMDOyW_GZXz_ImO56yft8iI0BlvcBg/viewform?embedded=true"
            className="md:h-[400px] h-[450px] w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default VolunteerScreen;
