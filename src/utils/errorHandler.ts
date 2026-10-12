export class PossibleError extends Error{
    assertion: boolean
    message: string
    name:string
    constructor(assertion:boolean, message:string, name:string = "Error"){
        super()
        this.name = name
        this.assertion = assertion
        this.message = message
        if(this.assertion === true){
            throw this
        }
    }
};