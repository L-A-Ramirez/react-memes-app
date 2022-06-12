import {memingo} from '../data/memingo'

export const getMemeById = ( id ) => {

    return memingo.find( meme => meme.id === id );
}