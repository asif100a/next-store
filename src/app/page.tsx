import Categories from "@/components/Sections/home-sections/Categories";
import FlashSale from "@/components/Sections/home-sections/FlashSale";
import ForYou from "@/components/Sections/home-sections/ForYou";

export default function Home() {
  return (
    <>
      <FlashSale />
      <ForYou />
      <Categories />
    </>
  );
}