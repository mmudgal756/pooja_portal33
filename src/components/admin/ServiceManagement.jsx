"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Trash, PlusCircle, Loader2 } from "lucide-react"
import { getServices, addService, updateService, deleteService } from "@/services/pujaServices"

function ServiceForm({ service, onSave, onCancel }) {
  const [formData, setFormData] = useState(service || { title: '', description: '', price: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Service Title</Label>
        <Input id="title" value={formData.title} onChange={handleChange} placeholder="e.g., Satyanarayan Katha" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={formData.description} onChange={handleChange} placeholder="Describe the service" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" value={formData.price} onChange={handleChange} placeholder="e.g., 5100" required />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default function ServiceManagement() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadServices();
  }, []);

  const handleSave = async (serviceData) => {
    try {
      if (editingService) {
        const updated = await updateService(editingService.id, { ...serviceData, price: Number(serviceData.price) });
        setServices(services.map(s => s.id === editingService.id ? updated : s));
      } else {
        const newService = await addService({ ...serviceData, price: Number(serviceData.price) });
        setServices([...services, newService]);
      }
    } catch(error) {
        console.error("Failed to save service:", error)
    } finally {
        setIsDialogOpen(false);
        setEditingService(null);
    }
  };

  const handleDelete = async (serviceId) => {
    try {
        await deleteService(serviceId);
        setServices(services.filter(s => s.id !== serviceId));
    } catch(error) {
        console.error("Failed to delete service:", error)
    }
  };
  
  const handleAddNew = () => {
    setEditingService(null);
    setIsDialogOpen(true);
  }

  const handleEdit = (service) => {
    setEditingService(service);
    setIsDialogOpen(true);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Pooja Services</CardTitle>
          <CardDescription>Manage your available puja services.</CardDescription>
        </div>
        <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Service
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell>₹{service.price}</TableCell>
                  <TableCell className="text-right">
                     <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
                <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
            </DialogHeader>
            <ServiceForm 
                service={editingService} 
                onSave={handleSave} 
                onCancel={() => {
                    setIsDialogOpen(false);
                    setEditingService(null);
                }}
            />
          </DialogContent>
      </Dialog>
    </Card>
  )
}
