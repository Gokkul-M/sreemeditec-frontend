import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, CardContent, CardDescription, 
  CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, Settings, Users, Package, 
  ShoppingCart, FileText, TrendingUp, Eye,
  ArrowRight, Activity, DollarSign
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import RequireAuth from "@/components/auth/RequireAuth";

const AdminPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect non-admin users
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const adminSections = [
    {
      title: "Analytics Dashboard",
      description: "View comprehensive business analytics, revenue trends, and performance metrics",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-blue-500",
      route: "/admin/dashboard",
      stats: "Real-time insights"
    },
    {
      title: "Product Management",
      description: "Add, edit, and manage your product catalog with inventory tracking",
      icon: <Package className="h-8 w-8" />,
      color: "bg-green-500",
      route: "/store",
      stats: "Manage inventory"
    },
    {
      title: "Order Management",
      description: "Process orders, update shipping status, and handle customer requests",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "bg-purple-500",
      route: "/admin/orders",
      stats: "Order processing"
    },
    {
      title: "Customer Management",
      description: "View customer profiles, purchase history, and manage user accounts",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-500",
      route: "/admin/customers",
      stats: "User management"
    },
    {
      title: "Quote Requests",
      description: "Handle custom quote requests and provide pricing for bulk orders",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-indigo-500",
      route: "/admin/quotes",
      stats: "Quote handling"
    },
    {
      title: "System Settings",
      description: "Configure system settings, payment methods, and store preferences",
      icon: <Settings className="h-8 w-8" />,
      color: "bg-gray-500",
      route: "/admin/settings",
      stats: "System config"
    }
  ];

  const quickStats = [
    {
      title: "Total Revenue",
      value: "$12,345.67",
      change: "+8.2%",
      icon: <DollarSign className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+12.3%",
      icon: <Users className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Total Orders",
      value: "567",
      change: "+5.1%",
      icon: <ShoppingCart className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.8%",
      icon: <TrendingUp className="h-5 w-5" />,
      positive: false
    }
  ];

  return (
    <RequireAuth adminOnly>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.firstName}! Manage your e-commerce platform from here.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm font-medium ${
                        stat.positive ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    stat.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  } dark:bg-opacity-20`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Quick Actions</h2>
            <Button 
              onClick={() => navigate('/admin/dashboard')}
              className="flex items-center gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              View Full Analytics
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-200 cursor-pointer group"
                onClick={() => navigate(section.route)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`h-12 w-12 rounded-lg ${section.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {section.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="mb-3">
                    {section.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Activity className="h-4 w-4 mr-1" />
                    {section.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest system activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">New user registration</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Order completed</p>
                    <p className="text-sm text-muted-foreground">Order #1234 - $299.99</p>
                  </div>
                  <span className="text-xs text-muted-foreground">5 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Product updated</p>
                    <p className="text-sm text-muted-foreground">Smart Watch - Price changed</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance Summary
              </CardTitle>
              <CardDescription>Key metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sales Today</span>
                  <span className="text-sm font-bold">$1,234.56</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Orders Today</span>
                  <span className="text-sm font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">New Customers</span>
                  <span className="text-sm font-bold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pending Quotes</span>
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/admin/dashboard')}
                  >
                    View Detailed Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RequireAuth>
  );
};

export default AdminPage;