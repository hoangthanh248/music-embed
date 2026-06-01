import Link from 'next/link';
import DemoForm from '@/components/demo-form';

export default function DemoPageVi() {
  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-12 font-sans w-full max-w-5xl mx-auto pt-24 pb-12">
      <div className="w-full space-y-12 text-left relative z-10 flex flex-col items-center">
        <div className="w-full max-w-4xl flex justify-start">
          <Link href="/" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2">
            &larr; Trở về Trang chủ
          </Link>
        </div>
        
        <div className="space-y-6 text-center w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30 drop-shadow-lg">
            Dùng thử Live Demo
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-normal max-w-2xl mx-auto">
            Dán URL của nền tảng bất kỳ để kiểm tra mức độ phản hồi của API và xem trước iframe.
          </p>
        </div>

        <DemoForm 
          title="Dùng Thử Live Demo"
          placeholder="Dán link Spotify, Apple Music, TikTok..."
          buttonText="Phân giải"
          loadingText="Đang xử lý..."
        />
      </div>
    </main>
  );
}
