export default function AspectGroup({
    titulo,
    grupo,
    atributosDisponiveis,
    atributosPersonagem,
    onUpdate
}) {

    const ordemAspectos = {
        "Execução": [
            "combater",
            "precisao",
            "defender",
            "manobrar",
            "movimentar",
            "furtividade"
        ],

        "Razão": [
            "investigar",
            "conhecimento",
            "convencer",
            "aprender",
            "mentir",
            "criar"
        ],

        "Instinto": [
            "perceber",
            "resistir",
            "intuir",
            "esquivar"
        ]
    };

    // Valor do atributo selecionado
    const bonusAtributo =
        atributosPersonagem[
            grupo.atributoSelecionado
        ] || 0;

    // Total disponível
    const totalPontos =
        grupo.pontosBase + bonusAtributo;

    // Pontos já gastos
    const pontosGastos =
        Object.values(grupo.valores)
            .reduce(
                (total, valor) =>
                    total + valor,
                0
            );

    // Pontos restantes
    const pontosRestantes =
        totalPontos - pontosGastos;

    // Se existe algum ponto distribuído
    const bloqueado =
        pontosGastos > 0;

    return (
        <section>
            <h3>
                {titulo} (
                    <input
                        type="number"
                        min="0"

                        value={
                            bloqueado
                                ? pontosRestantes
                                : totalPontos
                        }

                        disabled={bloqueado}

                        onChange={(e) =>
                            onUpdate(
                                "pontosBase",
                                Number(e.target.value) - bonusAtributo
                            )
                        }

                        style={{ width: "50px" }}
                    />)
            </h3>
            
            {/* Seleção do atributo */}
            <div>
                <p> Afetado por:
                    {atributosDisponiveis.map((atributo) => (
                        <button
                            key={atributo}
                            className={
                                grupo.atributoSelecionado === atributo
                                    ? "selected"
                                    : ""
                            }
                            onClick={() =>
                                onUpdate(
                                    "atributoSelecionado",
                                    atributo
                                )
                            }
                        >
                            {atributo}
                        </button>
                    ))}
                </p>

                <div style={{ margin: "6px 0" }}>
                    <button
                        onClick={() => onUpdate("reset")}
                    >
                        ↺
                    </button>
                </div>
            </div>

            {/* Aspectos */}
            {ordemAspectos[titulo].map((nome) => (
                <div key={nome} className="aspect-row">

                    <label>
                        {nome}
                    </label>

                    <input
                        className="aspect-input"
                        type="number"
                        min="0"
                        value={grupo.valores[nome]}
                        onChange={(e) =>
                            onUpdate(
                                nome,
                                Number(e.target.value)
                            )
                        }
                    />
                </div>
            ))}
        </section>
    );
}