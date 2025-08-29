import path from 'path';
import multer from 'multer';

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), 'public', 'uploads');

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '---' + file.originalname);
  }
})

export const upload = multer({ storage: fileStorageEngine });