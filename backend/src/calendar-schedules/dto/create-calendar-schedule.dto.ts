export class CreateCalendarScheduleDto {
    user_id: number;
    category_id?: number;
    title: string;
    contents?: string;
    location?: string;
    is_all_day?: boolean;
    start_at: Date;
    end_at: Date;
    timezone?: string;
    people?: string;
    visibility?: string;
    status?: string;
    is_recurring?: boolean;
    rrule?: string;
    exdate?: string;
}
