import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsGrid } from "@/components/NewsGrid";
import { AIFeatures } from "@/components/AIFeatures";
import { DebateCorner } from "@/components/DebateCorner";
import { DailyQuiz } from "@/components/DailyQuiz";
import { Premium } from "@/components/Premium";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      <Hero />
      <NewsGrid />
      <AIFeatures />
      <DebateCorner />
      <DailyQuiz />
      <Premium />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
