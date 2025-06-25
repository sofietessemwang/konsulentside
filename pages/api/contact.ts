// pages/api/contact.ts
import { getDatabase } from '../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('=== API ROUTE CALLED ===');
  console.log('Method:', req.method);
  console.log('Body:', req.body);

  try {
    const db = getDatabase();  // No 'await' needed
    console.log('Database connection successful');

    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      
      console.log('Inserting data:', { name, email, message });
      
      // Insert using better-sqlite3 syntax
      const stmt = db.prepare('INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)');
      const result = stmt.run(name, email, message);
      
      console.log('Insert result:', result);
      
      res.status(200).json({ success: "Form submitted successfully", id: result.lastInsertRowid });

    } else if (req.method === 'GET') {
      console.log('Getting all submissions');
      
      const stmt = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC');
      const submissions = stmt.all();
      
      console.log('Found submissions:', submissions.length);
      
      res.status(200).json({ submissions });

    } else {
      res.status(405).json({ error: "Method not allowed" });
    }

  } catch (error:any) {
    console.error('=== ERROR IN API ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    res.status(500).json({ 
      error: "Internal server error", 
      details: error.message 
    });
  }
}