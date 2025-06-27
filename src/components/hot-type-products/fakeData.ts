import React from "react"


export const products = [
  // GAMING
  {
    name: "MSI Gaming GE76 Raider",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/249149/msi-gaming-ge76-raider-11uh-i9-434vn-2-2-750x500.jpg",
    discount: 10,
    price: 35990000,
    oldPrice: 39990000,
    isHot: true,
    specs: {
      cpu: 'i9-11980HK',
      ram: '64GB',
      storage: '2TB',
      gpu: 'RTX3080',
    },
    brand: 'msi',
    category: 'gaming',
  },
  {
    name: "Laptop MSI Gaming Thin 15",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330932/msi-thin-15-b13uc-i7-1411vn-1-638644313867381079-750x500.jpg",
    discount: 10,
    price: 31990000,
    oldPrice: 37990000,
    isHot: true,
    specs: {
      cpu: "i7-13620H",
      ram: "32GB",
      storage: "512GB SSD",
      gpu: "RTX 3050 4GB",
    },
    brand: "msi",
    category: "gaming",
  },
  {
    name: "Laptop Lenovo Gaming LOQ ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327051/lenovo-loq-15arp9-r7-83jc0040vn-2-638632063463626278-750x500.jpg",
    discount: 10,
    price: 32000000,
    oldPrice: 37000000,
    isHot: true,
    specs: {
      cpu: "R7 7435HS",
      ram: "24GB",
      storage: "512GB SSD",
      gpu: "RTX 4050 6GB",
    },
    brand: "lenovo",
    category: "gaming",
  },
  {
    name: "Laptop MSI Gaming Cyborg 15 ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327707/msi-cyborg-15-a13vek-i7-1423vn-glr-2-638622527297710415-750x500.jpg",
    discount: 10,
    price: 32900000,
    oldPrice: 39900000,
    isHot: true,
    specs: {
      cpu: "i7-13620H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 4050 6GB",
    },
    brand: "msi",
    category: "gaming",
  },
  // OFFICE
  {
    name: "Laptop MSI Gaming Thin 15 ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326124/msi-thin-15-b12ucx-i5-2046vn-1-638718440275960644-750x500.jpg",
    discount: 7, // tính gần đúng từ 18.990.000₫ → 17.690.000₫ (~7%)
    price: 17690000,
    oldPrice: 18990000,
    isHot: true,
    specs: {
      cpu: "i5-12450H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 2050 4GB",
    },
    brand: "msi",
    category: "office",
  },
  {
    name: "Laptop Acer Gaming Nitro V 15 ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333430/acer-nitro-v-15-anv15-41-r2up-r5-nhqpgsv004-2-638754929175088256-750x500.jpg",
    discount: 16, // khoảng 16% giảm từ 20.490.000đ → 17.190.000đ
    price: 17190000,
    oldPrice: 20490000,
    isHot: true,
    specs: {
      cpu: "R5 6600H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 2050 4GB",
    },
    brand: "acer",
    category: "office",
  },
  {
    name: "Laptop Lenovo Gaming LOQ 15IAX9 i5 12450HX/16GB/512GB/6GB RTX3050/144Hz/Win11 (83GS000JVN)",
    image: "https://cdn.tgdd.vn/Products/Images/44/322072/lenovo-loq-gaming-15iax9-i5-83gs000jvn-hinh-2-750x500.jpg",
    discount: 18,
    price: 20390000,
    oldPrice: 24990000,
    isHot: true,
    specs: {
      cpu: "i5-12450HX",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 3050 6GB",
    },
    brand: "lenovo",
    category: "office",
  },
  {
    name: "Asus Vivobook Go 15",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-glr-2-750x500.jpg",
    discount: 10,
    price: 35990000,
    oldPrice: 39990000,
    isHot: true,
    specs: {
      cpu: 'E1504FA R5',
      ram: '16GB',
      storage: '512GB',
      gpu: '',
    },
    brand: 'asus',
    category: 'office',
  },
  // DESIGN
  {
    name: "Laptop HP Gaming VICTUS 15 ",
    image: "https://cdn.tgdd.vn/Products/Images/44/318163/hp-victus-15-fa1139tx-i5-8y6w3pa-glr-2-1-750x500.jpg",
    discount: 28,
    price: 17690000,
    oldPrice: 24590000,
    isHot: true,
    specs: {
      cpu: "i5-12450H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 2050 4GB",
    },
    brand: "hp",
    category: "design",
  },
  {
    name: "Laptop Asus TUF Gaming F15 FX507ZC4 i5 12500H/16GB/512GB/4GB RTX3050/144Hz/Win11 (HN330W)",
    image: "https://cdn.tgdd.vn/Products/Images/44/328235/asus-gaming-tuf-f15-fx507zc4-i5-hn330w-2-750x500.jpg",
    discount: 11,
    price: 19890000,
    oldPrice: 22490000,
    isHot: true,
    specs: {
      cpu: "i5-12500H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 3050 4GB",
    },
    brand: "asus",
    category: "design",
  },
  {
    name: "Laptop Asus Gaming Vivobook ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328237/asus-vivobook-k3605zf-i5-rp745w-glr-2-638611359324594835-750x500.jpg",
    discount: 12,
    price: 16990000,
    oldPrice: 19490000,
    isHot: true,
    specs: {
      cpu: "i5-12500H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 2050 4GB",
    },
    brand: "asus",
    category: "design", // hoặc "gaming" nếu bạn muốn phân loại theo hiệu năng
  },
  {
    name: "Laptop HP Gaming VICTUS 15 ",
    image: "https://cdn.tgdd.vn/Products/Images/44/321467/hp-victus-15-fb1022ax-r5-94f19pa-hinh-2-700x467.jpg",
    discount: 33,
    price: 16990000,
    oldPrice: 25490000,
    isHot: true,
    specs: {
      cpu: "R5 7535HS",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 2050 4GB",
    },
    brand: "hp",
    category: "design", // hoặc "gaming" tùy bạn nhóm theo mục đích hay hiệu năng
  },
  // STUDENT
  {
    name: "Laptop Acer Gaming Nitro 5 ",
    image: "https://cdn.tgdd.vn/Products/Images/44/272282/acer-nitro-5-tiger-an515-58-52sp-i5-nhqfhsv001-abc-2-750x500.jpg",
    discount: 33,
    price: 18590000,
    oldPrice: 27990000,
    isHot: true,
    specs: {
      cpu: "i5-12500H",
      ram: "8GB",
      storage: "512GB SSD",
      gpu: "RTX 3050 4GB",
    },
    brand: "acer",
    category: "student", // hoặc "gaming" nếu muốn phân loại theo hiệu năng
  },
  {
    name: "Laptop Acer Gaming Nitro ",
    image: "https://cdn.tgdd.vn/Products/Images/44/325697/acer-nitro-v-anv15-51-55ca-i5-nhqn8sv004-2-750x500.jpg",
    discount: 11,
    price: 24690000,
    oldPrice: 27990000,
    isHot: true,
    specs: {
      cpu: "i5-13420H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RTX 4050 6GB",
    },
    brand: "acer",
    category: "student", // hoặc "gaming" nếu bạn muốn phân nhóm theo hiệu suất
  },
  {
    name: "Laptop Asus Gaming ROG Strix G16 ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333094/asus-rog-strix-g16-g614ju-i7-n3509w-1-638700328702961785-750x500.jpg",
    discount: 14,
    price: 35090000,
    oldPrice: 40990000,
    isHot: true,
    specs: {
      cpu: "i7-13650HX",
      ram: "32GB",
      storage: "1TB SSD",
      gpu: "RTX 4050 6GB",
    },
    brand: "asus",
    category: "student", // hoặc "gaming" tùy mục đích nhóm
  },
  {
    name: "Laptop MSI Prestige 14 ",
    image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/329787/msi-prestige-14-ai-studio-c1udxg-ultra-7-058vn-1-638618202899742032-750x500.jpg",
    discount: 4,
    price: 29690000,
    oldPrice: 30990000,
    isHot: true,
    specs: {
      cpu: "Ultra 7 155H",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "RTX 3050 6GB",
    },
    brand: "msi",
    category: "student", // Hoặc "design" nếu bạn phân loại theo nhu cầu đồ hoạ
  }
]


