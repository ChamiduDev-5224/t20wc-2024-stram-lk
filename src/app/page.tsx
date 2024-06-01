export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-row bg-blue-700 h-12 fixed w-full">
        <p className="text-center my-auto mx-auto">Live cricket world cup-2024 Broadcast over world</p>
      </div>
      <div className="mx-20 mb-20 mt-24">
        <iframe src="//stream.crichd.vip/update/skys2.php" width="100%" height="500px" allow="encrypted-media"></iframe>
      </div>
    </main>
  );
}
