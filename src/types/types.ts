export type IGetTodos = {
    userId: Number,
    id: Number,
    title: string,
    completed: false
}

export type IGetUser = {
    "id": Number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

export type IReturnedUser = {
    id: Number,
    name: string,
    email: string,
}

export type IReturnedTodos = {
    userId: Number
}

export type IUser = IReturnedUser & {
    count: Number
};