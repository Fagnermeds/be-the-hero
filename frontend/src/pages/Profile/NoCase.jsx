import React from 'react'

export default props => {

    if(props.value){

        return (
            <div style={
                {
                    fontSize: 18 + 'px', 
                    color:'#737380',
                    marginTop: 32 + 'px' 
                }
            }>Nenhum caso cadastrado.</div>
        )
    
    } else {
        return null;
    }
}    

