"use client"

import { useState } from "react"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Trash, PlusCircle } from "lucide-react"

const initialServices = [
  {
    title: 'Satyanarayan Katha',
    description: 'A sacred ritual to honor Lord Vishnu, bringing peace and prosperity to your home.',
    price: 5100,
  },
  {
    title: 'Mundan Sanskar',
    description: 'The traditional head-shaving ceremony for your child, performed by our experienced pandits.',
    price: 3100,
  },
  {
    title: 'Janeu Sanskar',
    description: 'The sacred thread ceremony (Upanayana) marking the journey into spiritual studies.',
    price: 4100,
  },
];

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
  const [services, setServices] = useState(initialServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const handleSave = (serviceData) => {
    if (editingService) {
      setServices(services.map(s => s.title === editingService.title ? serviceData : s));
    } else {
      setServices([...services, { ...serviceData, price: Number(serviceData.price) }]);
    }
    setIsDialogOpen(false);
    setEditingService(null);
  };

  const handleDelete = (serviceTitle) => {
    setServices(services.filter(s => s.title !== serviceTitle));
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
              <TableRow key={service.title}>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell>₹{service.price}</TableCell>
                <TableCell className="text-right">
                   <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(service.title)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
