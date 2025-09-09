import { Search, Globe, User, Menu, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const navItems = ["عناوين", "سياسة", "اقتصاد", "عالم", "رأي", "تكنولوجيا"];
  const { user, signOut } = useAuth();
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-navy to-crimson rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-heading font-bold text-navy">Veritas360</h1>
              </div>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-crimson font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* Search */}
              <div className="hidden md:flex relative">
                <Input
                  type="search"
                  placeholder="ابحث في الأخبار..."
                  className="pl-10 pr-4 rtl:pl-4 rtl:pr-10 w-64 bg-muted/50 border-0 focus:bg-surface"
                />
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>

              {/* Auth Buttons */}
              {user ? (
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-navy hidden sm:block">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Button
                    onClick={() => signOut()}
                    variant="ghost"
                    size="sm"
                    className="text-navy hover:text-crimson"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                      <User className="w-4 h-4" />
                      <span>تسجيل الدخول</span>
                    </Button>
                  </Link>
                  
                  <Link to="/auth">
                    <Button className="btn-accent">
                      اشتراك بريميوم
                    </Button>
                  </Link>
                </>
              )}

              {/* Mobile Menu */}
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-crimson text-white py-2 overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center px-4 bg-navy/20">
            <Bell className="w-4 h-4 ml-2" />
            <span className="font-heading font-semibold text-sm">عاجل</span>
          </div>
          <div className="ticker-scroll flex items-center space-x-8 rtl:space-x-reverse whitespace-nowrap py-1">
            <span className="text-sm">الرئيس الأمريكي يعلن عن مبادرة جديدة للسلام في الشرق الأوسط</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">أسعار النفط ترتفع بنسبة 3% بعد قرارات أوبك الجديدة</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">مؤتمر المناخ العالمي يحقق اتفاقاً تاريخياً حول انبعاثات الكربون</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">بورصات آسيا تسجل مكاسب قوية تدعمها نتائج الشركات الإيجابية</span>
          </div>
        </div>
      </div>
    </>
  );
};