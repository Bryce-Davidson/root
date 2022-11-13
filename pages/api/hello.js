export default function handler(req, res) {
  fetch("https://mockend.com/Bryce-Davidson/geo-mock-api/points", {})
    .then((response) => response.json())
    .then((json) => res.status(200).json(json));
}
