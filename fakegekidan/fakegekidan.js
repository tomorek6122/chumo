document.addEventListener('DOMContentLoaded', function() {
    // ヒーロースライダーの機能
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevButton = document.querySelector('.slider-nav .prev-slide');
    const nextButton = document.querySelector('.slider-nav .next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // 自動スライドショー
    let slideInterval = setInterval(nextSlide, 5000); // 5秒ごとにスライド

    // ボタンクリックでスライド切り替え
    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 自動スライドを一時停止
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000); // 再開
    });

    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 自動スライドを一時停止
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000); // 再開
    });

    // 初期表示
    showSlide(currentSlide);

    // モバイルメニューのトグル機能
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // スクロールイベントでのヘッダー背景色変更など
    // 必要であればここに記述
    // window.addEventListener('scroll', () => {
    //     const header = document.querySelector('header');
    //     if (window.scrollY > 50) {
    //         header.style.backgroundColor = 'rgba(255,255,255,0.95)';
    //     } else {
    //         header.style.backgroundColor = '#fff';
    //     }
    // });
});
document.addEventListener('DOMContentLoaded', function() {
    // (既存のヒーロースライダーやモバイルメニューのコードはそのまま)

    // ▼ここからアコーディオン用のコードを追記▼
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // クリックされたアイテムの active クラスをトグル(付け外し)する
            item.classList.toggle('active');

            // （任意）他のアイテムを閉じる場合
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });
        });
    });

});