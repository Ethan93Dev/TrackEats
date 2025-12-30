import LandingPage from "./landingPage/page";

export default function Home() {
  return (
    // Removed items-center/justify-center so content flows from the top
    <div className="min-h-screen">
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
