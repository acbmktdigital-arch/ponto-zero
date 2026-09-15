import { LessonItem, AudienceItem, FaqItem } from '../types';

// Link do checkout da Hotmart. Todos os botões de compra da página apontam para cá.
// O parâmetro ?off= identifica a oferta associada à turma do curso bônus. Sem ele,
// a venda entra pelo produto genérico e o comprador não recebe o bônus.
export const CHECKOUT_URL = 'https://pay.hotmart.com/K107603124Y?off=ycn4hlis';

export const COURSE_INFO = {
  title: 'PONTO ZERO',
  tagline: 'onde tudo é possível',
  headline: 'Seis aulas para entender a regra do jogo da realidade, parar de repetir os mesmos padrões e mudar de linha do tempo a partir do ponto do observador.',
  priceText: '12x de R$ 19,44',
  cashPriceText: 'R$ 188,00 à vista no Pix',
  priceFormat: '6 aulas ao vivo com gravação + grupo de suporte exclusivo + 2 bônus inclusos',
  primaryCta: 'Quero recalcular a minha rota',
  secondaryCta: 'Quero entrar no Ponto Zero',
  instructor: 'Moana Grandinetti',
  institution: 'HiperConsciência Escola Iniciática',
  quote: 'Vamos ser felizes, nem que seja de pirraça.',
  // Agenda das aulas ao vivo. 20/10/2026 cai numa terça; as demais seguem
  // semanalmente no mesmo dia e horário.
  startDate: '20 de outubro',
  scheduleShort: 'Começa 20 de outubro · terças, 19h',
  scheduleLong: 'Seis terças-feiras às 19h (horário de Brasília), a partir de 20 de outubro.',
};

export const ABOUT_PILLARS = [
  {
    title: 'Mudança de Linha do Tempo & Conexão Estelar',
    lead: 'O Ponto Zero fala de mudança de linha do tempo, de conexão com o eu do futuro, de conexão com o eu estelar.',
    body: 'Fala das crenças, dos padrões, de tudo que te limita de chegar onde você quer chegar.',
  },
  {
    title: 'A Regra do Jogo & A Matrix',
    lead: 'Fala que a gente tem uma regra do jogo: que a gente pode entender como é o funcionamento da Matrix e usar isso a nosso favor.',
    body: 'Destravar a linha, mudar de linha do tempo, entender como você conecta e colapsa para cima, ou quando você está colapsando a realidade para baixo.',
  },
  {
    title: 'Repetições',
    lead: 'Por que as coisas estão se repetindo? Quando as coisas se repetem? Qual o motivo das coisas se repetirem?',
    body: 'Compreenda a mecânica por trás das repetições e desbloqueie o fluxo natural para seguir em frente sem travas invisíveis.',
  },
  {
    title: 'O Caos que Antecede o Salto Quântico',
    lead: 'Toda vez que a gente está realmente chegando num ponto ápice de dar um salto quântico, a gente vai ter um bocado de problema, um tanto de coisa acontecendo.',
    body: 'E de como a gente pode, a partir do ponto do observador, mudar toda a perspectiva da nossa vida.',
  },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    id: 'sobrecarregado',
    title: 'Quem se sente sobrecarregado',
    description: 'Muita coisa acontecendo ao mesmo tempo, e a sensação de que nada sai do lugar.',
    iconName: 'Activity',
  },
  {
    id: 'procrastinando',
    title: 'Quem está procrastinando',
    description: 'Sabe onde quer chegar, mas algo trava o passo toda vez.',
    iconName: 'Clock',
  },
  {
    id: 'autoconhecimento',
    title: 'Quem busca autoconhecimento',
    description: 'Quer entender por que as coisas se repetem e como usar isso a seu favor.',
    iconName: 'Compass',
  },
];

export const LESSONS: LessonItem[] = [
  {
    number: 1,
    title: 'Aula 1',
    subtitle: 'A regra do jogo',
    description: 'Como funciona a Matrix, e como entender essas regras para usá-las a seu favor em vez de ser levado por elas.',
    focusTag: 'Matrix & Leis Universais',
  },
  {
    number: 2,
    title: 'Aula 2',
    subtitle: 'Por que tudo se repete',
    description: 'As crenças e os padrões que limitam você de chegar onde quer chegar. Quando as coisas se repetem, e qual é o motivo delas se repetirem.',
    focusTag: 'Padrões & Crenças Raiz',
  },
  {
    number: 3,
    title: 'Aula 3',
    subtitle: 'Colapsar para cima',
    description: 'Como perceber quando você está colapsando a realidade para baixo, e como se conectar para colapsar para cima.',
    focusTag: 'Colapso de Onda da Realidade',
  },
  {
    number: 4,
    title: 'Aula 4',
    subtitle: 'O caos antes do salto',
    description: 'Por que, sempre que você está perto de dar um salto quântico, aparece um bocado de problema. E o que fazer com isso.',
    focusTag: 'O Salto Quântico & Dissolução',
  },
  {
    number: 5,
    title: 'Aula 5',
    subtitle: 'O eu do futuro e o eu estelar',
    description: 'A conexão com a versão de você que já chegou lá, e com a sua origem estelar, para destravar a linha e mudar de linha do tempo.',
    focusTag: 'Linha Temporal & Eu Estelar',
  },
  {
    number: 6,
    title: 'Aula 6',
    subtitle: 'O ponto do observador',
    description: 'O ponto zero. De onde se muda toda a perspectiva da própria vida.',
    focusTag: 'O Ponto Zero & Consciência Pura',
  },
];

export const DELIVERABLES = [
  {
    title: '6 aulas ao vivo',
    description: 'Encontros ao vivo com a Moana. A gravação fica disponível depois, para rever quantas vezes precisar.',
    badge: 'Ao vivo + gravação',
  },
  {
    title: 'Grupo de suporte exclusivo',
    description: 'Espaço dedicado para tirar dúvidas e acompanhar as orientações da turma.',
    badge: 'Acompanhamento exclusivo',
  },
  {
    title: 'HiperConsciência Escola Iniciática',
    description: 'Fundamentação profunda, prática e transformadora conduzida por Moana Grandinetti.',
    badge: 'Escola Iniciática',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Quando são as aulas?',
    answer: 'A primeira é em 20 de outubro, uma terça-feira, às 19h (horário de Brasília). As outras cinco seguem nas terças seguintes, sempre no mesmo horário: 27 de outubro, 3, 10, 17 e 24 de novembro.',
  },
  {
    question: 'As aulas são ao vivo?',
    answer: 'Sim. As 6 aulas são ao vivo com a Moana. Se você não puder estar presente, ou quiser rever, a gravação de cada aula fica disponível depois.',
  },
  {
    question: 'E se eu não puder assistir ao vivo?',
    answer: 'Sem problema. A gravação de cada aula fica disponível para você assistir quando puder, e você continua no grupo de suporte para enviar as suas dúvidas.',
  },
  {
    question: 'Como eu tiro as minhas dúvidas?',
    answer: 'No grupo de suporte exclusivo, onde você pode enviar suas dúvidas e acompanhar as respostas.',
  },
  {
    question: 'É para mim?',
    answer: 'É para quem se sente sobrecarregado, para quem está procrastinando e para quem busca autoconhecimento, e quer entender por que as coisas se repetem na própria vida.',
  },
];
