import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor() { }
  @ViewChild('dTable') datatable: any;


  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $(this.datatable.nativeElement).DataTable();
  }

}
