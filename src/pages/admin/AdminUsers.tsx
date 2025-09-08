import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { 
  Users, 
  Search, 
  Filter, 
  UserPlus, 
  Edit, 
  Ban, 
  MoreHorizontal,
  Crown,
  Calendar,
  Mail,
  MapPin,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("الكل");

  const users = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed.mohamed@example.com",
      role: "مشترك مميز",
      status: "نشط",
      country: "لبنان",
      joinDate: "2024-01-15",
      lastActive: "منذ 5 دقائق",
      articlesRead: 245,
      comments: 67,
      quizScore: 1420,
      avatar: "أ"
    },
    {
      id: 2,
      name: "فاطمة حسن",
      email: "fatima.hassan@example.com",
      role: "مستخدم عادي",
      status: "نشط",
      country: "السعودية",
      joinDate: "2024-01-10",
      lastActive: "منذ ساعة",
      articlesRead: 189,
      comments: 34,
      quizScore: 890,
      avatar: "ف"
    },
    {
      id: 3,
      name: "محمد العلي",
      email: "mohammed.ali@example.com",
      role: "محرر",
      status: "نشط",
      country: "الإمارات",
      joinDate: "2023-12-20",
      lastActive: "منذ 10 دقائق",
      articlesRead: 567,
      comments: 123,
      quizScore: 2340,
      avatar: "م"
    },
    {
      id: 4,
      name: "ليلى أحمد",
      email: "layla.ahmed@example.com",
      role: "مشترك مميز",
      status: "غير نشط",
      country: "مصر",
      joinDate: "2023-11-15",
      lastActive: "منذ يومين",
      articlesRead: 298,
      comments: 89,
      quizScore: 1650,
      avatar: "ل"
    },
    {
      id: 5,
      name: "سارة خليل",
      email: "sara.khalil@example.com",
      role: "مدير",
      status: "نشط",
      country: "الأردن",
      joinDate: "2023-10-01",
      lastActive: "الآن",
      articlesRead: 789,
      comments: 234,
      quizScore: 3210,
      avatar: "س"
    }
  ];

  const roles = ["الكل", "مستخدم عادي", "مشترك مميز", "محرر", "مدير"];
  const statuses = ["الكل", "نشط", "غير نشط", "محظور"];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'مدير': return 'bg-crimson/10 text-crimson';
      case 'محرر': return 'bg-navy/10 text-navy';
      case 'مشترك مميز': return 'bg-emerald/10 text-emerald';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'نشط': return 'bg-emerald/10 text-emerald';
      case 'غير نشط': return 'bg-amber-500/10 text-amber-600';
      case 'محظور': return 'bg-red-500/10 text-red-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'مدير': return Crown;
      case 'محرر': return Edit;
      case 'مشترك مميز': return Crown;
      default: return Users;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "الكل" || user.role === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout title="إدارة المستخدمين">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">إجمالي المستخدمين</p>
                <p className="text-3xl font-bold text-navy">15,420</p>
                <p className="text-sm text-emerald">+5% من الشهر الماضي</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-navy to-navy/80 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">المشتركين المميزين</p>
                <p className="text-3xl font-bold text-navy">2,340</p>
                <p className="text-sm text-emerald">+12% من الشهر الماضي</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-emerald to-emerald/80 rounded-xl">
                <Crown className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">نشطين اليوم</p>
                <p className="text-3xl font-bold text-navy">8,920</p>
                <p className="text-sm text-emerald">+8% من أمس</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-crimson to-crimson/80 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">مستخدمين جدد</p>
                <p className="text-3xl font-bold text-navy">127</p>
                <p className="text-sm text-emerald">هذا الأسبوع</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="البحث في المستخدمين..."
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
                {roles.map((role) => (
                  <DropdownMenuItem
                    key={role}
                    onClick={() => setSelectedFilter(role)}
                  >
                    {role}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button className="btn-accent">
            <UserPlus className="w-4 h-4 ml-2" />
            مستخدم جديد
          </Button>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredUsers.map((user) => {
            const RoleIcon = getRoleIcon(user.role);
            return (
              <div key={user.id} className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                {/* User Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{user.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy text-lg">{user.name}</h3>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
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
                        <Mail className="w-4 h-4 ml-2" />
                        إرسال رسالة
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Ban className="w-4 h-4 ml-2" />
                        حظر
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* User Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{user.country}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">
                      {new Date(user.joinDate).toLocaleDateString('ar')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{user.lastActive}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RoleIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{user.role}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-3 bg-muted/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">{user.articlesRead}</div>
                    <div className="text-xs text-muted-foreground">مقال مقروء</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">{user.comments}</div>
                    <div className="text-xs text-muted-foreground">تعليق</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">{user.quizScore.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">نقاط الاختبار</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 ml-1" />
                    تحرير
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <Mail className="w-4 h-4 ml-1" />
                    رسالة
                  </Button>
                </div>
              </div>
            );
          })}
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

export default AdminUsers;