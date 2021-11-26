/* import { stock } from "../data/stock" */
const mijson= [{
    name:"ana",
    hobby:"programming"
}]

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(mijson)
        }, 1500)
    })
}