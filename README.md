# JobeBank - Validando Formulários

Curso de validação de formulários da Alura

<!--ts-->
   * [Tecnologias utilizadas](#Tecnologias-utilizadas)
   * [Screenshots](#Screenshots)
   * [O que eu aprendi](#O-que-eu-aprendi)
<!--te-->

## Tecnologias utilizadas
* JavaScript
* HTML
* CSS

## Screenshots

### Formulário
![image](https://user-images.githubusercontent.com/109925623/223412251-7d695d93-2595-41bc-a07e-827c8d3220fc.png)

### Erros personalizados
![image](https://user-images.githubusercontent.com/109925623/223412457-cfcea938-2b62-493e-9262-5585c7fb225d.png)

### Ativação da webcam
![image](https://user-images.githubusercontent.com/109925623/223412549-0456d0d3-6d9d-4cf2-99e9-01fb951e8e89.png)

### Webcam ativada
![image](https://user-images.githubusercontent.com/109925623/223412636-52079fc3-c56b-43d6-a5c8-cdf2774377f9.png)

### Cadastro realizado com sucesso
![image](https://user-images.githubusercontent.com/109925623/223412705-6bee0453-d391-482f-9cbd-817f7549e017.png)

### Dados salvos no LocalStorage
![image](https://user-images.githubusercontent.com/109925623/223413048-38ff7cfd-46a0-4fdb-b753-796686d19e31.png)


---

# O que eu aprendi

Neste curso aprendi algumas coisas interessantes:

- Bloqueio do erro padrão de formulário
```js
camposDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault()); // Bloqueia o pop-up de erro padrão do formulário
});
```

- Tratar o erro através do ```setCustomValidity```
```js
if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity("O usuário não é maior de idade.");
}
```

- Tratar cada tipo de erro possível individualmente
```js
const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
};
```
- Permitir o uso da WebCam pelo navegador: ativar vídeo e salvar uma foto
```js
botaoIniciarCamera.addEventListener("click", async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener("click", function() {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("imagem/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});
```
