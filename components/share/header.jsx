import MainNavMenu from "./navigation-menu";

export default function Header () {
    return (
        <header className="py-4">
            <div className="container mx-auto">
                <MainNavMenu />
            </div>
        </header>
    );
}