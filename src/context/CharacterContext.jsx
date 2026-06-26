import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CharacterContext = createContext();

const initialCharacter = {
    // Informações
    nome: "",
    idade: "",
    cordosolhos: "",
    nivel: "",

    // Atributos
    potencia: 0,
    astucia: 0,
    mente: 0,
    essencia: 0,
    vitalidade: 0,

    // Barras
    pv: 10,
    ps: 50,
    tensao: 0,

    // Inventário
    inventario: [],

    // Aspectos
    aspectos: {
        execucao: {
            pontosBase: 0,
            atributoSelecionado: "",

            valores: {
                combater: 0,
                precisao: 0,
                defender: 0,
                manobrar: 0,
                movimentar: 0,
                furtividade: 0
            }
        },

        razao: {
            pontosBase: 0,
            atributoSelecionado: "",

            valores: {
                investigar: 0,
                conhecimento: 0,
                aprender: 0,
                convencer: 0,
                mentir: 0,
                criar: 0
            }
        },

        instinto: {
            pontosBase: 0,
            atributoSelecionado: "",

            valores: {
                perceber: 0,
                resistir: 0,
                intuir: 0,
                esquivar: 0
            }
        }
    },

    // Condições
    condicoes: [],

    //Habilidades
    habilidades: [],

    //Anotações
    anotacoes: [],

    //Especialidades
    especialidades: [
        { nome: "", bonus: false },
        { nome: "", bonus: false },
        { nome: "", bonus: false },
        { nome: "", bonus: false }
    ]
};

export function CharacterProvider({ children }) {

    const [character, setCharacter] =
        useState(() => {

            const saved =
                localStorage.getItem("ficha");

            return saved
                ? JSON.parse(saved)
                : initialCharacter;

        });

    useLocalStorage("ficha", character);

    function resetCharacter() 
    {
        const confirmed = window.confirm(
            "Tem certeza que deseja apagar a ficha?"
        );

        if (!confirmed) return;

        localStorage.removeItem("ficha");

        setCharacter(initialCharacter);
    }

    return (

        <CharacterContext.Provider
            value={{
                character,
                setCharacter,
                resetCharacter
            }}
        >

            {children}

        </CharacterContext.Provider>

    );
}

export function useCharacter() {
    return useContext(CharacterContext);
}