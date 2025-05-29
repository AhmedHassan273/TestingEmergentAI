import { useState } from "react";
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
  AreaChart,
  Area,
} from "recharts";
import { Download, FileText, TrendingUp, Calendar, Filter } from "lucide-react";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState("inventory-summary");
  const [dateRange, setDateRange] = useState("last-30-days");

  const reportTypes = [
    { value: "inventory-summary", label: "Inventory Summary Report" },
    { value: "sales-analytics", label: "Sales Analytics Report" },
    { value: "warehouse-utilization", label: "Warehouse Utilization Report" },
    { value: "low-stock-report", label: "Low Stock Alert Report" },
    { value: "category-performance", label: "Category Performance Report" },
    { value: "invoice-aging", label: "Invoice Aging Report" },
    { value: "profit-loss", label: "Profit & Loss Report" },
  ];

  const dateRanges = [
    { value: "last-7-days", label: "Last 7 Days" },
    { value: "last-30-days", label: "Last 30 Days" },
    { value: "last-quarter", label: "Last Quarter" },
    { value: "last-year", label: "Last Year" },
    { value: "custom", label: "Custom Range" },
  ];

  // Mock data for different reports
  const inventoryData = [
    { month: "Jan", inStock: 2400, lowStock: 240, outOfStock: 40 },
    { month: "Feb", inStock: 2200, lowStock: 180, outOfStock: 35 },
    { month: "Mar", inStock: 2600, lowStock: 200, outOfStock: 25 },
    { month: "Apr", inStock: 2800, lowStock: 150, outOfStock: 20 },
    { month: "May", inStock: 3000, lowStock: 120, outOfStock: 15 },
    { month: "Jun", inStock: 2900, lowStock: 160, outOfStock: 30 },
  ];

  const salesData = [
    { month: "Jan", revenue: 45000, orders: 120, avgOrder: 375 },
    { month: "Feb", revenue: 52000, orders: 135, avgOrder: 385 },
    { month: "Mar", revenue: 48000, orders: 128, avgOrder: 375 },
    { month: "Apr", revenue: 61000, orders: 150, avgOrder: 407 },
    { month: "May", revenue: 55000, orders: 142, avgOrder: 387 },
    { month: "Jun", revenue: 67000, orders: 165, avgOrder: 406 },
  ];

  const warehouseUtilization = [
    { warehouse: "Main Storage", capacity: 100, utilization: 85, efficiency: 92 },
    { warehouse: "Electronics Hub", capacity: 100, utilization: 78, efficiency: 88 },
    { warehouse: "Office Supplies", capacity: 100, utilization: 65, efficiency: 85 },
    { warehouse: "Kitchen Depot", capacity: 100, utilization: 25, efficiency: 60 },
    { warehouse: "Backup Storage", capacity: 100, utilization: 0, efficiency: 0 },
  ];

  const categoryPerformance = [
    { name: "Electronics", value: 45, color: "#3b82f6" },
    { name: "Furniture", value: 25, color: "#10b981" },
    { name: "Kitchen", value: 15, color: "#f59e0b" },
    { name: "Stationery", value: 10, color: "#ef4444" },
    { name: "Others", value: 5, color: "#8b5cf6" },
  ];

  const renderReport = () => {
    switch (selectedReport) {
      case "inventory-summary":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="inStock" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="lowStock" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="outOfStock" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Inventory Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">In Stock Items</span>
                    <span className="text-green-900 text-2xl font-bold">2,847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-yellow-800 font-medium">Low Stock Items</span>
                    <span className="text-yellow-900 text-2xl font-bold">23</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-red-800 font-medium">Out of Stock</span>
                    <span className="text-red-900 text-2xl font-bold">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "sales-analytics":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Analytics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case "warehouse-utilization":
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Warehouse Utilization & Efficiency</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={warehouseUtilization}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="warehouse" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="utilization" fill="#3b82f6" name="Utilization %" />
                <Bar dataKey="efficiency" fill="#10b981" name="Efficiency %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case "category-performance":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Category Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryPerformance}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Category Performance Metrics</h3>
              <div className="space-y-4">
                {categoryPerformance.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-gray-600">{category.value}% of total</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-12 rounded-lg shadow text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Report Coming Soon</h3>
            <p className="text-gray-500">
              The {reportTypes.find(r => r.value === selectedReport)?.label} is currently being developed.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and analyze business reports</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </button>
      </div>

      {/* Report Controls */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {reportTypes.map(report => (
                  <option key={report.value} value={report.value}>
                    {report.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {dateRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Actions</label>
            <div className="flex space-x-2">
              <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate
              </button>
              <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="min-h-96">
        {renderReport()}
      </div>

      {/* Report Footer */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <span>Report generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</span>
          <span>Data range: {dateRanges.find(r => r.value === dateRange)?.label}</span>
        </div>
      </div>
    </div>
  );
};

export default Reports;