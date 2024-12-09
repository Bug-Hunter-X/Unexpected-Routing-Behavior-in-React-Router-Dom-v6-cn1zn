```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ children }) {
  // add any common layout elements here 
    const location = useLocation();
    console.log('Current location:', location.pathname);
  return <div>{children}</div>;
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

export default App;
```