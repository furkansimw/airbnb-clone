import productjson from "./product.json";

export default function handler(req, res) {
  res.status(200).json(productjson);
}
