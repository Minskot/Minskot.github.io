import CourseworkPdfTabs from '@/components/CourseworkPdfTabs';

export default function CalculusIIDifferentialPage() {
    return (
        <section className="space-y-4">
            <CourseworkPdfTabs />
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-black dark:text-white">多元函数微分学</h2>
                <a
                    href="/coursework/calculus-ii-differential.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    Open in new tab
                </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <iframe
                    src="/coursework/calculus-ii-differential.pdf#view=FitH"
                    title="多元函数微分学 PDF"
                    className="w-full h-[78vh]"
                />
            </div>
        </section>
    );
}
