import { connectMongo } from "utils/db";
import Test from "models/test-model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  console.log("Connecting to mongo");
  await connectMongo();
  console.log("Connected to mongo");

  const test = await Test.create({
    name: "Bryce",
    email: "lifebryce@icloud.com",
  });

  res.status(200).json({
    test,
  });
}
