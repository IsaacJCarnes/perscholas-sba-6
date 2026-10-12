//Simplifies error handling by building the boolean check into the constructor for the error
export class PossibleError extends Error{
    assertion: boolean
    message: string
    name:string
    constructor(assertion:boolean, message:string, name:string = "Error"){
        super()
        this.name = name
        this.assertion = assertion
        this.message = message
        if(this.assertion){
            throw this
        }
    }
};