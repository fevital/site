# Publicação automática na Hostinger

Todo push na branch `main` executa o build e publica somente o site pronto na branch `production`.

Configure uma única vez no hPanel:

1. Acesse **Sites → Gerenciar → Avançado → Git**.
2. Conecte o repositório `fevital/site`.
3. Selecione a branch `production`.
4. Use o diretório `public_html/seguro-automovel`.
5. Ative a implantação automática/webhook.

Não conecte `main` diretamente à pasta pública: essa branch contém o código-fonte. A branch `production` contém apenas os arquivos estáticos gerados.
