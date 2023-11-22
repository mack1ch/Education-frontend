import { Header } from '@/widgets/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Header />
            <main style={{ flexGrow: '1', overflowY: 'auto', paddingBottom: '2rem' }}>
                {children}
            </main>
        </div>
    );
}
