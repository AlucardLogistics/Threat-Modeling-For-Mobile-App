# Modelarea amenințărilor pentru o aplicație mobile
### Proiect Cyber Security

GitHub: [Dragos S, AlucardLogistics](https://github.com/AlucardLogistics)


### Cuprins

* [Capitolul 1: Introducere](#capitolul-1-introducere)
  * [1.1 Scurt istoric al evoluției aplicațiilor mobile](#11-scurt-istoric-al-evoluției-aplicațiilor-mobile)
  * [1.2 Impactul evoluției: Oportunități și vectori de atac (Cyber Security)](#12-impactul-evoluției-oportunități-și-oportunități-de-atac-cyber-security)
  * [1.3 Cadrul de referință: Apariția OWASP Top 10 Mobile](#13-cadrul-de-referință-apariția-owasp-top-10-mobile)
  * [1.4 Studiul de caz: Aplicația model (Revolut)](#14-studiul-de-caz-aplicația-model-revolut)
  * [1.5 Comparativ: Web Application (Site Revolut) vs. Mobile Application (Android / iOS)](#15-comparativ-web-application-site-revolut-vs-mobile-application-android--ios)
* [Capitolul 2: Analiza datelor colectate și riscurile la nivel de dispozitiv](#capitolul-2-analiza-datelor-colectate-și-riscurile-la-nivel-de-dispozitiv)
  * [2.1 Arhitectura sistemului și diagrama fluxului de date (DFD cu Trust Boundaries)](#21-arhitectura-sistemului-și-diagrama-fluxului-de-date-dfd-with-trust-boundaries)
  * [2.2 Clasificarea datelor colectate și prelucrate](#22-clasificarea-datelor-colectate-și-prelucrate)
  * [2.3 Scenarii de amenințare: Dispozitiv pierdut, furat sau compromis](#23-scenarii-de-amenințare-dispozitiv-pierdut-furat-sau-compromis)
  * [2.4 Matricea de risc (STRIDE la nivel de dispozitiv)](#24-matricea-de-risc-stride-la-nivel-de-dispozitiv)
    * [Limitele de încredere (Trust Boundaries)](#limitele-de-încredere-trust-boundaries)
  * [DEMO 1: Reverse Engineering și exploatarea OWASP M1 (Improper Credential Usage)](#demo-studiul-de-caz-practic--reverse-engineering-și-exploatarea-owasp-m1-improper-credential-usage)
    * [Pasul 1: Crearea aplicației demonstrative în Android Studio](#pasul-1-crearea-aplicației-demonstrative-în-android-studio)
    * [Pasul 2: Generarea pachetului executabil .apk](#pasul-2-generarea-pachetului-executabil-apk)
    * [Pasul 3: Decompilarea cu JADX și descoperirea credențialelor](#pasul-3-decompilarea-cu-jadx-și-descoperirea-credențialelor)
    * [Concluzie: De ce este Improper Credential Usage pe primul loc în OWASP Mobile Top 10?](#concluzie-de-ce-este-improper-credential-usagepe-primul-loc-în-owasp-mobile-top-10)
* [Capitolul 3: Riscuri legate de API-uri și comunicații de rețea](#capitolul-3-riscuri-legate-de-api-uri-și-comunicații-de-rețea)
  * [3.1 Interceptarea traficului de rețea: Atacurile Man-in-the-Middle (MitM)](#31-interceptarea-traficului-de-rețea-atacurile-man-in-the-middle-mitm)
  * [3.2 Vulnerabilități specifice API-urilor mobile](#32-vulnerabilități-specifice-api-urilor-mobil)
  * [3.3 Scurgeri de date prin SDK-uri terțe (Third-Party SDKs)](#33-scurgeri-de-date-prin-sdk-uri-terțe-third-party-sdks)
  * [3.4 Controale defensive: Securizarea comunicațiilor și a API-urilor](#34-controale-defensive-securizarea-comunicațiilor-și-a-api-urilor)
  * [DEMO 2: Analiză dinamică și bypass de login screen folosind Frida (Dynamic Method Hooking)](#demo-analiză-dinamică-și-bypass-de-login-screen-folosind-frida-dynamic-method-hooking)
    * [Pasul 1: Pregătirea mediului de lucru și pornirea serverului Frida](#pasul-1-pregătirea-mediului-de-lucru-și-resetarea-proceselor-si-pornirea-serverului-frida-pe-dispozitivul-mobil)
    * [Pasul 2: Crearea scriptului de bypass (bypass.js)](#pasul-2-crearea-scriptului-de-bypass-bypassjs)
    * [Pasul 3: Identificarea PID-ului și injectarea scriptului](#pasul-3-identificarea-pid-ului-și-injectarea-scriptului)
    * [Pasul 4: Rezultatul atacului și ocolirea paginii de login](#pasul-4-rezultatul-atacului-și-ocolirea-paginii-de-login)
    * [Concluzie: De ce sunt critice măsurile RASP (Runtime Application Self-Protection)?](#concluzie-de-ce-sunt-critice-măsurile-rasp-runtime-application-self-protection)
* [Capitolul 4: Măsuri de securitate esențiale și protecția aplicațiilor mobile](#capitolul-4-măsuri-de-securitate-esențiale-și-protecția-aplicațiilor-mobile)
  * [4.1 Standardul OWASP MASVS (Mobile Application Security Verification Standard)](#41-standardul-owasp-masvs-mobile-application-security-verification-standard)
  * [4.2 Obfuscarea codului și protecția binarului (Anti-JADX)](#42-obfuscarea-codului-și-protecția-binarului-anti-jadx)
  * [4.3 Protecția la nivel de execuție — RASP (Runtime Application Self-Protection)](#43-protecția-la-nivel-de-execuție--rasp-runtime-application-self-protection)
  * [4.4 Autentificare biometrică și stocarea securizată a secretelor](#44-autentificare-biometrică-și-stocarea-securizată-a-secretelor)
  * [4.5 Riscurile descărcării aplicațiilor din surse neoficiale (Sideloading)](#45-riscurile-descărcării-aplicațiilor-din-surse-neoficiale-sideloading)
    * [1. Aplicații modificate / Repackaged Malware (Droppers)](#1-aplicații-modificate--repackaged-malware-droppers)
    * [2. Trojans bancare (Bankers) și Overlay Attacks](#2-trojans-bancare-bankers-și-overlay-attacks)
    * [3. Spyware și Infostealers (Furt de date și informații)](#3-spyware-și-infostealers-furt-de-date-și-informații)
    * [4. Ransomware mobil](#4-ransomware-mobil)
    * [5. Abuzul de servicii de accesibilitate (Android Accessibility Services Exploitation)](#5-abuzul-de-servicii-de-accesibilitate-android-accessibility-services-exploitation)
* [Concluzii finale și contribuții personale](#concluzii-finale-și-contribuții-personale)
* [Principalele cunoștințe și deprinderi dobândite](#principalele-cunoștințe-și-deprinderi-dobândite)
* [Bibliografie și resurse de referință](#bibliografie-și-resurse-de-referință)


# Capitolul 1: Introducere

## 1.1 Scurt istoric al evoluției aplicațiilor mobile

Evoluția telefoniei mobile a transformat dispozitivele portabile din simple instrumente de comunicare vocală în centre de comandă digitale pentru viața de zi cu zi.

* **Anii '90 - 2000:** Primele aplicații mobile erau utilitare de bază, preinstalate pe dispozitive cu sisteme de operare proprietare (ex: *Snake* pe Nokia sau aplicațiile de agendă/calculator de pe sistemele Symbian și BlackBerry). Acestea aveau funcționalități izolate, fără conexiune la internet.
* **2007 - 2012:** Lansarea iPhone (iOS) în 2007 și Android în 2008, urmată de apariția App Store și Google Play, a marcat tranziția către era smartphone-urilor. Aplicațiile au început să utilizeze conexiuni 3G și să ofere servicii native (rețele sociale, jocuri, navigare GPS).
* **2013 - Prezent:** Aplicațiile moderne au devenit ecosisteme complexe bazate pe arhitecturi cloud, microservicii, inteligență artificială, integrări biometrice și procesare de date în timp real.

## 1.2 Impactul evoluției: Oportunități și Oportunități de Atac (Cyber Security)

**Partea Pozitivă (Evoluție și Utilitate)**

* **Accesibilitate financiară:** Digitalizarea serviciilor bancare (FinTech) permite efectuarea de plăți, transferuri internaționale și investiții în câteva secunde.
* **Experiență optimizată (UX):** Autentificarea biometrică (FaceID / amprentă), notificările în timp real și interfețele intuitive au eliminat dependența de sucursalele fizice.
* **Interconectare:** Posibilitatea de a gestiona conturi multi-valutare și de a efectua plăți P2P (Peer-to-Peer) instant.

**Partea Negativă (Extinderea Suprafeței de Atac)**

* **Stocarea datelor sensibile pe dispozitiv:** Telefoanele au devenit depozite de date PII (Personally Identifiable Information), token-uri de sesiune și chei criptografice.
* **Complexitatea codului:** Codul compiled (APK/IPA) stocat local pe telefonul utilizatorului este expus ingineriei inverse (Reverse Engineering).
* **Dependența de API-uri:** Mutarea logicii de business pe backend expune sute de endpoint-uri REST/GraphQL care pot fi atacate dacă nu sunt securizate corespunzător.
* **Mediul neîncrezut (Untrusted Environment):** Aplicația rulează pe un sistem de operare gestionat de utilizator, care poate fi compromis (Rooted/Jailbroken) sau infectat cu malware.

## 1.3 Cadrul de Referință: Apariția OWASP Top 10 Mobile

Pe măsură ce aplicațiile mobile s-au diferențiat arhitectural de aplicațiile web clasice, comunitatea de securitate a realizat că amenințările la adresa ecosistemului mobil necesită o metodologie dedicată.

Astfel, organizația **OWASP (Open Web Application Security Project)** a creat **OWASP Mobile Top 10**, un cadru standardizată la nivel global care clasifică cele mai critice 10 riscuri de securitate din mediul mobil (ex: *Insecure Data Storage, Insecure Communication, Insecure Authentication*). Suplimentar, OWASP a dezvoltat standardele **MASVS** (Mobile Application Security Verification Standard) și **MASTG** (Mobile Application Security Testing Guide), folosite de testerii de penetrare pentru evaluarea aplicațiilor mobile.

## 1.4 Studiul de Caz: Aplicația Model (Revolut)

Pentru acest proiect de modelare a amenințărilor, aplicația aleasă ca model este **Revolut**.

**De ce folosim această aplicație?**

1. **Model de FinTech Internațional:** Revolut operează atât în Uniunea Europeană (sub licență bancară europeană), cât și în SUA, făcându-l relevant pentru un spectru larg de reglementări (GDPR, PSD2/Open Banking, GLBA).
2. **Sursă Bogată de Functionalități:** Spre deosebire de o aplicație simplă de fitness sau e-commerce, Revolut combină servicii bancare (IBAN, carduri fizice/virtuale), investiții (acțiuni, crypto), verificări KYC complexe (biometrie și acte de identitate) și funcții P2P bazate pe geolocație și contacte.
3. **Nivel Ridicat de Securitate:** Fiind o aplicație financiară de nivel critic, Revolut implementează controale de securitate avansate (Certificate Pinning, detectare de Root/Jailbreak, tokenizare), oferind un studiu de caz excelent pentru analiza comparativă dintre amenințări și măsurile de protecție necesare.

## 1.5 Comparativ: Web Application (Site Revolut) vs. Mobile Application (Android / iOS)

O greșeală frecventă în securitatea cibernetică este presupunerea că o aplicație mobilă este doar un site web împachetat într-un ecran mai mic. În realitate, arhitectura, mediul de rulare și vectorii de atac sunt fundamental diferiți.

![](../resurse/mobile-vs-browser-server.png)

**Are o aplicație mobilă mai multe sau mai puține amenințări decât o aplicație Web?**

**Aplicația mobilă are o suprafață de atac mai mare și mai complexă (mai multe tipuri de amenințări).**

Deși ambele tipuri de aplicații depind de securitatea API-urilor din backend, aplicația mobilă introduce o întreagă clasă de **amenințări pe partea de client (Client-Side Risks)** pe care aplicațiile web nu le au:

1. **Aplicația Web (Site-ul):** Rularea are loc într-un mediu complet izolat de browser (Browser Sandbox). Utilizatorul sau atacatorul nu descarcă codul sursă complet al aplicației pe calculatorul său, ci doar fișiere HTML/JS temporare.
2. **Aplicația Mobilă (Android/iOS):** Pachetul complet al aplicației (fișierul .apk sau .ipa) este instalat direct pe stocarea locală a dispozitivului. Acest lucru oferă atacatorului acces fizic direct la codul binar compiled, permițând analiză statică și dinamică offline.

**Tablou Comparativ al Amenințărilor**

| **Dimensiune de Securitate** | **Web Application (Web Revolut)** | **Mobile Application (Android / iOS)** |
| --- | --- | --- |
| **Posesia Codului Sursă** | **Privat.** Codul de backend (Java, Node.js, Go) rămâne pe serverele Revolut. Clientul vede doar HTML/JS. | **Public/Explicat.** Binarul (APK/IPA) este pe telefon. Poate fi decompilat (JADX, Ghidra) pentru a extrage logica sau API-urile. |
| **Gestiunea Sesiunii** | **Sesiuni Scurte.** Expirează rapid la închiderea tab-ului sau după inactivitate (bazate pe Cookie-uri HTTPOnly). | **Sesiuni Lungi.** Utilizatorul rămâne autentificat săptămâni/luni folosind Refresh Tokens salvate pe disc pentru acces rapid cu amprentă/FaceID. |
| **Mediul de Rulare** | **Controlat de Browser.** Browserul aplică automat reguli stricte (SOP - Same Origin Policy, protecții XSS/CSRF). | **Mediu Ostil (Untrusted OS).** Telefonul poate fi Rootat (Android) sau Jailbroken (iOS), anulând toate protecțiile sistemului de operare. |
| **Vectori de Atac Locali** | Limitați la atacuri de tip Cross-Site Scripting (XSS) sau deturnare de sesiune prin browser extensions malțioase. | Malware local pe telefon, Keyloggers, atacuri de tip Overlay (ecran fals peste aplicație), intercepție de SMS/OTP, hooking de memorie (Frida). |
| **Actualizări de Securitate** | **Instantanee.** O vulnerabilitate rezolvată pe server protejează 100% din utilizatori imediat. | **Lente.** Depind de utilizator să își actualizeze aplicația din App Store/Play Store. Versiuni vechi și vulnerabile pot rămâne active. |

**Schimbarea de mentalitate (Mindset Shift): Pentest Web vs. Pentest Mobile**

Modul de gândire al unui tester de penetrare se modifică semnificativ în funcție de țintă:

**a. Gândirea în Pentesting Web: „Atacă Serverul prin Browser”**

* Focusul principal este pe **comunicarea client-server** și pe procesarea pe backend.
* Întrebări tipice ale pentesterului: *„Pot injecta cod SQL în acest formular?”, „Pot executa XSS pentru a fura cookie-ul de sesiune?”, „Există vulnerabilități de CSRF sau SSRF pe server?”*
* Suprafața de atac este concentrată pe endpoint-urile expuse public pe Web.

**b. Gândirea în Pentesting Mobile: „Atacă Binarul, Stocarea Locală și Mediul de Rulare”**

* Focusul devine **hibrid**: pe de o parte se testează API-urile de backend (la fel ca la web), dar pe de altă parte se atacă **aplicația pe telefon**.
* Întrebări tipice ale pentesterului mobil:
  1. **Inspecție binară:** *„Ce informații pot extrage dacă decompilez fișierul APK/IPA? Există chei secrete sau endpoint-uri nepublicate hardcodate în cod?”*
  2. **Securitatea Stocării:** *„Ce rămâne salvat în baze de date SQLite, SharedPreferences sau loguri de sistem dacă telefonul este furat?”*
  3. **Analiză în Memorie (Dynamic Hooking):** *„Dacă folosesc un framework precum* ***Frida****, pot modifica instrucțiunile din memorie în timp ce aplicația rulează pentru a sări peste ecranul de introducere a PIN-ului sau pentru a dezactiva verificarea de amprentă?”*
  4. **Integritatea Rețelei:** *„Cum pot ocoli protecțiile de SSL Certificate Pinning pentru a intercepta și modifica traficul dintre aplicație și serverul Revolut?”*

**Diferențe între platformele mobile: Android vs. iOS**

În cadrul analizei mobile, există diferențe specifice între cele două sisteme de operare majore:

* **Android (Ecosistem Deschis):**
  + Folosește pachete .apk / .aab bazate în principal pe Java/Kotlin.
  + Decompilarea este foarte ușoară (se obține cod aproape identic cu cel sursă folosind JADX).
  + Suprafață de atac mai mare din cauza fragmentării versiunilor de Android și a permisiunilor flexibile (ex: permisiuni de Accesibilitate pe care malware-ul le poate exploata pentru atacuri Overlay).
* **iOS (Ecosistem Închis / Sandbox Strict):**
  + Folosește pachete .ipa compilate în cod nativ (Swift/Objective-C) pentru arhitecturi ARM.
  + Decompilarea produce cod dezasamblat (Assembly/Pseudocod C via Ghidra/Hopper), fiind mai dificil de analizat static.
  + Aplicațiile sunt criptate de Apple în App Store (necesită un dispozitiv Jailbroken pentru a decripta binarul din memorie înainte de analiză).
  + Arhitectură de securitate mai rigidă prin hardware (Secure Enclave), dar vulnerabilă la exploatări de Kernel/Jailbreak pe anumite versiuni de iOS.

# Capitolul 2: Analiza Datelor Colectate și Riscurile la Nivel de Dispozitiv

Acest capitol examinează în detaliu amprenta informațională a aplicației Revolut pe dispozitivul mobil și analizează amenințările la care sunt expuse aceste date în caz de pierdere, furt sau compromitere a sistemului de operare.

## 2.1 Arhitectura Sistemului și Diagrama Fluxului de Date (DFD with Trust Boundaries)

Pentru a identifica eficient suprafața de atac și componentele critice ale ecosistemului mobil (ex: Revolut), este necesară maparea tuturor componentelor care interacționează cu datele utilizatorului și delimitarea zonelor de încredere (**Trust Boundaries**).

![](../resurse/DFD-horizontal.png)

* **Descrierea Fluxurilor de Date (Data Flows) și a Perimetrelor de Securitate**
* **Fluxul 1 — Data Input (PIN, Biometrie):** Preluarea datelor de la utilizator/interfață către stocarea și procesarea locală (trece prin *Trust Boundary 1: User/UI*).
* **Risc:** Atacuri de tip Overlay (suprapunere de ecrane false), Keylogging sau interceptarea datelor introduse pe ecranul blocate.
* **Fluxul 2 — Interacțiunea cu Memoria Procesului:** Tranziția instrucțiunilor din runtime-ul aplicației (Android JVM / iOS Runtime) în memoria RAM (trece prin *Trust Boundary 2: Device/OS*).
* **Risc:** Inspecția dinamice a memoriei, interceptarea funcțiilor în timp real prin Frida Hooking sau depanare neautorizată (Ptrace).
* **Fluxul 3 — Request-uri API (HTTPS/TLS):** Transmiterea cererilor de la aplicația mobilă către infrastructura centrală (trece prin *Trust Boundary 3: Network*).
* **Risc:** Interceptarea traficului prin atacuri Man-in-the-Middle (MitM) dacă nu se aplică SSL Pinning sau utilizarea de proxy-uri de interceptare (Burp Suite).
* **Fluxul 4 — Procesare Backend & Core Banking:** Schimbul de date între API Gateway, serverele centrale și bazele de date / serviciile bancare (PSD2).
* **Risc:** Vulnerabilități la nivel de API (ex: BOLA/IDOR, manipularea parametrilor de sesiune sau interogări neautorizate).
* **Delimitarea Limitelor de Încredere (Trust Boundaries)**
* **Trust Boundary 1 (User/UI):** Separă domeniul neîncrezut al utilizatorului (input-ul tactil și potențialul malware instalat pe dispozitiv) de modulele locale de stocare ale telefonului.
* **Trust Boundary 2 (Device/OS):** Separă nivelul aplicației mobile (sandbox-ul standard) de sistemul de operare și memoria RAM a procesului. Încălcarea acestei limite are loc pe telefoanele cu Root/Jailbreak.
* **Trust Boundary 3 (Network):** Delimitează mediul mobil local (care poate fi conectat la rețele Wi-Fi publice nesecurizate) de zona securizată cloud a infrastructurii Revolut (Core Banking & API Gateway).

## 2.2 Clasificarea Datelor Colectate și Prelucrate

O aplicație de tehnologie financiară (FinTech) modernă funcționează ca un nod central de date. Pentru a respecta cerințele de conformitate (KYC/AML) și pentru a oferi servicii personalizate, Revolut colectează mai multe categorii de date, clasificate după nivelul de sensibilitate:

![](../resurse/Date-Colectare-Revolut.png)

**A. Date de Identificare și KYC (Know Your Customer) — *Nivel de Risc: Critic***

* **Date de stare civilă:** Nume, prenume, data nașterii, adresa de domiciliu, cetățenia, numărul de identificare național (CNP în România, SSN în SUA).
* **Documente oficiale:** Fotografii/scanări ale cărții de identitate, pașaportului sau permisului de conducere.
* **Date biometrice:** Scanări faciale 3D (*Liveness Check*) folosite la înregistrare și la recuperarea contului.

**B. Date Financiare și Tranzacționale — *Nivel de Risc: Înalt***

* **Identificatori de cont:** Coduri IBAN (multi-valutare), solduri în timp real, istoricul detaliat al tranzacțiilor și al transferurilor P2P.
* **Instrumente de plată:** Numărul cardului fizic și virtual (PAN), data expirării și codul CVV/CVC (pentru cardurile virtuale de unică folosință, generat dinamic).
* **Portofolii conexe:** Active în criptomenede, acțiuni, mărfuri (aur/argint) și produse de economisire (Vaults).

**C. Secrete și Date de Autentificare — *Nivel de Risc: Critic***

* **Credențiale:** Codul PIN al aplicației (passcode).
* **Jetoane de sesiune:** Tokens de tip OAuth 2.0 / JWT (Access Token și Refresh Token) care mențin utilizatorul autentificat.
* **Date biometrice locale:** Șabloane de amprentă/FaceID (gestionate direct de OS, dar folosite de aplicație prin API-uri dedicate).

**D. Date de Telemetrie și Context — *Nivel de Risc: Mediu***

* **Amprenta dispozitivului (Device Fingerprinting):** Modelul telefonului, versiunea sistemului de operare, adresa MAC, numărul IMEI/IDFV, indicatori de stocare.
* **Date de localizare:** Coordonate GPS precise (utilizate pentru protecția împotriva fraudei la plăți fizice cu cardul).
* **Graful de conexiuni:** Lista de contacte din telefon (pentru identificarea altor utilizatori Revolut și transferuri rapide).

## 2.3 Scenarii de Amenințare: Dispozitiv Pierdut, Furat sau Compromis

Conform modelului de securitate mobil, dispozitivul fizic este considerat un **mediu neîncrezut (untrusted environment)**. Amenințările sunt împărțite în două categorii majore: atacuri cu acces fizic și atacuri prin intermediul sistemului de operare compromis.

**Scenariul 1: Acces Fizic (Telefon Pierdut sau Furat)**

Atunci când un atacator obține acces fizic la telefon, obiectivele sale sunt ocolirea ecranoarelor de blocare și extragerea datelor din stocarea locală.

![](../resurse/Dispositiv-Pierdut-Furat.png)

1. **Extragerea datelor din stocare necriptată (Insecure Data Storage):**
   * **Mecanism:** Dacă o aplicație salvează jetoane de sesiune sau date despre cont în fișiere de preferințe necriptate (SharedPreferences pe Android sau NSUserDefaults pe iOS) ori baze de date SQLite simple, atacatorul poate extrage fișierele conectând telefonul la un calculator via adb (Android Debug Bridge) sau prin utilitare de backup.
   * **Impact:** Acces neautorizat la cont fără cunoașterea PIN-ului.
2. **Scurgeri prin notificări pe ecranul blocat:**
   * **Mecanism:** Notificările pentru codurile OTP (One-Time Password) trimise prin SMS sau notificările Push de confirmare a tranzacțiilor pot fi vizibile direct pe ecranul blocat.
   * **Impact:** Ocolirea autentificării în doi pași (2FA) pentru tranzacții online.
3. **Inspecția memoriei cache de interfață (Task Switcher Snapshots):**
   * **Mecanism:** Când aplicația este trecută în fundal, sistemul de operare face o captură de ecran automată pentru a o afișa în comutatorul de sarcini (Task Switcher). Dacă aplicația nu maschează interfața, imaginea salvată necriptat pe disc poate conține soldul contului sau detalii despre card.

**Scenariul 2: Sistem de Operare Compromis (Rooted / Jailbroken / Malware)**

În acest scenariu, telefonul rămâne în posesia utilizatorului, dar securitatea OS-ului este anulată fie intenționat de utilizator (Root/Jailbreak), fie prin infectarea cu malware.

![](../resurse/OS-Compromis.png)

1. **Analiză dinamică și Runtime Hooking (ex: Frida, Xposed):**
   * **Mecanism:** Pe un dispozitiv cu privilegii de root sau jailbreak, izolare între aplicații (Sandboxing) dispare. Un atacator sau un modul malware poate injecta cod în procesul aplicației Revolut în timp ce aceasta rulează în RAM.
   * **Impact:** Modificarea valorilor de retur ale funcțiilor interne (ex: forțarea unei funcții checkPin() să returneze true indiferent de PIN-ul introdus) sau dezactivarea apelurilor de verificare a amprentei.
2. **Atacuri de tip Overlay (Suprapunere de interfață):**
   * **Mecanism:** Folosind servicii de accesibilitate sau permisiuni de afișare peste alte aplicații (specifice Android), o aplicație rău-intenționată detectează deschiderea aplicației Revolut și afișează instant o fereastră identică de autentificare peste cea reală.
   * **Impact:** Utilizatorul introduce PIN-ul în interfața falsă, iar credențialele sunt capturate de malware.
3. **Keylogging și Screen Scraping:**
   * **Mecanism:** Malware-ul utilizează permisiuni extinse de sistem pentru a înregistra coordonatele atingerilor de pe ecran sau pentru a face capturi de ecran continue în timpul utilizării tastaturii virtuale.

## 2.4 Matricea de Risc (STRIDE la nivel de Dispozitiv)

Pentru a sintetiza amenințările la nivelul dispozitivului mobil, aplicăm componentele relevante din metodologia **STRIDE** (faza de analiză pe client):

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Componentă (Asset)** | **Categorie STRIDE** | **Descrierea Amenințării (Threat)** | **Impact (Risc)** | **Trust Boundary Breach** | **Control Defensiv (Remediation)** | **Risc Rezidual** |
| **Identificator Dispozitiv** | **Spoofing** | Folosirea unui emulator/dispozitiv clonat pentru a impersona dispozitivul legitim al clientului. | **Înalt** | **Da (Device Perimeter)** | Autentificare Multi-Factor (MFA) obligatorie și Device Fingerprinting avansat. | **Scăzut** |
| **Cod Compilat în RAM** | **Tampering** | Modificarea instrucțiunilor binarului din memorie (ex: bypass UI cu Frida). | **Critic** | **Da (OS Sandbox)** | Implementarea protecțiilor RASP (Root & Hooking Detection). | **Mediu** |
| **Jurnale de Audit Locale** | **Repudiation** | Efectuarea unei tranzacții de pe un dispozitiv compromis și contestarea ei ulterioară. | **Mediu** | **Nu** | Semnarea criptografică a tranzacțiilor (SCA) cu chei hardware. | **Scăzut** |
| **Stocare Locală (SQLite/Cache)** | **Information Disclosure** | Extragerea cheilor din *SharedPreferences* sau citirea datelor din memoria cache necriptată. | **Critic** | **Da (Storage Layer)** | Salvarea cheilor în *Android KeyStore* (Hardware-backed) și UI Hardening (ștergere cache). | **Scăzut** |
| **Componente Intent / Deep Links & Interfață UI** | **Denial of Service** | Trimiterea de Intent-uri malformaționate către componente exportate sau fuzzing pe scheme Deep Link pentru a provoca crash-ul aplicației (Local DoS), ori blocarea contului prin request-uri API repetate. | **Mediu** | **Da (App IPC / REST API)** | Validarea strictă a datelor de intrare (try-catch pe Intent extras), setarea android:exported="false" și implementarea Rate-Limiting / WAF pe backend. | **Scăzut** |
| **Proces OS (iOS/Android)** | **Elevation of Privilege** | Exploatarea vulnerabilităților de kernel ale OS-ului pentru a părăsi sandbox-ul aplicației. | **Critic** | **Da (OS Kernel)** | Aplicarea FLAG\_SECURE și limitarea funcționării pe versiuni vechi de OS. | **Mediu** |

### Limitele de Încredere (Trust Boundaries):

* **Device Perimeter:** Limita dintre utilizator și telefon. O încălcare aici înseamnă că atacatorul a obținut fizic sau virtual acces la nivelul ecranului.
* **OS Sandbox:** Limita impusă de sistemul de operare între aplicații. Încălcarea (prin Root/Jailbreak) permite unui proces malițios să citească memoria aplicației bancare.
* **Storage Layer:** Limita de protecție a datelor în repaus. Încălcarea permite extragerea fișierelor persistente direct de pe disc.

# DEMO: Studiul de Caz Practic — Reverse Engineering și Exploatarea OWASP M1 (Improper Credential Usage)

Această secțiune prezintă o demonstrație practică a modul în care binarul unei aplicații mobile Android poate fi decompilat pentru a extrage informații sensibile stocate necorespunzător. Experimentul exemplifică riscul clasificat pe primul loc în cadru **OWASP Mobile Top 10** (*M1: Improper Credential Usage / Insecure Authentication*).

## Pasul 1: Crearea aplicației demonstrative în Android Studio

A fost dezvoltată o aplicație Android simplă în mediul **Android Studio** pe sistemul de operare **Pop!\_OS Linux**. Aplicația simulează un ecran de autentificare (LoginActivity), unde validarea credențialelor se face direct pe partea de client prin compararea datelor introduse de utilizator cu două variabile de tip constantă (HARDCODED\_USER și HARDCODED\_PASS).

![](../resurse/aplicatia-in-android.png)

## Pasul 2: Generarea pachetului executabil .apk

După scrierea codului, aplicația a fost compilată pentru a genera pachetul binar executabil pe care utilizatorii îl instalează pe dispozitiv. Din meniul Android Studio (*Build → Build APKs*), a fost generat fișierul app-debug.apk si redenumita pentru impact in most-secure-app.apk.

În mediul Pop!\_OS, fișierul binar compilat a fost localizat în directorul de build al proiectului: app/build/outputs/apk/debug/app-debug.apk

![](../resurse/apk-generat.png)

## Pasul 3: Decompilarea cu JADX și descoperirea credențialelor

Folosind utilitarul de reverse engineering **JADX-GUI** instalat pe Pop!\_OS Linux, binarul app-debug.apk a fost supus unui proces de decompilare pentru a reconstrui codul Java din fișierele bytecode .dex.

Un atacator nu trebuie să citească mii de linii de cod de mână. Prin utilizarea funcției de căutare globală (*Global Search* / Ctrl+Shift+F) din JADX și interogarea unor termeni cheie precum password, user sau admin, credențialele hardcodate au fost identificate instantaneu în clasa LoginActivity.

![](../resurse/decompilare-gasire-parola-user.png)

## Concluzie: De ce este Improper Credential Usagepe primul loc în OWASP Mobile Top 10?

Identificarea credențialelor hardcodate și utilizarea necorespunzătoare a autentificării ocupă poziția **M1** în clasamentul OWASP Mobile din mai multe motive critice:

1. **Binarul este întotdeauna pe dispozitivul atacatorului:** Spre deosebire de o aplicație web unde codul de backend rămâne protejat pe server, pachetul mobil (.apk / .ipa) este salvat în întregime pe stocarea locală. Fără măsuri de **obfuscare** (ex: ProGuard / R8 / DexGuard) sau securizare criptografică în hardware, codul este o „carte deschisă”.
2. **Impact Devastator:** Dacă credențialele stocate în cod sunt chei de API generale, parole de baze de date sau secrete de criptare folosite de toți utilizatorii, compromiterea unui singur APK expune întreaga infrastructură a aplicației și backend-ul acesteia.
3. **Efort Minim de Exploatare:** Așa cum s-a demonstrat în acest demo, identificarea vulnerabilității nu necesită cunoștințe avansate de hacking sau unelte costisitoare utilitare de bază open-source precum JADX și câteva secunde de analiză sunt suficiente.

**Analiză Comparativă: Cod Sursă vs. Decompilare JADX și Remediere (Before vs. After)**

Analiza realizată pe aplicația MostSecureApp arată modul exact în care instrucțiunile scrise în **Kotlin (Jetpack Compose)** sunt transpuse în fișierul .apk și ulterior expuse în decompilatorul **JADX-GUI**.

**1. Versiunea Vulnerabilă (Cod Sursă vs. Cod Decompilat)**

* **În Android Studio (Codul Sursă Kotlin — LoginActivity.kt):** Aplicația folosește un bloc de validare locală pe butonul de *Submit* (onClick), comparând direct variabilele username și password cu valorile text:

![](../resurse/remediere-jadx-before.png)

* **În JADX-GUI (Codul Decompilat LoginActivityKt.java):** Deși Kotlin compilează codul folosind Lambdas și verificări de tip Intrinsics.areEqual, valorile de verificare **rămân complet necriptate în memorie**, fiind identificate instantaneu:

![](../resurse/remediere-jadx-decompilat-before.png)

**2. Versiunea Remediată (AFTER — Remedierea Arhitecturală)**

Pentru a elimina complet vulnerabilitatea, logica de verificare este extrasă din interfața grafică (UI) și mutată pe server.

* **În Android Studio (Cod Kotlin Securizat — LoginActivity.kt):** Codul sursă nu mai stochează valorile "Dragos" și "4321Inad". Acesta trimite o cerere de autentificare prin rețea:

![](../resurse/remediere-jadx-after.png)

* **Chiar dacă atacatorul găsește mesajul de eroare sau variabila password, în tot codul decompilat nu mai există nicio valoare hardcodată. Tot ce poate vedea este că aplicația trimite datele introduse de utilizator către un server extern pentru validare. Credențialele nu mai pot fi furate din binarul .apk.3. Concluzie Practică**

Experimentul demonstrează regula fundamentală de securitate mobilă: **Clientul mobil este un mediu neîncredințat (*Untrusted Client*)**.

Toate fișierele executabile .apk pot fi citite prin decompilare. Orice verificare de securitate de tip if (user == "..." && pass == "...") scrisă local pe telefon oferă o iluzie de securitate și expune credențialele oricărui utilizator care folosește unelte de analiză precum JADX.

**Concluzie:** Validarea autentificării nu trebuie să aibă loc **NICIODATĂ** exclusiv pe partea de client, iar secretele sau credențialele nu trebuie stocate direct în codul sursă al aplicației mobile.

# Capitolul 3: Riscuri Legate de API-uri și Comunicații de Rețea

Aplicațiile mobile moderne (inclusiv Revolut) funcționează ca un client de interfață (Rich Client). Ele depind aproape 100% de o infrastructură centralizată de API-uri (REST/GraphQL) pentru a executa tranzacții, a verifica soldul sau a autoriza utilizatori.

## 3.1 Interceptarea Traficului de Rețea: Atacurile Man-in-the-Middle (MitM)

Atunci când o aplicație mobilă efectuează cereri către backend, datele călătoresc prin multiple noduri de rețea (Wi-Fi public, furnizori de telefonie mobilă, routere intermediare).

* **Mecanismul de atac:** Un atacator aflat pe aceeași rețea (ex: Wi-Fi dintr-o cafenea) poate configura un proxy de interceptare (precum **Burp Suite** sau **OWASP ZAP**) și poate genera un certificat SSL/TLS fals, dar de încredere pe telefonul de test.
* **Riscul:** Dacă aplicația mobilă acceptă orbeste orice certificat din depozitul de certificate al sistemului de operare, atacatorul poate decripta, citi și modifica în timp real traficul HTTPS (inclusiv jetoanele de sesiune, codurile PIN transmise și datele tranzacțiilor).

## 3.2 Vulnerabilități Specifice API-urilor Mobil

Odată ce traficul dintre aplicația mobilă și backend este interceptat sau înțeles prin decompilare, atacatorii își îndreaptă atenția direct asupra API-urilor serverului.

**a. BOLA / IDOR (Broken Object Level Authorization) — *Cel mai critic risc API***

* **Descriere:** Apare atunci când API-ul nu verifică dacă utilizatorul autentificat are dreptul să acceseze resursa cerută.
* **Scenariu pe Revolut:** Aplicația face o cerere HTTP pentru obținerea istoricului de tranzacții: GET /api/v2/accounts/100452/transactions
* **Exploatare:** Pentesterul schimbă parametrul 100452 cu 100453 în Burp Suite. Dacă serverul returnează datele altui client fără să verifice dacă 100453 aparține sesiunii curente, avem o vulnerabilitate masivă de BOLA/IDOR.

**b. Broken Authentication & Token Mismanagement**

* **Descriere:** Gestionarea defectuoasă a jetoanelor OAuth / JWT.
* **Riscuri:**
* Transmiterea token-urilor de autentificare în URL sub formă de parametri de interogare (GET /api/user?token=xyz), ceea ce duce la salvarea lor în logurile serverelor proxy.
* Lipsa expirării adecvate a *Refresh Token-urilor* sau posibilitatea de a le refolosi după ce utilizatorul a apăsat pe „Log Out”.

**c. Excessive Data Exposure (Expunerea Excesivă a Datelor)**

* **Descriere:** API-ul trimite în răspunsul JSON un obiect complet de date din baza de date, bazându-se pe aplicația mobilă să filtreze doar câmpurile necesare pe ecran.
* **Scenariu:** La căutarea unui utilizator după numărul de telefon pentru un transfer P2P, API-ul returnează: nume, prenume, poză de profil, DAR ȘI adresa de domiciliu, CNP-ul și starea contului. Chiar dacă interfața mobilă arată doar numele, atacatorul vede tot răspunsul în Burp Suite.

## 3.3 Scurgeri de Date prin SDK-uri Terțe (Third-Party SDKs)

Aplicațiile de nivel enterprise integrează zeci de biblioteci terțe pentru:

* Analiză și telemetrie (ex: Google Analytics, Adjust, AppsFlyer).
* Raportare de erori și crash-uri (ex: Firebase Crashlytics, Sentry).
* Suport clienți / Chat (ex: Intercom, Zendesk).

**Risc de Securitate:** Aceste SDK-uri rulează cu aceleași privilegii ca aplicația principală. Dacă un SDK terț necriptat sau configurat greșit trimite date în fundal către serverele sale, acesta poate colecta neintenționat clipboard-ul, datele de geolocație sau chiar fragmente din răspunsurile financiare, generând o scurgere de date (*Data Leakage*) dificil de detectat.

## 3.4 Controale Defensive: Securizarea Comunicațiilor și a API-urilor

Pentru a contracara aceste amenințări, aplicațiile de tip Revolut implementează protecții avansate:

1. **SSL / TLS Certificate Pinning (Public Key Pinning):**
   * **Cum funcționează:** Aplicația mobilă conține hardcodat (sau criptat) amprenta (*hash-ul*) certificatului public al serverului legitim Revolut.
   * **Rezultat:** Atunci când o cerere este făcută, aplicația compară certificatul primit cu cel stocat intern. Dacă un atacator încearcă să intercepteze traficul folosind un certificat fals (cum face Burp Suite), conexiunea este respinsă instantaneu.
2. **Gruparea și Obfuscarea Parametrilor (Custom Mutual TLS / HMAC Signing):**
   * Semnarea fiecărei cereri API cu un hash criptografic (HMAC) generat dinamic pe telefon pe baza corpului cererii și a unui secret temporar. Dacă atacatorul modifică suma tranzacției în Burp Suite, semnătura devine invalidă, iar serverul respinge pachetul.
3. **Validare Strictă de Autorizare pe Backend:**
   * Serverul nu trebuie să aibă niciodată încredere în datele venite de la aplicația mobilă. Fiecare cerere trebuie să valideze drepturile token-ului de sesiune direct pe baza de date (prevenind atacurile BOLA).

# DEMO: Analiză Dinamică și Bypass de Login Screen Folosind Frida (Dynamic Method Hooking)

Acest al doilea experiment practic exemplifică o tehnică avansată de securitate: **analiza dinamică** și **injecția de cod la nivel de proces** (Dynamic Instrumentation / Method Hooking) folosind cadrul open-source **Frida**.

Spre deosebire de dezasamblarea statică (JADX), Frida permite interceptarea și modificarea instrucțiunilor din memorie ale aplicației în timp ce aceasta rulează pe telefonul fizic (OnePlus 7 Pro), fără a fi necesară modificarea binarului .apk.

## Pasul 1: Pregătirea Mediului de Lucru și Resetarea Proceselor Si Pornirea Serverului Frida pe Dispozitivul Mobil

Pentru a garanta o stare curată de testare pe laptopul cu **Pop!\_OS Linux**, mai întâi a fost oprit complet procesul aplicației com.example.mostsecureapp și au fost curățate sesiunile reziduale ale serverului Frida de pe telefonul mobil conectat prin ADB.

Dupa care pe telefonul fizic (OnePlus 7 Pro cu drepturi de Root), a fost pornit în fundal serviciul frida-server localizat în /data/local/tmp/:

![](../resurse/frida-server-start-setup.png)

## Pasul 2: Crearea Scriptului de Bypass (bypass.js)

Pentru a ocoli ecranul de autentificare fără a introduce credențiale, a fost creat un script JavaScript în directorul ~/Documents/Mobile-Threats-Project/bypass.js.

Scriptul folosește un mecanism modern bazat pe Jetpack (androidx.activity.ComponentActivity), făcând **hooking** pe metoda onUserInteraction(). La prima atingere a ecranului, scriptul creează dinamic un nou Intent către MainActivity, forțând aplicația să încarce interfața principală în mod automat:

![](../resurse/bypass-script.png)

## Pasul 3: Identificarea PID-ului și Injectarea Scriptului

Aplicația MostSecureApp a fost deschisă pe ecranul OnePlus 7 Pro (afișând ecranul de Login). Din terminalul Pop!\_OS, s-a interogat lista proceselor active de pe telefon pentru a identifica ID-ul unic al procesului (PID):

După identificarea PID-ului corespunzător aplicației, scriptul bypass.js a fost injectat direct în procesul activ din memorie:

![](../resurse/injecting-bypass-into-test-app.png)

## Pasul 4: Rezultatul Atacului și Ocolirea Paginii de Login

Odată ce scriptul a fost injectat cu succes, a fost suficientă o simplă atingere pe ecranul telefonului (oriunde pe ecran). Frida a interceptat evenimentul tactil, a executat secvența de routare directă și a deschis instantaneu ecranul MainActivity, ignorând complet validarea numelui de utilizator și a parolei.

## Concluzie: De ce sunt critice măsurile RASP (Runtime Application Self-Protection)?

Acest demo demonstrează că un atacator cu un telefon rootat poate manipula fluxul de execuție al unei aplicații Android în timp real.

Pentru a opri atacurile de tip Frida în aplicațiile financiare, sunt necesare măsuri defensive avansate de tip **RASP**:

* **Root & Debugger Detection:** Blocarea executării aplicației dacă se detectează un mediu de debug sau binare de Root (su).
* **Anti-Frida Checks:** Scanarea porturilor locale (ex: portul 27042) și a memoriei procesului pentru a detecta prezența utilitarului frida-server.
* **Code Integrity Protection:** Verificarea în timp real dacă codul claselor din memorie a fost modificat prin hooking.
* **Ce a realizat atacul:** Scriptul Frida a modificat doar starea locală din memoria procesului de pe telefon, forțând sistemul de operare Android să afișeze ecranul MainActivity. Este un bypass la nivel de client/UI.
* **Limita atacului:** Acest bypass **nu compromite contul de pe backend**. Fără furnizarea unor credențiale valide pe ecranul de Login, serverul central nu emite un jeton de sesiune autentificat (ex: token OAuth/JWT). Ca urmare, orice încercare ulterioară din MainActivity de a efectua operațiuni care necesită date de la server (interogări API, tranzacții) va eșua cu un cod de eroare HTTP 401 Unauthorized.
* **De ce este totuși un risc de securitate?** Dacă aplicația păstrează date sensibile cache-uite local pe dispozitiv sau dacă dezvoltatorii au comis o greșeală de arhitectură de tip **BOLA/IDOR** (nu verifică token-ul de sesiune pe backend pentru fiecare acțiune din MainActivity), atacatorul ar putea accesa informații confidențiale din interfață.

# Capitolul 4: Măsuri de Securitate Esențiale și Protecția Aplicațiilor Mobile

Pentru a contracara atacurile statice și dinamice exemplificate în cadrul demonstrațiilor practice, aplicațiile de nivel enterprise (în special cele din sectorul FinTech, cum este Revolut) adoptă o abordare defensivă în profunzime (*Defense in Depth*). Aceasta combină standardele internaționale de securitate cu tehnologii avansate de protecție la nivel de cod și execuție.

## 4.1 Standardul OWASP MASVS (Mobile Application Security Verification Standard)

**MASVS** este cadrul de referință mondial utilizat de arhitecții de securitate și auditori pentru a proiecta și evalua aplicațiile mobile. Standardul structurează cerințele pe mai multe niveluri de securitate:

| **Nivel MASVS** | **Orientare și Aplicabilitate** | **Descriere și Cerințe** |
| --- | --- | --- |
| **MASVS-L1** | **Standard Security** (Toate aplicațiile mobile) | Stabilește cerințele de bază pentru igiena codului: stocarea securizată a datelor, comunicații HTTPS/TLS criptate și gestionarea corectă a sesiunilor. |
| **MASVS-L2** | **Defense-in-Depth** (Aplicații FinTech / Banking) | Adaugă controale stricte pentru aplicații critice: autentificare multifactor (MFA), protecții împotriva atacurilor complexe la nivel de rețea și validare riguroasă a tranzacțiilor. |
| **MASVS-R** | **Resilience Against Reverse Engineering** | Se aplică în combinație cu L1 sau L2 pentru a împiedica analizarea binarului (decomplilarea) și modificarea dinamică a codului în memorie. |

## 4.2 Obfuscarea Codului și Protecția Binarului (Anti-JADX)

Așa cum s-a observat în **JADX Demo**, codul sursă neprotejat compilat în fișiere .apk poate fi dezasamblat aproape integral cu utilitare precum JADX. Pentru a preveni această vulnerabilitate, se folosesc tehnici de obfuscare:

* **Minificarea și Redenumirea Identificatorilor (ProGuard / R8 / DexGuard):** Redenumirea claselor, metodelor și variabilelor descriptive (ex: LoginActivity, verifyLogin()) în denumiri lipsite de înțeles contextual (ex: a, b.a()), îngreunând masiv analiza manuală.
* **Criptarea Șirurilor de Text (String Encryption):** Toate constantele de tip text, URL-urile de API și cheile criptografice sunt stocate sub formă criptată în binar și decriptate doar dinamic, în memorie, la momentul executării.
* **Control Flow Obfuscation:** Alterarea structurii algoritmice a codului prin adăugarea de instrucțiuni de umplutură (*dead code*) și bucle complexe, fără a schimba rezultatul final, pentru a deruta dezasamblatoarele automate.

## 4.3 Protecția la Nivel de Execuție — RASP (Runtime Application Self-Protection)

Pentru a bloca atacurile de tip **Method Hooking** și **Injecție de Cod în memorie** demonstrate în **Frida Demo 2**, aplicația trebuie să fie conștientă de mediul în care rulează și să se auto-protejeze:

* **Detecția Mediilor de Debugging și Root:** Aplicația verifică în mod continuu dacă rulează într-un emulator, dacă dispozitivul are acces Root (/system/app/Superuser.apk sau binarul su) sau dacă este atașat un debugger extern (android.os.Debug.isDebuggerConnected()).
* **Protecția Anti-Frida:** Aplicația scanează memoria procesului și porturile interne de rețea (ex: portul 27042 utilizat implicit de frida-server) și verifică integritatea fișierelor din /proc/self/maps. Dacă este detectat un hook, aplicația își închide procesul instantaneu.
* **Integrity Checking (Anti-Tampering):** Verificarea semnăturii digitale a pachetului APK și a sumei de control (checksum) a bytecode-ului la pornire, pentru a preveni modificarea și recompilarea binarului de către un atacator.

## 4.4 Autentificare Biometrică și Stocarea Securizată a Secretelor

Stocarea credențialelor sau a jetoanelor de sesiune direct în fișiere text, SharedPreferences sau cod sursă reprezintă o greșeală gravă de proiectare.

1. **Android Keystore System:** Utilizarea modulului hardware dedicat (*Hardware-backed Keystore / TEE - Trusted Execution Environment*) pentru generarea și stocarea cheilor criptografice. Cheile nu părăsesc niciodată cipul hardware securizat al telefonului.
2. **Autentificare Biometrică (BiometricPrompt API):** Ridicarea nivelului de securitate prin integrarea senzorilor de amprentă sau recunoaștere facială. Criptarea datelor sensibile este legată direct de autentificarea biometrică reușită a utilizatorului.
3. **EncryptedSharedPreferences:** Criptarea automată a datelor de configurare și a jetoanelor locale utilizând chei gestionate prin Android Keystore, prevenind citirea lor în cazul în care dispozitivul este pierdut sau extras prin backup.

## 4.5 Riscurile Descărcării Aplicațiilor din Surse Neoficiale (Sideloading)

În ecosistemele mobile, instalarea aplicațiilor din surse terțe sau magazine neoficiale (proces cunoscut sub numele de **Sideloading** — instalarea manuală a fișierelor .apk pe Android sau prin pachete modificate pe iOS) reprezintă unul dintre cei mai mari vectori de infectare.

Spre deosebire de magazinele oficiale (**Google Play Store** și **Apple App Store**), care folosesc scanere automate avansate (Google Play Protect), analiză comportamentală în timp real și verificare manuală a dezvoltatorilor, sursele terțe nu oferă garanții de securitate.

**Principalele Tipuri de Amenințări specifice Sideloading-ului**

### 1. Aplicații Modificate / Repackaged Malware (Droppers)

* **Descriere:** Atacatorii descarcă o aplicație legitimă populară sau un joc plătit, folosesc unelte de reverse engineering (asemănătoare cu cele prezentate în demo-uri) pentru a dezasambla binarul, injectează un modul de cod malițios (payload / Trojan) și recompilează pachetul .apk.
* **Risc:** Utilizatorul crede că instalează o versiune „gratuită” sau „modificată” a unei aplicații reale, însă în fundal rulează cod malițios care preia controlul dispozitivului sau fură date personale.

### 2. Trojans Bancare (Bankers) și Overlay Attacks

* **Descriere:** Aplicații malițioase create special pentru a viza aplicațiile financiare (cum este Revolut).
* **Mecanism:** Malware-ul detectează când utilizatorul deschide aplicația bancară legitimă și afișează instantaneu o fereastră falsă de autentificare deasupra celei reale (**Overlay Attack**). Utilizatorul își introduce datele de conectare sau codul PIN credend că se află în aplicația bancară, dând acces direct atacatorilor la contul său.

### 3. Spyware și Infostealers (Furt de Date și Informații)

* **Descriere:** Malware conceput pentru a spiona activitatea utilizatorului în fundal fără consimțământul acestuia.
* **Mecanism:** Odată instalată din surse nesigure, aplicația solicită permisiuni excesive (Accesibilitate, SMS, Contacte, Microfon, Stocare). Aceasta poate intercepta codurile de verificare **2FA/OTP primite prin SMS**, poate înregistra tastele apăsate (*Keylogging*) sau poate transmite lista de contacte și fișierele private către un server de comandă și control (C2).

### 4. Ransomware Mobil

* **Descriere:** Cod malițios care blochează accesul utilizatorului la dispozitiv sau îi criptează fișierele personale (fotografii, documente), solicitând o răscumpărare (de obicei în criptomonedă) pentru deblocare.
* **Mecanism:** Se răspândește aproape exclusiv prin pachete .apk descărcate de pe site-uri pirat sau reclame înșelătoare (*Malvertising*).

### 5. Abuzul de Servicii de Accesibilitate (Android Accessibility Services Exploitation)

* **Descriere:** Serviciile de accesibilitate din Android sunt concepute pentru a ajuta utilizatorii cu dizabilități, oferind aplicațiilor permisiunea de a citi ecranul și de a executa atingeri simulate.
* **Risc:** Malware-ul descărcat neoficial păcălește utilizatorul să îi acorde permisiuni de accesibilitate. Odată obținute, aplicația malițioasă poate efectua tranzacții financiare în fundal, poate aproba singură alte permisiuni periculoase și se poate proteja împotriva dezinstalării.

**Măsuri Defensive și Recomandări pentru Utilizatori**

1. **Dezactivarea Instalării din Surse Necunoscute:** Păstrarea opțiunii *"Install from unknown sources"* dezactivată în setările Android.
2. **Utilizarea Exclusivă a Magazinelor Oficiale:** Descărcarea aplicațiilor doar din Google Play Store sau Apple App Store.
3. **Verificarea Permisiunilor Solicite:** O aplicație simplă de lanternă sau un joc nu ar trebui să solicite niciodată acces la SMS-uri, Servicii de Accesibilitate sau Contacte.
4. **Protecția Google Play Protect:** Păstrarea activă a modulului integrat de scanare periodică pe sistemul Android.

# Concluzii Finale și Contribuții Personale

Proiectul de față a oferit o perspectivă tehnică și practică asupra ecosistemului de securitate a aplicațiilor mobile, analizând îndeaproape amenințările la care sunt expuse sistemele financiare moderne de tip FinTech.

### Principalele Cunoștințe și Deprinderi Dobândite

1. **Diferența dintre Analiza Statică și Dinamică:**
   * Prin intermediul **Demo-ului 1 (JADX)**, s-a înțeles cât de vulnerabil este codul binar executabil .apk în lipsa unor tehnici riguroase de obfuscare (ProGuard/R8). Extragerea credențialelor hardcodate a arătat de ce **OWASP M1: Improper Credential Usage** ocupă prima poziție în clasamentul riscurilor mobile și de ce nicio informație sensibilă sau logică critică de autentificare nu trebuie lăsată exclusiv pe partea de client (*client-side*).
   * Prin intermediul **Demo-ului 2 (Frida)**, s-a explorat conceptul de *Dynamic Instrumentation* pe un dispozitiv fizic (OnePlus 7 Pro). S-a demonstrat că analiza statică nu este singurul vector de atac; un atacator cu acces Root poate manipula fluxul de execuție din memorie în timp real prin *method hooking* (interceptarea onUserInteraction()), ocolind complet ecranele de autentificare fără a modifica binarul pe disc.
2. **Arhitectura Defensivă în Profunzime (*Defense in Depth*):**
   * Experiența practică a demonstrat necesitatea implementării controalelor defensive active. Protecția aplicațiilor mobile moderne nu se poate baza pe un singur mecanism, ci necesită o abordare pe mai multe straturi: criptarea datelor în repaus (*Android Keystore*), securizarea comunicațiilor de rețea (*SSL/TLS Pinning*), protecția binarului (*Obfuscation*) și auto-protecția la nivel de execuție (**RASP** - detectare Root, Anti-Frida, Anti-Debug).
3. **Gândirea de Tip Pentester (Security Mindset):**
   * Construirea propriei aplicații în Android Studio și ulterior dezasamblarea/interceptarea acesteia pe o platformă Linux a oferit o înțelegere de ansamblu asupra ciclului de viață al dezvoltării software securizate (DevSecOps), adeverind principiul că pentru a proteja eficient o aplicație mobilă, trebuie mai întâi să înțelegi modul în care un atacator o va analiza și exploata.

### Bibliografie și Resurse de Referință

1. **OWASP Foundation** (2024). *OWASP Mobile Application Security Top 10*. Sursă online: <https://owasp.org/www-project-mobile-top-10/>
2. **OWASP Foundation** (2024). *OWASP Mobile Application Security Verification Standard (MASVS)*. Version 2.0.0. Sursă online: [https://masvs.owasp.org/](https://www.google.com/search?q=https://masvs.owasp.org/)
3. **OWASP Foundation** (2023). *OWASP API Security Top 10*. Sursă online: <https://owasp.org/www-project-api-security/>
4. **Android Developers Documentation** (2025). *App security best practices*. Google Android Open Source Project. Sursă online: <https://developer.android.com/topic/security/best-practices>
5. **Android Developers Documentation** (2024). *Android Keystore System & Hardware-backed Security*. Google. Sursă online: <https://developer.android.com/training/articles/keystore>
6. **Skylined & JADX Contributors** (2024). *JADX - Java decompilation tools for Android DEX and APK files*. Repository GitHub: <https://github.com/skylot/jadx>
7. **Ravat, O. & Frida Developers** (2025). *Frida: Dynamic instrumentation toolkit for developers, reverse-engineers, and security researchers*. Sursă online: <https://frida.re/docs/home/>
8. **Elenkov, N.** (2014). *Android Security Internals: An In-Depth Guide to Android's Security Architecture*. No Starch Press. ISBN: 978-1593275815.
9. **Thoviti, S. (2024). *Threat Modeling using LLM: Asset Threat Model Table and Trust Boundaries Methodology*. Sursă online:** [**https://sidthoviti.com/threat-modeling-using-llm/**](https://sidthoviti.com/threat-modeling-using-llm/)
10. **European Union Agency for Cybersecurity (ENISA)** (2023). *Smartphone Security for Citizens: Guidelines and Risk Assessment*. ENISA Publications. Sursă online: <https://www.enisa.europa.eu/>
11. **Stuttard, D., & Pinto, M.** (2011). *The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws* (2nd Edition - Mobile Network & API Security Chapters). Wiley. ISBN: 978-1118026472.