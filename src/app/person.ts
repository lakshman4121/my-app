export interface Person {
    id:number;
    name:string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string
        }
    };
    phone:string;
    website:string;
    company:{
        name:string;
        catchphrase:string;
        bs:string;
    }

}
