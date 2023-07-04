import homejson from "./home.json";

export default function handler(req, res) {
  res.status(200).json(homejson);
}
