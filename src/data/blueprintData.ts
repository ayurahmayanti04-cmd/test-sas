import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 5) Mata Pelajaran Pendidikan Pancasila
 * Lingkup Materi: Sejarah Lahirnya Pancasila & Norma
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Pendidikan Pancasila Kelas 5 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami kronologi sejarah pembentukan lembaga perumus dasar negara Indonesia.',
    indikatorSoal:
      'Disajikan gambar ilustrasi sidang tahun 1945 dan deskripsi ketua sidang, peserta didik dapat mengidentifikasi nama lembaga BPUPKI secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi tokoh-tokoh perumus dasar negara pada sidang pertama BPUPKI.',
    indikatorSoal:
      'Disajikan narasi sidang pertama BPUPKI (29 Mei–1 Juni 1945), peserta didik dapat menentukan tiga tokoh penyampai usulan dasar negara secara berurutan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami peristiwa bersejarah lahirnya istilah Pancasila pada 1 Juni 1945.',
    indikatorSoal:
      'Disajikan narasi pidato Ir. Soekarno tanggal 1 Juni 1945, peserta didik dapat menentukan peringatan nasional yang dirayakan pada tanggal tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan arti kata Pancasila secara etimologis.',
    indikatorSoal:
      'Disajikan keterangan asal bahasa Sanskerta kata "panca" dan "sila", peserta didik dapat menentukan arti kedua kata tersebut dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan prinsip dasar negara usulan Ir. Soekarno dengan praktik musyawarah.',
    indikatorSoal:
      'Disajikan informasi tentang prinsip "Mufakat atau Demokrasi" dalam pidato 1 Juni 1945, peserta didik dapat menentukan cara pengambilan keputusan yang sesuai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami peran Panitia Sembilan dalam perumusan dasar negara.',
    indikatorSoal:
      'Disajikan gambar ilustrasi rapat Panitia Sembilan pada 22 Juni 1945, peserta didik dapat mengidentifikasi nama naskah hasil rumusan panitia tersebut (Piagam Jakarta).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi tanggal pengesahan Pancasila sebagai dasar negara dalam Pembukaan UUD 1945.',
    indikatorSoal:
      'Disajikan keterangan peran PPKI dalam pengesahan UUD 1945, peserta didik dapat menentukan tanggal pengesahan rumusan resmi Pancasila.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis alasan perubahan rumusan sila pertama Piagam Jakarta demi persatuan bangsa.',
    indikatorSoal:
      'Disajikan informasi perubahan sila pertama menjadi "Ketuhanan Yang Maha Esa" pada 18 Agustus 1945, peserta didik dapat menganalisis tujuan utama kesepakatan tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat meneladani sikap para tokoh perumus Pancasila dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan narasi perbedaan pendapat saat perumusan dasar negara, peserta didik dapat menentukan nilai keteladanan para pendiri bangsa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian norma dalam kehidupan bermasyarakat.',
    indikatorSoal:
      'Disajikan definisi aturan yang mengikat warga sebagai pedoman tingkah laku, peserta didik dapat mengidentifikasi istilah norma secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis-jenis norma berdasarkan sumbernya.',
    indikatorSoal:
      'Disajikan deskripsi norma yang bersumber dari wahyu Tuhan Yang Maha Esa melalui kitab suci, peserta didik dapat menentukan nama norma tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh penerapan norma kesopanan di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar ilustrasi siswa bersalaman dengan guru di gerbang sekolah, peserta didik dapat menentukan jenis norma yang diterapkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi perilaku yang sesuai dengan norma kesusilaan.',
    indikatorSoal:
      'Disajikan studi kasus siswa yang memilih bersikap jujur tidak menyontek saat ulangan, peserta didik dapat menentukan jenis norma dan sumbernya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ciri khas norma hukum dibandingkan norma lainnya.',
    indikatorSoal:
      'Disajikan pernyataan tentang sifat memaksa dan sanksi tegas norma hukum, peserta didik dapat menentukan alasan kekuatan mengikat norma hukum.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bentuk sanksi atas pelanggaran norma kesopanan.',
    indikatorSoal:
      'Disajikan kasus anak yang mendapat teguran dan dijauhi karena berbicara kasar, peserta didik dapat menentukan norma yang dilanggar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan hubungan keseimbangan hak dan kewajiban dalam mematuhi aturan sekolah.',
    indikatorSoal:
      'Disajikan konteks pelaksanaan piket kebersihan kelas 5, peserta didik dapat menentukan keterkaitan antara kewajiban piket dan hak belajar yang nyaman.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan norma kesopanan di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan empat pilihan tindakan di rumah, peserta didik dapat menentukan contoh penerapan norma kesopanan di keluarga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak apabila masyarakat mengabaikan norma yang berlaku.',
    indikatorSoal:
      'Disajikan kondisi masyarakat yang tidak mematuhi kesepakatan norma bersama, peserta didik dapat memprediksi akibat yang timbul.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi fakta sejarah perumusan dan pengesahan Pancasila.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang BPUPKI, Panitia Sembilan, dan PPKI, peserta didik dapat memilih dua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh kepatuhan norma hukum lalu lintas melalui stimulus visual.',
    indikatorSoal:
      'Disajikan gambar suasana ketertiban lalu lintas dan tiga opsi perilaku, peserta didik dapat memilih dua perilaku yang mematuhi norma hukum.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan contoh penerapan norma kesopanan dan kesusilaan di sekolah.',
    indikatorSoal:
      'Disajikan tiga opsi perilaku siswa di sekolah, peserta didik dapat memilih dua perilaku yang mencerminkan norma kesopanan dan kesusilaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi fakta sejarah sidang pertama BPUPKI.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang jadwal, ketua, dan tokoh pengusul dasar negara pada sidang BPUPKI I, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran Panitia Sembilan dan makna persatuan pada perubahan sila pertama.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang komposisi Panitia Sembilan dan perubahan sila pertama 18 Agustus 1945, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengaitkan keteladanan perumus Pancasila dengan perilaku siswa di kelas.',
    indikatorSoal:
      'Disajikan tiga deskripsi sikap siswa dalam kerja kelompok dan gotong royong, peserta didik dapat menentukan kesesuaiannya dengan teladan perumus Pancasila (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan adab bermusyawarah (norma kesopanan) dan sila ke-4 Pancasila.',
    indikatorSoal:
      'Disajikan gambar musyawarah siswa kelas 5 dan tiga pernyataan, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) terkait tata tertib musyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan macam-macam norma beserta sumbernya.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai sumber norma agama, kesusilaan, dan hukum, peserta didik dapat menilai kebenaran setiap pernyataan (Benar/Salah).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sanksi yang timbul akibat pelanggaran berbagai jenis norma.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang sanksi norma kesusilaan, hukum, dan kesopanan, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menilai penerapan norma dalam kehidupan keluarga dan masyarakat sekitar.',
    indikatorSoal:
      'Disajikan tiga contoh perilaku sehari-hari di rumah dan lingkungan warga, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami keseimbangan pelaksanaan kewajiban dan hak siswa sesuai aturan sekolah.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang hak menerima pembelajaran serta kewajiban menaati tata tertib sekolah, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menyimpulkan peran norma dan nilai Pancasila dalam menjaga ketertiban dan kerukunan bangsa.',
    indikatorSoal:
      'Disajikan tiga pernyataan reflektif mengenai kesadaran mematuhi norma dan kedudukan Pancasila, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen = q.elemen || (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif || (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} dalam kehidupan sehari-hari.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('norma') ||
    t.includes('aturan') ||
    t.includes('hukum') ||
    t.includes('kesopanan') ||
    t.includes('kesusilaan') ||
    t.includes('hak') ||
    t.includes('kewajiban') ||
    t.includes('uud')
  ) {
    return 'UUD NRI Tahun 1945';
  }
  return 'Pancasila';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
