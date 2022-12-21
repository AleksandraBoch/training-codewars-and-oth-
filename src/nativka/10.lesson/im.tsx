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