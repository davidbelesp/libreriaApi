import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-bread-crum',
  templateUrl: './bread-crum.component.html',
  styleUrl: './bread-crum.component.css'
})
export class BreadCrumComponent implements OnInit, OnDestroy{

  public items : MenuItem[] | undefined;
  home : MenuItem = {}
  public titleSub$: Subscription;

  constructor(private router:Router) {
    this.titleSub$ = this.getDataRouter().subscribe(
      ({title}) => {
        this.items = [];
        this.items.push({label:title})
      }
    )
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  getDataRouter(){
    return this.router.events.pipe(
      filter((e:any) => e instanceof ActivationEnd),
      filter((e:ActivationEnd) => e.snapshot.firstChild === null),
      map((e:ActivationEnd) => e.snapshot.data)
      );
  }

  ngOnInit(): void {


    
  }

}
