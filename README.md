# MongoDB Database Seeder (Node.js)

A command-line tool for seeding and managing auction data in a MongoDB database.

## Prerequisites

- Node.js
- MongoDB installed and running locally
- npm (Node.js package manager)

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

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

## Seed Data

The seed data is stored in `seed-data.json`. You can modify this file to add or change the initial data that will be seeded into the database.
