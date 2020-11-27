const ip = "localhost:3030";


async function verifyButtonStates() {
    const url = `http://${ip}/states`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`p${1 + i}`);

            if (data.statePlugs[i] == 0) {
                btn.style.backgroundColor = '#5d70ac';
            } else {
                btn.style.backgroundColor = '#404040';
            };

        };
    } catch (err) {

        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`p${1 + i}`);
            btn.style.backgroundColor = '#1a1a1a';
        };

    };
};

function setStates(number, states) {
    const btn = document.getElementById(`p${number}`);

    let index = number - 1;
    if (states[index] == 0) {
        btn.style.backgroundColor = '#5d70ac';
    } else {
        btn.style.backgroundColor = '#404040';
    };
};

async function toogle(number) {
    const url = `http://${ip}/toogle?plug=${number}`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        const states = data.statePlugs;
        setStates(number, states);
        console.log(states);

    } catch (err) {

        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`p${1 + i}`);
            btn.style.backgroundColor = '#1a1a1a';
        };
    };
};


verifyButtonStates();
var interval = window.setInterval(verifyButtonStates, 10000);

