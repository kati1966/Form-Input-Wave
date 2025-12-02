// انتخاب تمام لیبل‌های داخل عناصر .form-control
const labels = document.querySelectorAll('.form-control label');

// پردازش هر لیبل به صورت جداگانه
labels.forEach(label => {
    // متن اصلی لیبل (مثلاً "Email" یا "Password")
    const text = label.innerText;

    // هر حرف را جدا کرده و به صورت span بسته‌بندی می‌کنیم
    const letters = text.split('').map((letter, idx) => {
        return `<span style="transition-delay: ${idx * 30}ms">${letter}</span>`;
    });

    // جایگزینی محتوای لیبل با حروف انیمیشنی
    label.innerHTML = letters.join('');
});