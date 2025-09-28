import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-96 flex items-center justify-center bg-muted/30">
        <h1 className="text-2xl font-bold">Content above footer</h1>
      </div>
      <Footer />
    </div>
  );
}