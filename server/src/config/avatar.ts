import multer, {FileFilterCallback} from 'multer';
import path from 'path';
import { Request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'images'),
    filename: (request, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const fileName = `${Date.now()}-${name}`;

      cb(null, fileName);
    }
  }),
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: function(rep: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/svg+xml',
      'image/svg',
    ]

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false);
      return cb(
        new Error('Arquivo invalido. Apenas arquivos jpg, png, jpeg, pjpeg ou svg são permitidos.')
      );
    }
  }
}