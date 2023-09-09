document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitResult = document.getElementById('fahrenheitResult');
    const kelvinResult = document.getElementById('kelvinResult');
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);

        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;

        fahrenheitResult.textContent = fahrenheit.toFixed(2);
        kelvinResult.textContent = kelvin.toFixed(2);
    });
});
