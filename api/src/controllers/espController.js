const state = [
    0,
    0,
    0,
    0,
]

module.exports = {

    async defaulTeste( req, res ){
       await res.send('Hello API!');
    },
    
    async setState(req,res){
        const { plug } = req.query;
        
        if ( ( plug < 1 || plug >4 ) ) {
            return res.send('Invalid State Error!'); 
        } else {
            
            const index = plug -1;
            
            if (state[index] == 0) {
                state[index] = 1
            }else {
                state[index] = 0 
            };
            
            const response = { statePlugs: state }
           
            await res.json(response);
        }
    },

    async verifyState(req,res){
        await res.json({ statePlugs: state });
    }
}

