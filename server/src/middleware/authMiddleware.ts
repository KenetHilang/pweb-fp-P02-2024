import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret'; // Pastikan Anda memiliki default untuk pengembangan

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token dari header Authorization

  // Jika token tidak ada
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Token not found",
      data: {},
    });
  }

  // Verifikasi token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Failed to authenticate token",
        data: {},
      });
    }

    // Jika token valid, simpan informasi pengguna ke dalam request
    const { id, username, role } = decoded as { id: string; username: string; role: string };

    req.body.user = {
      id,
      username,
      role,
    };

    next(); // Lanjut ke middleware atau route berikutnya
  });
};
