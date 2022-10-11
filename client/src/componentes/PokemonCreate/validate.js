export default function validate(input){
    let errors = {};
    let RegExpressionText = /^[a-zA-Z\s]*$/;  
    let RegExpressionNum= /^[0-9,$]*$/
    let RegExpressionUrl= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/


    if(input.name.length===0){
        errors.name = 'El nombre es requerido'
    }
    // if(pokemons.indexOf( input.name ) !== -1){
    //     errors.name = 'A pokemon with that name is already existing'
    // }
    if(!RegExpressionText.test(input.name)){
        errors.name = 'No se permiten números ni caracteres especiales'
    }
    if(input.name.length > 18){
        errors.name = `El nombre no puede tener más de 18 caracteres.`
    }

    if(!RegExpressionNum.test(input.hp)){
        errors.hp = 'Solo se permiten numeros'
    }

    if(input.hp < 1 || input.hp > 150){
        if(input.hp < 1 ){
            errors.hp = 'La vida del pokemon debe ser superior a 1'
        }
        if( input.hp > 150){
            errors.hp = 'La vida del pokemon debe ser menor a 150'
        } 
    }

    if(!RegExpressionNum.test(input.attack)){
        errors.attack = 'Solo se permiten numeros'
    }

    if(input.attack < 1 || input.attack > 200){
        if(input.attack < 1 ){
            errors.attack = 'El ataque del Pokémon debe ser superior a 1.'
        }
        if( input.attack > 200){
            errors.attack = 'El ataque del Pokemon debe ser menor a 200'
        } 
    }

    if(!RegExpressionNum.test(input.defense)){
        errors.defense = 'Solo se permiten numeros'
    }
    if(input.defense < 1 || input.defense > 200){
        if(input.defense < 1 ){
            errors.defense = 'La defensa del Pokémon debe ser superior a 1'
        }
        if( input.defense > 200){
            errors.defense = 'La defensa del Pokemon debe ser menor a 200'
        } 
    }

    if(!RegExpressionNum.test(input.speed)){
        errors.speed = 'Solo se permiten numeros'
    }
    if(input.speed < 1 || input.speed > 100){
        if(input.speed < 1 ){
            errors.speed = 'La velocidad del Pokémon debe ser superior a 1'
        }
        if( input.speed > 100){
            errors.speed = 'La velocidad del Pokémon debe ser inferior a 100'
        } 
    }

    if(!RegExpressionNum.test(input.weight)){
        errors.weight = 'Solo se permiten numeros'
    }
    if(input.weight < 1 || input.weight > 1500){
        if(input.weight < 1 ){
            errors.weight = 'El peso del Pokémon debe ser superior a 1.'
        }
        if( input.weight > 1500){
            errors.weight = 'El peso del Pokémon debe ser inferior a 1500'
        } 
    }

    if(!RegExpressionNum.test(input.height)){
        errors.height = 'Solo se permiten numeros'
    }
    if(input.height < 1 || input.height > 80){
        if(input.height < 1 ){
            errors.height = 'La altura del Pokémon debe ser superior a 1 presa.'
        }
        if( input.height > 80){
            errors.height = 'La altura del Pokémon debe ser inferior a 80 dam.'
        } 
    }
    if(!RegExpressionUrl.test(input.img)){
        errors.img = 'Url incorrecto'
    }

    if(!input.types.length){
        errors.types = 'Debe elegir un tipo de pokemon'
    }


    // if(!input.types.length < 3){
    //     errors.types = `No puedes elegir más de 2 tipos por Pokémon`
    // }
    
    return errors;
}