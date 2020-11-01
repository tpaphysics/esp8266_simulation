const state = [
    0,
    0,
    0,
    0,
]

module.exports = {

    defaulTeste( req, res ){
       return  res.send('Hello API!');
    },
    
    setState(req,res){
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
           
            return res.json(response);
        }
    },

    verifyState(req,res){
        return res.json({ statePlugs: state });
    }
}

