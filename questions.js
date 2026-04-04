// Data extracted from source.xlsx
// Total questions: 250
const questions = [
    {
        "stt":  1,
        "cauHoi":  "Ở phương Tây, dân tộc xuất hiện khi:",
        "traloi1":  "Phương thức sản xuất tư bản chủ nghĩa được xác lập thay thế phương thức sản xuất phong kiến.",
        "traloi2":  "Phương thức sản xuất phong kiến được xác lập thay thế phương thức sản xuất chiếm hữu nô lệ.",
        "traloi3":  "Phương thức sản xuất xã chủ nghĩa được xác lập thay thế phương thức sản xuất tư bản chủ nghĩa.",
        "traloi4":  "Phương thức sản xuất hàng hoá được xác lập thay thế phương thức sản xuất tự cung, tự cấp.",
        "dapAn":  "traloi1",
        "dapAnText":  "Phương thức sản xuất tư bản chủ nghĩa được xác lập thay thế phương thức sản xuất phong kiến."
    },
    {
        "stt":  2,
        "cauHoi":  "Chế độ dân chủ XHCN ở Việt Nam được xác lập từ thời điểm nào?",
        "traloi1":  "Sau Cách mạng tháng Tám năm 1945.",
        "traloi2":  "Sau Cách mạng tháng Tư năm 1975.",
        "traloi3":  "Từ năm 1976, khi đổi tên nước thành Cộng hoà xã hội chủ nghĩa Việt Nam.",
        "traloi4":  "Từ Đại hội VI của Đảng năm 1986.",
        "dapAn":  "traloi1",
        "dapAnText":  "Sau Cách mạng tháng Tám năm 1945."
    },
    {
        "stt":  3,
        "cauHoi":  "Biện pháp nào sau đây là thực hiện chính sách giải quyết việc làm?",
        "traloi1":  "Mở rộng các hình tức trợ giúp người nghèo.",
        "traloi2":  "Mở rộng hệ thống trường lớp.",
        "traloi3":  "Bồi dưỡng đội ngũ cán bộ quản lí.",
        "traloi4":  "Nâng cao trình độ người lao động.",
        "dapAn":  "traloi4",
        "dapAnText":  "Nâng cao trình độ người lao động."
    },
    {
        "stt":  4,
        "cauHoi":  "Nước ta quá độ lên chủ nghĩa xã hội theo hình thức nào dưới đây?",
        "traloi1":  "Quá độ trực tiếp.",
        "traloi2":  "Quá độ gián tiếp.",
        "traloi3":  "Quá độ nhảy vọt.",
        "traloi4":  "Quá độ vừa gián tiếp vừa có bước nhảy vọt.",
        "dapAn":  "traloi2",
        "dapAnText":  "Quá độ gián tiếp."
    },
    {
        "stt":  5,
        "cauHoi":  "Chủ nghĩa xã hội khoa học trình bày bao nhiêu luận điểm cơ bản?",
        "traloi1":  "3 luận điểm.",
        "traloi2":  "5 luận điểm.",
        "traloi3":  "6 luận điểm.",
        "traloi4":  "4 luận điểm.",
        "dapAn":  "traloi4",
        "dapAnText":  "4 luận điểm."
    },
    {
        "stt":  6,
        "cauHoi":  "Hội nghị đại biểu các Đảng Cộng sản và công nhân quốc tế họp tại Matxcova (11-1957) đã tổng kết thông qua mấy qui luật chung của công cuộc cải tạo và xây dựng CNXH?",
        "traloi1":  "6 qui luật chung.",
        "traloi2":  "7 qui luật chung.",
        "traloi3":  "8 qui luật chung.",
        "traloi4":  "9 qui luật chung.",
        "dapAn":  "traloi4",
        "dapAnText":  "9 qui luật chung."
    },
    {
        "stt":  7,
        "cauHoi":  "Cơ sở nào là nền tảng để giữ gìn quan hệ hôn nhân gia đình tốt đẹp?",
        "traloi1":  "Hạnh phúc.",
        "traloi2":  "Kinh tế.",
        "traloi3":  "Môn đăng, hộ đối.",
        "traloi4":  "Cảm xúc.",
        "dapAn":  "traloi1",
        "dapAnText":  "Hạnh phúc."
    },
    {
        "stt":  8,
        "cauHoi":  "Tiêu dùng hợp lý trong gia đình có nghĩa là:",
        "traloi1":  "Sử dụng hết các khoản thu nhập trong gia đình cho chi tiêu hàng tháng.",
        "traloi2":  "Sử dụng tối đa các khoản thu nhập của các thành viên để đảm bảo đời sống vật chất và tinh thần của họ.",
        "traloi3":  "Sử dụng hợp lý các khoản thu nhập của các thành viên trong gia đình, đảm bảo đời sống vật chất, tinh thần của họ.",
        "traloi4":  "Sử dụng hiệu quá các khoản thu nhập của các thành viên trong gia đình vào trong việc đầu tư sinh lời.",
        "dapAn":  "traloi3",
        "dapAnText":  "Sử dụng hợp lý các khoản thu nhập của các thành viên trong gia đình, đảm bảo đời sống vật chất, tinh thần của họ."
    },
    {
        "stt":  9,
        "cauHoi":  "Giai cấp công nhân được các nhà kinh điển xác định trên phương diện cơ bản nào?",
        "traloi1":  "Kinh tế – xã hội và chính trị – ngoại giao.",
        "traloi2":  "Kinh tế – xã hội và chính trị – xã hội.",
        "traloi3":  "Kinh tế – văn hoá và chính trị – xã hội.",
        "traloi4":  "Kinh tế – ngoại giao và chính trị – quân sự.",
        "dapAn":  "traloi2",
        "dapAnText":  "Kinh tế – xã hội và chính trị – xã hội."
    },
    {
        "stt":  10,
        "cauHoi":  "Việt Nam hiện nay có bao nhiêu tộc người sinh sống trên lãnh thổ đất nước?",
        "traloi1":  "54 dân tộc, trong đó có 52 tộc người thiểu số.",
        "traloi2":  "54 dân tộc, trong đó có 53 tộc người thiểu số.",
        "traloi3":  "55 dân tộc, trong đó có 53 tộc người thiểu số.",
        "traloi4":  "55 dân tộc, trong đó có 54 tộc người thiểu số.",
        "dapAn":  "traloi2",
        "dapAnText":  "54 dân tộc, trong đó có 53 tộc người thiểu số."
    },
    {
        "stt":  11,
        "cauHoi":  "Chọn đáp án đúng nhất. V.I.Lênin phát hiện xu thế khách quan của sự phát triển quan hệ dân tộc:",
        "traloi1":  "Các dân tộc tộc người trong một quốc gia đoàn kết lại với nhau chống thế lực thù địch.",
        "traloi2":  "Các dân tộc tộc người trong một quốc gia tự nguyện đoàn kết lại với nhau chống thế lực thù địch.",
        "traloi3":  "Các dân tộc ở nhiều quốc gia thuộc địa khác nhau liên hiệp lại với nhau để xoá bỏ ách đô hộ của phong kiến thực dân.",
        "traloi4":  "Các dân tộc trong từng quốc gia, các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau.",
        "dapAn":  "traloi4",
        "dapAnText":  "Các dân tộc trong từng quốc gia, các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau."
    },
    {
        "stt":  12,
        "cauHoi":  "Chức năng văn hoá của gia đình là:",
        "traloi1":  "Thể hiện trình độ học vấn của các thành viên trong gia đình ấy.",
        "traloi2":  "Thể hiện trình độ văn hoá của các thành viên trong gia đình.",
        "traloi3":  "Giáo hoá, cảm hoá, chỗ dựa tinh thần cho các thành viên trong gia đình.",
        "traloi4":  "Nơi lưu giữ, sáng tạo và thụ hưởng truyền thống văn hoá tốt đẹp của dân tộc, tộc người.",
        "dapAn":  "traloi4",
        "dapAnText":  "Nơi lưu giữ, sáng tạo và thụ hưởng truyền thống văn hoá tốt đẹp của dân tộc, tộc người."
    },
    {
        "stt":  13,
        "cauHoi":  "Chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Chủ nghĩa Mác – Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị, chính trị xã hội từ sự chuyển biến tất yếu của xã hội loài người.",
        "traloi2":  "Một trong ba bộ phận hợp thành chủ nghĩa Mác – Lênin.",
        "traloi3":  "Những yếu tố từ đó nảy sinh ra chế độ tương lai.",
        "traloi4":  "Chủ nghĩa Mác – Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị, chính trị xã hội từ sự chuyển biến tất yếu của xã hội loài người; một trong ba bộ phận hợp thành chủ nghĩa Mác – Lênin.",
        "dapAn":  "traloi4",
        "dapAnText":  "Chủ nghĩa Mác – Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị, chính trị xã hội từ sự chuyển biến tất yếu của xã hội loài người; một trong ba bộ phận hợp thành chủ nghĩa Mác – Lênin."
    },
    {
        "stt":  14,
        "cauHoi":  "Giai cấp công nhân hiện nay và giai cấp công nhân truyền thống ở thế kỷ XIX:",
        "traloi1":  "Hoàn toàn tương đồng về bản chất và hình thức biểu hiện.",
        "traloi2":  "Vừa có điểm tương đồng vừa có điểm khác biệt.",
        "traloi3":  "Hoàn toàn khác biệt về bản chất và hình thức biểu hiện.",
        "traloi4":  "Tương đồng về bản chất, khác biệt về hình thức.",
        "dapAn":  "traloi2",
        "dapAnText":  "Vừa có điểm tương đồng vừa có điểm khác biệt."
    },
    {
        "stt":  15,
        "cauHoi":  "Nội dung sứ mệnh lịch sử của giai cấp công nhân được thể hiện trong lĩnh vực:",
        "traloi1":  "Kinh tế, chính trị, xã hội, văn hoá, tư tưởng.",
        "traloi2":  "Kinh tế, quân sự, chính trị, văn hoá, xã hội.",
        "traloi3":  "Xã hội, quân sự, chính trị, ngoại giao, kinh tế.",
        "traloi4":  "Ngoại giao, chính trị, xã hội, văn hoá, kinh tế.",
        "dapAn":  "traloi1",
        "dapAnText":  "Kinh tế, chính trị, xã hội, văn hoá, tư tưởng."
    },
    {
        "stt":  16,
        "cauHoi":  "Chọn đáp án đúng nhất, giai cấp công nhân chỉ có thể giải phóng mình thông qua việc:",
        "traloi1":  "Thực hiện cách mạng bạo lực.",
        "traloi2":  "Thực hiện đấu tranh bạo lực giai cấp.",
        "traloi3":  "Đồng thời giải phóng các giai cấp bị áp bức bóc lột khác, giải phóng xã hội, giải phóng con người.",
        "traloi4":  "Giải phóng giai cấp nông dân, giai cấp vô sản bần cùng thông qua hình thức bạo lực giành chính quyền.",
        "dapAn":  "traloi3",
        "dapAnText":  "Đồng thời giải phóng các giai cấp bị áp bức bóc lột khác, giải phóng xã hội, giải phóng con người."
    },
    {
        "stt":  17,
        "cauHoi":  "Nội dung: “Coi trọng giữ vững bản chất giai cấp công nhân và các nguyên tắc sinh hoạt của Đảng” nằm trong Đại hội nào?",
        "traloi1":  "Đại hội đại biểu toàn quốc lần thứ XII (2016).",
        "traloi2":  "Đại hội đại biểu toàn quốc lần thứ XI (2011).",
        "traloi3":  "Đại hội đại biểu toàn quốc lần thứ X (2006).",
        "traloi4":  "Đại hội đại biểu toàn quốc lần thứ VIII (1996).",
        "dapAn":  "traloi1",
        "dapAnText":  "Đại hội đại biểu toàn quốc lần thứ XII (2016)."
    },
    {
        "stt":  18,
        "cauHoi":  "C.Mác và Ph.Ăngghen cho rằng nguyên nhân thất bại của phong trào đấu tranh của giai cấp công nhân chủ yếu là do:",
        "traloi1":  "Không có đường lối cách mạng đúng đắn.",
        "traloi2":  "Giai cấp công nhân đơn độc.",
        "traloi3":  "Không có Đảng Cộng sản lãnh đạo.",
        "traloi4":  "Không đoàn kết quốc tế.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp công nhân đơn độc."
    },
    {
        "stt":  19,
        "cauHoi":  "Nhà nước xuất hiện từ khi:",
        "traloi1":  "Con người xuất hiện.",
        "traloi2":  "Xuất hiện chế độ cộng sản nguyên thủy.",
        "traloi3":  "Mâu thuẫn giai cấp không thể điều hòa được.",
        "traloi4":  "Phân hóa lao động.",
        "dapAn":  "traloi3",
        "dapAnText":  "Mâu thuẫn giai cấp không thể điều hòa được."
    },
    {
        "stt":  20,
        "cauHoi":  "Sự ra đời của chủ nghĩa xã hội khoa học dựa vào điều kiện nào?",
        "traloi1":  "Điều kiện kinh tế, xã hội, khoa học tự nhiên.",
        "traloi2":  "Điều kiện kinh tế, xã hội, khoa học tự nhiên, tư tưởng lý luận.",
        "traloi3":  "Điều kiện xã hội, khoa học tự nhiên, tư tưởng lý luận.",
        "traloi4":  "Điều kiện kinh tế, xã hội, tư tưởng lý luận.",
        "dapAn":  "traloi2",
        "dapAnText":  "Điều kiện kinh tế, xã hội, khoa học tự nhiên, tư tưởng lý luận."
    },
    {
        "stt":  21,
        "cauHoi":  "Chọn đáp án KHÔNG đúng theo chủ nghĩa Mác – Lênin cơ cấu xã hội – giai cấp, xuất hiện các tầng lớp xã hội mới là:",
        "traloi1":  "Tầng lớp doanh nhân.",
        "traloi2":  "Tầng lớp tiểu chủ.",
        "traloi3":  "Tầng lớp tri thức mới.",
        "traloi4":  "Tầng lớp những người giàu có và trung lưu.",
        "dapAn":  "traloi3",
        "dapAnText":  "Tầng lớp tri thức mới."
    },
    {
        "stt":  22,
        "cauHoi":  "Đặc trưng về lĩnh vực kinh tế của chủ nghĩa xã hội là:",
        "traloi1":  "Nền kinh tế phát triển cao, công nghiệp hoá, hiện đại hoá nhanh chóng.",
        "traloi2":  "Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước, thúc đẩy nhanh chóng chế độ sở hữu công cộng về tư liệu sản xuất chủ yếu.",
        "traloi3":  "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        "traloi4":  "Nền kinh tế phát triển cao dựa trên sự phát triển của khoa học công nghệ hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        "dapAn":  "traloi3",
        "dapAnText":  "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu."
    },
    {
        "stt":  23,
        "cauHoi":  "Gia đình Việt Nam hiện nay có thể được gọi là:",
        "traloi1":  "Gia đình quá độ từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại.",
        "traloi2":  "Gia đình hiện đại hoá với lối sống mới, nếp sống mới.",
        "traloi3":  "Gia đình văn hoá với các giá trị truyền thống của dân tộc được bảo tồn và truyền lưu.",
        "traloi4":  "Gia đình mang văn hoá đặc tính của Phương Đông.",
        "dapAn":  "traloi1",
        "dapAnText":  "Gia đình quá độ từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại."
    },
    {
        "stt":  24,
        "cauHoi":  "Một trong những phương án để nâng cao chất lượng dân số ở nước ta là:",
        "traloi1":  "Nâng cao hiểu biết của người dân về sức khỏe sinh sản.",
        "traloi2":  "Nâng cao đời sống của nhân dân.",
        "traloi3":  "Nâng cao vai trò của gia đình.",
        "traloi4":  "Nâng cao hiểu quả của công tác dân số.",
        "dapAn":  "traloi1",
        "dapAnText":  "Nâng cao hiểu biết của người dân về sức khỏe sinh sản."
    },
    {
        "stt":  25,
        "cauHoi":  "Chủ nghĩa xã hội khoa học ra đời khi nào?",
        "traloi1":  "Đầu Thế kỉ XIX.",
        "traloi2":  "Những năm 40 của Thế kỉ XIX.",
        "traloi3":  "Đầu Thế kỉ XX.",
        "traloi4":  "Những năm 40 của Thế kỉ XX.",
        "dapAn":  "traloi2",
        "dapAnText":  "Những năm 40 của Thế kỉ XIX."
    },
    {
        "stt":  26,
        "cauHoi":  "V.I.Lênin phát hiện xu thế khách quan của sự phát triển quan hệ dân tộc:",
        "traloi1":  "Dân tộc thiểu số lấy dân tộc đa số làm chuẩn.",
        "traloi2":  "Dân tộc thiểu số có xu hướng tách ra thành dân tộc độc lập.",
        "traloi3":  "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.",
        "traloi4":  "Dân tộc thiểu số đoàn kết lại với nhau hình thành cộng đồng dân tộc độc lập.",
        "dapAn":  "traloi3",
        "dapAnText":  "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập."
    },
    {
        "stt":  27,
        "cauHoi":  "Tiền đề để cải tạo toàn diện, sâu sắc và triệt để xã hội cũ và xây dựng thành công xã hội mới là:",
        "traloi1":  "Giai cấp công nhân giành được quyền bình đẳng với các giai cấp khác trong xã hội.",
        "traloi2":  "Giai cấp công nhân giành lấy quyền lực thống trị xã hội.",
        "traloi3":  "Giai cấp nông dân, người lao động giành lấy quyền lực xã hội.",
        "traloi4":  "Giai cấp công nhân đánh bại được giai cấp tư bản giành lấy quyền lực xã hội.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp công nhân giành lấy quyền lực thống trị xã hội."
    },
    {
        "stt":  28,
        "cauHoi":  "Những chính sách dân tộc của Đảng, Nhà nước Việt Nam hiện nay chú trọng:",
        "traloi1":  "Tính cách mạng và tiến bộ, đồng thời còn mang tính nhân văn sâu sắc.",
        "traloi2":  "Tính tiên tiến, đậm đà bản sắc văn hoá dân tộc.",
        "traloi3":  "Tính khoa học, cách mạng và tính toàn diện sâu sắc.",
        "traloi4":  "Tính tiến bộ và công bằng xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tính cách mạng và tiến bộ, đồng thời còn mang tính nhân văn sâu sắc."
    },
    {
        "stt":  29,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Để tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN cần:",
        "traloi1":  "Cải cách thể chế và phương thức hoạt động của Nhà nước.",
        "traloi2":  "Xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của nhân dân.",
        "traloi3":  "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực.",
        "traloi4":  "Đấu tranh phòng chống tham nhũng, lãng phí, thực hành tiết kiệm.",
        "dapAn":  "traloi2",
        "dapAnText":  "Xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của nhân dân."
    },
    {
        "stt":  30,
        "cauHoi":  "Trong Đại hội XI của Đảng nêu: “Đoàn kết dân tộc có vị trí […] quan trọng trong sự nghiệp cách mạng của nước ta”. Chọn đáp án đúng điền vào chỗ trống.",
        "traloi1":  "Đặc biệt.",
        "traloi2":  "Sách lược.",
        "traloi3":  "Vô cùng.",
        "traloi4":  "Chiến lược.",
        "dapAn":  "traloi4",
        "dapAnText":  "Chiến lược."
    },
    {
        "stt":  31,
        "cauHoi":  "C.Mác và Ph.Ăngghen đã sử dụng thuật ngữ nào sau đây để chỉ về giai cấp công nhân? Chọn đáp án KHÔNG đúng.",
        "traloi1":  "Giai cấp vô sản.",
        "traloi2":  "Giai cấp vô sản hiện đại.",
        "traloi3":  "Giai cấp công nhân đại công nghiệp.",
        "traloi4":  "Tầng lớp công nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Tầng lớp công nhân."
    },
    {
        "stt":  32,
        "cauHoi":  "Nội dung nào là một trong những mục tiêu của chính sách dân số nước ta?",
        "traloi1":  "Tuyên truyền, giáo dục biện pháp kế hoạch hóa gia đình.",
        "traloi2":  "Tổ chức tốt bộ máy làm công tác dân số.",
        "traloi3":  "Nâng cao chất lượng dân số.",
        "traloi4":  "Phát triển nguồn nhân lực.",
        "dapAn":  "traloi3",
        "dapAnText":  "Nâng cao chất lượng dân số."
    },
    {
        "stt":  33,
        "cauHoi":  "Trong tác phẩm “Tuyên ngôn Đảng Cộng sản”, sự khác biệt về chất giữa hình thái KTXH cộng sản chủ nghĩa với các hình thái KTXH ra đời trước là:",
        "traloi1":  "Kinh tế có nền tảng khoa học, kỹ thuật phát triển cao, năng suất lao động cao, nhận thức chính trị xã hội của người dân cao.",
        "traloi2":  "Con người làm chủ tồn tại xã hội của chính mình, thì do đó làm chủ tự nhiên, làm chủ cả bản thân mình trở thành người tự do.",
        "traloi3":  "Con người làm chủ tư liệu sản xuất, chinh phục tự nhiên, chinh phục vũ trụ, chinh phục bản thân mình để trở thành người tự do.",
        "traloi4":  "Quan hệ sản xuất phát triển, con người làm chủ tư liệu sản xuất, chinh phục tự nhiên, chinh phục vũ trụ, chinh phục bản thân mình để trở thành người tự do.",
        "dapAn":  "traloi2",
        "dapAnText":  "Con người làm chủ tồn tại xã hội của chính mình, thì do đó làm chủ tự nhiên, làm chủ cả bản thân mình trở thành người tự do."
    },
    {
        "stt":  34,
        "cauHoi":  "Trên phương diện chế độ chính trị, xã hội thì dân chủ là:",
        "traloi1":  "Một hình thức hay hình thái nhà nước.",
        "traloi2":  "Một nguyên tắc quản lý xã hội.",
        "traloi3":  "Quyền lực thuộc về nhân dân.",
        "traloi4":  "Một phạm trù vĩnh viễn.",
        "dapAn":  "traloi1",
        "dapAnText":  "Một hình thức hay hình thái nhà nước."
    },
    {
        "stt":  35,
        "cauHoi":  "Đặc trưng, phương hướng, nhiệm vụ xây dựng CNXH ở Việt Nam hiện nay trong Đại hội XI, XII của Đảng, gồm có:",
        "traloi1":  "5 đặc trưng, 5 phương hướng, 7 nhiệm vụ.",
        "traloi2":  "6 đặc trưng, 6 phương hướng, 8 nhiệm vụ.",
        "traloi3":  "7 đặc trưng, 7 phương hướng, 10 nhiệm vụ.",
        "traloi4":  "8 đặc trưng, 8 phương hướng, 12 nhiệm vụ.",
        "dapAn":  "traloi4",
        "dapAnText":  "8 đặc trưng, 8 phương hướng, 12 nhiệm vụ."
    },
    {
        "stt":  36,
        "cauHoi":  "Theo quan điểm của chủ nghĩa Mác – Lênin, dân tộc được hiểu là:",
        "traloi1":  "Quốc gia dân tộc, tộc người.",
        "traloi2":  "Cộng đồng người bao gồm nhiều tộc người.",
        "traloi3":  "Cộng đồng người có chung lãnh thổ.",
        "traloi4":  "Nhiều tộc người sinh sống trên một lãnh thổ.",
        "dapAn":  "traloi1",
        "dapAnText":  "Quốc gia dân tộc, tộc người."
    },
    {
        "stt":  37,
        "cauHoi":  "Chọn đáp án đúng nhất. Gia đình có ảnh hưởng rất lớn đối với:",
        "traloi1":  "Mối quan hệ giữa các thành viên trong xã hội.",
        "traloi2":  "Sự hình thành và phát triển nhân cách của từng người.",
        "traloi3":  "Mối quan hệ giữa các thành viên trong gia đình.",
        "traloi4":  "Sự tồn tại, vận động và phát triển của xã hội.",
        "dapAn":  "traloi2",
        "dapAnText":  "Sự hình thành và phát triển nhân cách của từng người."
    },
    {
        "stt":  38,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, đặc trưng thể hiện thuộc tính bản chất của chủ nghĩa xã hội là:",
        "traloi1":  "Xã hội do giai cấp công nhân làm chủ.",
        "traloi2":  "Xã hội do giai cấp vô sản làm chủ.",
        "traloi3":  "Xã hội do lao động xã hội làm chủ.",
        "traloi4":  "Xã hội do nhân dân lao động làm chủ.",
        "dapAn":  "traloi4",
        "dapAnText":  "Xã hội do nhân dân lao động làm chủ."
    },
    {
        "stt":  39,
        "cauHoi":  "Theo V.I.Lênin nội dung cơ bản nhất khi bước vào thời kỳ quá độ lên CNXH là:",
        "traloi1":  "Chính trị đã chuyển trọng tâm sang kinh tế.",
        "traloi2":  "Kinh tế đã chuyển trọng tâm sang chính trị.",
        "traloi3":  "Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực dân chủ.",
        "traloi4":  "Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực kinh tế.",
        "dapAn":  "traloi4",
        "dapAnText":  "Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực kinh tế."
    },
    {
        "stt":  40,
        "cauHoi":  "Ở phương Đông, dân tộc được hình thành trên cơ sở:",
        "traloi1":  "Một cộng đồng kinh tế phát triển tới một mức độ nhất định.",
        "traloi2":  "Một nền văn hoá, một tâm lý dân tộc đã phát triển tương đối chín muồi.",
        "traloi3":  "Một cộng đồng văn minh đã phát triển tương đối cao.",
        "traloi4":  "Một cộng đồng các bộ tộc liên kết lại với nhau.",
        "dapAn":  "traloi2",
        "dapAnText":  "Một nền văn hoá, một tâm lý dân tộc đã phát triển tương đối chín muồi."
    },
    {
        "stt":  41,
        "cauHoi":  "V.I.Lênin khẳng định liên minh công, nông là vấn đề mang tính […] để đảm bảo cho thắng lợi cho cách mạng tháng Mười Nga năm 1917. Chọn đáp án đúng nhất điền vào chỗ trống.",
        "traloi1":  "Sống còn.",
        "traloi2":  "Khách quan.",
        "traloi3":  "Cần thiết.",
        "traloi4":  "Nguyên tắc.",
        "dapAn":  "traloi4",
        "dapAnText":  "Nguyên tắc."
    },
    {
        "stt":  42,
        "cauHoi":  "Chọn đáp án đúng nhất, giai cấp công nhân và nhân dân lao động sử dụng nhà nước của mình, do mình làm chủ như một công cụ có hiệu lực để:",
        "traloi1":  "Đập tan nhà nước tư bản, xây dựng nhà nước XHCN.",
        "traloi2":  "Thực thi quyền bình đẳng XHCN.",
        "traloi3":  "Xây dựng xã hội hoàn toàn mới, thực thi quyền dân chủ XHCN.",
        "traloi4":  "Cải tạo xã hội cũ và tổ chức xây dựng xã hội mới, theo lý tưởng và mục tiêu của CNXH.",
        "dapAn":  "traloi4",
        "dapAnText":  "Cải tạo xã hội cũ và tổ chức xây dựng xã hội mới, theo lý tưởng và mục tiêu của CNXH."
    },
    {
        "stt":  43,
        "cauHoi":  "Sự kiện nào đánh dấu chủ nghĩa xã hội khoa học từ lý luận thành thực tiễn?",
        "traloi1":  "Nhà nước Xô viết, năm 1917.",
        "traloi2":  "Cách mạng Tháng 10 Nga, năm 1917.",
        "traloi3":  "Cách mạng vô sản Pháp.",
        "traloi4":  "Nhà nước Công xã Pari.",
        "dapAn":  "traloi2",
        "dapAnText":  "Cách mạng Tháng 10 Nga, năm 1917."
    },
    {
        "stt":  44,
        "cauHoi":  "Quy luật đấu tranh giai cấp mang tính phổ biến cho sự phát triển của các xã hội có giai cấp là:",
        "traloi1":  "Giai cấp nào muốn bảo vệ lợi ích cho giai cấp mình thì phải đứng lên thực hiện cuộc đấu tranh cách mạng để tự giải phóng chính mình.",
        "traloi2":  "Giai cấp nào muốn bảo vệ lợi ích cho giai cấp mình thì phải tổ chức một cuộc đấu tranh để tự giải phóng chính mình.",
        "traloi3":  "Mỗi giai cấp đứng ở vị trí trung tâm đều phải tìm cách liên minh với các giai cấp, tầng lớp xã hội khác có lợi ích phù hợp với mình.",
        "traloi4":  "Mỗi giai cấp muốn đạt được quyền lực đều phải tìm cách liên minh với các giai cấp, tầng lớp xã hội khác có lợi ích phù hợp với mình.",
        "dapAn":  "traloi3",
        "dapAnText":  "Mỗi giai cấp đứng ở vị trí trung tâm đều phải tìm cách liên minh với các giai cấp, tầng lớp xã hội khác có lợi ích phù hợp với mình."
    },
    {
        "stt":  45,
        "cauHoi":  "Liên hiệp công nhân các dân tộc phản ánh sự thống nhất giữa:",
        "traloi1":  "Công nhân các nước thuộc địa với công nhân các nước chính quốc.",
        "traloi2":  "Giải phóng dân tộc với giải phóng giai cấp.",
        "traloi3":  "Vấn đề dân tộc thuộc địa với vấn đề vô sản chính quốc.",
        "traloi4":  "Vấn đề dân tộc với vấn đề giai cấp.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giải phóng dân tộc với giải phóng giai cấp."
    },
    {
        "stt":  46,
        "cauHoi":  "Tính dân tộc của Nhà nước ta được thể hiện như thế nào dưới đây?",
        "traloi1":  "Nhà nước ta là Nhà nước của các dân tộc.",
        "traloi2":  "Mỗi dân tộc có bản sắc riêng của mình.",
        "traloi3":  "Nhà nước chăm lo lợi ích mọi mặt cho các dân tộc ở Việt Nam.",
        "traloi4":  "Dân tộc nào cũng có chữ viết riêng.",
        "dapAn":  "traloi3",
        "dapAnText":  "Nhà nước chăm lo lợi ích mọi mặt cho các dân tộc ở Việt Nam."
    },
    {
        "stt":  47,
        "cauHoi":  "Cơ cấu kinh tế trong thời kì quá độ lên CNXH vận động theo:",
        "traloi1":  "Cơ chế kế hoạch hoá, tập trung.",
        "traloi2":  "Cơ chế thị trường, có sự can thiệp của nhà nước trong khủng hoảng kinh tế.",
        "traloi3":  "Cơ chế thị trường, có sự quản lý của Nhà nước pháp quyền XHCN.",
        "traloi4":  "Cơ chế thị trường tự do cạnh canh với vai trò bàn tay vô hình của nhà nước.",
        "dapAn":  "traloi3",
        "dapAnText":  "Cơ chế thị trường, có sự quản lý của Nhà nước pháp quyền XHCN."
    },
    {
        "stt":  48,
        "cauHoi":  "Con đẻ của nền đại công nghiệp tư bản chủ nghĩa là:",
        "traloi1":  "Giai cấp công nhân.",
        "traloi2":  "Giai cấp vô sản.",
        "traloi3":  "Giai cấp vô sản hiện đại.",
        "traloi4":  "Giai cấp vô sản bần cùng.",
        "dapAn":  "traloi1",
        "dapAnText":  "Giai cấp công nhân."
    },
    {
        "stt":  49,
        "cauHoi":  "“Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại”. Phát biểu này nằm trong tác phẩm nào?",
        "traloi1":  "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin.",
        "traloi2":  "Cương lĩnh về các vấn đề dân tộc và vấn đề thuộc địa.",
        "traloi3":  "Tuyên ngôn nhân quyền và dân quyền.",
        "traloi4":  "Tuyên ngôn độc lập.",
        "dapAn":  "traloi1",
        "dapAnText":  "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin."
    },
    {
        "stt":  50,
        "cauHoi":  "Các nhà tư tưởng Hy Lạp cổ đại đã dùng cụm từ nào sau đây để nói đến dân chủ?",
        "traloi1":  "democracy.",
        "traloi2":  "demokratos.",
        "traloi3":  "democracia.",
        "traloi4":  "démocratie.",
        "dapAn":  "traloi2",
        "dapAnText":  "demokratos."
    },
    {
        "stt":  51,
        "cauHoi":  "Chức năng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là:",
        "traloi1":  "Trấn áp các lực lượng phá hoại.",
        "traloi2":  "Tổ chức và xây dựng.",
        "traloi3":  "Giữ gìn chế độ xã hội.",
        "traloi4":  "Giữ gìn trật tự xã hội, bảo vệ Tổ quốc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Tổ chức và xây dựng."
    },
    {
        "stt":  52,
        "cauHoi":  "Những chính sách dân tộc của Đảng, Nhà nước Việt Nam hiện nay không cho phép:",
        "traloi1":  "Xây dựng tư tưởng văn hoá riêng biệt giữa các dân tộc anh em.",
        "traloi2":  "Xuất hiện tư tưởng kì thị, chia rẽ dân tộc.",
        "traloi3":  "Gây chia rẽ, mất đoàn kết trong nội bộ Đảng.",
        "traloi4":  "Tiếp thu, giao lưu văn hoá với các dân tộc ở các quốc gia khác.",
        "dapAn":  "traloi2",
        "dapAnText":  "Xuất hiện tư tưởng kì thị, chia rẽ dân tộc."
    },
    {
        "stt":  53,
        "cauHoi":  "Chọn đáp án đúng nhất theo chủ nghĩa Mác – Lênin chỉ ra điều kiện chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình. Đó là:",
        "traloi1":  "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng.",
        "traloi2":  "Sự xuất hiện của chính đảng vô sản kiểu mới của giai cấp công nhân.",
        "traloi3":  "Sự liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác.",
        "traloi4":  "Sự liên minh giữa Công – Nông – Các tầng lớp lao động khác do giai cấp công nhân lãnh đạo với sự phát triển về số lượng, chất lượng và thông qua đội tiên phong là Đảng Cộng sản.",
        "dapAn":  "traloi4",
        "dapAnText":  "Sự liên minh giữa Công – Nông – Các tầng lớp lao động khác do giai cấp công nhân lãnh đạo với sự phát triển về số lượng, chất lượng và thông qua đội tiên phong là Đảng Cộng sản."
    },
    {
        "stt":  54,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Trong giai đoạn đầu thời kỳ quá độ, cơ cấu xã hội – giai cấp ở Việt Nam có điểm nổi bật:",
        "traloi1":  "Sự biến đổi cơ cấu vừa đảm bảo tính phổ biến, vừa mang tính đặc thù của xã hội Việt Nam.",
        "traloi2":  "Trong sự biến đổi của cơ cấu, vị trí của các giai cấp, tầng lớp xã hội ngày càng được khẳng định.",
        "traloi3":  "Sự biến đổi cơ cấu phụ thuộc vào qui luật biến đổi cơ cấu xã hội – giai cấp trên thế giới.",
        "traloi4":  "Trong sự biến đổi của cơ cấu, vai trò của các giai cấp, tầng lớp xã hội ngày càng được khẳng định.",
        "dapAn":  "traloi3",
        "dapAnText":  "Sự biến đổi cơ cấu phụ thuộc vào qui luật biến đổi cơ cấu xã hội – giai cấp trên thế giới."
    },
    {
        "stt":  55,
        "cauHoi":  "Quyền tự quyết dân tộc:",
        "traloi1":  "Các dân tộc tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
        "traloi2":  "Các dân tộc thộc địa tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
        "traloi3":  "Các dân tộc có quyền tự lựa chọn chế độ chính trị và con đường phát triển cho dân tộc mình.",
        "traloi4":  "Quyền tách ra thành lập một quốc gia dân tộc độc lập và quyền tự nguyện liên hiệp với dân tộc khác.",
        "dapAn":  "traloi2",
        "dapAnText":  "Các dân tộc thộc địa tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị."
    },
    {
        "stt":  56,
        "cauHoi":  "“Thời đoạn Xtalin” trực tiếp vận dụng và phát triển chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Từ năm 1917 đến 1920.",
        "traloi2":  "Từ năm 1920 đến 1924.",
        "traloi3":  "Từ năm 1945 đến 1953.",
        "traloi4":  "Từ năm 1924 đến 1953.",
        "dapAn":  "traloi4",
        "dapAnText":  "Từ năm 1924 đến 1953."
    },
    {
        "stt":  57,
        "cauHoi":  "Đặc điểm nổi bật và bao trùm của thời quá độ lên chủ nghĩa xã hội ở nước ta là:",
        "traloi1":  "Xã hội dân giàu, nước mạnh, dân chủ, văn minh.",
        "traloi2":  "Sự tồn tại đan xen và đáu tranh lẫn nhau giữa những yếu tố của xã hội mới và những tàn dư của xã hội cũ.",
        "traloi3":  "Các dân tộc trong nước bình đẳng, đoàn kết.",
        "traloi4":  "Nền kinh tế phát triển với trình độ cao.",
        "dapAn":  "traloi2",
        "dapAnText":  "Sự tồn tại đan xen và đáu tranh lẫn nhau giữa những yếu tố của xã hội mới và những tàn dư của xã hội cũ."
    },
    {
        "stt":  58,
        "cauHoi":  "Chọn đáp án đúng nhất. Mối quan hệ giữa dân chủ XHCN với nhà nước XHCN là:",
        "traloi1":  "Dân chủ XHCN là mục đích cho việc xây dựng và hoạt động của nhà nước XHCN.",
        "traloi2":  "Dân chủ XHCN là động lực cho việc xây dựng và hoạt động của nhà nước XHCN.",
        "traloi3":  "Dân chủ XHCN là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước XHCN.",
        "traloi4":  "Nhà nước XHCN là cơ quan ban hành cơ chế xây dựng dân chủ XHCN.",
        "dapAn":  "traloi3",
        "dapAnText":  "Dân chủ XHCN là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước XHCN."
    },
    {
        "stt":  59,
        "cauHoi":  "Nội dung nào là đặc trưng cơ bản về chính trị của chủ nghĩa xã hội ở nước ta?",
        "traloi1":  "Là một xã hôi dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        "traloi2":  "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
        "traloi3":  "Con người được giải phóng khỏi áp bức, bất công.",
        "traloi4":  "Do dân lao động làm chủ.",
        "dapAn":  "traloi4",
        "dapAnText":  "Do dân lao động làm chủ."
    },
    {
        "stt":  60,
        "cauHoi":  "Thực tiễn nào đánh dấu nền dân chủ XHCN chính thức được xác lập?",
        "traloi1":  "Công nghiệp hơi nước ở Anh năm 1791.",
        "traloi2":  "Đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871.",
        "traloi3":  "Cách mạng Tháng 10/1917 ở Nga.",
        "traloi4":  "Đấu tranh giành chính quyền ở Mỹ năm 1776.",
        "dapAn":  "traloi3",
        "dapAnText":  "Cách mạng Tháng 10/1917 ở Nga."
    },
    {
        "stt":  61,
        "cauHoi":  "Khẳng định nào sau đây không đúng về nội dung của dân chủ trong lĩnh vực chính trị?",
        "traloi1":  "Công dân có quyền bầu cử, ứng cử vào các cơ quan quyền lực nhà nước.",
        "traloi2":  "Công dân có quyền tham gia quản lí nhà nước và xã hội.",
        "traloi3":  "Công dân có quyền quyết định mọi vấn đề chung của Nhà nước.",
        "traloi4":  "Công dân có quyền biểu quyết khi Nhà nước tổ chức trưng cầu ý dân.",
        "dapAn":  "traloi3",
        "dapAnText":  "Công dân có quyền quyết định mọi vấn đề chung của Nhà nước."
    },
    {
        "stt":  62,
        "cauHoi":  "Chọn phương án đúng nhất theo Mác và Ăngghen đặc điểm nổi bật của giai cấp công nhân (giai cấp vô sản) là:",
        "traloi1":  "Giai cấp bị áp bức bóc lột nặng nề.",
        "traloi2":  "Giai cấp lao động bằng phương thức công nghiệp với đặc trưng công cụ lao động là máy móc.",
        "traloi3":  "Giai cấp có phương thức sản xuất hiện đại.",
        "traloi4":  "Giai cấp có lý luận, lập trường vô sản.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp lao động bằng phương thức công nghiệp với đặc trưng công cụ lao động là máy móc."
    },
    {
        "stt":  63,
        "cauHoi":  "Để giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay cần quán triệt mấy quan điểm?",
        "traloi1":  "Hai quan điểm chính.",
        "traloi2":  "Ba quan điểm chính.",
        "traloi3":  "Hai quan điểm chính và một quan điểm phụ.",
        "traloi4":  "Ba quan điểm chính và một quan điểm phụ.",
        "dapAn":  "traloi2",
        "dapAnText":  "Ba quan điểm chính."
    },
    {
        "stt":  64,
        "cauHoi":  "Quyền nào của công dân thể hiện dân chủ trong lĩnh vực xã hội?",
        "traloi1":  "Quyền được hưởng bảo hiểm xã hội.",
        "traloi2":  "Quyền được thông tin.",
        "traloi3":  "Quyền tham gia quản lí nhà nước.",
        "traloi4":  "Quyền khiếu nại.",
        "dapAn":  "traloi1",
        "dapAnText":  "Quyền được hưởng bảo hiểm xã hội."
    },
    {
        "stt":  65,
        "cauHoi":  "Mục tiêu tổng quát của cách mạng Việt Nam trong Đại hội Đảng lần thứ XII:",
        "traloi1":  "Dân giàu, nước mạnh, xã hội công bằng, văn minh.",
        "traloi2":  "Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
        "traloi3":  "Dân chủ, dân giàu, nước mạnh, xã hội công bằng, văn minh.",
        "traloi4":  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        "dapAn":  "traloi4",
        "dapAnText":  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        "stt":  66,
        "cauHoi":  "Dân tộc theo thuật ngữ tiếng Anh được viết là:",
        "traloi1":  "natie.",
        "traloi2":  "nazioaren.",
        "traloi3":  "nation.",
        "traloi4":  "national.",
        "dapAn":  "traloi3",
        "dapAnText":  "nation."
    },
    {
        "stt":  67,
        "cauHoi":  "Khi giải quyết các vấn đề tôn giáo trong thời kỳ quá độ lên CNXH cần đảm bảo mấy nguyên tắc cơ bản?",
        "traloi1":  "Ba nguyên tắc.",
        "traloi2":  "Bốn nguyên tắc.",
        "traloi3":  "Năm nguyên tắc.",
        "traloi4":  "Sáu nguyên tắc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Bốn nguyên tắc."
    },
    {
        "stt":  68,
        "cauHoi":  "Quá độ lên CNXH bỏ qua chế độ TBCN ở Việt Nam là tạo ra sự biến đổi về […] của xã hội trên tất cả các lĩnh vực. Chọn đáp án đúng nhất điền vào chổ trống.",
        "traloi1":  "Lượng.",
        "traloi2":  "Đời sống.",
        "traloi3":  "Chất.",
        "traloi4":  "Tinh thần.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chất."
    },
    {
        "stt":  69,
        "cauHoi":  "Giai cấp công nhân trong quan hệ sản xuất TBCN, có:",
        "traloi1":  "Tư liệu sản xuất trong tay, làm chủ sức lao động của mình.",
        "traloi2":  "Công cụ lao động trong tay, làm chủ sức lao động của mình.",
        "traloi3":  "Không sở hữu tư liệu sản xuất, phải bán sức lao động cho nhà tư bản.",
        "traloi4":  "Máy móc, học thuyết Mác – Lênin.",
        "dapAn":  "traloi3",
        "dapAnText":  "Không sở hữu tư liệu sản xuất, phải bán sức lao động cho nhà tư bản."
    },
    {
        "stt":  70,
        "cauHoi":  "Chủ nghĩa Mác – Lênin nhấn mạnh: chừng nào con người và xã hội loài người còn tồn tại, văn minh nhân loại chưa bị diệt vong thì chừng đó dân chủ vẫn còn tồn tại với tư cách là:",
        "traloi1":  "Một giá trị văn minh trường tồn.",
        "traloi2":  "Một giá trị văn hoá chung.",
        "traloi3":  "Một giá trị nhân loại chung.",
        "traloi4":  "Một giá trị nhân loại trường tồn.",
        "dapAn":  "traloi3",
        "dapAnText":  "Một giá trị nhân loại chung."
    },
    {
        "stt":  71,
        "cauHoi":  "V.I.Lênin chủ trương mở rộng khối liên minh công, nông với các tầng lớp trong xã hội trong bước đầu thời kỳ quá độ lên CNXH là một hình thức:",
        "traloi1":  "Liên minh đặc biệt.",
        "traloi2":  "Liên minh cá biệt.",
        "traloi3":  "Liên minh tất yếu khách quan.",
        "traloi4":  "Liên minh tất yếu chủ quan.",
        "dapAn":  "traloi1",
        "dapAnText":  "Liên minh đặc biệt."
    },
    {
        "stt":  72,
        "cauHoi":  "Dưới góc độ chính trị – xã hội, Chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội nào?",
        "traloi1":  "Cơ cấu xã hội – giai cấp.",
        "traloi2":  "Cơ cấu xã hội – dân cư.",
        "traloi3":  "Cơ cấu xã hội – dân tộc.",
        "traloi4":  "Cơ cấu xã hội – tôn giáo.",
        "dapAn":  "traloi1",
        "dapAnText":  "Cơ cấu xã hội – giai cấp."
    },
    {
        "stt":  73,
        "cauHoi":  "Tính tất yếu thay thế hình thái kinh tế – xã hội từ tư bản sang cộng sản chủ nghĩa xuất phát từ tiền đề quan trọng nhất là:",
        "traloi1":  "Sự phát triển của quan hệ sản xuất từ quan hệ sản xuất tư bản chủ nghĩa sang quan hệ sản xuất cộng sản chủ nghĩa.",
        "traloi2":  "Sự phát triển của kiến trúc thượng tầng từ kiến trúc thượng tầng tư bản chủ nghĩa sang kiến trúc thượng tầng cộng sản chủ nghĩa.",
        "traloi3":  "Sự phát triển của quan hệ sản xuất cộng sản chủ nghĩa phù hợp với sự phát triển của lực lượng sản xuất cộng sản chủ nghĩa.",
        "traloi4":  "Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân."
    },
    {
        "stt":  74,
        "cauHoi":  "Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa là:",
        "traloi1":  "Chủ nghĩa xã hội.",
        "traloi2":  "Chủ nghĩa tư bản.",
        "traloi3":  "Quá độ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
        "traloi4":  "Thời kì quá độ.",
        "dapAn":  "traloi1",
        "dapAnText":  "Chủ nghĩa xã hội."
    },
    {
        "stt":  75,
        "cauHoi":  "Hồ Chí Minh khẳng định: “Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội […]”. Chọn đáp án đúng điền vào chỗ trống.",
        "traloi1":  "Công bằng.",
        "traloi2":  "Văn minh.",
        "traloi3":  "Một nữa.",
        "traloi4":  "Không công bằng.",
        "dapAn":  "traloi3",
        "dapAnText":  "Một nữa."
    },
    {
        "stt":  76,
        "cauHoi":  "Chọn cụm từ đúng vào chỗ trống: “Chỉ có…là giai cấp duy nhất không có lợi ích riêng với nghĩa là tư hữu”.",
        "traloi1":  "Giai cấp tư sản.",
        "traloi2":  "Giai cấp công nhân.",
        "traloi3":  "Giai cấp nông dân.",
        "traloi4":  "Giai cấp vô sản.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp công nhân."
    },
    {
        "stt":  77,
        "cauHoi":  "Theo quan điểm của chủ nghĩa Mác – Lênin, nguyên nhân nào quyết định sự biến đổi của cộng đồng dân tộc?",
        "traloi1":  "Sự biến đổi của các hình thức sở hữu.",
        "traloi2":  "Sự biến đổi của các hình thức nhà nước.",
        "traloi3":  "Sự biến đổi của lực lượng sản xuất.",
        "traloi4":  "Sự biến đổi của phương thức sản xuất.",
        "dapAn":  "traloi4",
        "dapAnText":  "Sự biến đổi của phương thức sản xuất."
    },
    {
        "stt":  78,
        "cauHoi":  "Giải quyết việc làm cho người lao động hiện nay ở nước ta nhằm:",
        "traloi1":  "Phát huy được tiền năng lao động.",
        "traloi2":  "Sử dụng có hiệu quả nguồn lao động chất lượng cao.",
        "traloi3":  "Nâng cao năng lực cạnh tranh của nền kinh tế.",
        "traloi4":  "Huy động được nguồn vốn trong nhân dân.",
        "dapAn":  "traloi1",
        "dapAnText":  "Phát huy được tiền năng lao động."
    },
    {
        "stt":  79,
        "cauHoi":  "Nhà nước thể hiện ý chí, lợi ích và nguyện vọng của nhân dân là nói đến đặc điểm nào dưới đây?",
        "traloi1":  "Tính xã hội.",
        "traloi2":  "Tính nhân dân.",
        "traloi3":  "Tính giai cấp.",
        "traloi4":  "Tính quần chúng.",
        "dapAn":  "traloi2",
        "dapAnText":  "Tính nhân dân."
    },
    {
        "stt":  80,
        "cauHoi":  "Nhà nước pháp quyền XHCN được xây dựng ở Việt Nam hiện nay gồm mấy đặc điểm cơ bản?",
        "traloi1":  "Sáu đặc điểm cơ bản.",
        "traloi2":  "Năm đặc điểm cơ bản.",
        "traloi3":  "Bảy đặc điểm cơ bản.",
        "traloi4":  "Tám đặc điểm cơ bản.",
        "dapAn":  "traloi1",
        "dapAnText":  "Sáu đặc điểm cơ bản."
    },
    {
        "stt":  81,
        "cauHoi":  "“Hôn nhân tự nguyện là đảm bảo cho nam nữ có quyền tự do trong kết hôn, không chấp nhận sự áp đặt của cha mẹ”. Hiểu câu nói này như thế nào?",
        "traloi1":  "Cha mẹ không áp đặt hôn nhân mà chỉ quan tâm, hướng dẫn con cái có nhận thức đúng, có trách nhiệm trong việc kết hôn.",
        "traloi2":  "Cha mẹ không nên chỉ định đối tượng kết hôn cho con cái, mà chỉ mang tính chất giới thiệu những đối tượng nên kết hôn.",
        "traloi3":  "Cha mẹ hoàn toàn không có quyền can thiệp vào cuộc sống hôn nhân của con cái.",
        "traloi4":  "Cha mẹ chỉ nên đứng phía sau hỗ trợ, giúp đỡ nuôi dạy con cháu.",
        "dapAn":  "traloi1",
        "dapAnText":  "Cha mẹ không áp đặt hôn nhân mà chỉ quan tâm, hướng dẫn con cái có nhận thức đúng, có trách nhiệm trong việc kết hôn."
    },
    {
        "stt":  82,
        "cauHoi":  "Hiện nay ở Việt Nam, đội ngũ thanh niên được Đảng xác định là:",
        "traloi1":  "Giường cột của nước nhà, chủ nhân tương lai của đất nước.",
        "traloi2":  "Mùa xuân của đất nước, chủ nhân tương lai của đất nước.",
        "traloi3":  "Rường cột của nước nhà, chủ nhân tương lai của đất nước.",
        "traloi4":  "Tuổi trẻ tương lai của đất nước.",
        "dapAn":  "traloi3",
        "dapAnText":  "Rường cột của nước nhà, chủ nhân tương lai của đất nước."
    },
    {
        "stt":  83,
        "cauHoi":  "Để thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam trong bối cảnh hiện nay phải đặc biệt coi trọng vấn đề nào?",
        "traloi1":  "Xây dựng, phát triển giai cấp công nhân lớn mạnh, hiện đại.",
        "traloi2":  "Xây dựng, phát triển giai cấp công nhân lớn mạnh về số lượng và chất lượng.",
        "traloi3":  "Bồi dưỡng tri thức, nắm vững khoa học – công nghệ của cách mạng công nghiệp lần thứ 4.",
        "traloi4":  "Công tác xây dựng, chỉnh đốn Đảng, làm cho Đảng trong sạch, vững mạnh.",
        "dapAn":  "traloi4",
        "dapAnText":  "Công tác xây dựng, chỉnh đốn Đảng, làm cho Đảng trong sạch, vững mạnh."
    },
    {
        "stt":  84,
        "cauHoi":  "Nhiệm vụ vô cùng quan trọng của chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Chống CNTB, bảo vệ CNXH.",
        "traloi2":  "Phê phán đấu tranh bác bỏ tư tưởng chống cộng, chống CNXH, bảo vệ thành quả cách mạng XHCN.",
        "traloi3":  "Phê phán, bác bỏ tư tưởng chống chủ nghĩa đế quốc, bảo vệ thành quả cách mạng tư sản.",
        "traloi4":  "Chống CNTB, chống chế độ Phong kiến, bảo vệ thành quả cách mạng XHCN.",
        "dapAn":  "traloi2",
        "dapAnText":  "Phê phán đấu tranh bác bỏ tư tưởng chống cộng, chống CNXH, bảo vệ thành quả cách mạng XHCN."
    },
    {
        "stt":  85,
        "cauHoi":  "Cơ sở kinh tế – xã hội để xây dựng gia đình trong thời kỳ quá độ lên CNXH là:",
        "traloi1":  "Sự phát triển của cơ sở hạ tầng và kiến trúc thượng tầng phù hợp.",
        "traloi2":  "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới, XHCN.",
        "traloi3":  "Sự phát triển của nền kinh tế khiến cho thu nhập lao động gia tăng.",
        "traloi4":  "Sự phát triển của các cuộc cách mạng về khoa học công nghệ làm biến đổi phương thức sản xuất.",
        "dapAn":  "traloi2",
        "dapAnText":  "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới, XHCN."
    },
    {
        "stt":  86,
        "cauHoi":  "Theo C.Mác và Ph.Ăngghen, hình thái kinh tế – xã hội cộng sản chủ nghĩa phát triển:",
        "traloi1":  "Bỏ qua giai đoạn phong kiến tiến thẳng lên chủ nghĩa tư bản.",
        "traloi2":  "Bỏ qua giai đoạn phát triển tư bản tiến thẳng lên chủ nghĩa xã hội.",
        "traloi3":  "Từ thấp đến cao qua 2 giai đoạn, giai đoạn thấp và giai đoạn cao – giai đoạn cộng sản chủ nghĩa.",
        "traloi4":  "Qua 2 giai đoạn, giai đoạn quá độ lên chủ nghĩa xã hội, giai đoạn chủ nghĩa cộng sản.",
        "dapAn":  "traloi3",
        "dapAnText":  "Từ thấp đến cao qua 2 giai đoạn, giai đoạn thấp và giai đoạn cao – giai đoạn cộng sản chủ nghĩa."
    },
    {
        "stt":  87,
        "cauHoi":  "Nhà nước nào mà Lênin gọi là “nửa nhà nước”?",
        "traloi1":  "Nhà nước chủ nô.",
        "traloi2":  "Nhà nước tư sản.",
        "traloi3":  "Nhà nước XHCN.",
        "traloi4":  "Nhà nước phong kiến.",
        "dapAn":  "traloi3",
        "dapAnText":  "Nhà nước XHCN."
    },
    {
        "stt":  88,
        "cauHoi":  "Chọn đáp án đúng nhất. Theo Ph.Ăngghen, hôn nhân tiến bộ còn là:",
        "traloi1":  "Quyền bình đẳng giữa nam và nữ trong hôn nhân.",
        "traloi2":  "Bao hàm cả quyền tự do ly hôn khi tình yêu không còn nữa.",
        "traloi3":  "Quyền bình đẳng về kinh tế giữa các thành viên trong gia đình.",
        "traloi4":  "Quyền bình đẳng trong nuôi dạy con cái trong gia đình.",
        "dapAn":  "traloi2",
        "dapAnText":  "Bao hàm cả quyền tự do ly hôn khi tình yêu không còn nữa."
    },
    {
        "stt":  89,
        "cauHoi":  "Đội ngũ trí thức có vai trò như thế nào trong tiến trình đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế của Việt Nam hiện nay?",
        "traloi1":  "Đặc biệt quan trọng.",
        "traloi2":  "Rất đặc biệt.",
        "traloi3":  "Quan trọng.",
        "traloi4":  "Quyết định.",
        "dapAn":  "traloi1",
        "dapAnText":  "Đặc biệt quan trọng."
    },
    {
        "stt":  90,
        "cauHoi":  "Quan điểm “Đảng phải quán triệt tư tưởng lấy dân làm gốc, xây dựng và phát huy quyền làm chủ của nhân dân lao động” được nêu ra trong văn kiện Đại hội Đảng lần thứ mấy?",
        "traloi1":  "Đại hội Đảng toàn quốc lần thứ V.",
        "traloi2":  "Đại hội Đảng toàn quốc lần thứ VI.",
        "traloi3":  "Đại hội Đảng toàn quốc lần thứ VII.",
        "traloi4":  "Đại hội Đảng toàn quốc lần thứ IX.",
        "dapAn":  "traloi2",
        "dapAnText":  "Đại hội Đảng toàn quốc lần thứ VI."
    },
    {
        "stt":  91,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Vị trí của gia đình trong xã hội:",
        "traloi1":  "Gia đình là tế bào của xã hội.",
        "traloi2":  "Gia đình là tổ ấm, mang lại giá trị hạnh phúc, sự hài hoà trong đời sống cá nhân của mỗi thành viên.",
        "traloi3":  "Gia đình là viên gạch đầu tiên xây dựng ngôi nhà xã hội.",
        "traloi4":  "Gia đình là cầu nối giữa cá nhân với xã hội.",
        "dapAn":  "traloi3",
        "dapAnText":  "Gia đình là viên gạch đầu tiên xây dựng ngôi nhà xã hội."
    },
    {
        "stt":  92,
        "cauHoi":  "Theo V.I.Lênin, mục đích cao nhất, cuối cùng của những cải tạo xã hội chủ nghĩa là thực hiện theo nguyên tắc nào?",
        "traloi1":  "Làm theo năng lực, hưởng theo lao động.",
        "traloi2":  "Làm theo lao động, hưởng theo năng lực.",
        "traloi3":  "Làm theo năng lực, hưởng theo nhu cầu.",
        "traloi4":  "Làm bao nhiêu, hưởng bấy nhiêu.",
        "dapAn":  "traloi3",
        "dapAnText":  "Làm theo năng lực, hưởng theo nhu cầu."
    },
    {
        "stt":  93,
        "cauHoi":  "Điều kiện ra đời của chủ nghĩa xã hội theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học:",
        "traloi1":  "Sự phát triển của lực lượng sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng vô sản dưới sự lãnh đạo của giai cấp công nhân – Đảng Cộng sản.",
        "traloi2":  "Sự phát triển của quan hệ sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng vô sản dưới sự lãnh đạo của giai cấp công nhân – Đảng Cộng sản.",
        "traloi3":  "Sự phát triển của lực lượng sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng tư sản dưới sự lãnh đạo của giai cấp tư sản.",
        "traloi4":  "Sự phát triển của lực lượng sản xuất trong lòng xã hội tư bản và sự trưởng thành thực sự của giai cấp công nhân.",
        "dapAn":  "traloi1",
        "dapAnText":  "Sự phát triển của lực lượng sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng vô sản dưới sự lãnh đạo của giai cấp công nhân – Đảng Cộng sản."
    },
    {
        "stt":  94,
        "cauHoi":  "Mục tiêu cách mạng mà Đảng và nhân dân ta đang ra sức phấn đầu xây dựng là:",
        "traloi1":  "Chủ nghĩa quốc tế.",
        "traloi2":  "Chủ nghĩa xã hội.",
        "traloi3":  "Chủ nghĩa tư bản.",
        "traloi4":  "Chủ nghĩa vô sản.",
        "dapAn":  "traloi2",
        "dapAnText":  "Chủ nghĩa xã hội."
    },
    {
        "stt":  95,
        "cauHoi":  "Luận điểm nào sau đây không thuộc chủ nghĩa xã hội khoa học:",
        "traloi1":  "Logic phát triển tất yếu của xã hội là sự sụp đổ của của CNTB và sự thắng lợi của CNXH.",
        "traloi2":  "Tính tất yếu của xã hội loài người là phải trải qua giai đoạn CNTB đi lên CNCS.",
        "traloi3":  "Giai cấp công nhân là đội tiên phong xây dựng CNXH, có sứ mệnh thủ tiêu CNTB.",
        "traloi4":  "Người cộng sản trên thế giới đoàn kết lại, liên minh lực lượng dân chủ đánh đổ chế độ phong kiến và TBCN. Tiến hành cuộc cách mạng không ngừng, có chiến lược, sách lược khôn khéo và kiên quyết.",
        "dapAn":  "traloi2",
        "dapAnText":  "Tính tất yếu của xã hội loài người là phải trải qua giai đoạn CNTB đi lên CNCS."
    },
    {
        "stt":  96,
        "cauHoi":  "Chọn đáp án đúng. Trong xã hội Việt Nam hiện nay, sự biến đổi chức năng giáo dục:",
        "traloi1":  "Giáo dục gia đình là cơ sở của giáo dục xã hội.",
        "traloi2":  "Giáo dục gia đình gắn bó mật thiết với giáo dục xã hội.",
        "traloi3":  "Giáo dục xã hội bao trùm lên giáo dục gia đình.",
        "traloi4":  "Giáo dục xã hội song song với giáo dục gia đình.",
        "dapAn":  "traloi3",
        "dapAnText":  "Giáo dục xã hội bao trùm lên giáo dục gia đình."
    },
    {
        "stt":  97,
        "cauHoi":  "Trong chức năng giáo dục con người cần coi trọng:",
        "traloi1":  "Giáo dục của gia đình phải gắn liền với giáo dục của xã hội.",
        "traloi2":  "Giáo dục của gia đình hơn giáo dục của xã hội.",
        "traloi3":  "Giáo dục của xã hội hơn giáo dục của gia đình.",
        "traloi4":  "Giáo dục xã hội, nhà trường phải đáp ứng yêu cầu lao động của xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Giáo dục của gia đình phải gắn liền với giáo dục của xã hội."
    },
    {
        "stt":  98,
        "cauHoi":  "Chọn đáp án đúng nhất. Đặc điểm dân tộc Việt Nam hiện nay:",
        "traloi1":  "Có sự chênh lệch về số dân giữa các tộc người.",
        "traloi2":  "Dân tộc kinh được coi là tộc người chính.",
        "traloi3":  "Các dân tộc có nền kinh tế phát triển đều nhau.",
        "traloi4":  "Văn hoá các dân tộc được quy tụ lại với nhau.",
        "dapAn":  "traloi1",
        "dapAnText":  "Có sự chênh lệch về số dân giữa các tộc người."
    },
    {
        "stt":  99,
        "cauHoi":  "Một trong những nội dung của dân chủ trong lĩnh vực chính trị được thể hiện ở:",
        "traloi1":  "Quyền bình đẳng nam nữ.",
        "traloi2":  "Quyền tham gia quản lí nhà nước và xã hội.",
        "traloi3":  "Quyền tự do kinh doanh.",
        "traloi4":  "Quyền tự do lựa chọn nơi ở và làm việc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Quyền tham gia quản lí nhà nước và xã hội."
    },
    {
        "stt":  100,
        "cauHoi":  "Học thuyết về hình thái kinh tế – xã hội chỉ ra lịch sử loài người trải qua mấy hình thái?",
        "traloi1":  "6 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Chủ nghĩa xã hội; Cộng sản chủ nghĩa.",
        "traloi2":  "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Cộng sản chủ nghĩa.",
        "traloi3":  "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Xã hội chủ nghĩa.",
        "traloi4":  "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Chủ nghĩa tư bản; Thời kỳ quá độ CNXH; Cộng sản chủ nghĩa.",
        "dapAn":  "traloi2",
        "dapAnText":  "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Cộng sản chủ nghĩa."
    },
    {
        "stt":  101,
        "cauHoi":  "Cơ sở chính trị – xã hội để xây dựng gia đình trong thời kỳ quá độ lên CNXH là:",
        "traloi1":  "Thiết lập nhà nước của giai cấp công nhân và nhân dân lao động.",
        "traloi2":  "Thiết lập chính quyền thuộc về các tầng lớp nhân dân lao động.",
        "traloi3":  "Thiết lập các cơ quan hành chính Nhà nước trong sạch, vững mạnh, hoạt động có hiệu quả.",
        "traloi4":  "Xây dựng Đảng trong sạch, vững mạnh, hoạt động có hiệu quả.",
        "dapAn":  "traloi1",
        "dapAnText":  "Thiết lập nhà nước của giai cấp công nhân và nhân dân lao động."
    },
    {
        "stt":  102,
        "cauHoi":  "Hiện nay Việt Nam có bao nhiêu tôn giáo được công nhận tư cách pháp nhân?",
        "traloi1":  "11 Tôn giáo.",
        "traloi2":  "12 Tôn giáo.",
        "traloi3":  "13 Tôn giáo.",
        "traloi4":  "14 Tôn giáo.",
        "dapAn":  "traloi3",
        "dapAnText":  "13 Tôn giáo."
    },
    {
        "stt":  103,
        "cauHoi":  "Nguyên nhân nào lí giải cho việc nước ta đi lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là hoàn toàn đúng đắn?",
        "traloi1":  "Đi lên chủ nghĩa xã hội xóa bỏ áp bức, bóc lột.",
        "traloi2":  "Đi lên chủ nghĩa xã hội la nhu cầu của nhiều nước trên thế giới.",
        "traloi3":  "Tư bản chủ nghĩa là một chế độ còn duy trì tình trạng bóc lột.",
        "traloi4":  "Chủ nghĩa xã hội là chế độ xã hội tốt đẹp và công bằng.",
        "dapAn":  "traloi1",
        "dapAnText":  "Đi lên chủ nghĩa xã hội xóa bỏ áp bức, bóc lột."
    },
    {
        "stt":  104,
        "cauHoi":  "Chức năng chính trị của gia đình thể hiện:",
        "traloi1":  "Nơi tổ chức thực hiện và hưởng lợi từ chính sách, pháp luật của nhà nước và quy chế của làng xã.",
        "traloi2":  "Nơi thể hiện quyền lực chính trị của Nhà nước đối với công dân.",
        "traloi3":  "Nơi thể hiện quyền lực chính trị của công dân đối với Nhà nước.",
        "traloi4":  "Nơi thể hiện trách nhiệm và nghĩa vụ của công dân đối với xây dựng hệ thống chính trị xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Nơi tổ chức thực hiện và hưởng lợi từ chính sách, pháp luật của nhà nước và quy chế của làng xã."
    },
    {
        "stt":  105,
        "cauHoi":  "Theo quan điểm của chủ nghĩa Mác – Lênin, từ CNTB lên CNXH tất yểu phải trải qua thời kỳ nào?",
        "traloi1":  "Quá độ chính trị.",
        "traloi2":  "Quá độ kinh tế.",
        "traloi3":  "Quá độ tích luỹ tư bản.",
        "traloi4":  "Quá độ.",
        "dapAn":  "traloi1",
        "dapAnText":  "Quá độ chính trị."
    },
    {
        "stt":  106,
        "cauHoi":  "Theo quan điểm của chủ nghĩa Mác – Lênin, dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao:",
        "traloi1":  "Bộ lạc, bộ tộc, thị tộc, dân tộc.",
        "traloi2":  "Bộ tộc, thị tộc, bộ lạc, dân tộc.",
        "traloi3":  "Thị tộc, bộ lạc, bộ tộc, dân tộc.",
        "traloi4":  "Thị tộc, công xã, bộ lạc, dân tộc.",
        "dapAn":  "traloi3",
        "dapAnText":  "Thị tộc, bộ lạc, bộ tộc, dân tộc."
    },
    {
        "stt":  107,
        "cauHoi":  "Quan hệ hôn nhân, gia đình là vấn đề của:",
        "traloi1":  "Riêng tư của mỗi gia đình.",
        "traloi2":  "Riêng tư của mỗi cá nhân.",
        "traloi3":  "Nhà nước quản lý.",
        "traloi4":  "Quan hệ xã hội.",
        "dapAn":  "traloi4",
        "dapAnText":  "Quan hệ xã hội."
    },
    {
        "stt":  108,
        "cauHoi":  "Khi các nguyên tắc của nền dân chủ XHCN bị vi phạm, thì việc xây dựng nhà nước XHCN có:",
        "traloi1":  "Quyền lực không thuộc về nhân dân.",
        "traloi2":  "Quyền lực nhân dân biến thành quyền lực thuộc về giai cấp tư sản, phục vụ lợi ích của giai cấp tư sản.",
        "traloi3":  "Quyền lực nhân dân biến thành quyền lực thuộc về giai cấp bóc lột, phục vụ lợi ích của giai cấp đó.",
        "traloi4":  "Quyền lực nhân dân biến thành quyền lực của một nhóm người, phục vụ lợi ích của một nhóm người.",
        "dapAn":  "traloi4",
        "dapAnText":  "Quyền lực nhân dân biến thành quyền lực của một nhóm người, phục vụ lợi ích của một nhóm người."
    },
    {
        "stt":  109,
        "cauHoi":  "Đặc thù của gia đình khác với các đơn vị kinh tế khác là ở chổ:",
        "traloi1":  "Tài chính làm ra của gia đình nhỏ hơn rất nhiều so với các đơn vị kinh tế khác trong xã hội.",
        "traloi2":  "Gia đình là đơn vị duy nhất sản xuất và tái sản xuất ra sức lao động cho xã hội.",
        "traloi3":  "Gia đình là đơn vị duy nhất tham gia vào quá trình tái sản xuất ra sức lao động cho xã hội.",
        "traloi4":  "Gia đình tham gia trực tiếp vào sản xuất và tái sản xuất tư liệu tiêu dùng.",
        "dapAn":  "traloi2",
        "dapAnText":  "Gia đình là đơn vị duy nhất sản xuất và tái sản xuất ra sức lao động cho xã hội."
    },
    {
        "stt":  110,
        "cauHoi":  "Theo quan điểm của Ph.Ăngghen, trong giai đoạn đầu của xã hội cộng sản – chủ nghĩa xã hội:",
        "traloi1":  "Phải làm cho lực lượng sản xuất tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
        "traloi2":  "Phải làm cho lực lượng sản xuất tăng nhanh lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
        "traloi3":  "Có thể làm cho lực lượng sản xuất hiện có tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
        "traloi4":  "Không thể được cũng y như không thể làm cho lực lượng sản xuất hiện có tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
        "dapAn":  "traloi4",
        "dapAnText":  "Không thể được cũng y như không thể làm cho lực lượng sản xuất hiện có tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu."
    },
    {
        "stt":  111,
        "cauHoi":  "“Sự diệt vong không tránh khỏi của CNTB và sự thắng lợi tất yếu của CNXH” là luận chứng và khẳng định về phương diện chính trị – xã hội của:",
        "traloi1":  "Học thuyết về giá trị thặng dư.",
        "traloi2":  "Chủ nghĩa duy vật lịch sử.",
        "traloi3":  "Chủ nghĩa duy vật biện chứng.",
        "traloi4":  "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân."
    },
    {
        "stt":  112,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Phân loại cơ cấu xã hội:",
        "traloi1":  "Cơ cấu xã hội – dân cư, dân tộc, tôn giáo.",
        "traloi2":  "Cơ cấu xã hội – nghề nghiệp.",
        "traloi3":  "Cơ cấu xã hội – giai cấp.",
        "traloi4":  "Cơ cấu xã hội – lao động.",
        "dapAn":  "traloi4",
        "dapAnText":  "Cơ cấu xã hội – lao động."
    },
    {
        "stt":  113,
        "cauHoi":  "Chủ nghĩa xã hội mà nước ta đang xây dựng có mấy đặc trưng cơ bản?",
        "traloi1":  "Tám đặc trưng.",
        "traloi2":  "Bốn đặc trưng.",
        "traloi3":  "Sáu đặc trưng.",
        "traloi4":  "Mười đặc trưng.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tám đặc trưng."
    },
    {
        "stt":  114,
        "cauHoi":  "Chọn đáp án đúng nhất. Cơ cấu xã hội là:",
        "traloi1":  "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất.",
        "traloi2":  "Những cộng đồng người cùng với mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị – xã hội … giữa con người với con người.",
        "traloi3":  "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên.",
        "traloi4":  "Những cộng đồng người  và tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định.",
        "dapAn":  "traloi3",
        "dapAnText":  "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên."
    },
    {
        "stt":  115,
        "cauHoi":  "Thế giới quan của tôn giáo theo chủ nghĩa Mác – Lênin là gì?",
        "traloi1":  "Thế giới quan duy vật.",
        "traloi2":  "Thế giới quan duy vật siêu hình.",
        "traloi3":  "Thế giới quan duy tâm chủ quan.",
        "traloi4":  "Thế giới quan duy tâm.",
        "dapAn":  "traloi4",
        "dapAnText":  "Thế giới quan duy tâm."
    },
    {
        "stt":  116,
        "cauHoi":  "Sứ mệnh lịch sử của giai cấp công nhân thế giới hiện nay về nội dung kinh tế – xã hội là:",
        "traloi1":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa nhân dân lao động với nhà nước tư bản.",
        "traloi2":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa nhân dân lao động với các tập đoàn kinh tế tư bản.",
        "traloi3":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp vô sản với nhà nước tư bản, thiết lập nhà nước XHCN, thực hiện tiến bộ và công bằng, dân chủ xã hội.",
        "traloi4":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp công nhân với giai cấp tư sản, phấn đấu cho việc xác lập một trật tự xã hội mới công bằng và bình đẳng.",
        "dapAn":  "traloi4",
        "dapAnText":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp công nhân với giai cấp tư sản, phấn đấu cho việc xác lập một trật tự xã hội mới công bằng và bình đẳng."
    },
    {
        "stt":  117,
        "cauHoi":  "Một trong những đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam là:",
        "traloi1":  "Có nền văn hóa tiến bộ, đậm đà bản sắc dân tộc.",
        "traloi2":  "Có nền văn hóa hiện đại.",
        "traloi3":  "Có di sản văn hóa vật thể và phi vật thể.",
        "traloi4":  "Có nguồn lao động dồn dào.",
        "dapAn":  "traloi1",
        "dapAnText":  "Có nền văn hóa tiến bộ, đậm đà bản sắc dân tộc."
    },
    {
        "stt":  118,
        "cauHoi":  "Chất lượng dân số được đánh giá bằng yếu tố nào?",
        "traloi1":  "Tinh thần, niêm tin, mức sống.",
        "traloi2":  "Tinh thần, trí tuệ, di truyền.",
        "traloi3":  "Thể chất, tinh thần, nghề nghiệp.",
        "traloi4":  "Thể chất, trí tuệ, tinh thần.",
        "dapAn":  "traloi4",
        "dapAnText":  "Thể chất, trí tuệ, tinh thần."
    },
    {
        "stt":  119,
        "cauHoi":  "“Xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa” gắn với “nắm vững chuyên chính vô sản” là quan điểm được nêu ra trong:",
        "traloi1":  "Đại hội Đảng toàn quốc lần thứ II.",
        "traloi2":  "Đại hội Đảng toàn quốc lần thứ III.",
        "traloi3":  "Đại hội Đảng toàn quốc lần thứ IV và lần thứ V.",
        "traloi4":  "Đại hội Đảng toàn quốc lần thứ VI.",
        "dapAn":  "traloi3",
        "dapAnText":  "Đại hội Đảng toàn quốc lần thứ IV và lần thứ V."
    },
    {
        "stt":  120,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Chức năng cơ bản của gia đình:",
        "traloi1":  "Tái sản xuất ra con người và nuôi dưỡng, giáo dục con người.",
        "traloi2":  "Kinh tế và tổ chức tiêu dùng.",
        "traloi3":  "Thoả mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình.",
        "traloi4":  "Giúp tổ chức xã hội được tốt hơn.",
        "dapAn":  "traloi4",
        "dapAnText":  "Giúp tổ chức xã hội được tốt hơn."
    },
    {
        "stt":  121,
        "cauHoi":  "Quyền lao động thể hiện dân chủ trong lĩnh vực nào?",
        "traloi1":  "Xã hội.",
        "traloi2":  "Chính trị.",
        "traloi3":  "Văn hóa.",
        "traloi4":  "Kinh tế.",
        "dapAn":  "traloi1",
        "dapAnText":  "Xã hội."
    },
    {
        "stt":  122,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa xã hội có nhà nước kiểu mới mang bản chất của:",
        "traloi1":  "Giai cấp vô sản, đại biểu cho lợi ích của giai cấp công nhân, nông dân, lao động trí thức.",
        "traloi2":  "Giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.",
        "traloi3":  "Giai cấp nắm trong tay quyền lực về chính trị và đại biểu quyền lợi cho giai cấp thống trị ấy.",
        "traloi4":  "Nhân dân và các tầng lớp người lao động trong xã hội.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động."
    },
    {
        "stt":  123,
        "cauHoi":  "Nền sản xuất đại công nghiệp đã rèn luyện cho giai cấp công nhân những phẩm chất đặc biệt để đảm nhận vai trò lãnh đạo cách mạng:",
        "traloi1":  "Cần cù, chăm chỉ, sáng tạo.",
        "traloi2":  "Chịu thương, chịu khó, đoàn kết.",
        "traloi3":  "Chuyên môn, kỹ thuật cao, tinh thần hợp tác quốc tế, tâm lý giải phóng giai cấp vô sản thế giới.",
        "traloi4":  "Tính tổ chức, kỷ luật lao động, tinh thần hợp tác và tâm lý lao động công nghiệp.",
        "dapAn":  "traloi4",
        "dapAnText":  "Tính tổ chức, kỷ luật lao động, tinh thần hợp tác và tâm lý lao động công nghiệp."
    },
    {
        "stt":  124,
        "cauHoi":  "Để giải quyết việc làm, Nhà nước khuyến khích các doanh nghiệp:",
        "traloi1":  "Tạo ra nhiều sản phẩm.",
        "traloi2":  "Tạo ra nhiều việc làm mới.",
        "traloi3":  "Tăng thu nhập cho người lao động.",
        "traloi4":  "Bảo vệ người lao động.",
        "dapAn":  "traloi2",
        "dapAnText":  "Tạo ra nhiều việc làm mới."
    },
    {
        "stt":  125,
        "cauHoi":  "Chủ nghĩa xã hội khoa học nghiên cứu đối tượng trong lĩnh vực:",
        "traloi1":  "Chính trị – xã hội của đời sống xã hội.",
        "traloi2":  "Kinh tế – chính trị của đời sống xã hội.",
        "traloi3":  "Văn hoá – xã hội của đời sống xã hội.",
        "traloi4":  "Văn hoá – chính trị của đời sống xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Chính trị – xã hội của đời sống xã hội."
    },
    {
        "stt":  126,
        "cauHoi":  "Trong thời kỳ quá độ lên CNXH ở Việt Nam, nhiệm vụ trung tâm mà giai cấp công nhân phải lãnh đạo thực hiện là:",
        "traloi1":  "Thực hiện dân chủ trong lĩnh vực chính trị.",
        "traloi2":  "Thực hiện mục tiêu dân giàu, nước mạnh.",
        "traloi3":  "Phát triển văn hoá, xây dựng con người XHCN.",
        "traloi4":  "Phát triển kinh tế, tiến hành công nghiệp hoá, hiện đại hoá.",
        "dapAn":  "traloi4",
        "dapAnText":  "Phát triển kinh tế, tiến hành công nghiệp hoá, hiện đại hoá."
    },
    {
        "stt":  127,
        "cauHoi":  "Nội dung nào sau đây thuộc nội dung bổ sung của Ph.Ăngghen và C.Mác vào chủ nghĩa xã hội khoa học thời kì sau Công xã Pari đến 1895?",
        "traloi1":  "Tư tưởng xoá bỏ quan hệ sản xuất tư bản, xây dựng quan hệ sản xuất XHCN.",
        "traloi2":  "Đập tan bộ máy nhà nước quan liêu, không đập tan toàn bộ bộ máy nhà nước tư sản nói chung.",
        "traloi3":  "Tư tưởng đập tan nhà nước tư sản, thiết lập chuyên chính vô sản.",
        "traloi4":  "Tư tưởng sự kết hợp đấu tranh giai cấp vô sản với phong trào đấu tranh của nông dân.",
        "dapAn":  "traloi2",
        "dapAnText":  "Đập tan bộ máy nhà nước quan liêu, không đập tan toàn bộ bộ máy nhà nước tư sản nói chung."
    },
    {
        "stt":  128,
        "cauHoi":  "Nội dung nào sau đây không thuộc nội dung bổ sung của Ph.Ăngghen và C.Mác vào chủ nghĩa xã hội khoa học thời kì 1848 đến Công xã Pari?",
        "traloi1":  "Tư tưởng xoá bỏ quan hệ sản xuất tư bản, xây dựng quan hệ sản xuất XHCN.",
        "traloi2":  "Tư tưởng đập tan nhà nước tư sản, thiết lập chuyên chính vô sản.",
        "traloi3":  "Tư tưởng sự kết hợp đấu tranh giai cấp vô sản với phong trào đấu tranh của nông dân.",
        "traloi4":  "Tư tưởng xây dựng khối liên minh giai cấp công nhân và giai cấp nông dân.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tư tưởng xoá bỏ quan hệ sản xuất tư bản, xây dựng quan hệ sản xuất XHCN."
    },
    {
        "stt":  129,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Dân tộc là cộng đồng chính trị – xã hội có đặc trưng cơ bản:",
        "traloi1":  "Có chung phương thức sinh hoạt kinh tế.",
        "traloi2":  "Có lãnh thổ chung ổn định không bị chia cắt.",
        "traloi3":  "Có sự quản lý của một nhà nước, nhà nước dân tộc độc lập.",
        "traloi4":  "Có chung một ngôn ngữ giao tiếp.",
        "dapAn":  "traloi4",
        "dapAnText":  "Co chung một ngôn ngữ giao tiếp."
    },
    {
        "stt":  130,
        "cauHoi":  "Tác phẩm kinh điển chủ yếu của chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Tuyên ngôn của Đảng Cộng sản.",
        "traloi2":  "Tuyên ngôn Đảng Cộng sản Việt Nam.",
        "traloi3":  "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        "traloi4":  "Học thuyết về giá trị thặng dư.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tuyên ngôn của Đảng Cộng sản."
    },
    {
        "stt":  131,
        "cauHoi":  "Theo các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa cộng sản ra đời dựa trên việc giải quyết mâu thuẫn giữa:",
        "traloi1":  "Sự ra đời của nền đại công nghiệp cơ khí với lợi ích của giai cấp vô sản.",
        "traloi2":  "Sự phát triển của các công ty độc quyền với quyền lợi của đại bộ phận giai cấp công nhân.",
        "traloi3":  "Sự phát triển của nhà nước tư bản độc quyền với quyền lợi của giai cấp vô sản và bần cùng hoá.",
        "traloi4":  "Quan hệ sản xuất TBCN dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa với lực lượng sản xuất được cơ khí hoá, hiện đại hoá mang tính xã hội hoá cao.",
        "dapAn":  "traloi4",
        "dapAnText":  "Quan hệ sản xuất TBCN dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa với lực lượng sản xuất được cơ khí hoá, hiện đại hoá mang tính xã hội hoá cao."
    },
    {
        "stt":  132,
        "cauHoi":  "Luận điểm nào sau đây không phải do V.I.Lênin viết bàn về những nguyên lý của chủ nghĩa xã hội khoa học trong thời kỳ mới?",
        "traloi1":  "Về chuyên chính vô sản; Thời kỳ quá độ chính trị từ CNTB lên CNCS.",
        "traloi2":  "Về chế độ dân chủ: không có dân chủ thuần tuý hay dân chủ nói chung.",
        "traloi3":  "Về thời kỳ quá độ chính trị từ các nước không qua giai đoạn tư bản tiến lên CNXH.",
        "traloi4":  "Về cải cách hành chính bộ máy nhà nước và cương lĩnh xây dựng CNXH ở Nga.",
        "dapAn":  "traloi3",
        "dapAnText":  "Về thời kỳ quá độ chính trị từ các nước không qua giai đoạn tư bản tiến lên CNXH."
    },
    {
        "stt":  133,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, đặc trưng cơ bản của giai đoạn đầu của xã hội cộng sản gồm mấy đặc trưng?",
        "traloi1":  "4 đặc trưng.",
        "traloi2":  "5 đặc trưng.",
        "traloi3":  "6 đặc trưng.",
        "traloi4":  "7 đặc trưng.",
        "dapAn":  "traloi3",
        "dapAnText":  "6 đặc trưng."
    },
    {
        "stt":  134,
        "cauHoi":  "“Tư liệu sản xuất chuyển thành tài sản chung, thì gia đình cá thể sẽ không còn là đơn vị kinh tế xã hội nữa. Việc nuôi dạy con cái trở thành công việc của xã hội”. Phát biểu này của ai?",
        "traloi1":  "Hồ Chí Minh.",
        "traloi2":  "C.Mác.",
        "traloi3":  "V.I.Lênin.",
        "traloi4":  "Ph.Ăngghen.",
        "dapAn":  "traloi4",
        "dapAnText":  "Ph.Ăngghen."
    },
    {
        "stt":  135,
        "cauHoi":  "Đời sống của nhân dân giữa những vùng, miền của đất nước còn có sự chênh lệch là đặc điểm của thời kì quá độ trong lĩnh vực nào?",
        "traloi1":  "Chính trị.",
        "traloi2":  "Kinh tế.",
        "traloi3":  "Tư tưởng và văn hóa.",
        "traloi4":  "Xã hội.",
        "dapAn":  "traloi4",
        "dapAnText":  "Xã hội."
    },
    {
        "stt":  136,
        "cauHoi":  "Theo Ph.Ăngghen, với tư cách là một hình thái nhà nước, một chế độ chính trị thì trong lịch sử nhân loại, cho đến nay có mấy chế độ dân chủ ra đời?",
        "traloi1":  "2 (dân chủ tư sản; dân chủ XHCN).",
        "traloi2":  "3 (dân chủ nguyên thuỷ; dân chủ tư sản; dân chủ XHCN).",
        "traloi3":  "4 (dân chủ nguyên thuỷ; dân chủ chủ nô; dân chủ tư sản; dân chủ XHCN).",
        "traloi4":  "3 (dân chủ chủ nô; dân chủ tư sản; dân chủ XHCN).",
        "dapAn":  "traloi4",
        "dapAnText":  "3 (dân chủ chủ nô; dân chủ tư sản; dân chủ XHCN)."
    },
    {
        "stt":  137,
        "cauHoi":  "Cơ sở, nền tảng pháp lý cho sự tồn tại và hình thành nên các mối quan hệ khác trong gia đình là gì?",
        "traloi1":  "Quan hệ huyết thống.",
        "traloi2":  "Quan hệ kinh tế.",
        "traloi3":  "Quan hệ nuôi dưỡng.",
        "traloi4":  "Quan hệ hôn nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Quan hệ hôn nhân."
    },
    {
        "stt":  138,
        "cauHoi":  "Việc hình thành khối liên minh công, nông, trí trong thời kỳ quá độ lên CNXH xuất phát từ:",
        "traloi1":  "Nhu cầu của cuộc cách mạng khoa học công nghệ.",
        "traloi2":  "Nhu cầu và lợi ích kinh tế của chính họ.",
        "traloi3":  "Nhu cầu của công nghiệp hoá, hiện đại hoá.",
        "traloi4":  "Nhu cầu trở thành lãnh đạo xã hội của giai cấp công nhân.",
        "dapAn":  "traloi2",
        "dapAnText":  "Nhu cầu và lợi ích kinh tế của chính họ."
    },
    {
        "stt":  139,
        "cauHoi":  "Nhà nước XHCN ra đời là kết quả của:",
        "traloi1":  "Cách mạng do giai cấp vô sản lãnh đạo, đập tan nhà nước tư sản.",
        "traloi2":  "Cách mạng do giai cấp vô sản lãnh đạo, đập tan nhà nước tư sản, xây dựng nhà nước của giai cấp vô sản.",
        "traloi3":  "Cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản.",
        "traloi4":  "Cách mạng do giai cấp công nhân, nông dân tiến hành dưới sự lãnh đạo của Đảng Cộng sản.",
        "dapAn":  "traloi3",
        "dapAnText":  "Cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
        "stt":  140,
        "cauHoi":  "Hiện nay ở Việt Nam, đội ngũ doanh nhân được Đảng chủ trương xây dựng thành:",
        "traloi1":  "Một đội ngũ đặc biệt.",
        "traloi2":  "Một đội ngũ vững mạnh.",
        "traloi3":  "Một đội ngũ tiềm năng.",
        "traloi4":  "Một đội ngũ quan trọng.",
        "dapAn":  "traloi2",
        "dapAnText":  "Một đội ngũ vững mạnh."
    },
    {
        "stt":  141,
        "cauHoi":  "Sự phát triển của giai cấp công nhân được qui định bởi:",
        "traloi1":  "Sự phát triển của giai cấp tư sản công nghiệp.",
        "traloi2":  "Sự phát triển của giai cấp vô sản đại công nghiệp.",
        "traloi3":  "Sự phát triển của phong trào công nhân quốc tế.",
        "traloi4":  "Sự phát triển của chủ nghĩa đế quốc.",
        "dapAn":  "traloi1",
        "dapAnText":  "Sự phát triển của giai cấp tư sản công nghiệp."
    },
    {
        "stt":  142,
        "cauHoi":  "Theo quan điểm của V.I.Lênin, công thức ra đời chủ nghĩa xã hội dưới chế độ xô viết. Chọn đáp án đúng nhất.",
        "traloi1":  "Chính quyền xô viết + Trật tự ở đường sắt Phổ + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        "traloi2":  "Chính quyền cộng sản + Trật tự ở đường sắt Phổ + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        "traloi3":  "Chính quyền xô viết + Trật tự xã hội + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        "traloi4":  "Chính quyền xô viết + Tự do, bình đẳng, bác ái của Pháp + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Chính quyền xô viết + Trật tự ở đường sắt Phổ + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội."
    },
    {
        "stt":  143,
        "cauHoi":  "“Với việc sản xuất ra tư liệu tiêu dùng, tư liệu sản xuất, tái sản xuất ra con người, gia đình như một tế bào tự nhiên, là một đơn vị cơ sở để tạo nên cơ thể – xã hội”. Câu trích dẫn này của ai?",
        "traloi1":  "Hồ Chí Minh.",
        "traloi2":  "V.I.Lênin.",
        "traloi3":  "C.Mác.",
        "traloi4":  "Ph.Ăngghen.",
        "dapAn":  "traloi4",
        "dapAnText":  "Ph.Ăngghen."
    },
    {
        "stt":  144,
        "cauHoi":  "Quyền nào thể hiện dân chủ trong lĩnh vực văn hóa?",
        "traloi1":  "Quyền được đảm bảo về mặt tinh thần khi không còn khả năng lao động.",
        "traloi2":  "Quyền tham gia thảo luận các vấn đề chung của cả nước.",
        "traloi3":  "Quyền được thông tin, tự do ngôn luận, tự do báo chí.",
        "traloi4":  "Quyền được hưởng lợi ích từ sáng tạo nghệ thuật của mình.",
        "dapAn":  "traloi4",
        "dapAnText":  "Quyền được hưởng lợi ích từ sáng tạo nghệ thuật của mình."
    },
    {
        "stt":  145,
        "cauHoi":  "Văn kiện nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        "traloi1":  "Tuyên ngôn của Đảng Cộng sản.",
        "traloi2":  "Tuyên ngôn độc lập Mỹ – 1776.",
        "traloi3":  "Tuyên ngôn nhân quyền và dân quyền Pháp – 1791.",
        "traloi4":  "Tuyên ngôn Đảng Cộng sản Việt Nam.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tuyên ngôn của Đảng Cộng sản."
    },
    {
        "stt":  146,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, trong chủ nghĩa xã hội phải thiết lập nhà nước:",
        "traloi1":  "Chuyên chính cộng sản.",
        "traloi2":  "Chuyên chính dân tộc.",
        "traloi3":  "Chuyên chính vô sản.",
        "traloi4":  "Của dân, do dân, vì dân.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chuyên chính vô sản."
    },
    {
        "stt":  147,
        "cauHoi":  "Quá độ từ xã hội tiền tư bản lên chủ nghĩa xã hội, bỏ qua giai đoạn phát triển tư bản chủ nghĩa là quá độ:",
        "traloi1":  "Gián tiếp.",
        "traloi2":  "Nhảy vọt.",
        "traloi3":  "Đứt quãng.",
        "traloi4":  "Không cơ bản.",
        "dapAn":  "traloi1",
        "dapAnText":  "Gián tiếp."
    },
    {
        "stt":  148,
        "cauHoi":  "Theo các nhà nghiên cứu CNHX khoa học, việc xây dựng gia đình dựa trên cơ sở kinh tế, chính trị mà thiếu đi cơ sở văn hoá thì dẫn đến:",
        "traloi1":  "Việc xây dựng gia đình sẽ khó khăn trăm bề.",
        "traloi2":  "Việc xây dựng gia đình sẽ không đảm bảo được hạnh phúc.",
        "traloi3":  "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao.",
        "traloi4":  "Việc xây dựng gia đình sẽ không đạt được gia đình văn hoá.",
        "dapAn":  "traloi3",
        "dapAnText":  "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao."
    },
    {
        "stt":  149,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Ưu điểm của chủ nghĩa xã hội không tưởng là:",
        "traloi1":  "Thể hiện tinh thần phê phán, lên án chế độ quân chủ chuyên chế và chế độ TBCN bất công.",
        "traloi2":  "Đưa ra nhiều luận điểm có giá trị về xã hội tương lai; về tổ chức sản xuất, phân phối; vai trò của khoa học, công nghệ; giải phóng lao động, giải phóng phụ nữ.",
        "traloi3":  "Thức tỉnh giai cấp công nhân và người lao động trong cuộc đấu tranh chống chế độ quân chủ chuyên chế và chế độ TBCN bất công.",
        "traloi4":  "Giúp chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang độc quyền, chuẩn bị nền tảng kinh tế, xã hội cho giai cấp công nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Giúp chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang độc quyền, chuẩn bị nền tảng kinh tế, xã hội cho giai cấp công nhân."
    },
    {
        "stt":  150,
        "cauHoi":  "C.Mác và Ph.Ăngghen bắt đầu nghiên cứu các phong trào đấu tranh của giai cấp công nhân ở đâu và thời gian nào?",
        "traloi1":  "Châu Âu, ở Anh, Pháp vào giữa thế kỷ XIX.",
        "traloi2":  "Châu Âu, ở Đức, Liên Xô vào giữa thế kỷ XIX.",
        "traloi3":  "Châu Mỹ, ở Mỹ, Cuba vào giữa thế kỷ XIX.",
        "traloi4":  "Châu Âu, ở Anh, Pháp vào đầu thế kỷ XIX.",
        "dapAn":  "traloi1",
        "dapAnText":  "Châu Âu, ở Anh, Pháp vào giữa thế kỷ XIX."
    },
    {
        "stt":  151,
        "cauHoi":  "Chọn đáp án đúng nhất. Quan niệm gia đình được hiểu là:",
        "traloi1":  "Một cộng đồng người cá biệt, có vai trò xây dựng nên một xã hội.",
        "traloi2":  "Hai người kết hôn, tiến tới việc sinh dưỡng thế hệ tương lai của loài người.",
        "traloi3":  "Một cộng đồng người đặc biệt, có vai trò quyết định đến sự tồn tại và phát triển của xã hội.",
        "traloi4":  "Một đơn vị đặc biệt quan trọng, là viên gạch đầu tiên để xây dựng nên ngôi nhà xã hội.",
        "dapAn":  "traloi3",
        "dapAnText":  "Một cộng đồng người đặc biệt, có vai trò quyết định đến sự tồn tại và phát triển của xã hội."
    },
    {
        "stt":  152,
        "cauHoi":  "Chủ nghĩa xã hội khoa học ra đời từ tiền đề là:",
        "traloi1":  "Sự chuyển biến lập trường triết học và lập trường chính trị của C. Mác và Ph. Ăngghen.",
        "traloi2":  "Sự chuyển biến lập trường triết học và lập trường chính trị của Lênin.",
        "traloi3":  "Sự chuyển biến lập trường triết học và lập trường chính trị của C. Mác; Ph. Ăngghen và Lênin.",
        "traloi4":  "Sự chuyển biến lập trường triết học và lập trường chính trị từ duy tâm sang duy vật.",
        "dapAn":  "traloi1",
        "dapAnText":  "Sự chuyển biến lập trường triết học và lập trường chính trị của C. Mác và Ph. Ăngghen."
    },
    {
        "stt":  153,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Chủ nghĩa xã hội là:",
        "traloi1":  "Phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động chống lại áp bức, bất công, chống lại giai cấp thống trị.",
        "traloi2":  "Trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng nhân dân lao động ra khỏi ách áp bức, bóc lột, bất công.",
        "traloi3":  "Một khoa học về sứ mệnh lịch sử của giai cấp công nhân; một chế độ xã hội tốt đẹp.",
        "traloi4":  "Một lý tưởng mới về xã hội đại đồng, xã hội công bằng và tự trị.",
        "dapAn":  "traloi4",
        "dapAnText":  "Một lý tưởng mới về xã hội đại đồng, xã hội công bằng và tự trị."
    },
    {
        "stt":  154,
        "cauHoi":  "Dân chủ xã hội chủ nghĩa là nền dân chủ:",
        "traloi1":  "Tuyệt đối nhất.",
        "traloi2":  "Hoàn bị nhất.",
        "traloi3":  "Rộng rãi nhất và triệt để nhất.",
        "traloi4":  "Phổ biến nhất trong lịch sử.",
        "dapAn":  "traloi3",
        "dapAnText":  "Rộng rãi nhất và triệt để nhất."
    },
    {
        "stt":  155,
        "cauHoi":  "Nhân tố chủ quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình là:",
        "traloi1":  "Đảng Cộng sản.",
        "traloi2":  "Đảng Cộng sản Việt Nam.",
        "traloi3":  "Liên minh giai cấp công nhân với giai cấp nông dân và các tầng lớp khác trong xã hội.",
        "traloi4":  "Quốc tế Cộng sản.",
        "dapAn":  "traloi1",
        "dapAnText":  "Đảng Cộng sản."
    },
    {
        "stt":  156,
        "cauHoi":  "Chủ nghĩa Mác – Lênin lưu ý: Càng hoàn thiện bao nhiêu, nền dân chủ XHCN lại càng tự tiêu vong bấy nhiêu. Điều này được hiểu là:",
        "traloi1":  "Tính chính trị của dân chủ sẽ mất đi, dân chủ trở thành một thói quen, một tập quán trong sinh hoạt xã hội.",
        "traloi2":  "Tính dân chủ sẽ mất đi cùng với chế độ nhà nước cũng tiêu vong, không còn nữa.",
        "traloi3":  "Tính dân chủ sẽ mất đi, thay vào đó là thực hiện dân chủ cộng sản chủ nghĩa.",
        "traloi4":  "Tính quân chủ sẽ mất đi cùng với chế độ nhà nước cũng tiêu vong, không còn nữa.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tính chính trị của dân chủ sẽ mất đi, dân chủ trở thành một thói quen, một tập quán trong sinh hoạt xã hội."
    },
    {
        "stt":  157,
        "cauHoi":  "Trong xã hội phong kiến để duy trì chế độ bóc lột với quan hệ gia trưởng thì qui định đối với người phụ nữ là:",
        "traloi1":  "Chung thuỷ một chồng, nội trợ gia đình.",
        "traloi2":  "Cha mẹ đặt đâu con ngồi đấy.",
        "traloi3":  "Tuân thủ đầy đủ “tàm tòng”, “tứ đức”.",
        "traloi4":  "Công, dung, ngôn, hạnh, hiếu thảo trong gia đình.",
        "dapAn":  "traloi1",
        "dapAnText":  "Chung thuỷ một chồng, nội trợ gia đình."
    },
    {
        "stt":  158,
        "cauHoi":  "Quan điểm nào sau đây là sự vận dụng sáng tạo nguyên lý cơ bản của chủ nghĩa xã hội khoa học của Lênin?",
        "traloi1":  "Cách mạng giải phóng dân tộc bản thân nó được giải quyết trong cách mạng vô sản.",
        "traloi2":  "Cách mạng vô sản có thể nổ ra và thắng lợi một số nước, nơi CNTB chưa phải phát triển nhất.",
        "traloi3":  "Cách mạng giải phóng dân tộc có khản năng nổ ra và giành thắng lợi trước cách mạng vô sản.",
        "traloi4":  "Cách mạng giải phóng dân tộc phụ thuộc vào cách mạng vô sản ở chính quốc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Cách mạng vô sản có thể nổ ra và thắng lợi một số nước, nơi CNTB chưa phải phát triển nhất."
    },
    {
        "stt":  159,
        "cauHoi":  "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng Nhà nước xã hội chủ nghĩa được chia thành:",
        "traloi1":  "Chức năng đối nội, chức năng đối ngoại.",
        "traloi2":  "Chức năng kinh tế, chức năng chính trị.",
        "traloi3":  "Chức năng giai cấp, chức năng xã hội.",
        "traloi4":  "Chức năng đối nội, chức năng chính trị.",
        "dapAn":  "traloi1",
        "dapAnText":  "Chức năng đối nội, chức năng đối ngoại."
    },
    {
        "stt":  160,
        "cauHoi":  "Bản chất dân chủ XHCN ở Việt Nam. Chọn đáp án KHÔNG đúng.",
        "traloi1":  "Được thực hiện ưu tiên trong lĩnh vực chính trị.",
        "traloi2":  "Vừa là mục tiêu, vừa là động lực để xây dựng chủ nghĩa xã hội.",
        "traloi3":  "Gắn liền với pháp luật.",
        "traloi4":  "Do nhân dân làm chủ, quyền lực thuộc về nhân dân.",
        "dapAn":  "traloi1",
        "dapAnText":  "Được thực hiện ưu tiên trong lĩnh vực chính trị."
    },
    {
        "stt":  161,
        "cauHoi":  "Phát kiến vĩ đại của Mác và Ăngghen cho tiền đề lý luận chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Chủ nghĩa duy vật lịch sử; Học thuyết giá trị thặng dư.",
        "traloi2":  "Chủ nghĩa duy vật lịch sử; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        "traloi3":  "Chủ nghĩa duy vật lịch sử; Học thuyết giá trị thặng dư; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        "traloi4":  "Chủ nghĩa duy vật lịch sử; Học thuyết các hình thái kinh tế xã hội; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chủ nghĩa duy vật lịch sử; Học thuyết giá trị thặng dư; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân."
    },
    {
        "stt":  162,
        "cauHoi":  "Chọn đáp án đúng nhất. Kết quả tất yếu của hôn nhân xuất phát từ tình yêu:",
        "traloi1":  "Gia đình hạnh phúc.",
        "traloi2":  "Kết hôn.",
        "traloi3":  "Hôn nhân một vợ một chồng.",
        "traloi4":  "Được sự chứng nhận của pháp luật.",
        "dapAn":  "traloi3",
        "dapAnText":  "Hôn nhân một vợ một chồng."
    },
    {
        "stt":  163,
        "cauHoi":  "Chức năng “trấn áp” của nhà nước XHCN là để:",
        "traloi1":  "Duy trì địa vị của giai cấp nắm quyền chiếm hữu tư liệu sản xuất chủ yếu của xã hội.",
        "traloi2":  "Thể hiện quyền lực của giai cấp vô sản đối với giai cấp tư sản.",
        "traloi3":  "Trấn áp giai cấp tư sản, trấn áp những phần tử chống đối giai cấp vô sản.",
        "traloi4":  "Trấn áp giai cấp bóc lột đã bị lật đổ và phần tử chống đối để bảo vệ thành quả cách mạng.",
        "dapAn":  "traloi4",
        "dapAnText":  "Trấn áp giai cấp bóc lột đã bị lật đổ và phần tử chống đối để bảo vệ thành quả cách mạng."
    },
    {
        "stt":  164,
        "cauHoi":  "Sứ mệnh lịch sử của giai cấp công nhân không phải là thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác mà là:",
        "traloi1":  "Xoá bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
        "traloi2":  "Xoá bỏ triệt để chế độ công hữu về tư liệu sản xuất.",
        "traloi3":  "Xoá bỏ triệt để chế độ tàn dư tư bản chủ nghĩa.",
        "traloi4":  "Xoá bỏ triệt để chế độ tàn dư phong kiến.",
        "dapAn":  "traloi1",
        "dapAnText":  "Xoá bỏ triệt để chế độ tư hữu về tư liệu sản xuất."
    },
    {
        "stt":  165,
        "cauHoi":  "Dân chủ XHCN đánh dấu sự manh nha ra đời từ thực tiễn nào?",
        "traloi1":  "Công nghiệp hơi nước ở Anh năm 1791.",
        "traloi2":  "Đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871.",
        "traloi3":  "Đấu tranh giành chính quyền ở Mỹ năm 1776.",
        "traloi4":  "Cách mạng Tháng 10/1917 ở Nga.",
        "dapAn":  "traloi2",
        "dapAnText":  "Đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871."
    },
    {
        "stt":  166,
        "cauHoi":  "Mối quan hệ nào sau đây không phải là quan hệ huyết thống trong gia đình?",
        "traloi1":  "Ông nội – Cháu nội.",
        "traloi2":  "Vợ – Chồng.",
        "traloi3":  "Con Cô – Con cậu.",
        "traloi4":  "Anh trai – Em gái.",
        "dapAn":  "traloi2",
        "dapAnText":  "Vợ – Chồng."
    },
    {
        "stt":  167,
        "cauHoi":  "Có mấy loại hình quá độ lên cộng sản chủ nghĩa theo quan điểm của C.Mác và Ph.Ăngghen?",
        "traloi1":  "1 (Từ hình thái kinh tế – xã hội chủ nghĩa tư bản lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        "traloi2":  "2 (Từ hình thái kinh tế – xã hội thấp hơn, bỏ qua chủ nghĩa tư bản lên cộng sản chủ nghĩa và từ hình thái kinh tế – xã hội tư bản chủ nghĩa phát triển lên chủ nghĩa cộng sản).",
        "traloi3":  "1 (Từ hình thái kinh tế – xã hội phong kiến lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        "traloi4":  "2 (Từ Từ hình thái kinh tế – xã hội phong kiến lên hình thái kinh tế – xã hội cộng sản chủ nghĩa và từ hình thái kinh tế – xã hội chủ nghĩa tư bản lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        "dapAn":  "traloi2",
        "dapAnText":  "2 (Từ hình thái kinh tế – xã hội thấp hơn, bỏ qua chủ nghĩa tư bản lên cộng sản chủ nghĩa và từ hình thái kinh tế – xã hội tư bản chủ nghĩa phát triển lên chủ nghĩa cộng sản)."
    },
    {
        "stt":  168,
        "cauHoi":  "Tiền đề tư tưởng lý luận cho sự ra đời của chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        "traloi2":  "Triết học cổ điển Anh; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa phê phán.",
        "traloi3":  "Triết học cổ điển Pháp; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        "traloi4":  "Triết học Mác - Lênin; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        "dapAn":  "traloi1",
        "dapAnText":  "Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán."
    },
    {
        "stt":  169,
        "cauHoi":  "“Bước thứ hai và là bước chủ yếu là thủ tiêu chế độ tư hữu ruộng đất…có như thế mới mở đường giải phóng hoàn toàn và thật sự cho phụ nữ, thủ tiêu được chế độ nô lệ gia đình”. Phát biểu này của ai?",
        "traloi1":  "Hồ Chí Minh.",
        "traloi2":  "C.Mác.",
        "traloi3":  "V.I.Lênin.",
        "traloi4":  "Ph.Ăngghen.",
        "dapAn":  "traloi3",
        "dapAnText":  "V.I.Lênin."
    },
    {
        "stt":  170,
        "cauHoi":  "Cơ sở phương pháp luận cho các nhà sáng lập chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Học thuyết Tiến hoá; Định luật Neuton; Định luật Talet.",
        "traloi2":  "Học thuyết Tiến hoá; Định luật Neuton; Học thuyết tế bào.",
        "traloi3":  "Học thuyết Tiến hoá; Định luật Bảo toàn và chuyển hoá năng lượng; Học thuyết tế bào.",
        "traloi4":  "Học thuyết Tiến hoá; Định luật Neuton; Định luật Bảo toàn và chuyển hoá năng lượng.",
        "dapAn":  "traloi3",
        "dapAnText":  "Học thuyết Tiến hoá; Định luật Bảo toàn và chuyển hoá năng lượng; Học thuyết tế bào."
    },
    {
        "stt":  171,
        "cauHoi":  "Quyền nào sau đây là một trong những nội dung của dân chủ trong lĩnh vực chính trị?",
        "traloi1":  "Quyền sáng tác văn học.",
        "traloi2":  "Quyền tự do báo chí.",
        "traloi3":  "Quyền lao động.",
        "traloi4":  "Quyền bình đẳng nam nữ.",
        "dapAn":  "traloi2",
        "dapAnText":  "Quyền tự do báo chí."
    },
    {
        "stt":  172,
        "cauHoi":  "“Học thuyết của Mác là học thuyết vạn năng vì nó là một học thuyết chính xác”, đánh giá này của ai?",
        "traloi1":  "Ph. Ăngghen.",
        "traloi2":  "Hồ Chí Minh.",
        "traloi3":  "D. Ricacdo.",
        "traloi4":  "V.I. Lênin.",
        "dapAn":  "traloi4",
        "dapAnText":  "V.I. Lênin."
    },
    {
        "stt":  173,
        "cauHoi":  "Chọn đáp án đúng nhất. Cơ cấu xã hội - giai cấp là:",
        "traloi1":  "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên.",
        "traloi2":  "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu, về tổ chức sản xuất… giữa các giai cấp và tầng lớp đó.",
        "traloi3":  "Hệ thống các giai cấp, tầng lớp xã hội tồn tại chủ quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu, về tổ chức sản xuất… giữa các giai cấp và tầng lớp đó.",
        "traloi4":  "Những cộng đồng người cùng với mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị – xã hội … giữa con người với con người.",
        "dapAn":  "traloi2",
        "dapAnText":  "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu, về tổ chức sản xuất… giữa các giai cấp và tầng lớp đó."
    },
    {
        "stt":  174,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Về văn hoá, xã hội, nhà nước XHCN được xây dựng trên nền tảng:",
        "traloi1":  "Lý luận của chủ nghĩa Mác – Lênin.",
        "traloi2":  "Giá trị văn hoá Phương Tây.",
        "traloi3":  "Giá trị văn hoá tiên tiến, tiến bộ của nhân loại.",
        "traloi4":  "Bản sắc văn hoá tiên tiến, đậm đà riêng biệt của dân tộc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giá trị văn hoá Phương Tây."
    },
    {
        "stt":  175,
        "cauHoi":  "Chọn đáp án đúng nhất. Nước ta đang ở giai đoạn phát triển nào?",
        "traloi1":  "Chế độ cộng sản chủ nghĩa.",
        "traloi2":  "Chế độ xã hội chủ nghĩa.",
        "traloi3":  "Thời kì quá độ lên chủ nghĩa xã hội bỏ qua giai đoạn phát triển tư bản chủ nghĩa.",
        "traloi4":  "Thời kì quá độ lên chủ nghĩa xã hội.",
        "dapAn":  "traloi3",
        "dapAnText":  "Thời kì quá độ lên chủ nghĩa xã hội bỏ qua giai đoạn phát triển tư bản chủ nghĩa."
    },
    {
        "stt":  176,
        "cauHoi":  "Bản chất kinh tế của nền dân chủ XHCN khác với nền dân chủ tư sản là:",
        "traloi1":  "Chế độ công hữu tư liệu sản xuất và thực hiện chế độ phân phối theo kết quả lao động.",
        "traloi2":  "Chế độ công hữu tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu.",
        "traloi3":  "Chế độ sở hữu chung tư liệu sản xuất xã hội và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu.",
        "traloi4":  "Chế độ công hữu tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo nhu cầu người lao động.",
        "dapAn":  "traloi2",
        "dapAnText":  "Chế độ công hữu tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu."
    },
    {
        "stt":  177,
        "cauHoi":  "Nền dân chủ xã hội chủ nghĩa là nền dân chủ:",
        "traloi1":  "Của tất cả mọi người trong xã hội.",
        "traloi2":  "Của những người lãnh đạo.",
        "traloi3":  "Của nhân dân lao động.",
        "traloi4":  "Của giai cấp công nhân.",
        "dapAn":  "traloi3",
        "dapAnText":  "Của nhân dân lao động."
    },
    {
        "stt":  178,
        "cauHoi":  "Các nhà sáng lập chủ nghĩa xã hội khoa học đã thừa nhận chủ nghĩa cộng sản ra đời dựa trên vai trò to lớn của:",
        "traloi1":  "C.Mác và Ph.Ăngghen.",
        "traloi2":  "C.Mác, Ph.Ăngghen và V.I.Lênin.",
        "traloi3":  "Chủ nghĩa tư bản.",
        "traloi4":  "V.I.Lênin và cách mạng tháng 10/1917 – Nga.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chủ nghĩa tư bản."
    },
    {
        "stt":  179,
        "cauHoi":  "Hành vi, việc làm nào sau đây vi phạm chính sách dân số của Đảng và Nhà nước?",
        "traloi1":  "Tuyên truyền, phổ biến biện pháp kế hoạch hóa gia đình.",
        "traloi2":  "Cung cấp các phương tiện tránh thai.",
        "traloi3":  "Cung cấp các dịch vụ dân số.",
        "traloi4":  "Lựa chọn giới tính thai nhi dưới mọi hình thức.",
        "dapAn":  "traloi4",
        "dapAnText":  "Lựa chọn giới tính thai nhi dưới mọi hình thức."
    },
    {
        "stt":  180,
        "cauHoi":  "Chọn đáp án đúng nhất. Hôn nhân tiến bộ là:",
        "traloi1":  "Xuất phát từ tính tự nguyện của hai bên gia đình.",
        "traloi2":  "Xuất phát từ hợp đồng được ký trước pháp luật.",
        "traloi3":  "Xuất phát từ tính tự nguyện của một bên Nam hay Nữ.",
        "traloi4":  "Xuất phát từ tình yêu lứa đôi.",
        "dapAn":  "traloi4",
        "dapAnText":  "Xuất phát từ tình yêu lứa đôi."
    },
    {
        "stt":  181,
        "cauHoi":  "Ở Việt Nam, quá độ lên CNXH bỏ qua chế độ TBCN, tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN. Nghĩa là:",
        "traloi1":  "Thời kỳ quá độ không còn quan hệ bóc lột và bị bóc lột.",
        "traloi2":  "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột tư bản chủ nghĩa không giữ vai trò thống trị.",
        "traloi3":  "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột xã hội chủ nghĩa không giữ vai trò thống trị.",
        "traloi4":  "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột tư bản chủ nghĩa dần dần bị xoá bỏ.",
        "dapAn":  "traloi2",
        "dapAnText":  "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột tư bản chủ nghĩa không giữ vai trò thống trị."
    },
    {
        "stt":  182,
        "cauHoi":  "Chọn đáp án đúng nhất. Theo V.I.Lênin, nội dung chủ yếu và mục đích cuối cùng của nhà nước XHCN là:",
        "traloi1":  "Giải phóng toàn bộ người lao động trong xã hội.",
        "traloi2":  "Cải tạo xã hội cũ, xây dựng thành công xã hội mới.",
        "traloi3":  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        "traloi4":  "Giải phóng toàn bộ người lao động trong xã hội, phát triển toàn bộ cá nhân.",
        "dapAn":  "traloi2",
        "dapAnText":  "Cải tạo xã hội cũ, xây dựng thành công xã hội mới."
    },
    {
        "stt":  183,
        "cauHoi":  "Nền dân chủ xã hội chủ nghĩa gắn liền với:",
        "traloi1":  "Đạo đức.",
        "traloi2":  "Phong tục.",
        "traloi3":  "Truyền thống.",
        "traloi4":  "Pháp luật.",
        "dapAn":  "traloi4",
        "dapAnText":  "Pháp luật."
    },
    {
        "stt":  184,
        "cauHoi":  "“Ở các nước XHCN, giai cấp công nhân thông qua quá trình công nghiệp hoá và thực hiện […] để tăng năng suất lao động xã hội”. Chọn cụm từ đúng vào chỗ trống.",
        "traloi1":  "Một kiểu tổ chức kinh tế mới.",
        "traloi2":  "Một kiểu tổ chức sản xuất mới.",
        "traloi3":  "Một kiểu tổ chức xã hội mới về lao động.",
        "traloi4":  "Một kiểu tổ chức công nghiệp hoá mới về lao động.",
        "dapAn":  "traloi3",
        "dapAnText":  "Một kiểu tổ chức xã hội mới về lao động."
    },
    {
        "stt":  185,
        "cauHoi":  "Trong chính sách tôn giáo của Đảng và Nhà nước ta hiện nay, nội dung cốt lõi của công tác tôn giáo là:",
        "traloi1":  "Công tác vận động quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        "traloi2":  "Công tác giáo dục quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        "traloi3":  "Công tác tuyên truyền tư tưởng tốt đẹp của tôn giáo, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        "traloi4":  "Công tác đào tạo quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        "dapAn":  "traloi1",
        "dapAnText":  "Công tác vận động quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc."
    },
    {
        "stt":  186,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, trong chủ nghĩa xã hội, văn hoá là:",
        "traloi1":  "Tiền đề tinh thần của xã hội, rèn luyện bản lĩnh người cách mạng, biến con người thành có ích cho xã hội.",
        "traloi2":  "Tiền đề quan trọng cho sự phát triển kinh tế, xã hội, hun đúc và rèn luyện con người thành con người xã hội chủ nghĩa.",
        "traloi3":  "Tiền đề quan trọng cho sự phát triển kinh tế, xã hội, văn hoá phải soi đường cho quốc dân đi.",
        "traloi4":  "Nền tảng tinh thần, mục tiêu, động lực phát triển xã hội, trọng tâm là phát triển kinh tế.",
        "dapAn":  "traloi4",
        "dapAnText":  "Nền tảng tinh thần, mục tiêu, động lực phát triển xã hội, trọng tâm là phát triển kinh tế."
    },
    {
        "stt":  187,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản là cuộc cách mạng của:",
        "traloi1":  "Giai cấp tư sản tiến bộ lãnh đạo, cùng với tầng lớp trí thức có tư tưởng tiến bộ, hoà bình.",
        "traloi2":  "Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản.",
        "traloi3":  "Giai cấp vô sản, tầng lớp tri thức và nhân dân lao động trong xã hội tư bản.",
        "traloi4":  "Liên minh giai cấp công nhân – nông dân với các tầng lớp lao động trong xã hội tư bản.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
        "stt":  188,
        "cauHoi":  "Điều kiện khách quan của sứ mệnh giai cấp công nhân do:",
        "traloi1":  "Địa vị kinh tế và địa vị xã hội của giai cấp công nhân qui định.",
        "traloi2":  "Địa vị chính trị và địa vị xã hội của giai cấp công nhân qui định.",
        "traloi3":  "Địa vị kinh tế, chính trị – xã hội của giai cấp công nhân qui định.",
        "traloi4":  "Địa vị lịch sử khách quan và mâu thuẫn khách quan trong phương thức sản xuất tư bản qui định.",
        "dapAn":  "traloi4",
        "dapAnText":  "Địa vị lịch sử khách quan và mâu thuẫn khách quan trong phương thức sản xuất tư bản qui định."
    },
    {
        "stt":  189,
        "cauHoi":  "Nội dung văn hoá, xã hội của liên minh giai cấp, tầng lớp ở Việt Nam đòi hỏi phải:",
        "traloi1":  "Gắn tăng trưởng kinh tế với phát triển văn hoá, phát triển, xây dựng con người và thực hiện tiến bộ, công bằng xã hội.",
        "traloi2":  "Gắn tăng trưởng kinh tế với phát triển văn hoá, phát triển, xây dựng con người và thực hiện giải quyết việc làm cho người lao động.",
        "traloi3":  "Gắn tăng trưởng kinh tế với phát triển văn hoá, thực hiện tiến bộ, công bằng xã hội.",
        "traloi4":  "Gắn phát triển kinh tế với văn hoá, xây dựng con người mới và thực hiện tiến bộ, công bằng xã hội.",
        "dapAn":  "traloi1",
        "dapAnText":  "Gắn tăng trưởng kinh tế với phát triển văn hoá, phát triển, xây dựng con người và thực hiện tiến bộ, công bằng xã hội."
    },
    {
        "stt":  190,
        "cauHoi":  "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước XHCN được chia thành:",
        "traloi1":  "Chức năng chính trị; chức năng quân sự.",
        "traloi2":  "Chức năng kinh tế; chức năng văn hoá, xã hội.",
        "traloi3":  "Chức năng đối nội; chức năng đối ngoại.",
        "traloi4":  "Chức năng trấn áp; chức năng tổ chức và xây dựng.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chức năng đối nội; chức năng đối ngoại."
    },
    {
        "stt":  191,
        "cauHoi":  "Những nội dung khái quát về một Nhà nước pháp quyền XHCN Việt Nam được thể hiện trong:",
        "traloi1":  "Cương lĩnh chính trị đầu tiên của Đảng.",
        "traloi2":  "Chính cương vắn tắt và sách lược vắn tắt.",
        "traloi3":  "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội.",
        "traloi4":  "Cương lĩnh xây dựng đất nước trong thời kỳ kháng chiến, kiến quốc.",
        "dapAn":  "traloi3",
        "dapAnText":  "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội."
    },
    {
        "stt":  192,
        "cauHoi":  "Quá trình phát triển của dân chủ XHCN từ thấp tới cao, có sự kế thừa chọn lọc trước hết giá trị của nền dân chủ nào?",
        "traloi1":  "Dân chủ nguyên thuỷ.",
        "traloi2":  "Dân chủ chủ nô.",
        "traloi3":  "Dân chủ xã hội chủ nghĩa.",
        "traloi4":  "Dân chủ tư sản.",
        "dapAn":  "traloi4",
        "dapAnText":  "Dân chủ tư sản."
    },
    {
        "stt":  193,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Ở các nước quá độ lên CNXH với xuất phát điểm thấp, cơ cấu kinh tế biến đổi:",
        "traloi1":  "Từ nông nghiệp, công nghiệp sơ khai sang tăng tỉ trọng công nghiệp và dịch vụ, giảm tỉ trọng nông nghiệp.",
        "traloi2":  "Từ cơ cấu vùng lãnh thổ chưa định hình sang hình thành các vùng, các trung tâm kinh tế lớn.",
        "traloi3":  "Từ cơ cấu lực lượng sản xuất hiện đại nhưng không cân đối sang phát triển lực lượng sản xuất với trình độ công nghệ cao.",
        "traloi4":  "Từ phương thức sản xuất thấp kém lạc hậu sang phương thức sản xuất hiện đại, tiên tiến hơn.",
        "dapAn":  "traloi4",
        "dapAnText":  "Từ phương thức sản xuất thấp kém lạc hậu sang phương thức sản xuất hiện đại, tiên tiến hơn."
    },
    {
        "stt":  194,
        "cauHoi":  "Theo quan điểm của chủ nghĩa Mác – Lênin, trong thời kỳ quá độ, chức năng trấn áp của nhà nước XHCN thể hiện:",
        "traloi1":  "Tồn tại như một tất yếu.",
        "traloi2":  "Tồn tại nhưng không cần thiết.",
        "traloi3":  "Tồn tại trong thời kì đầu của CNXH.",
        "traloi4":  "Không cần tồn tại.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tồn tại như một tất yếu."
    },
    {
        "stt":  195,
        "cauHoi":  "Sự hình thành và phát triển của Chủ nghĩa xã hội khoa học trải qua những thời kỳ nào sau đây?",
        "traloi1":  "C. Mác và Ph. Ăngghen phát triển chủ nghĩa xã hội khoa hoc; Lênin vận dụng và phát triển trong điều kiện mới; Sự vận dụng và phát triển sáng tạo sau Lênin đến nay.",
        "traloi2":  "Trước công xã Pari; Sau công xã Pari; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga.",
        "traloi3":  "Trước công xã Pari; Sau công xã Pari; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga; Sự vận dụng và phát triển sáng tạo sau Lênin đến nay.",
        "traloi4":  "Từ 1848 đến Công xã Pari (1871); Sau Công xã Pari đến 1895; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga.",
        "dapAn":  "traloi4",
        "dapAnText":  "Từ 1848 đến Công xã Pari (1871); Sau Công xã Pari đến 1895; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga."
    },
    {
        "stt":  196,
        "cauHoi":  "Quan niệm dân gian nào ảnh hưởng xấu đến chính sách dân số của Nhà nước?",
        "traloi1":  "Cơn hơn cha là nhà có phước.",
        "traloi2":  "Một giọt máu đào hơn ao nước lã.",
        "traloi3":  "Cha mẹ sinh con trời sinh tính.",
        "traloi4":  "Đông con hơn nhiều của.",
        "dapAn":  "traloi4",
        "dapAnText":  "Đông con hơn nhiều của."
    },
    {
        "stt":  197,
        "cauHoi":  "Thực hiện sứ mệnh lịch sử của mình trên lĩnh vực văn hoá, tư tưởng cần tập trung xây dựng hệ giá trị mới bao gồm:",
        "traloi1":  "Lao động; công bằng; dân chủ; bình đẳng và tự do.",
        "traloi2":  "Lao động; công chính; dân chủ; tự do và bác ái.",
        "traloi3":  "Công bằng; dân chủ; văn minh; tự do và bác ái.",
        "traloi4":  "Dân chủ; công bằng; văn minh; bình đẳng và tự do.",
        "dapAn":  "traloi1",
        "dapAnText":  "Lao động; công bằng; dân chủ; bình đẳng và tự do."
    },
    {
        "stt":  198,
        "cauHoi":  "Trong hệ thống xã hội, mỗi loại hình cơ cấu xã hội có vị trí và vai trò:",
        "traloi1":  "Hợp tác với nhau.",
        "traloi2":  "Phụ thuộc lẫn nhau.",
        "traloi3":  "Song song ngang nhau.",
        "traloi4":  "Không ngang nhau.",
        "dapAn":  "traloi4",
        "dapAnText":  "Không ngang nhau."
    },
    {
        "stt":  199,
        "cauHoi":  "Chủ nghĩa xã hội theo thuật ngữ tiếng Anh được viết là:",
        "traloi1":  "Socialism.",
        "traloi2":  "Political Economic.",
        "traloi3":  "Philosophy.",
        "traloi4":  "Social democracy.",
        "dapAn":  "traloi1",
        "dapAnText":  "Socialism."
    },
    {
        "stt":  200,
        "cauHoi":  "Các tôn giáo hiện nay ở Việt Nam hoạt động:",
        "traloi1":  "Không cần dựa trên quy chuẩn pháp luật.",
        "traloi2":  "Không cần dựa trên quy chuẩn đạo đức.",
        "traloi3":  "Đan xen, hỗ trợ với nhau cùng phát triển.",
        "traloi4":  "Bình đẳng trong khuôn khổ pháp luật.",
        "dapAn":  "traloi4",
        "dapAnText":  "Bình đẳng trong khuôn khổ pháp luật."
    },
    {
        "stt":  201,
        "cauHoi":  "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tương trợ và giúp đỡ lẫn nhau cùng tiến bộ là:",
        "traloi1":  "Điểm mới trong xã hội Việt Nam.",
        "traloi2":  "Đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam.",
        "traloi3":  "Biểu hiện của sự phát triển của các dân tộc.",
        "traloi4":  "Đặc trưng quan trọng để xây dựng và phát triển đất nước.",
        "dapAn":  "traloi2",
        "dapAnText":  "Đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam."
    },
    {
        "stt":  202,
        "cauHoi":  "Chọn đáp án KHÔNG đúng với sứ mệnh của nhà nước XHCN:",
        "traloi1":  "Xây dựng thành công chủ nghĩa xã hội.",
        "traloi2":  "Đưa nhân dân lao động lên làm địa vị làm chủ trên tất cả các mặt của đời sống.",
        "traloi3":  "Chăm lo cho lợi ích của đại đa số nhân dân lao động.",
        "traloi4":  "Giải quyết mâu thuẫn trong xã hội; thực hiện xoá đói, giảm nghèo; thực hiện tiến bộ và công bằng xã hội.",
        "dapAn":  "traloi4",
        "dapAnText":  "Giải quyết mâu thuẫn trong xã hội; thực hiện xoá đói, giảm nghèo; thực hiện tiến bộ và công bằng xã hội."
    },
    {
        "stt":  203,
        "cauHoi":  "Mâu thuẫn thể hiện tính chất đối kháng không thể điều hoà giữa giai cấp công nhân và giai cấp tư sản:",
        "traloi1":  "Mâu thuẫn về lợi ích kinh tế.",
        "traloi2":  "Mâu thuẫn về lợi ích chính trị.",
        "traloi3":  "Mâu thuẫn về chế độ tư hữu về tư liệu sản xuất.",
        "traloi4":  "Mâu thuẫn giữa lực lượng sản xuất xã hội hoá ngày càng rộng lớn với quan hệ sản xuất TBCN.",
        "dapAn":  "traloi4",
        "dapAnText":  "Mâu thuẫn giữa lực lượng sản xuất xã hội hoá ngày càng rộng lớn với quan hệ sản xuất TBCN."
    },
    {
        "stt":  204,
        "cauHoi":  "Về chính trị, nhà nước XHCN mang bản chất của:",
        "traloi1":  "Giai cấp công nhân – giai cấp có lợi ích phù hợp với lợi ích chung của quần chúng nhân dân lao động.",
        "traloi2":  "Giai cấp thống trị, nhằm bảo vệ và duy trì địa vị của mình.",
        "traloi3":  "Giai cấp vô sản, nhằm giải phóng giai cấp của mình và giải phóng tất cả các tầng lớp nhân dân lao động khác trong xã hội.",
        "traloi4":  "Giai cấp công nhân, nông dân và lao động trí óc.",
        "dapAn":  "traloi1",
        "dapAnText":  "Giai cấp công nhân – giai cấp có lợi ích phù hợp với lợi ích chung của quần chúng nhân dân lao động."
    },
    {
        "stt":  205,
        "cauHoi":  "Trong tác phẩm nào sau đây phản ánh hạn chế của chủ nghĩa xã hội không tưởng:",
        "traloi1":  "Tuyên ngôn Đảng Cộng sản – Mác, Ăngghen.",
        "traloi2":  "Ba nguồn gốc, ba bộ phận hợp thành chủ nghĩa Mác – V.I.Lênin.",
        "traloi3":  "Chống Đuyrinh – Ph.Ăngghen.",
        "traloi4":  "Làm gì? - V.I.Lênin.",
        "dapAn":  "traloi2",
        "dapAnText":  "Ba nguồn gốc, ba bộ phận hợp thành chủ nghĩa Mác – V.I.Lênin."
    },
    {
        "stt":  206,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Các giai cấp, tầng lớp xã hội và nhóm xã hội cơ bản trong cơ cấu xã hội – giai cấp của thời kì quá độ lên CNXH là:",
        "traloi1":  "Giai cấp công nhân.",
        "traloi2":  "Giai cấp tư bản.",
        "traloi3":  "Giai cấp nông dân.",
        "traloi4":  "Tầng lớp doanh nhân.",
        "dapAn":  "traloi2",
        "dapAnText":  "Giai cấp tư bản."
    },
    {
        "stt":  207,
        "cauHoi":  "Sự hình thành và phát triển của Chủ nghĩa xã hội khoa học trải qua mấy giai đoạn?",
        "traloi1":  "3 giai đoạn.",
        "traloi2":  "2 giai đoạn.",
        "traloi3":  "4 giai đoạn.",
        "traloi4":  "5 giai đoạn.",
        "dapAn":  "traloi1",
        "dapAnText":  "3 giai đoạn."
    },
    {
        "stt":  208,
        "cauHoi":  "Ở nước ta, thực hiện có hiệu quả chính sách dân số là nhằm mục đích nào?",
        "traloi1":  "Đảm bảo trật tự, an toàn xã hội.",
        "traloi2":  "Thực hiện xóa đói, giảm nghèo.",
        "traloi3":  "Ổn định mọi mặt đời sống xã hội, phát triển kinh tế.",
        "traloi4":  "Thúc đẩy sản xuất phát triển.",
        "dapAn":  "traloi3",
        "dapAnText":  "Ổn định mọi mặt đời sống xã hội, phát triển kinh tế."
    },
    {
        "stt":  209,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Tộc người là cộng đồng người được hình thành lâu dài trong lịch sử có đặc trưng cơ bản:",
        "traloi1":  "Cộng đồng về ngôn ngữ.",
        "traloi2":  "Cộng đồng về kinh tế.",
        "traloi3":  "Cộng đồng về văn hoá.",
        "traloi4":  "Ý thức tự giác tộc người.",
        "dapAn":  "traloi2",
        "dapAnText":  "Cộng đồng về kinh tế."
    },
    {
        "stt":  210,
        "cauHoi":  "Quyền bình đẳng giữa các dân tộc là cơ sở để:",
        "traloi1":  "Thực hiện quyền dân tộc thuộc địa và xây dựng mối quan hệ đoàn kết giữa các dân tộc thuộc địa.",
        "traloi2":  "Thực hiện quyền ngang nhau giữa các dân tộc thuộc địa và xây dựng mối quan hệ đoàn kết giữa các dân tộc thuộc địa.",
        "traloi3":  "Thực hiện quyền dân tộc tự quyết và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc.",
        "traloi4":  "Thực hiện quyền dân tộc tự do và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc.",
        "dapAn":  "traloi3",
        "dapAnText":  "Thực hiện quyền dân tộc tự quyết và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc."
    },
    {
        "stt":  211,
        "cauHoi":  "Chọn đáp án đúng nhất. Gia đình có vai trò quyết định đối với:",
        "traloi1":  "Cuộc sống cá nhân của tất cả các thành viên trong gia đình.",
        "traloi2":  "Giáo dục tư tưởng lối sống cho các thành viên trong gia đình.",
        "traloi3":  "Chính sách xã hội hoá giáo dục.",
        "traloi4":  "Sự tồn tại, vận động và phát triển của xã hội.",
        "dapAn":  "traloi4",
        "dapAnText":  "Sự tồn tại, vận động và phát triển của xã hội."
    },
    {
        "stt":  212,
        "cauHoi":  "Phát kiến vĩ đại nào của Ph. Ăngghen và C. Mác để khắc phục hạn chế của chủ nghĩa xã hội không tưởng?",
        "traloi1":  "Chủ nghĩa duy vật lịch sử.",
        "traloi2":  "Học thuyết về giá trị thặng dư.",
        "traloi3":  "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        "traloi4":  "Chủ nghĩa duy vật biện chứng.",
        "dapAn":  "traloi3",
        "dapAnText":  "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân."
    },
    {
        "stt":  213,
        "cauHoi":  "Tác phẩm nào của Ph.Ăngghen đã luận chứng sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học?",
        "traloi1":  "Gia đình thánh.",
        "traloi2":  "Hệ tư tưởng Đức.",
        "traloi3":  "Chống Đuyrinh.",
        "traloi4":  "Tuyên ngôn Đảng Cộng sản.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chống Đuyrinh."
    },
    {
        "stt":  214,
        "cauHoi":  "C.Mác và Ph.Ăngghen đã chỉ rõ: “bước thứ nhất trong cách mạng công nhân là […]”. Chọn đáp án đúng nhất điền vào chổ trống.",
        "traloi1":  "Giai cấp vô sản biến thành giai cấp thống trị là giành lấy dân chủ.",
        "traloi2":  "Giai cấp tư sản biến thành giai cấp bị thống trị là giành lấy dân chủ.",
        "traloi3":  "Giai cấp tư sản biến thành giai cấp bị lật đổ là giành lấy dân chủ.",
        "traloi4":  "Giai cấp công nhân thay thế giai cấp tư sản giành lấy chính quyền là giành lấy dân chủ.",
        "dapAn":  "traloi1",
        "dapAnText":  "Giai cấp vô sản biến thành giai cấp thống trị là giành lấy dân chủ."
    },
    {
        "stt":  215,
        "cauHoi":  "Quyền tự quyết dân tộc KHÔNG bao gồm:",
        "traloi1":  "Quyền phân lập thành quốc gia độc lập của các tộc người thiểu số trong một quốc gia đa tộc người.",
        "traloi2":  "Quyền các dân tộc tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
        "traloi3":  "Quyền tách ra thành lập một quốc gia dân tộc độc lập và quyền tự nguyện liên hiệp với dân tộc khác.",
        "traloi4":  "Quyền các dân tộc có quyền tự lựa chọn chế độ chính trị và con đường phát triển cho dân tộc mình.",
        "dapAn":  "traloi1",
        "dapAnText":  "Quyền phân lập thành quốc gia độc lập của các tộc người thiểu số trong một quốc gia đa tộc người."
    },
    {
        "stt":  216,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản trên lý thuyết có thể được thực hiện theo con đường nào?",
        "traloi1":  "Đấu tranh chính trị.",
        "traloi2":  "Đấu tranh chính trị và đấu tranh vũ trang.",
        "traloi3":  "Bạo lực vũ trang.",
        "traloi4":  "Nhân đạo, hoà bình.",
        "dapAn":  "traloi4",
        "dapAnText":  "Nhân đạo, hoà bình."
    },
    {
        "stt":  217,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa xã hội phải là xã hội:",
        "traloi1":  "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện.",
        "traloi2":  "Giải phóng giai cấp nông dân, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện cá nhân.",
        "traloi3":  "Giải phóng giai cấp công nhân, giải phóng dân tộc, giải phóng con người, tạo điều kiện để con người phát triển toàn diện giá trị bản thân.",
        "traloi4":  "Giải phóng giai cấp vô sản, giải phóng con người khỏi áp bức, bóc lột, bất công, tạo điều kiện để con người phát triển toàn diện giá trị tập thể.",
        "dapAn":  "traloi1",
        "dapAnText":  "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện."
    },
    {
        "stt":  218,
        "cauHoi":  "Nội dung nào là một trong những phương hướng cơ bản của chính sách dân số ở nước ta?",
        "traloi1":  "Tăng cường công tác lãnh đạo và quản lí đối với công tác dân số.",
        "traloi2":  "Tăng cường bộ máy Nhà nước đối với công tác dân số.",
        "traloi3":  "Tiếp tục giảm tốc độ gia tằn dân số.",
        "traloi4":  "Phân bố dân số hợp lí.",
        "dapAn":  "traloi1",
        "dapAnText":  "Tăng cường công tác lãnh đạo và quản lí đối với công tác dân số."
    },
    {
        "stt":  219,
        "cauHoi":  "Giai cấp công nhân Việt Nam ra đời vào thời gian nào? Chọn đáp án đúng nhất.",
        "traloi1":  "Trước giai cấp tư sản Pháp vào đầu thế kỷ XIX.",
        "traloi2":  "Trước giai cấp tư sản Việt Nam vào đầu thế kỷ XX.",
        "traloi3":  "Trước giai cấp tư sản Pháp vào đầu thế kỷ XX.",
        "traloi4":  "Trước giai cấp tư sản Việt Nam vào đầu thế kỷ XXI.",
        "dapAn":  "traloi2",
        "dapAnText":  "Trước giai cấp tư sản Việt Nam vào đầu thế kỷ XX."
    },
    {
        "stt":  220,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Cơ cấu xã hội – giai cấp của thời kỳ quá độ lên CNXH có những biến đổi mang tính qui luật là:",
        "traloi1":  "Bị qui định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH.",
        "traloi2":  "Biến đổi gắn liền với sự phát triển của cách mạng vô sản.",
        "traloi3":  "Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới.",
        "traloi4":  "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh.",
        "dapAn":  "traloi2",
        "dapAnText":  "Biến đổi gắn liền với sự phát triển của cách mạng vô sản."
    },
    {
        "stt":  221,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Nguồn gốc của tôn giáo:",
        "traloi1":  "Nguồn gốc địa lý, lịch sử hình thành con người.",
        "traloi2":  "Nguồn gốc tự nhiên, kinh tế – xã hội.",
        "traloi3":  "Nguồn gốc nhận thức.",
        "traloi4":  "Nguồn gốc tâm lý.",
        "dapAn":  "traloi1",
        "dapAnText":  "Nguồn gốc địa lý, lịch sử hình thành con người."
    },
    {
        "stt":  222,
        "cauHoi":  "Chọn đáp án đúng nhất. Theo chủ nghĩa Mác – Lênin bản chất của tôn giáo là:",
        "traloi1":  "Một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan.",
        "traloi2":  "Phản ánh hư ảo của những lực lượng bên ngoài chi phối cuộc sống hàng ngày của con người.",
        "traloi3":  "Một hiện tượng xã hội – văn hoá do con người sáng tạo ra, phản ánh ước mơ, suy nghĩ của họ.",
        "traloi4":  "Một thực thể xã hội với các tiêu chí cơ bản: có niềm tin sâu sắc vào đấng siêu nhiên, thần linh.",
        "dapAn":  "traloi3",
        "dapAnText":  "Một hiện tượng xã hội – văn hoá do con người sáng tạo ra, phản ánh ước mơ, suy nghĩ của họ."
    },
    {
        "stt":  223,
        "cauHoi":  "Hiện nay ở Việt Nam, để đảm bảo lợi ích của gia đình và sự phát triển bền vững của xã hội, thông điệp trong kế hoạch hoá gia đình là:",
        "traloi1":  "Nên có từ 1 đến 2 con.",
        "traloi2":  "Nên sinh đủ 2 con.",
        "traloi3":  "Nên sinh 1 con.",
        "traloi4":  "Nên sinh 1 trai, 1 gái.",
        "dapAn":  "traloi2",
        "dapAnText":  "Nên sinh đủ 2 con."
    },
    {
        "stt":  224,
        "cauHoi":  "Trong cơ cấu xã hội – giai cấp, giai cấp hay tầng lớp nào giữ vai trò chủ đạo, tiên phong trong quá trình công nghiệp hoá, hiện đại hoá?",
        "traloi1":  "Giai cấp tư bản.",
        "traloi2":  "Tầng lớp trí thức mới.",
        "traloi3":  "Đảng Cộng sản.",
        "traloi4":  "Giai cấp công nhân.",
        "dapAn":  "traloi4",
        "dapAnText":  "Giai cấp công nhân."
    },
    {
        "stt":  225,
        "cauHoi":  "Tác phẩm chủ yếu và cơ bản trình bày chủ nghĩa xã hội khoa học là:",
        "traloi1":  "Chống Đuyrinh – Ph.Ăngghen.",
        "traloi2":  "Làm gì? - V.I.Lênin.",
        "traloi3":  "Bộ Tư bản – C.Mác.",
        "traloi4":  "Tình cảnh nước Anh – Ph.Ăngghen.",
        "dapAn":  "traloi3",
        "dapAnText":  "Bộ Tư bản – C.Mác."
    },
    {
        "stt":  226,
        "cauHoi":  "Mục tiêu phân bố dân cư hợp lí của chính sách dân số nước ta để:",
        "traloi1":  "Giảm sự chênh lệch lao động giữa các vùng.",
        "traloi2":  "Khai thác tiềm năng và phát huy thế mạnh của từng vùng, miền.",
        "traloi3":  "Hạn chế tập trung đông dân cư vào đô thị lớn.",
        "traloi4":  "Giảm lao động thừa ở thành thị.",
        "dapAn":  "traloi2",
        "dapAnText":  "Khai thác tiềm năng và phát huy thế mạnh của từng vùng, miền."
    },
    {
        "stt":  227,
        "cauHoi":  "Sự chuyển đổi trong cơ cấu kinh tế thị trường dẫn đến biến đổi trong cơ cấu xã hội – giai cấp, hình thành cơ cấu xã hội – giai cấp đa dạng hơn ở Việt Nam được bắt đầu từ thời điểm nào?",
        "traloi1":  "Sau cách mạng tháng Tám năm 1945.",
        "traloi2":  "Sau cách mạng thống nhất đất nước năm 1975.",
        "traloi3":  "Từ Đại hội VI của Đảng năm 1986.",
        "traloi4":  "Từ Đại hội VII của Đảng năm 1991.",
        "dapAn":  "traloi3",
        "dapAnText":  "Từ Đại hội VI của Đảng năm 1986."
    },
    {
        "stt":  228,
        "cauHoi":  "Công cụ để xoá bỏ những lệ cũ, lạc hậu, đè nặng lên vai người phụ nữ đồng thời thực hiện giải phóng phụ nũ và bảo vệ hạnh phúc gia đình trong thời kỳ quá độ lên CNXH là gì?",
        "traloi1":  "Luật pháp nghiêm minh.",
        "traloi2":  "Nhà nước pháp quyền.",
        "traloi3":  "Hội liên hiệp phụ nữ.",
        "traloi4":  "Đạo đức XHCN.",
        "dapAn":  "traloi2",
        "dapAnText":  "Nhà nước pháp quyền."
    },
    {
        "stt":  229,
        "cauHoi":  "Loại hình nào của cơ cấu xã hội có vị trí quan trọng nhất?",
        "traloi1":  "Cơ cấu xã hội – giai cấp.",
        "traloi2":  "Cơ cấu xã hội – dân cư.",
        "traloi3":  "Cơ cấu xã hội – dân tộc.",
        "traloi4":  "Cơ cấu xã hội – tôn giáo.",
        "dapAn":  "traloi1",
        "dapAnText":  "Cơ cấu xã hội – giai cấp."
    },
    {
        "stt":  230,
        "cauHoi":  "Sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay là:",
        "traloi1":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp vô sản với nhà nước phong kiến, thiết lập nhà nước XHCN, thực hiện tiến bộ và công bằng, dân chủ xã hội.",
        "traloi2":  "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp công nhân với giai cấp tư sản, phấn đấu cho việc xác lập một trật tự xã hội mới công bằng và bình đẳng.",
        "traloi3":  "Lực lượng đi đầu trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước vì mục tiêu dân giàu nước, nước mạnh, dân chủ, công bằng, văn minh.",
        "traloi4":  "Thực hiện cuộc cách mạng của đại đa số mưu lợi ích cho tuyệt đại đa số, nhờ việc hướng tới xây dựng một xã hội mới dựa trên công hữu những tư liệu sản xuất chủ yếu của xã hội.",
        "dapAn":  "traloi3",
        "dapAnText":  "Lực lượng đi đầu trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước vì mục tiêu dân giàu nước, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        "stt":  231,
        "cauHoi":  "Yếu tố quyết định mối quan hệ hợp tác và gắn bó chặt chẽ với nhau trong cơ cấu xã hội – giai cấp của thời kì quá độ lên CNXH là:",
        "traloi1":  "Chung sức xây dựng xã hội mới, xã hội XHCN.",
        "traloi2":  "Chung sức xây dựng xã hội mới, loại bỏ những thói hư tật xấu của xã hội cũ để lại.",
        "traloi3":  "Chung sức cải tạo xã hội cũ, xây dựng xã hội mới trên mọi lĩnh vực.",
        "traloi4":  "Đoàn kết, nhất trí trong xây dựng xã hội XHCN công bằng, giàu mạnh.",
        "dapAn":  "traloi3",
        "dapAnText":  "Chung sức cải tạo xã hội cũ, xây dựng xã hội mới trên mọi lĩnh vực."
    },
    {
        "stt":  232,
        "cauHoi":  "Trên lĩnh vực tư tưởng và văn hóa, thời kì quá độ ở nước ta có đặc điểm gì?",
        "traloi1":  "Nền văn háo tiến bộ, đậm đà bản sắc dân tộc.",
        "traloi2":  "Quá trình hội nhập với văn hóa thế giới diên ra mạnh mẽ.",
        "traloi3":  "Còn tồn tại nhiều loại, nhiều khuynh hướng tư tưởng, văn hóa khác nhau.",
        "traloi4":  "Các giá trị văn hóa truyền thống được giữ gìn, phát huy.",
        "dapAn":  "traloi3",
        "dapAnText":  "Còn tồn tại nhiều loại, nhiều khuynh hướng tư tưởng, văn hóa khác nhau."
    },
    {
        "stt":  233,
        "cauHoi":  "Bản chất dân chủ XHCN ở Việt Nam được thực hiện thông qua hình thức:",
        "traloi1":  "Dân chủ gián tiếp, dân chủ đại diện.",
        "traloi2":  "Dân chủ gián tiếp, dân chủ trực tiếp.",
        "traloi3":  "Dân chủ trực tiếp.",
        "traloi4":  "Dân chủ uỷ quyền.",
        "dapAn":  "traloi2",
        "dapAnText":  "Dân chủ gián tiếp, dân chủ trực tiếp."
    },
    {
        "stt":  234,
        "cauHoi":  "Giai cấp công nhân muốn thực hiện cuộc cách mạng triệt để phải thông qua đội tiên phong là:",
        "traloi1":  "Đảng Cộng sản Bônsevich.",
        "traloi2":  "Đảng Cộng sản Việt Nam.",
        "traloi3":  "Quốc tế Cộng sản.",
        "traloi4":  "Đảng Cộng sản.",
        "dapAn":  "traloi4",
        "dapAnText":  "Đảng Cộng sản."
    },
    {
        "stt":  235,
        "cauHoi":  "Theo Mác và Ăngghen giai cấp công nhân đại biểu cho, chọn phương án đúng nhất:",
        "traloi1":  "Phương thức sản xuất hiện đại.",
        "traloi2":  "Ý chí đấu tranh của giai cấp vô sản.",
        "traloi3":  "Lực lượng, phương thức sản xuất tiên tiến, quyết định sự tồn tại và phát triển của xã hội hiện đại.",
        "traloi4":  "Tinh thần cách mạng triệt để.",
        "dapAn":  "traloi3",
        "dapAnText":  "Lực lượng, phương thức sản xuất tiên tiến, quyết định sự tồn tại và phát triển của xã hội hiện đại."
    },
    {
        "stt":  236,
        "cauHoi":  "“Chế độ dân chủ vô sản so với bất kỳ chế độ dân chủ tư sản nào cũng dân chủ hơn gấp triệu lần..” là phát biểu của ai?",
        "traloi1":  "C. Mác.",
        "traloi2":  "V.I.Lênin.",
        "traloi3":  "Ph.Ăngghen.",
        "traloi4":  "Hồ Chí Minh.",
        "dapAn":  "traloi2",
        "dapAnText":  "V.I.Lênin."
    },
    {
        "stt":  237,
        "cauHoi":  "Đảng ta đề ra bao nhiêu phương hướng cơ bản để xây dựng cơ cấu xã hội – giai cấp và tăng cường khối liên minh giai cấp, tầng lớp trong xã hội Việt Nam?",
        "traloi1":  "Bốn phương hướng.",
        "traloi2":  "Năm phương hướng.",
        "traloi3":  "Sáu phương hướng.",
        "traloi4":  "Tám phương hướng.",
        "dapAn":  "traloi2",
        "dapAnText":  "Năm phương hướng."
    },
    {
        "stt":  238,
        "cauHoi":  "Những yếu tố tư tưởng XHCN được xuất hiện từ khi nào?",
        "traloi1":  "Chế độ tư bản chủ nghĩa ra đời.",
        "traloi2":  "Sự xuất hiện chế độ tư hữu, xuất hiện giai cấp thống trị và bóc lột.",
        "traloi3":  "Sự xuất hiện giai cấp công nhân.",
        "traloi4":  "Thời cộng sản nguyên thủy.",
        "dapAn":  "traloi2",
        "dapAnText":  "Sự xuất hiện chế độ tư hữu, xuất hiện giai cấp thống trị và bóc lột."
    },
    {
        "stt":  239,
        "cauHoi":  "Để thực hiện được quyền bình đẳng dân tộc, trước hết:",
        "traloi1":  "Phải thủ tiêu giai cấp tư sản.",
        "traloi2":  "Phải thủ tiêu tình trạng áp bức giai cấp.",
        "traloi3":  "Phải thủ tiêu nhà nước tư sản.",
        "traloi4":  "Phải thủ tiêu bất bình đẳng giữa các dân tộc.",
        "dapAn":  "traloi2",
        "dapAnText":  "Phải thủ tiêu tình trạng áp bức giai cấp."
    },
    {
        "stt":  240,
        "cauHoi":  "Chủ nghĩa xã hội mà nước ta đang xây dựng là một xã hội phát triển:",
        "traloi1":  "Ưu việt hơn các xã hội trước.",
        "traloi2":  "Lợi thế hơn các xã hội trước.",
        "traloi3":  "Nhanh chóng.",
        "traloi4":  "Tự do.",
        "dapAn":  "traloi1",
        "dapAnText":  "Ưu việt hơn các xã hội trước."
    },
    {
        "stt":  241,
        "cauHoi":  "Sứ mệnh lịch sử của giai cấp công nhân xuất phát từ tiền đề kinh tế – xã hội với biểu hiện nổi bật:",
        "traloi1":  "Xã hội hoá sản xuất làm xuất hiện những tiền đề vật chất, thúc đẩy sự phát triển của xã hội, thúc đẩy sự vận động của mâu thuẫn cơ bản trong lòng phương thức sản xuất TBCN.",
        "traloi2":  "Xã hội hoá sản xuất làm thúc đẩy mâu thuẫn giữa LLSX với tính chất chiếm hữu tư nhân TBCN về tư liệu sản xuất và sản sinh ra giai cấp công nhân, rèn luyện nó thành chủ thể để giải quyết mâu thuẫn.",
        "traloi3":  "Giải quyết mâu thuẫn cơ bản về kinh tế và chính trị trong lòng phương thức sản xuất TBCN, đó là tính quy định khách quan, yêu cầu khách quan của sự vận động, phát triển của lịch sử từ TBCN lên CNXH.",
        "traloi4":  "Thực hiện cuộc cách mạng của đại đa số mưu lợi ích cho tuyệt đại đa số, nhờ việc hướng tới xây dựng một xã hội mới dựa trên công hữu những tư liệu sản xuất chủ yếu của xã hội.",
        "dapAn":  "traloi2",
        "dapAnText":  "Xã hội hoá sản xuất làm thúc đẩy mâu thuẫn giữa LLSX với tính chất chiếm hữu tư nhân TBCN về tư liệu sản xuất và sản sinh ra giai cấp công nhân, rèn luyện nó thành chủ thể để giải quyết mâu thuẫn."
    },
    {
        "stt":  242,
        "cauHoi":  "Dựa trên cơ sở tổng kết kinh nghiệm cuộc cách mạng trong giai đoạn nào của giai cấp công nhân, Ph.Ăngghen và C.Mác tiếp tục phát triển nội dung của chủ nghĩa xã hội khoa học?",
        "traloi1":  "Từ năm 1948 đến 1952.",
        "traloi2":  "Từ năm 1748 đến 1752.",
        "traloi3":  "Từ năm 1850 đến 1852.",
        "traloi4":  "Từ năm 1848 đến 1852.",
        "dapAn":  "traloi4",
        "dapAnText":  "Từ năm 1848 đến 1852."
    },
    {
        "stt":  243,
        "cauHoi":  "“Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong thực thi các quyền lập pháp, hành pháp, tư pháp” là quan điểm của:",
        "traloi1":  "Đại hội Đảng toàn quốc lần thứ IX.",
        "traloi2":  "Đại hội Đảng toàn quốc lần thứ X.",
        "traloi3":  "Đại hội Đảng toàn quốc lần thứ XI.",
        "traloi4":  "Đại hội Đảng toàn quốc lần thứ XII.",
        "dapAn":  "traloi4",
        "dapAnText":  "Đại hội Đảng toàn quốc lần thứ XII."
    },
    {
        "stt":  244,
        "cauHoi":  "Thuật ngữ “dân chủ” ra đời vào khoảng thời gian nào?",
        "traloi1":  "Thế kỷ thứ VII – VI trước công nguyên.",
        "traloi2":  "Thế kỷ thứ VII – VI sau công nguyên.",
        "traloi3":  "Thế kỷ thứ V – IV trước công nguyên.",
        "traloi4":  "Thế kỷ thứ V – IV sau công nguyên.",
        "dapAn":  "traloi1",
        "dapAnText":  "Thế kỷ thứ VII – VI trước công nguyên."
    },
    {
        "stt":  245,
        "cauHoi":  "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản trên thực tế được thực hiện theo con đường nào?",
        "traloi1":  "Đấu tranh chính trị.",
        "traloi2":  "Đấu tranh chính trị và đấu tranh vũ trang.",
        "traloi3":  "Bạo lực vũ trang.",
        "traloi4":  "Nhân đạo, hoà bình.",
        "dapAn":  "traloi3",
        "dapAnText":  "Bạo lực vũ trang."
    },
    {
        "stt":  246,
        "cauHoi":  "Giai cấp công nhân Việt Nam bao gồm lực lượng nào? Chọn phương án đúng nhất.",
        "traloi1":  "Lao động chân tay và trí óc, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        "traloi2":  "Lao động giản đơn và trừu tượng, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        "traloi3":  "Lao động phức tạp và giản đơn, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        "traloi4":  "Lao động trí thức và giản đơn, làm công hưởng lương trong các loại hình sản xuất, kinh doanh, dịch vụ có tính chất công nghiệp.",
        "dapAn":  "traloi1",
        "dapAnText":  "Lao động chân tay và trí óc, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp."
    },
    {
        "stt":  247,
        "cauHoi":  "Chọn đáp án KHÔNG đúng. Dân tộc Việt Nam hiện nay có đặc điểm nổi bật:",
        "traloi1":  "Các dân tộc ở Việt Nam có trình độ phát triển không đều.",
        "traloi2":  "Các dân tộc Việt Nam có truyền thống đoàn kết gắn bó lâu đời trong cộng đồng dân tộc – quốc gia thống nhất.",
        "traloi3":  "Các dân tộc cư trú theo từng vùng lãnh thổ riêng biệt, dân tộc thiểu số sống chủ yếu ở vùng đồi núi.",
        "traloi4":  "Mỗi dân tộc có bản sắc văn hoá riêng, góp phần tạo nên sự phong phú đa dạng của nền văn hoá Việt Nam thống nhất.",
        "dapAn":  "traloi3",
        "dapAnText":  "Các dân tộc cư trú theo từng vùng lãnh thổ riêng biệt, dân tộc thiểu số sống chủ yếu ở vùng đồi núi."
    },
    {
        "stt":  248,
        "cauHoi":  "Điền vào chổ trống. “Bên cạnh những dấu vết của xã hội cũ, xuất hiện những yếu tố của xã hội mới, do vậy tất yếu sẽ diễn ra sự tồn tại […] giữa những giai cấp, tầng lớp cũ và mới”.",
        "traloi1":  "Song song.",
        "traloi2":  "Đan xen.",
        "traloi3":  "Kết hợp.",
        "traloi4":  "Thay thế.",
        "dapAn":  "traloi2",
        "dapAnText":  "Đan xen."
    },
    {
        "stt":  249,
        "cauHoi":  "Điểm tương đồng giữa giai cấp công nhân hiện nay và giai cấp công nhân truyền thống ở thế kỷ XIX, chọn đáp án đúng nhất:",
        "traloi1":  "Đều là LLSX hiện đại, chủ thể của sử dụng máy móc trong sản xuất.",
        "traloi2":  "Đều là LLSX hàng đầu của xã hội đại diện cho máy móc, phương thức sản xuất tiên tiến.",
        "traloi3":  "Đều là LLSX hàng đầu, bị giai cấp tư sản bóc lột, luôn là lực lượng đi đầu trong đấu tranh vì hoà bình, hợp tác và phát triển, dân chủ, tiến bộ XHCN.",
        "traloi4":  "Đều là đại diện đi đầu cho các phong trào đấu tranh vì hoà bình, hợp tác và phát triển, vì dân sinh, dân chủ, tiến bộ xã hội và chủ nghĩa xã hội.",
        "dapAn":  "traloi3",
        "dapAnText":  "Đều là LLSX hàng đầu, bị giai cấp tư sản bóc lột, luôn là lực lượng đi đầu trong đấu tranh vì hoà bình, hợp tác và phát triển, dân chủ, tiến bộ XHCN."
    },
    {
        "stt":  250,
        "cauHoi":  "Xu hướng biến đổi cơ cấu kinh tế ở mỗi quốc gia khi bắt đầu thời kỳ quá độ diễn ra khác nhau là bởi vì:",
        "traloi1":  "Do qui định bởi sự khác biệt về trình độ phát triển kinh tế, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        "traloi2":  "Do qui định bởi sự khác biệt về trình độ phát triển xã hội, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        "traloi3":  "Do qui định bởi sự khác biệt về trình độ phát triển lực lượng sản xuất, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        "traloi4":  "Do qui định bởi sự khác biệt về trình độ phát triển phương thức sản xuất, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        "dapAn":  "traloi2",
        "dapAnText":  "Do qui định bởi sự khác biệt về trình độ phát triển xã hội, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước."
    }
];

if (typeof window !== "undefined") {
  window.questions = questions;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}