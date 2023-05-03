const fs  = require ('fs')


////////////////////////////////////////////////////////////////////////////
const addperson = (fname , lname , age , city , id) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter ((obj) => {
       return obj.id === id
    } )
    if (duplicatedData.length == 0 ) {
   
    allData.push ({
       id : id,
       fname : fname ,
       lname : lname , 
       age : age ,
       city : city 
    })

    saveallData (allData)

   } else {
       console.log("ERROR DUPLICATED DATA")
   }
    
}

/////////////////////////////////////////////////////////////////////////////

const loadInfo = () => {
   try {
       const dataJson = fs.readFileSync( "data.json").toString()
       return JSON.parse (dataJson)
       
   } catch {
       return []
   }

}
/////////////////////////////////////////////////////////////////////////////////

const saveallData = (allData) => {
     const saveallDataJson  = JSON.stringify(allData)
     fs.writeFileSync ("data.json" , saveallDataJson)
}


///////////////////////////////////////////////////////////////////////////////////

 // Delete data :

 const deletedData = (id) => {
    const allData = loadInfo()

    const dataToKeep = allData.filter ((obj) => {
        return  obj.id !== id 
    })
  

    saveallData (dataToKeep)
    
    console.log(" You have successfully deleted the item ")

}
/////////////////////////////////////////////////////////////////////////////////////

// read data :

const readData = (id) => {
    
const allData = loadInfo()

const itemNeeded =  allData.find ((obj) => {
   return  obj.id == id 
})
console.log(itemNeeded)

if (itemNeeded) {
   console.log("this information to id="+itemNeeded.id ,"firstName="+itemNeeded.fname ,"laststName="+itemNeeded.lname,"age="+itemNeeded.age,"city="+itemNeeded.city)
} else {
   console.log("id needed not found ")
}
}
//////////////////////////////////////////////////////////////////////////

// list data :

 const listData = () => {
       const allData = loadInfo()

       allData.forEach ((obj) => {
           console.log("this information to * FirstName ="+ obj.fname ,"Age ="+ obj.age,"City ="+ obj.city)
       })
 }


    ///////////////////////////////////////////////////////////////////////

    module.exports = {
    addperson ,
    deletedData ,
    readData ,
    listData
    }

    ///////////////////////////////////////////////////////////////////////
    // this the data AS TO ADDD
    // [{"id":1,"fname":"sondos","lname":"Alhams","age":20,"city":"palestine"},{"id":2,"fname":"mai","lname":"Almasriy","age":25,"city":"Los Angeles"},{"id":2,"fname":"saja","lname":"abouhomisa","age":23,"city":"Chicago"},{"id":4,"fname":"Alice","lname":"Johnson","age":28,"city":"San Francisco"},{"id":5,"firstName":"Michael","lastName":"Lee","age":35,"city":"Houston"},{"id":6,"fname":"Emily","lname":"Wang","age":29,"city":"Seattle"},{"id":7,"fname":"David","lname":"Kim","age":33,"city":"Dallas"},{"id":8,"fname":"Kareem","lname":"Alwawy","age":31,"city":"Egypt"},{"id":9,"fname":"Tom","lname":"Brown","age":27,"city":"Denver"},{"id":10,"fname":"Jessica","lname":"Martinez","age":36,"city":"Phoenix"}]