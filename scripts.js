
function loadContent(topic) {
    let contentDiv = document.getElementById('content');
    if (topic === 'azpost') {
        contentDiv.innerHTML = `
            <h1>Como reconectar um Azpost</h1>
            <p>Neste guia, você aprenderá como reconectar um Azpost em poucos passos simples.</p>
            <h2>Passo a Passo</h2>
            <ol>
                <li><strong>Verifique as conexões físicas:</strong> Certifique-se de que todos os cabos estão conectados corretamente. Verifique se o dispositivo está ligado.</li>
                <li><strong>Reinicie o dispositivo:</strong> Desligue o Azpost. Aguarde 10 segundos e ligue novamente.</li>
                <li><strong>Configuração de Rede:</strong> Acesse as configurações de rede no painel de controle do Azpost. Verifique se os detalhes da rede estão corretos.</li>
                <li><strong>Teste de Conexão:</strong> Execute um teste de conexão para garantir que o Azpost está online.</li>
            </ol>
            <h2>Resolução de Problemas Comuns</h2>
            <ul>
                <li>Se o Azpost não conectar, verifique se há problemas na rede local.</li>
                <li>Consulte o manual do Azpost para códigos de erro específicos.</li>
            </ul>
            <h2>Dicas e Melhores Práticas</h2>
            <ul>
                <li>Mantenha o firmware do Azpost atualizado.</li>
                <li>Realize manutenções periódicas para evitar problemas de conexão.</li>
            </ul>
            <!-- Conteúdo existente -->
        `;
    } else if (topic === 'html') {
        contentDiv.innerHTML = `
           <h1>Alteração em HTML Simples</h1>
            <p>Neste guia, você aprenderá como fazer alterações simples em um arquivo HTML.</p>
            <h2>Passo a Passo</h2>
             <ol>
                <li><strong>Abrir o arquivo HTML:</strong> Use um editor de texto como Notepad++, Sublime Text ou Visual Studio Code para abrir o arquivo HTML que você deseja editar.</li>
                <li><strong>Editar o conteúdo:</strong> Faça as alterações desejadas no código HTML. Por exemplo, você pode adicionar um novo parágrafo, alterar um título ou modificar atributos de elementos.</li>
                <li><strong>Salvar o arquivo:</strong> Após fazer as alterações, salve o arquivo.</li>
                <li><strong>Visualizar no navegador:</strong> Abra o arquivo HTML no seu navegador para ver as alterações aplicadas.</li>
            </ol>
            <h2>Resolução de Problemas Comuns</h2>
            <ul>
                <li>Se o Azpost não conectar, verifique se há problemas na rede local.</li>
                <li>Consulte o manual do Azpost para códigos de erro específicos.</li>
            </ul>
            <h2>Dicas e Melhores Práticas</h2>
            <ul>
                <li>Mantenha o firmware do Azpost atualizado.</li>
                <li>Realize manutenções periódicas para evitar problemas de conexão.</li>
            </ul>
            <!-- Conteúdo existente -->
        `;

    } else if (topic === 'FV') {
        contentDiv.innerHTML = `
            <h1>Título do Outro Tópico</h1>
            <p>Descrição e passos para o outro tópico.</p>
            <!-- Conteúdo específico para outro tópico -->
        `;

    } else if (topic === 'NF-e') {
        contentDiv.innerHTML = `
             <h1>Como reconectar um Azpost</h1>
            <p>Neste guia, você aprenderá como reconectar um Azpost em poucos passos simples.</p>
            <h2>Passo a Passo</h2>
            <ol>
                <li><strong>Verifique as conexões físicas:</strong> Certifique-se de que todos os cabos estão conectados corretamente. Verifique se o dispositivo está ligado.</li>
                <li><strong>Reinicie o dispositivo:</strong> Desligue o Azpost. Aguarde 10 segundos e ligue novamente.</li>
                <li><strong>Configuração de Rede:</strong> Acesse as configurações de rede no painel de controle do Azpost. Verifique se os detalhes da rede estão corretos.</li>
                <li><strong>Teste de Conexão:</strong> Execute um teste de conexão para garantir que o Azpost está online.</li>
            </ol>
            <h2>Resolução de Problemas Comuns</h2>
            <ul>
                <li>Se o Azpost não conectar, verifique se há problemas na rede local.</li>
                <li>Consulte o manual do Azpost para códigos de erro específicos.</li>
            </ul>
            <h2>Dicas e Melhores Práticas</h2>
            <ul>
                <li>Mantenha o firmware do Azpost atualizado.</li>
                <li>Realize manutenções periódicas para evitar problemas de conexão.</li>
            </ul>
            <!-- Conteúdo existente -->
        `;

    } else if (topic === 'CNPJ') {
        contentDiv.innerHTML = `
             <h1>Como reconectar um Azpost</h1>
            <p>Neste guia, você aprenderá como reconectar um Azpost em poucos passos simples.</p>
            <h2>Passo a Passo</h2>
            <ol>
                <li><strong>Verifique as conexões físicas:</strong> Certifique-se de que todos os cabos estão conectados corretamente. Verifique se o dispositivo está ligado.</li>
                <li><strong>Reinicie o dispositivo:</strong> Desligue o Azpost. Aguarde 10 segundos e ligue novamente.</li>
                <li><strong>Configuração de Rede:</strong> Acesse as configurações de rede no painel de controle do Azpost. Verifique se os detalhes da rede estão corretos.</li>
                <li><strong>Teste de Conexão:</strong> Execute um teste de conexão para garantir que o Azpost está online.</li>
            </ol>
            <h2>Resolução de Problemas Comuns</h2>
            <ul>
                <li>Se o Azpost não conectar, verifique se há problemas na rede local.</li>
                <li>Consulte o manual do Azpost para códigos de erro específicos.</li>
            </ul>
            <h2>Dicas e Melhores Práticas</h2>
            <ul>
                <li>Mantenha o firmware do Azpost atualizado.</li>
                <li>Realize manutenções periódicas para evitar problemas de conexão.</li>
            </ul>
            <!-- Conteúdo existente -->
        `;

    } else if (topic === 'Autentique') {
        contentDiv.innerHTML = `
             <h1>Como configurar um Autentique</h1>
            <p>Neste guia, você aprenderá como configurar um Autentique em poucos passos simples.</p>
            <h2>Passo a Passo</h2>
            <ol>
                <li><strong> -</strong> Acessar: https://www.autentique.com.br/ </li>
                <li><strong> - </strong>Cadastrar</li>
                <li><strong> -</strong> Gerar token</li>
                <li><strong> - </strong>Cadastrar organização</li>
            </ol>
            <h2>No Sisloc</h2>
            <ul>
                <li>- Integração de contratos</li>
                <li>- Integração de documentos</li>
            </ul>
            <h3>*Habilitar módulo Integração de Contratos</h3>
            <h2>*ATENÇÃO*</h2>
            <ul>
                <li>- Dados o email informado deve ser o mesmo da conta no autentique</li>
                <li>-Cadastro de usuario</li>
                <li>-Cadastro de testemunha</li>
                <li>- Configuração de Signatario dos contratos da empresa</li>
                <li>- Cadastro de empresa > aba 13-parametros por empresa: campos URL API e Token</li>
           
            </ul>
            <!-- Conteúdo existente -->
        `;
    }
    // Continue adicionando condições para novos tópicos
}
