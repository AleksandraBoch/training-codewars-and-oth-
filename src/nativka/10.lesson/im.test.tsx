import {hairStyle, moveUser, UserType, UserWithLaptopType} from "./im";

//поверхностное копирование обьектов


test ('referense type test',()=>{
    let user:UserType= {
        name: 'Alex',
        hair: 40,
        address: {
            city: 'Piter'
        }
    }
   const  cuttenUser=hairStyle(user,2)

    expect(cuttenUser.hair).toBe(20)
    expect(user.hair).toBe(40)
})

test ('change address',()=>{
    let user:UserWithLaptopType= {
        name: 'Alex',
        hair: 40,
        address: {
            city: 'Piter'
        },
        laptop:{
            title:'Apple'
        }
    }



    let movedUser=moveUser(user,'Kiev')

expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop.title).toBe('Apple')
})