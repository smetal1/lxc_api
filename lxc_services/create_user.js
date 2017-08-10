var exec=require('exec');
var config=require('../configuration/properties.json');

module.exports.create_user_space=function(username,status){
    if(username){
        var command=config.LXC-SHELL-CMD-MKDIR+""+username;
        exec([command],function(err,out,code){
            if(err instanceof Error){
                status(config.LXC-002);
                
            }
            else {
                status(config.LXC-001);
            }
            process.exit(code);
        });
    }
}
