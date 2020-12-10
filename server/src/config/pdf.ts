import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'pdf'),
    filename: (request, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const fileName = `${Date.now()}-${name}`;

      cb(null, fileName);
    }
  }),
  fileFilter: function(rep: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    console.log(file)
     
    const allowedMimes = [
      'application/pdf',
      'application/zip'
    ]

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false);
      return cb(new Error('Arquivo invalido. Apenas arquivos pdf e zip são permitidos.'))
    }
  }
}