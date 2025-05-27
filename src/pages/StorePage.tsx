import React, { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowUpDown, CheckCircle, Filter, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useCart, Product } from '../hooks/use-cart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wood Chair",
    price: 199.99,
    description: "Handcrafted wooden chair with premium finish",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    featured: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Modern Desk",
    price: 349.99,
    description: "Sleek modern desk for your workspace",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    rating: 4.2
  },
  {
    id: 3,
    name: "Contemporary Sofa",
    price: 899.99,
    description: "Elegant contemporary sofa for your living room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    featured: true,
    rating: 4.8
  },
  {
    id: 4,
    name: "Minimalist Lamp",
    price: 89.99,
    description: "Stylish minimalist lamp for your home or office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    rating: 4.0
  },
  {
    id: 5,
    name: "Decorative Vase",
    price: 59.99,
    description: "Beautiful decorative vase for your home",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    rating: 4.3
  },
  {
    id: 6,
    name: "Wall Art Print",
    price: 129.99,
    description: "Contemporary wall art to enhance your space",
    image: "https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    featured: true,
    rating: 4.7
  }
];

const StorePage: React.FC = () => {
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  // Extract unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by price range
    if (priceRange.min) {
      filtered = filtered.filter(product => product.price >= Number(priceRange.min));
    }
    
    if (priceRange.max) {
      filtered = filtered.filter(product => product.price <= Number(priceRange.max));
    }
    
    // Filter featured products
    if (onlyFeatured) {
      filtered = filtered.filter(product => product.featured);
    }
    
    // Sort products
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'rating-desc':
          filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        default:
          break;
      }
    }
    
    return filtered;
  }, [products, searchTerm, selectedCategories, priceRange, onlyFeatured, sortBy]);

  const featuredProducts = useMemo(() => {
    return filteredAndSortedProducts.filter(product => product.featured);
  }, [filteredAndSortedProducts]);

  return (
    <div>
      <Header/>
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Store</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse our collection of premium furniture, lighting, and home decor items to transform your space.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 items-center justify-end">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Filter Products</h4>
                    <Separator />
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Categories</h5>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category}`} 
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label htmlFor={`category-${category}`}>{category}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Price Range</h5>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                          className="w-1/2"
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                          className="w-1/2"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="featured" 
                        checked={onlyFeatured}
                        onCheckedChange={(checked) => setOnlyFeatured(checked === true)}
                      />
                      <Label htmlFor="featured">Featured Products Only</Label>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSelectedCategories([]);
                        setPriceRange({ min: '', max: '' });
                        setOnlyFeatured(false);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by">
                    <div className="flex items-center gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>Sort by</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  <SelectItem value="rating-desc">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured Products */}
          {featuredProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative h-64 overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <Badge className="absolute top-2 right-2 bg-primary text-white">
                          Featured
                        </Badge>
                      </Link>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>
                        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                          {product.name}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-grow">
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
                      <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
                      {product.rating && (
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating || 0)
                                  ? "text-yellow-400"
                                  : i < (product.rating || 0)
                                  ? "text-yellow-200"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                            ({product.rating})
                          </span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full flex items-center justify-center" 
                        onClick={() => addItem(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Products */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Products</h2>
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No products found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                    setPriceRange({ min: '', max: '' });
                    setOnlyFeatured(false);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="h-48 overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </Link>
                    </div>
                    <CardHeader className="py-2">
                      <CardTitle className="text-lg">
                        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                          {product.name}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-0 flex-grow">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                      <p className="font-semibold mt-2">${product.price.toFixed(2)}</p>
                      {product.rating && (
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating || 0)
                                  ? "text-yellow-400"
                                  : i < (product.rating || 0)
                                  ? "text-yellow-200"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                            ({product.rating})
                          </span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center" 
                        onClick={() => addItem(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default StorePage;
