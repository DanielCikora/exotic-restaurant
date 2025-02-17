import Demo from "@/components/demo/Demo";
import Discover from "@/components/discover/Discover";
import Hero from "@/components/hero/Hero";
import History from "@/components/history/History";
export const metadata = {
  title: "Exotic Indian Eats",
  description: "Exotic Indian Eats - Website Developed by Daniel Cikora",
};
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Discover />
        <History />
        <Demo />
      </main>
    </>
  );
};
export default Home;
