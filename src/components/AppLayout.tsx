import { Nav } from '.';

type AppPageLayoutProps = {
    children: React.ReactNode;
}

export const AppPageLayout: React.FC<AppPageLayoutProps> = ({children}) => {
    return( 
        <div>
            <header>
                <Nav /> 
            </header>
            <main>        
                {children}
            </main>
        </div>       
    );
};