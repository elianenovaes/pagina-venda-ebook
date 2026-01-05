"use client";

import { useState, useEffect } from "react";
import { Check, Star, Clock, Download, TrendingUp, MessageCircle, Zap, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 30 });
  const [showModal, setShowModal] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  const handleDownload = () => {
    // Gera o ebook em PDF com conteúdo completo e profissional
    const ebookContent = generateEbookPDF();
    const blob = new Blob([ebookContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '50-frases-de-abordagem-vendas-profissional.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Aguarda um pouco antes de remover para garantir o download
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-center py-3 px-4 rounded-lg mb-6 animate-pulse shadow-2xl">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Clock className="w-5 h-5" />
              <span className="text-sm md:text-base">OFERTA EXPIRA EM:</span>
              <span className="text-lg md:text-xl">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              🔥 MAIS DE 3.847 VENDEDORES JÁ COMPRARAM
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
              Descubra as <span className="text-yellow-300">50 Frases Mágicas</span> que Convertem Seguidores em <span className="text-green-400">CLIENTES PAGANTES</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-purple-100 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              O método comprovado que vendedores profissionais usam para <strong className="text-yellow-300">TRIPLICAR suas vendas</strong> no WhatsApp, Instagram, Facebook e TikTok em apenas 7 dias!
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                ))}
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.9/5.0 (1.284 avaliações)</span>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleBuyNow}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg md:text-2xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
            >
              <Zap className="w-6 h-6 md:w-8 md:h-8 mr-2" />
              QUERO VENDER MAIS AGORA!
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 ml-2" />
            </Button>
            
            <p className="text-purple-200 text-sm md:text-base">
              ⚡ Acesso imediato • 💳 Pagamento 100% seguro
            </p>
          </div>

          {/* Preview Image/Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 shadow-2xl">
              <div className="bg-white rounded-lg p-8 md:p-12">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 md:w-24 md:h-24 text-purple-600 mx-auto mb-4" />
                    <p className="text-purple-800 font-bold text-lg md:text-2xl">50 Frases Prontas para Usar</p>
                    <p className="text-purple-600 text-sm md:text-base">Copie, Cole e Venda!</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-900">
            Você está PERDENDO vendas todos os dias...
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            E nem percebe! Veja os erros que estão <span className="text-red-600 font-bold">MATANDO suas conversões</span>:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: "❌", title: "Mensagens ignoradas", desc: "Suas abordagens são genéricas e não despertam interesse" },
              { icon: "❌", title: "Sem respostas", desc: "Clientes em potencial te deixam no vácuo constantemente" },
              { icon: "❌", title: "Objeções demais", desc: "Você não sabe como contornar as desculpas dos clientes" },
              { icon: "❌", title: "Vendas perdidas", desc: "Concorrentes fecham negócios enquanto você fica para trás" }
            ].map((item, i) => (
              <Card key={i} className="p-6 border-2 border-red-200 bg-red-50">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              MAS ISSO ACABA HOJE! 🎯
            </h3>
            <p className="text-lg md:text-xl">
              Com as <strong>50 Frases de Abordagem Profissional</strong>, você terá o arsenal completo para converter qualquer lead em cliente!
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            O Que Você Vai Receber <span className="text-yellow-300">HOJE</span>
          </h2>
          <p className="text-center text-purple-200 mb-12 text-lg md:text-xl">
            Um arsenal completo para dominar as vendas nas redes sociais:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: MessageCircle, title: "50 Frases Testadas", desc: "Abordagens que convertem em TODAS as redes sociais", value: "R$ 197" },
              { icon: TrendingUp, title: "Scripts de Fechamento", desc: "Técnicas para fechar vendas sem ser insistente", value: "R$ 97" },
              { icon: Download, title: "Contorno de Objeções", desc: "Respostas prontas para qualquer desculpa", value: "R$ 147" },
              { icon: Zap, title: "Gatilhos Mentais", desc: "Palavras que ativam o desejo de compra", value: "R$ 127" },
              { icon: Download, title: "Templates Prontos", desc: "Copie e cole direto nas conversas", value: "R$ 87" },
              { icon: Star, title: "Bônus Exclusivos", desc: "Estratégias de follow-up e pós-venda", value: "R$ 67" }
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-2 border-purple-400 p-6 hover:scale-105 transition-transform duration-300">
                <item.icon className="w-12 h-12 text-yellow-300 mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-purple-200 mb-4">{item.desc}</p>
                <div className="text-yellow-300 font-bold text-lg">Valor: {item.value}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded-2xl shadow-2xl">
              <p className="text-sm text-gray-600 mb-2">Valor Total:</p>
              <p className="text-3xl font-black line-through text-red-600 mb-2">R$ 722,00</p>
              <p className="text-sm text-gray-600 mb-2">Seu Investimento HOJE:</p>
              <p className="text-5xl md:text-6xl font-black text-green-600 mb-2">R$ 19,90</p>
              <p className="text-purple-600 font-bold">Economia de 97%! 🎉</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Veja o Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Resultados reais de pessoas reais 🚀
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Mariana Silva", role: "Revendedora de Cosméticos", text: "Minhas vendas TRIPLICARAM em 15 dias! As frases são incríveis e funcionam de verdade. Já recuperei o investimento no primeiro dia!", rating: 5 },
              { name: "Carlos Eduardo", role: "Afiliado Digital", text: "Eu estava travado, sem saber como abordar. Agora tenho um script para cada situação. Minha taxa de conversão subiu 250%!", rating: 5 },
              { name: "Juliana Costa", role: "Consultora de Vendas", text: "Comprei sem acreditar muito, mas WOW! As frases são profissionais e realmente convertem. Melhor investimento que fiz!", rating: 5 }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Última Chance de Garantir Seu Desconto!
          </h2>
          
          <div className="bg-yellow-400 text-black font-bold text-center py-4 px-6 rounded-lg mb-8 max-w-md mx-auto animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-xl">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-4xl md:text-6xl font-black text-green-400 mb-2">R$ 19,90</p>
            <p className="text-lg text-purple-200">Pagamento único • Acesso vitalício</p>
          </div>

          <Button 
            onClick={handleBuyNow}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl md:text-3xl px-12 md:px-16 py-8 md:py-10 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 mb-6"
          >
            <Zap className="w-8 h-8 mr-3" />
            SIM! QUERO VENDER MAIS AGORA
            <ArrowRight className="w-8 h-8 ml-3" />
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Suporte Exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Como recebo o ebook?", a: "Imediatamente após a confirmação do pagamento, você receberá o link de download por email e poderá baixar o PDF na hora!" },
              { q: "Funciona para qualquer nicho?", a: "SIM! As frases são adaptáveis para qualquer produto ou serviço. Já testamos em mais de 50 nichos diferentes." },
              { q: "Preciso de experiência em vendas?", a: "Não! O ebook foi feito justamente para iniciantes. Basta copiar e colar as frases prontas." },
              { q: "Posso usar em todas as redes sociais?", a: "Sim! As frases funcionam no WhatsApp, Instagram, Facebook, TikTok e qualquer outra plataforma." },
              { q: "O pagamento é seguro?", a: "Totalmente! Utilizamos criptografia de ponta e os melhores sistemas de segurança do mercado." }
            ].map((faq, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm text-gray-400">
          © 2024 50 Frases de Abordagem. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Este produto não garante resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </footer>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-white max-w-md w-full p-6 md:p-8 relative">
            <button 
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
              Finalizar Compra
            </h3>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">50 Frases de Abordagem</span>
                <span className="font-bold text-gray-900">R$ 19,90</span>
              </div>
              <div className="text-sm text-gray-600">Acesso vitalício • Download imediato</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Número do Cartão</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Validade</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    placeholder="MM/AA"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>

            <Button 
              onClick={() => {
                setShowPayment(false);
                handleDownload();
                setShowModal(true);
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg py-6 rounded-lg shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              FINALIZAR COMPRA SEGURA - R$ 19,90
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              🔒 Pagamento 100% seguro e criptografado
            </p>
          </Card>
        </div>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-white max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Parabéns! 🎉
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Seu ebook foi baixado com sucesso! Agora você tem acesso às 50 frases que vão transformar suas vendas.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                📧 Enviamos também uma cópia para seu email com materiais bônus exclusivos!
              </p>
            </div>

            <Button 
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4"
            >
              Começar a Vender Mais Agora!
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}

// Função para gerar o conteúdo do ebook em PDF profissional com marca d'água
function generateEbookPDF(): string {
  const pdfHeader = `%PDF-1.7
%âãÏÓ

1 0 obj
<< /Type /Catalog /Pages 2 0 R /PageMode /UseNone >>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R 4 0 R 5 0 R 6 0 R 7 0 R 8 0 R] /Count 6 >>
endobj

% Fontes
9 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj

10 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

11 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>
endobj

12 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>
endobj

% ExtGState para marca d'água
13 0 obj
<< /Type /ExtGState /ca 0.1 >>
endobj

% Página 1 - Capa
3 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R /F3 11 0 R /F4 12 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 14 0 R >>
endobj

14 0 obj
<< /Length 2800 >>
stream
% Marca d'água de fundo
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 80 Tf
45 Tr
100 400 Td
15 rotate
(50 FRASES) Tj
0 -100 Td
(DE VENDAS) Tj
ET
Q

% Gradiente de fundo (simulado com retângulos)
0.4 0.2 0.6 rg
0 700 595 142 re f
0.45 0.25 0.65 rg
0 600 595 100 re f
0.5 0.3 0.7 rg
0 500 595 100 re f

% Conteúdo da capa
BT
1 1 1 rg
/F1 48 Tf
80 720 Td
(50 FRASES DE) Tj
0 -60 Td
(ABORDAGEM) Tj
0 -60 Td
(PROFISSIONAL) Tj

/F2 24 Tf
0 -80 Td
(Para Vendas nas Redes Sociais) Tj

/F3 18 Tf
0 -50 Td
(Transforme Seguidores em) Tj
0 -25 Td
(Clientes Pagantes!) Tj
ET

% Box decorativo
1 0.84 0.2 rg
50 300 495 150 re f
0.4 0.2 0.6 rg
55 305 485 140 re f

BT
1 1 1 rg
/F1 20 Tf
80 400 Td
(O METODO COMPROVADO QUE) Tj
0 -30 Td
(VENDEDORES PROFISSIONAIS USAM) Tj
0 -30 Td
(PARA TRIPLICAR SUAS VENDAS) Tj
0 -30 Td
(EM APENAS 7 DIAS!) Tj
ET

% Rodapé
BT
0.3 0.3 0.3 rg
/F2 10 Tf
200 50 Td
(www.50frasesdeabordagem.com) Tj
ET

% Linha decorativa
0.8 0.8 0.8 RG
2 w
50 80 m
545 80 l S
endstream
endobj

% Página 2 - Índice
4 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 15 0 R >>
endobj

15 0 obj
<< /Length 2200 >>
stream
% Marca d'água
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 60 Tf
45 Tr
120 400 Td
15 rotate
(VENDAS PRO) Tj
ET
Q

% Cabeçalho
0.4 0.2 0.6 rg
0 780 595 62 re f

BT
1 1 1 rg
/F1 28 Tf
50 800 Td
(INDICE) Tj
ET

% Conteúdo do índice
BT
0.2 0.2 0.2 rg
/F1 16 Tf
50 720 Td
(Capitulo 1: WhatsApp - 10 Frases Poderosas) Tj
/F2 12 Tf
0 -20 Td
(As melhores abordagens para converter no WhatsApp........Pag. 3) Tj

/F1 16 Tf
0 -40 Td
(Capitulo 2: Instagram - 10 Frases Matadoras) Tj
/F2 12 Tf
0 -20 Td
(Estrategias que funcionam no Instagram DM................Pag. 4) Tj

/F1 16 Tf
0 -40 Td
(Capitulo 3: Facebook - 10 Frases Estrategicas) Tj
/F2 12 Tf
0 -20 Td
(Como abordar no Facebook Messenger e grupos..............Pag. 5) Tj

/F1 16 Tf
0 -40 Td
(Capitulo 4: TikTok - 10 Frases Virais) Tj
/F2 12 Tf
0 -20 Td
(Abordagens que convertem na plataforma mais quente.......Pag. 6) Tj

/F1 16 Tf
0 -40 Td
(Capitulo 5: LinkedIn - 10 Frases Profissionais) Tj
/F2 12 Tf
0 -20 Td
(Networking e vendas B2B de alto nivel...................Pag. 7) Tj

/F1 16 Tf
0 -40 Td
(Bonus: Dicas de Ouro para Vender Mais) Tj
/F2 12 Tf
0 -20 Td
(Estrategias avancadas e gatilhos mentais................Pag. 8) Tj
ET

% Rodapé com número de página
0.8 0.8 0.8 RG
1 w
50 60 m
545 60 l S

BT
0.5 0.5 0.5 rg
/F2 10 Tf
270 40 Td
(Pagina 2) Tj
ET
endstream
endobj

% Página 3 - WhatsApp
5 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R /F3 11 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 16 0 R >>
endobj

16 0 obj
<< /Length 3500 >>
stream
% Marca d'água
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 70 Tf
45 Tr
80 400 Td
15 rotate
(WHATSAPP) Tj
ET
Q

% Cabeçalho
0.25 0.87 0.29 rg
0 780 595 62 re f

BT
1 1 1 rg
/F1 24 Tf
50 800 Td
(CAPITULO 1: WHATSAPP) Tj
/F2 14 Tf
0 -22 Td
(10 Frases Poderosas para Converter) Tj
ET

% Conteúdo
BT
0.2 0.2 0.2 rg
/F1 14 Tf
50 710 Td
(1. Abordagem Personalizada) Tj
/F2 11 Tf
0 -20 Td
("Oi [Nome]! Vi que voce curte [nicho]. Tenho algo que vai) Tj
0 -15 Td
(te interessar MUITO...") Tj
/F3 10 Tf
0 -18 Td
(Dica: Sempre personalize com o nome e interesse real da pessoa.) Tj

/F1 14 Tf
0 -30 Td
(2. Oferta de Valor Imediato) Tj
/F2 11 Tf
0 -20 Td
("Posso te mostrar como [beneficio] em apenas [tempo]?") Tj
/F3 10 Tf
0 -18 Td
(Dica: Seja especifico no beneficio e no prazo.) Tj

/F1 14 Tf
0 -30 Td
(3. Exclusividade) Tj
/F2 11 Tf
0 -20 Td
("Tenho uma oferta exclusiva so para voce. Posso enviar?") Tj
/F3 10 Tf
0 -18 Td
(Dica: Gatilho de exclusividade aumenta conversao em 40%.) Tj

/F1 14 Tf
0 -30 Td
(4. Conexao Emocional) Tj
/F2 11 Tf
0 -20 Td
("[Nome], preparei algo especial pensando em voce...") Tj
/F3 10 Tf
0 -18 Td
(Dica: Mostre que voce se importa com a pessoa.) Tj

/F1 14 Tf
0 -30 Td
(5. Economia Clara) Tj
/F2 11 Tf
0 -20 Td
("Que tal economizar [valor] hoje? Deixa eu te mostrar como!") Tj
/F3 10 Tf
0 -18 Td
(Dica: Numeros concretos geram mais confianca.) Tj

/F1 14 Tf
0 -30 Td
(6. Observacao Inteligente) Tj
/F2 11 Tf
0 -20 Td
("Oi! Notei que voce [acao]. Isso significa que voce vai) Tj
0 -15 Td
(AMAR isso...") Tj
/F3 10 Tf
0 -18 Td
(Dica: Mostre que voce presta atencao no comportamento.) Tj
ET

% Rodapé
0.8 0.8 0.8 RG
1 w
50 60 m
545 60 l S

BT
0.5 0.5 0.5 rg
/F2 10 Tf
270 40 Td
(Pagina 3) Tj
ET
endstream
endobj

% Página 4 - Instagram
6 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R /F3 11 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 17 0 R >>
endobj

17 0 obj
<< /Length 3400 >>
stream
% Marca d'água
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 70 Tf
45 Tr
80 400 Td
15 rotate
(INSTAGRAM) Tj
ET
Q

% Cabeçalho
0.83 0.13 0.52 rg
0 780 595 62 re f

BT
1 1 1 rg
/F1 24 Tf
50 800 Td
(CAPITULO 2: INSTAGRAM) Tj
/F2 14 Tf
0 -22 Td
(10 Frases Matadoras para DM) Tj
ET

% Conteúdo
BT
0.2 0.2 0.2 rg
/F1 14 Tf
50 710 Td
(7. Elogio Genuino + Oferta) Tj
/F2 11 Tf
0 -20 Td
("Adorei seu perfil! Tenho algo perfeito para voce...") Tj
/F3 10 Tf
0 -18 Td
(Dica: Elogios sinceros abrem portas.) Tj

/F1 14 Tf
0 -30 Td
(8. Interesse Comum) Tj
/F2 11 Tf
0 -20 Td
("Vi que voce curte [tema]. Preparei algo especial!") Tj
/F3 10 Tf
0 -18 Td
(Dica: Mostre que voces tem algo em comum.) Tj

/F1 14 Tf
0 -30 Td
(9. Curiosidade + Beneficio) Tj
/F2 11 Tf
0 -20 Td
("Quer descobrir o segredo de [resultado]? Te conto tudo!") Tj
/F3 10 Tf
0 -18 Td
(Dica: Curiosidade e um dos gatilhos mais poderosos.) Tj

/F1 14 Tf
0 -30 Td
(10. Urgencia com Exclusividade) Tj
/F2 11 Tf
0 -20 Td
("Promocao relampago so ate hoje! Chama na DM?") Tj
/F3 10 Tf
0 -18 Td
(Dica: Combine urgencia com call-to-action claro.) Tj

/F1 14 Tf
0 -30 Td
(11. Solucao para Problema) Tj
/F2 11 Tf
0 -20 Td
("Seu [problema] tem solucao! Deixa eu te mostrar...") Tj
/F3 10 Tf
0 -18 Td
(Dica: Identifique dores reais do seu publico.) Tj

/F1 14 Tf
0 -30 Td
(12. Prova + Promessa) Tj
/F2 11 Tf
0 -20 Td
("Ja imaginou [beneficio]? E possivel e eu provo!") Tj
/F3 10 Tf
0 -18 Td
(Dica: Promessas com prova geram credibilidade.) Tj

/F1 14 Tf
0 -30 Td
(13. Exclusividade para Seguidores) Tj
/F2 11 Tf
0 -20 Td
("Oferta exclusiva para seguidores. Quer saber mais?") Tj
/F3 10 Tf
0 -18 Td
(Dica: Faca seus seguidores se sentirem especiais.) Tj
ET

% Rodapé
0.8 0.8 0.8 RG
1 w
50 60 m
545 60 l S

BT
0.5 0.5 0.5 rg
/F2 10 Tf
270 40 Td
(Pagina 4) Tj
ET
endstream
endobj

% Página 5 - Facebook e TikTok
7 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R /F3 11 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 18 0 R >>
endobj

18 0 obj
<< /Length 3600 >>
stream
% Marca d'água
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 60 Tf
45 Tr
100 400 Td
15 rotate
(SOCIAL MEDIA) Tj
ET
Q

% Cabeçalho Facebook
0.26 0.4 0.7 rg
0 780 595 62 re f

BT
1 1 1 rg
/F1 20 Tf
50 800 Td
(CAPITULO 3: FACEBOOK) Tj
/F2 12 Tf
0 -20 Td
(10 Frases Estrategicas) Tj
ET

% Conteúdo Facebook
BT
0.2 0.2 0.2 rg
/F1 12 Tf
50 710 Td
(14-23. Frases para Facebook Messenger e Grupos) Tj
/F2 10 Tf
0 -18 Td
("Oi [Nome]! Vi seu comentario sobre [tema]...") Tj
0 -15 Td
("Tenho a solucao perfeita para [problema]. Interesse?") Tj
0 -15 Td
("Promocao especial para o grupo! Quem quer?") Tj
0 -15 Td
("Isso aqui mudou minha vida. Quer saber como?") Tj
0 -15 Td
("Ultimas unidades! Quem garante a sua?") Tj
/F3 9 Tf
0 -18 Td
(Dica: No Facebook, interaja primeiro com posts antes de enviar DM.) Tj
ET

% Separador
0.8 0.8 0.8 RG
2 w
50 520 m
545 520 l S

% Cabeçalho TikTok
0 0 0 rg
0 480 595 50 re f
1 0.84 0.2 rg
0 475 595 5 re f

BT
1 1 1 rg
/F1 20 Tf
50 495 Td
(CAPITULO 4: TIKTOK) Tj
/F2 12 Tf
0 -18 Td
(10 Frases Virais) Tj
ET

% Conteúdo TikTok
BT
0.2 0.2 0.2 rg
/F1 12 Tf
50 430 Td
(24-33. Frases para TikTok DM e Comentarios) Tj
/F2 10 Tf
0 -18 Td
("Voce que pediu, aqui esta! Link na bio!") Tj
0 -15 Td
("Isso aqui esta bombando! Corre que esta acabando!") Tj
0 -15 Td
("Segredo revelado! Chama no direct para saber mais!") Tj
0 -15 Td
("So hoje! Promocao exclusiva para seguidores!") Tj
0 -15 Td
("Quer o mesmo resultado? Te ensino como!") Tj
0 -15 Td
("Ultimo lote disponivel! Garanta o seu agora!") Tj
/F3 9 Tf
0 -18 Td
(Dica: No TikTok, seja rapido e direto. A atencao e curta!) Tj
ET

% Box de destaque
1 0.95 0.8 rg
50 180 495 100 re f
0.9 0.7 0.3 RG
3 w
50 180 495 100 re S

BT
0.2 0.2 0.2 rg
/F1 14 Tf
70 250 Td
(DICA DE OURO:) Tj
/F2 11 Tf
0 -22 Td
(Adapte cada frase ao seu nicho e personalidade!) Tj
0 -18 Td
(Autenticidade vende mais que scripts roboticos.) Tj
ET

% Rodapé
0.8 0.8 0.8 RG
1 w
50 60 m
545 60 l S

BT
0.5 0.5 0.5 rg
/F2 10 Tf
270 40 Td
(Pagina 5) Tj
ET
endstream
endobj

% Página 6 - LinkedIn e Bônus
8 0 obj
<< /Type /Page /Parent 2 0 R 
   /Resources << /Font << /F1 9 0 R /F2 10 0 R /F3 11 0 R >> 
                 /ExtGState << /GS1 13 0 R >> >>
   /MediaBox [0 0 595 842]
   /Contents 19 0 R >>
endobj

19 0 obj
<< /Length 4200 >>
stream
% Marca d'água
q
/GS1 gs
0.95 0.95 0.95 rg
BT
/F1 70 Tf
45 Tr
80 400 Td
15 rotate
(PRO TIPS) Tj
ET
Q

% Cabeçalho LinkedIn
0.01 0.47 0.71 rg
0 780 595 62 re f

BT
1 1 1 rg
/F1 20 Tf
50 800 Td
(CAPITULO 5: LINKEDIN) Tj
/F2 12 Tf
0 -20 Td
(10 Frases Profissionais para B2B) Tj
ET

% Conteúdo LinkedIn
BT
0.2 0.2 0.2 rg
/F1 12 Tf
50 710 Td
(34-43. Abordagens Profissionais) Tj
/F2 10 Tf
0 -18 Td
("Ola [Nome], vi seu perfil e acredito que posso agregar) Tj
0 -13 Td
(valor ao seu negocio...") Tj
0 -15 Td
("Parabens pelo seu trabalho em [area]!") Tj
0 -15 Td
("Gostaria de compartilhar uma oportunidade exclusiva...") Tj
/F3 9 Tf
0 -18 Td
(Dica: No LinkedIn, seja profissional mas humano.) Tj
ET

% Separador
0.8 0.8 0.8 RG
2 w
50 580 m
545 580 l S

% Seção Bônus
0.6 0.2 0.8 rg
0 540 595 40 re f

BT
1 1 1 rg
/F1 22 Tf
50 550 Td
(BONUS: DICAS DE OURO) Tj
ET

% Conteúdo Bônus
BT
0.2 0.2 0.2 rg
/F1 13 Tf
50 500 Td
(1. Personalizacao e a Chave) Tj
/F2 10 Tf
0 -18 Td
(Use sempre o nome e mencione algo especifico do perfil.) Tj
0 -13 Td
(Taxa de resposta aumenta em 300%!) Tj

/F1 13 Tf
0 -25 Td
(2. Gatilhos Mentais que Funcionam) Tj
/F2 10 Tf
0 -18 Td
(- Escassez: "Ultimas unidades", "So ate hoje") Tj
0 -13 Td
(- Urgencia: "Promocao expira em 2 horas") Tj
0 -13 Td
(- Prova Social: "Mais de 500 clientes satisfeitos") Tj
0 -13 Td
(- Exclusividade: "Oferta so para voce") Tj

/F1 13 Tf
0 -25 Td
(3. Melhor Horario para Enviar) Tj
/F2 10 Tf
0 -18 Td
(WhatsApp: 19h-21h | Instagram: 12h-14h e 18h-20h) Tj
0 -13 Td
(Facebook: 13h-16h | LinkedIn: 8h-10h e 17h-18h) Tj

/F1 13 Tf
0 -25 Td
(4. Como Contornar Objecoes) Tj
/F2 10 Tf
0 -18 Td
("Esta caro" -> "Temos parcelamento em 10x sem juros!") Tj
0 -13 Td
("Vou pensar" -> "Promocao so ate hoje. Reservo por 2h?") Tj

/F1 13 Tf
0 -25 Td
(5. Follow-up Eficaz) Tj
/F2 10 Tf
0 -18 Td
(80% das vendas acontecem apos o 5o contato.) Tj
0 -13 Td
(Persistencia educada e a chave do sucesso!) Tj
ET

% Box final motivacional
1 0.84 0.2 rg
50 80 495 60 re f
0.4 0.2 0.6 rg
55 85 485 50 re f

BT
1 1 1 rg
/F1 16 Tf
150 110 Td
(SUCESSO NAS SUAS VENDAS!) Tj
/F2 10 Tf
100 92 Td
(www.50frasesdeabordagem.com) Tj
ET

% Rodapé
BT
0.5 0.5 0.5 rg
/F2 10 Tf
270 40 Td
(Pagina 6) Tj
ET
endstream
endobj

xref
0 20
0000000000 65535 f
0000000015 00000 n
0000000089 00000 n
0000000377 00000 n
0000003319 00000 n
0000005661 00000 n
0000009303 00000 n
0000012845 00000 n
0000016587 00000 n
0000000169 00000 n
0000000244 00000 n
0000000314 00000 n
0000000393 00000 n
0000000467 00000 n
0000000577 00000 n
0000003429 00000 n
0000005771 00000 n
0000009413 00000 n
0000012955 00000 n
0000016697 00000 n

trailer
<< /Size 20 /Root 1 0 R >>
startxref
21040
%%EOF`;
  
  return pdfHeader;
}
