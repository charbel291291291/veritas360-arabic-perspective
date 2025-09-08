import { Brain, Search, Globe2, Zap } from "lucide-react";

export const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "مؤشر الانحياز",
      description: "قراءة أكثر وُضوحاً للميول والتحيز",
      color: "from-emerald to-emerald/80"
    },
    {
      icon: Search,
      title: "التحقق السريع",
      description: "ملخص يؤكد المعلومة أو يشير لضرورة التحقق",
      color: "from-crimson to-crimson/80"
    },
    {
      icon: Globe2,
      title: "منظور عالمي",
      description: "شاهد كيف تناولت دول أخرى نفس الخبر",
      color: "from-navy to-navy/80"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-navy to-crimson rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">أدوات الذكاء الاصطناعي</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تقنيات متطورة لتحليل الأخبار وتوفير رؤى أعمق وأكثر شمولية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="ai-feature-tile group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle Animation Line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-navy/20 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground bg-surface px-4 py-2 rounded-full border border-border">
            <span>جميع أدوات الذكاء الاصطناعي شفافة وقابلة للتتبع</span>
            <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};