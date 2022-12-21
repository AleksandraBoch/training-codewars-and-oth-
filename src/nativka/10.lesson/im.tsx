import {strict} from "assert";

export type UserType= {
    name: string
    hair: number
    address: {
        city: string
    house?:12}
}
export type LaptopType={
    title:string
}
export type UserWithLaptopType=UserType&{
    laptop:LaptopType
}
export type UserWithBooksType=UserType&{
    books:Array<string>
}

export type UserWithCompaniesType={
    companies:Array<{id:number,title:string}>
}

export function hairStyle(u:UserType,le:number){
    const copy={
        ...u
    }
    copy.hair=u.hair/le

    return copy
}

export function moveUser(u:UserWithLaptopType,city:string){
    const copy={
        ...u,
    }
    copy.address={
        ...copy.address,
        city:city
    }

return copy
}

export function upgradedLaptop(u:UserWithLaptopType,title:string){
    return{
        ...u,
        laptop:{
            title:title
        }
    }

}

export function addNewBooks(u:UserWithBooksType&UserWithLaptopType,newBooks:string){
    //скопировать и добавить элементы
    return{
        ...u,
        books:[...u.books,newBooks]
    }

}

export function updateBook(u:UserWithBooksType&UserWithLaptopType,oldBook:string,newBook:string){
//добавить элементы в массив
    return{
        ...u,
        books:u.books.map(b=>{
            if(b===oldBook){return newBook}
            else {
            return b}
        })
    }
}

export function removeBook(u:UserWithBooksType&UserWithLaptopType,removedBook:string){
    //удаление элемента из массива

    return{
        ...u,
        books:u.books.filter(b=>b!==removedBook
        )
    }
}

