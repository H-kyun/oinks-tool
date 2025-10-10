import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  location?: string;
  participants?: string[];
  type: 'meeting' | 'personal' | 'deadline' | 'reminder';
  color: string;
  description?: string;
}

export interface CalendarState {
  events: CalendarEvent[];
  selectedDate: string;
  viewMode: 'month' | 'week' | 'day';
  isLoading: boolean;
}

const initialState: CalendarState = {
  events: [
    {
      id: '1',
      title: 'Weekly Team Standup',
      startTime: '09:00',
      endTime: '09:30',
      date: new Date().toISOString().split('T')[0],
      location: 'Conference Room A',
      participants: ['John', 'Sarah', 'Mike'],
      type: 'meeting',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Project Deadline',
      startTime: '23:59',
      endTime: '23:59',
      date: new Date().toISOString().split('T')[0],
      type: 'deadline',
      color: 'bg-red-500'
    },
    {
      id: '3',
      title: 'Client Lunch',
      startTime: '12:30',
      endTime: '14:00',
      date: new Date().toISOString().split('T')[0],
      location: 'Downtown Restaurant',
      participants: ['Client A'],
      type: 'meeting',
      color: 'bg-green-500'
    },
    {
      id: '4',
      title: 'Personal Time',
      startTime: '18:00',
      endTime: '19:00',
      date: new Date().toISOString().split('T')[0],
      type: 'personal',
      color: 'bg-purple-500'
    }
  ],
  selectedDate: new Date().toISOString().split('T')[0],
  viewMode: 'month',
  isLoading: false
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<CalendarEvent>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setViewMode: (state, action: PayloadAction<'month' | 'week' | 'day'>) => {
      state.viewMode = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
});

export const { 
  addEvent, 
  updateEvent, 
  deleteEvent, 
  setSelectedDate, 
  setViewMode, 
  setLoading 
} = calendarSlice.actions;

export default calendarSlice.reducer;

