var exec=require('exec');
var config=require('../configuration/properties.json');

/**
 * The below function is used to pull the templates from cannonical repository -- pending
 */
module.exports.create_container=function(username,conatiner_name,container){

}





/**
 * The following command is used to run the conatiner with the specified OS as the user requests from the 
 * dashboard. 
 */
module.exports.run_container=function(username,container_name,operating_system_template,status){
    var container=username+"_"+container_name;
    var command="lxc launch "+operating_system_template+" "+conatiner_name;
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







/**
 * The following function is used to stop the conatiner on user request from dashboard.
 */




module.exports.stop_container=function(username,container_name,operating_system_template,status){
    var container=username+"_"+container_name;
    var command="lxc stop "+conatiner_name;
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


/**
 * The following function is used to delete the LXC conatiners
 */


module.exports.delete_container=function(username,container_name,operating_system_template,status){
    var container=username+"_"+container_name;
    var command="lxc delete "+conatiner_name;
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



/**
 *The following function is used to create the base image with node js installed
 */

function create_base_image_nodejs(username,container,status){
  var path_to_node_script=config.LXC-SCR-NODE-LTS;
  push_file(username,container,path_to_node_script,status);
  command_inside_lxc(username,container,status);
}

/**
 * the following function is used to push shell scripts in the container.
 */

function push_file(username,conatiner,file,status){
    var conatiner_name=username+"_"+conatiner;
    var command="lxc push "+conatiner_name+"/";
    os_executer(command,status);

}

/**the following function is used to execute commands inside LXC conatiners */
function command_inside_lxc(username,conatiner,command){
    var conatiner_name=username+"_"+conatiner;
    var command="lxc exec "+conatiner_name+" --"+command;
}

/**The following function is used to execute commands on the LXC host */
function os_executer(command,status){
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

/**The following function is used to Push a folder to LXC conatiner -- Pending */
module.exports.folder_push=function (folder,username,container,status){
var conatiner_name=username+"_"+container;

}

/** The following function is used to deploy the node js application in the container */
module.exports.deploy_node=function(username,container,status,folder){
    var container_name=username+"_"+container;
    var command="cd "+folder+",npm install , npm start";

}
