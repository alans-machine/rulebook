var JsonToStdout = module.exports = function JsonToStdout(){};
JsonToStdout.prototype.transform = function(ast){
    process.stdout.write(JSON.stringify(ast, null, 2));
}
