const Place = require("../models/Place")


module.exports = {   

    index(req, res){
        
            return res.render("index.html")
       
    },

    create(req, res){
        return  res.render("create-point.html")
    },
       
    async post(req, res){ 

        try{
            const keys = Object.keys(req.body);
            for( let key of keys){          
                if(req.body[key] == "") return res.send("Please fill out all fields.")
            }
     
            const place = await Place.create(req.body)
        
            if(!place) return res.send("Houve um erro com o cadastro, tente novamente!")
                

            return res.render("create-point.html", { saved: true})

            
        }catch(error){

            console.error(error)
            
        }    
      
},

    async search(req, res){ 

        const { search}  = req.query
      
        const placesSearched = await Place.search(search)
      
        const total = placesSearched.length
      

        return res.render("search-results.html", {places: placesSearched, total} )
        
    }
}