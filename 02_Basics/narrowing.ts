//* Application of narrowing

function provideID (id: string | null){
    if(!id){
        console.log("Please Provide id")
        return 
    }
    id.toLowerCase()
}