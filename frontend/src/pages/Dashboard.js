import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Package,
  Warehouse,
  AlertTriangle,
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Archive,
} from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const inventoryData = [
    { month: "Jan", items: 1200 },
    { month: "Feb", items: 1350 },
    { month: "Mar", items: 1100 },
    { month: "Apr", items: 1450 },
    { month: "May", items: 1600 },
    { month: "Jun", items: 1380 },
  ];

  const warehouseData = [
    { name: "Electronics", value: 45, color: "#3b82f6" },
    { name: "Clothing", value: 30, color: "#10b981" },
    { name: "Food", value: 15, color: "#f59e0b" },
    { name: "Books", value: 10, color: "#ef4444" },
  ];

  const recentActivity = [
    { id: 1, action: "New item added", item: "MacBook Pro", time: "2 minutes ago", type: "success" },
    { id: 2, action: "Low stock alert", item: "Office Chairs", time: "15 minutes ago", type: "warning" },
    { id: 3, action: "Invoice generated", item: "INV-2024-001", time: "1 hour ago", type: "info" },
    { id: 4, action: "Warehouse updated", item: "Main Storage", time: "3 hours ago", type: "info" },
    { id: 5, action: "Item deleted", item: "Old Inventory", time: "5 hours ago", type: "error" },
  ];

  const lowStockItems = [
    { id: 1, name: "Office Chairs", current: 5, minimum: 20, warehouse: "Main Storage" },
    { id: 2, name: "Printer Paper", current: 12, minimum: 50, warehouse: "Office Supplies" },
    { id: 3, name: "USB Cables", current: 8, minimum: 25, warehouse: "Electronics" },
    { id: 4, name: "Coffee Beans", current: 3, minimum: 15, warehouse: "Kitchen" },
  ];

  const quickActions = [
    { name: "Add New Item", icon: Plus, color: "bg-blue-500", href: "/items" },
    { name: "View Reports", icon: Eye, color: "bg-green-500", href: "/reports" },
    { name: "Manage Warehouses", icon: Edit, color: "bg-purple-500", href: "/warehouses" },
    { name: "Archive Items", icon: Archive, color: "bg-orange-500", href: "/items" },
  ];

  const stats = [
    { name: "Total Items", value: "2,847", icon: Package, change: "+12%", changeType: "positive" },
    { name: "Warehouses", value: "8", icon: Warehouse, change: "+1", changeType: "positive" },
    { name: "Low Stock Items", value: "23", icon: AlertTriangle, change: "-5", changeType: "positive" },
    { name: "Monthly Revenue", value: "$45,231", icon: TrendingUp, change: "+8.2%", changeType: "positive" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your warehouse.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Trends */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="items" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Warehouse Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Warehouse Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={warehouseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {warehouseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.name}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-full ${action.color} text-white mb-2`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">{action.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alerts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Low Stock Alerts</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {lowStockItems.length} items
            </span>
          </div>
          <div className="space-y-3">
            {lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.warehouse}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">
                    {item.current} / {item.minimum}
                  </p>
                  <p className="text-xs text-gray-500">Current / Minimum</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' :
                  activity.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.action}:</span> {activity.item}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;