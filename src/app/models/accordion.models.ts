import { Items } from "./items.models"

export interface Accordion{
    title?:string,
    content?:string,
    url?: string,
    titleList?:string,
    list?: string[]
}