import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Idisciplines{
    name: string,
    attr: string
}

export interface ITeacherLarge {    
    id: string
    fullName: string,
    disciplines: Array<Idisciplines>,
    skills: Array<string>,
    greetings: string,
    unique: string,
    future: Array<string>,
}

const initialState: Array<ITeacherLarge> = [
    {
        id: '1',
        fullName: 'Моисеев Денис Борисович',
        disciplines: [{name:'actor', attr:'Актерского мастерства'}, {name:'clown',attr:"клоунады"}, {name:'step',attr:'степа'}],
        skills: [
            'Преподаватель актерского мастерства, театральной клоунады, степ.', 
            'Действующий актер театра и кино',
            'Опыт преподавания более 10 лет'
        ],
        greetings: 'Всем привет! Я преподаватель актерского мастерства, театральной клоунады и танца степ (чечетка епты) в творческой академии Француз. На своем веку снялся более чем в 100 кинокартинах и 50 театральных постановок таких как: Подсудимый, Лихач, Условный мент, Тайны следствия, Аврора, Чистосердечное призвание-3, Два холма – 2 и др.',
        unique: 'Во время каждого занятия, Вам будет предоставлена возможность выйти на сцену и проявить свое творчество в режиме реального времени.',
        future:[
            'Снимите телесные и речевые зажимы, психологические блоки и неуверенность перед публикой',
            'Разовьете наблюдательность, внимание и память',
            'Научитесь работать в режиме импровизации и разовьете эмоциональный самоконтроль',
            'Получите навыки поведения в конфликтных ситуациях',
            'Проработаете лидерские качества в роли режиссера/организатора',
            'Раскроете свой потенциал через творчество',
            'Проработаете этюды с переключением',
            'Научитесь навыкам спонтанного действия в постоянно меняющейся обстановке',
            'Раскроетесь, станете свободнее, раскрепощенее'
        ]
    },
    {
        id: '2',
        fullName: 'Срджан Симич',
        disciplines: [{name:'actor', attr:'Актерского мастерства'}, {name:'clown',attr:"клоунады"}, {name:'step',attr:'степа'}],
        skills: [
            'Преподаватель актерского мастерства, театральной клоунады, степ.', 
            'Действующий актер театра и кино',
            'Опыт преподавания более 10 лет'
        ],
        greetings: 'Всем привет! Я преподаватель актерского мастерства, театральной клоунады и танца степ (чечетка епты) в творческой академии Француз. На своем веку снялся более чем в 100 кинокартинах и 50 театральных постановок таких как: Подсудимый, Лихач, Условный мент, Тайны следствия, Аврора, Чистосердечное призвание-3, Два холма – 2 и др.',
        unique: 'Во время каждого занятия, Вам будет предоставлена возможность выйти на сцену и проявить свое творчество в режиме реального времени.',
        future:[
            'Снимите телесные и речевые зажимы, психологические блоки и неуверенность перед публикой',
            'Разовьете наблюдательность, внимание и память',
            'Научитесь работать в режиме импровизации и разовьете эмоциональный самоконтроль',
            'Получите навыки поведения в конфликтных ситуациях',
            'Проработаете лидерские качества в роли режиссера/организатора',
            'Раскроете свой потенциал через творчество',
            'Проработаете этюды с переключением',
            'Научитесь навыкам спонтанного действия в постоянно меняющейся обстановке',
            'Раскроетесь, станете свободнее, раскрепощенее'
        ]
    },
    {
        id: '3',
        fullName: 'Иван Александрович Кирюхин',
        disciplines: [{name:'actor', attr:'Актерского мастерства'}, {name:'clown',attr:"клоунады"}, {name:'step',attr:'степа'}],
        skills: [
            'Преподаватель актерского мастерства, театральной клоунады, степ.', 
            'Действующий актер театра и кино',
            'Опыт преподавания более 10 лет',
            'Преподаватель актерского мастерства, театральной клоунады, степ.', 
            'Действующий актер театра и кино',
            'Опыт преподавания более 10 лет'
        ],
        greetings: 'Всем привет! Я преподаватель актерского мастерства, театральной клоунады и танца степ (чечетка епты) в творческой академии Француз. На своем веку снялся более чем в 100 кинокартинах и 50 театральных постановок таких как: Подсудимый, Лихач, Условный мент, Тайны следствия, Аврора, Чистосердечное призвание-3, Два холма – 2 и др.',
        unique: 'Во время каждого занятия, Вам будет предоставлена возможность выйти на сцену и проявить свое творчество в режиме реального времени.',
        future:[
            'Снимите телесные и речевые зажимы, психологические блоки и неуверенность перед публикой',
            'Разовьете наблюдательность, внимание и память',
            'Научитесь работать в режиме импровизации и разовьете эмоциональный самоконтроль',
            'Получите навыки поведения в конфликтных ситуациях',
            'Проработаете лидерские качества в роли режиссера/организатора',
            'Раскроете свой потенциал через творчество',
            'Проработаете этюды с переключением',
            'Научитесь навыкам спонтанного действия в постоянно меняющейся обстановке',
            'Раскроетесь, станете свободнее, раскрепощенее'
        ]
    },
    {
        id: '4',
        fullName: 'Хвойнитская Елена Сергеевна',
        disciplines: [{name:'actor', attr:'Актерского мастерства'}, {name:'clown',attr:"клоунады"}, {name:'step',attr:'степа'}],
        skills: [
            'Преподаватель актерского мастерства, театральной клоунады, степ.', 
            'Действующий актер театра и кино',
            'Опыт преподавания более 10 лет'
        ],
        greetings: 'Всем привет! Я преподаватель актерского мастерства, театральной клоунады и танца степ (чечетка епты) в творческой академии Француз. На своем веку снялся более чем в 100 кинокартинах и 50 театральных постановок таких как: Подсудимый, Лихач, Условный мент, Тайны следствия, Аврора, Чистосердечное призвание-3, Два холма – 2 и др.',
        unique: 'Во время каждого занятия, Вам будет предоставлена возможность выйти на сцену и проявить свое творчество в режиме реального времени.',
        future:[
            'Снимите телесные и речевые зажимы, психологические блоки и неуверенность перед публикой',
            'Разовьете наблюдательность, внимание и память',
            'Научитесь работать в режиме импровизации и разовьете эмоциональный самоконтроль',
            'Получите навыки поведения в конфликтных ситуациях',
            'Проработаете лидерские качества в роли режиссера/организатора',
            'Раскроете свой потенциал через творчество',
            'Проработаете этюды с переключением',
            'Научитесь навыкам спонтанного действия в постоянно меняющейся обстановке',
            'Раскроетесь, станете свободнее, раскрепощенее'
        ]
    },
]

export const teacherLarge = createSlice({
    name: 'teacherLarge',
    initialState,
    reducers: {
        // getOneTeacher:(state, PayloadAction) => {
        //     state = state.filter((el)=>{
        //         if(el.id == PayloadAction)
        //     })
        // }
    },
})


export default teacherLarge.reducer
