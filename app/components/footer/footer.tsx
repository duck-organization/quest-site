import { Link } from 'react-router';
import './footer.css';

const links = [
    { label: 'Home', to: '/' },
    { label: 'Docs', to: '/bot/docs' },
    { label: 'Sponsors', to: '/sponsors' },
    { label: 'Bot Invite', to: '/bot/invite' },
    { label: 'Privacy Policy', to: '/legal/privacy-policy' },
];

export function Footer() {
    return (
        <footer className="footer">
            <div className="footerLinks">
                {links.map(({ label, to }) => (
                    <Link key={to} to={to} className="footerLink">
                        {label}
                    </Link>
                ))}
            </div>
            <p className="footerCopy">© 2026 Duck Organization. All rights reserved.</p>
        </footer>
    );
}
