const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function execList(repoName) {
    const {stdout, stderr} = await exec('ls -la', {
        cwd: process.env.GIT_HOME + '/' + repoName + '/'
    });

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}

//this line is enough
//execList('isit320-rahimi-2019');

//using this function is unnecessary.
async function doExec() {
    await execList('isit320-rahimi-2019');
    console.log('ALL DONE!');
}
doExec();