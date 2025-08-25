import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceManagement from "@/components/admin/ServiceManagement"
import ProductManagement from "@/components/admin/ProductManagement"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-headline">Admin Settings</h1>
      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="services">Pooja Services</TabsTrigger>
          <TabsTrigger value="products">Poojan Samagri</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <ServiceManagement />
        </TabsContent>
        <TabsContent value="products">
          <ProductManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}
