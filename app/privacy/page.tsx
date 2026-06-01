import Link from 'next/link';

export default function PrivacyPageVi() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-auto relative p-8 font-sans">
      
      
      <div className="max-w-4xl mx-auto space-y-8 text-left relative z-10 pt-10 pb-20">
        <Link href="/" className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 inline-flex w-fit">
          &larr; Trở về Trang chủ
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-8 text-white/80 leading-relaxed">
           <header className="border-b border-white/10 pb-6">
             <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Chính sách Bảo mật & Quyền Riêng tư</h1>
             <p className="text-white/50 text-sm italic">Ngày hiệu lực: Tháng 06, 2026</p>
           </header>

           <div className="space-y-8 text-sm md:text-base">
             <p>Tại không gian Music Embed Proxy, định hướng bảo vệ tài nguyên kỹ thuật số và bảo vệ triệt để quyền riêng tư của những người dùng cuối (End-users) đang duyệt website của bạn là ưu tiên kiến trúc được đặt lên cao nhất. Tài liệu này cung cấp chi tiết mọi luồng dữ liệu mà chúng tôi cần thao tác phần cứng (cũng như những dữ liệu chúng tôi cam kết &quot;tuyệt đối không chạm vào&quot;).</p>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">1. Kiến trúc Phi trạng thái (Stateless Architecture)</h2>
               <p>Máy chủ cốt lõi của Proxy được chúng tôi chủ đích lập trình theo mẫu loại bỏ sự hiện diện của cơ sở dữ liệu vĩnh viễn (Database-less design). Toàn bộ API hoạt động phi trạng thái và phân tán qua các trung tâm dữ liệu Edge Cloud: hệ thống chỉ thu nhận siêu liên kết URL gốc, truy vấn thông tin với tốc độ phần nghìn giây và phản hồi trực tiếp các thẻ iframe gọn gàng trở lại thiết bị gọi hàm.</p>
               <p className="mt-3">Song song với việc không mở cổng tạo tài khoản thành viên, tập tin gốc của chúng tôi không yêu cầu thu thập, lưu diễn hay khai thác bất cứ số liệu cá nhân nào, bao gồm họ tên, giới tính định danh, thông tin ví điện tử, số điện thoại hoặc email liên lạc.</p>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">2. Lời Hứa Không Trình theo dõi (Zero Tracking Commitment)</h2>
               <p>Nhóm đội ngũ của chúng tôi hoàn toàn tẩy chay phương pháp bán rẻ luồng truy cập. Bạn có thể vững tin rằng API trung gian này <strong>hoàn toàn không tiêm nhiễm, đính kèm, hay chèn ẩn</strong> bất lỳ dạng script quảng cáo mạng, mã nhúng phân tích hành vi phức tạp (chẳng hạn như Google Analytics, hệ thống Retargeting Meta Pixel) hoặc thiết lập các thuật toán chấm điểm nhân khẩu học lên khung hiển thị iframe đầu ra.</p>
               <p className="mt-3">Mục đích xây dựng mã nguồn ứng dụng này là trao tặng các kỹ sư phần mềm một điểm tựa tiện lợi nhất để họ đem nội dung Media đa phương tiện tới website mình mà không vô tình biến người dùng chân chính thành món hàng thu thập của các mạng trung gian độc hại.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">3. Dữ liệu Máy khách (IP) & Giải pháp Chống lạm dụng (Security)</h2>
               <p>Bởi tính chất hoàn toàn miễn phí, hệ thống phải đương đầu với vô số làn sóng botnet spam. Nhằm giữ hệ thống server Edge luôn được tối ưu, chúng tôi thiết lập cơ chế kiểm định truy vấn tự động nhận dạng bằng thông tin địa chỉ IP truy cập tại thời điểm gọi lệnh.</p>
               <ul className="list-disc pl-5 mt-3 space-y-1 text-white/60">
                 <li><strong>Kho tạm bộ nhớ đệm (Cache):</strong> Bất kỳ thao tác khởi chạy nào truyền tới API sẽ mang theo chữ ký địa chỉ mạng (IP) của Server hoặc Client đó. Cấu trúc IP này sẽ được băm bảo mật và gửi lên máy trạm Upstash Redis chỉ vì một mục đích duy nhất: đếm lưu lượng vượt chỉ tiêu an toàn.</li>
                 <li><strong>Thủ tục thanh tẩy tự động (TTL):</strong> Vòng lặp đếm IP này hoàn toàn phụ thuộc vào biến cấu trúc sinh tồn thời gian ngắn (Time-to-Live). Ngay khi vượt mốc, cấu trúc lập tức phân rã tự động phá hủy. Chúng tôi không thu thập kho địa chỉ máy, không phân tích khoanh vùng vị trí địa lý của bạn vượt ra ngoài ranh giới phòng vệ an ninh cơ bản.</li>
               </ul>
             </section>
             
             <section>
               <h2 className="text-xl font-semibold text-white mb-3">4. Khung nhúng của bên thứ ba (Third-party Iframes) và Chính sách liên đới</h2>
               <p>Cần làm rõ với ranh giới trách nhiệm, một khi API Music Embed Proxy tuôn ra mã hộp thoại HTML cuối và hộp nội dung âm thanh đó chính thức kết xuất hình ảnh lên trình duyệt web khách hàng, lúc này <strong>đường truyền đã hoàn toàn kết nối thẳng tay từ web thiết bị người dùng đến các kho dữ liệu đa phương tiện quốc tế</strong> của Spotify, Apple Music, YouTube, SoundCloud, Amazon Music hoặc TikTok.</p>
               <p className="mt-3">Khởi đầu tại quy trình đó, Dịch vụ Proxy của chúng tôi ngay lập tức kết thúc vòng đời. Bất kỳ phiên làm việc lưu Cookies, cache audio hay các lệnh ghi nhớ vị trí xem dở mà nằm bên trong khung cửa sổ phát nhạc mini đó sẽ phụ thuộc hệ thống nền tảng gốc. Chính sách thu thập dữ liệu của nền tảng phát hành nội dung sẽ có hiệu lực thi hành đầy đủ nhất và nằm ngoài khả năng can thiệp của ứng dụng Proxy chúng tôi.</p>
             </section>

             <section>
               <h2 className="text-xl font-semibold text-white mb-3">5. Liên hệ với đội ngũ kỹ thuật</h2>
               <p>Nếu bạn thực sự vẫn muốn cung cấp đánh giá sâu sắc hơn liên quan đến hạ tầng bảo mật dữ liệu của ứng dụng hay có nguyện vọng chia sẻ kinh nghiệm xử lý máy chủ Edge ngầm, bạn được chào đón nhiệt liệt đi tới trang <Link href="/contact" className="text-blue-400 hover:underline">Liên hệ kỹ thuật</Link> để gõ vài dòng tin nhắn kết nối dự án.</p>
             </section>
           </div>
        </div>
      </div>
    </main>
  );
}
