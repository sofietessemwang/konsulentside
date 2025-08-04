// lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database | null = null;

export function getDatabase() {  // Remove 'async' - better-sqlite3 is synchronous
  if (!db) {
    try {
      const dbPath = path.join(process.cwd(), 'contact.db');
      console.log('Creating database at:', dbPath);
      
      // Use 'new Database()' instead of 'open()'
      db = new Database(dbPath);
      
      // Create table - no 'await' needed, it's synchronous
      db.exec(`
        CREATE TABLE IF NOT EXISTS submissions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      console.log('Table created/verified successfully');
      
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }
  
  return db;
}