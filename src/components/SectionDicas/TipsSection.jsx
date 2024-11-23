import React from "react";

function TipsSection() {
  const tips = [
    {
      icon: "🐾", // Substitua por ícones ou imagens reais
      title: "Apoio ao Adotante",
      description: "Adotar um pet é um compromisso que vai além da entrega. Não só conectamos você a animais em busca de um lar, mas também oferecemos todo o apoio necessário durante a adaptação e cuidados.",
    },
    {
      icon: "🍖",
      title: "Alimentação",
      description: "Saiba dietas equilibradas, aprenda sobre dietas caseiras, escolha a melhor ração e muito mais.",
    },
    {
      icon: "🏡",
      title: "Adoção",
      description: "Descubra novos companheiros, dicas, o que fazer e tudo o que você precisa saber para adotar um pet.",
    },
    {
      icon: "🩺",
      title: "Saúde",
      description: "Aprenda tudo o que precisa saber sobre a saúde do seu pet e proteja seu pet de doenças.",
    },
    {
      icon: "🧼",
      title: "Cuidados",
      description: "Entenda o cio, gestação, higiene dental, cuidados dos pelos e muito mais.",
    },
    {
      icon: "📖",
      title: "Histórico de Adoções",
      description: "Cada pet que encontra um lar é uma história de amor e dedicação. Com a nossa plataforma, o processo de adoção é mais transparente e eficiente. ",
    },
  ];

  return (
    <section id="tips" className="py-5" style={{backgroundColor:'#FFF9E7'}}>
      <div className="container text-center">
        <h2 className="mb-4">Saiba dicas essenciais para dar o conforto que o seu pet merece!</h2>
        <div className="row mt-5">
          {tips.map((tip, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="mb-3" style={{ fontSize: "2rem" }}>
                    {tip.icon}
                  </div>
                  <h5 className="card-title">{tip.title}</h5>
                  <p className="card-text">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TipsSection;
