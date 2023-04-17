export const checkEmail = (email) => {
    const error = []

    if (email.length === 0){
        error.push("Required")
    }

    if (!email.endsWith("@webdevsimplified.com")){
        error.push("Must end in @webdevsimplified.com")
    }

    return error
}

export const checkPassword = (password) => {
    const error = []

    if (password.length < 10){
        error.push("Must Be 10 characters or longer")
    }

    if (!password.match(/[a-z]/)){
        error.push("Must include a lowercase letter")
    }

    if (!password.match(/[A-Z]/)){
        error.push("Must include an uppercase letter")
    }

    if (!password.match(/[0-9]/)){
        error.push("Must include a number")
    }

    return error
}