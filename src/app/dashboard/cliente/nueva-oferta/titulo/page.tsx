"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useOferta } from "@/contexts/ofertaContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/toastContext";
import Link from "next/link";

const PublicarPageTwo = () => {
  const { state, updateState } = useOferta();
  const { showToast } = useToast();
  const route = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ titulo: event.target.value });
  };

  const nextStep = () => {
    if(!state.titulo){
      showToast(
        "error",
        "Completa el título",
        ""
      );
      return;
    }
    
    route.push("/dashboard/cliente/nueva-oferta/especialidad");
  };

  return (
    <div className="container mx-auto p-4 lg:p-8 m-8 lg:w-[600px]">
      <div className="w-full mx-auto mb-8">
        <Progress value={100/8*2} className="mx-auto mb-4 h-2" />
        <p className="text-left">Paso 2/8</p>
      </div>
      <div>
        <h1 className="text-[32px] my-4 font-nimbus">
          Empecemos con el título de tu proyecto
        </h1>
        <p className="mb-6">
          Introduce el título de tu caso o necesidad legal para atraer a los
          abogados adecuados.
        </p>
        <p className="mb-4">
          Escribe el titulo para tu anuncio de trabajo o proyecto
        </p>
        <Input
          type="text"
          className="border-black rounded-[10px] h-12 focus-visible:border-none mb-6"
          placeholder="Proyecto..."
          onChange={handleChange}
          value={state.titulo}
        />
        <h3 className="font-bold mb-3">Ejemplos de títulos</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Necesito asistencia legal para establecer una empresa.</li>
          <li>
            Se necesita un abogado para registrar la marca del nombre comercial
            en PERÚ Y ECUADOR
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-16">
        <Link href="/dashboard/cliente/nueva-oferta">
          <Button variant="outline" className="h-12 px-10 text-base rounded-[10px]">
            <ArrowLeft className="mr-2" /> Volver
          </Button>
        </Link>
        <Button
          className="h-12 px-10 px-text-base rounded-[10px]"
          onClick={nextStep}
        >
          Siguiente <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PublicarPageTwo;
