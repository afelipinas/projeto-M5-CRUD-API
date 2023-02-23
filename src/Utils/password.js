import * as bcrypt from "bcrypt";

export function generateHash(password){ //função de criptografar
    const salt = bcrypt.genSaltSync(12); //nivel de segurança
    const hash = bcrypt.hashSync(password, salt) // pega a senha digitada e o nivel de segurança e faz a criptografia
    return hash;
}

export function compareHash(password, hashed){ //função para comparar
    return bcrypt.compareSync(password, hashed) // pega a senha digitada e a senha criptografada e compara as duas
}
// console.log((compareHash("senha123", '$2b$12$bWxDUu3LxLg3k.ROy0tVJe5pFDLLjPKGm2qHwnXE8qQXkm.dnSUqC')))

