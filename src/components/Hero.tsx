import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import HeroImage from '@/images/logos/hero-image.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'


export default function Hero() {
  return (
    <div className="pt-12 sm:pt-20 overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Conectamos tu empresa</span>
                <span className="block text-cyan-500">con el futuro</span>
              </h1>
              <p className="mt-3 text-sm text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Asesoramos, diseñamos y creamos lo que necesites para asegurar tu éxito a través de la innovación tecnológica. ¿Tienes una idea? La haremos realidad.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Coreo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico para comenzar"
                        className="block w-full rounded-md border-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:ml-3 sm:mt-0">
                      {/* <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-500 px-4 py-3 font-medium text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Start free trial
                      </button> */}
                      <Button href="#" className="hidden lg:block">
                        Contáctanos
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                    Comienza y accede a las mejores herramientas tecnológicas.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                alt=""
                src={HeroImage}
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
