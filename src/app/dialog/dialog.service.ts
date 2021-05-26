import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ApplicationRef,
  EmbeddedViewRef,
  Injector,
  Type
} from '@angular/core';
import {DialogComponent} from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  appendDialogComponentToBody() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
  }

  public open(componentType: Type<any>) {
    this.appendDialogComponentToBody();
    this.dialogComponentRef.instance.childComponentType = componentType;
  }

}
