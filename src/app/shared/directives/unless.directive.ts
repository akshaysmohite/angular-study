import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{
    @Input() appUnless:boolean;
    constructor(private templateRef:TemplateRef<any>,private viewContainer: ViewContainerRef) { }

    ngOnInit(){
        if(!this.appUnless){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }else{
            this.viewContainer.clear();
        }
    }
    

}
