import data from '../../../public/data.json';

export default function handler(req, res) {
    console.log(data)
    if (data) {
        res.status(200).json(data.about);
      } else {
        res
          .status(404)
          .json({ message: `No welcome data found` })
      }

  }