const fs = require('fs');
const validator = require ('validator')
const yargs = require('yargs');
const data = require('./data');
const x = require("./allData")

// ADD DATA ////////////////////////////////////////////////////////////////////////////////
yargs.command ({
  command : "add" ,
  describe : "to add an item",
  builder : {
    id:{
            describe:"this is the id name in add command ",
            demandOption:true,
            type:"integer",
        
       },
     fname : {
        describe : "this is the first name in add command ",
        demandOption: true,
        type : "string",
     },
     lname : {
       describe : "this is the last name in add command ",
       demandOption: true,
       type : "string",
     },age:{
            describe:"this is the age name in add command ",
            demandOption:false,
            type:"integer",
          
              },
          city:{
            describe:"this is the city name in add command ",
            demandOption:false,
            type:"string",
            
                }
  },
  handler :(x) => {
     data.addperson(x.fname , x.lname , x.age , x.city , x.id)
  }
})
yargs.parse()

// DELEATE DATA ////////////////////////////////////////////////////////////////////////////
yargs.command ({
  command : "delete" ,
  describe : "to deleted an item",
  handler :(x) => {
     data.deletedData (x.id)
  }
})

yargs.parse()

////////////////////////////////////////////////////////////////////////////////////////////
  // read data 

  yargs.command ({
    command : "read",
    describe : "Read data" ,
    builder : {
         id : {
             describe : "this is id desc in read command ",
             demandOption : true ,
             type : "integer"
         }
    },
    handler : (x) => {
      data.readData(x.id)
    }
  })
  yargs.parse()

///////////////////////////////////////////////////////////////////////////////////////////
  // list 

    yargs.command ({
    command : "list",
      describe : "list data",
      handler : ()=> {
        data.listData()
      }
    })

    yargs.parse()


