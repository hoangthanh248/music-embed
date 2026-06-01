import Link from 'next/link';

export default function TermsPageVi() {
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
           <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Điều khoản & Miễn trừ trách nhiệm</h1>
           <p className="text-white/50 text-sm italic">Cập nhật lần cuối: Hôm nay</p>

           <h2 className="text-xl font-medium text-white pt-4">1. Dịch vụ hoàn toàn miễn phí</h2>
           <p className="text-sm">Music Embed Proxy là một dịch vụ API proxy nhúng video và nhạc hoàn toàn công cộng và 100% miễn phí. Chúng tôi không có các gói trả phí hay tính phí dưới mọi hình thức, chỉ hỗ trợ cộng đồng phát triển tự do không rào cản.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">2. Miễn trừ trách nhiệm (Disclaimer of Liability)</h2>
           <p className="text-sm">Dịch vụ API này được cung cấp <strong>"NGUYÊN TRẠNG" (AS IS)</strong> và không đi kèm bất kỳ hình thức bảo hành nào, dù cho biểu thị rõ ràng hay ngụ ý bóng gió. Những người tạo ra, phát hành không chịu trách nhiệm đối với bất kỳ thiệt hại, thời gian dừng hoạt động (downtime), gián đoạn dịch vụ hoặc tổn thất nào phát sinh từ việc bạn ứng dụng proxy này vào website của bạn.</p>

           <h2 className="text-xl font-medium text-white pt-4">3. Sự độc lập đối với nền tảng hãng</h2>
           <p className="text-sm">Music Embed Proxy độc lập, không liên kết, không được tài trợ, hay thuộc sở hữu pháp nhân của Spotify, Apple, YouTube, SoundCloud hay Deezer. Mọi tên gọi thương hiệu, biểu tượng logo thuộc về các chủ sở hữu nền tảng đó. Dịch vụ chỉ đơn giản là tự động hóa thao tác fetch dữ liệu công khai.</p>
           
           <h2 className="text-xl font-medium text-white pt-4">4. Chống lạm dụng (Rate Limiting)</h2>
           <p className="text-sm">Để đảm bảo quyền lợi chia sẻ server công bằng cho mọi nhà phát triển, chúng tôi đã cài đặt biện pháp giới hạn lượng gọi (100 request truy vấn cho mỗi một giờ trên mỗi địa chỉ IP). Chúng tôi có toàn quyền chặn đứng vĩnh viễn IP nếu như cảm thấy có lượt DDoS.</p>
        </div>
      </div>
    </main>
  );
}
