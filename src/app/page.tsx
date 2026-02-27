import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import HomeScreen from "@/screens/homescreen";

export default function Home() {
  return (
    <div>
      <WebsiteLayout>
        <HomeScreen />
      </WebsiteLayout>
    </div>
  );
}
