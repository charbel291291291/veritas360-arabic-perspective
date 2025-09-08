import { Crown, Check, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Premium = () => {
  const benefits = [
    "مقالات تحليلية خاصة",
    "مقارنة عالمية موسّعة", 
    "تجربة خالية من الإعلانات",
    "تحديثات فورية حصرية",
    "أدوات ذكاء اصطناعي متقدمة",
    "أرشيف شامل للمقالات"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-navy/5 via-background to-crimson/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="premium-card relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="premium-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#premium-pattern)" />
              </svg>
            </div>

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-heading font-bold text-white mb-2">بريميوم Veritas360</h2>
                <p className="text-white/80 text-lg">تجربة متميزة للقرّاء المهتمين</p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-1 bg-white/20 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="inline-flex items-baseline space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-4xl font-heading font-bold text-white">29</span>
                  <span className="text-white/80">ريال شهرياً</span>
                </div>
                <p className="text-white/60 text-sm">أو 299 ريال سنوياً (وفّر 30%)</p>
              </div>

              {/* CTA */}
              <div className="text-center mb-6">
                <Button className="bg-white text-navy hover:bg-white/90 px-8 py-3 text-lg font-heading font-semibold">
                  اشترك الآن
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </div>

              {/* Support Message */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-white/80 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>ادعم صحافة عربية حديثة وذات مصداقية</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-6 text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white/80 text-sm">ضمان استرداد خلال 30 يوماً</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};