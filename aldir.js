feather.replace();

document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('current-date').textContent = 'Rondônia, ' + formattedDate;

    var links = document.querySelectorAll('.sidebar a');
    var mainContent = document.getElementById('main-content');

    function loadContent(contentId) {
        var content = {
            sobre: `
                <h1>Política Nacional Aldir Blanc</h1>
                <p>A Política Nacional Aldir Blanc (PNAB), oficialmente conhecida como Lei nº 14.017/2020, foi criada
                pelo governo brasileiro em resposta à crise causada pela pandemia de COVID-19, que impactou fortemente o setor
                cultural no Brasil. Nomeada em homenagem ao compositor Aldir Blanc, que faleceu devido ao coronavírus, a lei destina
                recursos financeiros para apoiar artistas, técnicos, espaços culturais, e pequenas empresas do setor cultural, que
                foram gravemente afetados pelas medidas de distanciamento social e pelo fechamento de estabelecimentos culturais. 
                O objetivo principal da Lei Aldir Blanc é assegurar a manutenção da produção cultural e a subsistência de trabalhadores
                da cultura em todo o território nacional, promovendo o acesso da população à cultura durante um período de adversidades.
                </p>
                <p>Os recursos da Lei Aldir Blanc foram distribuídos a estados e municípios brasileiros, que ficaram responsáveis por
                implementá-los de forma eficiente e acessível. A lei prevê diferentes formas de apoio, incluindo subsídios mensais para
                trabalhadores da cultura, auxílio para manutenção de espaços artísticos e culturais, e editais, chamadas públicas e
                prêmios para incentivar atividades culturais. A iniciativa foi amplamente reconhecida como uma ação emergencial crucial
                para a sobrevivência do setor cultural brasileiro, proporcionando uma rede de segurança econômica e estimulando a
                continuidade das atividades artísticas em um momento de grande incerteza.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae
                natus similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt
                corporis rerum deleniti blanditiis adipisci!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius totam,
                eum dolorem magni, facere porro saepe architecto cumque molestias inventore reprehenderit deleniti modi
                soluta, reiciendis a in perspiciatis deserunt voluptas.</p>
            `,
            editais: `
                <h1>Editais</h1>
                <div class="editais">
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 76 – MAESTRO ALKBAL - CURADORIA
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                        
<p>   <li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/EDITAL-N%C2%BA-76.2020.SEJUCEL-CODEC-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">EDITAL Nº 76.2020.SEJUCEL-CODEC – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li> </p>
<p>   <li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-I-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO I – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li> </p>
<p>   <li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-II-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO II – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li> </p>
 <p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-III-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO III – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-IV-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO IV – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-V-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO V – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-VI-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO VI – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-VII-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO VII – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-VIII-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO VIII – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-IX-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO IX – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-X-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO X – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XI-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XI – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XII-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XII – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XIII-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XIII – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XIV-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XIV – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XV-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XV – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
<p><li><a href="https://rondonia.ro.gov.br/wp-content/uploads/2020/10/ANEXO-XVI-1%C2%AA-EDI%C3%87%C3%83O-MAESTRO-ALKBAL-DO-EDITAL-DE-CREDENCIAMENTO-E-SELE%C3%87%C3%83O-DE-CURADORIA.pdf">ANEXO XVI – 1ª EDIÇÃO MAESTRO ALKBAL DO EDITAL DE CREDENCIAMENTO E SELEÇÃO DE CURADORIA</a></li></p>
</div>
</div>



                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 77 – MARY CYANNE - TRANSMISSÕES AO VIVO GRAVADAS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            
                        <p><li><a href="">EDITAL N° 77.2020.SEJUCEL-CODEC – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO I – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO II – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO III – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO IV – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO V – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO VI – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO VII – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO</a></li></p>
<p><li><a href="">ANEXO VIII – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO</a></li></p>
<p><li><a href="">ANEXO IX – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO X – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO XI – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO XII – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>
<p><li><a href="">ANEXO XIII – 1ª EDIÇÃO MARY CYANNE DO EDITAL DE CHAMAMENTO PÚBLICO DE FOMENTO À CULTURA E À PRODUÇÃO ARTÍSTICO-CULTURAL PARA TRANSMISSÕES AO VIVO.GRAVADAS</a></li></p>



                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 78 – JAIR RANGEL “PISTOLINO” - PRODUÇÃO AUDIOVISUAL
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                           <p><li><a href="">EDITAL N° 78.2020.SEJUCEL-CODEC – 1ª EDIÇÃO JAIR RANGEL PISTOLINO DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO I – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO II – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO III – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO IV – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO V – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO VI – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL.</a></li></p>
<p><li><a href="">ANEXO VII – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO VIII – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO IX – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO X – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO XI – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO XII – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>
<p><li><a href="">ANEXO XIII – 1ª EDIÇÃO JAIR RANGEL – PISTOLINO – DO EDITAL DE CHAMAMENTO PÚBLICO PARA PRODUÇÃO AUDIOVISUAL</a></li></p>

                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 80 – PACAÁS NOVOS - DIFUSÃO DE FESTIVAIS, MOSTRAS E FEIRAS ARTÍSTICAS E CULTURAIS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 80 – PACAÁS NOVOS...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 81 – MESTRE ALUÍZIO GUEDES - MESTRES E MESTRAS DA CULTURA
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 81 – MESTRE ALUÍZIO GUEDES...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 83 – ALEJANDRO BEDOTTI - FOMENTO À CULTURA PARA PESQUISA E DESENVOLVIMENTO DE EXPRESSÕES CULTURAIS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 83 – ALEJANDRO BEDOTTI...</p> 
                        </div>
                    </div>

                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 84 – AMBRÓSIO PAES - QUILOMBOLAS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 84 – AMBRÓSIO PAES...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 85 – URUCUMACUÃ - INDÍGENAS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 85 – URUCUMACUÃ...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">EDITAL Nº 86 – MARECHAL RONDON - MARECHAL RONDON PUBLICAÇÃO E DIFUSÃO DE EXPRESSÕES CULTURAIS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre o Edital Nº 86 – MARECHAL RONDON...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">PORTARIAS LEI ALDIR BLANC  
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre PORTARIAS LEI ALDIR BLANC...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">ERRATAS 
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre ERRATAS...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">HABILITADOS E INABILITADOS CURADORIA
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre HABILITADOS E INABILITADOS CURADORIA...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">HABILITADOS E INABILITADOS DOS EDITAIS
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre HABILITADOS E INABILITADOS DOS EDITAIS...</p>
                        </div>
                    </div>
                    <div class="edital-item">
                        <button class="edital-question">AUXÍLIO EMERGENCIAL
                            <span class="edital-icon">▶</span>
                        </button>
                        <div class="edital-answer">
                            <p>Detalhes sobre AUXÍLIO EMERGENCIAL...</p>
                        </div>
                    </div>
                </div>
            `,
            quemfoi: `
                <h1>Quem foi Aldir Blanc</h1>
                     <p>Aldir Blanc .... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius totam,
                eum dolorem magni, facere porro saepe architecto cumque molestias inventore reprehenderit deleniti modi
                soluta, reiciendis a in perspiciatis deserunt voluptas.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius totam,
                eum dolorem magni, facere porro saepe architecto cumque molestias inventore reprehenderit deleniti modi
                soluta, reiciendis a in perspiciatis deserunt voluptas.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae
                natus similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt
                corporis rerum deleniti blanditiis adipisci!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime? Placeat
                atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam asperiores vitae natus
                similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos delectus deserunt corporis
                rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius totam,
                eum dolorem magni, facere porro saepe architecto cumque molestias inventore reprehenderit deleniti modi
                soluta, reiciendis a in perspiciatis deserunt voluptas.</p>
            `,
            projetos: `
                <h1>Projetos Culturais</h1>
                <p>... (conteúdo sobre Projetos Culturais) ...</p>
            `,
            capacitações: `
                <h1>Capacitações sobre os Editais</h1>
                <p>... (conteúdo sobre Capacitações) ...</p>
            `,
            faq: `
                <h1>Perguntas Frequentes</h1>
                <div class="faq">
                    <div class="faq-item">
                        <button class="faq-question">1) Quem pode se inscrever nos editais?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime?
                                Placeat atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
                                asperiores vitae natus similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos
                                delectus deserunt corporis rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius totam, eum dolorem magni, facere porro saepe architecto cumque molestias
                                inventore reprehenderit deleniti modi soluta, reiciendis a in perspiciatis deserunt voluptas....</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">2) Há exigência de tempo mínimo de existência do CNPJ para que o proponente possa se inscrever?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime?
                                Placeat atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
                                asperiores vitae natus similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos
                                delectus deserunt corporis rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius totam, eum dolorem magni, facere porro saepe architecto cumque molestias
                                inventore reprehenderit deleniti modi soluta, reiciendis a in perspiciatis deserunt voluptas.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">3) Como fazer meu CEPC (Cadastro Estadual de Proponente Cultural)?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem iusto labore explicabo eum neque
                                deserunt beatae voluptatibus placeat itaque. Laboriosam quo quidem inventore distinctio maxime?
                                Placeat atque eos optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
                                asperiores vitae natus similique quas doloribus, quae nam tenetur quo officia aspernatur, dignissimos
                                delectus deserunt corporis rerum deleniti blanditiis adipisci! Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eius totam, eum dolorem magni, facere porro saepe architecto cumque molestias
                                inventore reprehenderit deleniti modi soluta, reiciendis a in perspiciatis deserunt voluptas.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">4) Como funciona o processo de inscrição para os editais de apoio cultural?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>O processo de inscrição é feito através de uma plataforma online, onde o proponente deve preencher um
                                formulário com seus dados e informações sobre o projeto cultural. Além disso, é necessário anexar
                                documentos obrigatórios e um portfólio que comprove a experiência na área.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">5) Qual é o prazo para a inscrição nos editais e como fico sabendo sobre novas oportunidades?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>O prazo de inscrição varia conforme o edital específico. Para ficar atualizado sobre novas oportunidades,
                                recomenda-se acompanhar o site oficial da Secretaria de Cultura do estado ou município e assinar newsletters
                                sobre editais culturais.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">6) Quais tipos de projetos culturais podem ser financiados pela Lei Aldir Blanc?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>Podem ser financiados projetos de diversas linguagens artísticas e culturais, como música, teatro, dança,
                                literatura, artes visuais, audiovisual, cultura popular, entre outros. Os editais específicos detalham os
                                tipos de projetos elegíveis e os critérios de seleção.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">7) Quais são os documentos necessários para se inscrever nos editais?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>Geralmente, os documentos exigidos incluem CNPJ ativo, portfólio de atividades culturais, comprovantes de
                                atuação na área cultural (como releases, cartazes de eventos, matérias de jornal, etc.), proposta do projeto
                                cultural e documentos pessoais do responsável legal.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">8) Como é feita a prestação de contas dos recursos recebidos por meio dos editais da Lei Aldir Blanc?
                            <span class="faq-icon">▶</span>
                        </button>
                        <div class="faq-answer">
                            <p>A prestação de contas deve ser realizada conforme as diretrizes estabelecidas em cada edital. Isso inclui a
                                apresentação de relatórios de execução, notas fiscais e comprovantes de despesas realizadas com os recursos
                                recebidos. É fundamental seguir rigorosamente as orientações para evitar problemas na aprovação da prestação
                                de contas.</p>
                        </div>
                    </div>
                </div>
            `,
            canais: `
                <h1>Canais de Atendimento</h1>
                <p>Site do Pró-cultura: procultura.rs.gov.br...</p>
            `,
            identidade: `
                <h1>Identidade Visual</h1>
                <p>Diretrizes e recursos para identidade visual...</p>
            `
            ,
            saiba: `
                <h1>Saiba mais</h1>
                <p> Página da PNAB Legislação </p>
                <p> Legislação </p>
            `
        };

        mainContent.innerHTML = content[contentId] || '<h1>Conteúdo não encontrado</h1>';

        // Após carregar o conteúdo FAQ, adicionar a funcionalidade de toggle
        if (contentId === 'faq') {
            document.querySelectorAll('.faq-item').forEach(item => {
                const button = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                button.addEventListener('click', () => {
                    const isActive = button.classList.contains('active');
                    document.querySelectorAll('.faq-answer').forEach(a => {
                        a.style.maxHeight = null;
                        a.style.opacity = '0';
                    });
                    document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));
                    if (!isActive) {
                        button.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        answer.style.opacity = '1';
                    }
                });
            });
        }

        // Após carregar o conteúdo Editais, adicionar a funcionalidade de toggle
        if (contentId === 'editais') {
            document.querySelectorAll('.edital-item').forEach(item => {
                const button = item.querySelector('.edital-question');
                const answer = item.querySelector('.edital-answer');
                button.addEventListener('click', () => {
                    const isActive = button.classList.contains('active');
                    document.querySelectorAll('.edital-answer').forEach(a => {
                        a.style.maxHeight = null;
                        a.style.opacity = '0';
                    });
                    document.querySelectorAll('.edital-question').forEach(b => b.classList.remove('active'));
                    if (!isActive) {
                        button.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        answer.style.opacity = '1';
                    }
                });
            });
        }
    }

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            links.forEach(function (l) { l.classList.remove('active'); });
            this.classList.add('active');
            var contentId = this.getAttribute('data-content');
            loadContent(contentId);
        });
    });

    // Carregar conteúdo padrão ao iniciar
    loadContent('sobre');
});






