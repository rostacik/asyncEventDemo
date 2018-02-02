let buttonOneBtn = document.getElementById("buttonOne");
if (buttonOneBtn) {
    buttonOneBtn.addEventListener("click", async function (event) {
        //debugger;

        await timedResolve("button click handler 1 - 1");
        await timedResolve("button click handler 1 - 2");
    });

    buttonOneBtn.addEventListener("click", async function (event) {
        //debugger;

        await timedResolve("button click handler 2 - 1");
        await timedResolve("button click handler 2 - 2");
    });
}

let containerDivElement = document.getElementById("containerDiv");
if (containerDivElement) {
    containerDivElement.addEventListener("click", async function (event) {
        //debugger;

        await timedResolve("containerDiv click handler 1");
        await timedResolve("containerDiv click handler 2");
    });
}

async function timedResolve(inputString: string) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(inputString);
            resolve(inputString);
        }, 1000);
    });
}