import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';
import { GridConstants } from './grid.constants'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,TableModule,ButtonModule,MultiSelectModule,FormsModule,ContextMenuModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {
  selected!: any[];
  selectedProduct!: any;
  @Input() items!: MenuItem[];
  @Input() selectedColumns!: any[];
  @Input() totalRecords!: number;
  @Input() loading!: boolean;
  @Input() dataSource!: any;
  @Input() columns!: any[];
  @Input() isCheckbox: boolean = true;
  @Input() scrollHeight: string = "200px";
  @Input() rowCount: number = 5;
  @Input() selectionMode: "single" | "multiple" | null | undefined = GridConstants.multipleSelection;
  @Input() isRowSelectable: (row: any) => boolean = () => true;
  @Input() disableCheckBox: (row: any) => boolean = (row) => false;
  @Input() loadData: (event: TableLazyLoadEvent) => void = () => {this.loading = false};
  @Output() onRowSelectEvent = new EventEmitter<any>();
  @Output() onRowUnSelectEvent = new EventEmitter<any>();
  @Output() onViewDetailClick = new EventEmitter<any>();

  ngOnInit(): void {
    this.items = [
      { label: 'View', icon: 'pi pi-fw pi-search', command: () => console.log("View") },
      { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => console.log("View") }
    ];
  }

  onRowSelect(event: any) {
    this.onRowSelectEvent.emit(event);
  }

  onRowUnselect(event: any) {
    this.onRowUnSelectEvent.emit(event);
  }

  onSelectionChange(value = []) {
    console.log(value);
  }

  onContextClick() {
    
  }
}
