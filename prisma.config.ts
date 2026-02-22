import "dotenv/config";
import { defineConfig } from "prisma/config";

// Pastikan ini nge-print mysql://root... bukan file:./dev.db
console.log("DATABASE_URL TERDETEKSI:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Kita kasih fallback manual jika .env gagal dibaca
    url: process.env.DATABASE_URL || "mysql://root:@localhost:3306/pi_p2p_db",
  },
});