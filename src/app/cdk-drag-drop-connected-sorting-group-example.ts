import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
})
export class CdkDragDropConnectedSortingGroupExample {
  todo = [
    {
      name: 'Get to work',
      description: 'Take the bike there',
      user: { firstName: 'Irene', lastName: 'Ipsen' },
    },
    { name: 'Pick up groceries', description: 'all the good ones' },
    { name: 'Go home', description: 'Go straight home after work' },
    {
      name: 'Fall asleep',
      description: 'Get to sleep by counting sheep',
      user: { firstName: 'Sune', lastName: 'Monrad' },
    },
  ];

  doing = [
    { name: 'Get up', description: 'Get up and get the day started' },
    { name: 'Brush teeth', description: 'All of them' },
    { name: 'Take a shower', description: "Don't make it too long" },
    {
      name: 'Check e-mail',
      description: 'Mark the most important ones',
      user: { firstName: 'Sune', lastName: 'Monrad' },
    },
  ];

  done = new Array<{
    name: string;
    description: string;
    user?: { firstName: string; lastName: string };
  }>();

  todo1 = [
    {
      name: 'Get to work',
      description: 'Take the bike there',
      user: { firstName: 'Irene', lastName: 'Ipsen' },
    },
    { name: 'Pick up groceries', description: 'all the good ones' },
    { name: 'Go home', description: 'Go straight home after work' },
    {
      name: 'Fall asleep',
      description: 'Get to sleep by counting sheep',
      user: { firstName: 'Sune', lastName: 'Monrad' },
    },
  ];

  doing1 = [
    { name: 'Get up', description: 'Get up and get the day started' },
    { name: 'Brush teeth', description: 'All of them' },
    { name: 'Take a shower', description: "Don't make it too long" },
    {
      name: 'Check e-mail',
      description: 'Mark the most important ones',
      user: { firstName: 'Sune', lastName: 'Monrad' },
    },
  ];

  done1 = new Array<{
    name: string;
    description: string;
    user?: { firstName: string; lastName: string };
  }>();

  drop(
    event: CdkDragDrop<
      {
        name: string;
        description: string;
        user?: { firstName: string; lastName: string }
      }[]
    >
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getInitials(user: { firstName: string; lastName: string }): string {
    return (
      user.firstName[0].toLocaleUpperCase() +
      user.lastName[0].toLocaleUpperCase()
    );
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
