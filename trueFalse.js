let maioridade = true;

const usuarios = [
    {
        nome: "João",
        idade: 25,
        
        
    },
    {
        nome: "Ana",
        idade: 18,
        
    },
    {
        nome: "Beatriz",
        idade: 15,
        
    },
    {
        nome: "Carlos",
        idade: 16,
        
    },
    {
        nome: "Antonio",
        idade: 32,
        
    },
]

usuarios.forEach(usuario => {
        if(usuario.idade < 18){
        usuario.maioridade = false;
    };
        if(usuario.idade >= 18){
            usuario.maioridade = true;   
    };
        
});

console.log(usuarios);
