import './App.css'

function App() {
  return (
    <div className="container">
      <h1>NexCart Documentation</h1>
      <p>Welcome to the NexCart e-commerce platform documentation.</p>
      <section>
        <h2>About NexCart</h2>
        <p>
          NexCart is a full-featured e-commerce platform built with React, TypeScript, and Vite.
        </p>
        <ul>
          <li><strong>Admin Dashboard:</strong> Platform management and oversight</li>
          <li><strong>Supplier Dashboard:</strong> Inventory and order management</li>
          <li><strong>Client Portal:</strong> Shopping and purchasing</li>
          <li><strong>Design System:</strong> Shared UI components library</li>
        </ul>
      </section>
      <section>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="/admin">Admin Portal (Port 3000)</a></li>
          <li><a href="/client">Client Portal (Port 3005)</a></li>
          <li><a href="/supplier">Supplier Portal (Port 3010)</a></li>
        </ul>
      </section>
    </div>
  )
}

export default App

