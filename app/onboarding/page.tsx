'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StepIndicator } from '@/app/onboarding/StepIndicator';
import { StepOne } from '@/app/onboarding/StepOne';
import { StepTwo } from '@/app/onboarding/StepTwo';
import { StepSuccess } from '@/app/onboarding/StepSuccess';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
  });

  const updateFormData = (fields: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <main className="min-h-screen bg-[#09090B] flex flex-col justify-between relative overflow-hidden px-4 py-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header minimalista */}
      <header className="max-w-md mx-auto w-full flex items-center justify-between z-10 mb-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-400 flex items-center justify-center font-black text-zinc-950 text-sm shadow-md shadow-emerald-500/20">
            S
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            SAWANA<span className="text-emerald-500">.</span>
          </span>
        </Link>
        <span className="text-xs text-zinc-500 font-medium">Soporte y Ventas México</span>
      </header>

      {/* Contenedor central del formulario */}
      <div className="max-w-md mx-auto w-full z-10 my-auto">
        {step < 3 && <StepIndicator currentStep={step} totalSteps={3} />}
        
        <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-emerald">
          {step === 1 && (
            <StepOne 
              formData={formData} 
              updateData={updateFormData} 
              onNext={() => setStep(2)} 
            />
          )}
          {step === 2 && (
            <StepTwo 
              formData={formData} 
              updateData={updateFormData} 
              onNext={() => setStep(3)} 
              onBack={() => setStep(1)} 
            />
          )}
          {step === 3 && (
            <StepSuccess 
              formData={formData} 
            />
          )}
        </div>
      </div>

      {/* Footer minimalista de onboarding */}
      <footer className="max-w-md mx-auto w-full text-center z-10 mt-6">
        <p className="text-xs text-zinc-600">
          Tus datos están protegidos bajo estrictas normas de privacidad y cifrado.
        </p>
      </footer>
    </main>
  );
}