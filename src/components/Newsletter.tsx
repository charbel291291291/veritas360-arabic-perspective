import { Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald to-navy rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">ملخّص صباحي إلى بريدك</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              احصل على أهم ٥ عناوين يومياً—بدون إزعاج، وبتحليل موجز ومفيد
            </p>
          </div>

          {/* Newsletter Preview */}
          <div className="bg-surface border border-border rounded-xl p-6 mb-8 text-right">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">نموذج الرسالة اليومية</div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>8:00 صباحاً</span>
              </div>
            </div>
            
            <h3 className="font-heading font-bold text-navy text-lg mb-4">صباح الخير، أهم ما حدث اليوم:</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-crimson rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">قمة دولية تحقق تقدماً في ملف السلام الإقليمي</p>
              </div>
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">أسواق الأسهم العربية تسجل مكاسب أسبوعية قوية</p>
              </div>
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">اختراق تقني جديد في مجال الطاقة المتجددة</p>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-muted-foreground text-center">
              ⏱️ وقت القراءة: 3 دقائق | 📊 تحليل موضوعي | 🌍 منظور عالمي
            </div>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="عنوان بريدك الإلكتروني"
                className="flex-1 text-right"
                dir="rtl"
              />
              <Button className="btn-accent sm:px-6">
                <Send className="ml-2 w-4 h-4" />
                اشترك الآن
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              نرسل أهم ٥ عناوين يومياً—بدون إزعاج. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-navy">15,420</div>
              <div className="text-sm text-muted-foreground">مشترك نشط</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-navy">4.8</div>
              <div className="text-sm text-muted-foreground">تقييم المحتوى</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-navy">98%</div>
              <div className="text-sm text-muted-foreground">معدل فتح الرسائل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};