import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const categories = ["سياسة", "اقتصاد", "عالم", "رأي", "تكنولوجيا"];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="world-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <path d="M5,5 Q10,2 15,5 Q18,10 15,15 Q10,18 5,15 Q2,10 5,5" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#world-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy leading-tight mb-6 animate-fade-in">
            منصّة عربية حديثة تسمح لك أن ترى أبعد من العناوين
          </h1>
          
          {/* Subline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in">
            تحليلات موجزة، توضيحات مبسطة، ومنظور عالمي—بلمسة ذكاء اصطناعي
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <Button className="btn-hero text-lg px-10 py-4">
              ابدأ التصفح
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            
            <Button className="btn-outline-primary text-lg px-8 py-4">
              اشترك بريميوم
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center text-muted-foreground mb-2">
              <Filter className="w-4 h-4 ml-2" />
              <span className="text-sm font-medium">تصفية سريعة:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="rounded-full border-navy/20 text-navy hover:bg-navy hover:text-white transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-crimson/10 to-emerald/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-navy/10 to-crimson/10 rounded-full blur-3xl"></div>
    </section>
  );
};