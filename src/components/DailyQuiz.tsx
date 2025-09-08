import { Trophy, Star, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DailyQuiz = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-navy/5 to-crimson/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 shadow-[var(--shadow-elevated)] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-crimson/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="p-3 bg-gradient-to-r from-crimson to-navy rounded-xl">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy">اختبر معرفتك اليوم</h3>
                  <p className="text-muted-foreground">تحدّ يومي للقرّاء المتميزين</p>
                </div>
              </div>

              {/* Quiz Description */}
              <div className="mb-8">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  ٣ أسئلة خفيفة تُكسبك نقاطاً وتظهر ترتيبك بين القرّاء
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-crimson" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-navy">+50</div>
                    <div className="text-sm text-muted-foreground">نقطة لكل إجابة</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-emerald" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-navy">#247</div>
                    <div className="text-sm text-muted-foreground">ترتيبك الحالي</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Trophy className="w-5 h-5 text-navy" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-navy">1,420</div>
                    <div className="text-sm text-muted-foreground">إجمالي النقاط</div>
                  </div>
                </div>
              </div>

              {/* Quiz Topics Preview */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-navy mb-4">موضوعات اليوم:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-emerald/5 rounded-lg">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    <span className="text-foreground">السياسة الدولية والعلاقات الخارجية</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-crimson/5 rounded-lg">
                    <div className="w-2 h-2 bg-crimson rounded-full"></div>
                    <span className="text-foreground">الاقتصاد العالمي والأسواق المالية</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-navy/5 rounded-lg">
                    <div className="w-2 h-2 bg-navy rounded-full"></div>
                    <span className="text-foreground">التكنولوجيا والذكاء الاصطناعي</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button className="btn-hero text-lg px-10 py-4 mb-4">
                  ابدأ الاختبار
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  اختبار اليوم ينتهي في <span className="font-semibold text-crimson">5 ساعات و 23 دقيقة</span>
                </p>
              </div>
            </div>
          </div>

          {/* After Quiz Completion Preview */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm">
              <Trophy className="w-4 h-4" />
              <span>بعد إنهاء الاختبار: هل تريد سؤالاً إضافياً لمضاعفة النقاط؟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};