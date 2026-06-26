import { useState } from "react";

import HabilidadesPanel from "../UI/TextAreas/HabilidadesPanel";
import InventoryPanel from "../UI/TextAreas/InventoryPanel";
import AnotacoesPanel from "../UI/TextAreas/AnotacoesPanel";

export default function TabsPanel() {

    const [activeTab, setActiveTab] =
        useState("personagem");

    return (
        <div className="tabs">
            <div className="tabs-header">
                <button
                    className={
                        activeTab === "inventario"
                            ? "tab active"
                            : "tab"
                    }
                    onClick={() =>
                        setActiveTab("inventario")
                    }
                >
                    Inventário
                </button>

                <button
                    className={
                        activeTab === "habilidades"
                            ? "tab active"
                            : "tab"
                    }
                    onClick={() =>
                        setActiveTab("habilidades")
                    }
                >
                    Habilidades
                </button>

                <button
                    className={
                        activeTab === "anotacoes"
                            ? "tab active"
                            : "tab"
                    }
                    onClick={() =>
                        setActiveTab("anotacoes")
                    }
                >
                    Anotações
                </button>
            </div>
            
            <div className="tab-content">
                {activeTab === "inventario" &&
                    <InventoryPanel />
                }

                {activeTab === "habilidades" &&
                    <HabilidadesPanel />
                }

                {activeTab === "anotacoes" &&
                    <AnotacoesPanel/>
                }
            </div>
        </div>
    );
}