import { android } from "./android";
import { camera } from "./camera";
import { laptop } from "./laptop";

const fakeData = [...android,...camera,...laptop]

const shuffle = (a) => {
   for (let i=a.length; i;i--){
       let j=Math.floor(Math.random()* i);
       [a[i-1], a[j]]=[a[j], a[i-1]];
   }
}
shuffle(fakeData);

export default fakeData;