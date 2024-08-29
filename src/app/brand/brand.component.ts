import { Component, OnInit } from '@angular/core';
import { BrandService, Brand } from '../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }
}
