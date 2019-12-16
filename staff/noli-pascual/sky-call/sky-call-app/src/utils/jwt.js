export default {
    extractPayload(token) {
        const [,payload] = token.split('.')
        
        return JSON.parse(atob(payload))
    }
}