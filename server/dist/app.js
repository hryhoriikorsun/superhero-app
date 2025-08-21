"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = 3003;
let superheroes = [
    {
        id: "1",
        nickname: "Thunderbolt",
        real_name: "Lucas Storm",
        origin_description: "Під час дослідження грозових хмар на експериментальному літаку Lucas отримав удар блискавки, що дав йому контроль над електрикою.",
        superpowers: [
            "електрокінез",
            "телепортація через електромережі",
            "надшвидкість"
        ],
        catch_phrase: "Сила грози — в моїх руках!",
        images: ["thunderbolt1.png", "thunderbolt2.png"]
    },
    {
        id: "2",
        nickname: "Frostbite",
        real_name: "Emily Carter",
        origin_description: "Виросла в Арктиці й вижила після катастрофи дослідницької станції, де впала в кристалізоване озеро з невідомою енергією.",
        superpowers: [
            "кріокінез",
            "створення льодових бар’єрів",
            "регенерація при низьких температурах"
        ],
        catch_phrase: "Холод — це моя стихія.",
        images: ["frostbite1.png", "frostbite2.png"]
    },
    {
        id: "3",
        nickname: "Iron Warden",
        real_name: "Marcus Reed",
        origin_description: "Інженер-винахідник, який створив бронекостюм після нападу на його місто, щоб захистити беззахисних.",
        superpowers: [
            "екзоскелет з підсиленою силою",
            "ракетний політ",
            "лазерна зброя"
        ],
        catch_phrase: "Моя броня — ваш захист!",
        images: ["ironwarden1.png", "ironwarden2.png"]
    },
    {
        id: "4",
        nickname: "Shadow Lynx",
        real_name: "Hana Sato",
        origin_description: "Майстер бойових мистецтв, яка після зустрічі з древнім артефактом отримала здатність зливатися з тінями.",
        superpowers: [
            "невидимість",
            "швидкість",
            "підсилені рефлекси"
        ],
        catch_phrase: "Тіні — мої союзники.",
        images: ["shadowlynx1.png", "shadowlynx2.png"]
    },
    {
        id: "5",
        nickname: "Solaris",
        real_name: "Diego Martinez",
        origin_description: "Астрофізик, який під час експерименту з сонячною енергією отримав надлюдські здібності.",
        superpowers: [
            "сонячна енергія",
            "польоти",
            "теплові хвилі"
        ],
        catch_phrase: "Світло завжди перемагає темряву!",
        images: ["solaris1.png", "solaris2.png"]
    },
    {
        id: "6",
        nickname: "TerraForce",
        real_name: "Liam O’Connor",
        origin_description: "Колишній геолог, який навчився контролювати сили землі після землетрусу в лабораторії.",
        superpowers: [
            "геокінез",
            "створення кам’яних бар’єрів",
            "сейсмічні удари"
        ],
        catch_phrase: "Земля — моя зброя!",
        images: ["terraforce1.png", "terraforce2.png"]
    },
    {
        id: "7",
        nickname: "AquaPulse",
        real_name: "Sofia Marin",
        origin_description: "Дослідниця океанів, яка врятувала місто від катастрофи й отримала силу контролювати воду.",
        superpowers: [
            "гідрокінез",
            "підводне дихання",
            "хвильові атаки"
        ],
        catch_phrase: "Моря і ріки — під моїм захистом!",
        images: ["aquapulse1.png", "aquapulse2.png"]
    },
    {
        id: "8",
        nickname: "NightHowl",
        real_name: "Ethan Black",
        origin_description: "Після нападу перевертня вижив і отримав надлюдські чуття та силу.",
        superpowers: [
            "підсилений слух і зір",
            "суперсила",
            "швидке відновлення"
        ],
        catch_phrase: "Я полюю за справедливістю!",
        images: ["nighthowl1.png", "nighthowl2.png"]
    },
    {
        id: "9",
        nickname: "CyberShade",
        real_name: "Alexei Volkov",
        origin_description: "Хакер, який після аварії став кіборгом і отримав контроль над технологіями.",
        superpowers: [
            "кібернетичний інтерфейс",
            "контроль над машинами",
            "підсилена сила"
        ],
        catch_phrase: "Світ у мережі — під моїм контролем.",
        images: ["cybershade1.png", "cybershade2.png"]
    },
    {
        id: "10",
        nickname: "StarGazer",
        real_name: "Naomi Lee",
        origin_description: "Астроном, яка після контакту з інопланетним артефактом отримала космічні здібності.",
        superpowers: [
            "телепортація",
            "маніпуляції з гравітацією",
            "зоряна енергія"
        ],
        catch_phrase: "Всесвіт відкриває свої таємниці!",
        images: ["stargazer1.png", "stargazer2.png"]
    }
];
app.use((0, cors_1.default)());
app.get('/superheroes', (req, res) => {
    res.statusCode = 200;
    res.send(superheroes);
});
app.get('/superheroes/:id', (req, res) => {
    const { id } = req.params;
    const superhero = superheroes.find(hero => id === hero.id);
    if (!superhero) {
        res.sendStatus(404);
        return;
    }
    res.statusCode = 200;
    res.send(superhero);
});
app.post('/superheroes', express_1.default.json(), (req, res) => {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;
    if (!nickname || !real_name || !origin_description || !superpowers || !catch_phrase || !images) {
        res.sendStatus(422);
        return;
    }
    const newSuperhero = {
        id: (0, uuid_1.v4)(),
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
    };
    superheroes.push(newSuperhero);
    res.statusCode = 201;
    res.send(newSuperhero);
});
app.put('/superheroes/:id', express_1.default.json(), (req, res) => {
    const { id } = req.params;
    const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;
    const superhero = superheroes.find(hero => hero.id === id);
    if (!superhero) {
        res.sendStatus(404);
        return;
    }
    const updateSuperhero = {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
    };
    Object.assign(superhero, updateSuperhero);
    res.send(superhero);
});
app.delete('/superheroes/:id', (req, res) => {
    const { id } = req.params;
    const newSuperheroes = superheroes.filter(hero => hero.id !== id);
    if (superheroes.length === newSuperheroes.length) {
        res.sendStatus(404);
        return;
    }
    superheroes = newSuperheroes;
    res.sendStatus(204);
});
app.listen(PORT, () => {
    console.log(`Server work at port: ${PORT}\nhttp://localhost:${PORT}`);
});
