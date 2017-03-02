import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./index";

@Directive({
    selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
    @Input("modal-trigger") modalId: string; 

    private element: HTMLElement;

    constructor(
        @Inject(JQ_TOKEN) private $: any,
        private elementRef: ElementRef
    ) {
        this.element = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.element.addEventListener("click", e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}