
import { PictureAndAnimatiom, Picture, Animation } from './PictureAndAnimation';
import { myColor } from 'src/app/allClasses/myColor';
import { Lamp } from 'src/app/allClasses/Lamp';


export class Sequence {
    SequenceCode: number;
    Name: string;
    ClientCode: number;
    Comments: string[];
    ScreenWidth: number;
    ScreenLength: number;
    color: myColor[];
    Shared: boolean;
    lampsDetails: Lamp[][];
    Pictures: Array<string>
    Animations: Array<string>
    picturesAndAnimation: PictureAndAnimatiom[];

    constructor() {


    }
    // constructor(sequenceCode: number, sequenceName: string, clientCode: number) {
    //     this.SequenceCode = sequenceCode;
    //     this.Name = sequenceName;
    //     this.ClientCode = clientCode;
    //     this.Comments = ["fdgs fdsh dsfhsd", "htrh fdhd dsfh", "fgnfgnngfsgfn"];
    //     this.ScreenLength=40;
    //     this.ScreenWidth=40;
    // }

}

export class ScreenSettings {
    ClientCode: number;
    Height: number;
    Width: number;
    MyColor: string[];
    Lamps: Lamp[][];
    constructor(){
        
    }
}