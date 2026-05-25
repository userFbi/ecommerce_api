import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Search,
    ShoppingCart,
    MapPin,
    Menu,
    Star,
    ChevronRight,
    Filter,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router";

export default function AppLayout() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);

    const API = axios.create({ baseURL: "http://localhost:3000" });

    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await API.get(
                `/products/viewProduct?page=${page}&limit=9&min=0&max=${maxPrice}&search=${search}`
            );
            setProducts(res.data.data);
            setTotalPages(res.data.totalPages);
            setTotalProducts(res.data.totalProducts);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getProducts();
        }, 400);
        return () => clearTimeout(delayDebounceFn);
    }, [page, search, maxPrice]);

    return (
        <div className="min-h-screen bg-[#eaeded] font-sans text-[#131921]">
            {/* --- NAVBAR (Amazon Style) --- */}
            <header className="sticky top-0 z-50">
                {/* Top Nav */}
                <div className="bg-[#131921] text-white p-2 flex items-center gap-4 px-4 h-16">
                    <div className="flex items-center gap-1 border border-transparent hover:border-white p-2 cursor-pointer transition">
                        <h1 className="text-2xl font-black italic tracking-tighter">Shop<span className="text-orange-400">.in</span></h1>
                    </div>


                    {/* Search Bar */}
                    <div className="flex-1 flex h-10 group overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-orange-500">
                        <select className="bg-gray-100 text-gray-700 text-sm px-3 border-r outline-none cursor-pointer hover:bg-gray-200">
                            <option>All</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search All Products Here"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-4 text-black outline-none"
                        />
                        <button className="bg-[#febd69] hover:bg-[#f3a847] px-5 flex items-center transition">
                            <Search size={22} className="text-[#131921]" />
                        </button>
                    </div>

                    <Link to="/users" className="hidden md:flex flex-col border border-transparent hover:border-white p-2 cursor-pointer transition ml-4">
                        <p className="text-xs">Hello, Sign in</p>
                        <p className="text-sm font-bold">Account & Lists</p>
                    </Link>


                </div>

                {/* Bottom Nav */}
                <div className="bg-[#232f3e] text-white flex gap-6 px-4 py-2 text-sm font-medium items-center">
                    <span className="flex items-center gap-1 cursor-pointer hover:border-white border border-transparent p-1">
                        <Menu size={20} /> All
                    </span>
                    <span className="cursor-pointer border-b-2 border-transparent hover:border-white">Fresh</span>
                    <span className="cursor-pointer border-b-2 border-transparent hover:border-white">Amazon miniTV</span>
                    <span className="cursor-pointer border-b-2 border-transparent hover:border-white">Mobiles</span>
                    <span className="cursor-pointer border-b-2 border-transparent hover:border-white">Best Sellers</span>
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-[1500px] mx-auto flex gap-6 p-4">

                {/* SIDEBAR FILTERS */}
                <aside className="w-64 flex-shrink-0 bg-white p-5 rounded shadow-sm hidden md:block self-start sticky top-32">
                    <h2 className="font-bold text-lg mb-4 border-b pb-2">Filter Products</h2>

                    <div className="mb-6">
                        <p className="font-bold text-sm mb-2 uppercase tracking-wide">Price Range</p>
                        <input
                            type="range"
                            min="0"
                            max="200000"
                            step="500"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-full h-1 bg-gray-200 rounded-lg accent-orange-500 cursor-pointer mb-2"
                        />
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>₹0</span>
                            <span>₹{Number(maxPrice).toLocaleString()}</span>
                        </div>
                    </div>
                </aside>

                {/* PRODUCT GRID */}
                <main className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-bold">Results for <span className="text-orange-700 italic">"{search || 'All Products'}"</span></h1>
                        <p className="text-sm text-gray-500">{totalProducts} Items Found</p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-pulse">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-80 bg-white rounded shadow-sm"></div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {products.map((item) => (
                                    <div key={item._id} className="bg-white p-4 rounded shadow-sm hover:shadow-lg transition-all group border border-transparent hover:border-gray-200 cursor-pointer flex flex-col">
                                        <div className="h-48 bg-gray-50 mb-4 flex items-center justify-center overflow-hidden rounded">
                                            {/* Placeholder for Product Image */}
                                            <Package size={48} className="text-gray-200 group-hover:scale-110 transition duration-300" />
                                        </div>

                                        <h3 className="text-sm font-medium text-slate-800 line-clamp-2 h-10 group-hover:text-orange-700">
                                            {item.productName}
                                        </h3>

                                        <div className="flex items-center gap-1 text-yellow-400 my-2">
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-xs text-blue-600 font-medium ml-2">452</span>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xs font-bold">₹</span>
                                                <span className="text-2xl font-bold">{Number(item.productPrice).toLocaleString()}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-4">M.R.P: <span className="line-through">₹{Number(item.productPrice + 500).toLocaleString()}</span></p>

                                            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-sm py-2 rounded-full font-medium transition shadow-sm border border-[#fcd200]">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PAGINATION (Amazon Style) */}
                            <div className="mt-12 flex justify-center items-center gap-4 border-t border-gray-300 pt-8 pb-12">
                                <button
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                    className="flex items-center gap-2 px-4 py-1 border rounded shadow hover:bg-gray-100 disabled:opacity-40"
                                >
                                    Previous
                                </button>
                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setPage(i + 1)}
                                            className={`px-3 py-1 rounded ${page === i + 1 ? 'border-2 border-orange-600 font-bold' : 'hover:bg-gray-200'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    disabled={page >= totalPages}
                                    onClick={() => setPage(page + 1)}
                                    className="flex items-center gap-2 px-4 py-1 border rounded shadow hover:bg-gray-100 disabled:opacity-40"
                                >
                                    Next <ChevronRight size={16} />
                                </button>
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}

// Simple Package icon fallback
function Package({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    );
}