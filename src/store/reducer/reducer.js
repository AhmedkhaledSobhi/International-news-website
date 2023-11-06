
// ======================== Reducer ========================

const initialState={
    country:'us',
    lang:'en',
    light:false
}

export default function countryReducer (state =initialState, action )
{
    switch(action.type)
    {
        case 'CHANGE_COUNTRY':
            return{...state ,country:action.payload};
        case "LANGUAGE":
            return {...state ,lang:action.payload};
        case "LIGHTMODE":
            return{...state ,light:action.payload}
        default:
            return state;
    }
}



