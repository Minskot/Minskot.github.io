import CourseworkNavbar from '@/components/CourseworkNavbar';

export default function CourseworkLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-black dark:text-white">Coursework</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Course notes and reference materials.
                </p>
            </div>
            <CourseworkNavbar />
            <div className="pt-2">{children}</div>
        </div>
    );
}
