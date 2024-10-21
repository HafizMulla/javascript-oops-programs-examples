class Config{
    static dbUser = 'username';
    static dbPassword = 'secret';
    static apiToken = 'abcd'; 
}
console.log(Config.dbUser, Config.dbPassword, Config.apiToken)

// Below is the example of Static variables and Static Methods
// class User{

//     static id = 1;

//     constructor(name, age, income){
//         this.name = name
//         this.age = age
//         this.income = income
//         this.id = User.id++;
//     }

//     // static compareAge(user1, user2){
//     //     return user1.age - user2.age
//     // }

//     // static compareIncome(user1, user2){
//     //     return user1.income - user2.income
//     // }
// }

// const user1 = new User("Rakesh K", 30, 5000)
// const user2 = new User("John Doe", 40, 10000)
// const user3 = new User("Jane Doe", 20, 7000)

// const users = [user1, user2, user3];

// // users.sort(User.compareIncome);
// // users.sort(User.compareAge);

// console.log(users)