# 📸 Como Adicionar Fotos ao Portfolio

## 📁 Estrutura de Pastas
```
public/
└── images/
    └── portfolio/
        ├── obra1.jpg
        ├── obra2.jpg
        ├── obra3.jpg
        ├── obra4.jpg
        ├── obra5.jpg
        ├── obra6.jpg
        ├── obra7.jpg
        └── obra8.jpg
```

## 🖼️ Instruções para Adicionar as Fotos

### 1. **Extrair fotos dos documentos**
- Abra o arquivo `Flying FCS - Portfólio.docx` ou `Flying FCS - Portfólio.pdf`
- Salve cada foto individualmente como arquivo JPG
- Renomeie os arquivos seguindo o padrão: `obra1.jpg`, `obra2.jpg`, etc.

### 2. **Colocar as fotos na pasta correta**
- Copie todas as fotos para a pasta: `public/images/portfolio/`
- Certifique-se de que os nomes dos arquivos correspondem aos definidos no código

### 3. **Formatos recomendados**
- **Formato**: JPG ou PNG
- **Tamanho**: Máximo 2MB por imagem
- **Resolução**: Mínimo 800x600 pixels
- **Qualidade**: Boa qualidade para web

### 4. **Personalizar as fotos (opcional)**
Se quiser alterar os títulos ou descrições das fotos, edite o arquivo `src/components/Portfolio.tsx` na linha 30-39:

```typescript
const portfolioImages = [
  { src: '/images/portfolio/obra1.jpg', alt: 'Obra Industrial - Votorantim', title: 'Construção Industrial' },
  { src: '/images/portfolio/obra2.jpg', alt: 'Pavimentação Asfáltica', title: 'Pavimentação' },
  // ... adicione mais fotos aqui
];
```

## 🎯 Funcionalidades da Galeria

- ✅ **Grid responsivo**: 4 colunas no desktop, 2 no tablet, 1 no mobile
- ✅ **Hover effects**: Efeitos visuais ao passar o mouse
- ✅ **Modal de visualização**: Clique na foto para ver em tamanho maior
- ✅ **Placeholder**: Ícones enquanto as fotos não são carregadas
- ✅ **Fechar modal**: Clique fora da imagem ou no botão X

## 🚀 Deploy

Após adicionar as fotos:
1. Execute `npm run build` para gerar a versão de produção
2. Faça commit e push para o GitHub
3. O Netlify fará deploy automático com as novas fotos

## 📝 Notas Importantes

- As fotos devem estar na pasta `public/images/portfolio/`
- Os nomes dos arquivos devem corresponder exatamente aos definidos no código
- Para adicionar mais fotos, edite o array `portfolioImages` no componente Portfolio
- As fotos são otimizadas automaticamente pelo Vite durante o build
