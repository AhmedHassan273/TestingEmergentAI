import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Warehouse, 
  FolderOpen, 
  FileText, 
  BarChart3,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Items", href: "/items", icon: Package },
    { name: "Warehouses", href: "/warehouses", icon: Warehouse },
    { name: "Categories", href: "/categories", icon: FolderOpen },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "Reports", href: "/reports", icon: BarChart3 },
  ];

  const isActive = (href) => {
    if (href === "/dashboard" && location.pathname === "/") return true;
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-xl font-bold text-gray-900">WMS Dashboard</h1>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <nav className="mt-8 px-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white shadow-lg">
          <div className="flex h-16 items-center px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">WMS Dashboard</h1>
          </div>
          <nav className="flex-1 px-4 py-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 lg:hidden">
          <div className="flex h-16 items-center bg-white px-4 shadow-sm">
            <button
              onClick={() => setSidebarOpen(true)}
              className="border-r border-gray-200 pr-4 text-gray-500"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="ml-4 text-lg font-semibold text-gray-900">WMS Dashboard</h1>
          </div>
        </div>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;