<p align="center">
  <a href="https://github.com/pantalejmon/ppl-report-generator/actions/workflows/build.yml"><img src="https://github.com/pantalejmon/ppl-report-generator/actions/workflows/build.yml/badge.svg" alt="Stars Badge"/></a>
  <a href="https://github.com/pantalejmon/ppl-report-generator/actions/workflows/deploy.yml"><img src="https://github.com/pantalejmon/ppl-report-generator/actions/workflows/deploy.yml/badge.svg" alt="Stars Badge"/></a>

<span><img src="https://img.shields.io/static/v1?label=PPL syntax&message=passing&color=green" alt="Issues Badge"/></span>
<a href="https://github.com/pantalejmon/ppl-report-generator/stargazers"><img src="https://img.shields.io/github/stars/pantalejmon/ppl-report-generator" alt="Stars Badge"/></a>
<a href="https://github.com/pantalejmon/ppl-report-generator/network/members"><img src="https://img.shields.io/github/forks/pantalejmon/ppl-report-generator" alt="Forks Badge"/></a>
<a href="https://github.com/pantalejmon/ppl-report-generator/pulls"><img src="https://img.shields.io/github/issues-pr/pantalejmon/ppl-report-generator" alt="Pull Requests Badge"/></a>
<a href="https://github.com/pantalejmon/ppl-report-generator/issues"><img src="https://img.shields.io/github/issues/pantalejmon/ppl-report-generator" alt="Issues Badge"/></a>
<a href="https://github.com/pantalejmon/ppl-report-generator/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/pantalejmon/ppl-report-generator?color=2b9348"></a>
<a href="https://github.com/pantalejmon/ppl-report-generator/blob/master/LICENSE"><img src="https://img.shields.io/github/license/pantalejmon/ppl-report-generator?color=2b9348" alt="License Badge"/></a>

</p>

<p align="center">
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="Nest"/>
  <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>
</p>


# PPL generator raportów B2B

Aplikcja powstała w celu ułatwienia wystawiania podsumowujących raportów miesięcznych na podstawie danych zgromadzonych w Tempo w systemie JIRA

### Instrukcja obsługi

1. Zaloguj się do systemu JIRA i upewnij się że język ustawiony jest na angielski
2. Wejdz w sekcje tempo, ustaw wybrany miesiąc i kliknij **...**
3. Wybierz opcje eksport i format **XLSX, XLS lub CSV**
4. Wejdz do [aplikacji](https://janjakubik.pl)
5. Wgraj plik, dodaj dodatkowe dane(Cachują się w pamięci przeglądarki), obraz podpisu można przesuwać myszką, kliknij
   wydruk
6. W opcjach wydruku wybierz **Wydruk do PDF**
7. Ciesz się stworzonym raportem

### Co nowego

#### 0.3.6

- Poprawa konfiguracji budowania frontu
- Ukrycie headerów http za pomocą biblioteki helmet

#### 0.3.5

- Możliwość instalacji aplikacji

#### 0.3.4

- Dodanie możliwości usunięcia wgranego podpisu z menu kontekstowego

#### 0.3.3

- Ustawianie daty na ostatni dzień miesiąca

#### 0.3.2

- Obsługa xls
- Obsługa CSV
- Poprawka buga po wgraniu błednego pliku
- Walidacja plików po stonie backendu

#### 0.3.1

- Nowy motyw
- Drobne poprawki UI

#### 0.3.0

- Migracja na nowy VPS
- Dodanie modułu statystyk o użytkowaniu aplikacji

#### 0.2.4

- Aktualizacja do Angulara 17, PrimeNG 17
- budowanie: node 18 i 20

#### 0.2.3

- Aktualizacja do Angulara 16, Nesta 10, PrimeNG 16
- budowanie: node 16, 18 i 20

#### 0.2.2

- Poprawiony błąd zbyt wąskich marginesów na wydruku wielostronicowym

#### 0.2.1

- Poprawiony błąd w wyświetlaniu pełnej nazwy pracownika na raporcie
- Poprawiony błąd zliczania godzin

#### 0.2.0

- Aktualizacja do Angulara 15 i Nesta 9
- Dodanie nazwy pliku przy wydruku
- Dodanie edycji zadań w raporcie (Front)
- Drobne udoskonalenia wizualne

#### 0.1.10

- Nowy adres [strony](https://janjakubik.pl)
- Nowy system wdrażania (CI/CD)

#### 0.1.9

- Poprawa wyświetlania i dzielenia stron
- Przesuwanie podpisu na dokumencie
