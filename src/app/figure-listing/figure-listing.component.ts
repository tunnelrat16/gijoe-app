import { Component, Input } from "@angular/core";

@Component({
  selector: "app-figure-listing",
  templateUrl: "./figure-listing.component.html",
  styleUrls: ["./figure-listing.component.scss"]
})
export class FigureListingComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() year!: string;
  @Input() team!: string;
  @Input() variation!: string;
  @Input() imageUrl!: string;

}
