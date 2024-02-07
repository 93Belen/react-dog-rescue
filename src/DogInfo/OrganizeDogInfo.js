
export default function OrganizeDogInfo(arr){
    const obj = {
        all: [], // ALL FUILTERS UNCHECKED
        female: {
            all: [], // SEX CHECKED
            puppy: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [], 
                large: [] 
            },
            young: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [], 
                large: [] 
            },
            adult: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [], 
                large: [] 
            },
            senior: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [], 
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
                medium: [],
                large: []
            },
            young: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [],
                large: []
            },
            adult: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [],
                large: []
            },
            senior: {
                all: [], // SEX AND AGE CHECKED
                small: [], // SEX AGE AND SIZE CHECKED
                medium: [],
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
            // CHECK SEX AND AGE
            if(dog.age === 'Puppy'){
                obj.female.puppy.all.push(dog)
                // CHECK SEX AGE AND SIZE
                if(dog.size === 'Small'){
                    obj.female.puppy.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.female.puppy.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.female.puppy.large.push(dog)
                }
            }
            else if(dog.age === 'Young'){
                obj.female.young.all.push(dog)
                if(dog.size === 'Small'){
                    obj.female.young.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.female.young.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.female.young.large.push(dog)
                }
            }
            else if(dog.age === 'Adult'){
                obj.female.adult.all.push(dog)
                if(dog.size === 'Small'){
                    obj.female.adult.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.female.adult.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.female.adult.large.push(dog)
                }
            }
            else if(dog.age === 'Senior'){
                obj.female.senior.all.push(dog)
                if(dog.size === 'Small'){
                    obj.female.senior.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.female.senior.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.female.senior.large.push(dog)
                }
            }
            // CHECK SEX AND SIZE
            if(dog.size === 'Small'){
                obj.female.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.female.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.female.large.push(dog)
            }
        }
        else if(dog.sex === 'Male'){
            obj.male.all.push(dog)
            // CHECK SEX AND AGE
            if(dog.age === 'Puppy'){
                obj.male.puppy.all.push(dog)
                // CHECK SEX AGE AND SIZE
                if(dog.size === 'Small'){
                    obj.male.puppy.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.male.puppy.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.male.puppy.large.push(dog)
                }
            }
            else if(dog.age === 'Young'){
                obj.male.young.all.push(dog)
                if(dog.size === 'Small'){
                    obj.male.young.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.male.young.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.male.young.large.push(dog)
                }
            }
            else if(dog.age === 'Adult'){
                obj.male.adult.all.push(dog)
                if(dog.size === 'Small'){
                    obj.male.adult.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.male.adult.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.male.adult.large.push(dog)
                }
            }
            else if(dog.age === 'Senior'){
                obj.male.senior.all.push(dog)
                if(dog.size === 'Small'){
                    obj.male.senior.small.push(dog)
                }
                else if(dog.size === 'Medium'){
                    obj.male.senior.medium.push(dog)
                }
                else if(dog.size === 'Large'){
                    obj.male.senior.large.push(dog)
                }
            }
            // CHECK SEX AND SIZE
            if(dog.size === 'Small'){
                obj.male.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.male.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.male.large.push(dog)
            }
        }

        // CHECK AGE
        if(dog.age === "Puppy"){
            obj.puppy.all.push(dog)
            // CHECK AGE AND SIZE
            if(dog.size === 'Small'){
                obj.puppy.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.puppy.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.puppy.large.push(dog)
            }
        }
        else if(dog.age === 'Young'){
            obj.young.all.push(dog)
            if(dog.size === 'Small'){
                obj.young.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.young.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.young.large.push(dog)
            }
        }
        else if(dog.age === 'Adult'){
            obj.adult.all.push(dog)
            if(dog.size === 'Small'){
                obj.adult.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.adult.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.adult.large.push(dog)
            }
        }
        else if(dog.age === 'Senior'){
            obj.senior.all.push(dog)
            if(dog.size === 'Small'){
                obj.senior.small.push(dog)
            }
            else if(dog.size === 'Medium'){
                obj.senior.medium.push(dog)
            }
            else if(dog.size === 'Large'){
                obj.senior.large.push(dog)
            }
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
