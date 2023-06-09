export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Netflix_Data: {
        Row: {
          "As of": string | null
          "Days In Top 10": number | null
          id: string
          "Last Week Rank": string | null
          "Netflix Exclusive": string | null
          "Netflix Release Date": string | null
          Rank: number | null
          Title: string | null
          Type: string | null
          "Viewership Score": number | null
          "Year to Date Rank": string | null
        }
        Insert: {
          "As of"?: string | null
          "Days In Top 10"?: number | null
          id?: string
          "Last Week Rank"?: string | null
          "Netflix Exclusive"?: string | null
          "Netflix Release Date"?: string | null
          Rank?: number | null
          Title?: string | null
          Type?: string | null
          "Viewership Score"?: number | null
          "Year to Date Rank"?: string | null
        }
        Update: {
          "As of"?: string | null
          "Days In Top 10"?: number | null
          id?: string
          "Last Week Rank"?: string | null
          "Netflix Exclusive"?: string | null
          "Netflix Release Date"?: string | null
          Rank?: number | null
          Title?: string | null
          Type?: string | null
          "Viewership Score"?: number | null
          "Year to Date Rank"?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
