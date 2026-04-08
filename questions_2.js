// Data extracted from Trống-17.docx
// Total questions: 108
const questions = [
    {
        "stt": 1,
        "cauHoi": "Câu 1. Trong mô hình của Trompenaars, chiều văn hóa nào tập trung vào định hướng cảm xúc trong các mối quan hệ?",
        "traloi1": "Quan hệ trung tính và quan hệ xúc cảm",
        "traloi2": "Tình huống nội và tình huống ngoại",
        "traloi3": "Quan hệ cụ thể và khuếch tán",
        "traloi4": "Định hướng bên trong và bên ngoài",
        "dapAn": "traloi1",
        "dapAnText": "Quan hệ trung tính và quan hệ xúc cảm"
    },
    {
        "stt": 2,
        "cauHoi": "Câu 2. Một nhà quản trị áp dụng cách làm ở nước mình sang thị trường mới nhưng thất bại. Nguyên nhân chính là:",
        "traloi1": "Khác biệt văn hóa",
        "traloi2": "Thiếu nhân lực",
        "traloi3": "Thiếu công nghệ",
        "traloi4": "Thiếu vốn",
        "dapAn": "traloi1",
        "dapAnText": "Khác biệt văn hóa"
    },
    {
        "stt": 3,
        "cauHoi": "Câu 3. Một doanh nghiệp thiết lập hàng loạt chính sách dự phòng để ứng phó với mọi kịch bản khủng hoảng có thể xảy ra, là biểu hiện của tính tránh sự không chắc chắn.......",
        "traloi1": "Thấp",
        "traloi2": "Cao",
        "traloi3": "",
        "traloi4": "",
        "dapAn": "traloi2",
        "dapAnText": "Cao"
    },
    {
        "stt": 4,
        "cauHoi": "Câu 4. Một Startup tập trung vào sáng tạo cá nhân, ít cấu trúc, nhân viên làm việc vì đam mê. Đây là mô hình tổ chức nào?",
        "traloi1": "Vườn ươm",
        "traloi2": "Tháp Eiffel",
        "traloi3": "Tên lửa",
        "traloi4": "Gia đình",
        "dapAn": "traloi1",
        "dapAnText": "Vườn ươm"
    },
    {
        "stt": 5,
        "cauHoi": "Câu 5. Văn hóa trung lập thường:",
        "traloi1": "Che giấu cảm xúc",
        "traloi2": "Thể hiện cảm xúc mạnh",
        "traloi3": "Bộc phát cảm xúc",
        "traloi4": "Ưa tranh luận",
        "dapAn": "traloi1",
        "dapAnText": "Che giấu cảm xúc"
    },
    {
        "stt": 6,
        "cauHoi": "Câu 6. Trong mô hình văn hóa “lò ấp”, đặc điểm nổi bật của mối quan hệ giữa các thành viên là gì?",
        "traloi1": "Mối quan hệ theo chức danh và nhiệm vụ",
        "traloi2": "Mối quan hệ tự do, ít phân cấp",
        "traloi3": "Mối quan hệ dựa trên tình cảm cá nhân",
        "traloi4": "Mối quan hệ theo cấp bậc",
        "dapAn": "traloi2",
        "dapAnText": "Mối quan hệ tự do, ít phân cấp"
    },
    {
        "stt": 7,
        "cauHoi": "Câu 7. Một nhà quản trị đánh giá hành vi văn hóa khác là “sai”. Quan điểm đúng là:",
        "traloi1": "Văn hóa mạnh yếu",
        "traloi2": "Văn hóa tốt xấu",
        "traloi3": "Không có đúng sai, chỉ có khác biệt",
        "traloi4": "Có đúng sai",
        "dapAn": "traloi3",
        "dapAnText": "Không có đúng sai, chỉ có khác biệt"
    },
    {
        "stt": 8,
        "cauHoi": "Câu 8. Về nhu cầu, các nền văn hóa phương Đông thường chú trọng nhiều hơn vào……..",
        "traloi1": "Nhu cầu quyền lực",
        "traloi2": "Nhu cầu vật chất",
        "traloi3": "Nhu cầu xã hội",
        "traloi4": "Nhu cầu cá nhân",
        "dapAn": "traloi3",
        "dapAnText": "Nhu cầu xã hội"
    },
    {
        "stt": 9,
        "cauHoi": "Câu 9. Theo Hofstede, các xã hội chấp nhận mối quan hệ cấp bậc giữa cấp trên và cấp dưới sẽ có chỉ số…………cao",
        "traloi1": "Chủ nghĩa cá nhân",
        "traloi2": "Tránh sự không chắc chắn",
        "traloi3": "Khoảng cách quyền lực",
        "traloi4": "Chủ nghĩa phổ biến",
        "dapAn": "traloi3",
        "dapAnText": "Khoảng cách quyền lực"
    },
    {
        "stt": 10,
        "cauHoi": "Câu 10. Một nhân viên thường xuyên giao lưu với đồng nghiệp ngoài giờ để xây dựng quan hệ.",
        "traloi1": "Khuếch tán",
        "traloi2": "Cụ thể",
        "traloi3": "Phổ quát",
        "traloi4": "Né tránh bất trắc",
        "dapAn": "traloi1",
        "dapAnText": "Khuếch tán"
    },
    {
        "stt": 11,
        "cauHoi": "Câu 11. Khác biệt văn hóa ảnh hưởng đến quản trị qua yếu tố nào?",
        "traloi1": "Luật",
        "traloi2": "Giá trị, niềm tin, hành vi",
        "traloi3": "Công nghệ",
        "traloi4": "Tài chính",
        "dapAn": "traloi2",
        "dapAnText": "Giá trị, niềm tin, hành vi"
    },
    {
        "stt": 12,
        "cauHoi": "Câu 12. Tom có hẹn với Carlos tại văn phòng của mình trong nửa tiếng nữa. Tuy nhiên, Tom quyết định làm một vài việc cá nhân trên đường tới văn phòng trước nên đã báo lại với Carlos. Tom đã không đến theo đúng hẹn, Carlos có thể đoán Tom thuộc văn hóa………",
        "traloi1": "Định hướng dài hạn",
        "traloi2": "Đồng bộ",
        "traloi3": "Định hướng ngắn hạn",
        "traloi4": "Tuần tự",
        "dapAn": "traloi2",
        "dapAnText": ""
    },
    {
        "stt": 13,
        "cauHoi": "Câu 13. Yếu tố nào sau đây KHÔNG phải là lý do khiến nhân tố văn hóa trở thành nhân tố quan trọng nhất đối với môi trường kinh doanh?",
        "traloi1": "Văn hóa ảnh hưởng đến chiến lược quản trị quốc tế",
        "traloi2": "Văn hóa ảnh hưởng đến hành vi tổ chức",
        "traloi3": "Văn hóa là hệ quả của đặc trưng kinh tế, chính trị và luật pháp của 1 quốc gia",
        "traloi4": "Văn hóa quyết định cách tiếp cận trong giao tiếp và đàm phán quốc tế",
        "dapAn": "traloi3",
        "dapAnText": "Văn hóa là hệ quả của đặc trưng kinh tế, chính trị và luật pháp của 1 quốc gia"
    },
    {
        "stt": 14,
        "cauHoi": "Câu 14. Điều gì sau đây xảy ra ở các nền văn hóa tiếp xúc xa?",
        "traloi1": "Giao tiếp thường rất cởi mở và thân mật",
        "traloi2": "Mọi người thường xuyên bắt tay và ôm hôn khi gặp mặt",
        "traloi3": "Thường sử dụng nhiều cử chỉ tay trong giao tiếp",
        "traloi4": "Mọi người giữ một khoảng cách nhất định khi chào nhau.",
        "dapAn": "traloi4",
        "dapAnText": "Mọi người giữ một khoảng cách nhất định khi chào nhau."
    },
    {
        "stt": 15,
        "cauHoi": "Câu 15. Nghiên cứu đa văn hóa trong việc áp dụng thuyết mục tiêu vào việc tạo động lực cho thấy, so với người Mỹ, người Israel có chỉ số về ……. và …… cao nên họ thường phản ứng tiêu cực với các mục tiêu mà họ bị áp đặt.",
        "traloi1": "Chủ nghĩa cá nhân, tránh sự không chắc chắn",
        "traloi2": "Chủ nghĩa tập thể, nam tính",
        "traloi3": "Chủ nghĩa tập thể, tránh sự không chắc chắn",
        "traloi4": "Chủ nghĩa cá nhân, nữ tính",
        "dapAn": "traloi3",
        "dapAnText": ""
    },
    {
        "stt": 16,
        "cauHoi": "Câu 16. Tất cả các chiều văn hóa sau đều được đề xuất bởi Trompenaars ngoại trừ…………",
        "traloi1": "Tính quyết đoán",
        "traloi2": "Phổ biến",
        "traloi3": "Cụ thể",
        "traloi4": "Thành tích",
        "dapAn": "traloi1",
        "dapAnText": "Tính quyết đoán"
    },
    {
        "stt": 17,
        "cauHoi": "Câu 17. Theo mô hình của Trompenaars, nếu bạn được sinh ra và lớn lên trong một xã hội có định hướng thành tích, địa vị xã hội của bạn sẽ được xác định dựa trên…………….",
        "traloi1": "Cả 3 phương án đều đúng",
        "traloi2": "Trình độ học vấn",
        "traloi3": "Mối quan hệ gia đình",
        "traloi4": "Thâm niên làm việc",
        "dapAn": "traloi2",
        "dapAnText": "Trình độ học vấn"
    },
    {
        "stt": 18,
        "cauHoi": "Câu 18. Alex thường xuyên chuyển việc để tìm kiếm trải nghiệm mới hoặc khám phá khả năng bản thân. Alex thuộc khía cạnh văn hóa nào?",
        "traloi1": "Tính nam tính cao",
        "traloi2": "Tránh sự không chắc chắn cao",
        "traloi3": "Tính nam tính thấp",
        "traloi4": "Tránh sự không chắc chắn thấp",
        "dapAn": "traloi2",
        "dapAnText": "Tránh sự không chắc chắn cao"
    },
    {
        "stt": 19,
        "cauHoi": "Câu 19. Sự khác biệt giữa người Mỹ và người Trung Quốc trong việc sử dụng các khoảng lặng khi giao tiếp là ví dụ về yếu tố nào trong giao tiếp?",
        "traloi1": "Cử chỉ hành vi",
        "traloi2": "Phi ngôn ngữ",
        "traloi3": "Ngữ điệu",
        "traloi4": "Cận ngôn ngữ",
        "dapAn": "traloi4",
        "dapAnText": "Cận ngôn ngữ"
    },
    {
        "stt": 20,
        "cauHoi": "Câu 20. Một người làm nhiều việc cùng lúc và linh hoạt thay đổi kế hoạch.",
        "traloi1": "Tuần tự",
        "traloi2": "Đồng bộ",
        "traloi3": "Nam tính",
        "traloi4": "Né tránh bất trắc",
        "dapAn": "traloi2",
        "dapAnText": "Đồng bộ"
    },
    {
        "stt": 21,
        "cauHoi": "Câu 21. Trong các cách tiếp cận với việc quản trị sự đa dạng về văn hóa, cách tiếp cận nào mặc dù đem lại nhiều lợi ích nhất nhưng lại ít phổ biến nhất?",
        "traloi1": "Cách tiếp cận thay đổi",
        "traloi2": "Cách tiếp cận địa phương",
        "traloi3": "Cách tiếp cận vị chủng",
        "traloi4": "Cách tiếp cận hợp lực",
        "dapAn": "traloi4",
        "dapAnText": "Cách tiếp cận hợp lực"
    },
    {
        "stt": 22,
        "cauHoi": "Câu 22. Một quốc gia kiểm soát chặt hành vi xã hội, hạn chế tự do cá nhân.",
        "traloi1": "Nữ tính",
        "traloi2": "Cá nhân",
        "traloi3": "Đam mê",
        "traloi4": "Kiềm chế",
        "dapAn": "traloi4",
        "dapAnText": "Kiềm chế"
    },
    {
        "stt": 23,
        "cauHoi": "Câu 23. Trong mô hình của Hofstede, các quốc gia không quá coi trọng chủ nghĩa quốc gia, việc biểu tình được khoan nhượng và việc chuyển đổi việc làm diễn ra thường xuyên là các quốc gia có chỉ số……….thấp.",
        "traloi1": "Chủ nghĩa tập thể",
        "traloi2": "Tránh sự không chắc chắn",
        "traloi3": "Khoảng cách quyền lực",
        "traloi4": "Tính nam tính",
        "dapAn": "traloi2",
        "dapAnText": "Tránh sự không chắc chắn"
    },
    {
        "stt": 24,
        "cauHoi": "Câu 24. ……….có thể được định nghĩa là tập hợp các cấu trúc tri thức, bao gồm các hệ thống giá trị, chuẩn mực, thái độ và giả định hành vi được chia sẻ bởi các thành viên của một nhóm xã hội.",
        "traloi1": "Tổ chức",
        "traloi2": "Tâm lý học",
        "traloi3": "Văn hóa",
        "traloi4": "Xã hội",
        "dapAn": "traloi3",
        "dapAnText": "Văn hóa"
    },
    {
        "stt": 25,
        "cauHoi": "Câu 25. Một nhóm đa văn hóa gặp khó khăn vì các thành viên thiếu tin tưởng nhau. Nguyên nhân phổ biến là:",
        "traloi1": "Định kiến văn hóa",
        "traloi2": "Thiếu kỹ năng",
        "traloi3": "Thiếu tài chính",
        "traloi4": "Thiếu giao tiếp",
        "dapAn": "traloi1",
        "dapAnText": "Định kiến văn hóa"
    },
    {
        "stt": 26,
        "cauHoi": "Câu 26. Một công ty coi lãnh đạo như cha mẹ, nhân viên trung thành và phụ thuộc. Đây là mô hình văn hóa nào?",
        "traloi1": "Nhiệm vụ",
        "traloi2": "Tháp Eiffel",
        "traloi3": "Cá nhân",
        "traloi4": "Gia đình",
        "dapAn": "traloi4",
        "dapAnText": "Gia đình"
    },
    {
        "stt": 27,
        "cauHoi": "Câu 27. Công ty sử dụng cách tiếp cận ............ sử dụng các quản lý địa phương cho các vị trí chủ chốt của công ty con ở nước ngoài và cho phép họ tự lựa chọn và phát triển nhân sự của riêng họ.",
        "traloi1": "Vị chủng",
        "traloi2": "Đa khu vực",
        "traloi3": "Toàn cầu",
        "traloi4": "Đa cực",
        "dapAn": "traloi4",
        "dapAnText": "Đa cực"
    },
    {
        "stt": 28,
        "cauHoi": "Câu 28. Một người từ bỏ nhóm làm việc vì không phù hợp với mục tiêu cá nhân.",
        "traloi1": "Né tránh bất trắc",
        "traloi2": "Chủ nghĩa tập thể",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Văn hóa nam tính",
        "dapAn": "traloi3",
        "dapAnText": "Chủ nghĩa cá nhân"
    },
    {
        "stt": 29,
        "cauHoi": "Câu 29. Trong mô hình văn hóa tổ chức “gia đình”, quyền lực chủ yếu nằm ở đâu?",
        "traloi1": "Ở người lãnh đạo như người cha trong gia đình",
        "traloi2": "Phân tán đều cho các nhóm",
        "traloi3": "Trong các quy trình kỹ thuật",
        "traloi4": "Trong cấu trúc chính thức của tổ chức",
        "dapAn": "traloi1",
        "dapAnText": "Ở người lãnh đạo như người cha trong gia đình"
    },
    {
        "stt": 30,
        "cauHoi": "Câu 30. Chiến lược bỏ qua khác biệt văn hóa thường ở:",
        "traloi1": "Startup quốc tế",
        "traloi2": "MNC lớn",
        "traloi3": "Công ty toàn cầu",
        "traloi4": "Công ty nhỏ nội địa",
        "dapAn": "traloi1",
        "dapAnText": "Startup quốc tế"
    },
    {
        "stt": 31,
        "cauHoi": "Câu 31. Khi đánh giá nhân viên, quản lý cân nhắc cả hoàn cảnh gia đình và quan hệ xã hội chứ không chỉ hiệu suất công việc.",
        "traloi1": "Văn hóa cụ thể",
        "traloi2": "Văn hóa trung lập",
        "traloi3": "Văn hóa khuếch tán",
        "traloi4": "Văn hóa cảm xúc",
        "dapAn": "traloi4",
        "dapAnText": "Văn hóa cảm xúc"
    },
    {
        "stt": 32,
        "cauHoi": "Câu 32. Chủ nghĩa cá nhân đề cao:",
        "traloi1": "Gia đình lớn",
        "traloi2": "Tập thể",
        "traloi3": "Cộng đồng",
        "traloi4": "Quyền lợi cá nhân",
        "dapAn": "traloi4",
        "dapAnText": "Quyền lợi cá nhân"
    },
    {
        "stt": 33,
        "cauHoi": "Câu 33. Một quản lý linh hoạt xử lý lỗi tùy hoàn cảnh nhân viên.",
        "traloi1": "Tính đặc thù",
        "traloi2": "Tính phổ quát",
        "traloi3": "Né tránh bất trắc",
        "traloi4": "Nam tính",
        "dapAn": "traloi1",
        "dapAnText": "Tính đặc thù"
    },
    {
        "stt": 34,
        "cauHoi": "Câu 34. Một người được trọng dụng vì tuổi tác và địa vị xã hội.",
        "traloi1": "Thành tựu",
        "traloi2": "Quy gán",
        "traloi3": "Cá nhân",
        "traloi4": "Phổ quát",
        "dapAn": "traloi2",
        "dapAnText": "Quy gán"
    },
    {
        "stt": 35,
        "cauHoi": "Câu 35. Một nhân viên luôn tuân thủ tuyệt đối mệnh lệnh cấp trên, không phản biện dù thấy sai.",
        "traloi1": "Khoảng cách quyền lực cao",
        "traloi2": "Né tránh bất trắc thấp",
        "traloi3": "Văn hóa nữ tính",
        "traloi4": "Chủ nghĩa cá nhân",
        "dapAn": "traloi1",
        "dapAnText": "Khoảng cách quyền lực cao"
    },
    {
        "stt": 36,
        "cauHoi": "Câu 36. Các nghiên cứu cho thấy phong cách giao tiếp có mối liên hệ tương quan với các chiều văn hóa như thế nào?",
        "traloi1": "Văn hóa cụ thể và phi tập thể",
        "traloi2": "Tính nữ tính, khoảng cách quyền lực thấp.",
        "traloi3": "Khoảng cách quyền lực cao, tính tập thể, văn hóa phụ thuộc nhiều vào ngữ cảnh.",
        "traloi4": "Tính cá nhân, nam tính và định hướng dài hạn",
        "dapAn": "traloi3",
        "dapAnText": "Khoảng cách quyền lực cao, tính tập thể, văn hóa phụ thuộc nhiều vào ngữ cảnh."
    },
    {
        "stt": 37,
        "cauHoi": "Câu 37. Trong một gia đình, mọi quyết định đều dựa vào lợi ích chung của cả họ tộc.",
        "traloi1": "Khoảng cách quyền lực thấp",
        "traloi2": "Văn hóa nữ tính",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Chủ nghĩa tập thể",
        "dapAn": "traloi4",
        "dapAnText": "Chủ nghĩa tập thể"
    },
    {
        "stt": 38,
        "cauHoi": "Câu 38. Xã hội định hướng ngắn hạn thường:",
        "traloi1": "Quan tâm kết quả trước mắt",
        "traloi2": "Kiên trì",
        "traloi3": "Đầu tư dài hạn",
        "traloi4": "Tiết kiệm",
        "dapAn": "traloi1",
        "dapAnText": "Quan tâm kết quả trước mắt"
    },
    {
        "stt": 39,
        "cauHoi": "Câu 39. ………….là thuật ngữ được sử dụng bởi Hofstede để mô tả “tình huống mà giá trị chi phối trong xã hội là sự quan tâm tới những người khác và chất lượng cuộc sống”?",
        "traloi1": "Tính nam tính",
        "traloi2": "Tính cá nhân",
        "traloi3": "Tính nữ tính",
        "traloi4": "Tính tập thể",
        "dapAn": "traloi3",
        "dapAnText": "Tính nữ tính"
    },
    {
        "stt": 40,
        "cauHoi": "Câu 40. Chiến lược quản trị khác biệt văn hóa hướng tới:",
        "traloi1": "Tăng kiểm soát",
        "traloi2": "Loại bỏ khác biệt",
        "traloi3": "Giảm chi phí",
        "traloi4": "Khai thác lợi ích đa dạng",
        "dapAn": "traloi4",
        "dapAnText": "Khai thác lợi ích đa dạng"
    },
    {
        "stt": 41,
        "cauHoi": "Câu 25 Một công ty áp đặt văn hóa công ty mẹ lên các chi nhánh ở các quốc gia khác. Đây là:",
        "traloi1": "Khu vực tâm",
        "traloi2": "Địa tâm",
        "traloi3": "Đa tâm",
        "traloi4": "Vị chủng",
        "dapAn": "traloi4",
        "dapAnText": "Vị chủng"
    },
    {
        "stt": 42,
        "cauHoi": "Câu 41. Trong giai đoạn…………của sốc văn hóa, người quản lý quay trở lại quê hương và cảm thấy lạ lẫm với chính văn hóa gốc của quốc gia mình.",
        "traloi1": "Sốc văn hóa giai đoạn đầu",
        "traloi2": "Giai đoạn thích nghi",
        "traloi3": "Giai đoạn thăng hoa",
        "traloi4": "Sốc văn hóa ngược",
        "dapAn": "traloi4",
        "dapAnText": "Sốc văn hóa ngược"
    },
    {
        "stt": 43,
        "cauHoi": "Câu 42. Yếu tố nào là hành vi tinh tế và phức tạp nhất, có thể khiến cho việc đàm phán đa quốc gia trở nên khó khăn hơn?",
        "traloi1": "Giao tiếp qua email",
        "traloi2": "Giao tiếp trực tiếp",
        "traloi3": "Giao tiếp phi ngôn ngữ",
        "traloi4": "Giao tiếp bằng lời nói",
        "dapAn": "traloi4",
        "dapAnText": "Giao tiếp bằng lời nói"
    },
    {
        "stt": 44,
        "cauHoi": "Câu 43. Né tránh bất trắc cao nghĩa là:",
        "traloi1": "Thích rủi ro",
        "traloi2": "Linh hoạt",
        "traloi3": "Dễ thay đổi",
        "traloi4": "Ngại điều mới",
        "dapAn": "traloi4",
        "dapAnText": "Ngại điều mới"
    },
    {
        "stt": 45,
        "cauHoi": "Câu 44. Cách tiếp cận ……….. phổ biến ở các công ty đa quốc gia có niềm tin rằng: cách tiếp cận của công ty mẹ có thể được áp dụng nguyên vẹn ở tất cả các quốc gia khác vì cách tiếp cận này hoàn hảo hơn bất kỳ cách của công ty con ở nước ngoài.",
        "traloi1": "Đa khu vực",
        "traloi2": "Toàn cầu",
        "traloi3": "Đa cực",
        "traloi4": "Vị chủng",
        "dapAn": "traloi4",
        "dapAnText": "Vị chủng"
    },
    {
        "stt": 46,
        "cauHoi": "Câu 45. Một nhân viên luôn làm việc theo kế hoạch và đúng deadline.",
        "traloi1": "Thời gian đồng bộ",
        "traloi2": "Khuếch tán",
        "traloi3": "Cá nhân",
        "traloi4": "Thời gian tuần tự",
        "dapAn": "traloi4",
        "dapAnText": ""
    },
    {
        "stt": 47,
        "cauHoi": "Câu 46. Một nhân viên từ chối lời mời đi ăn tối của sếp vì cho rằng ngoài giờ làm việc là thời gian riêng tư, là tình huống của khía cạnh văn hóa nào?",
        "traloi1": "Văn hóa cụ thể",
        "traloi2": "Văn hóa cảm xúc",
        "traloi3": "Văn hóa khuếch tán",
        "traloi4": "Văn hóa trung lập",
        "dapAn": "traloi1",
        "dapAnText": "Văn hóa cụ thể"
    },
    {
        "stt": 48,
        "cauHoi": "Câu 47. Ví dụ điển hình về không gian giao tiếp trong mô hình của Hall là…………..",
        "traloi1": "Cách bố trí văn phòng làm việc",
        "traloi2": "Phong cách lãnh đạo",
        "traloi3": "Mức độ giao tiếp bằng lời nói",
        "traloi4": "Cách thức ra quyết định",
        "dapAn": "traloi1",
        "dapAnText": "Cách bố trí văn phòng làm việc"
    },
    {
        "stt": 49,
        "cauHoi": "Câu 48. Con người ở Singapore và Đan Mạch có xu hướng lập kế hoạch dài hạn. Theo mô hình GLOBE, các nền văn hóa này sẽ có điểm cao về…………",
        "traloi1": "Tính nam tính",
        "traloi2": "Định hướng tương lai",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Tránh rủi ro",
        "dapAn": "traloi2",
        "dapAnText": "Định hướng tương lai"
    },
    {
        "stt": 50,
        "cauHoi": "Câu 49. Theo Hofstede, khuynh hướng quan tâm tới chính bản thân và những người thân gần nhất trong gia đình mình và ít quan tâm tới các nhu cầu của xã hội được gọi là…………….",
        "traloi1": "Khoảng cách quyền lực",
        "traloi2": "Tính cá nhân",
        "traloi3": "Tính tập thể",
        "traloi4": "Tính trung lập",
        "dapAn": "traloi2",
        "dapAnText": "Tính cá nhân"
    },
    {
        "stt": 51,
        "cauHoi": "Câu 50. Trong lớp học, học sinh phải đứng lên khi thầy cô bước vào và không được phép phản đối ý kiến của giáo viên. Tình huống trên điển hình của khía cạnh văn hóa nào?",
        "traloi1": "Tránh sự không chắc chắn cao",
        "traloi2": "Tính nam tính cao",
        "traloi3": "Khoảng cách quyền lực cao",
        "traloi4": "Chủ nghĩa tập thể cao",
        "dapAn": "traloi3",
        "dapAnText": "Khoảng cách quyền lực cao"
    },
    {
        "stt": 52,
        "cauHoi": "Câu 1. Tổ chức hoạt động theo mô hình “gia đình” dễ gặp khó khăn gì khi mở rộng ra toàn cầu?",
        "traloi1": "Không có định hướng mục tiêu",
        "traloi2": "Quá phụ thuộc vào người lãnh đạo trung tâm",
        "traloi3": "Tổ chức quá cứng nhắc",
        "traloi4": "Thiếu tôn ti trật tự",
        "dapAn": "traloi3",
        "dapAnText": "Tổ chức quá cứng nhắc"
    },
    {
        "stt": 53,
        "cauHoi": "Câu 2. Cách tiếp cận…………dựa trên giả định là “cách làm của chúng tôi tốt hơn cách làm của tất cả những người khác”",
        "traloi1": "Đa văn hoá",
        "traloi2": "Đa cực",
        "traloi3": "Vị chủng",
        "traloi4": "Toàn cầu hoá",
        "dapAn": "traloi3",
        "dapAnText": "Vị chủng"
    },
    {
        "stt": 54,
        "cauHoi": "Câu 3. Một xã hội không thích đổi mới và luôn làm theo truyền thống.",
        "traloi1": "Văn hóa nữ tính",
        "traloi2": "Chủ nghĩa cá nhân",
        "traloi3": "Né tránh bất trắc cao",
        "traloi4": "Né tránh bất trắc thấp",
        "dapAn": "traloi3",
        "dapAnText": "Né tránh bất trắc cao"
    },
    {
        "stt": 55,
        "cauHoi": "Câu 4. Việc chúng ta có được văn hoá thông qua quá trình tương tác với xã hội thể hiện đặc trưng nào của văn hoá?",
        "traloi1": "Văn hoá là do di truyền",
        "traloi2": "Văn hoá là bẩm sinh",
        "traloi3": "Văn hoá là học hỏi và tìm hiểu",
        "traloi4": "Văn hoá là bản năng",
        "dapAn": "traloi3",
        "dapAnText": "Văn hoá là học hỏi và tìm hiểu"
    },
    {
        "stt": 56,
        "cauHoi": "Câu 5. Trong mô hình “tên lửa dẫn đường” yếu tố nào dưới đây đóng vai trò quyết định trong việc đánh giá nhân viên?",
        "traloi1": "Thâm niên làm việc.",
        "traloi2": "Mối quan hệ với sếp",
        "traloi3": "Hiệu quả công việc và chuyên môn kỹ thuật",
        "traloi4": "Tính trung thành",
        "dapAn": "traloi3",
        "dapAnText": "Hiệu quả công việc và chuyên môn kỹ thuật"
    },
    {
        "stt": 57,
        "cauHoi": "Câu 6. Ở các quốc gia có chỉ số…………cao, sự ghi nhận của cấp trên có thể tạo động lực làm việc tốt hơn cho nhân viên nhưng ở các quốc gia có chỉ số………. thấp, việc tăng lương, tăng cấp có thể quan trọng hơn sự ghi nhận của cấp trên",
        "traloi1": "Tránh sự không chắc chắn",
        "traloi2": "Khoảng cách quyền lực",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Chủ nghĩa tập thể",
        "dapAn": "traloi2",
        "dapAnText": "Khoảng cách quyền lực"
    },
    {
        "stt": 58,
        "cauHoi": "Câu 9. Phát biểu nào sau đây về phong cách lãnh đạo của quản lý người Mỹ là không chính xác.",
        "traloi1": "Trách nhiệm được chia sẻ theo tập thể",
        "traloi2": "Tập trung vào kết quả và hiệu quả công việc",
        "traloi3": "Thể hiện tính cá nhân cao trong lãnh đạo",
        "traloi4": "Thường đề cao sự chủ động và sáng tạo cá nhân",
        "dapAn": "traloi1",
        "dapAnText": "Trách nhiệm được chia sẻ theo tập thể"
    },
    {
        "stt": 59,
        "cauHoi": "Câu 10. Chiều văn hoá nào sau đây xuất hiện trong dự án GLOBE?",
        "traloi1": "Tính cá nhân",
        "traloi2": "Chủ nghĩa định mệnh",
        "traloi3": "Khoảng cách quyền lực",
        "traloi4": "Tính phổ biến",
        "dapAn": "traloi3",
        "dapAnText": "Khoảng cách quyền lực"
    },
    {
        "stt": 60,
        "cauHoi": "Câu 11. Nhân viên tới từ các nền văn hoá có khoảng cách quyền lực cao có thể sẽ thích ứng tốt với…………..",
        "traloi1": "Phong cách lãnh đạo tham gia",
        "traloi2": "Phong cách lãnh đạo tư vấn",
        "traloi3": "Phong cách lãnh đạo chuyên chế",
        "traloi4": "Phong cách lãnh đạo lôi cuốn",
        "dapAn": "traloi3",
        "dapAnText": ""
    },
    {
        "stt": 61,
        "cauHoi": "Câu 12. Một công ty xử lý nhân viên vi phạm đúng theo quy định, không xét hoàn cảnh.",
        "traloi1": "Tính đặc thù",
        "traloi2": "Tính phổ quát",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Văn hóa khuếch tán",
        "dapAn": "traloi2",
        "dapAnText": "Tính phổ quát"
    },
    {
        "stt": 62,
        "cauHoi": "Câu 13. Một doanh nghiệp yêu cầu tách biệt hoàn toàn công việc và đời sống cá nhân.",
        "traloi1": "Nam tính",
        "traloi2": "Cụ thể",
        "traloi3": "Khuếch tán",
        "traloi4": "Cá nhân",
        "dapAn": "traloi2",
        "dapAnText": "Cụ thể"
    },
    {
        "stt": 63,
        "cauHoi": "Câu 14. Nhóm đa văn hóa có thể tạo ra nhiều ý tưởng sáng tạo hơn vì:",
        "traloi1": "Nhiều tài nguyên",
        "traloi2": "Nhiều góc nhìn khác nhau",
        "traloi3": "Nhiều cấp bậc",
        "traloi4": "Nhiều người",
        "dapAn": "traloi2",
        "dapAnText": "Nhiều góc nhìn khác nhau"
    },
    {
        "stt": 64,
        "cauHoi": "Câu 15. Quốc gia né tránh bất trắc thấp thường:",
        "traloi1": "Tuân thủ quy tắc cứng nhắc",
        "traloi2": "Sợ rủi ro",
        "traloi3": "Chấp nhận thay đổi",
        "traloi4": "Bảo thủ",
        "dapAn": "traloi3",
        "dapAnText": "Chấp nhận thay đổi"
    },
    {
        "stt": 65,
        "cauHoi": "Câu 17. Trong lớp học, học sinh phải đứng lên khi thầy cô bước vào và không được phép phản đối ý kiến của giáo viên. Tình huống trên điển hình của khía cạnh văn hoá nào?",
        "traloi1": "Tránh sự không chắc chắn cao",
        "traloi2": "Tính nam tính cao",
        "traloi3": "Khoảng cách quyền lực cao",
        "traloi4": "Chủ nghĩa tập thể cao",
        "dapAn": "traloi3",
        "dapAnText": "Khoảng cách quyền lực cao"
    },
    {
        "stt": 66,
        "cauHoi": "Câu 18. Công ty gửi quản lý từ công ty mẹ sang điều hành chi nhánh. Đây là:",
        "traloi1": "Đa tâm",
        "traloi2": "Khu vực tâm",
        "traloi3": "Địa tâm",
        "traloi4": "Vị chủng",
        "dapAn": "traloi4",
        "dapAnText": "Vị chủng"
    },
    {
        "stt": 67,
        "cauHoi": "Câu 19. Loại hình văn hoá tổ chức nào sau đây thường dẫn đến quyết định mang tính cá nhân của người lãnh đạo và nhân viên chịu ảnh hưởng mạnh bởi yếu tố tình cảm?",
        "traloi1": "Tên lửa dẫn đường",
        "traloi2": "Tháp Eiffel",
        "traloi3": "Gia đình",
        "traloi4": "Lò ấp",
        "dapAn": "traloi3",
        "dapAnText": "Gia đình"
    },
    {
        "stt": 68,
        "cauHoi": "Câu 20. Hành động hỏi về gia đình phù hợp ở Mexico nhưng không phù hợp ở Trung Đông. Điều này cho thấy:",
        "traloi1": "Sai quy định",
        "traloi2": "Không khác biệt",
        "traloi3": "Giống nhau",
        "traloi4": "Khác biệt văn hóa",
        "dapAn": "traloi4",
        "dapAnText": "Khác biệt văn hóa"
    },
    {
        "stt": 69,
        "cauHoi": "Câu 23. Trong cuộc họp, nhân viên có thể thoải mái bày tỏ ý kiến, thậm chí phản biện trực tiếp với giám đốc.",
        "traloi1": "Khoảng cách quyền lực thấp",
        "traloi2": "Tính nam tính cao",
        "traloi3": "Chủ nghĩa tập thể cao",
        "traloi4": "Tránh sự không chắc chắn cao",
        "dapAn": "traloi4",
        "dapAnText": "Tránh sự không chắc chắn cao"
    },
    {
        "stt": 70,
        "cauHoi": "Câu 24. Theo Hofstede, hệ thống xã hội chặt chẽ, sự gắn kết cảm xúc mật thiết với nhóm, và niềm tin mạnh mẽ vào các quyết định của nhóm là các đặc trưng của nền văn hoá có……… cao",
        "traloi1": "Chủ nghĩa tập thể",
        "traloi2": "Tính cá nhân",
        "traloi3": "Tránh sự không chắc chắn",
        "traloi4": "Nam tính",
        "dapAn": "traloi1",
        "dapAnText": "Chủ nghĩa tập thể"
    },
    {
        "stt": 71,
        "cauHoi": "Câu 25. Phát biểu nào sau đây là đúng với nhân viên tới từ nền văn hoá có tính nữ cao?",
        "traloi1": "Ít quan tâm tới các mối quan hệ xã hội",
        "traloi2": "Phân chia công việc và vai trò linh hoạt hơn, khuyến khích nhân viên làm việc ở các vị trí linh hoạt và khuyến khích giao tiếp khi làm việc.",
        "traloi3": "Đặt nặng cạnh tranh và thành tích cá nhân",
        "traloi4": "Thường xuyên duy trì khoảng cách quyền lực cao.",
        "dapAn": "traloi2",
        "dapAnText": "Phân chia công việc và vai trò linh hoạt hơn, khuyến khích nhân viên làm việc ở các vị trí linh hoạt và khuyến khích giao tiếp khi làm việc."
    },
    {
        "stt": 72,
        "cauHoi": "Câu 26. Một công ty thưởng lớn cho nhân viên đạt doanh số cao nhất.",
        "traloi1": "Né tránh bất trắc",
        "traloi2": "Văn hóa nam tính",
        "traloi3": "Văn hóa nữ tính",
        "traloi4": "Tính phổ quát",
        "dapAn": "traloi2",
        "dapAnText": "Văn hóa nam tính"
    },
    {
        "stt": 73,
        "cauHoi": "Câu 27. Khía cạnh văn hoá nào được thể hiện trong tình huống sau: “Khi có sự cố xảy ra, nhóm không tìm cách đổ lỗi mà tập trung vào việc tìm giải pháp cải thiện.",
        "traloi1": "Tính nam tính thấp",
        "traloi2": "Tránh sự không chắc chắn thấp",
        "traloi3": "Tính nam tính cao",
        "traloi4": "Tránh sự không chắc chắn cao",
        "dapAn": "traloi2",
        "dapAnText": "Tránh sự không chắc chắn thấp"
    },
    {
        "stt": 74,
        "cauHoi": "Câu 29. Các nền văn hoá có ………..thấp mọi người sẵn sàng chấp nhận rủi ro có liên quan tới các vấn đề mà họ không biết và chấp nhận việc cuộc sống sẽ vận hành theo cách như vậy.",
        "traloi1": "Nam tính",
        "traloi2": "Tránh sự không chắc chắn",
        "traloi3": "Khoảng cách quyền lực",
        "traloi4": "Tính cá nhân",
        "dapAn": "traloi2",
        "dapAnText": "Tránh sự không chắc chắn"
    },
    {
        "stt": 75,
        "cauHoi": "Câu 30. Theo Trompenaars, phát biểu nào sau đây là đúng về cách tiếp cận phổ biến?",
        "traloi1": "Đặt cảm xúc và sự hoà hợp lên trên luật lệ",
        "traloi2": "Nhấn mạnh vào mối quan hệ cá nhân và hoàn cảnh cụ thể",
        "traloi3": "Nhấn mạnh vào việc áp dụng các quy tắc và hệ thống một cách khách quan.",
        "traloi4": "Linh hoạt trong việc áp dụng quy tắc tuỳ thuộc vào đối tượng giao tiếp",
        "dapAn": "traloi3",
        "dapAnText": "Nhấn mạnh vào việc áp dụng các quy tắc và hệ thống một cách khách quan."
    },
    {
        "stt": 76,
        "cauHoi": "Câu 31. Josh, một du khách từ Mỹ tới làm việc 5 ngày ở Nhật Bản. Ngoài việc tìm hiểu về danh lam thắng cảnh và lịch sử, Josh còn nhận thấy mọi người ở Nhật không bắt tay mà hay cúi chào nhau. Josh có thể kết luận Nhật Bản có văn hoá……",
        "traloi1": "Tiếp xúc gần",
        "traloi2": "Tiếp xúc xa",
        "traloi3": "Phụ thuộc vào ngữ cảnh thấp",
        "traloi4": "Có tính cá nhân cao",
        "dapAn": "traloi2",
        "dapAnText": "Tiếp xúc xa"
    },
    {
        "stt": 77,
        "cauHoi": "Câu 33. Công ty quản lý theo khu vực (EU, ASEAN…). Đây là:",
        "traloi1": "Vị chủng",
        "traloi2": "Đa tâm",
        "traloi3": "Khu vực tâm",
        "traloi4": "Địa tâm",
        "dapAn": "traloi3",
        "dapAnText": "Khu vực tâm"
    },
    {
        "stt": 78,
        "cauHoi": "Câu 34. Thành tựu nghĩa là:",
        "traloi1": "Địa vị do tuổi tác",
        "traloi2": "Địa vị do giới tính",
        "traloi3": "Địa vị do năng lực",
        "traloi4": "Địa vị do gia đình",
        "dapAn": "traloi3",
        "dapAnText": "Địa vị do năng lực"
    },
    {
        "stt": 79,
        "cauHoi": "Câu 35. ………….giải thích hành vi của mọi người trong các tổ chức trên thế giới, mô tả và so sánh hành vi tổ chức giữa các quốc gia và các nền văn hoá, tìm cách hiểu và cải thiện sự tương tác giữa các đối tượng hữu quan như đồng nghiệp, người quản lý, người điều hành, khách hàng, nhà cung ứng và các đối tác liên minh.",
        "traloi1": "Quản trị tài chính",
        "traloi2": "Quản trị nhân sự truyền thống",
        "traloi3": "Quản trị đa văn hoá",
        "traloi4": "Quản trị sản xuất",
        "dapAn": "traloi3",
        "dapAnText": "Quản trị đa văn hoá"
    },
    {
        "stt": 80,
        "cauHoi": "Câu 36. Yếu tố nào KHÔNG phải nguyên nhân tạo khác biệt văn hoá?",
        "traloi1": "Công nghệ",
        "traloi2": "Lịch sử",
        "traloi3": "Địa lý",
        "traloi4": "Tôn giáo",
        "dapAn": "traloi1",
        "dapAnText": "Công nghệ"
    },
    {
        "stt": 81,
        "cauHoi": "Câu 37. Một MNC duy trì hai nền văn hoá khác nhau giữa công ty mẹ và công ty con để tránh xung đột. Chiến lược này nhằm:",
        "traloi1": "Đồng hóa văn hóa",
        "traloi2": "Bảo tồn đa dạng văn hóa",
        "traloi3": "Giảm chi phí",
        "traloi4": "Tăng kiểm soát",
        "dapAn": "traloi2",
        "dapAnText": "Bảo tồn đa dạng văn hóa"
    },
    {
        "stt": 82,
        "cauHoi": "Câu 38. Văn hoá…………là nền văn hoá mà mọi người luôn kiểm soát cảm xúc của mình.",
        "traloi1": "Nữ tính",
        "traloi2": "Cảm xúc",
        "traloi3": "Nam tính",
        "traloi4": "Trung lập",
        "dapAn": "traloi4",
        "dapAnText": "Trung lập"
    },
    {
        "stt": 83,
        "cauHoi": "Câu 39. Một người tin rằng con người có thể kiểm soát thiên nhiên.",
        "traloi1": "Tập thể",
        "traloi2": "Định hướng bên trong",
        "traloi3": "Định hướng bên ngoài",
        "traloi4": "Kiềm chế",
        "dapAn": "traloi3",
        "dapAnText": "Định hướng bên ngoài"
    },
    {
        "stt": 84,
        "cauHoi": "Câu 2. Theo Edgar Schein, tầng sâu nhất trong mô hình văn hoá tổ chức là gì?",
        "traloi1": "Giá trị cốt lõi",
        "traloi2": "Hành vi thể hiện",
        "traloi3": "Giả định ngầm",
        "traloi4": "Biểu tượng",
        "dapAn": "traloi3",
        "dapAnText": "Giả định ngầm"
    },
    {
        "stt": 85,
        "cauHoi": "Câu 3. Hiểu về ngôn ngữ của một nền văn hoá là một trong các kỹ năng cần thiết với người quản lý quốc tế vì..........",
        "traloi1": "Ngôn ngữ giúp kiểm soát nhân viên",
        "traloi2": "Ngôn ngữ phản ánh văn hoá",
        "traloi3": "Ngôn ngữ giúp giao tiếp nhanh hơn",
        "traloi4": "Ngôn ngữ không quan trọng bằng kỹ năng mềm",
        "dapAn": "traloi2",
        "dapAnText": "Ngôn ngữ phản ánh văn hoá"
    },
    {
        "stt": 86,
        "cauHoi": "Câu 11. Điều nào sau đây là đặc trưng của các quốc gia có chỉ số về tính nam tính thấp?",
        "traloi1": "Ưu tiên thành tích cá nhân hơn tập thể",
        "traloi2": "Tập trung vào thành tích và vật chất",
        "traloi3": "Thích cạnh tranh và thích thể hiện quyền lực",
        "traloi4": "Có nhiều phụ nữ làm việc ở các vị trí cấp cao",
        "dapAn": "traloi4",
        "dapAnText": "Có nhiều phụ nữ làm việc ở các vị trí cấp cao"
    },
    {
        "stt": 87,
        "cauHoi": "Câu 12. Các chiều văn hoá nào sau đây xuất hiện trong nghiên cứu GLOBE nhưng không xuất hiện trong nghiên cứu của Hofstede.",
        "traloi1": "Tính cá nhân",
        "traloi2": "Tránh sự không chắc chắn",
        "traloi3": "Định hướng tương lai",
        "traloi4": "Khoảng cách quyền lực",
        "dapAn": "traloi3",
        "dapAnText": "Định hướng tương lai"
    },
    {
        "stt": 88,
        "cauHoi": "Câu 14. Công ty chỉ hoạt động trong nước, ít chịu ảnh hưởng đa văn hoá quốc tế.",
        "traloi1": "Công ty đa quốc gia",
        "traloi2": "Công ty quốc tế",
        "traloi3": "Công ty toàn cầu",
        "traloi4": "Công ty nội địa",
        "dapAn": "traloi4",
        "dapAnText": "Công ty nội địa"
    },
    {
        "stt": 89,
        "cauHoi": "Câu 16. Một nhân viên luôn làm việc theo kế hoạch và đúng deadline.",
        "traloi1": "Khuếch tán",
        "traloi2": "Thời gian tuần tự",
        "traloi3": "Cá nhân",
        "traloi4": "Thời gian đồng bộ",
        "dapAn": "traloi2",
        "dapAnText": "Thời gian tuần tự"
    },
    {
        "stt": 90,
        "cauHoi": "Câu 18. Trong nền văn hoá thành tựu, địa vị của một người được đánh giá dựa trên.............",
        "traloi1": "Bằng cấp",
        "traloi2": "Năng lực",
        "traloi3": "Mối quan hệ",
        "traloi4": "Thâm niên",
        "dapAn": "traloi2",
        "dapAnText": ""
    },
    {
        "stt": 91,
        "cauHoi": "Câu 19. Theo nghiên cứu GLOBE, ở các quốc gia có giá trị tập thể cao như Philipines và các quốc gia Đông Á, nhân viên có cái nhìn tích cực về phong cách lãnh đạo............",
        "traloi1": "Định hướng cá nhân",
        "traloi2": "Độc đoán",
        "traloi3": "Định hướng nhóm",
        "traloi4": "Cạnh tranh",
        "dapAn": "traloi3",
        "dapAnText": "Định hướng nhóm"
    },
    {
        "stt": 92,
        "cauHoi": "Câu 23. Dựa trên mô hình của Trompenaars, đặc trưng của chủ nghĩa đặc thù là gì?",
        "traloi1": "Thực hiện theo cảm xúc",
        "traloi2": "Nghĩa vụ phải thực hiện theo các luật lệ",
        "traloi3": "Nghĩa vụ phải thực hiện các mối quan hệ",
        "traloi4": "Thực hiện theo cá nhân",
        "dapAn": "traloi3",
        "dapAnText": "Nghĩa vụ phải thực hiện các mối quan hệ"
    },
    {
        "stt": 93,
        "cauHoi": "Câu 26. Chủ nghĩa tập thể nhấn mạnh:",
        "traloi1": "Trung thành với nhóm",
        "traloi2": "Quyền riêng tư",
        "traloi3": "Tự do cá nhân",
        "traloi4": "Thành tích cá nhân",
        "dapAn": "traloi1",
        "dapAnText": "Trung thành với nhóm"
    },
    {
        "stt": 94,
        "cauHoi": "Câu 27. Thông điệp được đưa ra một cách tinh tế và thường được mã hoá ở cấp độ cao.............",
        "traloi1": "Các nền văn hoá có chỉ số khung cảnh cao",
        "traloi2": "Các nền văn hoá có chỉ số khung cảnh thấp",
        "traloi3": "Cả b và d đều đúng",
        "traloi4": "Các nền văn hoá phụ thuộc nhiều vào ngữ cảnh",
        "dapAn": "traloi3",
        "dapAnText": "Cả b và d đều đúng"
    },
    {
        "stt": 95,
        "cauHoi": "Câu 29. Xã hội nào có khuynh hướng chia sẻ thông tin nội bộ với bạn thân của mình?",
        "traloi1": "Xúc cảm",
        "traloi2": "Phổ biến",
        "traloi3": "Cụ thể",
        "traloi4": "Trung tính",
        "dapAn": "traloi3",
        "dapAnText": "Cụ thể"
    },
    {
        "stt": 96,
        "cauHoi": "Câu 30. Nghiên cứu đa văn hoá trong tạo động lực cho thấy, nhân viên ở châu Á và Trung Đông thường dễ chấp nhận việc bị đối xử bất bình đẳng hơn để duy trì sự hoà hợp của nhóm. Đây có thể được coi là ảnh hưởng của chiều văn hoá nào?",
        "traloi1": "Chủ nghĩa tập thể",
        "traloi2": "Tránh sự không chắc chắn",
        "traloi3": "Chủ nghĩa cá nhân",
        "traloi4": "Khoảng cách quyền lực thấp",
        "dapAn": "traloi2",
        "dapAnText": "Tránh sự không chắc chắn"
    },
    {
        "stt": 97,
        "cauHoi": "Câu 31. Theo Early và Ang, trí tuệ văn hoá được cấu thành bởi ba yếu tố là:",
        "traloi1": "Nhận thức, động lực và hành vi",
        "traloi2": "Vốn xã hội, vốn tâm lý và vốn trí tuệ",
        "traloi3": "Siêu nhận thức, động lực và hành vi",
        "traloi4": "Nhận thức, siêu nhận thức và hành vi",
        "dapAn": "traloi2",
        "dapAnText": "Vốn xã hội, vốn tâm lý và vốn trí tuệ"
    },
    {
        "stt": 98,
        "cauHoi": "Câu 32. Một tổ chức công nghệ cao, nhân viên làm việc theo nhóm dự án, không chú trọng cấp bậc. Đây là:",
        "traloi1": "Tháp Eiffel",
        "traloi2": "Vườn ươm",
        "traloi3": "Tên lửa định hướng",
        "traloi4": "Gia đình",
        "dapAn": "traloi3",
        "dapAnText": "Tên lửa định hướng"
    },
    {
        "stt": 99,
        "cauHoi": "Câu 33. Nhà nghiên cứu người Hà Lan, Fons Trompenaars, đề xuất khi một người tới từ nền văn hoá thành tựu làm việc tại quốc gia có nền văn hoá quy gán, họ nên:",
        "traloi1": "Bỏ qua các vai trò xã hội trong công việc",
        "traloi2": "Tôn trọng địa vị và ảnh hưởng của đối tác trong nhóm của họ",
        "traloi3": "Tập trung vào kết quả hơn là mối quan hệ cá nhân",
        "traloi4": "Thay đổi kế hoạch nhanh chóng để phù hợp với hoàn cảnh",
        "dapAn": "traloi2",
        "dapAnText": "Tôn trọng địa vị và ảnh hưởng của đối tác trong nhóm của họ"
    },
    {
        "stt": 100,
        "cauHoi": "Câu 35. Lợi ích của việc áp dụng cách tiếp cận đa cực với việc lựa chọn nhân sự là gì?",
        "traloi1": "Tăng khả năng cạnh tranh toàn cầu",
        "traloi2": "Quản lý người địa phương thường giải quyết các vấn đề chính trị một cách hiệu quả hơn",
        "traloi3": "Giảm thiểu sự khác biệt văn hoá",
        "traloi4": "Tăng cường sự kiểm soát từ công ty mẹ",
        "dapAn": "traloi2",
        "dapAnText": "Quản lý người địa phương thường giải quyết các vấn đề chính trị một cách hiệu quả hơn"
    },
    {
        "stt": 101,
        "cauHoi": "Câu 36. Một người được thăng chức nhờ năng lực và thành tích.",
        "traloi1": "Thành tựu",
        "traloi2": "Quy gán",
        "traloi3": "Cá nhân",
        "traloi4": "Tập thể",
        "dapAn": "traloi1",
        "dapAnText": "Thành tựu"
    },
    {
        "stt": 102,
        "cauHoi": "Câu 38. Xã hội nữ tính có xu hướng:",
        "traloi1": "Áp lực công việc lớn",
        "traloi2": "Hợp tác và quan tâm",
        "traloi3": "Quyết đoán mạnh",
        "traloi4": "Cạnh tranh cao",
        "dapAn": "traloi2",
        "dapAnText": "Hợp tác và quan tâm"
    },
    {
        "stt": 103,
        "cauHoi": "Câu 41. Ai là người đưa ra mô hình 6 khía cạnh văn hoá?",
        "traloi1": "Trompenaars",
        "traloi2": "House",
        "traloi3": "Hofstede",
        "traloi4": "Bond",
        "dapAn": "traloi3",
        "dapAnText": "Hofstede"
    },
    {
        "stt": 104,
        "cauHoi": "Câu 42. ............là một phần của giao tiếp phi ngôn ngữ.",
        "traloi1": "Sắc tộc",
        "traloi2": "Ngôn ngữ",
        "traloi3": "Giới tính",
        "traloi4": "Cử chỉ hành vi",
        "dapAn": "traloi4",
        "dapAnText": "Cử chỉ hành vi"
    },
    {
        "stt": 105,
        "cauHoi": "Câu 43. Ở xã hội có văn hoá khoảng cách quyền lực.........., công ty thường áp dụng chính sách lương và thưởng công bằng dựa trên năng lực, không phụ thuộc vào chức vụ.",
        "traloi1": "Chủ nghĩa tập thể cao",
        "traloi2": "Khoảng cách quyền lực thấp",
        "traloi3": "Tránh sự không chắc chắn cao",
        "traloi4": "Tính nam tính thấp",
        "dapAn": "traloi1",
        "dapAnText": "Chủ nghĩa tập thể cao"
    },
    {
        "stt": 106,
        "cauHoi": "Câu 47. Cách tiếp cận nào với việc quản trị sự đa dạng về văn hoá có giả định căn bản là sự đa dạng về văn hoá chỉ đem lại các ảnh hưởng tiêu cực tới tổ chức, do đó cần giảm thiểu tối đa sự đa dạng về văn hoá?",
        "traloi1": "Cách tiếp cận đa cực",
        "traloi2": "Cách tiếp cận vị chủng",
        "traloi3": "Cách tiếp cận khu vực",
        "traloi4": "Cách tiếp cận toàn cầu",
        "dapAn": "traloi2",
        "dapAnText": "Cách tiếp cận vị chủng"
    },
    {
        "stt": 107,
        "cauHoi": "Câu 48. Thuật ngữ..........diễn tả hành vi giao tiếp không sử dụng từ ngữ.",
        "traloi1": "Giao tiếp gián tiếp",
        "traloi2": "Giao tiếp trực tiếp",
        "traloi3": "Giao tiếp phi ngôn ngữ",
        "traloi4": "Giao tiếp bị động",
        "dapAn": "traloi3",
        "dapAnText": "Giao tiếp phi ngôn ngữ"
    },
    {
        "stt": 108,
        "cauHoi": "Câu 49. Phong cách lãnh đạo chuyên quyền sẽ hiệu quả nhất ở các quốc gia nào?",
        "traloi1": "Các quốc gia có khoảng cách quyền lực cao",
        "traloi2": "Các quốc gia có chỉ số chủ nghĩa cá nhân cao",
        "traloi3": "Các quốc gia có khoảng cách quyền lực thấp",
        "traloi4": "Các quốc gia có chỉ số nữ tính cao",
        "dapAn": "traloi1",
        "dapAnText": "Các quốc gia có khoảng cách quyền lực cao"
    }
];

if (typeof window !== "undefined") {
  window.questions = questions;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
