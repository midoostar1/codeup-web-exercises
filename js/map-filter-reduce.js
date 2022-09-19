const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

var moreThan3 = users.filter((language)=>{
    return language.languages.length >= 3
})
console.log(moreThan3)


var userEmails = users.map(emails =>{
    return emails.email
})
console.log(userEmails)

var yearsEx = users.reduce((prev,curr)=>{
    return prev + curr.yearsOfExperience
},0)

console.log(yearsEx)


var longestEmail = users.reduce((prev,curr)=>{
    return (prev.length<curr.email.length)? curr.email: prev
},users[0].email )
console.log(longestEmail)

var singleName = users.reduce((prev,curr)=>{
return prev + curr.name
},"")
console.log(singleName)

varuniqueLang = users.reduce((prev,curr)=>{
  return prev===curr.languages? curr.languages
})