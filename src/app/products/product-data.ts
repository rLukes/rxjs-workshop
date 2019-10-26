import { Product } from "./product";

export class ProductData {
  static products: Product[] = [
    {
      id: 1,
      productName: "Collage Frame",
      productCode: "GDN-0011",
      description: "Wooden Collage Photo Frames",
      price: 19.95,
      categoryId: 1,
      quantityInStock: 15,
      supplierIds: [1, 2]
    },
    {
      id: 2,
      productName: "Glass Photo Frame",
      productCode: "GDN-0023",
      description: "Beautiful Photo Frame, made up of Brass and glass.",
      price: 32.99,
      categoryId: 1,
      quantityInStock: 2,
      supplierIds: [3, 4]
    },
    {
      id: 5,
      productName: "Acrylic Photo Frame",
      productCode: "TBX-0048",
      description: "It is made up of stone and rein. Fully made by hands.",
      price: 8.9,
      categoryId: 3,
      quantityInStock: 8,
      supplierIds: [5, 6]
    },
    {
      id: 8,
      productName: "Wooden Photo Frames",
      productCode: "TBX-0022",
      description: "Tree Shaped Photo Frames.",
      price: 11.55,
      categoryId: 3,
      quantityInStock: 6,
      supplierIds: [7, 8]
    },
    {
      id: 10,
      productName: "Decorative Photo Frame",
      productCode: "GMG-0042",
      description: "Standard Customized Photo Frame",
      price: 35.95,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10]
    }
  ];
}
