import React, { useState } from 'react';
import { Printer, Download } from 'lucide-react';

const TemplatePlaneamento = () => {
  const [formData, setFormData] = useState({
    computadores: '',
    impressora: false,
    software: '',
    formacao: '',
    internet: false,
    outro: '',
    orcamentoHardware: '',
    orcamentoSoftware: '',
    orcamentoFormacao: '',
    prioridadeComputador: '',
    prioridadeSoftware: '',
    prioridadeInternet: '',
    prioridadeFormacao: '',
    acao1: '',
    acao2: '',
    acao3: '',
    beneficio1: '',
    beneficio2: '',
    beneficio3: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    const hardware = parseFloat(formData.orcamentoHardware) || 0;
    const software = parseFloat(formData.orcamentoSoftware) || 0;
    const formacao = parseFloat(formData.orcamentoFormacao) || 0;
    return (hardware + software + formacao).toFixed(2);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-t-3xl shadow-lg print:rounded-none">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">📋 PLANEAMENTO</h1>
              <p className="text-2xl opacity-90">Loja do Sr. Manuel</p>
            </div>
            <button 
              onClick={handlePrint}
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all flex items-center gap-2 print:hidden"
            >
              <Printer size={20} />
              Imprimir
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-b-3xl p-8 print:shadow-none">
          
          {/* Section 1: Necessidades */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">1</span>
              NECESSIDADES IDENTIFICADAS
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 font-semibold">Computadores:</label>
                <input
                  type="number"
                  value={formData.computadores}
                  onChange={(e) => handleChange('computadores', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Quantidade"
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={formData.impressora}
                  onChange={(e) => handleChange('impressora', e.target.checked)}
                  className="w-5 h-5"
                />
                <label className="font-semibold">Impressora</label>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 font-semibold">Software de:</label>
                <input
                  type="text"
                  value={formData.software}
                  onChange={(e) => handleChange('software', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Ex: Faturação, Gestão de Stock"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 font-semibold">Formação para:</label>
                <input
                  type="text"
                  value={formData.formacao}
                  onChange={(e) => handleChange('formacao', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Ex: funcionários"
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={formData.internet}
                  onChange={(e) => handleChange('internet', e.target.checked)}
                  className="w-5 h-5"
                />
                <label className="font-semibold">Internet</label>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 font-semibold">Outro:</label>
                <input
                  type="text"
                  value={formData.outro}
                  onChange={(e) => handleChange('outro', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Especificar"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Orçamento */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">2</span>
              ORÇAMENTO ESTIMADO
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-40 font-semibold">Hardware:</label>
                <input
                  type="number"
                  value={formData.orcamentoHardware}
                  onChange={(e) => handleChange('orcamentoHardware', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="0.00"
                />
                <span className="font-bold text-orange-600">€</span>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-40 font-semibold">Software:</label>
                <input
                  type="number"
                  value={formData.orcamentoSoftware}
                  onChange={(e) => handleChange('orcamentoSoftware', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="0.00"
                />
                <span className="font-bold text-orange-600">€</span>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-40 font-semibold">Formação:</label>
                <input
                  type="number"
                  value={formData.orcamentoFormacao}
                  onChange={(e) => handleChange('orcamentoFormacao', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="0.00"
                />
                <span className="font-bold text-orange-600">€</span>
              </div>

              <div className="border-t-2 border-orange-300 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">TOTAL:</span>
                  <span className="text-3xl font-bold text-orange-600">{calculateTotal()} €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Prioridades */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">3</span>
              PRIORIDADES
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl">
              <p className="text-sm text-gray-600 mb-4">1 = urgente | 2 = importante | 3 = pode esperar</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-64 font-semibold">Computador para caixa:</span>
                  <select
                    value={formData.prioridadeComputador}
                    onChange={(e) => handleChange('prioridadeComputador', e.target.value)}
                    className="border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Selecionar</option>
                    <option value="1">1 - Urgente</option>
                    <option value="2">2 - Importante</option>
                    <option value="3">3 - Pode esperar</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-64 font-semibold">Software faturação:</span>
                  <select
                    value={formData.prioridadeSoftware}
                    onChange={(e) => handleChange('prioridadeSoftware', e.target.value)}
                    className="border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Selecionar</option>
                    <option value="1">1 - Urgente</option>
                    <option value="2">2 - Importante</option>
                    <option value="3">3 - Pode esperar</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-64 font-semibold">Internet:</span>
                  <select
                    value={formData.prioridadeInternet}
                    onChange={(e) => handleChange('prioridadeInternet', e.target.value)}
                    className="border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Selecionar</option>
                    <option value="1">1 - Urgente</option>
                    <option value="2">2 - Importante</option>
                    <option value="3">3 - Pode esperar</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-64 font-semibold">Formação:</span>
                  <select
                    value={formData.prioridadeFormacao}
                    onChange={(e) => handleChange('prioridadeFormacao', e.target.value)}
                    className="border-2 border-orange-200 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Selecionar</option>
                    <option value="1">1 - Urgente</option>
                    <option value="2">2 - Importante</option>
                    <option value="3">3 - Pode esperar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Plano de Ação */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">4</span>
              PLANO DE AÇÃO (ordem)
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-orange-600 w-12">1º:</span>
                <input
                  type="text"
                  value={formData.acao1}
                  onChange={(e) => handleChange('acao1', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Primeira ação a realizar"
                />
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-orange-600 w-12">2º:</span>
                <input
                  type="text"
                  value={formData.acao2}
                  onChange={(e) => handleChange('acao2', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Segunda ação a realizar"
                />
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-orange-600 w-12">3º:</span>
                <input
                  type="text"
                  value={formData.acao3}
                  onChange={(e) => handleChange('acao3', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Terceira ação a realizar"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Benefícios */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <span className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">5</span>
              BENEFÍCIOS ESPERADOS
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-orange-600 font-bold">•</span>
                <input
                  type="text"
                  value={formData.beneficio1}
                  onChange={(e) => handleChange('beneficio1', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Primeiro benefício"
                />
              </div>

              <div className="flex items-start gap-4">
                <span className="text-orange-600 font-bold">•</span>
                <input
                  type="text"
                  value={formData.beneficio2}
                  onChange={(e) => handleChange('beneficio2', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Segundo benefício"
                />
              </div>

              <div className="flex items-start gap-4">
                <span className="text-orange-600 font-bold">•</span>
                <input
                  type="text"
                  value={formData.beneficio3}
                  onChange={(e) => handleChange('beneficio3', e.target.value)}
                  className="flex-1 border-2 border-orange-200 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Terceiro benefício"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t-2 border-gray-200">
            <p>UFCD 0617 - Gestão de Recursos Informáticos | Sessão 4</p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TemplatePlaneamento;