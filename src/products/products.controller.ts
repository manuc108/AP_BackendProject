import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id); // Pass id variable instead of 'id' string
  }

  @Post('')
  createProduct(@Body() productData: any) {
    return this.productService.createProduct(productData);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: any) {
    return this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
