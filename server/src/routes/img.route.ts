import express from 'express';
import { upload } from '../lib/uploads';
import * as imgController from '../controllers/img.controller';

const route = express.Router();

route.post('/single', upload.single('image'), imgController.addImg);

route.delete('/:filename', imgController.removeImg);

export { route }