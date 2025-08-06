import React from "react";
import { useNavigate } from "react-router-dom";

const fakeData = [
    {
        id: 1,
        name: 'MSI Raider GE76',
        image: 'https://readdy.ai/api/search-image?query=MSI%2520Raider%2520GE76%2520gaming%2520laptop%2520with%2520RGB%2520keyboard%2520on%2520a%2520sleek%2520desk%2520with%2520blue%2520lighting%252C%2520professional%2520product%2520photography%2520with%2520dark%2520background%2520and%2520dramatic%2520lighting%252C%2520high%2520resolution%252C%2520detailed%252C%2520sharp%2520focus%252C%2520commercial%2520quality&width=400&height=300&seq=101&orientation=landscape',
        price: 45990000,
        oldPrice: 49990000,
        discount: 8,
        specs: {
            cpu: 'i9-12900HK',
            ram: '32GB',
            storage: '2TB SSD',
            gpu: 'RTX 3080'
        },
        category: 'gaming',
        brand: 'msi',
        isHot: true
    },
    {
        id: 2,
        name: 'Dell XPS 15 (2025)',
        image: 'https://readdy.ai/api/search-image?query=Dell%2520XPS%252015%2520laptop%2520on%2520minimalist%2520desk%2520with%2520clean%2520white%2520background%252C%2520professional%2520product%2520photography%2520with%2520soft%2520lighting%252C%2520high%2520resolution%252C%2520detailed%252C%2520sharp%2520focus%252C%2520commercial%2520quality&width=400&height=300&seq=102&orientation=landscape',
        price: 35990000,
        oldPrice: 39990000,
        discount: 10,
        specs: {
            cpu: 'i7-12700H',
            ram: '16GB',
            storage: '1TB SSD',
            gpu: 'RTX 3050 Ti'
        },
        category: 'design',
        brand: 'dell',
        isHot: true
    },
    {
        id: 3,
        name: 'Acer Predator Helios 300',
        image: 'https://readdy.ai/api/search-image?query=Acer%2520Predator%2520Helios%2520300%2520gaming%2520laptop%2520with%2520RGB%2520keyboard%2520on%2520a%2520sleek%2520desk%2520with%2520blue%2520lighting%252C%2520professional%2520product%2520photography%2520with%2520dark%2520background%2520and%2520dramatic%2520lighting%252C%2520high%2520resolution%252C%2520detailed%252C%2520sharp%2520focus%252C%2520commercial%2520quality&width=400&height=300&seq=103&orientation=landscape',
        price: 32990000,
        oldPrice: 36990000,
        discount: 11,
        specs: {
            cpu: 'i7-11800H',
            ram: '16GB',
            storage: '1TB SSD',
            gpu: 'RTX 3070'
        },
        category: 'gaming',
        brand: 'acer',
        isHot: false
    },
]

const Cart = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen px-10">
            <h1 className="text-3xl font-bold text-gray-900 text-center my-8">
                Giỏ hàng của bạn
            </h1>

            <div className="text-center mt-8">
                <button
                    onClick={() => navigate("/products")}
                    className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
                >
                    Tiếp tục mua sắm
                </button>
            </div>

            <div>
                {fakeData.map(item => (
                    <div key={item.id} className="p-4 border-b">
                        <p className="font-semibold">{item.name}</p>
                        <p>{item.price.toLocaleString()} VND</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;