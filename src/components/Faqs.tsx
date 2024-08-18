import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '¿Qué es la Corporación Ocelot?',
      answer:
        'La Corporación Ocelot es una startup de tecnología que ofrece soluciones innovadoras para ayudar a las empresas a impulsar su productividad y crecimiento.',
    },
    {
      question: '¿Qué tecnologías utiliza la Corporación Ocelot?',
      answer:
        'La Corporación Ocelot utiliza las últimas tecnologías de vanguardia, como inteligencia artificial, aprendizaje automático, blockchain y desarrollo de software, para ofrecer soluciones personalizadas y efectivas para cada cliente.',
    },
    {
      question: '¿Cuál es su visión para el futuro?',
      answer:
        'La visión de la Corporación Ocelot es convertirse en un líder en la industria de la tecnología, ofreciendo soluciones innovadoras y personalizadas para ayudar a las empresas a alcanzar el éxito en un entorno cada vez más digital.',
    },
  ],
  [
    {
      question: '¿Qué tipos de soluciones ofrece la Corporación Ocelot?',
      answer:
        'La Corporación Ocelot ofrece una amplia gama de soluciones, incluyendo principalmente soluciones de desarrollo de software personalizado. Nuestros servicios incluyen desarrollo de aplicaciones web, desarrollo de aplicaciones móviles, desarrollo de software empresarial y mucho más.',
    },
    {
      question: '¿Cuál es su proceso de desarrollo de software?',
      answer:
        'El proceso de desarrollo de software de la Corporación Ocelot se basa en un enfoque agile e iterativo. Trabajamos estrechamente con nuestros clientes para comprender sus necesidades y objetivos, y luego creamos soluciones personalizadas que se adaptan a sus necesidades.',
    },
    {
      question: '¿Cuál es su enfoque para la seguridad de la información?',
      answer:
        'La seguridad de la información es una prioridad para la Corporación Ocelot. Utilizamos los últimos estándares de seguridad de la industria para proteger la información de nuestros clientes y garantizar que sus datos estén seguros.',
    },
  ],
  [
    {
      question: '¿Cuál es su enfoque para la calidad del software?',
      answer:
        'La calidad del software es una prioridad para la Corporación Ocelot. Utilizamos metodologías de prueba y aseguramiento de calidad para garantizar que nuestros productos sean de alta calidad y cumplan con los estándares más altos de la industria.',
    },
    {
      question: '¿Cuál es su enfoque para el soporte y mantenimiento del software?',
      answer:
        'La Corporación Ocelot ofrece servicios de soporte y mantenimiento para garantizar que nuestros clientes tengan una experiencia de usuario óptima. Nuestro equipo de soporte está disponible para ayudar a nuestros clientes a resolver cualquier problema que puedan tener con nuestro software.',
    },
    {
      question: '¿Cuál es su enfoque para la formación y la educación de los clientes?',
      answer:
        'La Corporación Ocelot ofrece una amplia gama de opciones de formación y educación para ayudar a nuestros clientes a aprovechar al máximo nuestro software. Ofrecemos cursos de capacitación en línea, talleres y sesiones de formación personalizada para ayudar a nuestros clientes a utilizar nuestro software de manera efectiva.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Si tienes alguna pregunta,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              déjanos un correo
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
