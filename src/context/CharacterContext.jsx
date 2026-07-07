import { useEffect, createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";

const CharacterContext = createContext();

const initialCharacter = {
    // Informações
    id:"",
    nome: "",
    idade: "",
    cordosolhos: "",
    nivel: "",
    ocupacao: "",
    origem: "",

    // Atributos
    POT: 0,
    AST: 0,
    MEN: 0,
    ESS: 0,
    VIT: 0,

    // Barras
    vida: 10,
    vidaMax: 10,
    tensaoMax: 10,
    psMax: 50,

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
        { nome: "", nivel: 2 },
        { nome: "", nivel: 2 },
        { nome: "", nivel: 2 },
        { nome: "", nivel: 2 }
    ]
};

export function CharacterProvider({ children }) {

    const { id } = useParams();

    const [character, setCharacter] =
        useState(() => {

            const saved =
                localStorage.getItem(`ficha-${id}`);

            if (saved) {
                const parsed = JSON.parse(saved);

                return {
                    ...initialCharacter,
                    ...parsed,
                    id: id || parsed.id || ""
                };
            }
            return {
                ...initialCharacter,
                id: id || ""
            };
        });

    useLocalStorage(`ficha-${character.id}`, character);

    useEffect(() => {
        console.log("Tentando salvar:", character.id);

        if (!character.id) {
            console.log("ID inválido:", character.id);
            return;
        }

        const timeout = setTimeout(async () => {

            try {
                await setDoc(
                    doc(db, "characters", character.id),
                    character
                );
                console.log("Salvo:", character.id);
            } catch (error) {
                console.error(
                    "Erro ao salvar no Firebase:",
                    error
                );
            }
        }, 500);
        return () => clearTimeout(timeout);
    }, [character]);

    useEffect(() => {
        if (!character.id) return;
        const unsubscribe = onSnapshot(
            doc(db, "characters", character.id),
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setCharacter(current => {
                        // evita renderizações infinitas
                        if (
                            JSON.stringify(current) ===
                            JSON.stringify(data)
                        ) {
                            return current;
                        }
                        return data;
                    });
                }
            }
        );
        return unsubscribe;
    }, [character.id]);

    function resetCharacter() {
        const confirmed = window.confirm(
            "Tem certeza que deseja apagar a ficha?"
        );

        if (!confirmed) return;

        localStorage.removeItem(`ficha-${character.id}`);

        setCharacter({
            ...initialCharacter,
            id: character.id
        });
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