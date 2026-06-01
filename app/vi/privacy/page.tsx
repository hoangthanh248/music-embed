import Link from 'next/link';

export default function PrivacyPageVi() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-auto relative p-8 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/vi" className="text-white/50 hover:text-white transition-colors text-sm inline-block items-center flex gap-2">
          &larr; Trở về Trang chủ
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-6 text-white/80 leading-relaxed">
           <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Chính sách bảo mật, an toàn dữ liệu</h1>
           <p className="text-white/50 text-sm italic">Cập nhật lần cuối: Hôm nay</p>

           <h2 className="text-xl font-medium text-white pt-4">1. Kiến trúc phi trạng thái (Stateless)</h2>
           <p className="text-sm">Bản chất của Music Embed Proxy là một proxy API không trạng thái (stateless route) hoạt động hoàn toàn bằng trình xử lý Edge Worker. Nghĩa là chúng tôi <strong>tuyệt đối không lưu trữ</strong>, tái sử dụng hay rao bán bất cứ truy vấn log nào của người dùng. Dữ liệu chạy qua API chỉ nhằm phục vụ web bạn.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">2. Không chứa trình theo dõi (Zero Tracking)</h2>
           <p className="text-sm">API và cả các output sinh ra không cố ý chèn, can thiệp bất kỳ mã script quảng cáo hay tracking-pixel nào để theo dấu thao tác từ người dùng của bạn. Đây là không gian an toàn quyền riêng tư, chặn các middleman tracking để website thật sự tôn trọng End-User.</p>

           <h2 className="text-xl font-medium text-white pt-4">3. Log địa chỉ máy tính (IP Address) & Bộ đệm</h2>
           <p className="text-sm">Có một tiến trình duy nhất thực sự mượn IP của bạn, đó là dịch vụ chống spam/DDos (Rate Limiting). Để giới hạn mức trần 100 truy vấn mỗi giờ/IP, chúng tôi mã hóa IP và đẩy tạm vào kho Redis (Upstash). Dữ liệu này tự xóa sạch bóng sau thời gian vòng đời TTL.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">4. Ứng dụng nguồn đóng từ nền tảng hãng</h2>
           <p className="text-sm">Khi End-user nhấn xem / chơi nhạc từ trong khung iframe nhúng của các nền tảng thật (như thẻ iframe của Spotify, hay của YouTube), luồng xử lý và dữ liệu đó hoàn toàn tuân theo bản cam kết chính sách bảo mật gốc của các ông trùm này, chứ không qua proxy chúng tôi nữa.</p>
        </div>
      </div>
    </main>
  );
}
