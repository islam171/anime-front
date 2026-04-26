import {Component, ContentChild, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-nav-item',
    imports: [NgTemplateOutlet],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
})
export class NavItem {
    @ContentChild('itemTemplate') itemTemplate: TemplateRef<any> | null = null;


}
