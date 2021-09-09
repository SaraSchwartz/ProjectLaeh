import { myColor } from 'src/app/allClasses/myColor';



export class Lamp {
    Row: number;
    Coulmn: number;
    IsActive = true;
    colors:string[];
    animations:number[];
    constructor(i, j) {
        this.Row = i;
        this.Coulmn= j;
        this.colors=[]; 
        this.animations=[];
       }
}