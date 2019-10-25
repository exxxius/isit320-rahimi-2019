const util = require('util');
const exec = util.promisify(require('child_process').exec);

const workingDir = 'isit320-rahimi-2019';
async function checkoutBranch(response, branch) {
    const { stdout, stderr } = await exec('git checkout ' + branch, {
        // cwd: process.env.GIT_HOME + '/isit320-rahimi-2019' //workingDir
        cwd: workingDir
    });
    const output = stdout;
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (response) {
        response.send({ result: 'success', response: output.trim() });
    } else {
        return output.trim();
    }
}

async function checkGitIgnore(response) {
    // const branches = await getBranches();
    const allBranches = ['week01', 'week02', 'week03', 'week04', 'week05'];

    console.log('ALL BRANCHES', allBranches);

    let branchInfo = '';

    console.log('ABOUT to start CHECKOUTBRANCH');

    // see here: https://stackoverflow.com/a/11488129/253576
    for (let i = 1; i < allBranches.length - 1; i++) {
        branchInfo += await checkoutBranch(null, allBranches[i]);
    }
    response.send({ result: 'success', branchInfo: branchInfo });
}

module.exports.checkoutBranch = checkoutBranch;
module.exports.checkGitIgnore = checkGitIgnore;
