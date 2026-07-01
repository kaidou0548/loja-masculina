const produtos = [
{
    id: 1,
    nome: "Blazer Social Azul Slim Fit",
    categoria: "Terno/Blazer",
    preco: 250,
    descricao: "Blazer social masculino com modelagem slim fit e acabamento sofisticado. Ideal para reuniões, eventos corporativos e ocasiões especiais.",
    imagem: "/imagens/blazeazul.jpg"
},

{
    id: 2,
    nome: "Blazer Azul Marinho Premium",
    categoria: "Terno/Blazer",
    preco: 300,
    descricao: "Blazer premium confeccionado com tecido de alta qualidade, oferecendo conforto, elegância e excelente caimento para eventos formais.",
    imagem: "/imagens/blazerazulescuro.jpg"
},

{
    id: 3,
    nome: "Blazer Social Cinza Elegance",
    categoria: "Terno/Blazer",
    preco: 260,
    descricao: "Blazer cinza de corte moderno, perfeito para compor looks sofisticados em ambientes profissionais e sociais.",
    imagem: "/imagens/blazercinza.jpg"
},

{
    id: 4,
    nome: "Blazer Social Preto Executive",
    categoria: "Terno/Blazer",
    preco: 240,
    descricao: "Blazer preto clássico com acabamento refinado, ideal para cerimônias, jantares e eventos de negócios.",
    imagem: "/imagens/blazerpreto.jpg"
},

{
    id: 5,
    nome: "Calça Social Bege Slim",
    categoria: "Calca",
    preco: 250,
    descricao: "Calça social masculina com modelagem slim, proporcionando elegância e conforto para o dia a dia ou eventos especiais.",
    imagem: "/imagens/calcabegeescura.jpg"
},

{
    id: 6,
    nome: "Calça Casual Premium Bege",
    categoria: "Calca",
    preco: 210,
    descricao: "Calça casual premium desenvolvida para homens que buscam conforto sem abrir mão do estilo.",
    imagem: "/imagens/calcacampones.jpg"
},

{
    id: 7,
    nome: "Calça Social Marrom Claro",
    categoria: "Calca",
    preco: 180,
    descricao: "Calça social marrom clara com design moderno e versátil, combinando perfeitamente com camisas e blazers.",
    imagem: "/imagens/calcamarromclara.jpg"
},

{
    id: 8,
    nome: "Camisa Social Azul Clara Dry Fit",
    categoria: "Camisa",
    preco: 140,
    descricao: "Camisa social confeccionada em tecido leve e respirável, garantindo conforto durante todo o dia.",
    imagem: "/imagens/camisaazulclara.jpg"
},

{
    id: 9,
    nome: "Camisa Social Branca Slim Fit",
    categoria: "Camisa",
    preco: 180,
    descricao: "Camisa branca clássica de modelagem slim fit, indispensável para composições elegantes e profissionais.",
    imagem: "/imagens/camisabranca.jpg"
},

{
    id: 10,
    nome: "Camisa Social Preta Premium",
    categoria: "Camisa",
    preco: 190,
    descricao: "Camisa social preta com acabamento premium, perfeita para eventos noturnos e ocasiões formais.",
    imagem: "/imagens/camisapreta.jpg"
},

{
    id: 11,
    nome: "Conjunto Social Esporte Fino",
    categoria: "Conjunto",
    preco: 390,
    descricao: "Conjunto completo estilo esporte fino, ideal para eventos sociais que exigem elegância e conforto.",
    imagem: "/imagens/conjunto.jpg"
},

{
    id: 12,
    nome: "Conjunto Social Executivo",
    categoria: "Conjunto",
    preco: 240,
    descricao: "Conjunto social masculino com visual moderno e sofisticado para diversas ocasiões formais.",
    imagem: "/imagens/conjunto2.jpg"
},

{
    id: 13,
    nome: "Gravata Social Amarela",
    categoria: "Gravata",
    preco: 50,
    descricao: "Gravata amarela elegante que adiciona personalidade e sofisticação ao visual masculino.",
    imagem: "/imagens/gravataamarela.jpg"
},

{
    id: 14,
    nome: "Gravata Azul Clara Classic",
    categoria: "Gravata",
    preco: 70,
    descricao: "Gravata azul clara com design clássico, ideal para eventos corporativos e cerimônias.",
    imagem: "/imagens/gravataazulclara.jpg"
},

{
    id: 15,
    nome: "Gravata Azul Marinho Premium",
    categoria: "Gravata",
    preco: 80,
    descricao: "Gravata azul marinho elegante, perfeita para complementar ternos e blazers sofisticados.",
    imagem: "/imagens/gravataazulescura.jpg"
},

{
    id: 16,
    nome: "Gravata Social Estampada",
    categoria: "Gravata",
    preco: 90,
    descricao: "Gravata estampada moderna para homens que desejam um toque diferenciado no visual.",
    imagem: "/imagens/gravatacolorida.jpg"
},

{
    id: 17,
    nome: "Gravata Marrom Executive",
    categoria: "Gravata",
    preco: 50,
    descricao: "Gravata marrom com acabamento refinado, ideal para composições discretas e elegantes.",
    imagem: "/imagens/gravatamarrom.jpg"
},

{
    id: 18,
    nome: "Sapato Social Marrom em Couro",
    categoria: "Sapato",
    preco: 200,
    descricao: "Sapato social confeccionado em couro legítimo, oferecendo conforto, resistência e sofisticação.",
    imagem: "/imagens/sapatomarrom.jpg"
},

{
    id: 19,
    nome: "Sapato Social Marrom Café",
    categoria: "Sapato",
    preco: 190,
    descricao: "Sapato social marrom escuro com design moderno e acabamento impecável para ocasiões especiais.",
    imagem: "/imagens/sapatomarromescuro.jpg"
},

{
    id: 20,
    nome: "Sapato Social Marrom Clássico",
    categoria: "Sapato",
    preco: 140,
    descricao: "Modelo clássico que combina conforto e elegância para o uso diário ou eventos formais.",
    imagem: "/imagens/sapatomassom2.jpg"
},

{
    id: 21,
    nome: "Sapato Social Preto Premium",
    categoria: "Sapato",
    preco: 130,
    descricao: "Sapato social preto de bico fino, ideal para compor visuais sofisticados e profissionais.",
    imagem: "/imagens/sapatopreto.jpg"
},

{
    id: 22,
    nome: "Terno Azul Executive",
    categoria: "Terno/Blazer",
    preco: 280,
    descricao: "Terno azul elegante com excelente caimento, perfeito para casamentos, formaturas e eventos corporativos.",
    imagem: "/imagens/ternoazul.jpg"
    },

    {
    id: 23,
    nome: "Qr Code",
    categoria: "Qr Code",
    preco: 280,
    descricao: "Terno azul elegante com excelente caimento, perfeito para casamentos, formaturas e eventos corporativos.",
    imagem: "/imagens/qrcode.png"
    }
]

export default produtos;