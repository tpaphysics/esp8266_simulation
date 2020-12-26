const state = [
    0,
    0,
    0,
    0,
]

module.exports = {

    defaulTeste( req, res ){
        res.send('Hello API!');
    },
    
    setState(req,res){
        const { plug } = req.query;
        
        if ( ( plug < 1 || plug >4 ) ) {
            res.send('Invalid State Error!'); 
        } else {
            
            const index = plug -1;
            
            if (state[index] == 0) {
                state[index] = 1
            }else {
                state[index] = 0 
            };
            
            const response = { statePlugs: state }
           
            res.json(response);
        }
    },

    verifyState(req,res){
        res.json({ statePlugs: state });
    }
}

