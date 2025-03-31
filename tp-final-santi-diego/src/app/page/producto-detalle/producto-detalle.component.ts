import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-detalle.component.html'
})
export class ProductoDetalleComponent{
  @Input() producto!: {id:string, images:string[], description:string, title:string, price:number};

  constructor(private router: Router) {
    this.producto = this.router.getCurrentNavigation()?.extras.state?.['producto'];
  }
}

