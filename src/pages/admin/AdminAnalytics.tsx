import { AdminLayout } from "@/components/AdminLayout";
import { 
  BarChart3, 
  Users, 
  Eye, 
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Calendar,
  Globe,
  Clock,
  Target,
  Award,
  DollarSign
} from "lucide-react";

const AdminAnalytics = () => {
  const stats = [
    {
      title: "مشاهدات اليوم",
      value: "45,678",
      change: "+12%",
      changeType: "increase" as const,
      icon: Eye,
      color: "from-navy to-navy/80"
    },
    {
      title: "زوار فريدون",
      value: "12,340",
      change: "+8%",
      changeType: "increase" as const,
      icon: Users,
      color: "from-emerald to-emerald/80"
    },
    {
      title: "معدل المشاركة",
      value: "67%",
      change: "+5%",
      changeType: "increase" as const,
      icon: MessageSquare,
      color: "from-crimson to-crimson/80"
    },
    {
      title: "الإيرادات",
      value: "$8,920",
      change: "+15%",
      changeType: "increase" as const,
      icon: DollarSign,
      color: "from-amber-500 to-amber-600"
    }
  ];

  const topArticles = [
    {
      title: "مؤتمر السلام الدولي يحقق تقدماً مهماً",
      views: 25420,
      engagement: 89,
      category: "سياسة"
    },
    {
      title: "الاقتصاد العالمي يشهد تطورات إيجابية",
      views: 18930,
      engagement: 76,
      category: "اقتصاد"
    },
    {
      title: "تطورات جديدة في تقنيات الذكاء الاصطناعي",
      views: 16100,
      engagement: 82,
      category: "تكنولوجيا"
    },
    {
      title: "قمة المناخ تحقق اتفاقاً تاريخياً",
      views: 14750,
      engagement: 71,
      category: "عالم"
    }
  ];

  const trafficSources = [
    { source: "مباشر", percentage: 45, visitors: 15680 },
    { source: "وسائل التواصل", percentage: 28, visitors: 9754 },
    { source: "محركات البحث", percentage: 18, visitors: 6271 },
    { source: "مواقع أخرى", percentage: 9, visitors: 3136 }
  ];

  const timeData = [
    { time: "00:00", views: 1200 },
    { time: "04:00", views: 800 },
    { time: "08:00", views: 3500 },
    { time: "12:00", views: 4800 },
    { time: "16:00", views: 5200 },
    { time: "20:00", views: 6100 }
  ];

  const countries = [
    { country: "لبنان", flag: "🇱🇧", percentage: 35, visitors: 12180 },
    { country: "السعودية", flag: "🇸🇦", percentage: 22, visitors: 7654 },
    { country: "الإمارات", flag: "🇦🇪", percentage: 18, visitors: 6264 },
    { country: "مصر", flag: "🇪🇬", percentage: 15, visitors: 5220 },
    { country: "الأردن", flag: "🇯🇴", percentage: 10, visitors: 3480 }
  ];

  return (
    <AdminLayout title="التحليلات والإحصائيات">
      <div className="space-y-8">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-navy">{stat.value}</p>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {stat.changeType === 'increase' ? (
                        <TrendingUp className="w-4 h-4 text-emerald" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-crimson" />
                      )}
                      <p className={`text-sm ${
                        stat.changeType === 'increase' ? 'text-emerald' : 'text-crimson'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traffic Chart */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-navy">الزيارات خلال 24 ساعة</h3>
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              {timeData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{data.time}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-navy to-crimson h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(data.views / 6100) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-navy">{data.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-navy">أعلى البلدان</h3>
              <Globe className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="font-medium text-foreground">{country.country}</div>
                      <div className="text-sm text-muted-foreground">{country.visitors.toLocaleString()} زائر</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald to-navy h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-navy w-8">
                      {country.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Articles */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-navy">أفضل المقالات</h3>
              <Award className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              {topArticles.map((article, index) => (
                <div key={index} className="p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-2 py-1 bg-navy/10 text-navy rounded-md">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-muted-foreground">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Target className="w-4 h-4" />
                        <span>{article.engagement}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-navy">مصادر الزيارات</h3>
              <BarChart3 className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-6">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{source.source}</span>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                      <span>{source.visitors.toLocaleString()}</span>
                      <span>•</span>
                      <span className="font-bold text-navy">{source.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        index === 0 ? 'bg-gradient-to-r from-navy to-navy/80' :
                        index === 1 ? 'bg-gradient-to-r from-emerald to-emerald/80' :
                        index === 2 ? 'bg-gradient-to-r from-crimson to-crimson/80' :
                        'bg-gradient-to-r from-amber-500 to-amber-600'
                      }`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy">رؤى الأداء</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-emerald">نقاط القوة</h4>
                <TrendingUp className="w-5 h-5 text-emerald" />
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• معدل المشاركة مرتفع (+15%)</li>
                <li>• وقت القراءة زاد بنسبة 8%</li>
                <li>• نمو المشتركين المميزين</li>
                <li>• تحسن في ترتيب SEO</li>
              </ul>
            </div>
            
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-amber-600">فرص التحسين</h4>
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• تحسين سرعة تحميل الصفحات</li>
                <li>• زيادة التفاعل على وسائل التواصل</li>
                <li>• تطوير محتوى الفيديو</li>
                <li>• تحسين معدل التحويل</li>
              </ul>
            </div>
            
            <div className="p-4 bg-crimson/5 border border-crimson/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-crimson">تحديات</h4>
                <TrendingDown className="w-5 h-5 text-crimson" />
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• انخفاض طفيف في الزيارات المباشرة</li>
                <li>• معدل الارتداد مرتفع في بعض الصفحات</li>
                <li>• تحسين تجربة المستخدم على الموبايل</li>
                <li>• زيادة معدل الاشتراك في النشرة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;