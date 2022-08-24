import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @ViewChild('dTable') datatable: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $(this.datatable.nativeElement).DataTable();
  }
}
