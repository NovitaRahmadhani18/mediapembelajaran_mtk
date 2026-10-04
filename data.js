// Enhanced Data Model for Multimedia Pembelajaran Interaktif Pecahan Kelas 4 SD

const APP_DATA = {
    characters: [
        {
            id: 'dino',
            name: 'Dino Pecahan',
            title: 'Penjelajah Pemberani',
            avatar: '🦕',
            color: '#10B981',
            badge: 'Petualang Handal',
            greeting: 'Halo kawan cerdas! Aku Dino si pecinta pizza! Yuk kita bagi makanan enak ini bersama!'
        },
        {
            id: 'kancil',
            name: 'Kancil Cerdik',
            title: 'Ahli Trik & Logika',
            avatar: '🦊',
            color: '#F59E0B',
            badge: 'Pakar Logika',
            greeting: 'Hai teman pintar! Aku Kancil. Aku punya cara kilat membandingkan pecahan loh!'
        },
        {
            id: 'robot',
            name: 'Robo Matika',
            title: 'Penghitung Super Cepat',
            avatar: '🤖',
            color: '#3B82F6',
            badge: 'Mesin Pintar',
            greeting: 'Bip-bop! Sistem siap. Mari kita taklukkan pecahan senilai sampai dapat nilai 100!'
        },
        {
            id: 'bintang',
            name: 'Bintang Prestasi',
            title: 'Bintang Juara',
            avatar: '⭐',
            color: '#EC4899',
            badge: 'Juara Kelas',
            greeting: 'Semangat juara! Belajar matematika itu seru dan asyik seperti bermain game!'
        },
        {
            id: 'kapten',
            name: 'Kapten Singa',
            title: 'Nahkoda Petualang',
            avatar: '🦁',
            color: '#8B5CF6',
            badge: 'Pemimpin Cilik',
            greeting: 'Ahooy! Kapten siap memandumu berlayar mengarungi samudra pecahan ajaib!'
        },
        {
            id: 'kelinci',
            name: 'Mimi Kelinci',
            title: 'Koki Kue Ceria',
            avatar: '🐰',
            color: '#06B6D4',
            badge: 'Koki Cilik',
            greeting: 'Halo! Aku Mimi si koki kue! Yuk potong kue cokelat dan kue stroberi bersama!'
        }
    ],

    cptp: {
        kurikulum: "Kurikulum Merdeka - Matematika Fase B (Kelas 4 SD)",
        elemen: "Bilangan (Pecahan Sederhana)",
        capaianPembelajaran: "Pada akhir Fase B, peserta didik dapat memahami dan membandingkan pecahan senilai, pecahan biasa dan pecahan campuran, serta mengenali pecahan desimal persepuluhan dan perseratusan, serta menghubungkan pecahan desimal dengan persen.",
        tujuanPembelajaran: [
            {
                kode: "TP 1",
                text: "Memahami pecahan sebagai bagian dari suatu benda utuh dengan benda konkret (pizza, cokelat, kue) secara visual."
            },
            {
                kode: "TP 2",
                text: "Menemukan dan membuktikan pecahan senilai menggunakan gambar balok dan perkalian/pembagian angka yang sama."
            },
            {
                kode: "TP 3",
                text: "Membandingkan dan mengurutkan pecahan (sama penyebut maupun beda penyebut) menggunakan tanda >, <, atau =."
            },
            {
                kode: "TP 4",
                text: "Mengubah bentuk pecahan biasa ke pecahan campuran, desimal persepuluhan, dan persen (%)."
            }
        ],
        indikator: [
            "Menyebutkan angka Pembilang (bagian atas) dan Penyebut (bagian bawah).",
            "Mengarsir gambar pecahan dan membaca lambang pecahan dengan tepat.",
            "Menentukan 3 pecahan yang senilai dengan pecahan yang diketahui.",
            "Membandingkan 2 pecahan dengan metode perkalian silang.",
            "Menyelesaikan soal cerita sehari-hari mengenai pembagian makanan."
        ]
    },

    guides: {
        panduan: [
            {
                step: 1,
                icon: "👤",
                title: "1. Masuk & Pilih Avatar Sahabatmu",
                desc: "Ketik namamu, pilih kelas, dan pilih salah satu karakter hewan atau robot lucu yang akan menemanimu."
            },
            {
                step: 2,
                icon: "🍕",
                title: "2. Coba Simulator & Eksplorasi Materi",
                desc: "Buka menu Materi! Kamu bisa memotong pizza, menggeser balok pecahan senilai, dan main timbangan pecahan."
            },
            {
                step: 3,
                icon: "🎬",
                title: "3. Tonton Video Animasi Seru",
                desc: "Tonton video kartun interaktif agar kamu makin paham trik cepat menghitung pecahan."
            },
            {
                step: 4,
                icon: "🎮",
                title: "4. Mainkan 3 Game Edukasi",
                desc: "Jadilah Koki Pizza, tembak balon pecahan senilai, dan temukan pasangan kartu ajaib untuk mengumpulkan Bintang!"
            },
            {
                step: 5,
                icon: "🏆",
                title: "5. Raih Sertifikat Prestasi Emas",
                desc: "Selesaikan 10 soal evaluasi dan unduh sertifikat kelulusan resmi dengan namamu untuk dicetak!"
            }
        ],
        petunjuk: [
            { icon: "🏠", name: "Beranda Utama", desc: "Kembali ke peta menu petualangan kapan saja." },
            { icon: "🎵", name: "Musik & Efek Suara", desc: "Klik untuk menyalakan/mematikan melodi latar yang ceria." },
            { icon: "💡", name: "Lampu Petunjuk / Bantuan", desc: "Klik saat kesulitan untuk melihat trik rahasia menjawab soal." },
            { icon: "🔄", name: "Ulangi / Reset", desc: "Mulai kembali simulasi atau permainan dari awal." },
            { icon: "🖨️", name: "Cetak Piagam", desc: "Simpan sertifikat hasil belajar dalam format PDF atau cetak ke printer." },
            { icon: "⭐", name: "Poin Bintang Prestasi", desc: "Kumpulkan bintang emas di setiap aktivitas untuk menjadi Master Pecahan!" }
        ]
    },

    materiList: [
        {
            id: 'konsep-dasar',
            title: '1. Apa itu Pecahan? (Pizza & Cokelat)',
            icon: '🍕',
            summary: 'Pecahan adalah bagian dari benda utuh yang dipotong sama besar.',
            content: `
                <div class="materi-container">
                    <div class="story-bubble">
                        <div class="story-avatar">🍕</div>
                        <div class="story-text">
                            <strong>Cerita Dino & Mimi:</strong> "Dino punya <strong>1 loyang pizza utuh</strong>. Dino memotongnya menjadi <strong>4 potong sama besar</strong>, lalu memakan <strong>1 potong</strong>. Nah, bagian yang dimakan Dino adalah <strong>1/4 (satu per empat)</strong>!"
                        </div>
                    </div>

                    <div class="concept-cards-row">
                        <div class="concept-card top-card">
                            <span class="number-tag num-color" id="conceptNum">1</span>
                            <h4>PEMBILANG (Bagian Atas)</h4>
                            <p>Menunjukkan <strong>berapa potong yang diambil, dimakan, atau diwarnai</strong>.</p>
                        </div>
                        <div class="concept-card divider-card">
                            <span style="font-size: 2.5rem; font-weight: 900; color: #4F46E5;">—</span>
                            <small>Garis Pemisah (Per)</small>
                        </div>
                        <div class="concept-card bot-card">
                            <span class="number-tag den-color" id="conceptDen">4</span>
                            <h4>PENYEBUT (Bagian Bawah)</h4>
                            <p>Menunjukkan <strong>total SEMUA potongan yang sama besar</strong>.</p>
                        </div>
                    </div>

                    <div class="interactive-lab-card">
                        <div class="lab-badge">🧪 LABORATORIUM INTERAKTIF: PEMOTONG PIZZA & COKELAT</div>
                        <p style="text-align: center; margin-bottom: 12px;">Geser tuas di bawah ini untuk melihat potongan pizza berubah secara langsung:</p>
                        
                        <div class="sliders-box">
                            <div class="slider-item">
                                <label>🍕 Potongan yang dimakan (Pembilang): <strong id="numVal" class="badge-tag">1</strong></label>
                                <input type="range" id="inputNum" min="1" max="8" value="1">
                            </div>
                            <div class="slider-item">
                                <label>🔪 Total semua potongan (Penyebut): <strong id="denVal" class="badge-tag">4</strong></label>
                                <input type="range" id="inputDen" min="2" max="8" value="4">
                            </div>
                        </div>

                        <div class="interactive-display-flex">
                            <div class="pizza-svg-container">
                                <svg id="pizzaSvg" width="220" height="220" viewBox="0 0 200 200"></svg>
                            </div>
                            <div class="pizza-readout-card">
                                <span class="readout-title">Nilai Pecahan:</span>
                                <div class="giant-fraction">
                                    <span id="giantNum">1</span>
                                    <div class="giant-line"></div>
                                    <span id="giantDen">4</span>
                                </div>
                                <div class="readout-text" id="fractionWordLabel">"Satu per Empat Bagian"</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'pecahan-senilai',
            title: '2. Rahasia Pecahan Senilai (Balok Ajaib)',
            icon: '⚖️',
            summary: 'Pecahan senilai punya luas daerah yang sama besar walau angkanya berbeda!',
            content: `
                <div class="materi-container">
                    <div class="story-bubble">
                        <div class="story-avatar">🍫</div>
                        <div class="story-text">
                            <strong>Trik Kancil:</strong> "Makan <strong>1 dari 2 potong cokelat (1/2)</strong> ternyata SAMA BANYAKNYA dengan makan <strong>2 dari 4 potong cokelat (2/4)</strong> atau <strong>4 dari 8 potong (4/8)</strong>! Inilah yang disebut <strong>Pecahan Senilai</strong>!"
                        </div>
                    </div>

                    <div class="secret-box">
                        <h3>🔑 Rumus Rahasia Menemukan Pecahan Senilai:</h3>
                        <p>Kalikan (atau bagilah) angka <strong>atas dan bawah</strong> dengan <strong>angka yang sama</strong>!</p>
                        <div class="formula-pills">
                            <div class="pill">1/2 &times; 2/2 = <strong>2/4</strong></div>
                            <div class="pill">1/2 &times; 3/3 = <strong>3/6</strong></div>
                            <div class="pill">1/2 &times; 4/4 = <strong>4/8</strong></div>
                        </div>
                    </div>

                    <div class="interactive-lab-card">
                        <div class="lab-badge">🧪 BUKTI VISUAL: BALOK COKELAT SENILAI</div>
                        <p style="text-align: center; margin-bottom: 16px;">Lihat! Semua balok di bawah ini memiliki panjang warna hijau yang <strong>sama persis (50%)</strong>:</p>

                        <div class="bars-interactive-list">
                            <div class="bar-unit">
                                <span class="unit-label">1/2</span>
                                <div class="unit-track">
                                    <div class="unit-fill" style="width: 50%; background: #10B981;">1 dari 2 potong</div>
                                </div>
                            </div>
                            <div class="bar-unit">
                                <span class="unit-label">2/4</span>
                                <div class="unit-track">
                                    <div class="unit-fill" style="width: 50%; background: #3B82F6;">2 dari 4 potong</div>
                                </div>
                            </div>
                            <div class="bar-unit">
                                <span class="unit-label">3/6</span>
                                <div class="unit-track">
                                    <div class="unit-fill" style="width: 50%; background: #EC4899;">3 dari 6 potong</div>
                                </div>
                            </div>
                            <div class="bar-unit">
                                <span class="unit-label">4/8</span>
                                <div class="unit-track">
                                    <div class="unit-fill" style="width: 50%; background: #F59E0B;">4 dari 8 potong</div>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: center; margin-top: 14px; font-weight: 800; color: #10B981; font-size: 1.1rem;">
                            ✨ Kesimpulan: 1/2 = 2/4 = 3/6 = 4/8 (Semuanya Senilai!)
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'membandingkan-pecahan',
            title: '3. Timbangan Pembanding Pecahan',
            icon: '📊',
            summary: 'Gunakan tanda > (lebih besar), < (lebih kecil), atau = (sama dengan).',
            content: `
                <div class="materi-container">
                    <div class="rules-grid">
                        <div class="rule-card">
                            <div class="rule-icon">🟢</div>
                            <h4>Aturan 1: Bawahnya Sama (Penyebut Sama)</h4>
                            <p>Tinggal lihat angka atasnya! Siapa yang angkanya lebih besar, dialah pemenangnya.</p>
                            <div class="example-pill">Contoh: <strong>3/5 > 1/5</strong> (karena 3 lebih banyak dari 1)</div>
                        </div>
                        <div class="rule-card">
                            <div class="rule-icon">⚡</div>
                            <h4>Aturan 2: Bawahnya Beda (Trik Silang Kupu-Kupu!)</h4>
                            <p>Kalikan silang atas kiri &times; bawah kanan, lalu atas kanan &times; bawah kiri.</p>
                            <div class="example-pill">Bandingkan <strong>2/3</strong> dengan <strong>3/4</strong><br>2&times;4=<strong>8</strong> vs 3&times;3=<strong>9</strong> &rarr; Karena 8 < 9, maka <strong>2/3 < 3/4</strong>!</div>
                        </div>
                    </div>

                    <div class="interactive-lab-card">
                        <div class="lab-badge">🧪 TIMBANGAN JUNGKAT-JUNGKIT INTERAKTIF</div>
                        <p style="text-align: center; margin-bottom: 12px;">Pilih 2 pecahan untuk melihat jungkat-jungkit bergerak:</p>

                        <div class="see-saw-wrapper">
                            <div class="seesaw-side">
                                <label>Pecahan Kiri:</label>
                                <select id="compA" class="app-select-large">
                                    <option value="0.25">1/4 (Satu per Empat)</option>
                                    <option value="0.333">1/3 (Satu per Tiga)</option>
                                    <option value="0.5" selected>1/2 (Satu per Dua)</option>
                                    <option value="0.75">3/4 (Tiga per Empat)</option>
                                    <option value="0.8">4/5 (Empat per Lima)</option>
                                </select>
                            </div>

                            <div class="seesaw-center-badge" id="compSymbol">=</div>

                            <div class="seesaw-side">
                                <label>Pecahan Kanan:</label>
                                <select id="compB" class="app-select-large">
                                    <option value="0.25">1/4 (Satu per Empat)</option>
                                    <option value="0.333">1/3 (Satu per Tiga)</option>
                                    <option value="0.5">1/2 (Satu per Dua)</option>
                                    <option value="0.75" selected>3/4 (Tiga per Empat)</option>
                                    <option value="0.8">4/5 (Empat per Lima)</option>
                                </select>
                            </div>
                        </div>

                        <div class="seesaw-animation-bar" id="seesawBar">
                            <div class="seesaw-weight left-weight" id="leftWeight">1/2</div>
                            <div class="seesaw-pivot">▲</div>
                            <div class="seesaw-weight right-weight" id="rightWeight">3/4</div>
                        </div>

                        <div class="result-banner" id="compResult">1/2 lebih KECIL dari 3/4 (1/2 < 3/4)</div>
                    </div>
                </div>
            `
        },
        {
            id: 'campuran-desimal-persen',
            title: '4. Pecahan Campuran, Desimal & Persen',
            icon: '💎',
            summary: 'Mengenal bentuk pecahan campuran (1 1/2), desimal (0,5), dan persen (50%).',
            content: `
                <div class="materi-container">
                    <div class="trio-grid">
                        <div class="trio-card card-purple">
                            <div class="trio-icon">🥞</div>
                            <h4>Pecahan Campuran</h4>
                            <p>Ada bilangan bulat dan pecahan biasa karena lebih dari 1 benda utuh.</p>
                            <div class="trio-sample">5/4 = <strong>1 1/4</strong></div>
                            <small>Artinya 1 martabak utuh + 1/4 potong martabak.</small>
                        </div>

                        <div class="trio-card card-blue">
                            <div class="trio-icon">🔢</div>
                            <h4>Pecahan Desimal</h4>
                            <p>Pecahan persepuluhan atau perseratusan yang ditulis dengan tanda koma (,).</p>
                            <div class="trio-sample">1/2 = <strong>0,5</strong><br>1/4 = <strong>0,25</strong></div>
                        </div>

                        <div class="trio-card card-pink">
                            <div class="trio-icon">💯</div>
                            <h4>Bentuk Persen (%)</h4>
                            <p>Artinya "per seratus". Sangat sering ditemui saat diskon mainan!</p>
                            <div class="trio-sample">1/2 = 50/100 = <strong>50%</strong><br>1/4 = 25/100 = <strong>25%</strong></div>
                        </div>
                    </div>
                </div>
            `
        }
    ],

    videos: [
        {
            id: "vid1",
            title: "1. Mengenal Konsep Pecahan dengan Pizza & Cokelat",
            durasi: "04:15",
            thumb: "🍕",
            desc: "Belajar memahami pembilang dan penyebut bersama animasi pizza yang lezat.",
            embedUrl: "https://www.youtube-nocookie.com/embed/n0FZhQ_GkKw",
            points: [
                "Pecahan adalah bagian dari benda utuh yang dipotong sama besar.",
                "Angka atas adalah Pembilang (potongan yang diambil).",
                "Angka bawah adalah Penyebut (total seluruh potongan)."
            ]
        },
        {
            id: "vid2",
            title: "2. Trik Ajaib Menemukan Pecahan Senilai",
            durasi: "05:30",
            thumb: "⚖️",
            desc: "Cara mudah mengalikan angka atas dan bawah agar nilainya tetap sama.",
            embedUrl: "https://www.youtube-nocookie.com/embed/6iW_i8E6GHY",
            points: [
                "Kalikan pembilang dan penyebut dengan angka yang sama.",
                "1/2 sama besarnya dengan 2/4, 3/6, dan 4/8.",
                "Gunakan pembagian untuk menyederhanakan pecahan."
            ]
        },
        {
            id: "vid3",
            title: "3. Trik Kupu-Kupu Membandingkan Pecahan",
            durasi: "06:10",
            thumb: "🦋",
            desc: "Trik perkalian silang super cepat membandingkan pecahan beda penyebut.",
            embedUrl: "https://www.youtube-nocookie.com/embed/n3n7hYVj_i8",
            points: [
                "Perkalian silang: atas kiri dikali bawah kanan.",
                "Bandingkan dua angka hasil kali untuk menentukan tanda <, >, atau =.",
                "Pecahan yang nilainya sama diberi tanda sama dengan (=)."
            ]
        }
    ],

    latihanQuestions: [
        {
            id: 1,
            type: 'visual',
            question: "Perhatikan gambar pizza di bawah! Berapakah nilai pecahan dari potongan yang diwarnai merah?",
            totalSlices: 4,
            shadedSlices: 3,
            options: ["1/4 (Satu per Empat)", "2/4 (Dua per Empat)", "3/4 (Tiga per Empat)", "4/3 (Empat per Tiga)"],
            correct: 2,
            hint: "Hitung potongan merah (ada 3) lalu pasangkan dengan total semua potongan (ada 4).",
            explanation: "Ada 3 potong berwarna merah dari total 4 potongan sama besar, maka nilainya adalah 3/4."
        },
        {
            id: 2,
            type: 'text',
            question: "Pada pecahan 5/8, angka 5 disebut sebagai...",
            options: ["Pembilang (Atas)", "Penyebut (Bawah)", "Pecahan Campuran", "Hasil Bagi"],
            correct: 0,
            hint: "Angka atas adalah bagian yang diambil/dimakan.",
            explanation: "Angka yang berada di sebelah atas tanda per disebut Pembilang."
        },
        {
            id: 3,
            type: 'visual',
            question: "Manakah pecahan di bawah ini yang SENILAI dengan 1/2?",
            totalSlices: 6,
            shadedSlices: 3,
            options: ["2/5", "3/6", "1/4", "3/8"],
            correct: 1,
            hint: "Coba kalikan atas dan bawah dengan angka 3! 1x3 / 2x3 = ?",
            explanation: "1/2 dikalikan 3/3 = 3/6. Jadi 1/2 senilai dengan 3/6."
        },
        {
            id: 4,
            type: 'compare',
            question: "Bandingkan kedua pecahan berikut: 2/7 ... 5/7. Tanda yang tepat adalah...",
            options: ["> (Lebih besar)", "< (Lebih kecil)", "= (Sama dengan)", ">= (Lebih besar sama dengan)"],
            correct: 1,
            hint: "Karena penyebutnya sama (7), bandingkan angka 2 dan 5.",
            explanation: "Karena 2 lebih kecil dari 5, maka 2/7 < 5/7."
        },
        {
            id: 5,
            type: 'text',
            question: "Bentuk pecahan campuran dari 7/3 adalah...",
            options: ["2 1/3", "1 4/3", "2 2/3", "3 1/3"],
            correct: 0,
            hint: "7 dibagi 3 dapat 2, sisa 1.",
            explanation: "7 : 3 = 2 sisa 1. Jadi bentuk campurannya adalah 2 1/3."
        },
        {
            id: 6,
            type: 'visual',
            question: "Pecahan 1/2 jika diubah ke dalam bentuk persen (%) adalah...",
            totalSlices: 2,
            shadedSlices: 1,
            options: ["25%", "50%", "75%", "100%"],
            correct: 1,
            hint: "Setengah dari 100 adalah 50.",
            explanation: "1/2 = 50/100 = 50%."
        },
        {
            id: 7,
            type: 'text',
            question: "Ibu membagi semangka menjadi 8 potong sama besar. Dimakan Budi 2 potong dan dimakan Ani 2 potong. Berapa bagian semangka yang sudah dimakan?",
            options: ["2/8 bagian", "4/8 bagian", "6/8 bagian", "8/8 bagian"],
            correct: 1,
            hint: "Tambahkan potongan Budi (2) + Ani (2) = 4 potong.",
            explanation: "2 potong + 2 potong = 4 potong dari total 8 potong = 4/8 bagian (senilai dengan 1/2)."
        },
        {
            id: 8,
            type: 'text',
            question: "Manakah perbandingan pecahan yang BENAR menggunakan trik silang?",
            options: ["1/3 > 2/3", "3/4 > 1/2", "1/5 > 4/5", "2/4 = 3/4"],
            correct: 1,
            hint: "3/4 (0,75) lebih besar dari 1/2 (0,50).",
            explanation: "3x2 = 6, 4x1 = 4. Karena 6 > 4, maka 3/4 > 1/2 adalah BENAR."
        },
        {
            id: 9,
            type: 'text',
            question: "Bentuk desimal dari pecahan 1/4 adalah...",
            options: ["0,5", "0,25", "0,75", "0,14"],
            correct: 1,
            hint: "1/4 sama dengan 25/100.",
            explanation: "1/4 dikali 25/25 menjadi 25/100, yang dalam desimal ditulis 0,25."
        },
        {
            id: 10,
            type: 'text',
            question: "Manakah pecahan yang LEBIH KECIL dari 1/2?",
            options: ["2/3", "3/4", "1/3", "4/8"],
            correct: 2,
            hint: "Bandingkan masing-masing pecahan dengan 1/2. Mana yang kurang dari separuh?",
            explanation: "1/3 lebih kecil dari 1/2. Jika memakai trik silang: 1x2 = 2 dan 3x1 = 3 (2 < 3, jadi 1/3 < 1/2)."
        }
    ],

    evaluasiQuestions: [
        {
            id: 1,
            q: "Sebuah pizza dipotong menjadi 6 bagian sama besar. Rina memakan 2 bagian. Bagian pizza yang dimakan Rina bernilai...",
            options: ["2/6", "4/6", "6/2", "1/6"],
            answer: 0,
            point: 10
        },
        {
            id: 2,
            q: "Pada pecahan 3/10, angka 10 disebut...",
            options: ["Pembilang", "Penyebut", "Pecahan Desimal", "Hasil Kali"],
            answer: 1,
            point: 10
        },
        {
            id: 3,
            q: "Pecahan berikut yang SENILAI dengan 3/4 adalah...",
            options: ["6/8", "5/8", "6/10", "4/5"],
            answer: 0,
            point: 10
        },
        {
            id: 4,
            q: "Bentuk paling sederhana dari pecahan 8/12 adalah...",
            options: ["4/6", "2/3", "1/2", "3/4"],
            answer: 1,
            point: 10
        },
        {
            id: 5,
            q: "Tanda perbandingan yang tepat untuk 5/9 ... 3/9 adalah...",
            options: ["<", ">", "=", "+"],
            answer: 1,
            point: 10
        },
        {
            id: 6,
            q: "Bandingkan pecahan 1/2 ... 2/3 dengan trik silang! Tanda yang tepat adalah...",
            options: [">", "<", "=", "&ge;"],
            answer: 1,
            point: 10
        },
        {
            id: 7,
            q: "Urutan pecahan 1/4, 3/4, 2/4 dari yang TERKECIL adalah...",
            options: ["1/4, 2/4, 3/4", "3/4, 2/4, 1/4", "2/4, 1/4, 3/4", "1/4, 3/4, 2/4"],
            answer: 0,
            point: 10
        },
        {
            id: 8,
            q: "Pecahan 9/4 jika diubah ke bentuk pecahan campuran adalah...",
            options: ["2 1/4", "2 3/4", "1 5/4", "3 1/4"],
            answer: 0,
            point: 10
        },
        {
            id: 9,
            q: "Bentuk persen (%) dari pecahan 3/4 adalah...",
            options: ["25%", "50%", "75%", "100%"],
            answer: 2,
            point: 10
        },
        {
            id: 10,
            q: "Doni memiliki 1 cokelat utuh berisi 10 baris. Diberikan ke adik 3 baris dan kakak 4 baris. Sisa cokelat Doni adalah...",
            options: ["3/10", "7/10", "2/10", "5/10"],
            answer: 0,
            point: 10
        }
    ],

    duelQuestions: [
        {
            q: "Manakah pecahan yang senilai dengan 1/2?",
            options: ["2/4", "1/3", "3/5", "2/6"],
            correct: 0
        },
        {
            q: "Bandingkan: 3/7 ... 5/7",
            options: [">", "<", "=", "+"],
            correct: 1
        },
        {
            q: "Bentuk persen (%) dari 1/4 adalah...",
            options: ["10%", "20%", "25%", "50%"],
            correct: 2
        },
        {
            q: "Bentuk campuran dari 5/2 adalah...",
            options: ["2 1/2", "1 1/2", "2 2/3", "3 1/2"],
            correct: 0
        },
        {
            q: "Pada pecahan 4/9, angka 9 disebut...",
            options: ["Pembilang", "Penyebut", "Faktor", "Kelipatan"],
            correct: 1
        },
        {
            q: "Bandingkan dengan trik silang: 2/3 ... 3/4",
            options: [">", "<", "=", "&ge;"],
            correct: 1
        },
        {
            q: "Pecahan yang senilai dengan 3/5 adalah...",
            options: ["6/10", "4/5", "6/15", "5/3"],
            correct: 0
        },
        {
            q: "Bentuk desimal dari pecahan 1/2 adalah...",
            options: ["0,2", "0,5", "0,25", "1,2"],
            correct: 1
        },
        {
            q: "Pecahan paling sederhana dari 4/8 adalah...",
            options: ["2/4", "1/2", "1/4", "3/6"],
            correct: 1
        },
        {
            q: "Urutkan dari terkecil: 1/5, 4/5, 2/5",
            options: ["1/5, 2/5, 4/5", "4/5, 2/5, 1/5", "2/5, 1/5, 4/5", "1/5, 4/5, 2/5"],
            correct: 0
        }
    ],

    wheelChallenges: [
        { label: "🍕 Tantangan Pizza", desc: "Jika 1 pizza dipotong 8 bagian dan dimakan 3 potong, berapa bagian yang tersisa?", ans: "5/8 bagian" },
        { label: "⚖️ Senilai Kilat", desc: "Sebutkan 2 pecahan yang senilai dengan 2/3!", ans: "4/6 dan 6/9" },
        { label: "🦋 Trik Silang", desc: "Mana yang lebih besar: 3/5 atau 2/4? Buktikan dengan perkalian silang!", ans: "3/5 > 2/4 (karena 3x4=12 > 5x2=10)" },
        { label: "🥞 Ubah Campuran", desc: "Ubah pecahan biasa 11/3 menjadi pecahan campuran!", ans: "3 2/3<br><br><span style='font-size: 0.95rem; font-weight: 500; color: #065F46;'><strong>📖 Penjelasan:</strong> Pecahan 11/3 berarti 11 dibagi 3. Hasil pembagian utuh adalah 3 (karena 3 x 3 = 9). Sisa dari pembagian tersebut adalah 2 (dari 11 - 9). Maka, bilangan bulat utuhnya adalah 3, dan sisanya (2) ditulis sebagai pecahan dengan penyebut awal, sehingga bentuknya menjadi 3 2/3.</span>" },
        { label: "💯 Tebak Persen", desc: "Berapa persen (%) nilai dari pecahan 3/4?", ans: "75%" },
        { label: "⭐ Bonus Kelas", desc: "Hore! Semua kelompok di kelas mendapat 50 Bintang Prestasi!", ans: "Bonus +50 ⭐" }
    ]
};
