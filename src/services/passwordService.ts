export default function generatePass(pwdLen: string) {
    let password: string = ''
    let characters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!'
    let passwordLength = parseInt(pwdLen)

    if(passwordLength >= 6 && passwordLength <= 18) {

        for(let index = 0; index < passwordLength; index++) {
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            )
        }
        return password
    }else {
        return 'W'
    }
}