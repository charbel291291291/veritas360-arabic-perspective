import { AdminLayout } from "@/components/AdminLayout";
import { 
  Users, 
  FileText, 
  Eye, 
  TrendingUp, 
  MessageSquare, 
  DollarSign,
  Calendar,
  Globe,
  BarChart3,
  Clock
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "إجمالي المقالات",
      value: "1,234",
      change: "+12%",
      changeType: "increase" as const,
      icon: FileText,
      color: "from-navy to-navy/80"
    },
    {
      title: "المستخدمين النشطين",
      value: "15,420",
      change: "+5%",
      changeType: "increase" as const,
      icon: Users,
      color: "from-emerald to-emerald/80"
    },
    {
      title: "مشاهدات اليوم",
      value: "45,678",
      change: "+8%",
      changeType: "increase" as const,
      icon: Eye,
      color: "from-crimson to-crimson/80"
    },
    {
      title: "الإيرادات الشهرية",
      value: "$12,340",
      change: "+15%",
      changeType: "increase" as const,
      icon: DollarSign,
      color: "from-amber-500 to-amber-600"
    }
  ];

  const recentArticles = [
    {
      title: "مؤتمر السلام الدولي يحقق تقدماً مهماً",
      author: "أحمد محمود",
      views: 15420,
      status: "منشور",
      date: "قبل ساعتين"
    },
    {
      title: "الاقتصاد العالمي يشهد تطورات إيجابية",
      author: "فاطمة حسن",
      views: 8930,
      status: "مسودة",
      date: "قبل 4 ساعات"
    },
    {
      title: "تطورات جديدة في تقنيات الذكاء الاصطناعي",
      author: "محمد العلي",
      views: 12100,
      status: "منشور",
      date: "أمس"
    }
  ];

  const topCountries = [
    { country: "لبنان", percentage: 35, flag: "🇱🇧" },
    { country: "السعودية", percentage: 22, flag: "🇸🇦" },
    { country: "الإمارات", percentage: 18, flag: "🇦🇪" },
    { country: "مصر", percentage: 15, flag: "🇪🇬" },
    { country: "الأردن", percentage: 10, flag: "🇯🇴" }
  ];

  return (
    <AdminLayout title="لوحة التحكم">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-navy">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.changeType === 'increase' ? 'text-emerald' : 'text-crimson'
                    }`}>
                      {stat.change} من الشهر الماضي
                    </p>
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
          {/* Recent Articles */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-navy">أحدث المقالات</h3>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="w-4 h-4 ml-1" />
                <span>آخر تحديث: الآن</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-muted-foreground">
                      <span>بواسطة {article.author}</span>
                      <span>•</span>
                      <span>{article.views.toLocaleString()} مشاهدة</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      article.status === 'منشور' 
                        ? 'bg-emerald/10 text-emerald' 
                        : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      {article.status}
                    </span>
                  </div>
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
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-medium text-foreground">{country.country}</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-navy to-crimson h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground w-8">
                      {country.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-xl font-heading font-bold text-navy mb-6">إجراءات سريعة</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-navy/5 hover:bg-navy/10 rounded-lg transition-colors group">
              <FileText className="w-8 h-8 text-navy group-hover:text-crimson transition-colors" />
              <div className="text-right">
                <p className="font-semibold text-foreground">مقال جديد</p>
                <p className="text-sm text-muted-foreground">إنشاء مقال أو خبر جديد</p>
              </div>
            </button>

            <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-emerald/5 hover:bg-emerald/10 rounded-lg transition-colors group">
              <MessageSquare className="w-8 h-8 text-emerald group-hover:text-navy transition-colors" />
              <div className="text-right">
                <p className="font-semibold text-foreground">موضوع نقاش</p>
                <p className="text-sm text-muted-foreground">إضافة موضوع جديد للنقاش</p>
              </div>
            </button>

            <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-crimson/5 hover:bg-crimson/10 rounded-lg transition-colors group">
              <BarChart3 className="w-8 h-8 text-crimson group-hover:text-navy transition-colors" />
              <div className="text-right">
                <p className="font-semibold text-foreground">تقرير شامل</p>
                <p className="text-sm text-muted-foreground">إنشاء تقرير تحليلي</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;