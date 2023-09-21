// TS intersection:

type User = {
    name: string;
    age: number;
}

type Admin = {
    role: string;
}

type UserAdmin = User & Admin;

const userAdmin: UserAdmin = {
    name: 'John',
    age: 20,
    role: 'Admin'
}
