import connectDB from "utils/database/connectDb";
import Test from "models/test-model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
async function handler(req, res) {
  try {
    const test = await Test.create({
      name: "Bryce",
      email: "something else",
    });
    return res.status(500).json({
      test,
    });
  } catch (e) {
    return res.status(500).json({
      error: "Repeat key",
    });
  }
}

export default connectDB(handler);
