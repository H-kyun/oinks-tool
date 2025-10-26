export class CreateSchedulesCategoryDto {
    user_id:number;
    parent_id?: number;
    name:string;
    color?: string;
    sort_order?: number;
}
