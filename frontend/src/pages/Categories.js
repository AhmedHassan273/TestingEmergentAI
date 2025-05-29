import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2, FolderOpen, Package } from "lucide-react";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for categories
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic devices, gadgets, and accessories",
      itemCount: 156,
      totalValue: 45780.50,
      parentCategory: null,
      status: "Active",
      createdDate: "2024-01-15",
      lastUpdated: "2024-03-10"
    },
    {
      id: 2,
      name: "Laptops",
      description: "Portable computers and accessories",
      itemCount: 45,
      totalValue: 125000.00,
      parentCategory: "Electronics",
      status: "Active",
      createdDate: "2024-01-20",
      lastUpdated: "2024-03-08"
    },
    {
      id: 3,
      name: "Furniture",
      description: "Office and home furniture items",
      itemCount: 89,
      totalValue: 23450.75,
      parentCategory: null,
      status: "Active",
      createdDate: "2024-02-01",
      lastUpdated: "2024-03-05"
    },
    {
      id: 4,
      name: "Office Chairs",
      description: "Ergonomic and standard office seating",
      itemCount: 25,
      totalValue: 8750.00,
      parentCategory: "Furniture",
      status: "Active",
      createdDate: "2024-02-05",
      lastUpdated: "2024-03-03"
    },
    {
      id: 5,
      name: "Kitchen",
      description: "Kitchen appliances and accessories",
      itemCount: 67,
      totalValue: 12300.25,
      parentCategory: null,
      status: "Active",
      createdDate: "2024-02-10",
      lastUpdated: "2024-03-01"
    },
    {
      id: 6,
      name: "Stationery",
      description: "Office supplies and writing materials",
      itemCount: 234,
      totalValue: 5680.50,
      parentCategory: null,
      status: "Active",
      createdDate: "2024-01-25",
      lastUpdated: "2024-02-28"
    },
    {
      id: 7,
      name: "Outdated Items",
      description: "Items that are no longer in use",
      itemCount: 12,
      totalValue: 450.00,
      parentCategory: null,
      status: "Inactive",
      createdDate: "2024-01-10",
      lastUpdated: "2024-02-15"
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (category.parentCategory && category.parentCategory.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryLevel = (parentCategory) => {
    return parentCategory ? 1 : 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">Organize your inventory with categories</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories by name, description, or parent category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 mr-3 ${getCategoryLevel(category.parentCategory) > 0 ? 'ml-6' : ''}`}>
                        <FolderOpen className={`h-5 w-5 ${getCategoryLevel(category.parentCategory) > 0 ? 'text-blue-400' : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.parentCategory || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Package className="h-4 w-4 mr-1 text-gray-400" />
                      {category.itemCount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${category.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(category.status)}`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(category.lastUpdated).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No categories found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FolderOpen className="h-8 w-8 text-blue-500" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">Total Categories</div>
              <div className="text-2xl font-semibold text-gray-900">{categories.length}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Package className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">Total Items</div>
              <div className="text-2xl font-semibold text-gray-900">
                {categories.reduce((sum, cat) => sum + cat.itemCount, 0)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm font-bold">$</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">Total Value</div>
              <div className="text-2xl font-semibold text-gray-900">
                ${categories.reduce((sum, cat) => sum + cat.totalValue, 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;