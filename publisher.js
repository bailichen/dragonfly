var process = require('child_process');
process.exec('git pull', function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    console.log(stdout)

    process.exec('npm run dev -- --ci', function (error2, stdout2, stderr2) {
        console.log(stdout2)
    })
});
