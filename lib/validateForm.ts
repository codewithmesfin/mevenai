

const validateName=(name:string)=>{
    const pattern =/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    return pattern.test(name)
}

const validateEmail=(email:string)=>{
    const pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
    return pattern.test(email)
}

const validatePhone=(phone:string)=>{
    const pattern = /^(\+251|251)?(0?9[0-9]{8})$/;
    return pattern.test(phone)
}




export {validateName,validateEmail,validatePhone}



