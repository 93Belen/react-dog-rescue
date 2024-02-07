
export default function OrganizeDogInfo(arr){
    const obj = {
        all: [], // ALL FUILTERS UNCHECKED
        female: {
            all: [], // SEX CHECKED
            puppy: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [], 
                big: [] 
            },
            young: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [], 
                large: [] 
            },
            adult: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [], 
                large: [] 
            },
            senior: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [], 
                large: [] 
            },
            small: [], // SEX AND SIZE CHECKED
            medium: [],
            large: [] 
        },
        male: {
            all: [], //SEX CHECKED
            puppy: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [],
                big: []
            },
            young: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [],
                large: []
            },
            adult: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [],
                large: []
            },
            senior: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                mediumd: [],
                large: []
            },
            small: [], // SEX AND SIZE CHECKED
            medium: [],
            large: []
        },
        puppy: { 
            all: [], // AGE CHECKED
            small: [], // AGE AND SIZE CHECKED
            medium: [],
            large: []
        },
        young: {
            all: [], // AGE CHECKED
            small: [], // AGE AND SIZE CHECKED
            medium: [],
            large: []
        },
        adult: {
            all: [], // AGE CHECKED
            small: [], // AGE AND SIZE CHECKED
            medium: [],
            large: []
        },
        senior: {
            all: [], // AGE CHECKED
            small: [], // AGE AND SIZE CHECKED
            medium: [],
            large: []
        },
        small: {
            all: [], // SIZE CHECKED
            female: [], // SIZE AND SEX CHECKED
            male: []
        }, 
        medium: {
            all: [], // SIZE CHECKED
            female: [], // SIZE AND SEX CHECKED
            male: []
        },
        large: {
            all: [], // SIZE CHECKED
            female: [], // SIZE AND SEX CHECKED
            male: []
        }
    }

    // LOOP THROUGH ARRAY
    arr.forEach(dog => {

        // CHECK SEX
        if(dog.sex === 'Female'){
            obj.female.all.push(dog)
        }
        else if(dog.sex === 'Male'){
            obj.male.all.push(dog)
        }

        // CHECK AGE
        if(dog.age === "Puppy"){
            obj.puppy.all.push(dog)
        }
        else if(dog.age === 'Young'){
            obj.young.all.push(dog)
        }
        else if(dog.age === 'Adult'){
            obj.adult.all.push(dog)
        }
        else if(dog.age === 'Senior'){
            obj.senior.all.push(dog)
        }

        // CHECK SIZE
        if(dog.size === "Small"){
            obj.small.all.push(dog)
        }
        else if(dog.size === 'Medium'){
            obj.medium.all.push(dog)
        }
        else if(dog.size === 'Large'){
            obj.large.all.push(dog)
        }

    });

    return obj;
}
