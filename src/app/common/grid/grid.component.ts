import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GridConstants } from './grid.constants'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,TableModule,ButtonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  selected!: any[];
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

  onRowSelect(event: any) {
    this.onRowSelectEvent.emit(event);
  }

  onRowUnselect(event: any) {
      this.onRowUnSelectEvent.emit(event);
  }

  onSelectionChange(value = []) {
    console.log(value);
  }
}
