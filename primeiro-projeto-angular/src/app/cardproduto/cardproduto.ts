import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardproduto',
  standalone: false,
  templateUrl: './cardproduto.html',
  styleUrl: './cardproduto.css',
})
export class Cardproduto {
  @Input() nome = '';
  @Input() preco = 0;
  @Input() disponivel: boolean = true;

}
