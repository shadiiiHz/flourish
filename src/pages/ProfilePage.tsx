import { LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="mx-auto flex min-h-[60svh] max-w-2xl flex-col items-center gap-4 px-4 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-50 text-sand-500">
        <User className="h-7 w-7" />
      </span>
      <h1 className="font-display text-xl font-bold text-cocoa-900">پروفایل کاربری</h1>
      {user && (
        <p className="text-sm text-cocoa-600" dir="ltr">
          {user.phone}
        </p>
      )}
      <p className="text-sm text-cocoa-500">این بخش به‌زودی تکمیل می‌شود.</p>
      <button
        type="button"
        onClick={logout}
        className="mt-2 flex items-center gap-2 rounded-full border-2 border-sand-100 px-5 py-2.5 text-sm font-bold text-cocoa-700 transition hover:bg-sand-50"
      >
        <LogOut className="h-4 w-4" />
        خروج از حساب
      </button>
    </div>
  );
}

export default ProfilePage;
