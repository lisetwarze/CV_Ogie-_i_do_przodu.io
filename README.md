UNIWERSYTET WSB MERTIO W POZNANIU 

WYDZIAŁ INNOWACJI I PRZEDSIĘBIORCZOŚCI W WARSZAWIE 

 

 

 

 

Grzegorz Łapiński, Krzysztof Płusa, Adam Dźwigała 

Nr albumu 157735, 157775 ,157695 

 

 

Projekt CV 

Dokumentacja projektowa 

 

 

 

 

 

Dr inż. Piotr Bobiński 

 

 

 

Kierunek: Informatyka  

Specjalność: Front-end Developer 

 

 

 

 

WARSZAWA 2024 

​​ 

​ 

​ 

​ 

​​ 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

WSTĘP 

Niniejsza dokumentacja obejmuje opis projektu przykładowej strony internetowej, której celem jest przedstawienie CV kandydata do pracy. 

Cel projektu 

Celem projektu "Projekt CV" jest stworzenie nowoczesnej i interaktywnej strony internetowej, która będzie przedstawiać CV kandydata aplikującego do pracy. Projekt zakłada wykorzystanie zaawansowanych elementów JavaScript, aby dodać dynamiki i atrakcyjności wizualnej prezentacji danych 

Role w projekcie 

1.1 Grzegorz Łapiński 157735 

Postanowiłem, że do naszego projektu dodam zegar stworzony przy użyciu funkcji JavaScript. 

Funkcja ta służy do wyświetlania bieżącego czasu na stronie w formacie godziny:minuty:sekundy. Funkcja ta działa w następujący sposób: 

Pobranie aktualnej daty i czasu: 

 

W tym pukcie tworzony jest nowy obiekt ‘Date’, który reprezentuje bieżącą datę i czas. 

Pobranie godzin, minut i sekund: 

 

Metody ‘getHours()’, ‘getMinutes()’ i ‘getSeconds()’ zwracają odpowiednio godzinę, minutę i sekundę z obiektu ‘Date’. 

Formatowanie czasu wyświetlania: 

 

Tworzony jest string timeNow, który zawiera godziny, minuty, sekundy rozdzielone dwukropkami. Warunki (minutes < 10) i (seconds < 10) sprawdzają, czy minuty i sekundy są mniejsze niż 10; jeśli tak, dodają przed nimi ":0", w przeciwnym razie dodają ":". 

Aktualizacja elementu HTML: 

 

W tym miejscu elementowi HTML o nazwie "timer" przypisywany jest string timeNow, co powoduje, że aktualny czas jest wyświetlany na stronie. 

Ustawienie odświeżania co jedną sekundę: 

 

Funkcja setTimeout uruchamia funkcję clock() co 1000 milisekund (czyli co sekundę), zapewniając regularne odświeżanie wyświetlanego czasu. 

Implementacja funkcji JavaScript w HTML: 

Zaimplementowałem tą funkcję używając dwóch linijek kodu. 

 

Element ‘<div>’ z id “timer” jest aktualizowany co sekundę za pomocą JavaScript, aby wyświetlać bieżący czas. Dzięki temu, że ma on id “timer”, funkcja ‘document.getElementByID(“timer”)’ może być używana do odniesienia się do tego konkretnego ‘<div>’ i aktualizacji jego zawartości. 

 

Pod koniec elementu ‘<body>’ dodałem odnośnik do pliku skrypty.js, który go importuje, czyli wskazuje, gdzie znajduje się funkcja, którą ma wykonać w kontekście strony HTML, w której jest umieszczona. Co oznacza, że funkcja ‘clock()’, która znajduje się w wyżej wymienionym pliku zostaje uruchomiona. Dzięki temu rozwiązaniu separujemy od siebie kod HTML i JavaScript, co pomaga w zarządzaniu i utrzymaniu “schludnego” kodu. 

 

1.2 Krzysztof Płusa 157775 

W projekcie CV dodałem dwie funkcjonalności przy użyciu JavaScript: animacja wypełnienia pasków umiejętności oraz animacje zmiany koloru tła.  

Funkcja animacji wypełnienia pasków umiejętności 

Opis funkcji:  

Funkcja animuje szerokość elementów pasków postępu w momencie załadowania strony, tworząc efekt dynamicznego wypełniania się pasków od zera do zadanej wartości. 

Szczegóły techniczne: 

Funkcja jest uruchamiana, gdy cała zawartość strony jest załadowana. 

Wyszukuje wszystkie elementy z klasą .progress-fill. 

Dla każdego paska: 

Pobiera aktualną szerokość paska. 

Ustawia szerokość na 0, aby przygotować do animacji. 

Z niewielkim opóźnieniem zmienia szerokość paska do docelowej wartości, dodając płynne przejście.  

 

 

Kod funkcji: 

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.transition = "width 2s";
            bar.style.width = width;
        }, 100);
    });
});

 

Jak działa: 

DOMContentLoaded: Funkcja jest wywoływana, gdy cała zawartość strony jest załadowana. To zapewnia, że animacja pasków postępu zostanie wykonana tylko wtedy, gdy cała strona jest gotowa. 

querySelectorAll('.progress-fill'): Wyszukiwanie wszystkich elementów z klasą .progress-fill. 

forEach: Iteracja przez wszystkie znalezione elementy. 

const width = bar.style.width: Pobiera aktualną szerokość paska. 

bar.style.width = 0: Ustawia szerokość paska na 0, aby przygotować do animacji. 

setTimeout: Z niewielkim opóźnieniem (100 ms) ustawia szerokość paska do jego docelowej wartości z płynnym przejściem (transition: width 2s). 

 

Funkcja animacji zmiany koloru tła 

 

	Opis funkcji:  

Funkcja animuje zmianę koloru tła strony w sposób płynny, przełączając między zdefiniowanymi kolorami w określonych odstępach czasowych. Początkowe opóźnienie jest krótsze, aby użytkownik mógł natychmiast zauważyć pierwszą zmianę koloru, a kolejne zmiany zachodzą co 3 sekundy. 

 

 

Szczegóły techniczne: 

 

Funkcja jest uruchamiana, gdy cała zawartość strony jest załadowana. 

Definiuje listę kolorów w tablicy colors. 

Inicjalizuje zmienną currentIndex do śledzenia aktualnego indeksu koloru. 

Funkcja changeBackgroundColor zmienia kolor tła i ustawia następne wywołanie funkcji z odpowiednim opóźnieniem. 

Wywołuje changeBackgroundColor po załadowaniu strony, aby rozpocząć cykl zmiany koloru tła. 

 

 

Kod funkcji:
document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#008080", "#ffed83", "#3a3a3a", "#4169e1", "#ff944a"];
    let currentIndex = 0;

    function changeBackgroundColor() {
        const delay = currentIndex === 0 ? 500 : 3000; 
        document.body.style.transition = "background-color 3s";
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        setTimeout(changeBackgroundColor, delay);
    }

    changeBackgroundColor(); 

});
	 

Jak działa: 

DOMContentLoaded: Funkcja jest uruchamiana, gdy cała zawartość strony jest załadowana. To zapewnia, że animacja zmiany koloru tła zostanie wykonana tylko wtedy, gdy cała strona jest gotowa. 

colors: Tablica z listą kolorów, które będą używane do zmiany tła. 

currentIndex: Zmienna śledząca aktualny indeks koloru. 

changeBackgroundColor: Funkcja zmienia kolor tła i ustawia następne wywołanie funkcji z odpowiednim opóźnieniem. 

document.body.style.transition = "background-color 3s": Ustawia płynne przejście zmiany koloru tła. 

document.body.style.backgroundColor = colors[currentIndex]: Ustawia aktualny kolor tła. 

currentIndex = (currentIndex + 1) % colors.length: Aktualizuje indeks do następnego koloru. Jeśli indeks osiągnie koniec tablicy, wraca na początek. 

setTimeout(changeBackgroundColor, delay): Ustawia opóźnienie do następnej zmiany koloru, które wynosi 500 ms dla pierwszej zmiany i 3000 ms dla kolejnych. 

1.3 Adam Dźwigała 157695
W swojej pracy wykonałem funkcję, polegającą na zmianie zdjęcia profilowego w pętli, w określonym czasie.

Szczegóły techniczne: 
Wykorzysłem trzy obrazy:
adam.jpg
grzegorz.jpg
krzysztof.jpg


Opis funkcji:  
Funcja jest umieszcznona wewnątrz index.html. W kodzie umieszczone zostały trzy obrazy, reprezentujące każdego z nas. Ów zdjęcia dynamicznie zmieniają się w pętli.

Kod funkcji: 

var i = 0;
		var images = [];
		var time = 3000;
		
		images[0] = 'adam.jpg';
		images[1] = 'grzegorz.jpg';
		images[2] = 'krzysztof.jpg';
		
		function changeImg(){
			document.slide.src = images[i];
			
			if(i < images.length - 1){
				i++;
			} else {
				i = 0;
			}
			
			setTimeout("changeImg()", time);
		}
		
		window.onload = changeImg
Jak działa:
Jak już wcześniej wspomniałem, działanie polega na senwencyjnym "pokazie slajdów" z użyciem załączonych zdjęć.
 

 

	 

 

 

 

 

 
