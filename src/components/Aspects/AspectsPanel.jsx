import { useCharacter } from "../../context/CharacterContext";
import AspectGroup from "./AspectGroup";

export default function AspectsPanel() {

    const { character, setCharacter } = useCharacter();

    function updateGroup(grupoNome, campo, valor) {

        const grupoAtual =
            character.aspectos[grupoNome];

        const novoGrupo = {
            ...grupoAtual,

            valores: {
                ...grupoAtual.valores
            }
        };

        // Atualização dos pontos base
        if (campo === "pontosBase") {

            novoGrupo.pontosBase = valor;

        }

        // Troca do atributo selecionado
        else if (campo === "atributoSelecionado") {

            novoGrupo.atributoSelecionado = valor;

            const novoTotal =
                novoGrupo.pontosBase +
                (character[valor] || 0);

            const pontosGastos =
                Object.values(novoGrupo.valores)
                    .reduce(
                        (total, valor) =>
                            total + valor,
                        0
                    );

            // Se não houver pontos suficientes,
            // zera toda a distribuição
            if (pontosGastos > novoTotal) {
                Object.keys(
                    novoGrupo.valores
                ).forEach(aspecto => {

                    novoGrupo.valores[aspecto] = 0;

                });
            }

        }

        // Atualização de um aspecto específico
        else {

            const totalDisponivel =
                novoGrupo.pontosBase +
                (character[
                    novoGrupo.atributoSelecionado
                ] || 0);

            const pontosSemAtual =
                Object.entries(
                    novoGrupo.valores
                )
                .filter(([nome]) => nome !== campo)
                .reduce(
                    (total, [, valorAtual]) =>
                        total + valorAtual,
                    0
                );

            // Não permite ultrapassar o limite
            if (
                pontosSemAtual + valor >
                totalDisponivel
            ) {
                return;
            }

            novoGrupo.valores[campo] = valor;

        }

        setCharacter({
            ...character,

            aspectos: {
                ...character.aspectos,

                [grupoNome]: novoGrupo
            }
        });
    }

    return (
        <>
            <AspectGroup
                titulo="Execução"

                grupo={
                    character.aspectos.execucao
                }

                atributosDisponiveis={[
                    "POT",
                    "AST"
                ]}

                atributosPersonagem={character}

                onUpdate={(campo, valor) =>
                    updateGroup(
                        "execucao",
                        campo,
                        valor
                    )
                }
            />

            <AspectGroup
                titulo="Razão"

                grupo={
                    character.aspectos.razao
                }

                atributosDisponiveis={[
                    "MEN"
                ]}

                atributosPersonagem={character}

                onUpdate={(campo, valor) =>
                    updateGroup(
                        "razao",
                        campo,
                        valor
                    )
                }
            />

            <AspectGroup
                titulo="Instinto"

                grupo={
                    character.aspectos.instinto
                }

                atributosDisponiveis={[
                    "ESS",
                    "VIT"
                ]}

                atributosPersonagem={character}

                onUpdate={(campo, valor) =>
                    updateGroup(
                        "instinto",
                        campo,
                        valor
                    )
                }
            />
        </>
    );
}