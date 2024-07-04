
import { Slide1 } from'./src/screens/Slide1'
import { Dispatch, SetStateAction, useState } from 'react';
import {Slide2 } from'./src/screens/Slide2'
import { Slide3 } from'./src/screens/Slide3'
import {Slide4} from './src/screens/Slide4'
import { useFonts, Trykker_400Regular } from '@expo-google-fonts/trykker';
import {Hind_400Regular,} from '@expo-google-fonts/hind';
import {Fresca_400Regular } from '@expo-google-fonts/fresca';
import {ComicNeue_400Regular} from '@expo-google-fonts/comic-neue';


export interface IPagina{
  setPageI: Dispatch <SetStateAction<number>>
}


export default function App () {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    Trykker_400Regular,
    Hind_400Regular,
    Fresca_400Regular,
    ComicNeue_400Regular

  
  });
  
  if (!fontsLoaded) {
    return null;
  }
  if(page == 1){
     return <Slide1 setPageI = {setPage}/>
  }else if(page == 2){
    return <Slide2 setPageI = {setPage}/>
  }else if(page == 3){
    return <Slide3 setPageI = {setPage}/>
  }else if (page == 4){
    return <Slide4 setPageI = {setPage}/>
  }
    
    

  
  
}
