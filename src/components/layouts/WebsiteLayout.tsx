import Footer from "../footer";
import Header from "../header";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto h-screen bg-backgroundColor">
      <Header />
      <div className="md:px-10 px-5">{children}</div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
