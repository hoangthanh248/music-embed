import Link from 'next/link';

export default function TermsPageVi() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-auto relative p-8 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-pink-900 opacity-10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/vi" className="text-white/50 hover:text-white transition-colors text-sm inline-block items-center flex gap-2">
          &larr; Trở về Trang chủ
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed">
           <header className="border-b border-white/10 pb-6">
             <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Điều khoản Sử dụng & Miễn trừ Trách nhiệm</h1>
             <p className="text-white/50 text-sm italic">Ngày hiệu lực: Tháng 06, 2026</p>
           </header>

           <div className="space-y-8 text-sm md:text-base">
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">1. Chấp thuận Điều khoản</h2>
               <p>Bằng cách truy cập hoặc sử dụng API của Music Embed Proxy (&quot;Dịch vụ&quot;), bạn tự động đồng ý chịu sự ràng buộc và tuân thủ các Điều khoản Sử dụng này. Nếu bạn không đồng ý với một phần hoặc toàn bộ điều khoản, vui lòng ngừng sử dụng hệ thống API lập tức.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">2. Mô tả Dịch vụ</h2>
               <p>Music Embed Proxy là một dịch vụ API thân thiện công cộng và miễn phí, được xây dựng nhằm mục đích giúp các nhà phát triển dễ dàng nhúng nhạc và video từ nhiều nền tảng phong phú (Spotify, Apple Music, YouTube, SoundCloud, Deezer, Amazon Music, TikTok) một cách nhanh chóng. Chúng tôi cung cấp các endpoint chuyển đổi URL nguồn thành siêu dữ liệu chuẩn oEmbed và mã HTML dòng iframe.</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li>Dịch vụ không yêu cầu bạn phải đăng ký tài khoản rườm rà, không cần token xác thực hoặc bất kỳ gói trả phí ẩn nào.</li>
                 <li>Chúng tôi hoàn toàn không lưu trữ, phân phối, truyền tải mã nguồn hay can thiệp bản quyền cấp tệp tin (file-level) của âm thanh hay video. Toàn bộ API chỉ mang đặc tính giải mã siêu dữ liệu tham chiếu (metadata).</li>
               </ul>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">3. Miễn trừ Bảo hành (Cung cấp &quot;Nguyên trạng&quot;)</h2>
               <p>Dịch vụ này được đội ngũ quản lý duy trì và cung cấp tự do dựa trên nguyên tắc <strong>&quot;NGUYÊN TRẠNG&quot; (AS IS)</strong> và <strong>&quot;TÙY CƠ SẴN SÀNG&quot; (AS AVAILABLE)</strong>, không đi kèm bất kỳ hình thức bảo lãnh nào, dù là biểu đạt cụ thể hay ngụ ý bóng gió. Các nhà phát triển của dự án bác bỏ mọi cam kết về năng lực thương mại, tính sẵn sàng kinh doanh, độ sát sao nhu cầu mong đợi cá nhân và việc không vi phạm quyền lợi nào khác.</p>
               <p className="mt-3">Chúng tôi tuyệt đối không đưa ra một hiệp ước mức độ (SLA) nào liên quan đến thời gian hoạt động (uptime), độ trễ, hay độ ổn định của API. Tất cả sự cố ngẫu nhiên về cấu hình mạng, thời gian đáo hạn của máy chủ Edge, hay những thay đổi URL bố cục giao diện gốc từ các hãng âm nhạc đều có khả năng khiến dịch vụ Proxy này gặp gián đoạn mà không thể báo trước.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">4. Giới hạn Trách nhiệm pháp lý</h2>
               <p>Ngoại trừ các điều khoản bất khả kháng tại địa phương, những nhà lập trình viên phát triển nền tảng, quản trị viên, hay nhà đóng góp máy chủ của tổ chức Music Embed Proxy sẽ hoàn toàn vô can và không phải bồi thường bất kỳ tổn thất, hình phạt thiệt hại nào – cho dù đó là tài sản trực tiếp, gián tiếp, tổn thất doanh thu thuần, uy tín thương hiệu cá nhân, dữ liệu thất thoát, hay việc gián đoạn chuỗi cung ứng người xem liên kết bắt nguồn từ sự cố kỹ thuật của Dịch vụ này.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">5. Độc lập Nền tảng & Quyền Sở hữu Trí tuệ (IP)</h2>
               <p>Music Embed Proxy về nền tảng là một công cụ mã nguồn độc lập chuyên dụng vì lợi ích sức khỏe cộng đồng phát triển phần mềm. Chúng tôi <strong>không có mối quan hệ pháp lý, không liên đới tài chính, không đại diện và cũng không được cấp vốn/tài trợ</strong> bởi các tập đoàn lớn bao gồm Spotify, Apple, YouTube, SoundCloud, Deezer, Amazon Music hay TikTok. Toàn bộ logo, nhãn hiệu thương mại, tài nguyên hình ảnh bản quyền thuộc về quyền pháp lý sở hữu đích thực của các hãng mạng nội dung tương ứng.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">6. Giới hạn Cuộc gọi (Rate Limiting) & Quy tắc Sử dụng Công bằng</h2>
               <p>Nhằm mục đích san sẻ công bằng tài nguyên lưu lượng máy chủ cho tất cả người dùng đồng thời bảo vệ hạ tầng, chúng tôi đã đưa vào hệ thống hạn mức quy định truy cập (hiện tại đo lường ở mức 100 truy vấn trên mỗi địa chỉ IP thuộc về một giờ nhất định). Mọi nhà phát triển có trách nhiệm đạo đức:</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li>Triển khai cơ chế lưu đệm (Caching) phản hồi API tại các máy chủ lưu trữ / CDN cá nhân để góp phần giảm thiểu lượng truy vấn ngầm xuống hệ thống của chúng tôi.</li>
                 <li>Không được lạm dụng thiết kế công cụ bot bóc tách dữ liệu (web scraping) khổng lồ hoặc lập trình lệnh thực thi tấn công từ chối dịch vụ diện rộng (DDoS).</li>
               </ul>
               <p className="mt-3">Hệ thống tường lửa Edge Firewall sẽ tự động phân loại và cấm vĩnh viễn (ban vĩnh viễn) các cụm địa chỉ IP hiển thị dấu hiệu cố tính phá hoại nền tảng kiến trúc mạng.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">7. Thay đổi và Cập nhật Điều khoản</h2>
               <p>Chúng tôi độc quyền lưu giữ quyền lợi sửa đổi, nâng cấp, hay thay thế văn bản Điều khoản này trong bất kỳ mốc thời điểm nào mà không cần gửi email thông báo trước tới cộng đồng. Việc các lập trình viên vẫn tiếp tục gửi yêu cầu fetch API sau mốc thời gian văn bản tinh chỉnh đồng nghĩa với sự đồng thuận hoàn toàn với các quy chuẩn tài liệu mới nhất.</p>
             </section>
           </div>
        </div>
      </div>
    </main>
  );
}
