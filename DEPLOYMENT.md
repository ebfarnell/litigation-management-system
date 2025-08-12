# Deployment Guide

## 🚀 Serverless Deployment with Supabase + Render

This guide will help you deploy your litigation management system using a modern serverless architecture.

### Architecture Overview

- **Frontend**: React app hosted on Render (static site)
- **Database**: Supabase (PostgreSQL with real-time features)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage (for documents)
- **API**: Supabase Edge Functions (serverless)

## Step 1: Set up Supabase

1. **Create a Supabase project**:
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization and create project

2. **Set up the database**:
   - Go to SQL Editor in your Supabase dashboard
   - Copy and paste the contents of `supabase/schema.sql`
   - Run the SQL to create all tables and policies

3. **Configure Authentication**:
   - Go to Authentication > Settings
   - Enable email authentication
   - Set up your site URL (will be your Render URL)
   - Configure email templates if needed

4. **Get your credentials**:
   - Go to Settings > API
   - Copy your Project URL and anon/public key
   - Save these for the next step

## Step 2: Deploy to Render

1. **Connect GitHub to Render**:
   - Go to [render.com](https://render.com)
   - Sign up/login and connect your GitHub account
   - Click "New +" and select "Static Site"
   - Connect this repository: `ebfarnell/litigation-management-system`

2. **Configure the deployment**:
   - **Name**: `litigation-management-system`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./build`

3. **Set Environment Variables**:
   ```
   REACT_APP_SUPABASE_URL=https://your-project.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
   REACT_APP_ENVIRONMENT=production
   ```

4. **Deploy**:
   - Click "Create Static Site"
   - Render will automatically build and deploy your app
   - You'll get a URL like `https://litigation-management-system.onrender.com`

## Step 3: Configure Supabase for Production

1. **Update Site URL**:
   - Go back to Supabase > Authentication > Settings
   - Set Site URL to your Render URL
   - Add your Render URL to Redirect URLs

2. **Set up Row Level Security**:
   - The schema already includes RLS policies
   - Test that users can only see their own data

## Step 4: Create Demo Users (Optional)

If you want to create real Supabase users instead of using demo accounts:

1. Go to Supabase > Authentication > Users
2. Create users with these emails:
   - `admin@lawfirm.com`
   - `attorney@lawfirm.com`
   - `paralegal@lawfirm.com`

3. After creating users, insert their profiles:
```sql
INSERT INTO profiles (id, email, first_name, last_name, role, law_firm_id, law_firm_name)
VALUES 
  ('user-id-from-auth', 'admin@lawfirm.com', 'Robert', 'Blake', 'admin', '550e8400-e29b-41d4-a716-446655440000', 'Blake & Associates');
```

## Step 5: Test Your Deployment

1. Visit your Render URL
2. Try logging in with demo accounts:
   - `master@unfy.com` / `EMunfy2025`
   - `admin@lawfirm.com` / `admin123`
3. Test creating cases, tasks, and calendar events
4. Verify data persists in Supabase

## 🔧 Advanced Configuration

### Custom Domain
1. In Render dashboard, go to your site settings
2. Add your custom domain
3. Update Supabase Site URL to match

### Email Configuration
1. In Supabase > Authentication > Settings
2. Configure SMTP settings for production emails
3. Customize email templates

### File Storage
1. Enable Supabase Storage
2. Create buckets for document uploads
3. Set up storage policies

## 📊 Monitoring & Analytics

### Supabase Dashboard
- Monitor database performance
- View real-time user activity
- Check API usage

### Render Dashboard
- Monitor deployment status
- View build logs
- Check site performance

## 🔒 Security Checklist

- ✅ Row Level Security enabled
- ✅ Environment variables secured
- ✅ HTTPS enforced
- ✅ Authentication required
- ✅ Role-based access control

## 💰 Cost Estimation

### Supabase (Free tier includes):
- 500MB database
- 1GB file storage
- 2GB bandwidth
- 50,000 monthly active users

### Render (Free tier includes):
- Static sites with custom domains
- Automatic SSL
- Global CDN
- 100GB bandwidth

**Total monthly cost**: $0 for small usage, scales as needed

## 🚀 Going Live

1. Update DNS to point to your Render URL
2. Test all functionality in production
3. Set up monitoring and backups
4. Train users on the new system

Your litigation management system is now live and serverless! 🎉