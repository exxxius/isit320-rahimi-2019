const childProcessExec = require('child_process').exec;
const util = require('util');

const exec = util.promisify(childProcessExec);

async function getBranches(response) {
    const { stdout, stderr } = await exec("git branch -a | sed -n -e 's/remotes.origin*.//p' | grep -v 'HEAD' | grep '[^* ]+' -Eo", {
        // cwd: process.env.GIT_HOME + '/isit320-rahimi-2019' //workingDir
        cwd: workingDir
    });
    const output = stdout;
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (response) {
    	console.log('stdout:', output);
        response.send({ result: 'success', response: output.trim() });
    } else {
        console.log('stdout:', output);
        return output.trim();
    }
}
