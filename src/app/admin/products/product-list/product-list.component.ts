import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @ViewChild('dTable') datatable: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $(this.datatable.nativeElement).DataTable();
  }

}
