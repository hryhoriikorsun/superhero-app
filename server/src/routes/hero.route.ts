import express from 'express';
import * as heroControllers from '../controllers/hero.controller';

const route = express.Router();

route.get('/', heroControllers.get)

route.get('/:id', heroControllers.getOne)

route.post('/', heroControllers.create)

route.put('/:id', heroControllers.update)

route.delete('/:id', heroControllers.remove)

export { route }