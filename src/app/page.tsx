import { Articles } from "@/components/articles";
import { Company } from "@/components/company";
import { CreateSellArticles } from "@/components/create-sell-articles";
import Footer from "@/components/footer";
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
      <Articles />
      <Footer />
    </div>
  );
}
