const getHTML = (api_url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', api_url);
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Error');
                }
            }
        }
    });
}

const verifyButtonState = () => {
    const api_url = 'http://localhost:3030/api/state';
    getHTML(api_url)
        .then((response) => {
            const { statePlugs } = response
            
            for(let i = 0; i<=3 ; i++){
                const btn = document.getElementById(`t${i+1}`);
                
                
                if (statePlugs[i] == 1) {
                    btn.style.backgroundColor = "#c5ff3c";
                    btn.style.color = "grey";
                } else {
                    btn.style.backgroundColor =  "#333333";
                    btn.style.color = "grey"; 
                } 
            }
           
        }).catch((error) => {
            
            console.log(error);
            for(let i = 0; i<=3 ; i++){
                const btn = document.getElementById(`t${i+1}`);
                btn.style.backgroundColor = "#283520"; //
                btn.style.color = "grey";
                
            }
        });
}

const toogle = (plugNunber) => {

    const base_url = 'http://localhost:3030/api/toogle?plug=';
    const api_url = `${base_url}${plugNunber}`;
    
    getHTML(api_url)
        .then((response) => {
            const { statePlugs } = response
            const index = plugNunber -1;
            
            if ( statePlugs[index] == 1 ) {
                const btn = document.getElementById(`t${plugNunber}`);
                btn.style.backgroundColor = "#c5ff3c";
                btn.style.color = "grey";
            } else {
                const btn = document.getElementById(`t${plugNunber}`);
                btn.style.backgroundColor = "#333333"; 
                btn.style.color = "grey";
            }
            
            console.log( statePlugs );
        }).catch((error) => {
            console.log(error);
        });
}

var interval = window.setInterval(verifyButtonState, 10000);
