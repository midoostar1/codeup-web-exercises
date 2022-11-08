
const userLastCommit = (username)=>{
fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GIT_TOKEN}`}}).then(response =>
    response.json())
    .then(data => {
         console.log(data)
      var commits =   data.filter(events=>{ return events.type === "PushEvent"})
        console.log(`${username} had their last commit on ${commits[0].created_at}.`);
    })}
userLastCommit("midoostar1")




const wait = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(parseInt(ms))) {
                resolve(`You'll see this after ${ms/1000} second(s).`);
            } else {
                reject(`Failure to include proper numeric input.`)
            }
        }, ms);
    });
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));


