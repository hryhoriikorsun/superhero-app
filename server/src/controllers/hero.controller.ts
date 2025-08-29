import { Request, Response } from "express";
import * as heroService from '../services/hero.service';

export const get = async (req: Request, res: Response) => {
  try {
    const allHeros = await heroService.getAll();
  
    res.status(200).json({ data: allHeros });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const superhero = await heroService.getById(id);
  
    if (!superhero) {
      res.sendStatus(404);
      return;
    }
  
    res.status(200).json({ data: superhero });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}

export const create = (req: Request, res: Response) => {
  try {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;
  
    console.log(req.body)
    if (!nickname || !real_name || !origin_description || !superpowers || !catch_phrase || !images) {
      res.sendStatus(422);
      return;
    }
  
    heroService.create({ nickname, real_name, origin_description, superpowers, catch_phrase, images });
  
    res.status(201).json({ message: 'Hero create' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err });
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const hero = req.body;
  
    const superhero = await heroService.getById(id);
  
    if (!superhero) {
      res.sendStatus(404);
      return;
    }
  
    res.send(await heroService.update(id, hero));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!heroService.getById(id)) {
      res.sendStatus(404);
      return;
    }
  
    await heroService.remove(id);
  
    res.status(204).json({ message: 'Hero delete' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}