import { MessageSquare, ThumbsUp, ThumbsDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DebateCorner = () => {
  const todayTopic = {
    title: "هل يجب تطبيق ضريبة عالمية على الشركات التقنية الكبرى؟",
    proArguments: [
      "تحقيق العدالة الضريبية وتقليل التهرب الضريبي",
      "توفير موارد إضافية للاستثمار في التعليم والصحة",
      "تقليل الفجوة بين الأغنياء والفقراء على مستوى العالم"
    ],
    conArguments: [
      "قد يؤثر سلباً على الابتكار والاستثمار في التكنولوجيا",
      "صعوبة التطبيق العملي بسبب اختلاف الأنظمة الضريبية",
      "احتمالية نقل الشركات لمقراتها إلى دول أخرى"
    ],
    participants: 1247,
    votes: { pro: 658, con: 589 }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald to-navy rounded-xl">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-2">ركن النقاش</h2>
            <p className="text-lg text-muted-foreground">موضوع اليوم</p>
          </div>

          {/* Debate Topic */}
          <div className="bg-surface border border-border rounded-2xl p-8 mb-8 shadow-[var(--shadow-news-card)]">
            <h3 className="text-2xl font-heading font-bold text-navy mb-6 leading-tight text-center">
              {todayTopic.title}
            </h3>

            {/* Arguments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pro Arguments */}
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse bg-emerald/10 px-4 py-2 rounded-full">
                    <ThumbsUp className="w-5 h-5 text-emerald" />
                    <span className="font-heading font-semibold text-emerald">حجج مؤيدة</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {todayTopic.proArguments.map((argument, index) => (
                    <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-emerald/5 rounded-lg border-r-4 rtl:border-r-0 rtl:border-l-4 border-emerald">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground leading-relaxed">{argument}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm text-emerald">
                    <span>{todayTopic.votes.pro} صوت</span>
                    <div className="w-1 h-1 bg-emerald rounded-full"></div>
                    <span>{((todayTopic.votes.pro / (todayTopic.votes.pro + todayTopic.votes.con)) * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              {/* Con Arguments */}
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse bg-crimson/10 px-4 py-2 rounded-full">
                    <ThumbsDown className="w-5 h-5 text-crimson" />
                    <span className="font-heading font-semibold text-crimson">حجج معارضة</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {todayTopic.conArguments.map((argument, index) => (
                    <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-crimson/5 rounded-lg border-r-4 rtl:border-r-0 rtl:border-l-4 border-crimson">
                      <div className="w-2 h-2 bg-crimson rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground leading-relaxed">{argument}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm text-crimson">
                    <span>{todayTopic.votes.con} صوت</span>
                    <div className="w-1 h-1 bg-crimson rounded-full"></div>
                    <span>{((todayTopic.votes.con / (todayTopic.votes.pro + todayTopic.votes.con)) * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Participation Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>{todayTopic.participants.toLocaleString('ar')} شخص شارك في النقاش</span>
            </div>

            <Button className="btn-accent px-8 py-3">
              شارك برأيك
            </Button>

            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              النقاش محترم ومُدار وفق قواعد مجتمع واضحة. جميع الآراء مولّدة بالذكاء الاصطناعي لضمان التوازن.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};