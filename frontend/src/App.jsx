import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from './config'
import ProductCard from './components/ProductCard'
import CategoryFilter from './components/CategoryFilter'
import SearchBar from './components/SearchBar'
import Features from './components/Features'
import Footer from './components/Footer'
import ProductSkeleton from './components/ProductSkeleton'
import AboutSection from './components/AboutSection'
import LocationMap from './components/LocationMap'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Extract unique categories from products, strictly enforcing Men mixed with School
  const categories = ["All", ...new Set(products
    .map(p => p.category_name)
    .filter(c => c && !c.toLowerCase().includes('women') && !c.toLowerCase().includes('saree') && !c.toLowerCase().includes('lehenga'))
  )]

  // Filter products based on selection AND search
  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category_name === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.school_name?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    // Mobile First approach means we should test on small screens too
    axios.get(`${API_URL}/products/`)
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching products:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 tracking-wide">
            Shikha Garments
          </h1>
          <button className="text-sm font-semibold text-blue-900 hover:text-blue-700">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Premium Quality Uniforms
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Shikha Garments provides top-tier fabrics and comfortable fits for students and professionals.
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
          >
            View Collection
          </a>
        </div>
      </div>

      {/* Features Ribbon */}
      <Features />

      {/* Product Grid */}
      <main id="products" className="max-w-7xl mx-auto px-4 py-16 flex-grow w-full">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-800 mb-4 inline-block relative">
            Latest Collection
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-900 rounded-full opacity-20 transform translate-y-2"></span>
          </h3>
          <p className="text-slate-500 mt-2">Find the perfect size and style for you</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {!loading && products.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          )}
        </div>

        {loading ? (
          <ProductSkeleton />
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All") }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <AboutSection />
      <LocationMap />
      <Footer />
    </div >
  )
}

export default App
