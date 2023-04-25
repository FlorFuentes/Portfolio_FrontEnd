export class Educacion {
    id?:Number;
    descripcion:String;
    institucion:String;
    imgDiploma:String;

    constructor(descripcion:String,institucion:String,imgDiploma:String
    ){
        this.descripcion=descripcion;
        this.institucion=institucion;
        this.imgDiploma=imgDiploma;
    }
}
