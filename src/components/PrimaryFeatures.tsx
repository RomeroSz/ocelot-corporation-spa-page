import {
  CloudArrowUpIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Gestión de Negocios y E-commerce',
    description:
      'Inventario, pedidos, facturas y tiendas virtuales personalizadas.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Organización y Datos',
    description:
      'Bases de datos, gestión de usuarios y manipulación de datos para mayor eficiencia.',
    icon: ServerIcon,
  },
  {
    name: 'Servicios de TI',
    description:
      'Soporte técnico, soluciones de seguridad y defensa para tu negocio.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Posicionamiento SEO',
    description:
      'Mejora la visibilidad de tu negocio en los motores de búsqueda.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Migración y Servicios en la Nube',
    description:
      'Incorporación, migración y gestión de servicios en la nube para una mayor flexibilidad y escalabilidad.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Automatización de Procesos',
    description:
      'Optimiza y automatiza tus procesos empresariales para aumentar la eficiencia y reducir costos.',
    icon: BuildingOfficeIcon,
  },
]

export function PrimaryFeatures() {
  return (
    <>
      <section
        id="features"
        aria-label="Features for investing all your money"
        className="bg-gray-900 py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Todo lo que necesitas en un solo lugar
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Analiza con nuestra gama de servicio para saber lo que solicitarás
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-cyan-500" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  )
}
