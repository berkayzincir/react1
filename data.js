import axios from "axios";

async function getData (Number) {
const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + Number)
const data = [user,post[0]]
console.log(data)


}

export default getData