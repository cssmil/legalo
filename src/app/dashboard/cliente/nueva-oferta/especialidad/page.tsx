"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React, { useState } from "react";
import { Check as CheckIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import specialtiesItems from "@/data/specialtiesItems";
import { useOferta } from "@/contexts/ofertaContext"; // Asegúrate de importar la interfaz
import { IEspecialidad } from "@/interfaces/Especialidad.interface";
import { useRouter } from "next/navigation";

interface Especialidad {
  CardTitle: string;
  CardDescription: string;
  ImageSrc: string;
}

const PublicarPageThree = () => {
  const route = useRouter();
  const { state, updateState } = useOferta();
  const [selectServices, setSelectServices] = useState<IEspecialidad[]>([]);

  const selectEspecialidad = (item: Especialidad) => {
    const newEspecialidad: IEspecialidad = { nombre: item.CardTitle };

    if (selectServices.find((service) => service.nombre === item.CardTitle)) {
      const filteredServices = selectServices.filter(
        (service) => service.nombre !== item.CardTitle
      );
      setSelectServices(filteredServices);
      updateState({especialidades: filteredServices})
    } else {
      if (selectServices.length >= 5) {
        console.log("No se puede escoger más de una especialidad");
        return;
      }
      const updatedServices = [...selectServices, newEspecialidad];
      setSelectServices(updatedServices);
      updateState({especialidades: updatedServices})
    }
  };

  const nextStep = () => {
    route.push("/dashboard/cliente/nueva-oferta/descripcion")
  };

  return (
    <div className="container mx-auto p-4 lg:p-8 m-8 lg:w-[900px]">
      <div className="w-full max-w-[480px] mx-auto mb-8">
        <Progress value={50} className="mx-auto mb-4 h-2" />
        <p className="text-left">Paso 3/6</p>
      </div>

      <h1 className="text-2xl lg:text-5xl my-4 font-tiempos">
        ¿Qué especialidad estás buscando?
      </h1>
      <div className="flex justify-between mt-8">
        <p className="text-lg">Puedes escoger solo 1*</p>
        <Link href="#" className="text-lg font-bold underline">
          ¿No sabes qué especialidad buscas?
        </Link>
      </div>
      <div>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4">
            {specialtiesItems.map((item) => (
              <div
                key={item.CardTitle}
                className="relative p-5 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
                onClick={() => selectEspecialidad(item)}
              >
                <div
                  className={`w-12 h-12 flex justify-center items-center rounded-full ${
                    selectServices.find(
                      (service) => service.nombre === item.CardTitle
                    )
                      ? "bg-[#D5F1F0]"
                      : "bg-[#D9D9D9]"
                  }`}
                >
                  <Image
                    src={item.ImageSrc}
                    alt={item.CardTitle}
                    width={25}
                    height={25}
                  />
                </div>
                <p className="mt-2 text-center">{item.CardTitle}</p>
                <div
                  className={`absolute top-5 right-5 w-5 h-5 flex justify-center items-center rounded-sm ${
                    selectServices.find(
                      (service) => service.nombre === item.CardTitle
                    )
                      ? "bg-[#007AFF]"
                      : "border border-black"
                  }`}
                >
                  {selectServices.find(
                    (service) => service.nombre === item.CardTitle
                  ) && <CheckIcon className="text-white w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-16">
        <Button className="h-12 px-10 px-text-base rounded-[10px]" onClick={nextStep}>
          Siguiente <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PublicarPageThree;