const exec = require('child_process').exec;

exec('ls -la', {
    cwd: process.env.GIT_HOME + '/isit320-rahimi-2019/'
}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
