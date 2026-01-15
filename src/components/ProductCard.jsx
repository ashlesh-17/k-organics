import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="no-underline">
      <Card
        className="h-full shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
        style={{ backgroundColor: "#FFFCEF" }}
      >
        <div className="relative overflow-hidden h-64 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: "#E65A3A" }}
          >
            {product.category}
          </div>
        </div>
        <CardContent>
          <h3 className="font-semibold text-[#800020] mb-2 text-lg">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="text-2xl font-bold text-[#800020]">
            {product.price}
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<ShoppingCart size={18} />}
            fullWidth
            style={{
              backgroundColor: "#800020",
              color: "white",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
