import fastify from "fastify"

const app = fastify()

app.get('/hello', ()=>{
    return "hello Word"
})

app.listen({
    port: 3333
}).then(()=>{
    console.log("Aplicação Rodando")
})