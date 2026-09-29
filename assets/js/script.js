
const $ = id => document.getElementById(id);
const ic = {
    bolt: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>',
    cloud: '<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.6 9.3 4.7 4.7 0 0 1 17.5 19z" /></svg>',
    sat: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M4 18h.01" /></svg>',
    link: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>',
    shield: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /></svg>',
    layers: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5" /></svg>',
    phone: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>',
    globe: '<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>'
};
const box = i => `<div class="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-red-900/20 text-[#a13a41] ring-1 ring-red-900/30">${ic[i]}</div>`;

$('dest').innerHTML = ['Twitch', 'YouTube', 'Kick'].map(n => `<li class="flex items-center justify-between px-4 py-3.5"><span>${n}</span><span class="flex items-center gap-2 text-xs text-emerald-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Conectado</span></li>`).join('');

$('highlights').innerHTML = [['bolt', 'Qualidade profissional com baixa latência'], ['cloud', 'OBS na nuvem, sem precisar de PC potente'], ['sat', 'Multi-plataforma <br> (Twitch, Kick, YouTube)']].map(([i, t]) => `<div class="mx-auto flex max-w-xs flex-col items-center text-center"><span class="text-[#b8434a] [&>svg]:h-6 [&>svg]:w-6 flex items-center justify-center w-12 h-12 mb-4 mx-auto border border-white/10 rounded-lg ">${ic[i]}</span><p class="mt-5 text-lg leading-8 text-white">${t}</p></div>`).join('');

const feats = [['cloud', 'OBS na Nuvem', 'Use OBS Studio diretamente do seu navegador, sem precisar de um PC potente. Configure cenários, overlays e efeitos profissionais de qualquer lugar.'],
['link', 'SRTLA Bonding', 'Combine múltiplas conexões de internet — Wi-Fi + 4G/5G — em uma única transmissão estável. SRTLA bonding mantém sua live no ar mesmo quando uma conexão individual falha.'],
['shield', 'Proteção Contra Desconexão', 'Se sua conexão cair, o servidor troca automaticamente para uma tela de espera (BRB) e mantém a stream ativa nas plataformas. Quando reconecta, volta ao vivo instantaneamente. Sua stream nunca cai.'],
['layers', 'Multi-Plataforma Simultâneo', 'Transmita para Twitch, YouTube, Kick e outras plataformas ao mesmo tempo. Alcance mais viewers sem duplicar esforços.'],
['phone', 'Streaming IRL', 'Servidor IRL completo na nuvem. Transmita do celular com SRT e H.265 (HEVC) para máxima estabilidade e economia de dados. Compatível com Moblin, Larix Broadcaster, LiveU, TVU e qualquer encoder SRT/SRTLA.'],
['globe', 'Ingests Globais', 'Servidores de ingest no Brasil, Estados Unidos e Europa. Conecte-se ao servidor mais próximo para a menor latência possível, independente de onde você estiver transmitindo.']];
$('features').innerHTML = feats.map(([i, t, d]) => `<article class="spot rounded-xl border border-white/10 bg-white/[0.04] p-6">${box(i)}<h3 class="mt-5 font-semibold">${t}</h3><p class="mt-2 text-sm leading-6 text-zinc-400">${d}</p></article>`).join('');

const plans = [
    { n: 'Básico', m: 'R$ 119,90', y: 'R$ 1.199,00', eq: 'R$99,92', f: ['1 Ingest', 'Suporte básico', 'Streaming de alta qualidade', 'Controle via OBS local', 'Dashboard completo', 'Estatísticas em tempo real', 'SRTLA bonding para IRL', 'Proteção contra desconexão (BRB automático)', 'Ingests no Brasil, EUA e Europa', 'OBS na nuvem', 'Multi-plataforma simultâneo'] },
    { n: 'Avançado', m: 'R$ 499,90', y: 'R$ 4.999,00', eq: 'R$416,58', hot: 1, f: ['Tudo do plano básico', '2 Ingests', 'Suporte avançado', 'OBS na nuvem (sem precisar de PC potente)', 'Acesso remoto via navegador', 'Streaming simultâneo para múltiplas plataformas', 'Alta qualidade profissional', 'Economia inteligente de recursos', 'Suas configurações sempre salvas', 'SRTLA bonding para IRL', 'Proteção contra desconexão (BRB automático)', 'Ingests no Brasil, EUA e Europa'] }];
const chk = '<svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-[#9b2c33]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10" /></svg>';
let yearly = false;
function renderPlans() {
    $('plans').innerHTML = plans.map(p => `<article class="flex flex-col rounded-2xl ${p.hot ? 'hotborder' : 'spot border border-white/10 bg-white/[0.04]'} p-6 sm:p-8"><h3 class="text-lg font-semibold">${p.n}</h3>
 <p class="mt-4"><span class="text-4xl font-extrabold tracking-tight">${yearly ? p.y : p.m}</span> <span class="text-zinc-500">${yearly ? '/ano' : '/mês'}</span></p>
 <p class="mt-1 h-5 text-sm text-zinc-500">${yearly ? 'equivale a ' + p.eq + ' por mês' : ''}</p>
 <ul class="mt-6 flex-1 space-y-3 text-sm text-zinc-300">${p.f.map(x => `<li class="flex gap-3">${chk}<span>${x}</span></li>`).join('')}</ul>
 <a href="https://live.streamerkit.net" class="mt-8 rounded-full ${p.hot ? 'btn-shine bg-[#7f1d24] hover:bg-[#98232c] text-white' : 'border border-white/10 bg-white/[0.04] hover:bg-white/10'} px-5 py-3 text-center text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300">Começar Agora</a></article>`).join('');
    const on = 'bg-[#7f1d24] text-white', off = 'text-zinc-400 hover:text-white';
    $('b-m').className = 'rounded-full px-4 py-2 font-medium ' + (yearly ? off : on);
    $('b-y').className = 'rounded-full px-4 py-2 font-medium ' + (yearly ? on : off);
    $('b-m').setAttribute('aria-pressed', !yearly); $('b-y').setAttribute('aria-pressed', yearly);
}
$('b-m').onclick = () => { yearly = false; renderPlans() }; $('b-y').onclick = () => { yearly = true; renderPlans() }; renderPlans();

const faq = [
    ['O que é o StreamerKit?', 'StreamerKit é uma plataforma de OBS na nuvem que permite transmitir profissionalmente de qualquer lugar, para múltiplas plataformas simultaneamente (Twitch, Kick, YouTube e qualquer destino RTMP), sem precisar de um PC potente. Configure tudo em 5 minutos.'],
    ['O que é OBS na nuvem?', 'OBS na nuvem significa que uma instância completa do OBS Studio roda em servidores dedicados. Você acessa pelo navegador ou via OBS local. Cenários, overlays e configurações ficam salvos na nuvem. O servidor cuida de toda a codificação e distribuição para as plataformas.'],
    ['Qual a diferença entre o plano Básico e o Avançado?', 'Básico (R$119,90/mês): 1 Ingest, dashboard, controle via OBS local. Avançado (R$499,90/mês): OBS na nuvem, streaming multi-plataforma simultâneo, 2 Ingests, acesso remoto via navegador. O plano Avançado é para streamers que querem a experiência completa na nuvem. No plano anual você paga R$1.199,00 (Básico) ou R$4.999,00 (Avançado) por ano, o equivalente a 10 meses.'],
    ['No plano Básico eu preciso deixar meu PC sempre ligado?', 'Sim. No plano Básico o OBS roda no seu PC e o StreamerKit fornece o ingest na nuvem, o dashboard e a proteção contra desconexão. Por isso o seu PC (com o OBS aberto) precisa ficar ligado durante toda a live. Se você quer transmitir sem depender de um PC ligado, o plano Avançado inclui o OBS na nuvem: ele roda nos nossos servidores 24/7 e você controla tudo pelo navegador ou pelo celular.'],
    ['Para quais plataformas posso transmitir?', 'Todas as plataformas. Integração de login com Twitch e Kick. Você também pode adicionar qualquer destino RTMP personalizado diretamente no painel (YouTube, Facebook, etc.). Multi-plataforma simultâneo a partir de uma única transmissão.'],
    ['Como o StreamerKit economiza meus dados móveis?', 'O StreamerKit usa codificação H.265 (HEVC) na conexão entre seu dispositivo e o servidor, que usa significativamente menos banda que o H.264. O servidor então transcodifica e distribui para todas as plataformas — você faz upload apenas uma vez, em um codec eficiente.'],
    ['Quanto tempo leva para configurar?', '5 minutos. Cadastre-se, conecte suas plataformas de streaming e pronto. Sem software para instalar no plano Avançado (OBS na nuvem). No plano Básico, basta apontar seu OBS local para o StreamerKit.'],
    ['Como fazer live sem PC gamer?', 'O servidor na nuvem cuida de toda a codificação. Um notebook básico ou celular com conexão estável é suficiente. O servidor faz o trabalho pesado. Perfeito também para streaming IRL.'],
    ['O que acontece se minha internet cair durante a live?', 'O StreamerKit tem proteção contra desconexão. Quando o emissor perde conexão, o servidor na nuvem troca automaticamente para uma cena offline (tela de BRB/espera) para manter a stream no ar. Quando reconecta, volta ao feed ao vivo. Sua stream nunca cai — apenas a fonte de vídeo muda temporariamente.'],
    ['Qual a diferença entre StreamerKit e usar OBS no meu PC?', 'O OBS local consome CPU/GPU e exige internet robusta para cada plataforma. O StreamerKit transfere a codificação para servidores na nuvem, libera seu PC para jogos, adiciona multi-plataforma simultâneo, acesso remoto, proteção contra desconexão e configurações salvas na nuvem.'],
    ['O StreamerKit suporta SRTLA bonding para IRL?', 'Sim. O StreamerKit suporta SRTLA bonding, que agrega múltiplas conexões de internet — por exemplo, Wi-Fi + 4G + 5G — em uma única transmissão estável. Isso é essencial para streaming IRL onde redes móveis são instáveis. Configure seu encoder para enviar via SRTLA e o servidor combina as conexões automaticamente. Também oferecemos SRT direto como alternativa.'],
    ['O StreamerKit funciona bem em redes móveis instáveis (4G/5G)?', 'Sim. A combinação de SRTLA bonding (agregação de múltiplas conexões), protocolo SRT (recuperação de pacotes perdidos), codificação H.265/HEVC (menor uso de banda) e proteção contra desconexão (BRB automático) garante transmissões estáveis mesmo em 4G/5G com sinal fraco. Temos ingests no Brasil, EUA e Europa para que você sempre se conecte ao servidor mais próximo.'],
    ['Quais encoders são compatíveis com o StreamerKit?', 'O StreamerKit é compatível com qualquer encoder que suporte SRT ou SRTLA, incluindo Moblin (iOS/Android), Larix Broadcaster, LiveU, TVU, OBS Studio e FFmpeg. Para streaming IRL, recomendamos Moblin com SRTLA bonding para máxima estabilidade em redes móveis.']];
$('faqs').innerHTML = faq.map(([q, a]) => `<details class="spot group rounded-xl border border-white/10 bg-white/[0.04]"><summary class="flex cursor-pointer items-center justify-between gap-4 p-5 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 rounded-xl">${q}<svg class="chev h-4 w-4 shrink-0 text-zinc-500 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6" /></svg></summary><p class="px-5 pb-5 text-sm leading-6 text-zinc-400">${a}</p></details>`).join('');


document.documentElement.classList.add('js');
const bar = $('bar'); const onS = () => bar.dataset.s = scrollY > 10 ? 1 : 0; onS(); addEventListener('scroll', onS, { passive: true });
$('menu').onclick = e => { const m = $('mnav'), o = m.classList.toggle('hidden'); m.classList.toggle('flex', !o); e.currentTarget.setAttribute('aria-expanded', !o) };
$('mnav').onclick = e => { if (e.target.closest('a')) { $('mnav').classList.add('hidden'); $('mnav').classList.remove('flex') } };
document.addEventListener('mousemove', e => { const c = e.target.closest && e.target.closest('.spot'); if (!c) return; const r = c.getBoundingClientRect(); c.style.setProperty('--x', e.clientX - r.left + 'px'); c.style.setProperty('--y', e.clientY - r.top + 'px') });
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }), { threshold: .12 });
document.querySelectorAll('main > section > div').forEach(d => { d.classList.add('rv'); io.observe(d) });
if (!matchMedia('(prefers-reduced-motion:reduce)').matches) { setInterval(() => { $('br').textContent = (7.9 + Math.random() * 1.1).toFixed(1).replace('.', ',') + ' Mbps' }, 1800) }
