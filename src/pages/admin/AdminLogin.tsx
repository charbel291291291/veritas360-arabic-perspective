import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Eye, EyeOff, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - replace with real authentication
    setTimeout(() => {
      if (email === "admin@veritas360.com" && password === "admin123") {
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك في لوحة التحكم",
        });
        navigate("/admin/dashboard");
      } else {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/90 to-crimson/20 flex items-center justify-center p-4" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="admin-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
              <path d="M5,5 Q10,2 15,5 Q18,10 15,15 Q10,18 5,15 Q2,10 5,5" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#admin-pattern)" />
        </svg>
      </div>

      <div className="max-w-md w-full space-y-8 relative">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">
            لوحة التحكم الإدارية
          </h1>
          <p className="text-white/70">
            Veritas360 - نظام إدارة المحتوى
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-10 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40"
                  placeholder="admin@veritas360.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-white">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-10 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40"
                  placeholder="كلمة المرور"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-navy hover:bg-white/90 font-heading font-semibold py-3"
            >
              {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/70 text-sm text-center mb-2">بيانات تجريبية:</p>
            <p className="text-white/90 text-xs text-center">
              البريد: admin@veritas360.com<br/>
              كلمة المرور: admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/60 text-sm">
          <p>© 2024 Veritas360. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;