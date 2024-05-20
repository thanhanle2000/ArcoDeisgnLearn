function WhiteContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-STANDARDMARGINANDPADDING bg-[color:var(--color-bg-1)] overflow-hidden">
            {children}
        </div>
    );
}

export default WhiteContainer;
