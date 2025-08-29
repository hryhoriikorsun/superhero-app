import { useState } from "react";
import { addImage } from "../../api/heroImeges";
import { createHero } from "../../api/superhero";
import { useNavigate } from "react-router-dom";
import * as zod from 'zod';

export const HeroAdder = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [realname, setRealname] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchphrase, setCatchphrase] = useState('');
  const [image, setimage] = useState<File | null>(null);

  const onChangeIgm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setimage(e.currentTarget.files?.[0] ?? null);
  }

  const Hero = zod.object({
    nickname: zod.string().min(1, "Рядок не може бути порожнім").max(70).trim(),
    real_name: zod.string().min(1, "Рядок не може бути порожнім").max(70).trim(),
    origin_description: zod.string().min(1, "Рядок не може бути порожнім").max(255).trim(),
    superpowers: zod.array(zod.string().min(1, "Рядок не може бути порожнім").max(255).trim()),
    catch_phrase: zod.string().min(1, "Рядок не може бути порожнім").max(255),
    images: zod.array(zod.string().trim().min(1, "Рядок не може бути порожнім")),
  })

  const addHero: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("image", image!);
    const imgName = await addImage(fd);

    const input = {
      nickname: nickname,
      real_name: realname,
      origin_description: originDescription,
      superpowers: [superpowers],
      catch_phrase: catchphrase,
      images: [imgName]
    }

    const data = Hero.parse(input);

    createHero(data);

    navigate('/ListPage');
  }

  return (
    <div className="w-full h-full flex align-middle">
      <form onSubmit={addHero} className="flex flex-col w-[50%] h-[50%] m-auto bg-blue-50">
        <label htmlFor="">Nickname</label>
        <input 
          value={nickname} 
          onChange={e => setNickname(e.target.value)}
          type="text" 
        />

        <label htmlFor="">Real name</label>
        <input 
          value={realname}
          onChange={e => setRealname(e.target.value)}
          type="text"
        />

        <label htmlFor="">Origin description</label>
        <input
          value={originDescription}
          onChange={e => setOriginDescription(e.target.value)}
          type="text"
        />

        <label htmlFor="">Superpowers</label>
        <input
          value={superpowers}
          onChange={e => setSuperpowers(e.target.value)}
          type="text"
        />

        <label htmlFor="">Catch phrase</label>
        <input
          value={catchphrase}
          onChange={e => setCatchphrase(e.target.value)}
          type="text"
        />

        <label htmlFor="">image</label>
        <input
          onChange={e => onChangeIgm(e)}
          type="file"
          
          />

        <button type="submit">Add</button>
        
      </form>
    </div>
  )
}