import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Eye, 
  Trash2, 
  MoreHorizontal,
  Calendar,
  User,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminArticles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("الكل");

  const articles = [
    {
      id: 1,
      title: "مؤتمر السلام الدولي يحقق تقدماً مهماً في المفاوضات",
      author: "أحمد محمود",
      category: "سياسة",
      status: "منشور",
      views: 15420,
      comments: 87,
      publishDate: "2024-01-15",
      bias: "محايد",
      verification: "مؤكد"
    },
    {
      id: 2,
      title: "الاقتصاد العالمي يشهد تطورات إيجابية في الربع الأخير",
      author: "فاطمة حسن",
      category: "اقتصاد",
      status: "مسودة",
      views: 8930,
      comments: 45,
      publishDate: "2024-01-14",
      bias: "يميل لليسار",
      verification: "يحتاج تحقق"
    },
    {
      id: 3,
      title: "تطورات جديدة في تقنيات الذكاء الاصطناعي وتأثيرها على المستقبل",
      author: "محمد العلي",
      category: "تكنولوجيا",
      status: "منشور",
      views: 12100,
      comments: 134,
      publishDate: "2024-01-13",
      bias: "محايد",
      verification: "مؤكد"
    },
    {
      id: 4,
      title: "انتخابات أوروبية تشهد مشاركة قياسية وتنوع في النتائج",
      author: "ليلى أحمد",
      category: "سياسة",
      status: "مراجعة",
      views: 6750,
      comments: 92,
      publishDate: "2024-01-12",
      bias: "يميل لليمين",
      verification: "مؤكد"
    },
    {
      id: 5,
      title: "قمة المناخ تحقق اتفاقاً تاريخياً حول خفض الانبعاثات",
      author: "سارة خليل",
      category: "عالم",
      status: "منشور",
      views: 18900,
      comments: 156,
      publishDate: "2024-01-11",
      bias: "محايد",
      verification: "مؤكد"
    }
  ];

  const categories = ["الكل", "سياسة", "اقتصاد", "عالم", "رأي", "تكنولوجيا"];
  const statuses = ["الكل", "منشور", "مسودة", "مراجعة"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'منشور': return 'bg-emerald/10 text-emerald';
      case 'مسودة': return 'bg-amber-500/10 text-amber-600';
      case 'مراجعة': return 'bg-blue-500/10 text-blue-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getBiasColor = (bias: string) => {
    switch (bias) {
      case 'محايد': return 'bias-neutral';
      case 'يميل لليسار': return 'bias-left';
      case 'يميل لليمين': return 'bias-right';
      default: return 'bias-neutral';
    }
  };

  const getVerificationColor = (verification: string) => {
    return verification === 'مؤكد' ? 'verified' : 'needs-verification';
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "الكل" || article.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout title="إدارة المقالات">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="البحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 w-80"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Filter className="w-4 h-4" />
                  <span>{selectedFilter}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button className="btn-accent">
            <Plus className="w-4 h-4 ml-2" />
            مقال جديد
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Article Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-navy text-lg leading-tight mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 ml-2" />
                      تحرير
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 ml-2" />
                      معاينة
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 ml-2" />
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(article.status)}`}>
                  {article.status}
                </span>
                <span className="px-2 py-1 bg-navy/10 text-navy rounded-md text-xs font-medium">
                  {article.category}
                </span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getBiasColor(article.bias)}`}>
                  {article.bias}
                </span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getVerificationColor(article.verification)}`}>
                  {article.verification}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-crimson" />
                  </div>
                  <div className="text-sm font-bold text-navy">{article.views.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">مشاهدة</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <MessageSquare className="w-4 h-4 text-emerald" />
                  </div>
                  <div className="text-sm font-bold text-navy">{article.comments}</div>
                  <div className="text-xs text-muted-foreground">تعليق</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Calendar className="w-4 h-4 text-navy" />
                  </div>
                  <div className="text-sm font-bold text-navy">
                    {new Date(article.publishDate).toLocaleDateString('ar')}
                  </div>
                  <div className="text-xs text-muted-foreground">تاريخ النشر</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 ml-1" />
                  تحرير
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4 ml-1" />
                  معاينة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center pt-8">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="outline" size="sm">السابق</Button>
            <Button variant="outline" size="sm" className="bg-navy text-white">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">التالي</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminArticles;