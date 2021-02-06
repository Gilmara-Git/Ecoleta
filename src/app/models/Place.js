const db =  require("../../config/db")



module.exports= {

   async create(data){
        try{

            const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES ( $1, $2, $3, $4, $5, $6, $7)
            RETURNING id
`

            const values = [
            data.image,
            data.name,
            data.address,
            data.address2,
            data.state,
            data.city,
            data.items,

            ]

            const results = await db.query(query, values)
            return results.rows[0]

        }catch(error){

            console.error(error)
        }
       
       
    
    }, 

    async search(search){
     
        try{

            const results = await db.query(`

           SELECT * FROM places 
            WHERE name ILIKE '%${search}%' 
            OR city ILIKE '%${search}%'
                        
            `)

        return results.rows
         

        }catch(error){
            console.error(error)
        }
    }

}
