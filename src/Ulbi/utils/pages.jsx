export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    //массив для сщздания кнопок
    let resulty = []
    for (let i = 0; i < totalPages; i++) {
        resulty.push(i + 1)
    }
return resulty
}