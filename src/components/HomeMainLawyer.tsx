import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import { Star } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  CarouselNextReviews,
  // CarouselPrevious,
  CarouselPreviousReviews,
} from "@/components/ui/carousel";

import HomeFaq from "./HomeFaq";

type HomeMainProps = {
  serviceTipe: string;
  updateServiceTipe: (newType: string) => void;
};

const HomeMain: React.FC<HomeMainProps> = ({
  // serviceTipe,
  updateServiceTipe,
}) => {
  const reviewsItems = [
    {
      name: "Luisa Sanchez",
      description:
        "Tuve una gran experiencia con Legalo. Necesitaba asesoramiento legal rápido para un problema laboral y encontré un abogado especializado en minutos. Fue profesional, atento y resolvió mi caso de manera eficiente. La plataforma es fácil de usar, segura y transparente.",
      ImageSrc: "/assets/img-user1.png",
    },
    {
      name: "Juan Guerra",
      description:
        "Tuve una gran experiencia con Legalo. Necesitaba asesoramiento legal rápido para un problema laboral y encontré un abogado especializado en minutos. Fue profesional, atento y resolvió mi caso de manera eficiente. La plataforma es fácil de usar, segura y transparente.",
      ImageSrc: "/assets/img-user2.png",
    },
    {
      name: "Pablo Rodriguez",
      description:
        "Tuve una gran experiencia con Legalo. Necesitaba asesoramiento legal rápido para un problema laboral y encontré un abogado especializado en minutos. Fue profesional, atento y resolvió mi caso de manera eficiente. La plataforma es fácil de usar, segura y transparente.",
      ImageSrc: "/assets/img-user3.png",
    },
    {
      name: "Luisa Sanchez",
      description:
        "Tuve una gran experiencia con Legalo. Necesitaba asesoramiento legal rápido para un problema laboral y encontré un abogado especializado en minutos. Fue profesional, atento y resolvió mi caso de manera eficiente. La plataforma es fácil de usar, segura y transparente.",
      ImageSrc: "/assets/img-user1.png",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="container p-4 lg:p-8 mx-auto flex justify-center flex-col items-center  mb-5 lg:mt-10">
        <div>
          <div className="lg:flex gap-2  border border-black rounded-full p-[2px] w-auto">
            <Button
              variant="switchOutline"
              onClick={() => updateServiceTipe("client")}
            >
              ¿Quieres contratar?
            </Button>
            <Button
              variant="switch"
              onClick={() => updateServiceTipe("lawyer")}
            >
              ¿Quieres trabajar?
            </Button>
          </div>
        </div>

        <div className="max-w-[680px] mx-auto my-8">
          <h1 className="text-black text-3xl lg:text-[64px] font-nimbus text-center leading-[1.2]">
            Sé parte de nuestra comunidad de abogados de{" "}
            <span className="italic font-light"> confianza</span>
          </h1>
          <p className="mx-auto my-6 text-center text-lg max-w-[580px]">
            Crea una cuenta en pocos pasos y accede a casos legales que se
            ajustan a  tu experiencia y áreas de interés. Protegemos tu pago.
          </p>
        </div>

        <div className="flex max-w-[1200px] gap-[20px] overflow-hidden flex-wrap justify-center">
          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                1
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-register.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Regístrate gratis
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Crea tu cuenta, completa tu perfil profesional y accede a
                oportunidades legales.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                2
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-create.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Explora oportunidades
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Utiliza los filtros para encontrar casos legales adaptados a tu
                experiencia e intereses.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                3
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-explore.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Postula a proyectos
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Aplica a casos publicados o cotiza tus servicios según tu
                disponibilidad y experiencia.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                4
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-contact.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Confirma tu contrato
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Si eres seleccionado, acepta el contrato y comienza a trabajar
                con el cliente.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                5
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-explore.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Completa el encargo
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Cumple con los pasos acordados, comunica avances y resuelve las
                dudas del cliente.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="max-w-[310px] border-none shadow-none">
            <CardHeader className="relative">
              <div className="rounded-full bg-lg-lawyer h-8 w-8 flex items-center justify-center absolute top-4 left-4">
                6
              </div>
              <div className="w-full h-auto flex justify-center ">
                <Image
                  src="/assets/img-resolv.webp"
                  alt="Regístrate"
                  width={107}
                  height={107}
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="font-nimbus lg:text-[32px] lg:pt-4 text-center py-4 font-light">
                Recibe tu pago
              </CardTitle>
              <CardDescription className="line-clamp-4 text-base text-black text-center">
                Obtén pagos seguros, parciales o finales, tras la aprobación del
                cliente.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="[background:linear-gradient(to_right,_#1E1E1E_50%,_#EEF79C_50%)]">
        <div className="max-w-[1920px] mx-auto 2xl:h-[584px] 3xl:h-[700px] grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#1E1E1E] flex flex-col justify-center gap-4 py-8">
            <div className="flex  flex-col justify-center gap-8 3xl:gap-16 p-4 lg:p-16">
              <div className="grid grid-cols-[40px_auto]  gap-4 ">
                <Image
                  src="/icos/ico-megaphone-w.png"
                  alt="ico"
                  width={27}
                  height={24}
                  className="mx-auto"
                />
                <div className="text-white">
                  <h3 className="text-lg lg:text-2xl font-nimbus mb-2 font-light">
                    Oportunidades Exclusivas
                  </h3>
                  <p className="text-base">
                    Accede a encargos legales publicados, alineados con tu
                    experiencia y áreas de especialización.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_auto] gap-4 ">
                <Image
                  src="/icos/ico-credit-card-w.png"
                  alt="ico"
                  width={30}
                  height={23}
                  className="mx-auto"
                />
                <div className="text-white">
                  <h3 className="text-lg lg:text-2xl font-nimbus mb-2">
                    Pagos seguros y protegidos
                  </h3>
                  <p className="text-base">
                    Tu pago está garantizado y se libera de forma puntual una
                    vez que completes el encargo.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_auto]  gap-4 ">
                <Image
                  src="/icos/ico-like-w.png"
                  alt="ico"
                  width={24}
                  height={30}
                  className="mx-auto"
                />
                <div className="text-white">
                  <h3 className="text-lg lg:text-2xl font-nimbus mb-2">
                    Flexibilidad profesional
                  </h3>
                  <p className="text-base">
                    Selecciona los casos que más te interesen y trabaja bajo tus
                    propios términos y disponibilidad.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_auto]  gap-4 ">
                <Image
                  src="/icos/ico-like-w.png"
                  alt="ico"
                  width={24}
                  height={30}
                  className="mx-auto"
                />
                <div className="text-white">
                  <h3 className="text-lg lg:text-2xl font-nimbus mb-2">
                    Crecimiento profesional
                  </h3>
                  <p className="text-base">
                    Amplía tu red de contactos y accede a encargos que impulsan
                    tu experiencia y habilidades legales.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-lg-lawyer flex flex-col items-center justify-center gap-4 3xl:gap-8 p-8">
            <h3 className="text-[40px] text-center max-w-[416px] font-nimbus 3xl:max-w-[700px] 3xl:text-6xl">
              Calcula tus <span className="italic">ganancias,</span> podrías
              ganar
            </h3>
            <h2 className="text-6xl italic font-nimbus 3xl:text-7xl">
              S/ 2160
            </h2>
            <p className="text-base max-w-[264px] text-center 3xl:max-w-[400px] 3xl:text-xl">
              En comparación a 6 horas al día a un precio estimado de S/12 por
              día
            </p>
            <Link href="#" className="underline 3xl:text-xl">
              ¿Cómo calculamos?
            </Link>
            <Select>
              <SelectTrigger className="w-[320px] border border-black">
                <SelectValue placeholder="Seleccionar especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Especialidades</SelectLabel>
                  <SelectItem value="penalista">Abogado Penalista</SelectItem>
                  <SelectItem value="laboral">Abogado Laboral</SelectItem>
                  <SelectItem value="familia">Abogado Familiar</SelectItem>
                  <SelectItem value="empresarial">
                    Abogado Empresarial
                  </SelectItem>
                  <SelectItem value="ambiental">Abogado Ambiental</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/img-home-9.jpeg')] bg-cover  bg-center">
        <div className="bg-black bg-opacity-70 px-8 py-8 lg:py-0 lg:px-16 lg:h-[242px]">
          <div className="max-w-[1920px] mx-auto py-4 lg:pr-8 flex md:items-center items-start lg:justify-between h-full flex-col lg:flex-row gap-8 xl:gap-16">
            <div className="text-white">
              <h3 className="text-3xl lg:text-[40px] mb-8 font-nimbus font-light">
                Descubre oportunidades legales
                <span className="italic font-light"> a tu medida.</span>
              </h3>
              <p className="text-lg">
                Crea una cuenta en pocos pasos y accede a nuestra comunidad de
                abogados
              </p>
            </div>
            <Link href={"/registro/tipo"}>
              <Button variant={"secondary"}>Regístrate gratis</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-lg-lawyer">
        <div className="max-w-[1920px] mx-auto lg:min-h-[640px] flex items-center ">
          <div className="container p-4 lg:pl-16  4xl:pr-8 pr-0">
            <div className="mb-5 lg:mb-14 lg:mt-20 flex overflow-x-auto">
              <ToggleGroup
                type="single"
                variant="chips"
                className="gap-2"
                defaultValue="a"
              >
                <ToggleGroupItem value="a">Todos</ToggleGroupItem>
                <ToggleGroupItem value="b">Ambiental</ToggleGroupItem>
                <ToggleGroupItem value="c">Civil</ToggleGroupItem>
                <ToggleGroupItem value="d">Corportaivo</ToggleGroupItem>
                <ToggleGroupItem value="e">Internacional</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full lg:w-[90vw] 4xl:w-[100%] mb-8 overflow-child-visible"
            >
              <CarouselContent className="">
                {reviewsItems.map((item, index) => (
                  <CarouselItem key={index} className="max-w-[600px]">
                    <div>
                      <Card className="border border-black border-solid bg-lg-lawyer  rounded-[32px] min-h-[320px] max-w-[600px]">
                        <CardHeader>
                          <Image
                            src="/icos/ico-stars-solid.png"
                            alt="img"
                            width={120}
                            height={19}
                            className=""
                          />
                        </CardHeader>
                        <CardContent className="flex">
                          <CardDescription className="line-clamp-5 text-black text-[18px]">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                          <Image
                            src={item.ImageSrc}
                            alt="img"
                            width={56}
                            height={56}
                            className=""
                          />
                          <div>
                            <p className="text-[20px]font-medium italic">
                              {item.name}
                            </p>
                            <p className="text-base">Position, Company name</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-14 gap-4 mb-14 mr-4 lg:mr-0">
                <CarouselPreviousReviews />
                <CarouselNextReviews />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <HomeFaq />
    </div>
  );
};

export default HomeMain;
