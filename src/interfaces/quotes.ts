export interface Quotes{
    _id?: string, 
    quoteText?: string, 
    quoteAuthor?: string, 
    quoteGenre?:string
}
export interface Author{
    quoteAuthor:string|undefined,
    quoteGenre:string |undefined
}