import Script from "next/script";
import Header from "./components/header/header";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <Header isFixtures={false} />
      <div className="mt-20">
        <Script
          src="//spadelack.com/60/76/6a/60766ad386245ee0f2febf8c50e0d315.js"
          strategy="beforeInteractive"
        />
        <iframe src="//stream.crichd.vip/update/willowcricket.php" width="100%" height="500px" allow="encrypted-media"></iframe>
      </div>
    </main>
  );
}
