import Categories from "@/components/Sections/Categories";
import FlashSale from "@/components/Sections/FlashSale";
import ForYou from "@/components/Sections/ForYou";

export default function Home() {
  return (
    <>
      <FlashSale />
      <ForYou />
      <Categories />
    </>
  );
}