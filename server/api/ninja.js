export default defineEventHandler(async(event) => {
 
     //handle query parameters
     const { name } = useQuery(event)

     //handle post dats
     const { age } = await $fetch()

    return {
        message: `Hello, ${name}! Your are ${age} years old`
    }


})