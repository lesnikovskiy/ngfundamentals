import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./index";

@Directive({
    selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
    private element: HTMLElement;

    constructor(
        @Inject(JQ_TOKEN) private $: any,
        private elementRef: ElementRef
    ) {
        this.element = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.element.addEventListener("click", e => {
            this.$("#simple-modal").modal({});
        });
    }
}