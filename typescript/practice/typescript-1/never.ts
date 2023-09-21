function err(message:string):never {
    throw new Error(message);
}

err("YOURE A DUMMY I AM THE ERROR!");