function criptografar(){    
    const chaves = new Map([['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]);    
    let txt_saida = "";
    let txt_entrada = document.querySelector('textarea').value ;   
    
    if (valida_texto(txt_entrada) == true) {

        for (let i = 0; i < txt_entrada.length; i++){        

            if (txt_entrada[i] = chaves.get(txt_entrada[i])){
                txt_saida = txt_saida + chaves.get(txt_entrada[i]);
            }else{
                txt_saida = txt_saida + txt_entrada[i];
            } 
        }  
        
        document.getElementById('img_menina').style.display = 'none';
        document.getElementById('txt_descripto').value = txt_saida;
    }
    else{
        alert ("Não é permitida a entrada de letras Maisculas e de caracteres especiais exemplo: ! @ # $ % ^ & * ( ) - _ = + [ ] { } \ | ; : , . < > / ? ` ~");

    }
     
}

function descriptografar(){
    //['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']
    let txt_cripto = document.querySelector('textarea').value;
    
    if (valida_texto(txt_cripto) == true) {
        document.getElementById('img_menina').style.display = 'none';   
        document.getElementById('txt_descripto').value = retro(txt_cripto);   
    }
    else{
        alert ("Não é permitida a entrada de letras Maisculas e de caracteres especiais exemplo: ! @ # $ % ^ & * ( ) - _ = + [ ] { } \ | ; : , . < > / ? ` ~");
    }    
}

function retro(txt_retro){
    let txt_entrada = txt_retro;    

    if (txt_retro.includes('enter') == true){
        txt_entrada = txt_retro.replace('enter', 'e');           
        return (retro(txt_entrada));
    } else if(txt_retro.includes('imes') == true) {
        txt_entrada = txt_retro.replace('imes', 'i');           
        return (retro(txt_entrada));
    } else if(txt_retro.includes('ai') == true) {
        txt_entrada = txt_retro.replace('ai', 'a');           
        return (retro(txt_entrada));
    } else if(txt_retro.includes('ober') == true) {
        txt_entrada = txt_retro.replace('ober', 'o');           
        return (retro(txt_entrada));
    } else if(txt_retro.includes('ufat') == true) {
        txt_entrada = txt_retro.replace('ufat', 'u');           
        return (retro(txt_entrada));
    } else {
        return txt_entrada;
    }
}

function valida_texto(txt_valida){
    let txt_entrada = txt_valida;
    let letras_min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

    for (let i = 0; i < txt_entrada.length; i++){                   

        if ((letras_min.includes(txt_entrada[i])== false)){
            return false;
            break;
        }
    }    

    return true;    
}










