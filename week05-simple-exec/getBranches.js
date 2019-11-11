const childProcessExec = require('child_process').exec;
const util = require('util');

const exec = util.promisify(childProcessExec);

/*async function getBranches() {
  const branches = await exec("git branch -a | sed -n -e 's/remotes.origin*./\/p' | grep -v 'HEAD'", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    else {
    	const current =  stdout.split('\n').find(b => b.charAt(0) === '*').trim().substring(2);
  		console.log("This is CURRENT: " + current);
   	 	console.log(`stdout: ${stdout}`);
   		console.error(`stderr: ${stderr}`);
  }});
  
}

async function getBranches() {
	const branchesOutput = await exec("git branch -a | sed -n -e 's/remotes.origin*./\/p' | grep -v 'HEAD' | grep '[^* ]+' -Eo");
  if( branchesOutput.stderr){
    throw new Error(stderr);
  }
  const branches = branchesOutput.stdout.split('\n').filter(name => name != '');
  console.log(branches);
  return branches;
}*/


async function getBranches(response) {
    const branches = await exec("git branch -a | sed -n -e 's/remotes.origin*./\/p' | grep -v 'HEAD' | grep '[^* ]+' -Eo", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout.split('\n').filter(name => name != ''));
        console.error(`stderr: ${stderr}`);
    });
    const current = branches.stdout.split('\n').filter(name => name != '');
    console.log(current);
    response.send(current);
}

getBranches();
