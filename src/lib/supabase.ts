import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types (will be generated from Supabase)
export interface Database {
  public: {
    Tables: {
      cases: {
        Row: {
          id: string;
          case_number: string;
          title: string;
          type: string;
          client_id: string;
          attorney_id: string;
          status: string;
          date_opened: string;
          date_closed?: string;
          description?: string;
          jurisdiction?: string;
          court?: string;
          judge?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['cases']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['cases']['Insert']>;
      };
      clients: {
        Row: {
          id: string;
          name: string;
          email?: string;
          phone?: string;
          address?: string;
          company?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['clients']['Insert']>;
      };
      tasks: {
        Row: {
          id: string;
          title: string;
          description?: string;
          case_id?: string;
          assigned_to: string;
          assigned_by: string;
          status: string;
          priority: string;
          due_date?: string;
          completed_at?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['tasks']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['tasks']['Insert']>;
      };
      calendar_events: {
        Row: {
          id: string;
          title: string;
          type: string;
          date: string;
          start_time?: string;
          end_time?: string;
          location?: string;
          description?: string;
          case_id?: string;
          created_by: string;
          attendees?: string[];
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['calendar_events']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['calendar_events']['Insert']>;
      };
    };
  };
}