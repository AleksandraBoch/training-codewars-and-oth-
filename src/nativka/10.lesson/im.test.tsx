import {
    addNewBooks,
    hairStyle,
    moveUser, removeBook,
    updateBook,
    upgradedLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./im";

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

test('update laptop to macbook',()=>{
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
    let upgradedUser=upgradedLaptop(user,'macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.laptop.title).toBe('macbook')

})

test('add new books to user',()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 40,
        address: {
            city: 'Piter'
        },
        laptop: {
            title: 'Apple'
        },
        books: ['css', 'Js', 'HTML'],

    }
    let upgradedUser=addNewBooks(user,'ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)
})



test('update Js to ts',()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 40,
        address: {
            city: 'Piter'
        },
        laptop: {
            title: 'Apple'
        },
        books: ['css', 'js', 'HTML'],

    }
    let upgradedUser=updateBook(user,'js','ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[1]).toBe('ts')
})

test('remove Js book',()=> {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 40,
        address: {
            city: 'Piter'
        },
        laptop: {
            title: 'Apple'
        },
        books: ['css', 'js', 'HTML'],

    }
    let upgradedUser=removeBook (user,'js')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)

})

