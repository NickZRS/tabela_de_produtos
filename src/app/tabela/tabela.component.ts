import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {



  products: Product[] = [];


  constructor(private productService : ProductService){
}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe(
      {
        next : data => this.products = data,
        error: (msg)=> console.log("Erro aoo chamar endpoint" + msg)
      }
    )
  }
}
