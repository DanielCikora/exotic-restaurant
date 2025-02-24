import Demo from "@/components/demo/Demo";
import Discover from "@/components/discover/Discover";
import Hero from "@/components/hero/Hero";
import History from "@/components/history/History";
import Menu from "@/components/menu/Menu";
import Offers from "@/components/offers/Offers";
import Reservation from "@/components/reservation/Reservation";
import Testimonials from "@/components/testimonials/Testimonials";
export const metadata = {
  title: "Exotic Indian Eats",
  description: "Exotic Indian Eats - Website Developed by Daniel Cikora",
};
const Home = () => {
  return (
    <main>
      <Hero />
      <Discover />
      <History />
      <Demo />
      <Menu />
      <Offers />
      <Reservation />
      <Testimonials />
    </main>
  );
};
export default Home;
