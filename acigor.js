
//AC2-Redes-Heloísa-Thiago

function crypt(msg, hash) {
    // Adiciona caracteres números aleatórios
    const n = 8999724854491226;

    // Adiciona caracteres especiais aleatórios
    const c = "!#@$¨%(*)&(-_,;£.¹¢²¬¬¢³£§+=/?º°ª[!º!#@$¨%(*)&(-_,;£.¹¢²¬¬¢³£§+=/?º°ª[!º!#@$¨%(*)&(-_,;£.¹¢²¬¬¢³£§+=/?º°ª[!º";

    // Adiciona letras aleatórias
    const l = "rllmyygnevujljeztpwozliacsfojsjasfdipojdefapjkfsfulqjwsgqcupxsdqqjlvuvqsphztwde";

    // Adiciona a soma do RM da dupla
    const rm = 12264 + 13299;

    // Transformando a string em um array de letras
    let phrase = msg.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transformando cada caractere em um decimal de ASCII
        // e multiplicando pelas constantes       
        phrase[i] = (phrase[i].charCodeAt(0) * n + c + n + l + rm + n);

        // Adicionando a hash separadora a cada um dos
        // itens do array (letras)
        phrase[i] += hash;
    }

    // Adicionando a data de criptografia ao ultimo elemento do array
    phrase.push(n);

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}


function decrypt(cypher, hash) {
    // Forço a hash a virar uma string
    let h = String(hash)
    // Uso a hash para dividir a string em um array
    const msg = cypher.split(h);

    //Removeu o ultimo item do array e guardou em "cd"
    const cd = msg.pop();

    // Passando por cada um dos elementos e:
    // - dividindo pela data
    // - transformando de ASCII para caracteres
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / cd);
    }

    // Defininindo um uma saída no formato de string
    let output = "";

    // Loop concatenando a minha mensagem
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    // Retornando a mensagem descriptografada
    return output;
}

const phrase = "Olá, professor, este é o nosso trabalho sobre criptografia e descriptografia.";

let pass = crypt(phrase, "172839465017283946501728394650946502");

console.log(pass);


let solve = decrypt(pass, "172839465017283946501728394650946502")

console.log(solve);