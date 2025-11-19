import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, CheckCircle, Receipt, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-full font-sans">
      {/* Hero Section */}
      <section className="font-sans relative overflow-hidden bg-white px-6 py-[20vh] lg:px-32">
        <div className="mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center z-10 relative">
            <div className="space-y-8">
              <div className="inline-block py-2 text-sm font-semibold uppercase text-red">
                Sistema Completo de Gestión
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-black lg:text-6xl text-pretty">
                Transformá tu restaurante con{" "}
                <span className="text-red">mangi.ar</span>
              </h1>
              <p className="text-lg text-black font-light leading-relaxed text-pretty mb-12">
                La plataforma integral que gestiona reservas, ventas, delivery y
                facturación. Todo lo que necesitás para hacer crecer tu negocio
                gastronómico.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-red font-light hover:bg-white text-white hover:text-red text-lg px-8 rounded-full"
                >
                  Comenzar Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2 border-red text-red hover:bg-red-50 bg-transparent rounded-full"
                >
                  Ver Demo
                </Button>
              </div>
              <div className="hidden flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">
                    33 funcionalidades
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">
                    Setup en 5 minutos
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <Image
                  src="/sistema-mangiar.png"
                  alt="Dashboard de mangi.ar"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 -right-[45vh] bg-red h-[120vh] aspect-square rounded-full z-0"></div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-balance">
              Comenzá en minutos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Tres simples pasos para revolucionar tu restaurante
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Registrate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creá tu cuenta en menos de 2 minutos. Ingresá los datos básicos
                de tu restaurante.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Configurá
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Definí tus mesas, horarios y preferencias. Nuestro asistente te
                guía paso a paso.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Recibí Reservas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compartí tu link de reservas y empezá a recibir clientes. Así de
                simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-balance">
              Funcionalidades principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Las herramientas más poderosas para gestionar tu restaurante de
              forma integral
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-1">
            {/* Feature 1: Gestión de Mesas y Reservas */}
            <Card className="p-8 d-flex flex-row hover:shadow-xl transition-all border-2 hover:border-orange-200 bg-gradient-to-br from-white to-orange-50">
              <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="w-3/6 ml-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gestión de Mesas y Reservas
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Control completo de tu salón con confirmación automática por
                  WhatsApp y asignación inteligente de camareros.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Confirmación automática por WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Configuración de mapa de salas y mesas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Asignación de camareros sobre ventas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Múltiples turnos y gestión por mesa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Versión móvil para gestión de reservas</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Feature 2: Ventas Multicanal */}
            <Card className="p-8 d-flex flex-row-reverse hover:shadow-xl transition-all border-2 hover:border-blue-200 bg-gradient-to-br from-white to-blue-50">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <QrCode className="h-8 w-8 text-blue-600" />
              </div>
              <div className="w-3/6 mr-auto">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ventas Multicanal
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vendé por mostrador, delivery o con carta QR. Integrá Mercado
                Pago y gestioná todo desde un solo lugar.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ventas por mostrador y delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Carta QR para pedidos sin contacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Integración con Mercado Pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Asignación de repartidores y estado de pedido</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Descuentos fijos y porcentuales</span>
                </li>
              </ul>
             </div>
            </Card>

            {/* Feature 3: Facturación Electrónica */}
            <Card className="p-8 d-flex flex-row hover:shadow-xl transition-all border-2 hover:border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-6">
                <Receipt className="h-8 w-8 text-purple-600" />
              </div>
              <div className="w-3/6 ml-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Facturación Electrónica
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Cumplí con AFIP sin complicaciones. Facturación electrónica,
                  impresoras fiscales y control de caja integrado.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Facturación electrónica AFIP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Soporte para impresoras fiscales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Arqueo de caja automático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cierre parcial de venta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Impresión de comandas y precuenta</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/funcionalidades">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Ver todas las funcionalidades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl text-balance">
            ¿Listo para llenar tu restaurante?
          </h2>
          <p className="text-xl text-gray-600 text-pretty">
            Unite a cientos de restaurantes que ya confían en mangi.ar para
            gestionar sus reservas
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8"
            >
              Comenzar Prueba Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-gray-300 bg-transparent"
            >
              Hablar con Ventas
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Prueba gratuita de 14 días • No requiere tarjeta de crédito •
            Cancelá cuando quieras
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">mangi.ar</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                La plataforma de gestión que transforma restaurantes
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/funcionalidades"
                    className="hover:text-white transition-colors"
                  >
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 mangi.ar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
