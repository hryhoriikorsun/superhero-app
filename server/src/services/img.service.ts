import fs from 'node:fs/promises';

export const deleteImg = async (filePath: string) => {
  return await fs.unlink(filePath);
}