import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ShoppingCart,
  DollarSign,
  Package,
  Printer,
  Users,
  Table,
  Truck,
  Receipt,
  CheckCircle,
  MessageSquare,
  CreditCard,
  Clock,
  Smartphone,
  QrCode,
  Tag,
  TrendingDown,
  BarChart3,
  AlertCircle,
  ShieldOff,
  FileUp,
  UserCog,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function FuncionalidadesPage() {
  return (
    <div className="min-w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
            33 Funcionalidades • 7 Módulos
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl text-balance mb-6">
            Todas las funcionalidades de <span className="text-orange-600">mangi.ar</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed text-pretty max-w-3xl mx-auto mb-8">
            Un sistema completo de gestión para tu restaurante. Desde reservas hasta facturación electrónica, todo en
            una sola plataforma.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
              Comenzar Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Módulo Ventas */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Ventas</h2>
            </div>
            <p className="text-lg text-gray-600">
              Gestioná todas tus ventas desde un solo lugar, sin importar el canal
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <MessageSquare className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Confirmación por WhatsApp</h3>
              <p className="text-sm text-gray-600">Confirmá reservas automáticamente vía WhatsApp</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Table className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gestión por mesa</h3>
              <p className="text-sm text-gray-600">Control individual de cada mesa del salón</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <MapPin className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gestión de salón</h3>
              <p className="text-sm text-gray-600">Visualizá y administrá todo tu salón en tiempo real</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Truck className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Venta por delivery</h3>
              <p className="text-sm text-gray-600">Sistema completo para gestionar pedidos a domicilio</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <ShoppingCart className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ventas por mostrador</h3>
              <p className="text-sm text-gray-600">Punto de venta rápido para pedidos en mostrador</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Receipt className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Facturación electrónica</h3>
              <p className="text-sm text-gray-600">Cumplí con AFIP de forma automática</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <DollarSign className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arqueo de caja</h3>
              <p className="text-sm text-gray-600">Control automático de efectivo y pagos</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cierre parcial de venta</h3>
              <p className="text-sm text-gray-600">Cerrá ventas parcialmente para grupos grandes</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CreditCard className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integración con Mercado Pago</h3>
              <p className="text-sm text-gray-600">Aceptá pagos online para reservas</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Clock className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Múltiples turnos</h3>
              <p className="text-sm text-gray-600">Gestioná almuerzo, merienda y cena por separado</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Smartphone className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Versión móvil</h3>
              <p className="text-sm text-gray-600">Gestioná reservas desde tu celular</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <QrCode className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Carta QR</h3>
              <p className="text-sm text-gray-600">Carta digital sin contacto para tus clientes</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <Tag className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Descuentos fijos y porcentuales</h3>
              <p className="text-sm text-gray-600">Creá promociones y descuentos personalizados</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Gastos */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-red-100 w-12 h-12 flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Gastos</h2>
            </div>
            <p className="text-lg text-gray-600">Controlá todos los gastos de tu restaurante</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-red-200">
              <FileUp className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Carga de datos</h3>
              <p className="text-sm text-gray-600">Registrá gastos de forma rápida y simple</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-red-200">
              <BarChart3 className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Categorías de gastos</h3>
              <p className="text-sm text-gray-600">Organizá gastos por categorías personalizadas</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-red-200">
              <Tag className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Actualización de precios en lote</h3>
              <p className="text-sm text-gray-600">Actualizá múltiples precios simultáneamente</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-red-200">
              <Package className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Actualización de stock</h3>
              <p className="text-sm text-gray-600">Modificá stock de productos masivamente</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Productos */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Productos</h2>
            </div>
            <p className="text-lg text-gray-600">Administrá tu inventario de forma inteligente</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Categorías y subcategorías</h3>
              <p className="text-sm text-gray-600">Organizá productos en categorías jerárquicas</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Productos favoritos</h3>
              <p className="text-sm text-gray-600">Marcá productos más vendidos para acceso rápido</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <Package className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Control de stock</h3>
              <p className="text-sm text-gray-600">Seguimiento en tiempo real de inventario</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <AlertCircle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Notificaciones por falta de stock</h3>
              <p className="text-sm text-gray-600">Alertas automáticas cuando el stock es bajo</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <ShieldOff className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prohibición de venta sin stock</h3>
              <p className="text-sm text-gray-600">Evitá vender productos sin disponibilidad</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <FileUp className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Importación de datos</h3>
              <p className="text-sm text-gray-600">Importá productos masivamente desde Excel</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Impresión */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center">
                <Printer className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Impresión</h2>
            </div>
            <p className="text-lg text-gray-600">Imprimí comandas y tickets de forma profesional</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <Printer className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte para impresoras de comandas</h3>
              <p className="text-sm text-gray-600">Compatible con impresoras térmicas estándar</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <Receipt className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tickets de comandas</h3>
              <p className="text-sm text-gray-600">Imprimí comandas para cocina y bar</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <Receipt className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tickets de precuenta</h3>
              <p className="text-sm text-gray-600">Generá precuentas antes del cierre final</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Usuarios */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Usuarios</h2>
            </div>
            <p className="text-lg text-gray-600">Gestioná tu equipo con roles y permisos</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Múltiples usuarios</h3>
              <p className="text-sm text-gray-600">Agregá todo tu equipo al sistema</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <UserCog className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roles de usuarios</h3>
              <p className="text-sm text-gray-600">Definí permisos según el rol de cada empleado</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Gestión de Mesas */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center">
                <Table className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Gestión de Mesas</h2>
            </div>
            <p className="text-lg text-gray-600">Control visual y eficiente de tu salón</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <MapPin className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Configuración de mapa de salas y mesas</h3>
              <p className="text-sm text-gray-600">Diseñá el layout de tu restaurante visualmente</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <Users className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Asignación de camareros</h3>
              <p className="text-sm text-gray-600">Asigná mozos a mesas y seguí su desempeño</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Delivery */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center">
                <Truck className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Ventas por Delivery</h2>
            </div>
            <p className="text-lg text-gray-600">Gestioná entregas a domicilio de forma profesional</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-indigo-200">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Asignación de repartidores</h3>
              <p className="text-sm text-gray-600">Asigná pedidos a repartidores disponibles</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-indigo-200">
              <Clock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Estado de pedido</h3>
              <p className="text-sm text-gray-600">Seguimiento en tiempo real de cada delivery</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Facturación Electrónica */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center">
                <Receipt className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Módulo Facturación Electrónica</h2>
            </div>
            <p className="text-lg text-gray-600">Cumplí con AFIP sin complicaciones</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-pink-200">
              <Printer className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte para impresoras fiscales</h3>
              <p className="text-sm text-gray-600">Compatible con controladores fiscales homologados</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-pink-200">
              <Receipt className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Facturación electrónica AFIP</h3>
              <p className="text-sm text-gray-600">Emití facturas electrónicas automáticamente</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-600 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold text-white lg:text-5xl text-balance">
            33 funcionalidades para transformar tu restaurante
          </h2>
          <p className="text-xl text-orange-100 text-pretty">
            Todo lo que necesitás en una sola plataforma. Comenzá hoy mismo.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8">
              Comenzar Prueba Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Hablar con Ventas
            </Button>
          </div>
          <p className="text-sm text-orange-100">
            Prueba gratuita de 14 días • No requiere tarjeta de crédito • Cancelá cuando quieras
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
                  <Link href="/funcionalidades" className="hover:text-white transition-colors">
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
  )
}
