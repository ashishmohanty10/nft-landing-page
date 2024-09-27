import { Company } from "@/components/company";
import { CreateSellArticles } from "@/components/create-sell-articles";
import { Hero } from "@/components/hero";
import { TopCollection } from "@/components/top-collections";
import { TrendingNFT } from "@/components/trendingNFT";

export default function Home() {
  return (
    <div>
      <Hero />
      <Company />
      <TrendingNFT />
      <TopCollection />
      <CreateSellArticles />
    </div>
  );
}
