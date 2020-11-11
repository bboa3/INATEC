import multer, {FileFilterCallback} from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'images'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    }
  }),
  fileFilter: (rep: any, file: any, cb: FileFilterCallback) => {
    const allowedMimes = [
      'images/jpeg',
      'images/pjpeg',
      'images/png',
      'images/jpg',
      'images/svg',
    ]

    if(allowedMimes.includes(file.mimeType)) {
      cb(null, true)
    } else {
      cb(new Error('Por favor selecione arquivos do tipo jpg, png, jpeg, pjpeg ou svg'))
    }
  }
}