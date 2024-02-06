
export default function OrganizeDogInfo(arr){
    const obj = {
        all: arr, // ALL FUILTERS UNCHECKED
        female: [],
        male: [],
        puppy: [],
        young: [],
        adult: [],
        senior: [],
        small: [],
        medium: [],
        large: []
    }

    // LOOP THROUGH ARRAY
    arr.forEach(dog => {

        // CHECK SEX
        if(dog.sex === 'Female'){
            obj.female.push(dog)
        }
        else if(dog.sex === 'Male'){
            obj.male.push(dog)
        }

        // CHECK AGE
        if(dog.age === "Puppy"){
            obj.puppy.push(dog)
        }
        else if(dog.age === 'Young'){
            obj.young.push(dog)
        }
        else if(dog.age === 'Adult'){
            obj.adult.push(dog)
        }
        else if(dog.age === 'Senior'){
            obj.senior.push(dog)
        }

        // CHECK SIZE
        if(dog.size === "Small"){
            obj.small.push(dog)
        }
        else if(dog.size === 'Medium'){
            obj.medium.push(dog)
        }
        else if(dog.size === 'Large'){
            obj.large.push(dog)
        }

    });

    return obj;
}
