import placejson from "./place.json";

export default function handler(req, res) {
  res.status(200).json(placejson);
}
