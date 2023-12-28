import { AvatarImage, AvatarFallback, Avatar } from "./ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "./ui/card"

export function OurTeam() {
  return (
    (<>

<section className="flex-grow flex items-center justify-center relative">
      <div className=" top-1/2 left-1/2 max-w-[70vw] max-h-[50vh] text-center">
        <p className="text-2xl text-center text-white">Somos una productora de cine Colombiana, un equipo creativo en busca de contar al mundo nuestras historias.</p>
        </div>
      </section>
      <div className=" ">
      <main className="p-4 xsm:p-8 sm:p-8 space-y-4 sm:mx-[5vw] md:mx-[7vw] lg:mx-[16vw] xl:mx-[16vw] 2xl:mx-[16vw]">
        <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          <Card className=''>
            <CardHeader>
              <div className="flex items-start gap-4 flex-col ">
                <Avatar>
                  <AvatarImage alt="Team member name" src="/javBlack.jpg?height=100&width=100" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Javier Acevedo</CardTitle>
                  <CardDescription>Escritor y director</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm ">
                Participo como co-director y fotográfia en el desarrollo del proyecto 'Arbol de navidad' que obtuvo tercer puesto en la competencia internacional de filminutos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4 flex-col">
                <Avatar>
                  <AvatarImage alt="Team member name" src="/edw.jpg?height=100&width=100" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Edwin Béltran</CardTitle>
                  <CardDescription>Productor</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm">
                Productor con experiencia en publicidad e institucional.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4 flex-col">
                <Avatar>
                  <AvatarImage alt="Team member name" src="/joaq.jpg?height=100&width=100" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Andrés Acevedo</CardTitle>
                  <CardDescription>Escritor y director</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm">
                Co-director del cortometraje 'mi árbol de navidad' con más de 50k reproducciones en youtube gano tercer puesto en la competencia internacional de filminutos creada por CineD y Fujifilm.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      </div>
    </>)
  );
}
