const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;
//const workingDir = 'isit320-rahimi-2019';
workingDir = 'git-ignore-tests';
const badFiles = [
    'bower_components',
    'npm-debug.log',
    'bundle.js',
    '*.js.map',
    'node_modules',
    'coverage',
    '.idea',
    '.vscode',
    '.c9'
];

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
    let branchInfo = [''];
    let sendArray = [];
    const allBranches = await getBranches(response.response);
    console.log('ALL BRANCHES', allBranches);
    console.log('ABOUT to start checkGitIgnore');
    for (let branch of allBranches) {
        let notFound = [];
        try {
            branchInfo += await checkoutBranch(null, branch);
            (async () => {
                try {
                    const gitIgnoreFile = await fs.readFile('./' + workingDir + '/.gitignore', 'utf8', function(err, data) {
                        if (err) throw err;
                        return data;
                    });
                    for (let file of badFiles) {
                        if (!gitIgnoreFile.includes(file)) {
                            console.log('file missing from gitIgnore:', file);
                            notFound.push(file);
                            console.log('This is the notFound:', notFound);
                        }
                    }
                    if (notFound.length === 0) {
                        notFound.push();
                        console.log('This is the notFound:', notFound);
                    }
                    return notFound;
                } catch (e) {
                    console.error(e);
                }
            })();
        } catch (e) {
            console.log('Error on gitIgnoreTest:', e);
        }
        sendArray.push({ branch: branch, missing: notFound });
    }
    response.send(sendArray);
}

async function getBranches(response) {
    const { stdout, stderr } = await exec('git branch -a | sed -n -e \'s/remotes.origin*.//p\' | grep -v \'HEAD\' | grep \'[^* ]+\' -Eo', {
        cwd: workingDir
    });
    const output = stdout;
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (response) {
        response.send({ response: output.split('\n').filter(name => name != '') });
    } else {
        return output.split('\n').filter(name => name != '');
    }
}

async function badFilesTest(response) {
    let branchInfo = [];
    const allBranches = await getBranches(response.response);
    let sendArray = [];
    for (let branch of allBranches) {
        branchInfo += await checkoutBranch(null, branch);
        for (let file of badFiles) {
            const { stdout, stderr } = await exec('find . -iname ' + '\'*\'' + file + '\'*\'', {
                cwd: workingDir
            });
            let outArray = stdout.split('\n').filter(name => name != '');
            if (stdout.includes(file)) {
                outArray.forEach(i => {
                    sendArray.push({ branch: branch, badFile: i });
                });
            } else {
                console.error('Error on Finding File:', stderr);
            }
        }
    }
    console.log('this is sendArray: ', sendArray);
    response.send(sendArray);
}

module.exports.checkoutBranch = checkoutBranch;
module.exports.checkGitIgnore = checkGitIgnore;
module.exports.getBranches = getBranches;
module.exports.badFilesTest = badFilesTest;
