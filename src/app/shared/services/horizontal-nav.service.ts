import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//MenuBar
export interface HorizontalMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMenu[];
}

//MenuBar
export interface HorizontalMegaMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMegaMenu[];
}

@Injectable({
  providedIn: 'root'
})
export class HorizontalNavService {

  constructor() { }


  MENUITEMS: HorizontalMenu[] = [
  {
      title: 'Entrepreneur général', icon: 'file', type: 'sub', active: false,
      children: [
        { path: '/entrepreneur-general/fiche-soumission-main', title: 'Fiche soumission', type: 'link' },

      ]
  },
  {
      title: 'Partenaire estimation', icon: 'file', type: 'sub', active: false,
      children: [
        { path: '/partenaire-estimation/fiche-soumission-main', title: 'Fiche soumission', type: 'link' },

      ]
  }

  ];
  MEGAMENUITEMS: HorizontalMegaMenu[] = [

    {
      title: 'Apps', icon: 'layers', type: 'sub', active: false,
      children: [


        //{ path: '/apps/chat/chat01', title: 'Chat 01', type: 'link' },


      ]
    }

  ];

  //array
  items = new BehaviorSubject<HorizontalMenu[]>(this.MENUITEMS);
  itemsMega = new BehaviorSubject<HorizontalMegaMenu[]>(this.MEGAMENUITEMS);


}
