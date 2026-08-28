const local_URL = "https://www.google.com/maps/place/Restaurante+Marujo,+Massagua%C3%A7u+Caraguatatuba/@-23.6040602,-45.3524975,17z/data=!3m1!4b1!4m6!3m5!1s0x94cd618d8b83993b:0xa4a5ba79dabff7e6!8m2!3d-23.6040652!4d-45.3476266!16s%2Fg%2F11qbjmwks0?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D";

const linkLocal = document.querySelector("[data-local]");

linkLocal.href = local_URL;
linkLocal.target = "_blank";
const WHATSAPP_NUMERO = "5512996293344";
const INSTAGRAM_URL = "https://www.instagram.com/marujogastrobar/";

const carrinho=[];

const cardapio = [
    {
        "nome": "Bebidas",
        "nota": "",
        "subcategorias": [
            {
                "nome": "Não Alcoólicas",
                "nota": "",
                "itens": [
                    {
                        "nome": "green limonade",
                        "preco": "R$ 29,90",
                        "descricao": ""
                    },
                    {
                        "nome": "blue limonade",
                        "preco": "R$ 29,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Água com gás",
                        "preco": "R$ 7,50",
                        "descricao": ""
                    },
                    {
                        "nome": "pink lomonede",
                        "preco": "R$ 29,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Água sem gás",
                        "preco": "R$ 7,50",
                        "descricao": ""
                    },
                    {
                        "nome": "Refrigerante",
                        "preco": "R$ 8,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Energético red bull",
                        "preco": "R$ 18,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Água tônica",
                        "preco": "R$ 8,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Schweppes citrus",
                        "preco": "R$ 9,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Del Valle",
                        "preco": "R$ 9,90",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Café",
                "nota": "",
                "itens": [
                    {
                        "nome": "Café Expresso",
                        "preco": "R$ 7,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Café com Leite Pequeno",
                        "preco": "R$ 8,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Café com Leite Médio",
                        "preco": "R$ 10,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Capuccino Médio",
                        "preco": "R$ 16,90",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Sucos",
                "nota": "Todos os sucos com 350ml / Fruta congelada",
                "itens": [
                    {
                        "nome": "Laranja",
                        "preco": "R$ 19,90",
                        "descricao": "Natural"
                    },
                    {
                        "nome": "Limão",
                        "preco": "R$ 17,90",
                        "descricao": "Natural"
                    },
                    {
                        "nome": "Limonada suíça",
                        "preco": "R$ 22,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Abacaxi com Hortelã",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Maracujá",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Acerola",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Morango",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Frutas vermelhas",
                        "preco": "R$ 21,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Manga",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Pitaya",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Abacaxi",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Amora",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Jarra de Suco 1,3L",
                        "preco": "R$ 76,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Adicional de frutas",
                        "preco": "R$ 6,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Adicional de leite",
                        "preco": "R$ 6,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Adicional de Leite Condensado",
                        "preco": "R$ 6,00",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Cervejas",
                "nota": "",
                "itens": [
                    {
                        "nome": "PETRA 600ML",
                        "preco": "R$ 16,90",
                        "descricao": ""
                    },
                    {
                        "nome": "SERRAMALTE 600ML",
                        "preco": "R$ 22,90",
                        "descricao": ""
                    },
                    {
                        "nome": "STELLA ARTOIS",
                        "preco": "R$ 14,90",
                        "descricao": ""
                    },
                    {
                        "nome": "BUDWEISER",
                        "preco": "R$ 13,90",
                        "descricao": ""
                    },
                    {
                        "nome": "CORONA",
                        "preco": "600ml R$ 24,90 / Long neck R$ 14,90",
                        "descricao": ""
                    },
                    {
                        "nome": "HEINEKEN",
                        "preco": "600ml R$ 24,90 / Long neck R$ 14,90",
                        "descricao": ""
                    },
                    {
                        "nome": "ORIGINAL",
                        "preco": "R$ 21,90",
                        "descricao": ""
                    },
                    {
                        "nome": "AMSTEL",
                        "preco": "R$ 17,90",
                        "descricao": ""
                    },
                    {
                        "nome": "THEREZOPOLIS 600 ML",
                        "preco": "R$ 17,90",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Chopp",
                "nota": "",
                "itens": [
                    {
                        "nome": "Chopp pilsen",
                        "preco": "300ml R$ 15,90 / 600ml R$ 24,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Chopp artesanal",
                        "preco": "300ml R$ 21,90 / 600ml R$ 34,90",
                        "descricao": "IPA Dortmund"
                    }
                ]
            },
            {
                "nome": "Cervejas Artesanais",
                "nota": "",
                "itens": [
                    {
                        "nome": "Pils",
                        "preco": "R$ 32,90",
                        "descricao": "Pilsen"
                    },
                    {
                        "nome": "Linderhof",
                        "preco": "R$ 38,90",
                        "descricao": "Weissbier"
                    },
                    {
                        "nome": "Schloss",
                        "preco": "R$ 37,00",
                        "descricao": "Weissbier"
                    },
                    {
                        "nome": "Nostradamus",
                        "preco": "R$ 37,00",
                        "descricao": "Stout"
                    },
                    {
                        "nome": "Red rose",
                        "preco": "R$ 37,00",
                        "descricao": "Red ale"
                    },
                    {
                        "nome": "Old ship",
                        "preco": "R$ 41,90",
                        "descricao": "Ipa"
                    },
                    {
                        "nome": "Old plane",
                        "preco": "R$ 43,90",
                        "descricao": "American ipa"
                    },
                    {
                        "nome": "Hopfen",
                        "preco": "R$ 46,90",
                        "descricao": "Imperial ipa"
                    },
                    {
                        "nome": "Session",
                        "preco": "R$ 44,90",
                        "descricao": ""
                    },
                    {
                        "nome": "The White",
                        "preco": "R$ 44,90",
                        "descricao": "Witebier"
                    }
                ]
            },
            {
                "nome": "Caipirinhas",
                "nota": "Kiwi, Brasileirinha (limão e maracujá), Maracujá, Morango, Frutas vermelhas, Tropical (maracujá, limão e morango), Abacaxi e Pitaya",
                "itens": [
                    {
                        "nome": "Saquê SOFT",
                        "preco": "R$ 31,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Saquê dourado",
                        "preco": "R$ 33,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Cachaça",
                        "preco": "R$ 29,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Cachaça especial",
                        "preco": "R$ 38,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Vodka nacional",
                        "preco": "R$ 34,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Vodka importada",
                        "preco": "R$ 48,90",
                        "descricao": "ciroc ou grey goose"
                    }
                ]
            },
            {
                "nome": "Destilados",
                "nota": "Consulte mais opções e doses",
                "itens": [
                    {
                        "nome": "Green Label",
                        "preco": "R$ 75,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Gold Label",
                        "preco": "R$ 52,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Blue Label",
                        "preco": "R$ 189,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Licor 43",
                        "preco": "R$ 28,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Red Label",
                        "preco": "R$ 22,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Balck Label",
                        "preco": "R$ 29,90",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Drinks & Coquetéis",
                "nota": "",
                "itens": [
                    {
                        "nome": "Cosmopolitan",
                        "preco": "R$ 38,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Fitzgerald",
                        "preco": "R$ 34,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Mestre dos mares",
                        "preco": "R$ 35,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Gin tropical com espuma de gengibre",
                        "preco": "R$ 36,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Aperol",
                        "preco": "R$ 42,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Gin tônica nacional",
                        "preco": "R$ 34,90",
                        "descricao": "Gin, água tônica e um sabor - limão, morango, frutas vermelhas ou limão siciliano"
                    },
                    {
                        "nome": "Gin tônica importado",
                        "preco": "R$ 38,90",
                        "descricao": "Gin importado, água tônica e um sabor - limão, morango,frutas vermelhas ou limão siciliano"
                    },
                    {
                        "nome": "Negroni",
                        "preco": "R$ 38,00",
                        "descricao": "Campari, Martini Rojo e rodela de laranja"
                    },
                    {
                        "nome": "Sex on the beach",
                        "preco": "R$ 38,00",
                        "descricao": "Vodca, licor de pêssego, suco de laranja e groselha"
                    },
                    {
                        "nome": "Mojito",
                        "preco": "R$ 32,90",
                        "descricao": "Rum branco, açúcar, suco de limão, hortelã e água com gás"
                    },
                    {
                        "nome": "Cuba libre",
                        "preco": "R$ 31,90",
                        "descricao": "Rum ouro (escuro), limão taiti e coca cola"
                    },
                    {
                        "nome": "Marujo",
                        "preco": "R$ 39,00",
                        "descricao": "Sorvete de creme, Leite condensado, rum ouro, Amarula"
                    },
                    {
                        "nome": "Pinã colada",
                        "preco": "R$ 35,00",
                        "descricao": "Rum branco, leite condensado, leite de coco e coco ralado"
                    },
                    {
                        "nome": "Espanhola",
                        "preco": "R$ 32,90",
                        "descricao": "Abacaxi ou morango, vinho tinto, calda e leite condensado"
                    },
                    {
                        "nome": "Margarita",
                        "preco": "R$ 37,90",
                        "descricao": "Tequila, limão, licor de pêssego e sal"
                    },
                    {
                        "nome": "Moscow mule",
                        "preco": "R$ 39,00",
                        "descricao": "Vodka, infusão de limão e gengibre e espuma de gengibre"
                    }
                ]
            }
        ],
        "grupo": "Bebidas",
        "imagem": "img/bebidas.jpg"
    },
    {
        "nome": "Entradas",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Couvert",
                        "preco": "R$ 44,00",
                        "descricao": "Cesta de pães e 3 patês: atum, azeitona e tomate seco"
                    },
                    {
                        "nome": "Casquinha de Siri",
                        "preco": "R$ 54,00",
                        "descricao": "Carne de siri gratinada com parmesão"
                    },
                    {
                        "nome": "Ostras",
                        "preco": "R$ 74,00",
                        "descricao": "Ostravagante. 08 unidades"
                    },
                    {
                        "nome": "Ceviche",
                        "preco": "R$ 92,00",
                        "descricao": "Salmão ou peixe branco 250g"
                    },
                    {
                        "nome": "Coquetel de Camarão",
                        "preco": "R$ 134,00",
                        "descricao": ""
                    }
                ]
            }
        ],
        "grupo": "Entradas",
        "imagem": "img/entrada.png"
    },

        
    {
        "nome": "Porções",
        "nota": "",
        "subcategorias": [
            {
                "nome": "Frutos do Mar",
                "nota": "",
                "itens": [
                    {
                        "nome": "Bolinho de bacalhau",
                        "preco": "R$ 74,00",
                        "descricao": "8 unidades"
                    },
                    {
                        "nome": "Marisco a vinagrete",
                        "preco": "R$ 99,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Lombo de cação à dorê",
                        "preco": "R$ 98,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Camarão a dorê",
                        "preco": "R$ 99,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Camarão rosa alho e azeite",
                        "preco": "R$ 144,00",
                        "descricao": "Acompanha pão"
                    },
                    {
                        "nome": "Isca de peixe",
                        "preco": "R$ 94,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Lula a dorê",
                        "preco": "R$ 110,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Lula à provençal",
                        "preco": "R$ 119,00",
                        "descricao": "Acompanha pão"
                    },
                    {
                        "nome": "Polvo à provençal",
                        "preco": "R$ 169,00",
                        "descricao": "Acompanha pão"
                    }
                ]
            },
            {
                "nome": "Diversas",
                "nota": "",
                "itens": [
                    {
                        "nome": "Porção de Pastel",
                        "preco": "R$ 58,00",
                        "descricao": "Bauru, queijo e catupiry"
                    },
                    {
                        "nome": "Porção de pastel especial",
                        "preco": "R$ 84,00",
                        "descricao": "Camarão e carne de siri"
                    },
                    {
                        "nome": "Isca de filé de frango na panko",
                        "preco": "R$ 89,00",
                        "descricao": "Isca de filé de frango empanado na panko"
                    },
                    {
                        "nome": "Isca de filé de frango gratinada",
                        "preco": "R$ 99,00",
                        "descricao": "Isca de filé de frango gratinada com catupiry e parmesão. Acompanha pão"
                    },
                    {
                        "nome": "Batata frita (simplot extra crunch)",
                        "preco": "R$ 58,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Batata cheddar e bacon",
                        "preco": "R$ 94,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Batata rustica canoa premium",
                        "preco": "R$ 69,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Mandioca frita",
                        "preco": "R$ 64,00",
                        "descricao": ""
                    }
                ]
            },
            {
                "nome": "Carnes",
                "nota": "Todas as porções acompanham vinagrete, farofa e pão de alho",
                "itens": [
                    {
                        "nome": "Tábua de churrasco picanha com catupiry",
                        "preco": "R$ 269,00",
                        "descricao": "300g de picanha, 300g linguiça toscana, 300g de frango na panko"
                    },
                    {
                        "nome": "Ancho",
                        "preco": "R$ 188,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Chorizo",
                        "preco": "R$ 179,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Picanha",
                        "preco": "R$ 199,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Tábua de churrasco chorizo com catupiry",
                        "preco": "R$ 219,00",
                        "descricao": "300g de chorizo, 300g de linguiça toscana, 300g de frango na pankp"
                    }
                ]
            },
            {
                "nome": "Combos",
                "nota": "",
                "itens": [
                    {
                        "nome": "Lombo de cação e fritas",
                        "preco": "R$ 138,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Camarão sete barbas e fritas",
                        "preco": "R$ 144,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Isca de peixe e fritas",
                        "preco": "R$ 139,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Camarão sete barbas e lula",
                        "preco": "R$ 210,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Camarão sete barbas, lula e fritas",
                        "preco": "R$ 238,00",
                        "descricao": ""
                    }
                ]
            }
        ],
        "grupo": "Porções",
        "imagem": "img/guarnicao.jpg"
    },

    {
        "nome": "Risotos",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Risoto a moda do Chef",
                        "preco": "R$ 229,00",
                        "descricao": "Risoto de palmito palmeira real com 4 tipos de ervas da região. Acompanha steak de entrecorte ao molho madeira"
                    },
                    {
                        "nome": "Risoto de legumes",
                        "preco": "R$ 118,00",
                        "descricao": "Legumes selecionados, palmito, cenoura, vagem abobrinha e brócolis"
                    },
                    {
                        "nome": "Risoto italiano",
                        "preco": "R$ 124,00",
                        "descricao": "Palmito, rúcula e tomate seco"
                    },
                    {
                        "nome": "Risoto de camarão",
                        "preco": "R$ 299,00",
                        "descricao": "camarões rosa pequenos, molho a base de leite de coco, azeite de dendê, pimentão, cebola, tomate"
                    },
                    {
                        "nome": "Risoto ao marujo",
                        "preco": "R$ 329,00",
                        "descricao": "Isca de peixe, camarão rosa, camarão pequeno, lula nacional, polvo, mexilhão, molho a base de leite de coco, azeite de dendê, pimentão, cebola, tomate e coentro"
                    }
                ]
            }
        ],
        "grupo": "Massas",
        "imagem": "img/risoto.jpg"
    },
    {
        "nome": "Carnes Nobres",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Mignon com salada",
                        "preco": "R$ 199,00",
                        "descricao": "Mignon grelhado, acompanha alface, cebola, tomate, pepino e palmito"
                    },
                    {
                        "nome": "Mignon a brasileira",
                        "preco": "R$ 239,00",
                        "descricao": "Mignon grelhado, acompanha arroz branco, vinagrete, farofa e batata canoa"
                    },
                    {
                        "nome": "Strogonoff de filé mignon",
                        "preco": "R$ 218,00",
                        "descricao": "Mignon grelhado ao molho rosé, acompanha arroz branco e batata frita"
                    },
                    {
                        "nome": "Bife ancho da casa",
                        "preco": "R$ 249,90",
                        "descricao": "Ancho grelhado, acompanha arroz branco, vinagrete, farofa, batata corada"
                    },
                    {
                        "nome": "Bife chorizo ao marujo",
                        "preco": "R$ 246,00",
                        "descricao": "Chorizo grelhado, acompanha arroz branco, vinagrete, farofa e legumes ao vapor"
                    },
                    {
                        "nome": "Mignon com palmito",
                        "preco": "R$ 276,00",
                        "descricao": "Mignon grelhado, acompanha arroz branco e palmito na manteiga"
                    },
                    {
                        "nome": "Mignon parmegiana",
                        "preco": "R$ 259,00",
                        "descricao": "Mignon grelhado, acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Mignon medalhão",
                        "preco": "R$ 269,00",
                        "descricao": "Mignon grelhado envolto em fatias de bacon, arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Mignon ao catupiry",
                        "preco": "R$ 274,00",
                        "descricao": "Mignon grelhado com catupiry e parmesão, acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Picanha a brasileira",
                        "preco": "R$ 283,00",
                        "descricao": "Picanha grelhada, acompanha arroz branco, vinagrete, farofa e batata canoa"
                    }
                ]
            }
        ],
        "grupo": "Carnes",
        "imagem": "img/carnes.png"
    },
        {
        "nome": "Frango",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Frango ao catupiry",
                        "preco": "R$ 189,00",
                        "descricao": "File de frango grelhado gratinado. Acompanha arroz branco e batata palito"
                    },
                    {
                        "nome": "Frango com salada",
                        "preco": "R$ 108,00",
                        "descricao": "Filé de frango grelhado, alface, tomate, cebola, pepino e palmito"
                    },
                    {
                        "nome": "Frango a brasileira",
                        "preco": "R$ 139,00",
                        "descricao": "Filé de frango grelhado, acompanha arroz branco farofa, vinagrete e batata canoa"
                    },
                    {
                        "nome": "Strogonoff de frango",
                        "preco": "R$ 148,00",
                        "descricao": "Filé de frango ao molho rosé, acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Frango com palmito",
                        "preco": "R$ 149,00",
                        "descricao": "Filé de frango grelhado, acompanha arroz branco e palmito palmeira real na manteiga"
                    },
                    {
                        "nome": "Frango parmegiana",
                        "preco": "R$ 188,00",
                        "descricao": "Filé de frango à milanesa, gratinado com mozzarella, molho sugo e parmesão, acompanha arroz branco e batata canoa"
                    }
                ]
            }
        ],
        "grupo": "Carnes",
        "imagem": "img/frango.jpg"
    },
    {
        "nome": "Massas",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Espaguete ao pomodoro",
                        "preco": "R$ 98,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Espaguete ao molho branco",
                        "preco": "R$ 109,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Espaguete ao molho de camarão rosa",
                        "preco": "R$ 289,00",
                        "descricao": "Camarões rosa e pequenos, molho a base de leite de coco,azeite de dendê, pimentão, cebola, tomate e coentro"
                    },
                    {
                        "nome": "Espaguete ao marujo",
                        "preco": "R$ 299,00",
                        "descricao": "Isca de peixe, camarão rosa, camarão pequeno, lula, polvo,mexilhão, molho a base de leite de coco, azeite de dendê,pimentão, cebola, tomate e coentro"
                    }
                ]
            }
        ],
        "grupo": "Massas",
        "imagem": "img/massas.jpg"
    },
    {
        "nome": "Filé de Pescada Branca",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Pescada a dorê com salada",
                        "preco": "R$ 129,90",
                        "descricao": "Filé de pescada a dorê acompanhado de alface, tomate, cebola, pepino e palmito Palmeira Real"
                    },
                    {
                        "nome": "Pescada a milanesa com salada",
                        "preco": "R$ 134,00",
                        "descricao": "Filé de pescada a milanesa, acompanhado de alface, tomate, cebola, pepino e palmito Palmeira Real"
                    },
                    {
                        "nome": "Pescada a dorê",
                        "preco": "R$ 144,00",
                        "descricao": "Filé de pescada a dorê. Acompanha arroz branco e batatas souté"
                    },
                    {
                        "nome": "Pescada a milanesa",
                        "preco": "R$ 154,00",
                        "descricao": "Filé de pescada a milanesa. Acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Pescada ao molho de camarão",
                        "preco": "R$ 208,00",
                        "descricao": "Filé de pescada a dorê coberta com molho de camarão. Acompanha arroz branco"
                    },
                    {
                        "nome": "Pescada a parmegiana",
                        "preco": "R$ 184,00",
                        "descricao": "Filé de pescada gratinada com mozzarella, molho sugo e parmesão. Acompanha arroz branco e batata canoa"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/pescada.jpg"
    },
    {
        "nome": "Peixes da Época (Cambucu)",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Filé de peixe a moda da casa",
                        "preco": "R$ 308,00",
                        "descricao": "Filé de peixe recheado com palmito e catupiry. Acompanha arroz branco e mandioca frita"
                    },
                    {
                        "nome": "Filé de peixe com palmito",
                        "preco": "R$ 268,00",
                        "descricao": "Filé de peixe grelhado com palmito palmeira real na manteiga. Acompanha arroz branco"
                    },
                    {
                        "nome": "Filé de peixe com frutos do mar",
                        "preco": "R$ 338,00",
                        "descricao": "Filé de peixe grelhado com camarões rosa e lula nacional a provençal. Acompanha arroz branco e batata coradas"
                    },
                    {
                        "nome": "Filé de peixe com camarão e catupiry",
                        "preco": "R$ 349,00",
                        "descricao": "Filé de peixe grelhado, gratinado com camarão rosa ao molho branco e champignon. Acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Caçarola a caiçara",
                        "preco": "R$ 359,00",
                        "descricao": "Cambucu recheado com banana da terra grelhada a dorê em uma cama de palmito salteado na manteiga de ervas finas. Acompanha arroz com marisco"
                    },
                    {
                        "nome": "Filé de peixe com salada",
                        "preco": "R$ 188,00",
                        "descricao": "Filé de peixe grelhado, acompanha alface, tomate, cebola, pepino e palmito palmeira real"
                    },
                    {
                        "nome": "Filé de peixe verão",
                        "preco": "R$ 208,00",
                        "descricao": "Filé de peixe grelhado, acompanha arroz branco e legumes salteados no azeite"
                    },
                    {
                        "nome": "Filé de peixe ao molho branco",
                        "preco": "R$ 235,00",
                        "descricao": "Filé de peixe grelhado ao molho branco e champignon, gratinado com catupiry e parmesão, acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Filé de peixe a belle meuniere",
                        "preco": "R$ 249,00",
                        "descricao": "Filé de peixe grelhado, coberto com camarões pequenos, champignon e alcaparras na manteiga, acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Filé de peixe ao capitão",
                        "preco": "R$ 308,00",
                        "descricao": "Filé de peixe recheado com camarão e catupiry, acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Filé de peixe ao marujo",
                        "preco": "R$ 298,00",
                        "descricao": "Filé de peixe com camarões rosa, salteados na manteiga com alcaparras, acompanha arroz a grega e batata canoa"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/cambucu.jpg"
    },
    {
        "nome": "Salmão",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Salmão do capitão",
                        "preco": "R$ 318,00",
                        "descricao": "Filé de salmão grelhado com camarões rosa a provençal,acompanha arroz branco, rúcula, palmito, agrião, tomate seco e batata soute"
                    },
                    {
                        "nome": "Salmão verão",
                        "preco": "R$ 238,00",
                        "descricao": "Filé de salmão grelhado, acompanha arroz branco e legumes salteados ao vapor"
                    },
                    {
                        "nome": "Salmão belle meuniere",
                        "preco": "R$ 268,00",
                        "descricao": "Filé de salmão grelhado, coberto com camarões pequenos,champignon e alcaparras salteadas na manteiga, acompanha arroz a grega e batata frita"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/salmao.png"
    },
    {
        "nome": "Pratos vencedores do Caraguá A Gosto",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Palmito a caiçara",
                        "preco": "R$ 299,00",
                        "descricao": "Palmito de pupunha selvagem, camarão rosa e tentáculo de polvo grelhado no char broiler, banana da terra salteada a provençal, acompanhada com mandioca frita e salteada na manteiga e arroz branco"
                    },
                    {
                        "nome": "Sororoca a mediterrâneo",
                        "preco": "R$ 289,00",
                        "descricao": "Entrada: mini baguete italiana fatiada. Acompanha escabeche de sardinha fresca. Prato principal: filé de sororoca grelhada com crosta de castanha do Pará, banana da terra grelhada no char broiler, crispy de taioba, risoto de palmito palmeira real premium e ervas finas"
                    },
                    {
                        "nome": "Capitain’s lasagna",
                        "preco": "R$ 298,00",
                        "descricao": "Lasanha de pescada Branca com banana da terra grelhada no char broiler. Acompanha arroz branco com palmito Palmeira real e lula nacional à provençal recheada com carne de Siri"
                    }
                ]
            }
        ],
        "grupo": "Especiais",
        "imagem": "img/peixes.jpg"
    },
    {
        "nome": "Caldeirada",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Frutos do mar (inteira)",
                        "preco": "R$ 498,00",
                        "descricao": "Frutos do mar selecionados, pescada, anéis de lula, mix de camarões, polvo e mexilhões,cozidos no azeite dendê, pequeno toque de leite de coco, acompanha arroz branco e pirão (coentro opcional) serve de 3 a 4 pessoas"
                    },
                    {
                        "nome": "Frutos do Mar (meia)",
                        "preco": "R$ 368,00",
                        "descricao": "Frutos do mar selecionados, pescada, anéis de lula, mix de camarões, polvo e mexilhões,cozidos no azeite dendê, pequeno toque de leite de coco, acompanha arroz branco e pirão (coentro opcional) serve de 2 a 3 pessoas"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/caldeirada.jpg"
    },
    {
        "nome": "Paella",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Paella de Lagosta",
                        "preco": "R$ 590,00",
                        "descricao": "Frutos do mar selecionados, peixe, anéis de lula nacional, mix de camarões, polvo, mexilhões cozidos no caldo de peixe com arroz e lagosta salteada na manteiga"
                    },
                    {
                        "nome": "Frutos do Mar",
                        "preco": "R$ 460,00",
                        "descricao": "Frutos do mar selecionados, cação, anéis de lula nacional, mix de camarões, polvo e mexilhões, cozidos no caldo de peixe com arroz"
                    },
                    {
                        "nome": "Vegana",
                        "preco": "R$ 110,00",
                        "descricao": "Legumes selecionados, palmito, cenoura, vagem, abobrinha e brócolis com arroz"
                    }
                ]
            }
        ],
        "grupo": "peixes",
        "imagem": "img/paella.jpg"
    },
    {
        "nome": "Moqueca",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "Delicioso caldo com azeite de dendê, leite de coco e um mix de pimentões vermelhos e amarelos. Acompanha arroz branco, farofa de dendê e pirão",
                "itens": [
                    {
                        "nome": "Moqueca Vegana",
                        "preco": "R$ 179,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Moqueca File de Cambucu",
                        "preco": "R$ 269,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Moqueca do Marujo",
                        "preco": "R$ 398,00",
                        "descricao": "Cambucu, camarão rosa, lula engrossada com mandioca, arroz de peixe e pirão de banana"
                    },
                    {
                        "nome": "Moqueca especial de lagosta",
                        "preco": "R$ 549,00",
                        "descricao": "Cambucu, lagosta, camarão rosa e mexilhão"
                    },
                    {
                        "nome": "Moqueca Mista",
                        "preco": "R$ 310,00",
                        "descricao": "Cambucu e camarão rosa"
                    },
                    {
                        "nome": "Moqueca Camarão rosa",
                        "preco": "R$ 370,00",
                        "descricao": ""
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/moqueca.jpg"
    },
    {
        "nome": "Lagosta",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Lagosta a provençal",
                        "preco": "R$ 498,00",
                        "descricao": "Lagosta salteada com ervas de provença e açafrão. Acompanha arroz branco e mandioca frita"
                    },
                    {
                        "nome": "Lagosta ao thermidor",
                        "preco": "R$ 499,00",
                        "descricao": "Lagosta envolvida ao creme de batata. Acompanha arroz com palmito Palmeira Real"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/lagosta.jpg"
    },
    {
        "nome": "Robalo",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Robalo ao marujo",
                        "preco": "R$ 334,00",
                        "descricao": "Filé de robalo grelhado coberto com camarões rosa e alcaparras, salteados na manteiga, acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Robalo ao capitão",
                        "preco": "R$ 318,00",
                        "descricao": "Filé de robalo grelhado com banana da terra, risoto de palmito e tomate seco"
                    },
                    {
                        "nome": "Robalo da casa",
                        "preco": "R$ 258,00",
                        "descricao": "Filé de robalo grelhado, acompanha arroz branco e batata canoa"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/robalo.jpg"
    },
    {
        "nome": "Abadejo",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Abadejo a moda da casa",
                        "preco": "R$ 368,00",
                        "descricao": "Abadejo recheado com palmito e catupiry. Acompanha arroz branco e mandioca frita"
                    },
                    {
                        "nome": "Abadejo a Belle Munière",
                        "preco": "R$ 338,00",
                        "descricao": "Abadejo grelhado coberto com camarões pequenos, champignon e alcaparras. Acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Abadejo ao marujo",
                        "preco": "R$ 349,00",
                        "descricao": "Abadejo grelhado com camarões rosa, salteados na manteiga com alcaparras. Acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Abadejo ao capitão",
                        "preco": "R$ 368,00",
                        "descricao": "File de peixe recheado com camarão e catupiry. Acompanha arroz a grega e batata canoa"
                    },
                    {
                        "nome": "Abadejo com palmito",
                        "preco": "R$ 319,00",
                        "descricao": "Grelhado com palmito Palmeira Real na manteiga e arroz branco"
                    },
                    {
                        "nome": "Abadejo com camarão e catupiry",
                        "preco": "R$ 349,00",
                        "descricao": "Grelhado e gratinado com camarão rosa ao molho branco e champignon. Acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Abadejo com legumes",
                        "preco": "R$ 309,00",
                        "descricao": "Grelhado, acompanha arroz branco e legumes salteados no azeite"
                    },
                    {
                        "nome": "Abadejo Grelhado de frutos do mar",
                        "preco": "R$ 364,00",
                        "descricao": "Grelhado com camarão rosa e lula a provençal. Acompanha arroz branco e batatas coradas."
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/abadejo.jpg"
    },
    {
        "nome": "Bacalhau",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "Morhua",
                "itens": [
                    {
                        "nome": "Bacalhau ao marujo",
                        "preco": "R$ 374,00",
                        "descricao": "Grelhado no azeite com brócolis ao alho. Acompanha arroz com ervilhas frescas e batata corada."
                    },
                    {
                        "nome": "Bacalhau à portuguesa",
                        "preco": "R$ 384,00",
                        "descricao": "Cozido com legumes (cenoura, batata, vagem, brócolis e azeitonas preta) e ovos, regado com azeite e alho. Acompanha arroz branco."
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/bacalhau.jpg"
    },
    {
        "nome": "Camarões Rosa",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Camarão cremoso",
                        "preco": "R$ 348,00",
                        "descricao": "Camarão rosa e sete barbas envolto de um arroz cremoso com presunto e ervilha a base de leite de coco coberto de batata palha"
                    },
                    {
                        "nome": "A parmegiana",
                        "preco": "R$ 319,00",
                        "descricao": "Camarões rosa à milanesa, gratinados com mozzarella, molho sugo e parmesão, acompanha arroz branco e batata frita"
                    },
                    {
                        "nome": "A grega",
                        "preco": "R$ 329,00",
                        "descricao": "Camarões rosa à milanesa, acompanha arroz a grega, queijo mozzarella empanado e batata frita"
                    },
                    {
                        "nome": "Strogonoff de camarão",
                        "preco": "R$ 348,00",
                        "descricao": "Camarão rosa ao molho rosé, acompanha arroz branco e batata frita"
                    },
                    {
                        "nome": "Ao marujo",
                        "preco": "R$ 356,00",
                        "descricao": "Camarões rosa recheados com catupiry, acompanha arroz e batata sauté"
                    },
                    {
                        "nome": "Ao capitão",
                        "preco": "R$ 329,00",
                        "descricao": "Camarões grandes refogados na manteiga e cozidos na água de coco e vinho branco, acompanha arroz envolvido no molho branco e camarões pequenos, gratinados com catupiry e parmesão"
                    },
                    {
                        "nome": "Bobó de camarão",
                        "preco": "R$ 348,00",
                        "descricao": "Camarões rosa e pequenos ao creme de mandioca, leite de coco e dendê, acompanha arroz branco"
                    },
                    {
                        "nome": "Chiclete de camarão",
                        "preco": "R$ 361,00",
                        "descricao": "Camarões rosa no molho especial de queijo com leite de coco gratinado. Acompanha arroz branco e batata canoa"
                    },
                    {
                        "nome": "Moranga",
                        "preco": "R$ 390,00",
                        "descricao": "Camarões rosa ao creme de abóbora, champignon e catupiry gratinado, acompanha arroz branco e batata frita"
                    },
                    {
                        "nome": "Misto",
                        "preco": "R$ 442,00",
                        "descricao": "Camarões à paulista recheados com catupiry e a provençal,acompanha arroz a grega e batata corada serve até 3 pessoas"
                    }
                ]
            }
        ],
        "grupo": "Peixes",
        "imagem": "img/camarao.jpg"
    },
    {
        "nome": "Guarnições",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Batata corada",
                        "preco": "R$ 55,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Farofa de banana",
                        "preco": "R$ 25,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Arroz com brócolis",
                        "preco": "R$ 34,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Arroz branco",
                        "preco": "R$ 29,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Arroz a grega",
                        "preco": "R$ 38,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Feijão",
                        "preco": "R$ 19,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Pirão",
                        "preco": "R$ 25,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Legumes",
                        "preco": "R$ 42,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Palmito na manteiga",
                        "preco": "R$ 74,00",
                        "descricao": "Palmito Palmeira Real"
                    },
                    {
                        "nome": "Farofa",
                        "preco": "R$ 15,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Purê de batatas",
                        "preco": "R$ 42,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Molho de camarão",
                        "preco": "R$ 68,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Vinagrete",
                        "preco": "R$ 15,00",
                        "descricao": ""
                    }
                ]
            }
        ],
        "grupo": "Guarnições",
        "imagem": "img/guarnicao.jpg"
    },
    {
        "nome": "Pratos Kids",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Espaguetinho com filé mignon",
                        "preco": "R$ 59,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Filezinho de peixe",
                        "preco": "R$ 48,00",
                        "descricao": "Filé de pescada branca. Acompanha arroz branco, feijão e fritas"
                    },
                    {
                        "nome": "Espaguetinho ao sugo",
                        "preco": "R$ 37,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Nuggets",
                        "preco": "R$ 39,90",
                        "descricao": "6 unidades, acompanha arroz branco, feijão e fritas"
                    },
                    {
                        "nome": "Filezinho de frango",
                        "preco": "R$ 38,90",
                        "descricao": "Filé grelhado, acompanha arroz branco, feijão e fritas"
                    },
                    {
                        "nome": "Filezinho mignon",
                        "preco": "R$ 59,00",
                        "descricao": "Filé grelhado, acompanha arroz branco, feijão e fritas"
                    }
                ]
            }
        ],
        "grupo": "Kids",
        "imagem": "img/kids.jpg"
    },
    {
        "nome": "Lanches",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "X- Chicken",
                        "preco": "R$ 49,90",
                        "descricao": "Filé de frango grelhado (200g), queijo, alface, tomate, cebola e fritas"
                    },
                    {
                        "nome": "X-Siri",
                        "preco": "R$ 79,00",
                        "descricao": "Hamburguer de carne de siri empanado na panko (200g), queijo, molho tártaro, alface, tomate, cebola roxa e fritas"
                    },
                    {
                        "nome": "X-burguer",
                        "preco": "R$ 59,00",
                        "descricao": "Hambúrguer de carne black angus (200 gr), queijo prato e fritas"
                    },
                    {
                        "nome": "X-salada",
                        "preco": "R$ 63,90",
                        "descricao": "Hambúrguer de carne black angus (200 gr), queijo prato,alface, tomate, cebola e fritas"
                    },
                    {
                        "nome": "X-bacon",
                        "preco": "R$ 74,90",
                        "descricao": "Hambúrguer de carne black angus (200 gr), queijo prato,bacon, alface, tomate, cebola e fritas"
                    },
                    {
                        "nome": "X-marujo",
                        "preco": "R$ 98,00",
                        "descricao": "Hambúrguer de carne black angus (200 gr), queijo prato,bacon, ovo, catupiry empanado, alface, tomate, cebola e fritas"
                    }
                ]
            }
        ],
        "grupo": "Lanches",
        "imagem": "img/lanches.jpg"
    },
    {
        "nome": "Sobremesas",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "",
                "itens": [
                    {
                        "nome": "Pudim de leite condensado",
                        "preco": "R$ 22,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Manjar de coco com calda de frutas vermelhas",
                        "preco": "R$ 26,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Sorvete taça 1 bola",
                        "preco": "R$ 21,00",
                        "descricao": "Consulte sabores"
                    },
                    {
                        "nome": "Sorvete taça 2 bolas",
                        "preco": "R$ 29,90",
                        "descricao": "Consulte sabores"
                    },
                    {
                        "nome": "Petit gateau",
                        "preco": "R$ 39,00",
                        "descricao": ""
                    },
                    {
                        "nome": "Brownie",
                        "preco": "R$ 34,90",
                        "descricao": ""
                    },
                    {
                        "nome": "Creme de papaya com licor de Cassis",
                        "preco": "R$ 49,00",
                        "descricao": ""
                    }
                ]
            }
        ],
        "grupo": "Sobremesas",
        "imagem": "img/sobremesas.jpg"
    },
    {
        "nome": "Pizzas",
        "nota": "",
        "subcategorias": [
            {
                "nome": "",
                "nota": "Todas as nossas pizzas são de fermentação natural, onde as pizzas salgadas acompanham orégano, azeitona azapa chilena e tomate cereja orgânico. Todas são de massa fina, sendo opcional média ou grossa. Borda recheada: Catupiry/Cheddar - R$ 25,00, chocolate - R$ 20,00",
                "itens": []
            },
            {
                "nome": "Tradicionais",
                "nota": "",
                "itens": [
                    {
                        "nome": "Napole",
                        "preco": "Broto R$ 60,90 / Inteira R$ 86,90",
                        "descricao": "Molho de tomate fresco, mozzarela premium, parmesão e tomate"
                    },
                    {
                        "nome": "Calabresa com mozzarela",
                        "preco": "Broto R$ 62,90 / Inteira R$ 89,90",
                        "descricao": "Molho de tomate, fatias de calabresa selecionadas, mozzarela premium e cebola"
                    },
                    {
                        "nome": "Alho",
                        "preco": "Broto R$ 48,90 / Inteira R$ 69,90",
                        "descricao": "Molho de tomate, mozzarella e alho frito"
                    },
                    {
                        "nome": "Mineira",
                        "preco": "Broto R$ 54,90 / Inteira R$ 78,00",
                        "descricao": "Molho de tomate, mozzarella, abobrinha e parmesão"
                    },
                    {
                        "nome": "Milho",
                        "preco": "Broto R$ 48,90 / Inteira R$ 69,90",
                        "descricao": "Sob massa fina de fermentação natural, molho de tomate fresco, orégano, azeitona azapa chilena, tomate cereja orgânico, mozzarela premium e milho"
                    },
                    {
                        "nome": "Bacon",
                        "preco": "Broto R$ 58,90 / Inteira R$ 84,00",
                        "descricao": "molho de tomate, mozzarella e bacon"
                    },
                    {
                        "nome": "Croata",
                        "preco": "Broto R$ 65,90 / Inteira R$ 94,00",
                        "descricao": "Molho de tomate, mozzarella, fatias de calabresa selecionadas, frango desfiado, lombo canadense, bacon, cebola e creme de leite"
                    },
                    {
                        "nome": "Calabresa",
                        "preco": "Broto R$ 59,90 / Inteira R$ 84,90",
                        "descricao": "Molho de tomate, fatias de calabresa selecionadas e cebola"
                    },
                    {
                        "nome": "Mozzarella",
                        "preco": "Broto R$ 53,90 / Inteira R$ 76,90",
                        "descricao": "Molho de tomate e mozzarella"
                    },
                    {
                        "nome": "Toscana",
                        "preco": "Broto R$ 61,90 / Inteira R$ 87,90",
                        "descricao": "Molho de tomate, mozzarella, calabresa, cebola e tomate seco"
                    },
                    {
                        "nome": "Margherita",
                        "preco": "Broto R$ 60,90 / Inteira R$ 85,90",
                        "descricao": "Molho de tomate, mozzarella, fatias de tomate, parmesão e manjericão fresco"
                    },
                    {
                        "nome": "Baiana",
                        "preco": "Broto R$ 65,90 / Inteira R$ 92,90",
                        "descricao": "Molho de tomate, calabresa, ovo, cebola, mozzarella e um toque depimenta"
                    },
                    {
                        "nome": "Atum",
                        "preco": "Broto R$ 67,90 / Inteira R$ 96,00",
                        "descricao": "Molho de tomate, atum ralado e cebola"
                    },
                    {
                        "nome": "Escarola",
                        "preco": "Broto R$ 66,90 / Inteira R$ 94,90",
                        "descricao": "Molho de tomate, escarola crocante, cubos de bacon crocante emozzarella"
                    },
                    {
                        "nome": "Frango com Catupiry",
                        "preco": "Broto R$ 74,90 / Inteira R$ 106,00",
                        "descricao": "Molho de tomate, peito de frango desfiado e catupiry"
                    },
                    {
                        "nome": "Palmito",
                        "preco": "Broto R$ 68,90 / Inteira R$ 98,00",
                        "descricao": "Molho de tomate, palmito Palmeira Real e mozzarella"
                    },
                    {
                        "nome": "Champignon Especial",
                        "preco": "Broto R$ 83,00 / Inteira R$ 107,00",
                        "descricao": "Molho de tomate, champignon, catupiry, bacon e salsa fresca"
                    },
                    {
                        "nome": "Aliche",
                        "preco": "Broto R$ 72,90 / Inteira R$ 104,00",
                        "descricao": "Molho de tomate, mozzarella, tomate e aliche"
                    },
                    {
                        "nome": "Bauru",
                        "preco": "Broto R$ 64,90 / Inteira R$ 92,00",
                        "descricao": "Molho de tomate, mozzarella, presunto e tomate"
                    },
                    {
                        "nome": "Brócolis",
                        "preco": "Broto R$ 68,90 / Inteira R$ 98,00",
                        "descricao": "Molho de tomate, brócolis temperado com alho e azeite, baconcrocante e mozzarella"
                    },
                    {
                        "nome": "Pepperoni",
                        "preco": "Broto R$ 65,90 / Inteira R$ 92,90",
                        "descricao": "Molho de tomate, mozzarella e pepperoni"
                    },
                    {
                        "nome": "Portuguesa",
                        "preco": "Broto R$ 77,00 / Inteira R$ 110,00",
                        "descricao": "Molho de tomate, presunto, palmito, ovo, cebola, ervilha e mozzarella"
                    },
                    {
                        "nome": "Rúcula",
                        "preco": "Broto R$ 66,90 / Inteira R$ 94,90",
                        "descricao": "Molho de tomate, mozzarella de búfala, tomate seco e folhas derúcula"
                    },
                    {
                        "nome": "Italianinha",
                        "preco": "Broto R$ 61,90 / Inteira R$ 86,90",
                        "descricao": "Molho de tomate, mozzarella cravejada com lâminas de alho emanjericão fresco"
                    },
                    {
                        "nome": "Quatro queijos",
                        "preco": "Broto R$ 67,90 / Inteira R$ 96,00",
                        "descricao": "Molho de tomate, queijo provolone, catupiry, mozzarella e parmesão ralado"
                    }
                ]
            },
            {
                "nome": "Pizzas Especiais",
                "nota": "",
                "itens": [
                    {
                        "nome": "Rucula especial",
                        "preco": "Broto R$ 92,90 / Inteira R$ 129,90",
                        "descricao": "Molho de tomate, mozzarela de búfala, presunto parma, rúcula, fios de mel."
                    },
                    {
                        "nome": "Búzios e vitória",
                        "preco": "Broto R$ 104,90 / Inteira R$ 149,90",
                        "descricao": "Pizza com fermentação natural, quatro pedaços com peito de peru, mozzarela de búfala, manjericão e geleia de damasco. Quatro pedaços de peito de peru, mozzarela, hortelã, geleia de pêssego, pêssego em calda e cream cheese"
                    },
                    {
                        "nome": "Sereníssima",
                        "preco": "R$ 169,90",
                        "descricao": "Pizza com massa de fermentação natural, molho com tomates frescos, mussarela de búfala, presunto de parma, azeitona azapa grande chilena e alcachofra complementado com burrata artesanal recheada com cream cheese, finalizado com pesto genovese"
                    },
                    {
                        "nome": "Champignon especial",
                        "preco": "Broto R$ 91,90 / Inteira R$ 128,90",
                        "descricao": "Molho de tomate, champignon, catupiry, bacon, salsa fresca."
                    },
                    {
                        "nome": "Sete Mares",
                        "preco": "Broto R$ 139,90 / Inteira R$ 199,90",
                        "descricao": "Molho de tomate, polvo, lula, camarão, marisco, pimentão e cream cheese"
                    },
                    {
                        "nome": "Cocanha",
                        "preco": "Broto R$ 127,90 / Inteira R$ 181,90",
                        "descricao": "Molho de tomate, catupiry, cebola, mozzarella, camarão e manjericão"
                    },
                    {
                        "nome": "Atum Especial",
                        "preco": "Broto R$ 87,90 / Inteira R$ 124,90",
                        "descricao": "Molho de tomate, atum temperado em pedaço, cebola"
                    },
                    {
                        "nome": "Japonesa",
                        "preco": "Broto R$ 115,00 / Inteira R$ 169,90",
                        "descricao": "Salmão fresco sobre o molho de tomate, mozzarella, geleia de damasco, um toque de tarê, com azeitona preta - borda recheada com cream cheese e salmão desfiado"
                    },
                    {
                        "nome": "Camarão do Marujo",
                        "preco": "Broto R$ 130,00 / Inteira R$ 190,00",
                        "descricao": "Molho de tomate, camarão flambado ao vinho branco, catupiry e parmessão"
                    },
                    {
                        "nome": "Picanha Especial",
                        "preco": "Broto R$ 118,00 / Inteira R$ 180,00",
                        "descricao": "Molho de tomate, mozzarella e picanha argentina assada na brasa em fatias"
                    },
                    {
                        "nome": "Gratinada",
                        "preco": "Broto R$ 99,90 / Inteira R$ 141,90",
                        "descricao": "Molho de tomate, queijos (catupiry, mozzarella, parmesão, provolone e gorgonzola)"
                    },
                    {
                        "nome": "Levíssima",
                        "preco": "Broto R$ 93,90 / Inteira R$ 131,90",
                        "descricao": "Molho de tomate, mozzarella de búfala, tomate seco e manjericão fresco"
                    },
                    {
                        "nome": "Lombo especial",
                        "preco": "Broto R$ 104,90 / Inteira R$ 148,90",
                        "descricao": "Molho de tomate, cream cheese, cebola, lombo canadense condimentado, parmesão e manjericão"
                    },
                    {
                        "nome": "Palmanello",
                        "preco": "Broto R$ 102,90 / Inteira R$ 147,90",
                        "descricao": "Molho de tomate, palmito palmeira real, champignon, bacon e catupiry"
                    },
                    {
                        "nome": "Massaguaçu",
                        "preco": "Broto R$ 107,90 / Inteira R$ 152,90",
                        "descricao": "Molho de tomate, peito de peru, champignon, catupiry, cebola e mozzarella"
                    },
                    {
                        "nome": "Do cheff",
                        "preco": "Broto R$ 104,90 / Inteira R$ 149,90",
                        "descricao": "Molho de tomate, catupiry, alho frito, mozzarella, calabresa, tomate e bacon"
                    },
                    {
                        "nome": "Frango Especial",
                        "preco": "Broto R$ 111,90 / Inteira R$ 159,90",
                        "descricao": "Molho de tomate, frango desfiado, milho, champignon, creme de leite, catupiry e batata palha"
                    }
                ]
            },
            {
                "nome": "Pizzas Doces",
                "nota": "",
                "itens": [
                    {
                        "nome": "Brigadeiro de amendoim",
                        "preco": "Broto R$ 75,00 / Inteira R$ 110,00",
                        "descricao": "Sob massa de fermentação natural, brigadeiro de amendoim e canela"
                    },
                    {
                        "nome": "Romeu e Julieta",
                        "preco": "Broto R$ 65,90 / Inteira R$ 94,00",
                        "descricao": "Mozzarela premium e goiabada cascão"
                    },
                    {
                        "nome": "Banana",
                        "preco": "Broto R$ 67,90 / Inteira R$ 96,00",
                        "descricao": "Banana ao rum com canela e leite condensado"
                    },
                    {
                        "nome": "Chocolate",
                        "preco": "Broto R$ 72,90 / Inteira R$ 104,00",
                        "descricao": "Granulado ou coco ralado"
                    },
                    {
                        "nome": "Beijinho",
                        "preco": "Broto R$ 68,90 / Inteira R$ 98,00",
                        "descricao": "Mozzarella, coco ralado e leite condensado"
                    }
                ]
            }
        ],
        "grupo": "Pizzas",
        "imagem": "img/pizzas.jpg"
    }
];

function criarPrato(item) {
    const descricao = item.descricao
        ? `<p>${item.descricao}</p>`
        : "";

    const preco = item.preco || "Consulte";

    const nomeCodificado = encodeURIComponent(item.nome);
    const precoCodificado = encodeURIComponent(preco);

    return `
        <article class="prato">

            <div class="nome-preco">
                <h5>${item.nome}</h5>
                <span>${preco}</span>
            </div>

            ${descricao}

            <button
                class="btn-adicionar"
                data-nome="${nomeCodificado}"
                data-preco="${precoCodificado}"
                onclick="adicionarAoCarrinho(
                    decodeURIComponent(this.dataset.nome),
                    decodeURIComponent(this.dataset.preco)
                )"
            >
                Adicionar ao pedido
            </button>

        </article>
    `;
}

function criarSubcategoria(subcategoria) {
    const titulo = subcategoria.nome
        ? `<div class="subcategoria"><h4>${subcategoria.nome}</h4></div>`
        : "";

    const nota = subcategoria.nota
        ? `<p class="nota-categoria">${subcategoria.nota}</p>`
        : "";

    const pratos = subcategoria.itens
        .map(criarPrato)
        .join("");

    return `
        ${titulo}
        ${nota}
        <div class="lista-pratos">
            ${pratos}
        </div>
    `;
}

function criarCategoria(categoria) {
    const conteudo = categoria.subcategorias
        .map(criarSubcategoria)
        .join("");

    return `
        <section class="categoria">
            <div
                class="banner-categoria"
                style="background-image:
                    linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.35)),
                    url('${categoria.imagem}'),
                    linear-gradient(135deg, #191919, #050505);"
            >
                <div class="banner-overlay">
                    <span>${categoria.grupo.toUpperCase()}</span>
                    <h3>${categoria.nome}</h3>
                </div>
            </div>

            ${conteudo}
        </section>
    `;
}

function filtrar(grupo = "Todos", botao = null) {
    const menu = document.getElementById("menu");

    const categoriasFiltradas = grupo === "Todos"
        ? cardapio
        : cardapio.filter(categoria => categoria.grupo === grupo);

    menu.innerHTML = categoriasFiltradas
        .map(criarCategoria)
        .join("");

    document.querySelectorAll(".filtros button")
        .forEach(btn => btn.classList.remove("ativo"));

    if (botao) {
        botao.classList.add("ativo");
    } else {
        const primeiro = document.querySelector(".filtros button");
        if (primeiro) primeiro.classList.add("ativo");
    }
}

function preencherAnos() {
    const selectAno = document.getElementById("ano");
    if (!selectAno) return;

    const anoAtual = new Date().getFullYear();

    for (let ano = anoAtual; ano >= 1927; ano--) {
        const option = document.createElement("option");
        option.value = ano;
        option.textContent = ano;
        selectAno.appendChild(option);
    }
}

function adicionarAoCarrinho(nome, preco) {

    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
    abrirCarrinho();
}
function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("aberto");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("aberto");
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const contador = document.getElementById("contador-carrinho");

    contador.textContent = carrinho.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    lista.innerHTML = carrinho.map((item, index) => `
        <div class="item-carrinho">

            <strong>${item.nome}</strong>

            <span>${item.preco}</span>

            <div>
                <button onclick="diminuirQuantidade(${index})">-</button>

                ${item.quantidade}

                <button onclick="aumentarQuantidade(${index})">+</button>

                <button onclick="removerItem(${index})">
                    Remover
                </button>
            </div>

        </div>
    `).join("");
}

function aumentarQuantidade(index) {
    carrinho[index].quantidade++;
    atualizarCarrinho();
}

function diminuirQuantidade(index) {
    carrinho[index].quantidade--;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1);
    }

    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarPedido() {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer este pedido:\n\n";

    carrinho.forEach(item => {
        mensagem += `${item.quantidade}x ${item.nome} - ${item.preco}\n`;
    });

    const link =
        `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}

function criarCarrinho() {

    document.body.insertAdjacentHTML("beforeend", `

        <button class="botao-carrinho" onclick="abrirCarrinho()">
            🛒 Pedido
            <span id="contador-carrinho">0</span>
        </button>

        <div id="carrinho" class="carrinho">

            <button class="fechar" onclick="fecharCarrinho()">
                ×
            </button>

            <h2>Seu pedido</h2>

            <div id="lista-carrinho"></div>

            <button
                class="finalizar"
                onclick="finalizarPedido()"
            >
                Pedir pelo WhatsApp
            </button>

        </div>

    `);

    atualizarCarrinho();
}
document.addEventListener("DOMContentLoaded", () => {

    filtrar("Todos");
    preencherAnos();
    criarCarrinho();

    // LINK DO WHATSAPP
    const linkWhatsApp = document.querySelector("[data-whatsapp]");

    if (linkWhatsApp) {
        linkWhatsApp.href = `https://wa.me/${WHATSAPP_NUMERO}`;
        linkWhatsApp.target = "_blank";
    }

    // LINK DO INSTAGRAM
    const linkInstagram = document.querySelector("[data-instagram]");

    if (linkInstagram) {
        linkInstagram.href = INSTAGRAM_URL;
        linkInstagram.target = "_blank";
    }

});
