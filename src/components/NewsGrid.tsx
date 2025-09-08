import { Clock, Eye, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  readTime: string;
  image: string;
  bias: 'neutral' | 'left' | 'right';
  verification: 'verified' | 'needs-verification';
  featured?: boolean;
}

export const NewsGrid = () => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'مؤتمر السلام الجديد يحقق تقدماً في المفاوضات',
      excerpt: 'شهدت جلسات اليوم الثالث من مؤتمر السلام تقدماً ملحوظاً في النقاشات حول الملفات الخلافية الرئيسية...',
      source: 'وكالة الأنباء العربية',
      readTime: '5 دقائق',
      image: '/api/placeholder/600/400',
      bias: 'neutral',
      verification: 'verified',
      featured: true
    },
    {
      id: '2',
      title: 'الاقتصاد العالمي يظهر علامات تعافي قوية',
      excerpt: 'تشير البيانات الحديثة إلى نمو اقتصادي متسارع في معظم الأسواق الرئيسية...',
      source: 'مؤسسة الاقتصاد الدولي',
      readTime: '3 دقائق',
      image: '/api/placeholder/400/300',
      bias: 'left',
      verification: 'verified'
    },
    {
      id: '3',
      title: 'تطورات تقنية جديدة في مجال الذكاء الاصطناعي',
      excerpt: 'كشفت شركة تقنية رائدة عن اختراقات مهمة في تطوير أنظمة ذكية جديدة...',
      source: 'مجلة التكنولوجيا',
      readTime: '4 دقائق',
      image: '/api/placeholder/400/300',
      bias: 'right',
      verification: 'needs-verification'
    },
    {
      id: '4',
      title: 'قمة المناخ تحقق اتفاقاً تاريخياً',
      excerpt: 'توصلت الدول المشاركة في قمة المناخ إلى اتفاق شامل حول خفض الانبعاثات...',
      source: 'منظمة البيئة العالمية',
      readTime: '6 دقائق',
      image: '/api/placeholder/400/300',
      bias: 'neutral',
      verification: 'verified'
    },
    {
      id: '5',
      title: 'انتخابات أوروبية تشهد مشاركة قياسية',
      excerpt: 'سجلت الانتخابات الأوروبية أعلى نسبة مشاركة منذ عقود مع تنوع كبير في النتائج...',
      source: 'مراسل أوروبا',
      readTime: '4 دقائق',
      image: '/api/placeholder/400/300',
      bias: 'neutral',
      verification: 'verified'
    },
    {
      id: '6',
      title: 'اكتشافات علمية جديدة في استكشاف الفضاء',
      excerpt: 'أعلنت وكالة الفضاء عن اكتشافات مذهلة قد تغير فهمنا للكون...',
      source: 'وكالة الفضاء الدولية',
      readTime: '5 دقائق',
      image: '/api/placeholder/400/300',
      bias: 'neutral',
      verification: 'verified'
    }
  ];

  const getBiasColor = (bias: string) => {
    switch (bias) {
      case 'neutral': return 'bias-neutral';
      case 'left': return 'bias-left';
      case 'right': return 'bias-right';
      default: return 'bias-neutral';
    }
  };

  const getBiasText = (bias: string) => {
    switch (bias) {
      case 'neutral': return 'محايد';
      case 'left': return 'يميل لليسار';
      case 'right': return 'يميل لليمين';
      default: return 'محايد';
    }
  };

  const getVerificationClass = (verification: string) => {
    return verification === 'verified' ? 'verified' : 'needs-verification';
  };

  const getVerificationText = (verification: string) => {
    return verification === 'verified' ? 'مؤكد' : 'يحتاج تحقق';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-navy">الأحدث الآن</h2>
          <Button variant="outline" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span>عرض الكل</span>
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={`group cursor-pointer transition-all duration-300 ${
                article.featured ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                index === 0 ? 'news-card-featured' : 'news-card'
              }`}
            >
              {/* Article Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className={`bg-gradient-to-r from-navy/20 to-crimson/20 ${
                  article.featured ? 'aspect-video' : 'aspect-[4/3]'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center text-navy/40">
                    <Eye className="w-12 h-12" />
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex flex-col gap-2">
                  <span className={getBiasColor(article.bias)}>
                    {getBiasText(article.bias)}
                  </span>
                  <span className={getVerificationClass(article.verification)}>
                    {getVerificationText(article.verification)}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-3">
                <h3 className={`font-heading font-bold text-navy group-hover:text-crimson transition-colors leading-tight ${
                  article.featured ? 'text-2xl' : 'text-lg'
                }`}>
                  {article.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed ${
                  article.featured ? 'text-base' : 'text-sm line-clamp-3'
                }`}>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <span className="font-medium">{article.source}</span>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-outline-primary px-8 py-3">
            تحميل المزيد
          </Button>
        </div>
      </div>
    </section>
  );
};