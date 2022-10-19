import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[dropdown]'
})

export class DropdownDirective {

@Input() set dropdown(condition: boolean) {
    if (condition) {
        this.vcRef.createEmbeddedView(this.templateRef)
    } else {
        this.vcRef.clear();
    }
}

constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

ngOnInit(){}



}