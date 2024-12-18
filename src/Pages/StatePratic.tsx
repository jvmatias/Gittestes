const User = {
    name: "joao",
    age: 20,
    address: {
        street: "violetas",
        number: 192
    }
}

type TypeUser = typeof User

type PropertyUser = keyof TypeUser


console.log(pickProperty(User,"address"))



type TypeVideo = {
    title: string,
    duration: number
}

const video: TypeVideo = {
    title: "Typescript",
    duration: 2000
}

function pickProperty<ObjectType>(obj: ObjectType, property: keyof ObjectType) {
    return obj[property] 
}

pickProperty(User, "name")


pickProperty(video, "title")