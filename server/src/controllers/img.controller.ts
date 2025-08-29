import { Request, Response } from "express";
import path from "path";
import * as imgService from '../services/img.service';

export const addImg = (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ message: 'File not add' });
    return;
  }

  res.status(200).json({ name: req.file.filename })
}

export const removeImg = async (req: Request, res: Response) => {
  const name = path.basename(req.params.filename);
  const filePath = path.join(process.cwd(), "public", "uploads", name);

  try {
    await imgService.deleteImg(filePath);
    res.sendStatus(204);
  } catch (err: any) {
    res.sendStatus(500);
  }
}