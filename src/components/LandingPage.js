import React, { useEffect } from 'react';
import './styles.css';

const LandingPage = () => {
  const [showEvent, setShowEvent] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const subsection1 = document.querySelector('.subsection-1');
      const subsection2 = document.querySelector('.subsection-2');

      if (scrollTop > subsection1.offsetTop - window.innerHeight / 2) {
        setShowEvent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Seção 1: Introdução */}
      <div className="section-1">
        <h1>Bem-vindo ao Investments Website</h1>
        <p>Aqui você encontrará informações sobre nossos produtos e serviços de investimentos.</p>
        <button className="button-center">Saiba Mais</button>
      </div>

      {/* Seção 2: Copy para investimentos */}
      <div className="section-2">
        <h2>Copy para investimentos</h2>
        <p>Aqui você encontrará informações sobre nossos produtos e serviços de investimentos.</p>
        <p>Investir é uma das decisões financeiras mais importantes que uma pessoa pode tomar ao longo da vida. Muito além de apenas guardar dinheiro, investir é colocar seu capital para trabalhar com o objetivo de gerar crescimento, segurança e liberdade financeira no futuro. Ao contrário da simples poupança, que muitas vezes rende abaixo da inflação, os investimentos oferecem a possibilidade de aumentar seu patrimônio de maneira sustentável e estratégica.

Investir significa aplicar recursos em ativos que possam trazer retorno — seja em forma de renda, valorização ou ambos. Isso pode incluir ações, imóveis, fundos, renda fixa, criptomoedas, entre outros. Cada tipo de investimento possui seu próprio nível de risco, retorno e horizonte de tempo, o que torna essencial entender seu perfil de investidor antes de começar.

Nos últimos anos, o acesso ao mercado financeiro se democratizou: hoje, qualquer pessoa com um celular e conexão à internet pode começar a investir com valores baixos. As corretoras digitais, a educação financeira nas redes e o avanço da tecnologia permitiram que o investimento deixasse de ser algo exclusivo de especialistas e se tornasse uma prática acessível a todos.

Entretanto, apesar dessa facilidade de acesso, investir exige conhecimento, disciplina e planejamento. É preciso entender conceitos como juros compostos, volatilidade, diversificação e liquidez, além de acompanhar as condições econômicas do país e do mundo. A falta de informação ainda leva muitas pessoas a cometerem erros básicos, como aplicar todo o dinheiro em um único ativo ou seguir modismos sem entender os riscos envolvidos.

A boa notícia é que com estudo, orientação adequada e uma estratégia clara, investir se torna uma ferramenta poderosa para atingir objetivos — seja a compra da casa própria, uma aposentadoria tranquila, ou simplesmente conquistar mais liberdade para escolher como viver. Investir bem não é apenas multiplicar dinheiro; é construir uma vida com mais segurança, autonomia e possibilidades.</p>
      <p>Investir é uma das decisões financeiras mais importantes que uma pessoa pode tomar ao longo da vida. Muito além de apenas guardar dinheiro, investir é colocar seu capital para trabalhar com o objetivo de gerar crescimento, segurança e liberdade financeira no futuro. Ao contrário da simples poupança, que muitas vezes rende abaixo da inflação, os investimentos oferecem a possibilidade de aumentar seu patrimônio de maneira sustentável e estratégica.

Investir significa aplicar recursos em ativos que possam trazer retorno — seja em forma de renda, valorização ou ambos. Isso pode incluir ações, imóveis, fundos, renda fixa, criptomoedas, entre outros. Cada tipo de investimento possui seu próprio nível de risco, retorno e horizonte de tempo, o que torna essencial entender seu perfil de investidor antes de começar.

Nos últimos anos, o acesso ao mercado financeiro se democratizou: hoje, qualquer pessoa com um celular e conexão à internet pode começar a investir com valores baixos. As corretoras digitais, a educação financeira nas redes e o avanço da tecnologia permitiram que o investimento deixasse de ser algo exclusivo de especialistas e se tornasse uma prática acessível a todos.

Entretanto, apesar dessa facilidade de acesso, investir exige conhecimento, disciplina e planejamento. É preciso entender conceitos como juros compostos, volatilidade, diversificação e liquidez, além de acompanhar as condições econômicas do país e do mundo. A falta de informação ainda leva muitas pessoas a cometerem erros básicos, como aplicar todo o dinheiro em um único ativo ou seguir modismos sem entender os riscos envolvidos.

A boa notícia é que com estudo, orientação adequada e uma estratégia clara, investir se torna uma ferramenta poderosa para atingir objetivos — seja a compra da casa própria, uma aposentadoria tranquila, ou simplesmente conquistar mais liberdade para escolher como viver. Investir bem não é apenas multiplicar dinheiro; é construir uma vida com mais segurança, autonomia e possibilidades.
Investir é uma das decisões financeiras mais importantes que uma pessoa pode tomar ao longo da vida. Muito além de apenas guardar dinheiro, investir é colocar seu capital para trabalhar com o objetivo de gerar crescimento, segurança e liberdade financeira no futuro. Ao contrário da simples poupança, que muitas vezes rende abaixo da inflação, os investimentos oferecem a possibilidade de aumentar seu patrimônio de maneira sustentável e estratégica.

Investir significa aplicar recursos em ativos que possam trazer retorno — seja em forma de renda, valorização ou ambos. Isso pode incluir ações, imóveis, fundos, renda fixa, criptomoedas, entre outros. Cada tipo de investimento possui seu próprio nível de risco, retorno e horizonte de tempo, o que torna essencial entender seu perfil de investidor antes de começar.

Nos últimos anos, o acesso ao mercado financeiro se democratizou: hoje, qualquer pessoa com um celular e conexão à internet pode começar a investir com valores baixos. As corretoras digitais, a educação financeira nas redes e o avanço da tecnologia permitiram que o investimento deixasse de ser algo exclusivo de especialistas e se tornasse uma prática acessível a todos.

Entretanto, apesar dessa facilidade de acesso, investir exige conhecimento, disciplina e planejamento. É preciso entender conceitos como juros compostos, volatilidade, diversificação e liquidez, além de acompanhar as condições econômicas do país e do mundo. A falta de informação ainda leva muitas pessoas a cometerem erros básicos, como aplicar todo o dinheiro em um único ativo ou seguir modismos sem entender os riscos envolvidos.

A boa notícia é que com estudo, orientação adequada e uma estratégia clara, investir se torna uma ferramenta poderosa para atingir objetivos — seja a compra da casa própria, uma aposentadoria tranquila, ou simplesmente conquistar mais liberdade para escolher como viver. Investir bem não é apenas multiplicar dinheiro; é construir uma vida com mais segurança, autonomia e possibilidades.</p>
      </div>

      {/* Seção 3: Duas subseções */}
      <div className="section-3" id="servicos">
        <div className={`subsection-1 ${showEvent ? 'showEvent' : ''}`}>
          <div className="text-left">
            <p>Gráficos são representações visuais de dados que facilitam a compreensão de informações complexas. Eles ajudam a identificar padrões, tendências e variações de forma rápida e intuitiva. No contexto financeiro, os gráficos são ferramentas essenciais para analisar o comportamento de investimentos, comparações de desempenho e projeções de crescimento. Com eles, é possível tomar decisões mais assertivas com base em dados visuais e objetivos.</p>
          </div>
          <div className="image-right">
            <img src="../images/grafico.png" alt="Imagem 1" className='image-1'/>
          </div>
        </div>
        <div className={`subsection-2 ${showEvent ? 'showEvent' : ''}`}>
          <div className="image-left">
            <img src="../images/robocopy.png" alt="Imagem 2" className='image-2'/>
          </div>
          <div className="text-right">
            <p>Um robô de copy trader é uma ferramenta automatizada que replica, em tempo real, as operações feitas por traders experientes. Com ele, mesmo quem não tem conhecimento avançado em investimentos pode seguir estratégias de profissionais de forma simples e segura. O robô conecta sua conta à de um trader escolhido, copiando suas entradas, saídas e alocação de capital, tudo de forma automatizada. É uma solução prática para quem busca aproveitar oportunidades no mercado sem precisar operar manualmente.</p>
          </div>
        </div>
      </div>

      {/* Seção 4: Planos de assinatura */}
      <div className="section-4" id="planos">
        <h2>Planos de assinatura</h2>
        <div className={`cards ${showEvent ? 'showEvent' : ''}`}>
          <div className="card">
            <h3>Plano Básico</h3>
            <p>R$ 10,00</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="card-button-center">Saiba Mais</button>
          </div>
          <div className="card">
            <h3>Plano Premium</h3>
            <p>R$ 50,00</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="card-button-center">Saiba Mais</button>
          </div>
        </div>
      </div>

      {/* Seção 5: Contato e ajuda */}
      <div className={`section-5 ${showEvent ? 'showEvent' : ''}`} id="sobre-nos">
        <h2>Contato e ajuda</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default LandingPage;