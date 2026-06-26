import AttributesPanel from "../components/Attributes/AttributesPanel";
import CharacterInfoPanel from "../components/Character/CharacterInfo";
import BarsPanel from "../components/UI/Bars/BarsPanel";
import { useCharacter } from "../context/CharacterContext";
import TabsPanel from "../components/Tabs/TabsPanel";
import CondicoesPanel from "../components/UI/TextAreas/CondicoesPanel";
import playerImage from "../assets/RaabePortrait.png";
import AspectsPanel from "../components/Aspects/AspectsPanel"
import SpecialityPanel from "../components/Especiality/SpecialityPanel";

export default function CharacterSheet() {

    const { resetCharacter } = useCharacter();

    return (
        <div className="wrap">    
                
                <section className="panel">
                    <div className="portrait" id="portrait" style={{ backgroundImage: `url(${playerImage})`}}></div>
                    <div className="vitals">
                        <div className="vital">
                            <BarsPanel/>
                        </div>
                    </div>

                    <div className="effects">
                        <CondicoesPanel/>
                    </div>
                </section>

                <main className="center" id="centerPane">
                    <class className="top-actions">
                        <button className="clearBtn" onClick={resetCharacter}>
                            Limpar Ficha
                        </button>
                    </class>
                    <div className="title">E.P.</div>

                    <div className="personal">
                        <CharacterInfoPanel/>
                        <div></div>
                    </div>

                    <h2>Atributos (0 a 6)</h2>
                    <div className="attrs" id="attrs">
                        <AttributesPanel/>
                    </div>

                    <h2>Aspectos</h2>

                    <div className="aspectsGrid">
                    <AspectsPanel/>
                    </div>

                    <h2> Especialidades </h2>

                    <div className="personal">
                        <SpecialityPanel/>
                    </div>

                </main>

                <aside className="direita">
                    <TabsPanel/>
                </aside>
        </div>
    );
}
