import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 p-8">
        <h1 className="text-2xl font-bold">Header component with scrolling navigation</h1>
        <p className="mt-4">Scroll down to see the header background change</p>
        <div className="mt-8 space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-20 bg-muted rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
}