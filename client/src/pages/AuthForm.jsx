import React, { useState } from "react";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(false);

    const [formData, setFormData] = useState({
        userId: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isLogin
            ? "http://localhost:3001/"
            : "http://localhost:3001/users";

        const payload = isLogin
            ? {
                email: formData.email,
                password: formData.password,
            }
            : formData;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(
                    isLogin
                        ? "Login Successful!"
                        : "Account Created Successfully!"
                );

                setFormData({
                    userId: "",
                    email: "",
                    password: "",
                });
            } else {
                setMessage(data.message || "Something went wrong");
            }
        } catch (error) {
            console.log(error);
            setMessage("Server Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3] px-4">
            <div className="w-full max-w-[380px] bg-white border border-gray-300 rounded-xl p-8 shadow-md">

                {/* Logo
                Logo
                Logo */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-1 border border-transparent hover:border-white p-2 cursor-pointer transition">
                        <h1 className="text-2xl font-black italic tracking-tighter">Shop<span className="text-orange-400">.in</span></h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* User ID */}
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                User ID
                            </label>

                            <input
                                type="text"
                                name="userId"
                                value={formData.userId}
                                onChange={handleChange}
                                placeholder="Enter User ID"
                                required
                                className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-yellow-300"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            required
                            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            required
                            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium py-2 rounded-md transition-all"
                    >
                        {isLogin ? "Login" : "Create Account"}
                    </button>

                    {/* Message */}
                    {message && (
                        <p className="text-center mt-4 text-sm text-green-600">
                            {message}
                        </p>
                    )}
                </form>

                {/* Toggle */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-700">
                        {isLogin
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </p>

                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setMessage("");
                        }}
                        className="mt-2 text-[#0066c0] hover:underline text-sm font-medium"
                    >
                        {isLogin
                            ? "Create account"
                            : "Sign in instead"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;