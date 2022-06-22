import Bitcoin from "./lib/bitcoin";

const bitcoin = new Bitcoin();
const name = "test10";

( async () => {
    // const wallet = await bitcoin.wallet.create({
    //     name,
    //     loadOnStartup: true
    // });
    // console.log("wallet", wallet)

    // const address = await bitcoin.wallet.getNewAddress({nameWallet: name});
    // console.log("address", address)

    const loadWallet = await bitcoin.wallet.loadWallet({nameWallet: name, loadOnStartup: false});
    console.log("loadWallet", {loadWallet})
})()


    // .then(resp => {
    //     console.log("load wallet", {resp})

        // bitcoin.wallet.getNewAddress(name).then(resp => {
        //     console.log("get new Address", {resp})
        // }).catch(error => {
        //     console.log({error})
        // })
    // }).catch(error => {
    //     console.log({error})
    // })
    