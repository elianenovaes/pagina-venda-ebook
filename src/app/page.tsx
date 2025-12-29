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
    // Gera o ebook em PDF com conteúdo completo
    const ebookContent = generateEbookPDF();
    const blob = new Blob([ebookContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '50-frases-de-abordagem-vendas.pdf';
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

// Função para gerar o conteúdo do ebook em PDF completo
function generateEbookPDF(): string {
  const pdfHeader = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R 4 0 R 5 0 R] /Count 3 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /MediaBox [0 0 612 792] /Contents 8 0 R >>
endobj
4 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /MediaBox [0 0 612 792] /Contents 9 0 R >>
endobj
5 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /MediaBox [0 0 612 792] /Contents 10 0 R >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
7 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
8 0 obj
<< /Length 3200 >>
stream
BT
/F1 28 Tf
50 750 Td
(50 FRASES DE ABORDAGEM) Tj
0 -35 Td
(PARA VENDAS NAS REDES SOCIAIS) Tj
0 -50 Td
/F2 14 Tf
(Transforme Seguidores em Clientes Pagantes!) Tj
0 -60 Td
/F1 18 Tf
(WHATSAPP - 10 Frases Poderosas) Tj
0 -30 Td
/F2 11 Tf
(1. "Oi [Nome]! Vi que voce curte [nicho]. Tenho algo que vai) Tj
0 -15 Td
(   te interessar MUITO...") Tj
0 -20 Td
(2. "Posso te mostrar como [beneficio] em apenas [tempo]?") Tj
0 -20 Td
(3. "Tenho uma oferta exclusiva so para voce. Posso enviar?") Tj
0 -20 Td
(4. "[Nome], preparei algo especial pensando em voce...") Tj
0 -20 Td
(5. "Que tal economizar [valor] hoje? Deixa eu te mostrar como!") Tj
0 -20 Td
(6. "Oi! Notei que voce [acao]. Isso significa que voce vai) Tj
0 -15 Td
(   AMAR isso...") Tj
0 -20 Td
(7. "Posso te fazer uma pergunta rapida sobre [interesse]?") Tj
0 -20 Td
(8. "Tenho so 3 unidades sobrando. Voce quer garantir a sua?") Tj
0 -20 Td
(9. "[Nome], isso aqui vai mudar seu [area]. Posso explicar?") Tj
0 -20 Td
(10. "Ultima chance de aproveitar [oferta]. Interesse?") Tj
0 -35 Td
/F1 18 Tf
(INSTAGRAM - 10 Frases Matadoras) Tj
0 -30 Td
/F2 11 Tf
(11. "Adorei seu perfil! Tenho algo perfeito para voce...") Tj
0 -20 Td
(12. "Vi que voce curte [tema]. Preparei algo especial!") Tj
0 -20 Td
(13. "Quer descobrir o segredo de [resultado]? Te conto tudo!") Tj
0 -20 Td
(14. "Promocao relampago so ate hoje! Chama na DM?") Tj
0 -20 Td
(15. "Seu [problema] tem solucao! Deixa eu te mostrar...") Tj
0 -20 Td
(16. "Ja imaginou [beneficio]? E possivel e eu provo!") Tj
0 -20 Td
(17. "Oferta exclusiva para seguidores. Quer saber mais?") Tj
0 -20 Td
(18. "Isso aqui vendeu TUDO ontem. Separei 1 pra voce!") Tj
0 -20 Td
(19. "Posso te enviar um presente? Sem compromisso!") Tj
0 -20 Td
(20. "Ultimo dia de [oferta]. Nao perca!") Tj
ET
endstream
endobj
9 0 obj
<< /Length 3400 >>
stream
BT
/F1 18 Tf
50 750 Td
(FACEBOOK - 10 Frases Estrategicas) Tj
0 -30 Td
/F2 11 Tf
(21. "Oi [Nome]! Vi seu comentario sobre [tema]...") Tj
0 -20 Td
(22. "Tenho a solucao perfeita para [problema]. Interesse?") Tj
0 -20 Td
(23. "Promocao especial para o grupo! Quem quer?") Tj
0 -20 Td
(24. "Isso aqui mudou minha vida. Quer saber como?") Tj
0 -20 Td
(25. "Ultimas unidades! Quem garante a sua?") Tj
0 -20 Td
(26. "Desconto exclusivo so para voce. Chama inbox!") Tj
0 -20 Td
(27. "Ja pensou em [beneficio]? Tenho como te ajudar!") Tj
0 -20 Td
(28. "Oferta relampago! Valido so ate meia-noite!") Tj
0 -20 Td
(29. "Voce merece [resultado]. Deixa eu te mostrar o caminho!") Tj
0 -20 Td
(30. "Presente especial para novos clientes. Quer o seu?") Tj
0 -35 Td
/F1 18 Tf
(TIKTOK - 10 Frases Virais) Tj
0 -30 Td
/F2 11 Tf
(31. "Voce que pediu, aqui esta! Link na bio!") Tj
0 -20 Td
(32. "Isso aqui esta bombando! Corre que esta acabando!") Tj
0 -20 Td
(33. "Segredo revelado! Chama no direct para saber mais!") Tj
0 -20 Td
(34. "So hoje! Promocao exclusiva para seguidores!") Tj
0 -20 Td
(35. "Quer o mesmo resultado? Te ensino como!") Tj
0 -20 Td
(36. "Ultimo lote disponivel! Garanta o seu agora!") Tj
0 -20 Td
(37. "Isso mudou meu jogo! Quer saber o segredo?") Tj
0 -20 Td
(38. "Promocao relampago! So ate as 23:59h!") Tj
0 -20 Td
(39. "Ja garantiu o seu? Esta acabando rapido!") Tj
0 -20 Td
(40. "Link na bio com desconto especial! Corre!") Tj
0 -35 Td
/F1 18 Tf
(LINKEDIN - 10 Frases Profissionais) Tj
0 -30 Td
/F2 11 Tf
(41. "Ola [Nome], vi seu perfil e acredito que posso agregar) Tj
0 -15 Td
(    valor ao seu negocio...") Tj
0 -20 Td
(42. "Parabens pelo seu trabalho em [area]! Tenho uma solucao) Tj
0 -15 Td
(    que pode potencializar seus resultados.") Tj
0 -20 Td
(43. "Gostaria de compartilhar uma oportunidade exclusiva) Tj
0 -15 Td
(    com voce...") Tj
0 -20 Td
(44. "Notei que trabalhamos com [nicho]. Podemos trocar ideias?") Tj
0 -20 Td
(45. "Tenho uma proposta que pode revolucionar seu [area].) Tj
0 -15 Td
(    Posso apresentar?") Tj
0 -20 Td
(46. "Seu conteudo sobre [tema] e excelente! Tenho algo que) Tj
0 -15 Td
(    complementa perfeitamente...") Tj
0 -20 Td
(47. "Gostaria de discutir uma parceria estrategica. Interesse?") Tj
0 -20 Td
(48. "Tenho uma solucao que esta transformando empresas do) Tj
0 -15 Td
(    seu segmento. Podemos conversar?") Tj
0 -20 Td
(49. "Parabens pela sua trajetoria! Acredito que posso) Tj
0 -15 Td
(    contribuir com [beneficio]...") Tj
0 -20 Td
(50. "Ola! Trabalho com [area] e gostaria de apresentar uma) Tj
0 -15 Td
(    oportunidade unica para voce.") Tj
ET
endstream
endobj
10 0 obj
<< /Length 2800 >>
stream
BT
/F1 22 Tf
50 750 Td
(BONUS: DICAS DE OURO PARA VENDER MAIS) Tj
0 -40 Td
/F1 16 Tf
(1. PERSONALIZACAO E A CHAVE) Tj
0 -25 Td
/F2 11 Tf
(Sempre use o nome da pessoa e mencione algo especifico) Tj
0 -15 Td
(sobre o perfil dela. Isso aumenta em 300% a taxa de resposta!) Tj
0 -30 Td
/F1 16 Tf
(2. GATILHOS MENTAIS QUE FUNCIONAM) Tj
0 -25 Td
/F2 11 Tf
(- Escassez: "Ultimas unidades", "So ate hoje") Tj
0 -15 Td
(- Urgencia: "Promocao expira em 2 horas") Tj
0 -15 Td
(- Prova Social: "Mais de 500 clientes satisfeitos") Tj
0 -15 Td
(- Exclusividade: "Oferta so para voce") Tj
0 -30 Td
/F1 16 Tf
(3. MELHOR HORARIO PARA ENVIAR MENSAGENS) Tj
0 -25 Td
/F2 11 Tf
(- WhatsApp: 19h-21h (horario nobre)) Tj
0 -15 Td
(- Instagram: 12h-14h e 18h-20h) Tj
0 -15 Td
(- Facebook: 13h-16h) Tj
0 -15 Td
(- LinkedIn: 8h-10h e 17h-18h) Tj
0 -30 Td
/F1 16 Tf
(4. COMO CONTORNAR OBJECOES) Tj
0 -25 Td
/F2 11 Tf
("Esta caro" -> "Entendo! Por isso temos parcelamento em ate) Tj
0 -15 Td
(10x sem juros. Fica so R$X por mes!") Tj
0 -20 Td
("Vou pensar" -> "Claro! Mas essa promocao e so ate hoje.) Tj
0 -15 Td
(Posso reservar uma unidade por 2 horas para voce?") Tj
0 -20 Td
("Nao tenho dinheiro agora" -> "Sem problemas! Temos opcoes) Tj
0 -15 Td
(de pagamento flexiveis. Qual seria o melhor para voce?") Tj
0 -30 Td
/F1 16 Tf
(5. FOLLOW-UP EFICAZ) Tj
0 -25 Td
/F2 11 Tf
(Nunca desista no primeiro "nao". Estatisticas mostram que:) Tj
0 -15 Td
(- 80% das vendas acontecem apos o 5o contato) Tj
0 -15 Td
(- Apenas 10% dos vendedores fazem mais de 3 follow-ups) Tj
0 -15 Td
(- A persistencia educada e a chave do sucesso!) Tj
0 -40 Td
/F1 18 Tf
(SUCESSO NAS SUAS VENDAS!) Tj
0 -25 Td
/F2 12 Tf
(Lembre-se: A pratica leva a perfeicao. Teste as frases,) Tj
0 -15 Td
(adapte ao seu estilo e veja suas vendas decolarem!) Tj
0 -30 Td
(Contato: suporte@50frasesdeabordagem.com) Tj
0 -15 Td
(Instagram: @50frasesdeabordagem) Tj
ET
endstream
endobj
xref
0 11
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000127 00000 n
0000000274 00000 n
0000000421 00000 n
0000000568 00000 n
0000000643 00000 n
0000000713 00000 n
0000003965 00000 n
0000007418 00000 n
trailer
<< /Size 11 /Root 1 0 R >>
startxref
10270
%%EOF`;
  
  return pdfHeader;
}
