/**
Name : NodeJS Custom CLI Module - Project Generator Template
Author:  Dilusha Gonagala
License : MIT
Version : 1.0
**/

//Module Dependencies
var fs = require('fs-extra');
var child_process = require('child_process');

module.exports = {

  generate: function(projecttype, projectname) {


    if (!projecttype == undefined || !projecttype == "" && !projectname == undefined || !projectname == "") {

      //AngularSimple Generator
      if (projecttype == "angularsimple") {

        //Create directory with the user's given project name on the current cli path
        fs.mkdirs('./' + projectname + '', function(err) {
          if (err) {
            console.error(err);
          } else {

            fs.writeFile("./" + projectname + "/README.MD", "Generated By NodeCLIModule Template", function(err) {
              if (err) {
                console.log(err);
              }
              // We now know that evrything is smooth
              else {
                console.log(__dirname);
                var dirname = __dirname;

                var dirstr = dirname.substr(dirname.lastIndexOf('/') + 1) + '$',
                  fixedurl = dirname.replace(new RegExp(dirstr), '');

                fs.copy(fixedurl + '/templates/angularsimple/', "./" + projectname + "", function(err) {
                  if (err) {
                    console.error(err)
                  } else {
                    console.log('success!');
                    child_process.exec(["node ./" + projectname + "/server.js"], function(err, out, code) {
                      if (err instanceof Error) {
                        throw err;
                      } else {
                        process.stderr.write(err);
                        process.stdout.write(out);
                        process.exit(code);
                      }


                    });
                    console.log("Your AngularSimple App Is up And Running on http://localhost:5000");
                  }

                });

              }

            });

          }

        });


      }

    }



  }


}
