// Enhanced Data Model for Multimedia Pembelajaran Interaktif Pecahan

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
        kurikulum: "Kurikulum Merdeka - Matematika",
        elemen: "Bilangan (Pecahan Sederhana)",
        capaianPembelajaran: "Peserta didik dapat memahami dan membandingkan pecahan senilai, pecahan biasa dan pecahan campuran, serta mengenali pecahan desimal persepuluhan dan perseratusan, serta menghubungkan pecahan desimal dengan persen.",
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
                            <strong>Cerita Dino & Mimi:</strong> "Dino punya <strong>1 loyang pizza utuh</strong>. Dino memotongnya menjadi <strong>4 potong sama besar</strong>, lalu memakan <strong>1 potong</strong>. Nah, bagian yang dimakan Dino adalah <strong><span class=\'frac\'><span>1</span><span>4</span></span> (satu per empat)</strong>!"
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
                    <p style="color: #475569; font-size: 1.1rem; margin-bottom: 20px;">Dua pecahan bentuknya berbeda, tetapi menunjuk bagian yang sama besar.</p>
                    
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: stretch; margin-bottom: 24px;">
                        
                        <!-- Left Side: Visual Bars -->
                        <div style="flex: 1; min-width: 300px; background: #F0F9FF; border-radius: 16px; padding: 24px; border: 2px solid #BAE6FD;">
                            <div style="font-size: 2rem; font-weight: 800; color: #0369A1; margin-bottom: 20px;">
                                <span class=\'frac\'><span>1</span><span>2</span></span> = <span class=\'frac\'><span>2</span><span>4</span></span>
                            </div>
                            
                            <!-- Bar <span class=\'frac\'><span>1</span><span>2</span></span> -->
                            <div style="display: flex; width: 100%; height: 40px; border: 2px solid #1E293B; border-radius: 8px; overflow: hidden; margin-bottom: 10px;">
                                <div style="flex: 1; background: #F59E0B; border-right: 2px solid #1E293B;"></div>
                                <div style="flex: 1; background: white;"></div>
                            </div>
                            
                            <!-- Bar <span class=\'frac\'><span>2</span><span>4</span></span> -->
                            <div style="display: flex; width: 100%; height: 40px; border: 2px solid #1E293B; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                                <div style="flex: 1; background: #F59E0B; border-right: 2px solid #1E293B;"></div>
                                <div style="flex: 1; background: #F59E0B; border-right: 2px solid #1E293B;"></div>
                                <div style="flex: 1; background: white; border-right: 2px solid #1E293B;"></div>
                                <div style="flex: 1; background: white;"></div>
                            </div>

                            <p style="color: #334155; font-size: 0.95rem; line-height: 1.5; font-style: italic;">
                                Setengah batang sama panjang dengan dua perempat batang.
                            </p>
                        </div>

                        <!-- Right Side: Explanation Steps -->
                        <div style="flex: 1; min-width: 300px; background: #FFFBEB; border-radius: 16px; padding: 24px; border: 2px solid #FDE68A;">
                            <h4 style="color: #B45309; margin-bottom: 16px; font-size: 1.1rem;">Urutan panjang batang:</h4>
                            
                            <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                1) Warna <strong>1 dari 2</strong> bagian batang pertama.
                            </div>
                            
                            <div style="background: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                2) Warna <strong>2 dari 4</strong> bagian batang kedua.
                            </div>
                            
                            <div style="background: white; padding: 12px 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                3) Panjangnya sama! <strong><span class=\'frac\'><span>1</span><span>2</span></span> = <span class=\'frac\'><span>2</span><span>4</span></span></strong>, nilainya sama besar.
                            </div>
                        </div>

                    </div>

                    <!-- Mini Exercise -->
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 2px dashed #CBD5E1;">
                        <p style="font-weight: 800; color: #1E293B; font-size: 1.1rem; margin-bottom: 12px;">Latihan: Pecahan senilai dengan <span class=\'frac\'><span>1</span><span>2</span></span> ialah ...</p>
                        
                        <div style="display: flex; gap: 12px;">
                            <button id="btnLatihanBenar" style="background: white; border: 2px dashed #94A3B8; border-radius: 12px; padding: 10px 24px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: 0.2s;"><span class=\'frac\'><span>2</span><span>4</span></span></button>
                            <button id="btnLatihanSalah" style="background: white; border: 2px dashed #94A3B8; border-radius: 12px; padding: 10px 24px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: 0.2s;"><span class=\'frac\'><span>1</span><span>4</span></span></button>
                        </div>
                        <div id="latihanFeedback" style="margin-top: 16px; font-weight: 800; font-size: 1.1rem; min-height: 24px;"></div>
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
                            <div class="example-pill">Contoh: <strong><span class=\'frac\'><span>3</span><span>5</span></span> > <span class=\'frac\'><span>1</span><span>5</span></span></strong> (karena 3 lebih banyak dari 1)</div>
                        </div>
                        <div class="rule-card">
                            <div class="rule-icon">⚡</div>
                            <h4>Aturan 2: Bawahnya Beda (Trik Silang Kupu-Kupu!)</h4>
                            <p>Kalikan silang atas kiri &times; bawah kanan, lalu atas kanan &times; bawah kiri.</p>
                            <div class="example-pill">Bandingkan <strong><span class=\'frac\'><span>2</span><span>3</span></span></strong> dengan <strong><span class=\'frac\'><span>3</span><span>4</span></span></strong><br>2&times;4=<strong>8</strong> vs 3&times;3=<strong>9</strong> &rarr; Karena 8 < 9, maka <strong><span class=\'frac\'><span>2</span><span>3</span></span> < <span class=\'frac\'><span>3</span><span>4</span></span></strong>!</div>
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
                            <div class="seesaw-weight left-weight" id="leftWeight"><span class=\'frac\'><span>1</span><span>2</span></span></div>
                            <div class="seesaw-pivot">▲</div>
                            <div class="seesaw-weight right-weight" id="rightWeight"><span class=\'frac\'><span>3</span><span>4</span></span></div>
                        </div>

                        <div class="result-banner" id="compResult"><span class=\'frac\'><span>1</span><span>2</span></span> lebih KECIL dari <span class=\'frac\'><span>3</span><span>4</span></span> (<span class=\'frac\'><span>1</span><span>2</span></span> < <span class=\'frac\'><span>3</span><span>4</span></span>)</div>
                    </div>
                </div>
            `
        },
        {
            id: 'pecahan-campuran',
            title: '4. Pecahan Campuran',
            icon: '🥞',
            summary: 'Ada bilangan bulat dan pecahan biasa karena lebih dari 1 benda utuh.',
            content: `
                <div class="materi-container">
                    <div class="story-bubble" style="background: #FAF5FF; border-left: 5px solid #A855F7;">
                        <div class="story-text" style="width: 100%;">
                            Pecahan campuran terjadi ketika pembilang (atas) lebih besar dari penyebut (bawah). Bayangkan kamu punya lebih dari 1 loyang pizza utuh!
                        </div>
                    </div>
                    <div style="margin-top: 24px; border: 2px dashed #CBD5E1; padding: 24px; border-radius: 20px; text-align: center; background: white;">
                        <h4 style="color: #475569; margin-bottom: 16px;">LABORATORIUM: PEMBUAT PECAHAN CAMPURAN</h4>
                        <p style="margin-bottom: 20px; color: #64748B;">Geser tuas untuk mengambil potongan pizza (ukuran per 4 / kuartal):</p>
                        
                        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 30px;">
                            <span style="font-weight: 700; color: #1E293B;">1 Potong</span>
                            <input type="range" id="campuranSlider" min="1" max="11" value="5" style="width: 250px; cursor: pointer;">
                            <span style="font-weight: 700; color: #1E293B;">11 Potong</span>
                        </div>

                        <div id="campuranVisual" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; min-height: 100px;">
                            <!-- Pizzas will be rendered here -->
                        </div>

                        <div style="background: #F3E8FF; border: 2px solid #D8B4FE; padding: 16px; border-radius: 16px; display: inline-block;">
                            <div style="font-size: 2.5rem; font-family: 'Fredoka', cursive; color: #7E22CE;" id="campuranText">
                                <span class=\'frac\'><span>5</span><span>4</span></span> = 1 <span class=\'frac\'><span>1</span><span>4</span></span>
                            </div>
                            <div style="color: #9333EA; font-weight: 600; margin-top: 8px;" id="campuranDesc">
                                1 utuh dan <span class=\'frac\'><span>1</span><span>4</span></span> potong
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'pecahan-desimal',
            title: '5. Pecahan Desimal',
            icon: '🔢',
            summary: 'Pecahan persepuluhan atau perseratusan yang ditulis dengan tanda koma (,).',
            content: `
                <div class="materi-container">
                    <div class="story-bubble" style="background: #EFF6FF; border-left: 5px solid #3B82F6;">
                        <div class="story-text" style="width: 100%;">
                            Desimal adalah cara lain menulis pecahan. Jika bawahnya 10, maka ada 1 angka di belakang koma (contoh: /10 = 0,...).
                        </div>
                    </div>
                    <div style="margin-top: 24px; border: 2px dashed #CBD5E1; padding: 24px; border-radius: 20px; text-align: center; background: white;">
                        <h4 style="color: #475569; margin-bottom: 16px;">LABORATORIUM: METERAN DESIMAL</h4>
                        
                        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 30px;">
                            <input type="range" id="desimalSlider" min="1" max="10" value="5" style="width: 300px; cursor: pointer;">
                        </div>

                        <div style="display: flex; justify-content: center; margin-bottom: 30px;">
                            <div id="desimalGrid" style="display: flex; width: 300px; height: 40px; border: 3px solid #1E293B; border-radius: 8px; overflow: hidden;">
                                <!-- 10 blocks -->
                            </div>
                        </div>

                        <div style="background: #DBEAFE; border: 2px solid #93C5FD; padding: 16px; border-radius: 16px; display: inline-block; min-width: 200px;">
                            <div style="font-size: 2.5rem; font-family: 'Fredoka', cursive; color: #1D4ED8;" id="desimalText">
                                <span class='frac'><span>5</span><span>10</span></span> = 0,5
                            </div>
                            <div id="desimalDesc" style="color: #2563EB; font-weight: 600; margin-top: 8px;">
                                Dibaca: "Nol koma lima"
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'bentuk-persen',
            title: '6. Bentuk Persen (%)',
            icon: '💯',
            summary: 'Artinya "per seratus". Sangat sering ditemui saat ada diskon di toko mainan!',
            content: `
                <div class="materi-container">
                    <div class="story-bubble" style="background: #FDF2F8; border-left: 5px solid #DB2777;">
                        <div class="story-text" style="width: 100%;">
                            Persen berarti <strong>per seratus</strong> (/100). 50% sama saja dengan <span class=\'frac\'><span>50</span><span>100</span></span>, atau setengahnya!
                        </div>
                    </div>
                    <div style="margin-top: 24px; border: 2px dashed #CBD5E1; padding: 24px; border-radius: 20px; text-align: center; background: white;">
                        <h4 style="color: #475569; margin-bottom: 16px;">LABORATORIUM: SCANNER PERSEN</h4>
                        
                        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 30px;">
                            <span style="font-weight: 700; color: #1E293B;">1%</span>
                            <input type="range" id="persenSlider" min="1" max="100" value="25" style="width: 300px; cursor: pointer;">
                            <span style="font-weight: 700; color: #1E293B;">100%</span>
                        </div>

                        <div style="display: flex; justify-content: center; margin-bottom: 30px;">
                            <div id="persenGrid" style="display: grid; grid-template-columns: repeat(10, 1fr); width: 150px; height: 150px; border: 2px solid #1E293B; background: #F1F5F9; gap: 1px; padding: 1px;">
                                <!-- 100 small squares -->
                            </div>
                        </div>

                        <div style="background: #FCE7F3; border: 2px solid #F9A8D4; padding: 16px; border-radius: 16px; display: inline-flex; align-items: center; gap: 20px;">
                            <div style="font-size: 2.2rem; font-family: 'Fredoka', cursive; color: #BE185D;" id="persenText1">
                                <span class=\'frac\'><span>25</span><span>100</span></span>
                            </div>
                            <div style="font-size: 2.2rem; font-weight: 900; color: #DB2777;">=</div>
                            <div style="font-size: 2.8rem; font-family: 'Fredoka', cursive; color: #BE185D;" id="persenText2">
                                25%
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'penjumlahan-pengurangan',
            title: '7. Penjumlahan & Pengurangan Pecahan',
            icon: '➕',
            summary: 'Cara menjumlahkan dan mengurangkan pecahan yang penyebutnya (bawahnya) sama.',
            content: `
                <div class="materi-container">
                    <div class="rules-grid">
                        <div class="rule-card" style="border-top-color: #10B981;">
                            <div class="rule-icon">➕</div>
                            <h4>Penjumlahan (Penyebut Sama)</h4>
                            <p>Jika angka bawahnya (penyebut) sudah SAMA, kamu hanya perlu menjumlahkan angka atasnya (pembilang) saja!</p>
                            <div class="example-pill">Contoh: <strong><span class=\'frac\'><span>1</span><span>5</span></span> + <span class=\'frac\'><span>2</span><span>5</span></span> = <span class=\'frac\'><span>3</span><span>5</span></span></strong><br><small>1 potong + 2 potong = 3 potong (ukuran tetap per lima)</small></div>
                        </div>
                        <div class="rule-card" style="border-top-color: #EF4444;">
                            <div class="rule-icon">➖</div>
                            <h4>Pengurangan (Penyebut Sama)</h4>
                            <p>Sama seperti penjumlahan, jika bawahnya sudah sama, cukup kurangkan angka yang di atas!</p>
                            <div class="example-pill">Contoh: <strong><span class=\'frac\'><span>4</span><span>7</span></span> - <span class=\'frac\'><span>1</span><span>7</span></span> = <span class=\'frac\'><span>3</span><span>7</span></span></strong><br><small>4 potong dikurangi 1 potong tinggal 3 potong</small></div>
                        </div>
                    </div>
                    <div style="margin-top: 24px; border: 2px dashed #CBD5E1; padding: 24px; border-radius: 20px; text-align: center; background: white;">
                        <h4 style="color: #475569; margin-bottom: 16px;">LABORATORIUM: MESIN HITUNG PECAHAN</h4>
                        <p style="margin-bottom: 20px; color: #64748B;">Atur angka pembilang pertama dan kedua, lalu pilih operasinya (+ atau -).</p>
                        
                        <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 30px;">
                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                                <input type="number" id="pjNum1" min="1" max="5" value="1" style="width: 60px; font-size: 1.5rem; text-align: center; border: 2px solid #3B82F6; border-radius: 8px;">
                                <div style="width: 50px; height: 3px; background: #1E293B;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">6</span>
                            </div>
                            
                            <select id="pjOp" style="font-size: 1.5rem; padding: 5px; border: 2px solid #CBD5E1; border-radius: 8px; font-weight: 800;">
                                <option value="+">+</option>
                                <option value="-">-</option>
                            </select>

                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                                <input type="number" id="pjNum2" min="1" max="5" value="2" style="width: 60px; font-size: 1.5rem; text-align: center; border: 2px solid #F59E0B; border-radius: 8px;">
                                <div style="width: 50px; height: 3px; background: #1E293B;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">6</span>
                            </div>

                            <span style="font-size: 2rem; font-weight: 900; margin: 0 10px;">=</span>

                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; background: #F8FAFC; padding: 10px 20px; border-radius: 12px; border: 2px solid #E2E8F0;">
                                <span id="pjResultNum" style="font-size: 2rem; font-weight: 800; color: #10B981;">3</span>
                                <div style="width: 60px; height: 3px; background: #1E293B;"></div>
                                <span style="font-size: 2rem; font-weight: 800;">6</span>
                            </div>
                        </div>

                        <div id="pjVisualContainer" style="display: flex; justify-content: center; gap: 10px; align-items: center; min-height: 120px;">
                            <!-- SVG Pizza rendering -->
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'garis-bilangan',
            title: '8. Pecahan pada Garis Bilangan',
            icon: '📏',
            summary: 'Melihat letak posisi pecahan di antara angka 0 dan 1.',
            content: `
                <div class="materi-container">
                    <div class="story-bubble" style="background: #EEF2FF; border-left: 5px solid #6366F1;">
                        <div class="story-text" style="width: 100%;">
                            <strong>Bayangkan penggaris!</strong> Pecahan biasa (seperti <span class=\'frac\'><span>1</span><span>2</span></span>, <span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>) letaknya selalu di antara angka <strong>0</strong> dan <strong>1</strong>.
                        </div>
                    </div>
                    <div class="concept-cards-row" style="margin-top: 20px;">
                        <div style="width: 100%; background: white; padding: 30px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; border: 2px solid #E2E8F0;">
                            <div style="position: relative; height: 10px; background: #CBD5E1; border-radius: 10px; margin: 40px 20px;">
                                <div style="position: absolute; left: 0%; top: -10px; width: 4px; height: 30px; background: #1E293B;"></div>
                                <div style="position: absolute; left: 0%; top: 25px; font-weight: 800; transform: translateX(-50%);">0</div>
                                
                                <div style="position: absolute; left: 25%; top: -5px; width: 4px; height: 20px; background: #3B82F6;"></div>
                                <div style="position: absolute; left: 25%; top: 25px; font-weight: 800; color: #3B82F6; transform: translateX(-50%);"><span class=\'frac\'><span>1</span><span>4</span></span></div>
                                
                                <div style="position: absolute; left: 50%; top: -5px; width: 4px; height: 20px; background: #10B981;"></div>
                                <div style="position: absolute; left: 50%; top: 25px; font-weight: 800; color: #10B981; transform: translateX(-50%);"><span class=\'frac\'><span>2</span><span>4</span></span> (atau <span class=\'frac\'><span>1</span><span>2</span></span>)</div>
                                
                                <div style="position: absolute; left: 75%; top: -5px; width: 4px; height: 20px; background: #F59E0B;"></div>
                                <div style="position: absolute; left: 75%; top: 25px; font-weight: 800; color: #F59E0B; transform: translateX(-50%);"><span class=\'frac\'><span>3</span><span>4</span></span></div>
                                
                                <div style="position: absolute; left: 100%; top: -10px; width: 4px; height: 30px; background: #1E293B;"></div>
                                <div style="position: absolute; left: 100%; top: 25px; font-weight: 800; transform: translateX(-50%);">1 (atau <span class=\'frac\'><span>4</span><span>4</span></span>)</div>
                            </div>
                            <p style="margin-top: 50px; font-size: 1.1rem; color: #475569;">Semakin ke kanan posisinya, maka nilai pecahannya akan <strong>semakin besar</strong>!</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'mengurutkan-pecahan',
            title: '9. Mengurutkan Pecahan',
            icon: '📈',
            summary: 'Cara jitu menyusun pecahan dari yang terkecil sampai terbesar!',
            content: `
                <div class="materi-container">
                    <div class="rules-grid">
                        <div class="rule-card" style="border-top-color: #3B82F6;">
                            <div class="rule-icon">🔽🔼</div>
                            <h4>Penyebutnya Sama?</h4>
                            <p>Sangat gampang! Tinggal urutkan saja angka pembilangnya (yang di atas) dari yang paling kecil ke paling besar.</p>
                            <div class="example-pill">Urutkan: <strong><span class=\'frac\'><span>3</span><span>7</span></span>, <span class=\'frac\'><span>1</span><span>7</span></span>, <span class=\'frac\'><span>5</span><span>7</span></span>, <span class=\'frac\'><span>2</span><span>7</span></span></strong><br>Hasil: <strong><span class=\'frac\'><span>1</span><span>7</span></span>, <span class=\'frac\'><span>2</span><span>7</span></span>, <span class=\'frac\'><span>3</span><span>7</span></span>, <span class=\'frac\'><span>5</span><span>7</span></span></strong></div>
                        </div>
                        <div class="rule-card" style="border-top-color: #8B5CF6;">
                            <div class="rule-icon">🎨</div>
                            <h4>Gunakan Gambar!</h4>
                            <p>Jika masih bingung, gambarlah pecahannya! Potongan pizza mana yang paling sedikit warna/isinya, itu yang terkecil!</p>
                            <div class="example-pill">Bayangkan: <strong><span class=\'frac\'><span>1</span><span>2</span></span></strong> (setengah pizza) vs <strong><span class=\'frac\'><span>1</span><span>4</span></span></strong> (sepotong kecil pizza). Maka <strong><span class=\'frac\'><span>1</span><span>4</span></span></strong> lebih kecil!</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px; border: 2px dashed #CBD5E1; padding: 24px; border-radius: 20px; text-align: center; background: white;">
                        <h4 style="color: #475569; margin-bottom: 16px;">LABORATORIUM: PODIUM PECAHAN</h4>
                        <p style="margin-bottom: 20px; color: #64748B;">Geser dan sesuaikan angka di setiap kotak, lalu klik "Urutkan" untuk melihat posisi juaranya!</p>
                        
                        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 30px;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <input type="number" id="urut1" min="1" max="9" value="5" style="width: 50px; font-size: 1.5rem; text-align: center; border: 2px solid #94A3B8; border-radius: 8px;">
                                <div style="width: 40px; height: 3px; background: #1E293B; margin: 4px 0;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">10</span>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <input type="number" id="urut2" min="1" max="9" value="2" style="width: 50px; font-size: 1.5rem; text-align: center; border: 2px solid #94A3B8; border-radius: 8px;">
                                <div style="width: 40px; height: 3px; background: #1E293B; margin: 4px 0;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">10</span>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <input type="number" id="urut3" min="1" max="9" value="8" style="width: 50px; font-size: 1.5rem; text-align: center; border: 2px solid #94A3B8; border-radius: 8px;">
                                <div style="width: 40px; height: 3px; background: #1E293B; margin: 4px 0;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">10</span>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <input type="number" id="urut4" min="1" max="9" value="4" style="width: 50px; font-size: 1.5rem; text-align: center; border: 2px solid #94A3B8; border-radius: 8px;">
                                <div style="width: 40px; height: 3px; background: #1E293B; margin: 4px 0;"></div>
                                <span style="font-size: 1.5rem; font-weight: 800;">10</span>
                            </div>
                        </div>

                        <button id="btnUrutkan" style="background: var(--primary); color: white; padding: 12px 24px; border: none; border-radius: 50px; font-weight: 800; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 0 var(--primary-dark);">Susun Terkecil ke Terbesar!</button>

                        <div id="urutResult" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px; font-size: 2rem; font-weight: 800; color: #10B981; min-height: 50px;">
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
            durasi: "02:40",
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
            durasi: "07:32",
            thumb: "⚖️",
            desc: "Cara mudah mengalikan angka atas dan bawah agar nilainya tetap sama.",
            embedUrl: "https://www.youtube-nocookie.com/embed/0hPRfqPFtt8",
            points: [
                "Kalikan pembilang dan penyebut dengan angka yang sama.",
                "<span class=\'frac\'><span>1</span><span>2</span></span> sama besarnya dengan <span class=\'frac\'><span>2</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>6</span></span>, dan <span class=\'frac\'><span>4</span><span>8</span></span>.",
                "Gunakan pembagian untuk menyederhanakan pecahan."
            ]
        },
        {
            id: "vid3",
            title: "3. Trik Kupu-Kupu Membandingkan Pecahan",
            durasi: "05:59",
            thumb: "🦋",
            desc: "Trik perkalian silang super cepat membandingkan pecahan beda penyebut.",
            embedUrl: "https://www.youtube-nocookie.com/embed/-lGhglcdYY0",
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
            options: ["1/4 (Satu per Empat)", "<span class=\'frac\'><span>2</span><span>4</span></span> (Dua per Empat)", "3/4 (Tiga per Empat)", "<span class=\'frac\'><span>4</span><span>3</span></span> (Empat per Tiga)"],
            correct: 2,
            hint: "Hitung potongan merah (ada 3) lalu pasangkan dengan total semua potongan (ada 4).",
            explanation: "Ada 3 potong berwarna merah dari total 4 potongan sama besar, maka nilainya adalah <span class=\'frac\'><span>3</span><span>4</span></span>."
        },
        {
            id: 2,
            type: 'text',
            question: "Pada pecahan <span class=\'frac\'><span>5</span><span>8</span></span>, angka 5 disebut sebagai...",
            options: ["Pembilang (Atas)", "Penyebut (Bawah)", "Pecahan Campuran", "Hasil Bagi"],
            correct: 0,
            hint: "Angka atas adalah bagian yang diambil/dimakan.",
            explanation: "Angka yang berada di sebelah atas tanda per disebut Pembilang."
        },
        {
            id: 3,
            type: 'visual',
            question: "Manakah pecahan di bawah ini yang SENILAI dengan <span class=\'frac\'><span>1</span><span>2</span></span>?",
            totalSlices: 6,
            shadedSlices: 3,
            options: ["<span class=\'frac\'><span>2</span><span>5</span></span>", "<span class=\'frac\'><span>3</span><span>6</span></span>", "<span class=\'frac\'><span>1</span><span>4</span></span>", "<span class=\'frac\'><span>3</span><span>8</span></span>"],
            correct: 1,
            hint: "Coba kalikan atas dan bawah dengan angka 3! 1x3 / 2x3 = ?",
            explanation: "<span class=\'frac\'><span>1</span><span>2</span></span> dikalikan <span class=\'frac\'><span>3</span><span>3</span></span> = <span class=\'frac\'><span>3</span><span>6</span></span>. Jadi <span class=\'frac\'><span>1</span><span>2</span></span> senilai dengan <span class=\'frac\'><span>3</span><span>6</span></span>."
        },
        {
            id: 4,
            type: 'compare',
            question: "Bandingkan kedua pecahan berikut: <span class=\'frac\'><span>2</span><span>7</span></span> ... <span class=\'frac\'><span>5</span><span>7</span></span>. Tanda yang tepat adalah...",
            options: ["> (Lebih besar)", "< (Lebih kecil)", "= (Sama dengan)", ">= (Lebih besar sama dengan)"],
            correct: 1,
            hint: "Karena penyebutnya sama (7), bandingkan angka 2 dan 5.",
            explanation: "Karena 2 lebih kecil dari 5, maka <span class=\'frac\'><span>2</span><span>7</span></span> < <span class=\'frac\'><span>5</span><span>7</span></span>."
        },
        {
            id: 5,
            type: 'text',
            question: "Bentuk pecahan campuran dari <span class=\'frac\'><span>7</span><span>3</span></span> adalah...",
            options: ["2 <span class=\'frac\'><span>1</span><span>3</span></span>", "1 <span class=\'frac\'><span>4</span><span>3</span></span>", "2 <span class=\'frac\'><span>2</span><span>3</span></span>", "3 <span class=\'frac\'><span>1</span><span>3</span></span>"],
            correct: 0,
            hint: "7 dibagi 3 dapat 2, sisa 1.",
            explanation: "7 : 3 = 2 sisa 1. Jadi bentuk campurannya adalah 2 <span class=\'frac\'><span>1</span><span>3</span></span>."
        },
        {
            id: 6,
            type: 'visual',
            question: "Pecahan <span class=\'frac\'><span>1</span><span>2</span></span> jika diubah ke dalam bentuk persen (%) adalah...",
            totalSlices: 2,
            shadedSlices: 1,
            options: ["25%", "50%", "75%", "100%"],
            correct: 1,
            hint: "Setengah dari 100 adalah 50.",
            explanation: "<span class=\'frac\'><span>1</span><span>2</span></span> = <span class=\'frac\'><span>50</span><span>100</span></span> = 50%."
        },
        {
            id: 7,
            type: 'text',
            question: "Ibu membagi semangka menjadi 8 potong sama besar. Dimakan Budi 2 potong dan dimakan Ani 2 potong. Berapa bagian semangka yang sudah dimakan?",
            options: ["<span class=\'frac\'><span>2</span><span>8</span></span> bagian", "<span class=\'frac\'><span>4</span><span>8</span></span> bagian", "<span class=\'frac\'><span>6</span><span>8</span></span> bagian", "<span class=\'frac\'><span>8</span><span>8</span></span> bagian"],
            correct: 1,
            hint: "Tambahkan potongan Budi (2) + Ani (2) = 4 potong.",
            explanation: "2 potong + 2 potong = 4 potong dari total 8 potong = <span class=\'frac\'><span>4</span><span>8</span></span> bagian (senilai dengan <span class=\'frac\'><span>1</span><span>2</span></span>)."
        },
        {
            id: 8,
            type: 'text',
            question: "Manakah perbandingan pecahan yang BENAR menggunakan trik silang?",
            options: ["<span class=\'frac\'><span>1</span><span>3</span></span> > <span class=\'frac\'><span>2</span><span>3</span></span>", "<span class=\'frac\'><span>3</span><span>4</span></span> > <span class=\'frac\'><span>1</span><span>2</span></span>", "<span class=\'frac\'><span>1</span><span>5</span></span> > <span class=\'frac\'><span>4</span><span>5</span></span>", "<span class=\'frac\'><span>2</span><span>4</span></span> = <span class=\'frac\'><span>3</span><span>4</span></span>"],
            correct: 1,
            hint: "<span class=\'frac\'><span>3</span><span>4</span></span> (0,75) lebih besar dari <span class=\'frac\'><span>1</span><span>2</span></span> (0,50).",
            explanation: "3x2 = 6, 4x1 = 4. Karena 6 > 4, maka <span class=\'frac\'><span>3</span><span>4</span></span> > <span class=\'frac\'><span>1</span><span>2</span></span> adalah BENAR."
        },
        {
            id: 9,
            type: 'text',
            question: "Bentuk desimal dari pecahan <span class=\'frac\'><span>1</span><span>4</span></span> adalah...",
            options: ["0,5", "0,25", "0,75", "0,14"],
            correct: 1,
            hint: "<span class=\'frac\'><span>1</span><span>4</span></span> sama dengan <span class=\'frac\'><span>25</span><span>100</span></span>.",
            explanation: "<span class=\'frac\'><span>1</span><span>4</span></span> dikali <span class=\'frac\'><span>25</span><span>25</span></span> menjadi <span class=\'frac\'><span>25</span><span>100</span></span>, yang dalam desimal ditulis 0,25."
        },
        {
            id: 10,
            type: 'text',
            question: "Manakah pecahan yang LEBIH KECIL dari <span class=\'frac\'><span>1</span><span>2</span></span>?",
            options: ["<span class=\'frac\'><span>2</span><span>3</span></span>", "<span class=\'frac\'><span>3</span><span>4</span></span>", "<span class=\'frac\'><span>1</span><span>3</span></span>", "<span class=\'frac\'><span>4</span><span>8</span></span>"],
            correct: 2,
            hint: "Bandingkan masing-masing pecahan dengan <span class=\'frac\'><span>1</span><span>2</span></span>. Mana yang kurang dari separuh?",
            explanation: "<span class=\'frac\'><span>1</span><span>3</span></span> lebih kecil dari <span class=\'frac\'><span>1</span><span>2</span></span>. Jika memakai trik silang: 1x2 = 2 dan 3x1 = 3 (2 < 3, jadi <span class=\'frac\'><span>1</span><span>3</span></span> < <span class=\'frac\'><span>1</span><span>2</span></span>)."
        }
    ],

    evaluasiQuestions: [
        {
            id: 1,
            q: "Sebuah pizza dipotong menjadi 6 bagian sama besar. Rina memakan 2 bagian. Bagian pizza yang dimakan Rina bernilai...",
            options: ["<span class=\'frac\'><span>2</span><span>6</span></span>", "<span class=\'frac\'><span>4</span><span>6</span></span>", "<span class=\'frac\'><span>6</span><span>2</span></span>", "<span class=\'frac\'><span>1</span><span>6</span></span>"],
            answer: 0,
            point: 10,
            explanation: "Rina memakan 2 bagian dari total 6 bagian, sehingga bentuk pecahannya adalah <span class=\'frac\'><span>2</span><span>6</span></span>."
        },
        {
            id: 2,
            q: "Pada pecahan <span class=\'frac\'><span>3</span><span>10</span></span>, angka 10 disebut...",
            options: ["Pembilang", "Penyebut", "Pecahan Desimal", "Hasil Kali"],
            answer: 1,
            point: 10,
            explanation: "Angka yang berada di bawah tanda per disebut Penyebut."
        },
        {
            id: 3,
            q: "Pecahan berikut yang SENILAI dengan <span class=\'frac\'><span>3</span><span>4</span></span> adalah...",
            options: ["<span class=\'frac\'><span>6</span><span>8</span></span>", "<span class=\'frac\'><span>5</span><span>8</span></span>", "<span class=\'frac\'><span>6</span><span>10</span></span>", "<span class=\'frac\'><span>4</span><span>5</span></span>"],
            answer: 0,
            point: 10,
            explanation: "Pecahan <span class=\'frac\'><span>3</span><span>4</span></span> jika dikalikan 2 pada pembilang dan penyebutnya (3x2=6, 4x2=8) akan menjadi <span class=\'frac\'><span>6</span><span>8</span></span>."
        },
        {
            id: 4,
            q: "Bentuk paling sederhana dari pecahan <span class=\'frac\'><span>8</span><span>12</span></span> adalah...",
            options: ["<span class=\'frac\'><span>4</span><span>6</span></span>", "<span class=\'frac\'><span>2</span><span>3</span></span>", "<span class=\'frac\'><span>1</span><span>2</span></span>", "<span class=\'frac\'><span>3</span><span>4</span></span>"],
            answer: 1,
            point: 10,
            explanation: "Pecahan <span class=\'frac\'><span>8</span><span>12</span></span> dapat disederhanakan dengan membagi pembilang dan penyebut dengan angka 4, sehingga menjadi <span class=\'frac\'><span>2</span><span>3</span></span>."
        },
        {
            id: 5,
            q: "Tanda perbandingan yang tepat untuk <span class=\'frac\'><span>5</span><span>9</span></span> ... <span class=\'frac\'><span>3</span><span>9</span></span> adalah...",
            options: ["<", ">", "=", "+"],
            answer: 1,
            point: 10,
            explanation: "Karena penyebutnya sama (9), kita cukup membandingkan pembilangnya. Karena 5 lebih besar dari 3, maka <span class=\'frac\'><span>5</span><span>9</span></span> > <span class=\'frac\'><span>3</span><span>9</span></span>."
        },
        {
            id: 6,
            q: "Bandingkan pecahan <span class=\'frac\'><span>1</span><span>2</span></span> ... <span class=\'frac\'><span>2</span><span>3</span></span> dengan trik silang! Tanda yang tepat adalah...",
            options: [">", "<", "=", "&ge;"],
            answer: 1,
            point: 10,
            explanation: "Dengan trik silang: 1x3 = 3 dan 2x2 = 4. Karena 3 < 4, maka <span class=\'frac\'><span>1</span><span>2</span></span> < <span class=\'frac\'><span>2</span><span>3</span></span>."
        },
        {
            id: 7,
            q: "Urutan pecahan <span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>, <span class=\'frac\'><span>2</span><span>4</span></span> dari yang TERKECIL adalah...",
            options: ["<span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>2</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>", "<span class=\'frac\'><span>3</span><span>4</span></span>, <span class=\'frac\'><span>2</span><span>4</span></span>, <span class=\'frac\'><span>1</span><span>4</span></span>", "<span class=\'frac\'><span>2</span><span>4</span></span>, <span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>", "<span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>, <span class=\'frac\'><span>2</span><span>4</span></span>"],
            answer: 0,
            point: 10,
            explanation: "Karena penyebutnya sama (4), kita cukup mengurutkan dari pembilang terkecil: 1, 2, lalu 3. Sehingga urutannya: <span class=\'frac\'><span>1</span><span>4</span></span>, <span class=\'frac\'><span>2</span><span>4</span></span>, <span class=\'frac\'><span>3</span><span>4</span></span>."
        },
        {
            id: 8,
            q: "Pecahan <span class=\'frac\'><span>9</span><span>4</span></span> jika diubah ke bentuk pecahan campuran adalah...",
            options: ["2 <span class=\'frac\'><span>1</span><span>4</span></span>", "2 <span class=\'frac\'><span>3</span><span>4</span></span>", "1 <span class=\'frac\'><span>5</span><span>4</span></span>", "3 <span class=\'frac\'><span>1</span><span>4</span></span>"],
            answer: 0,
            point: 10,
            explanation: "9 dibagi 4 hasilnya 2 sisa 1. Jadi, pecahan campurannya adalah 2 <span class=\'frac\'><span>1</span><span>4</span></span>."
        },
        {
            id: 9,
            q: "Bentuk persen (%) dari pecahan <span class=\'frac\'><span>3</span><span>4</span></span> adalah...",
            options: ["25%", "50%", "75%", "100%"],
            answer: 2,
            point: 10,
            explanation: "Pecahan <span class=\'frac\'><span>3</span><span>4</span></span> jika penyebutnya dijadikan 100 (dikalikan 25), pembilangnya juga dikali 25 menjadi 75. Maka <span class=\'frac\'><span>75</span><span>100</span></span> = 75%."
        },
        {
            id: 10,
            q: "Doni memiliki 1 cokelat utuh berisi 10 baris. Diberikan ke adik 3 baris dan kakak 4 baris. Sisa cokelat Doni adalah...",
            options: ["<span class=\'frac\'><span>3</span><span>10</span></span>", "<span class=\'frac\'><span>7</span><span>10</span></span>", "<span class=\'frac\'><span>2</span><span>10</span></span>", "<span class=\'frac\'><span>5</span><span>10</span></span>"],
            answer: 0,
            point: 10,
            explanation: "Sisa baris = 10 - 3 - 4 = 3 baris. Dari total 10 baris, sisa cokelatnya adalah <span class=\'frac\'><span>3</span><span>10</span></span>."
        }
    ],

    duelQuestions: [
        {
            q: "Manakah pecahan yang senilai dengan <span class=\'frac\'><span>1</span><span>2</span></span>?",
            options: ["<span class=\'frac\'><span>2</span><span>4</span></span>", "<span class=\'frac\'><span>1</span><span>3</span></span>", "<span class=\'frac\'><span>3</span><span>5</span></span>", "<span class=\'frac\'><span>2</span><span>6</span></span>"],
            correct: 0
        },
        {
            q: "Bandingkan: <span class=\'frac\'><span>3</span><span>7</span></span> ... <span class=\'frac\'><span>5</span><span>7</span></span>",
            options: [">", "<", "=", "+"],
            correct: 1
        },
        {
            q: "Bentuk persen (%) dari <span class=\'frac\'><span>1</span><span>4</span></span> adalah...",
            options: ["10%", "20%", "25%", "50%"],
            correct: 2
        },
        {
            q: "Bentuk campuran dari <span class=\'frac\'><span>5</span><span>2</span></span> adalah...",
            options: ["2 <span class=\'frac\'><span>1</span><span>2</span></span>", "1 <span class=\'frac\'><span>1</span><span>2</span></span>", "2 <span class=\'frac\'><span>2</span><span>3</span></span>", "3 <span class=\'frac\'><span>1</span><span>2</span></span>"],
            correct: 0
        },
        {
            q: "Pada pecahan <span class=\'frac\'><span>4</span><span>9</span></span>, angka 9 disebut...",
            options: ["Pembilang", "Penyebut", "Faktor", "Kelipatan"],
            correct: 1
        },
        {
            q: "Bandingkan dengan trik silang: <span class=\'frac\'><span>2</span><span>3</span></span> ... <span class=\'frac\'><span>3</span><span>4</span></span>",
            options: [">", "<", "=", "&ge;"],
            correct: 1
        },
        {
            q: "Pecahan yang senilai dengan <span class=\'frac\'><span>3</span><span>5</span></span> adalah...",
            options: ["<span class=\'frac\'><span>6</span><span>10</span></span>", "<span class=\'frac\'><span>4</span><span>5</span></span>", "<span class=\'frac\'><span>6</span><span>15</span></span>", "<span class=\'frac\'><span>5</span><span>3</span></span>"],
            correct: 0
        },
        {
            q: "Bentuk desimal dari pecahan <span class=\'frac\'><span>1</span><span>2</span></span> adalah...",
            options: ["0,2", "0,5", "0,25", "1,2"],
            correct: 1
        },
        {
            q: "Pecahan paling sederhana dari <span class=\'frac\'><span>4</span><span>8</span></span> adalah...",
            options: ["<span class=\'frac\'><span>2</span><span>4</span></span>", "<span class=\'frac\'><span>1</span><span>2</span></span>", "<span class=\'frac\'><span>1</span><span>4</span></span>", "<span class=\'frac\'><span>3</span><span>6</span></span>"],
            correct: 1
        },
        {
            q: "Urutkan dari terkecil: <span class=\'frac\'><span>1</span><span>5</span></span>, <span class=\'frac\'><span>4</span><span>5</span></span>, <span class=\'frac\'><span>2</span><span>5</span></span>",
            options: ["<span class=\'frac\'><span>1</span><span>5</span></span>, <span class=\'frac\'><span>2</span><span>5</span></span>, <span class=\'frac\'><span>4</span><span>5</span></span>", "<span class=\'frac\'><span>4</span><span>5</span></span>, <span class=\'frac\'><span>2</span><span>5</span></span>, <span class=\'frac\'><span>1</span><span>5</span></span>", "<span class=\'frac\'><span>2</span><span>5</span></span>, <span class=\'frac\'><span>1</span><span>5</span></span>, <span class=\'frac\'><span>4</span><span>5</span></span>", "<span class=\'frac\'><span>1</span><span>5</span></span>, <span class=\'frac\'><span>4</span><span>5</span></span>, <span class=\'frac\'><span>2</span><span>5</span></span>"],
            correct: 0
        }
    ],

    wheelChallenges: [
        { label: "🍕 Tantangan Pizza", desc: "Jika 1 pizza dipotong 8 bagian dan dimakan 3 potong, berapa bagian yang tersisa?", ans: "<span class=\'frac\'><span>5</span><span>8</span></span> bagian" },
        { label: "⚖️ Senilai Kilat", desc: "Sebutkan 2 pecahan yang senilai dengan <span class=\'frac\'><span>2</span><span>3</span></span>!", ans: "<span class=\'frac\'><span>4</span><span>6</span></span> dan <span class=\'frac\'><span>6</span><span>9</span></span>" },
        { label: "🦋 Trik Silang", desc: "Mana yang lebih besar: <span class=\'frac\'><span>3</span><span>5</span></span> atau <span class=\'frac\'><span>2</span><span>4</span></span>? Buktikan dengan perkalian silang!", ans: "<span class=\'frac\'><span>3</span><span>5</span></span> > <span class=\'frac\'><span>2</span><span>4</span></span> (karena 3x4=12 > 5x2=10)" },
        { label: "🥞 Ubah Campuran", desc: "Ubah pecahan biasa <span class=\'frac\'><span>11</span><span>3</span></span> menjadi pecahan campuran!", ans: "3 <span class=\'frac\'><span>2</span><span>3</span></span><br><br><span style='font-size: 0.95rem; font-weight: 500; color: #065F46;'><strong>📖 Penjelasan:</strong> Pecahan <span class=\'frac\'><span>11</span><span>3</span></span> berarti 11 dibagi 3. Hasil pembagian utuh adalah 3 (karena 3 x 3 = 9). Sisa dari pembagian tersebut adalah 2 (dari 11 - 9). Maka, bilangan bulat utuhnya adalah 3, dan sisanya (2) ditulis sebagai pecahan dengan penyebut awal, sehingga bentuknya menjadi 3 <span class=\'frac\'><span>2</span><span>3</span></span>.</span>" },
        { label: "💯 Tebak Persen", desc: "Berapa persen (%) nilai dari pecahan <span class=\'frac\'><span>3</span><span>4</span></span>?", ans: "75%" },
        { label: "⭐ Bonus Kelas", desc: "Hore! Semua kelompok di kelas mendapat 50 Bintang Prestasi!", ans: "Bonus +50 ⭐" }
    ]
};


