import Categories from "@/components/Sections/Categories";
import ForYou from "@/components/Sections/ForYou";

export default function Home() {
  return (
    <main className="w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-3 md:py-6 min-h-[calc(100vh-445.9px)]">
      <ForYou />
      <Categories />
    </main>
  );
}