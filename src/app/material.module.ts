import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatSelectModule
} from "@angular/material"

@NgModule({
    imports: [MatButtonModule, MatExpansionModule, MatFormFieldModule,
        MatInputModule, MatSelectModule],
    exports: [MatButtonModule, MatExpansionModule, MatFormFieldModule,
        MatInputModule, MatSelectModule]
})
export class MaterialModule { }