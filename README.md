# Ponto Zero — página de vendas

Landing page do curso **Ponto Zero**, de Moana Grandinetti (HiperConsciência Escola Iniciática).
Seis aulas ao vivo, com gravação disponível depois.

## Stack

Vite 6 · React 19 · TypeScript · Tailwind CSS 4 · lucide-react

## Rodar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # gera dist/
npm run preview  # serve o dist/ gerado
npm run lint     # tsc --noEmit
```

## Onde mexer

| O quê | Onde |
|---|---|
| Link do checkout (Hotmart) | `CHECKOUT_URL` em `src/data/courseData.ts` |
| Preço, títulos, CTAs | `COURSE_INFO` em `src/data/courseData.ts` |
| As 6 aulas | `LESSONS` em `src/data/courseData.ts` |
| Perguntas frequentes | `FAQS` em `src/data/courseData.ts` |
| Seções da página | `src/components/` |

Os quatro botões de compra da página — topo, bônus, preço e a barra fixa do celular —
leem o mesmo `CHECKOUT_URL`. Trocar o link num lugar troca em todos.

> O link precisa ser o da **oferta específica** da Hotmart associada à turma do curso bônus.
> Qualquer outro link vende o curso normalmente, mas o aluno não recebe o bônus.

## Deploy

Publicado no Netlify. O `netlify.toml` na raiz já define o comando de build (`npm run build`),
a pasta publicada (`dist`) e os headers de cache — o Netlify lê esse arquivo sozinho ao
conectar o repositório.

O `public/_redirects` manda qualquer rota para o `index.html`, comportamento esperado de uma
página única. Ele vale no Netlify; em servidor Apache o equivalente seria um `.htaccess`.
