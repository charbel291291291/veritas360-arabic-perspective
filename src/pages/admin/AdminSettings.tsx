import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { 
  Save, 
  Globe, 
  Bell, 
  Shield, 
  Palette, 
  Mail,
  Database,
  Key,
  Users,
  FileText,
  Settings,
  Eye,
  EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  const [showApiKeys, setShowApiKeys] = useState(false);
  
  const [settings, setSettings] = useState({
    // Site Settings
    siteName: "Veritas360",
    siteDescription: "منصّة عربية حديثة للأخبار والسياسة",
    siteUrl: "https://veritas360.com",
    adminEmail: "admin@veritas360.com",
    
    // Content Settings
    articlesPerPage: 12,
    autoPublish: false,
    moderationRequired: true,
    aiAnalysisEnabled: true,
    
    // User Settings
    allowRegistration: true,
    requireEmailVerification: true,
    premiumSubscriptionEnabled: true,
    premiumPrice: 19,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    adminAlerts: true,
    weeklyReports: true,
    
    // Security Settings
    twoFactorAuth: true,
    passwordStrength: "strong",
    sessionTimeout: 24,
    
    // API Keys (masked)
    openaiApiKey: "sk-************************************",
    stripeSecretKey: "sk_************************************",
    emailServiceKey: "************************************"
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save settings logic here
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم تحديث جميع الإعدادات بنجاح",
    });
  };

  const settingSections = [
    {
      title: "إعدادات الموقع العامة",
      icon: Globe,
      color: "from-navy to-navy/80",
      settings: [
        { key: "siteName", label: "اسم الموقع", type: "text" },
        { key: "siteDescription", label: "وصف الموقع", type: "textarea" },
        { key: "siteUrl", label: "رابط الموقع", type: "url" },
        { key: "adminEmail", label: "بريد المدير", type: "email" }
      ]
    },
    {
      title: "إعدادات المحتوى",
      icon: FileText,
      color: "from-emerald to-emerald/80",
      settings: [
        { key: "articlesPerPage", label: "عدد المقالات في الصفحة", type: "number" },
        { key: "autoPublish", label: "النشر التلقائي للمقالات", type: "switch" },
        { key: "moderationRequired", label: "مراجعة التعليقات مطلوبة", type: "switch" },
        { key: "aiAnalysisEnabled", label: "تفعيل تحليل الذكاء الاصطناعي", type: "switch" }
      ]
    },
    {
      title: "إعدادات المستخدمين",
      icon: Users,
      color: "from-crimson to-crimson/80",
      settings: [
        { key: "allowRegistration", label: "السماح بالتسجيل الجديد", type: "switch" },
        { key: "requireEmailVerification", label: "تأكيد البريد الإلكتروني مطلوب", type: "switch" },
        { key: "premiumSubscriptionEnabled", label: "تفعيل الاشتراك المميز", type: "switch" },
        { key: "premiumPrice", label: "سعر الاشتراك المميز ($)", type: "number" }
      ]
    },
    {
      title: "إعدادات الإشعارات",
      icon: Bell,
      color: "from-amber-500 to-amber-600",
      settings: [
        { key: "emailNotifications", label: "إشعارات البريد الإلكتروني", type: "switch" },
        { key: "pushNotifications", label: "الإشعارات الفورية", type: "switch" },
        { key: "adminAlerts", label: "تنبيهات الإدارة", type: "switch" },
        { key: "weeklyReports", label: "التقارير الأسبوعية", type: "switch" }
      ]
    },
    {
      title: "إعدادات الأمان",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      settings: [
        { key: "twoFactorAuth", label: "المصادقة الثنائية", type: "switch" },
        { key: "sessionTimeout", label: "انتهاء الجلسة (ساعة)", type: "number" }
      ]
    }
  ];

  const renderSettingInput = (setting: any) => {
    const value = settings[setting.key as keyof typeof settings];
    
    switch (setting.type) {
      case "text":
      case "url":
      case "email":
      case "number":
        return (
          <Input
            type={setting.type}
            value={value as string | number}
            onChange={(e) => handleSettingChange(setting.key, 
              setting.type === "number" ? parseInt(e.target.value) : e.target.value
            )}
            className="text-right"
          />
        );
      case "textarea":
        return (
          <Textarea
            value={value as string}
            onChange={(e) => handleSettingChange(setting.key, e.target.value)}
            className="text-right"
          />
        );
      case "switch":
        return (
          <Switch
            checked={value as boolean}
            onCheckedChange={(checked) => handleSettingChange(setting.key, checked)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AdminLayout title="إعدادات النظام">
      <div className="space-y-8">
        {/* Settings Sections */}
        {settingSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <div className={`p-3 bg-gradient-to-r ${section.color} rounded-xl`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy">{section.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.settings.map((setting) => (
                  <div key={setting.key} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {setting.label}
                    </label>
                    {setting.type === "switch" ? (
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {renderSettingInput(setting)}
                        <span className="text-sm text-muted-foreground">
                          {settings[setting.key as keyof typeof settings] ? "مفعّل" : "معطّل"}
                        </span>
                      </div>
                    ) : (
                      renderSettingInput(setting)
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* API Keys Section */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy">مفاتيح API</h3>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setShowApiKeys(!showApiKeys)}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              {showApiKeys ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showApiKeys ? "إخفاء" : "عرض"}</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">مفتاح OpenAI</label>
              <Input
                type={showApiKeys ? "text" : "password"}
                value={settings.openaiApiKey}
                onChange={(e) => handleSettingChange("openaiApiKey", e.target.value)}
                className="font-mono text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">مفتاح Stripe السري</label>
              <Input
                type={showApiKeys ? "text" : "password"}
                value={settings.stripeSecretKey}
                onChange={(e) => handleSettingChange("stripeSecretKey", e.target.value)}
                className="font-mono text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">مفتاح خدمة البريد الإلكتروني</label>
              <Input
                type={showApiKeys ? "text" : "password"}
                value={settings.emailServiceKey}
                onChange={(e) => handleSettingChange("emailServiceKey", e.target.value)}
                className="font-mono text-sm"
              />
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-sm text-amber-600">
              ⚠️ تنبيه: مفاتيح API حساسة جداً. لا تشاركها مع أحد ولا تضعها في أماكن عامة.
            </p>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy">حالة النظام</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-emerald/5 rounded-lg">
              <div className="w-3 h-3 bg-emerald rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-emerald">قاعدة البيانات</div>
              <div className="text-sm text-muted-foreground">متصلة</div>
            </div>
            
            <div className="text-center p-4 bg-emerald/5 rounded-lg">
              <div className="w-3 h-3 bg-emerald rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-emerald">خدمة البريد</div>
              <div className="text-sm text-muted-foreground">تعمل بشكل طبيعي</div>
            </div>
            
            <div className="text-center p-4 bg-emerald/5 rounded-lg">
              <div className="w-3 h-3 bg-emerald rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-emerald">الذكاء الاصطناعي</div>
              <div className="text-sm text-muted-foreground">متاح</div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-6">
          <Button onClick={handleSave} className="btn-hero px-12 py-3 text-lg">
            <Save className="w-5 h-5 ml-2" />
            حفظ جميع الإعدادات
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;