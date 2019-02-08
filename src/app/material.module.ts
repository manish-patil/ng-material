import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule
} from "@angular/material"

@NgModule({
    imports: [MatExpansionModule,
        MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatTableModule, MatPaginatorModule],
    exports: [MatExpansionModule,
        MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatTableModule, MatPaginatorModule]
})
export class MaterialModule { }