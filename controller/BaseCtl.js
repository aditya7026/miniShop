export class BaseCtl{
    constructor(){

    }

    preload(){
        throw new Error("this method needs to be override");
    }
    
    save(){

    }
    
}
module.exports = BaseCtl;