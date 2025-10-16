import React, { useState } from "react";

const Dangnhap = () => {
    const [useName, setUseName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Thông tin", { useName, password });

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
            <div className="bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg w-[400px]">
                <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
                    Lapshop
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Input: Username */}
                    <label className="text-gray-600 text-sm">Tên đăng nhập</label>
                    <div className="mb-6 mt-1">
                        <input
                            type="text"
                            placeholder="Tên đăng nhập hoặc Email"
                            value={useName}
                            onChange={(e) => setUseName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 font-light"
                        />
                    </div>

                    {/* Input: Password */}
                    <label className="text-gray-600 text-sm">Mật khẩu</label>
                    <div className="mb-8 mt-1">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-blue-600 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 font-light"
                        />
                    </div>

                    {/* Button: Đăng nhập */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full p-3 bg-gray-100 text-purple-600 rounded-lg font-bold hover:bg-gray-200 hover:shadow-lg transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
                    >
                        Đăng nhập
                    </button>

                    {/* Divider */}
                    <div className="w-full h-2 border-b border-purple-400 mt-6" />

                    {/* Liên kết */}
                    <div className="flex justify-between mt-6 text-sm text-purple-500 font-bold">
                        <a
                            href="/register"
                            className="opacity-80 hover:opacity-100 hover:underline transition duration-300"
                        >
                            Tạo tài khoản mới (Đăng ký)
                        </a>
                        <a
                            href="/forgot-password"
                            className="opacity-80 hover:opacity-100 hover:underline transition duration-300"
                        >
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dangnhap;

