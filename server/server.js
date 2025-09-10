import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Mock data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User' }
]

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 199.99, category: 'Electronics' },
  { id: 4, name: 'Desk Chair', price: 299.99, category: 'Furniture' },
  { id: 5, name: 'Coffee Maker', price: 89.99, category: 'Appliances' }
]

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() })
})

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(user)
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.json(product)
})

app.get('/api/products/category/:category', (req, res) => {
  const categoryProducts = products.filter(p =>
    p.category.toLowerCase() === req.params.category.toLowerCase()
  )
  res.json(categoryProducts)
})

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'))
  })
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`API available at: http://localhost:${PORT}/api`)
})
