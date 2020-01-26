import { combineReducers } from "redux";


// const SongList = () =>
// {
//     return 
//    [{
//        id:1,
//        name:"sairat",
//        duration:"4:30"
//    },
//    {
//     id:2,
//     name:"senorita",
//     duration:"4:30"
// },

// {
//     id:3,
//     name:"Dilachi Rani",
//     duration:"3:30"
// },
// {
//     id:4,
//     name:"Shape of you",
//     duration:"2:30"
// }
// ];

// };

const SongList = () =>
{



    return [


        {
            id: 1, name: "sairat",
            duration: "4.30"
        },

        {
                id:2,
                name:"senorita",
                duration:"4:30"
            }
    ]
}




const ListDetails = (song = null, action) =>
{
    switch(action.type)
    {
        case  "SELECTED_SONG" :

            return action.payload;

        default: return song;

    }
};

const reducers = combineReducers ({songlist : SongList, details: ListDetails });
export default reducers;