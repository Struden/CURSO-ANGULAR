import { Component, OnInit, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  offset = 0;
  limit = 6;
  cargando = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarMas();
  }

  cargarMas(): void {
    if (this.cargando) return;

    this.cargando = true;
    this.productoService.getProductosPaginados(this.offset, this.limit).subscribe(data => {
      this.productos.push(...data);
      this.offset += this.limit;
      this.cargando = false;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY;
    const height = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollTop + height >= documentHeight - 200) {
      this.cargarMas();
    }
  }

  productoSeleccionado: any = null;

verDetalle(producto: any) {
  this.productoSeleccionado = producto;
}

cerrarDetalle() {
  this.productoSeleccionado = null;
}
}