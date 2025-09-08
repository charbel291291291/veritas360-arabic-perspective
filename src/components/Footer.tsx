import { Globe, Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    about: {
      title: "عن المنصّة",
      links: [
        { title: "من نحن", href: "#" },
        { title: "رؤيتنا ورسالتنا", href: "#" },
        { title: "فريق العمل", href: "#" },
        { title: "الشراكات", href: "#" },
        { title: "الجوائز والتقديرات", href: "#" }
      ]
    },
    legal: {
      title: "الشروط والسياسات",
      links: [
        { title: "سياسة الخصوصية", href: "#" },
        { title: "شروط الاستخدام", href: "#" },
        { title: "سياسة ملفات تعريف الارتباط", href: "#" },
        { title: "إرشادات المجتمع", href: "#" },
        { title: "حقوق الطبع والنشر", href: "#" }
      ]
    },
    services: {
      title: "خدماتنا",
      links: [
        { title: "الاشتراك المميز", href: "#" },
        { title: "خدمات الشركات", href: "#" },
        { title: "الإعلانات", href: "#" },
        { title: "واجهة برمجة التطبيقات", href: "#" },
        { title: "النشرة الإخبارية", href: "#" }
      ]
    },
    contact: {
      title: "تواصل معنا",
      links: [
        { title: "اتصل بنا", href: "#" },
        { title: "مركز المساعدة", href: "#" },
        { title: "تقارير الأخطاء", href: "#" },
        { title: "اقتراحات التحسين", href: "#" },
        { title: "للصحفيين", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { icon: Twitter, href: "#", name: "تويتر" },
    { icon: Facebook, href: "#", name: "فيسبوك" },
    { icon: Instagram, href: "#", name: "إنستغرام" },
    { icon: Youtube, href: "#", name: "يوتيوب" },
    { icon: Linkedin, href: "#", name: "لينكدإن" }
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold">Veritas360</h3>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6">
              منصّة عربية حديثة للأخبار والتحليلات السياسية بمنظور عالمي وتقنيات ذكاء اصطناعي متطورة.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/70">
                <Mail className="w-4 h-4" />
                <span>info@veritas360.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/70">
                <Phone className="w-4 h-4" />
                <span>+966 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/70">
                <MapPin className="w-4 h-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-heading font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              <p>© 2024 Veritas360. جميع الحقوق محفوظة.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-white/70 text-sm ml-4">تابعنا:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="text-white/70 text-sm">
              <p>مصدر موثوق للأخبار العربية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-white/10 bg-navy/50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span>محتوى متوازن ومحايد</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-crimson rounded-full"></div>
              <span>تحقق صحفي دقيق</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <span>شفافية في المصادر</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span>حماية خصوصية القراء</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};