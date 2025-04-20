export const handleError = (call, doc, message) =>{
    console.error(error.response?.data || error.message);
    const data = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
    const logMessage = `Erro na chamada: ${call}  \n doc: ${doc} \n data: ${data} \n erro: ${message}`
    return console.error(logMessage)
    
}
