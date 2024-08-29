import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { id: 0, libelle: '' };  // Pour ajouter une nouvelle catégorie

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => this.categories = data,
      (error) => console.error(error)
    );
  }

  addCategory(): void {
    this.categoryService.addCategory(this.newCategory).subscribe(
      (category: Category) => {
        this.categories.push(category);
        this.newCategory = { id: 0, libelle: '' };  // Réinitialiser le formulaire
      },
      (error) => console.error(error)
    );
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.categories = this.categories.filter(c => c.id !== id);
      },
      (error) => console.error(error)
    );
  }
}
