import Header from "./components/header/header";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <Header isFixtures={true} />
      <div className="mt-20">
        <iframe src="//stream.crichd.vip/update/willowcricket.php" width="100%" height="500px" allow="encrypted-media"></iframe>
      </div>
    </main>
  );
}
