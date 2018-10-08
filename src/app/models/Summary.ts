/*
this class describe the object to show on summary
 */
export class SummaryDTO {
  constructor(
    public title: string,
    public text: string,
    public value: string,
    public icon: string,
    public style: string
  ) {
  }
}
