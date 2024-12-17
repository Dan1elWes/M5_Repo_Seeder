# MongoDB Database Seeder (Node.js)

A command-line tool for seeding and managing auction data in a MongoDB database.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally (Make sure MongoDB service is running on port 27017)
- npm (Node.js package manager)
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Verify MongoDB is running:
   - Windows: Check Services app for "MongoDB Server"
   - Linux/Mac: Run `sudo systemctl status mongodb`

## Usage

The tool provides several commands:

### Seed the database
```bash
npm run seed
# or
node seeder.js seed
```

### Clear all data
```bash
npm run clear
# or
node seeder.js clear
```

### List all items
```bash
npm run list
# or
node seeder.js list
```

## Data Structure

The seed data includes auction items with the following fields:
- title: Name of the auction item
- description: Detailed description of the item
- start_price: Initial bidding price
- reserve_price: Minimum price for the item to be sold

## Modifying Seed Data

The seed data is stored in `seed-data.json`. You can modify this file to add or change the initial data that will be seeded into the database.

## Troubleshooting

1. If you get a connection error:
   - Verify MongoDB is running on port 27017
   - Check MongoDB service status
   - Ensure no firewall is blocking the connection

2. If npm install fails:
   - Delete node_modules folder and package-lock.json
   - Run `npm install` again
   - Ensure you have the correct Node.js version installed
