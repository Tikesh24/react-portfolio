import data from '../../../public/data.json';

export default function handler(req, res) {
    if (data) {
        res.status(200).json(data.welcome);
      } else {
        res
          .status(404)
          .json({ message: `No welcome data found` })
      }

  }