import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2, MapPin, Package } from "lucide-react";

const Warehouses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for warehouses
  const warehouses = [
    {
      id: 1,
      name: "Main Storage",
      location: "New York, NY",
      address: "123 Industrial Blvd, New York, NY 10001",
      capacity: 10000,
      currentStock: 8250,
      manager: "John Smith",
      phone: "+1 (555) 123-4567",
      status: "Active",
      itemCount: 1245
    },
    {
      id: 2,
      name: "Office Supplies",
      location: "Chicago, IL",
      address: "456 Commerce St, Chicago, IL 60601",
      capacity: 5000,
      currentStock: 3200,
      manager: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      status: "Active",
      itemCount: 687
    },
    {
      id: 3,
      name: "Electronics Hub",
      location: "Austin, TX",
      address: "789 Tech Way, Austin, TX 73301",
      capacity: 15000,
      currentStock: 12500,
      manager: "Mike Davis",
      phone: "+1 (555) 456-7890",
      status: "Active",
      itemCount: 892
    },
    {
      id: 4,
      name: "Kitchen Depot",
      location: "Portland, OR",
      address: "321 Culinary Ave, Portland, OR 97201",
      capacity: 3000,
      currentStock: 150,
      manager: "Emily Chen",
      phone: "+1 (555) 234-5678",
      status: "Low Capacity",
      itemCount: 23
    },
    {
      id: 5,
      name: "Backup Storage",
      location: "Phoenix, AZ",
      address: "654 Desert Dr, Phoenix, AZ 85001",
      capacity: 8000,
      currentStock: 0,
      manager: "Robert Wilson",
      phone: "+1 (555) 345-6789",
      status: "Inactive",
      itemCount: 0
    },
  ];

  const filteredWarehouses = warehouses.filter(warehouse =>
    warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    warehouse.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    warehouse.manager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Low Capacity":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCapacityPercentage = (current, capacity) => {
    return Math.round((current / capacity) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Warehouses</h1>
          <p className="text-gray-600">Manage your warehouse locations and storage</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Warehouse
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search warehouses by name, location, or manager..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Warehouses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredWarehouses.map((warehouse) => (
          <div key={warehouse.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{warehouse.name}</h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{warehouse.location}</span>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(warehouse.status)}`}>
                  {warehouse.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Address:</span>
                  <span className="text-gray-900 text-right">{warehouse.address}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Manager:</span>
                  <span className="text-gray-900">{warehouse.manager}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Phone:</span>
                  <span className="text-gray-900">{warehouse.phone}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Items:</span>
                  <div className="flex items-center">
                    <Package className="h-4 w-4 mr-1 text-gray-400" />
                    <span className="text-gray-900">{warehouse.itemCount}</span>
                  </div>
                </div>
              </div>

              {/* Capacity Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Capacity</span>
                  <span>{warehouse.currentStock.toLocaleString()} / {warehouse.capacity.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      getCapacityPercentage(warehouse.currentStock, warehouse.capacity) > 80
                        ? 'bg-red-600'
                        : getCapacityPercentage(warehouse.currentStock, warehouse.capacity) > 60
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${getCapacityPercentage(warehouse.currentStock, warehouse.capacity)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {getCapacityPercentage(warehouse.currentStock, warehouse.capacity)}% capacity used
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-200">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredWarehouses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No warehouses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Warehouses;