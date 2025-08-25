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
import { getProducts, addProduct, updateProduct, deleteProduct } from "@/services/pujaProducts"

function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(product || { title: '', description: '', price: '' });

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
        <Label htmlFor="title">Product Title</Label>
        <Input id="title" value={formData.title} onChange={handleChange} placeholder="e.g., Havan Samagri Kit" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={formData.description} onChange={handleChange} placeholder="Describe the product" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" value={formData.price} onChange={handleChange} placeholder="e.g., 499" required />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleSave = async (productData) => {
    try {
        if (editingProduct) {
            const updated = await updateProduct(editingProduct.id, { ...productData, price: Number(productData.price) });
            setProducts(products.map(p => p.id === editingProduct.id ? updated : p));
        } else {
            const newProduct = await addProduct({ ...productData, price: Number(productData.price) });
            setProducts([...products, newProduct]);
        }
    } catch(error) {
        console.error("Failed to save product:", error);
    } finally {
        setIsDialogOpen(false);
        setEditingProduct(null);
    }
  };

  const handleDelete = async (productId) => {
    try {
        await deleteProduct(productId);
        setProducts(products.filter(p => p.id !== productId));
    } catch(error) {
        console.error("Failed to delete product:", error);
    }
  };
  
  const handleAddNew = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  }
  
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Poojan Samagri</CardTitle>
          <CardDescription>Manage your available samagri products.</CardDescription>
        </div>
        <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Product
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
                {products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>₹{product.price}</TableCell>
                    <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
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
                <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
            </DialogHeader>
            <ProductForm 
                product={editingProduct} 
                onSave={handleSave} 
                onCancel={() => {
                    setIsDialogOpen(false);
                    setEditingProduct(null);
                }}
            />
          </DialogContent>
      </Dialog>
    </Card>
  )
}
