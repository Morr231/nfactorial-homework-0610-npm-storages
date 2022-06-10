const { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);
let str = args.join(" ");
exec("git add .", commit);

function commit(err) {
    if (err) {
        console.log(err);
        return;
    }
    //it worked
    exec(`git commit -m "${str}"`, push);
}
function push(err) {
    if (err) {
        console.log(err);
        return;
    }
    //it worked
    exec("git push");
    console.log("done");
}
