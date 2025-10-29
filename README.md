# Flying FCS Serviços em Edificações - Website

Website institucional da Flying FCS Serviços em Edificações LTDA, empresa especializada em construção civil industrial e predial.

## 🏗️ Sobre o Projeto

Este é um website moderno e responsivo desenvolvido com React + TypeScript + Vite + Tailwind CSS, apresentando os serviços e informações da empresa Flying FCS.

### Características:
- ✅ Design responsivo e moderno
- ✅ SEO otimizado com meta tags
- ✅ Navegação suave entre seções
- ✅ Informações completas da empresa
- ✅ Portfolio de clientes e projetos
- ✅ Formulário de contato integrado

## 🚀 Deploy no Netlify (GRATUITO)

### Opção 1: Deploy Automático via GitHub (Recomendado)

1. **Crie uma conta no Netlify** (gratuita): https://netlify.com
2. **Faça upload do projeto para o GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/flying-fcs-website.git
   git push -u origin main
   ```

3. **Conecte o repositório ao Netlify**:
   - Acesse https://app.netlify.com
   - Clique em "New site from Git"
   - Conecte sua conta do GitHub
   - Selecione o repositório `flying-fcs-website`
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Clique em "Deploy site"

4. **Configure domínio personalizado** (opcional):
   - No painel do Netlify, vá em "Domain settings"
   - Adicione seu domínio personalizado (ex: flyingfcs.com.br)

### Opção 2: Deploy Manual via Drag & Drop

1. **Execute o build localmente**:
   ```bash
   npm install
   npm run build
   ```

2. **Acesse https://app.netlify.com**
3. **Arraste a pasta `dist`** para a área de deploy
4. **Seu site estará online em segundos!**

## 💰 Custos de Hospedagem

### Netlify (Recomendado)
- **Plano Gratuito**: 100GB de bandwidth/mês, 300 minutos de build/mês
- **Domínio personalizado**: Gratuito
- **SSL**: Gratuito e automático
- **CDN global**: Incluído

### Alternativas Gratuitas:
- **Vercel**: Similar ao Netlify, também gratuito
- **GitHub Pages**: Gratuito, mas requer configuração adicional
- **Firebase Hosting**: Gratuito até 10GB/mês

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── About.tsx          # Seção sobre a empresa
│   ├── Contact.tsx        # Informações de contato
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Hero.tsx           # Seção principal
│   ├── Portfolio.tsx      # Portfolio de clientes
│   └── Services.tsx       # Lista de serviços
├── App.tsx                # Componente principal
├── index.css              # Estilos globais
└── main.tsx               # Ponto de entrada
```

## 📞 Informações da Empresa

- **Nome**: Flying FCS Serviços em Edificações LTDA
- ****: 40.036.058/0001-00
- **Endereço**: Rua Lázaro Godoi, s/n, Casa 02 - Jardim Guapira, São Paulo - SP
- **CEP**: 02.318-110
- **Telefones**: (11) 97612-0613 / (11) 2385-4864
- **E-mail**: fcsedificacoes@gmail.com
- **Responsável Técnico**: Eng. Lucas Mendes Coimbra - CREA-SP 5069506512-SP

## 🎯 Próximos Passos

1. **Registrar domínio** (opcional): flyingfcs.com.br (~R$ 40/ano) - ok hostinger
2. **Configurar Google Analytics** para acompanhar visitantes
3. **Adicionar certificados e licenças** na seção sobre
4. **Implementar formulário de contato** com envio de e-mail - NAO
5. **Adicionar galeria de fotos** dos projetos realizados - OK

## 📝 Licença

Este projeto é propriedade da Flying FCS Serviços em Edificações LTDA.

---

**Desenvolvido com ❤️ para a Flying FCS Serviços em Edificações**
