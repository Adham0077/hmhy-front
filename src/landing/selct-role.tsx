import { useNavigate } from "react-router-dom";
import { Shield, GraduationCap, Users, ArrowRight } from "lucide-react";

export default function RoleSelect() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Admin",
      desc: "Tizimni boshqarish va nazorat",
      icon: <Shield className="w-6 h-6" />,
      path: "/admin/login",
      gradient: "from-slate-600 via-gray-500 to-slate-400",
      glow: "group-hover:shadow-slate-600/50"
    },
    {
      title: "Teacher",
      desc: "Darslar va guruhlarni boshqarish",
      icon: <GraduationCap className="w-6 h-6" />,
      path: "/teacher/login",
      gradient: "from-sky-600 via-blue-500 to-sky-400",
      glow: "group-hover:shadow-sky-600/50"
    },
    {
      title: "Student",
      desc: "Telegram bot orqali ro'yxatdan o'tish",
      icon: <Users className="w-6 h-6" />,
      path: "/telegram",
      gradient: "from-emerald-600 via-green-500 to-emerald-400",
      glow: "group-hover:shadow-emerald-600/50"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-4 font-sans relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-sky-600/20 rounded-full blur-3xl" />

      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <h1 className="text-6xl font-black text-white mb-2">HMHY</h1>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white mb-3">
            Xush Kelibsiz
          </p>
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight">
            CRM tizimiga kirish
          </h2>
          <p className="text-slate-400 text-sm">Davom etish uchun rolingizni tanlang</p>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.path}
              onClick={() => navigate(role.path)}
              className={`group relative w-full flex items-center p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:border-slate-600 shadow-lg hover:shadow-2xl ${role.glow} overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-linear-to-r ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`relative shrink-0 w-14 h-14 rounded-xl bg-linear-to-br ${role.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {role.icon}
              </div>
              
              <div className="relative ml-5 text-left grow">
                <h3 className="text-lg font-bold text-white group-hover:text-white group-hover:bg-clip-text transition-all duration-300">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium mt-0.5">
                  {role.desc}
                </p>
              </div>

              <div className="relative opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-slate-400 group-hover:text-white">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-500 text-xs font-medium">
          © 2026 HMHY Platform. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}