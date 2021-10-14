module.exports = async () => ({ 
    b: 'Привет!', 
    c: await require('node-example') 
})