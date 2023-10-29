import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { DonationDialogComponent } from '../../shared/components/donation-dialog/donation-dialog.component';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Technical support',
    children: [
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
    ],
  },
  {
    name: 'Real Estate support',
    children: [
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
    ],
  },
  {
    name: 'Material support',
    children: [
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
    ],
  },
  {
    name: 'Consulting support',
    children: [
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
      { name: 'Lorem ipsum corn' },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'fundrz-compain',
  templateUrl: './compain.component.html',
  styleUrls: ['./compain.component.scss'],
})
export class CompainComponent {
  showOptions = false;
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  open() {
    //DonationDialogComponent
    this.dialog.open(DonationDialogComponent, {
      width: '639px',
      height: '470px',
    });
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
}
