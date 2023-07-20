const John = {
    name: "John Smith",
    age: 30,
    isMarried: false,
    sayHello: function(){
        console.log("Hello, my name is John Smith")
        return this
    },
    sayAge: function(){
        console.log("I am 30 years old")
        return this
    },
    sayMaritalStatus: function(){
        console.log("I am not married")
        return this
    }
}

John.sayHello().sayAge().sayMaritalStatus()