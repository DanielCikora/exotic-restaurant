import Discover from "@/components/discover/Discover";
import Hero from "@/components/hero/Hero";
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
      </main>
    </>
  );
};
export default Home;
