import { Question } from '../types';
import imgSidangBpupki from '../assets/images/sidang_bpupki_1795412360567.jpg';
import imgPanitiaSembilan from '../assets/images/panitia_sembilan_1795412360875.jpg';
import imgNormaKesopanan from '../assets/images/norma_kesopanan_1795412361285.jpg';
import imgNormaHukum from '../assets/images/norma_hukum_1795412360105.jpg';
import imgMusyawarahKelas from '../assets/images/musyawarah_kelas_1795412360351.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // BAGIAN 1: PILIHAN GANDA (18 SOAL - 4 OPSI)
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Sidang BPUPKI)',
    difficulty: 'Mudah',
    image: imgSidangBpupki,
    imageCaption: 'Ilustrasi Sidang Pertama BPUPKI di Gedung Chuo Sangi In (Gedung Pancasila), Jakarta, 1945.',
    text: 'Perhatikan gambar suasana sidang pada tahun 1945 di atas! Lembaga yang dibentuk pada masa penjajahan Jepang untuk menyelidiki dan mempersiapkan dasar negara Indonesia merdeka dan diketuai oleh Dr. K.R.T. Radjiman Wedyodiningrat adalah...',
    options: [
      { id: 'A', text: 'BPUPKI (Dokuritsu Junbi Cosakai)' },
      { id: 'B', text: 'PPKI (Dokuritsu Junbi Inkai)' },
      { id: 'C', text: 'Panitia Sembilan' },
      { id: 'D', text: 'Budi Utomo' },
    ],
    correctAnswer: 'A',
    explanation:
      'BPUPKI (Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia) atau Dokuritsu Junbi Cosakai dibentuk untuk menyelidiki persiapan kemerdekaan termasuk merumuskan dasar negara, dengan ketua Dr. K.R.T. Radjiman Wedyodiningrat.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Tokoh Perumus)',
    difficulty: 'Mudah',
    text: 'Pada sidang pertama BPUPKI tanggal 29 Mei sampai 1 Juni 1945, terdapat tiga tokoh bangsa yang menyampaikan gagasan rumusan dasar negara secara berurutan. Ketiga tokoh tersebut adalah...',
    options: [
      { id: 'A', text: 'Mohammad Hatta, Sutan Sjahrir, dan Soekarno' },
      { id: 'B', text: 'Mohammad Yamin, Soepomo, dan Ir. Soekarno' },
      { id: 'C', text: 'Ki Hajar Dewantara, Agus Salim, dan Soepomo' },
      { id: 'D', text: 'Achmad Soebardjo, Mohammad Yamin, dan Radjiman Wedyodiningrat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tiga tokoh yang mengemukakan usulan dasar negara pada sidang pertama BPUPKI secara berurutan adalah Mr. Mohammad Yamin (29 Mei 1945), Prof. Dr. Mr. Soepomo (31 Mei 1945), dan Ir. Soekarno (1 Juni 1945).',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Hari Lahir Pancasila)',
    difficulty: 'Mudah',
    text: 'Pada tanggal 1 Juni 1945, Ir. Soekarno menyampaikan pidato tentang lima asas dasar negara dan mengusulkan nama "Pancasila". Oleh karena itu, setiap tanggal 1 Juni bangsa Indonesia memperingati hari...',
    options: [
      { id: 'A', text: 'Hari Kesaktian Pancasila' },
      { id: 'B', text: 'Hari Kebangkitan Nasional' },
      { id: 'C', text: 'Hari Lahir Pancasila' },
      { id: 'D', text: 'Hari Sumpah Pemuda' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tanggal 1 Juni diperingati sebagai Hari Lahir Pancasila karena pada 1 Juni 1945 Ir. Soekarno untuk pertama kalinya memperkenalkan istilah Pancasila sebagai nama dasar negara Indonesia dalam sidang BPUPKI.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Makna Kata Pancasila)',
    difficulty: 'Mudah',
    text: 'Kata "Pancasila" berasal dari bahasa Sanskerta yang terdiri atas dua kata, yaitu "panca" dan "sila". Arti kata "panca" dan "sila" berturut-turut adalah...',
    options: [
      { id: 'A', text: 'Lima dan aturan/dasar' },
      { id: 'B', text: 'Satu dan kesatuan' },
      { id: 'C', text: 'Tiga dan pedoman' },
      { id: 'D', text: 'Lima dan kemerdekaan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam bahasa Sanskerta, "panca" berarti lima dan "sila" berarti prinsip, asas, atau dasar/aturan tingkah laku yang baik. Jadi Pancasila berarti lima dasar.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Usulan Dasar Negara)',
    difficulty: 'Sedang',
    text: 'Dalam pidatonya pada tanggal 1 Juni 1945, Ir. Soekarno menyebutkan lima prinsip dasar negara, salah satunya adalah "Mufakat atau Demokrasi". Prinsip tersebut mengajarkan bahwa keputusan bersama sebaiknya diambil melalui...',
    options: [
      { id: 'A', text: 'Kehendak pribadi pemimpin rapat' },
      { id: 'B', text: 'Musyawarah untuk mencapai kesepakatan bersama' },
      { id: 'C', text: 'Pemaksaan pendapat golongan mayoritas' },
      { id: 'D', text: 'Penundaan keputusan tanpa batas waktu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mufakat atau demokrasi menekankan pentingnya bermusyawarah secara kekeluargaan untuk mencapai kesepakatan bersama yang adil bagi seluruh rakyat.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Panitia Sembilan)',
    difficulty: 'Sedang',
    image: imgPanitiaSembilan,
    imageCaption: 'Ilustrasi rapat Panitia Sembilan merumuskan naskah Piagam Jakarta (22 Juni 1945).',
    text: 'Perhatikan gambar tokoh perumus dasar negara yang sedang menyusun rancangan mukadimah hukum dasar pada tanggal 22 Juni 1945! Rancangan hasil kerja Panitia Sembilan tersebut dikenal dengan nama...',
    options: [
      { id: 'A', text: 'Proklamasi Kemerdekaan' },
      { id: 'B', text: 'Sumpah Pemuda' },
      { id: 'C', text: 'Piagam Jakarta (Jakarta Charter)' },
      { id: 'D', text: 'Dekrit Presiden' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada tanggal 22 Juni 1945, Panitia Sembilan yang diketuai Ir. Soekarno berhasil merumuskan naskah rancangan pembukaan hukum dasar yang diberi nama Piagam Jakarta (Jakarta Charter).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Pengesahan PPKI)',
    difficulty: 'Mudah',
    text: 'Rumusan Pancasila yang sah dan resmi tercantum dalam Pembukaan Undang-Undang Dasar 1945 ditetapkan oleh PPKI pada tanggal...',
    options: [
      { id: 'A', text: '17 Agustus 1945' },
      { id: 'B', text: '18 Agustus 1945' },
      { id: 'C', text: '22 Juni 1945' },
      { id: 'D', text: '1 Juni 1945' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sehari setelah Proklamasi Kemerdekaan, yakni pada tanggal 18 Agustus 1945, PPKI mengesahkan UUD NRI Tahun 1945 yang di dalam Pembukaannya memuat rumusan resmi Pancasila.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Sejarah Lahirnya Pancasila (Perubahan Sila Pertama)',
    difficulty: 'Sukar',
    text: 'Pada tanggal 18 Agustus 1945, kalimat sila pertama dalam Piagam Jakarta diubah menjadi "Ketuhanan Yang Maha Esa". Alasan utama para tokoh bangsa menyepakati perubahan tersebut adalah...',
    options: [
      { id: 'A', text: 'Agar naskah UUD 1945 menjadi lebih pendek dan mudah dihafal' },
      { id: 'B', text: 'Untuk menjaga persatuan dan kesatuan bangsa Indonesia yang beragam agama dan budaya' },
      { id: 'C', text: 'Karena diminta oleh pemerintah tentara Jepang saat itu' },
      { id: 'D', text: 'Agar pemimpin negara dipilih melalui pemungutan suara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Para pendiri bangsa mengutamakan persatuan dan kesatuan nasional. Dengan menerima masukan dari wakil-wakil Indonesia bagian timur, sila pertama diubah menjadi "Ketuhanan Yang Maha Esa" agar merangkul seluruh rakyat Indonesia yang majemuk.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Nilai Keteladanan Perumus Pancasila',
    difficulty: 'Sedang',
    text: 'Dalam proses perumusan Pancasila, para pendiri bangsa memiliki perbedaan pendapat tetapi tetap saling menghormati demi kepentingan bangsa. Sikap tersebut menunjukkan nilai keteladanan berupa...',
    options: [
      { id: 'A', text: 'Mementingkan golongan sendiri di atas kepentingan umum' },
      { id: 'B', text: 'Menghargai perbedaan pendapat dan mengutamakan persatuan bangsa' },
      { id: 'C', text: 'Menolak hasil musyawarah jika tidak sesuai keinginan pribadi' },
      { id: 'D', text: 'Memaksakan kehendak agar rapat cepat selesai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Para tokoh perumus Pancasila meneladankan sikap toleransi, lapang dada, menghargai perbedaan pendapat, dan menempatkan persatuan serta kepentingan bangsa di atas kepentingan pribadi maupun golongan.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pengertian Norma dalam Masyarakat',
    difficulty: 'Mudah',
    text: 'Dalam kehidupan bermasyarakat terdapat aturan atau ketentuan yang mengikat warga masyarakat serta dijadikan pedoman tingkah laku agar tercipta ketertiban. Aturan tersebut disebut...',
    options: [
      { id: 'A', text: 'Hobi' },
      { id: 'B', text: 'Norma' },
      { id: 'C', text: 'Bakat' },
      { id: 'D', text: 'Prestasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma adalah kaidah, aturan, atau pedoman tingkah laku yang berlaku dalam kehidupan bermasyarakat untuk mewujudkan ketertiban, keamanan, dan keadilan.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Macam-Macam Norma (Norma Agama)',
    difficulty: 'Mudah',
    text: 'Norma yang bersumber dari wahyu atau ajaran Tuhan Yang Maha Esa melalui kitab suci masing-masing agama disebut...',
    options: [
      { id: 'A', text: 'Norma kesopanan' },
      { id: 'B', text: 'Norma kesusilaan' },
      { id: 'C', text: 'Norma agama' },
      { id: 'D', text: 'Norma hukum' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma agama adalah peraturan hidup yang bersumber dari Tuhan Yang Maha Esa yang disampaikan melalui kitab suci dan ajaran agama, seperti kewajiban beribadah dan berbuat baik.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Macam-Macam Norma (Norma Kesopanan)',
    difficulty: 'Mudah',
    image: imgNormaKesopanan,
    imageCaption: 'Ilustrasi siswa SD menyapa dan bersalaman dengan guru di gerbang sekolah.',
    text: 'Perhatikan gambar perilaku siswa saat tiba di gerbang sekolah pada gambar di atas! Sikap mengucapkan salam dan mencium tangan guru sebagai tanda hormat merupakan contoh penerapan...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma lalu lintas' },
      { id: 'D', text: 'Norma ekonomi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesopanan bersumber dari tata pergaulan dan kebiasaan masyarakat setempat yang mengatur perilaku sopan santun, seperti menghormati guru dan orang yang lebih tua.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Macam-Macam Norma (Norma Kesusilaan)',
    difficulty: 'Sedang',
    text: 'Saat ulangan di kelas, Rani melihat buku catatan temannya terbuka, namun ia memilih tidak menyontek karena merasa perbuatan itu tidak jujur dan akan membuatnya menyesal. Perilaku Rani mencerminkan kepatuhan terhadap...',
    options: [
      { id: 'A', text: 'Norma kesusilaan yang bersumber dari hati nurani manusia' },
      { id: 'B', text: 'Norma hukum yang dibuat oleh kepolisian' },
      { id: 'C', text: 'Norma adat yang berlaku di satu daerah saja' },
      { id: 'D', text: 'Norma kesopanan tentang cara berpakaian' },
    ],
    correctAnswer: 'A',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani manusia tentang baik dan buruk, misalnya berlaku jujur dan tidak menyontek. Pelanggarannya menimbulkan rasa bersalah dan penyesalan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Macam-Macam Norma (Norma Hukum)',
    difficulty: 'Sedang',
    text: 'Dibandingkan dengan norma lainnya, norma hukum memiliki sifat yang memaksa dan sanksinya paling tegas berupa denda atau hukuman penjara karena...',
    options: [
      { id: 'A', text: 'Dibuat secara tidak tertulis oleh kelompok bermain anak' },
      { id: 'B', text: 'Dibuat oleh lembaga negara yang berwenang dan berlaku mengikat seluruh warga negara' },
      { id: 'C', text: 'Hanya berlaku bagi orang yang menyetujuinya saja' },
      { id: 'D', text: 'Sanksinya hanya berupa rasa malu dari diri sendiri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum bersifat tertulis, dibuat oleh lembaga resmi negara yang berwenang (seperti DPR bersama Presiden), serta memiliki sanksi tegas dan memaksa demi ketertiban umum.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Sanksi Pelanggaran Norma',
    difficulty: 'Sedang',
    text: 'Seorang anak berbicara kasar kepada orang yang lebih tua sehingga ia mendapat teguran dan dijauhi oleh teman-temannya. Sanksi berupa teguran atau cemoohan masyarakat tersebut terjadi akibat melanggar...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma ekonomi' },
      { id: 'D', text: 'Norma kepegawaian' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pelanggaran terhadap norma kesopanan berakibat sanksi sosial dari lingkungan sekitar, seperti teguran, celaan, rasa malu, atau dikucilkan dari pergaulan.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Hak dan Kewajiban dalam Pelaksanaan Norma',
    difficulty: 'Sedang',
    text: 'Di kelas 5 SD Negeri 3 Dangintukadaya, seluruh siswa wajib melaksanakan piket kebersihan sesuai jadwal agar kelas nyaman untuk belajar. Hubungan antara kewajiban piket dan hak belajar yang nyaman adalah...',
    options: [
      { id: 'A', text: 'Hak dapat diperoleh tanpa perlu melaksanakan kewajiban terlebih dahulu' },
      { id: 'B', text: 'Melaksanakan kewajiban menjaga kebersihan akan mendukung terpenuhinya hak belajar di kelas yang nyaman' },
      { id: 'C', text: 'Kewajiban hanya berlaku untuk ketua kelas saja' },
      { id: 'D', text: 'Hak dan kewajiban tidak memiliki hubungan sama sekali' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban harus dilaksanakan secara seimbang. Ketika siswa menunaikan kewajiban menjaga kebersihan kelas, maka hak belajar di ruang yang bersih dan nyaman dapat dirasakan bersama.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Penerapan Norma di Lingkungan Keluarga',
    difficulty: 'Mudah',
    text: 'Berikut ini yang merupakan contoh penerapan norma kesopanan di lingkungan keluarga adalah...',
    options: [
      { id: 'A', text: 'Berpamitan dan mencium tangan orang tua sebelum berangkat ke sekolah' },
      { id: 'B', text: 'Mengambil mainan adik tanpa meminta izin terlebih dahulu' },
      { id: 'C', text: 'Membunyikan televisi dengan suara sangat keras saat anggota keluarga sedang tidur' },
      { id: 'D', text: 'Membiarkan kamar berantakan agar dirapikan orang lain' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berpamitan dengan santun dan mencium tangan orang tua sebelum berangkat ke sekolah merupakan wujud nyata norma kesopanan dan rasa hormat dalam keluarga.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Manfaat Mematuhi Norma',
    difficulty: 'Sukar',
    text: 'Jika warga di suatu lingkungan tempat tinggal sama sekali tidak mematuhi norma dan aturan yang disepakati bersama, dampak yang paling mungkin terjadi dalam kehidupan bermasyarakat adalah...',
    options: [
      { id: 'A', text: 'Suasana lingkungan menjadi sangat tertib, aman, dan damai' },
      { id: 'B', text: 'Terjadi perselisihan, ketidaknyamanan, dan hilangnya kerukunan antarwarga' },
      { id: 'C', text: 'Kegiatan gotong royong semakin mudah dilaksanakan setiap minggu' },
      { id: 'D', text: 'Semua warga merasa haknya terlindungi tanpa perlu aturan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tanpa kepatuhan terhadap norma, hak orang lain mudah dilanggar sehingga memicu perselisihan, kekacauan, dan hilangnya rasa aman dalam masyarakat.',
  },

  // =========================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (3 SOAL - MASING-MASING 3 OPSI)
  // =========================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Sejarah Perumusan & Pengesahan Pancasila',
    difficulty: 'Sedang',
    text: 'Pilihlah DUA pernyataan yang BENAR mengenai sejarah lahirnya Pancasila!',
    options: [
      { id: 'A', text: 'Ir. Soekarno menyampaikan pidato tentang Pancasila pada tanggal 1 Juni 1945 dalam sidang BPUPKI.' },
      { id: 'B', text: 'Rumusan Pancasila yang sah dalam Pembukaan UUD 1945 ditetapkan pada tanggal 22 Juni 1945 oleh BPUPKI.' },
      { id: 'C', text: 'Panitia Sembilan menghasilkan rumusan Piagam Jakarta yang kemudian disempurnakan oleh PPKI pada 18 Agustus 1945.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Pernyataan A dan C benar. Ir. Soekarno berpidato tentang Pancasila pada 1 Juni 1945, dan Piagam Jakarta (22 Juni 1945) disempurnakan lalu disahkan oleh PPKI pada 18 Agustus 1945 (bukan 22 Juni oleh BPUPKI).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Penerapan Norma Hukum di Jalan Raya',
    difficulty: 'Mudah',
    image: imgNormaHukum,
    imageCaption: 'Ilustrasi ketertiban lalu lintas saat lampu merah di persimpangan jalan.',
    text: 'Perhatikan gambar suasana lalu lintas di atas! Pilihlah DUA perilaku pada gambar yang menunjukkan kepatuhan terhadap norma hukum lalu lintas!',
    options: [
      { id: 'A', text: 'Pengendara sepeda motor mengenakan helm pelindung dan berhenti di belakang garis putih saat lampu merah.' },
      { id: 'B', text: 'Siswa menyeberang jalan dengan tertib di jalur zebra cross.' },
      { id: 'C', text: 'Pengendara mobil menerobos lampu merah agar cepat sampai ke sekolah.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Memakai helm, berhenti di belakang garis henti saat lampu merah, dan menyeberang di zebra cross merupakan bentuk kepatuhan terhadap norma hukum lalu lintas demi keselamatan bersama.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Penerapan Norma di Lingkungan Sekolah',
    difficulty: 'Sedang',
    text: 'Di sekolah, setiap siswa kelas 5 diharapkan menaati norma kesopanan dan norma kesusilaan. Pilihlah DUA contoh perilaku yang sesuai dengan kedua norma tersebut!',
    options: [
      { id: 'A', text: 'Berbicara memotong penjelasan guru saat pelajaran sedang berlangsung.' },
      { id: 'B', text: 'Mengakui kesalahan dengan jujur dan meminta maaf jika tidak sengaja menjatuhkan buku teman.' },
      { id: 'C', text: 'Mengucapkan terima kasih dan berbicara dengan bahasa yang santun kepada petugas kebersihan sekolah.' },
    ],
    correctAnswer: ['B', 'C'],
    explanation:
      'Mengakui kesalahan dengan jujur adalah wujud norma kesusilaan, sedangkan mengucapkan terima kasih dan berbicara santun merupakan wujud norma kesopanan.',
  },

  // =========================================================
  // BAGIAN 3: PGK KATEGORI BENAR / SALAH (9 SOAL - MASING-MASING 3 DESKRIPSI)
  // =========================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Sejarah Sidang BPUPKI Pertama',
    difficulty: 'Mudah',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai sidang pertama BPUPKI berikut ini:',
    statements: [
      {
        id: 's1',
        text: 'Sidang pertama BPUPKI dilaksanakan pada tanggal 29 Mei sampai 1 Juni 1945 untuk membahas rumusan dasar negara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ketua BPUPKI yang memimpin jalannya persidangan adalah Ir. Soekarno.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mr. Mohammad Yamin, Prof. Dr. Mr. Soepomo, dan Ir. Soekarno merupakan tiga tokoh yang menyampaikan usulan dasar negara.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Salah karena ketua BPUPKI adalah Dr. K.R.T. Radjiman Wedyodiningrat (Ir. Soekarno adalah ketua Panitia Sembilan dan PPKI). Pernyataan 3 Benar.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Panitia Sembilan & Semangat Persatuan',
    difficulty: 'Sukar',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan tentang peran Panitia Sembilan dan pengesahan Pancasila berikut:',
    statements: [
      {
        id: 's1',
        text: 'Panitia Sembilan beranggotakan 9 tokoh yang mewakili golongan kebangsaan dan golongan Islam.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada tanggal 18 Agustus 1945, sila pertama diubah menjadi "Ketuhanan Yang Maha Esa" demi menjaga persatuan bangsa.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Perubahan sila pertama tersebut dilakukan karena para tokoh tidak menghargai perbedaan agama.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Benar. Pernyataan 3 Salah, justru perubahan itu adalah wujud toleransi dan penghormatan terhadap keberagaman bangsa Indonesia.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Meneladani Sikap Perumus Pancasila',
    difficulty: 'Sedang',
    text: 'Perhatikan pernyataan-pernyataan tentang cara meneladani sikap para pendiri bangsa dalam kehidupan siswa kelas 5 SD. Tentukan Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Menghargai teman yang berbeda suku dan agama saat belajar kelompok di kelas.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memaksakan ide pribadi kepada seluruh anggota kelompok tanpa mau mendengarkan pendapat lain.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Rela meluangkan waktu untuk bergotong royong membersihkan halaman sekolah bersama teman-teman.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Menghargai perbedaan dan bergotong royong (1 & 3) adalah teladan sikap pendiri bangsa (Benar). Memaksakan kehendak bertentangan dengan nilai musyawarah (Salah).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Adab Bermusyawarah & Norma Kelas',
    difficulty: 'Sedang',
    image: imgMusyawarahKelas,
    imageCaption: 'Ilustrasi siswa kelas 5 bermusyawarah dengan tertib di ruang kelas.',
    text: 'Perhatikan gambar musyawarah kelas di atas! Tentukan Benar atau Salah pada pernyataan mengenai norma dan nilai Pancasila yang tampak pada gambar:',
    statements: [
      {
        id: 's1',
        text: 'Mengacungkan tangan terlebih dahulu sebelum berbicara menunjukkan kepatuhan pada norma kesopanan dan aturan diskusi kelas.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kegiatan musyawarah untuk mengambil keputusan kelas merupakan pengamalan Pancasila sila ke-4.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika pendapat kita tidak terpilih dalam musyawarah, kita berhak menolak menjalankan hasil keputusan kelas.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena hasil musyawarah mufakat wajib dihormati dan dilaksanakan bersama dengan penuh tanggung jawab.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Sumber & Macam-Macam Norma',
    difficulty: 'Mudah',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai sumber berlakunya norma di masyarakat:',
    statements: [
      {
        id: 's1',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa melalui ajaran dan kitab suci.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Norma kesusilaan bersumber dari peraturan lalu lintas yang ditetapkan oleh pemerintah daerah.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Norma hukum dibuat oleh lembaga negara yang berwenang dan bersifat memaksa.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Salah karena norma kesusilaan bersumber dari suara hati nurani manusia (peraturan lalu lintas adalah norma hukum). Pernyataan 3 Benar.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Analisis Sanksi Pelanggaran Norma',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan tentang akibat atau sanksi pelanggaran norma berikut:',
    statements: [
      {
        id: 's1',
        text: 'Sanksi pelanggaran norma kesusilaan dapat berupa rasa bersalah, malu, dan penyesalan dalam hati nurani.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pelanggaran norma hukum di jalan raya seperti tidak membawa SIM saat berkendara tidak memiliki sanksi apa pun.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Sanksi pelanggaran norma kesopanan di masyarakat dapat berupa teguran atau celaan sosial.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Salah karena pelanggaran norma hukum dikenai sanksi tegas (tilang/denda/pidana). Pernyataan 3 Benar.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Penerapan Norma di Rumah & Masyarakat',
    difficulty: 'Mudah',
    text: 'Tentukan Benar atau Salah mengenai penerapan norma dalam kehidupan sehari-hari di rumah dan lingkungan sekitar:',
    statements: [
      {
        id: 's1',
        text: 'Mengucapkan permisi sambil sedikit membungkukkan badan saat berjalan melewati orang tua adalah contoh norma kesopanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membuang sampah plastik ke selokan warga agar halaman rumah sendiri bersih termasuk mematuhi norma lingkungan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mengembalikan barang temuan kepada pemiliknya yang sah merupakan pengamalan norma kesusilaan dan agama.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 Benar. Pernyataan 2 Salah karena membuang sampah ke selokan merugikan warga lain (dapat menyebabkan banjir) dan melanggar aturan kebersihan lingkungan.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Hak dan Kewajiban Siswa Berdasarkan Norma',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai keseimbangan hak dan kewajiban siswa kelas 5 di sekolah:',
    statements: [
      {
        id: 's1',
        text: 'Mendapatkan pelajaran dan bimbingan dari guru di kelas merupakan hak setiap peserta didik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Datang tepat waktu dan mengenakan seragam sesuai jadwal sekolah merupakan kewajiban siswa.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa boleh menuntut nilai yang tinggi meskipun tidak pernah mengerjakan tugas sekolah.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena hak memperoleh penilaian yang baik harus diimbangi dengan kewajiban belajar dan mengerjakan tugas dengan sungguh-sungguh.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Peran Norma dalam Kerukunan Bangsa',
    difficulty: 'Sukar',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan tentang pentingnya norma dalam menjaga kerukunan dan persatuan:',
    statements: [
      {
        id: 's1',
        text: 'Kepatuhan warga terhadap norma membantu mencegah konflik dan mewujudkan kehidupan yang aman serta rukun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Norma hanya perlu dipatuhi saat ada petugas keamanan atau guru yang sedang mengawasi.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Nilai-nilai luhur Pancasila menjadi pedoman utama bagi seluruh norma yang berlaku di Indonesia.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Salah karena kepatuhan terhadap norma seharusnya timbul dari kesadaran diri, bukan hanya saat diawasi. Pernyataan 3 Benar.',
  },
];
