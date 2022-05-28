// a simple code for caesar cipher implementation
// the message to encrypt and the key to encrypt the message
// the key will determine the number of shift
// a shift in 1 means a will be replaced by b
// while a shift in 9 means a will be replaced by i and so on

const encryptCipher = (message, key) => {
    if (typeof message !== String || !Number.isInteger(key) || key < 0) {
        console.log(`message (the first input) should be a string and key should be number equal to or greater than zero with no decimal`)
    }
    // the final array of the function
    const finalArray = []

    for (let i = 0; i < message.length; i++) {

        // we first of all obtain the unicode value of each letter 
        // which is added by the numbers of shift(determined from the key)

        let charCode = message.charCodeAt(i) + key
        while (charCode > 122) {
            charCode = (charCode - 122) + 96
        }
        // the unicode value is being converted back 
        // to their various letter after applying the shift
        let toLetter = String.fromCharCode(charCode)
        // the converted letter is then added to the final array
        finalArray.push(toLetter)
    }
    let encryptedCipher = finalArray.join('')
    console.log(encryptedCipher)
}
// code to decrypt our message
const decryptMessage = (encryptedMessage, key) => {
    // we need to return the encrypted message back
    // to its normal state with the necessary key
    const decryptArray = []
    for (let i = 0; i < encryptedMessage.length; i++) {
        // we need to get the encrypted message character code
        // then subtract it back with the encrypted key to get
        // the sentence back to readable one
        let Code = encryptedMessage.charCodeAt(i) - key

        while (Code < 97 /**&&  Code !== 32**/) {
            Code = 122 - (96 - Code)
        }
        let Letter = String.fromCharCode(Code)
        decryptArray.push(Letter)
    }
    let decryptedCipher = decryptArray.join('')
    console.log(decryptedCipher)
}









// Input the message to encrypt