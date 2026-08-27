# 📱 Android Application Threat Model & Binary Exploitation PoC

[![Security](https://img.shields.io/badge/Domain-Mobile%20AppSec-blue.svg)](#)
[![Framework](https://img.shields.io/badge/Framework-STRIDE%20%7C%20OWASP%20MASVS-red.svg)](#)
[![Tools](https://img.shields.io/badge/Tools-JADX%20%7C%20Frida%20%7C%20Android%20Studio-green.svg)](#)

A comprehensive, end-to-end security assessment and threat model for Android mobile applications. This project evaluates device-level risks, network attack vectors, trust boundaries, and execution flows using the **STRIDE** framework and **OWASP Mobile Top 10** standards, supported by two practical Proof-of-Concept (PoC) demonstrations.

---

## 📌 Executive Summary

Modern mobile applications handle sensitive financial, personal, and authentication data across untrusted environments. This project provides a structured threat modeling methodology using a high-profile fintech application (**Revolut**) as a reference architecture. 

It covers both **static threat modeling** (Data Flow Diagrams, Trust Boundaries, Risk Matrices) and **hands-on offensive validation** through static decompilation and dynamic runtime manipulation.

---

## 🛠️ Key Components & Methodology

### 1. Architectural Analysis & Trust Boundaries
* **System Architecture & DFD:** Mapped data flows between Client Storage, Android Sandbox, Local Inter-Process Communication (IPC), Cellular/Wi-Fi transport layers, and Backend APIs.
* **Trust Boundary Mapping:** Defined boundaries separating the untrusted client device, OS sandbox, local hardware key stores (KeyStore), and secured server endpoints.
* **Data Classification:** Categorized processed data (PII, session tokens, biometric hashes, API keys) by impact and sensitivity.

### 2. STRIDE Risk Matrix
Risk modeling applied specifically to Android component architectures:
* **Spoofing:** Device identity theft, overlay attacks, and rogue AP connections.
* **Tampering:** Binary repackaging, sideloaded malware droppers, and dynamic memory patching.
* **Repudiation:** Inadequate local/remote transaction logging and auditing.
* **Information Disclosure:** Hardcoded API secrets, insecure logcat exposure, and unencrypted shared preferences.
* **Denial of Service:** Accessibility service abuse and local resource exhaustion.
* **Elevation of Privilege:** Root/Magisk exploitation, broken IPC permissions, and sandbox escapes.

---

## 🧪 Proof-of-Concept (PoC) Demos

### 🔍 DEMO 1: Reverse Engineering & Credential Harvesting (OWASP M1)
* **Target:** Custom Android application executable (`.apk`) built in Android Studio.
* **Methodology:** Performed static analysis and decompilation using **JADX-GUI**.
* **Objective:** Discovered hardcoded API keys and sensitive credentials stored directly within compiled Java/Kotlin byteclasses.
* **Mitigation:** Implemented secure secrets management using native NDK/C++ wrappers and server-side secret injection.

### ⚡ DEMO 2: Dynamic Runtime Hooking & Login Bypass (Frida)
* **Target:** Android authentication activity flow.
* **Methodology:** Attached `frida-server` to the target process on a rooted Android environment and injected custom JavaScript (`bypass.js`).
* **Objective:** Intercepted boolean return values of the authentication method via dynamic method hooking, bypassing the login screen without valid credentials.
* **Mitigation:** Applied **RASP (Runtime Application Self-Protection)** controls, integrity checks, and anti-frida/anti-debugging checks.

---

## 🗂️ Repository Structure

```text
├── docs/
│   ├── Threat_Model_Android_EN.md            # Full report (English)
│   └── Threat_Model_Android_RO.md            # Full report (Romanian)
├── scripts/
│   └── bypass.js                             # Frida dynamic hooking script
├── resurse/
│   ├── DFD-horizontal.png                    # System Architecture & DFD with Trust Boundaries
│   ├── Date-Colectare-Revolut.png            # Classification of collected data (Revolut model)
│   ├── Dispositiv-Pierdut-Furat.png          # Threat scenario: Lost or stolen device
│   ├── OS-Compromis.png                      # Threat scenario: Compromised operating system
│   ├── mobile-vs-browser-server.png          # Architectural comparison: Mobile vs. Web Application
│   ├── aplicatia-in-android.png              # Android Studio demo application setup
│   ├── apk-generat.png                       # Executable package (.apk) generation
│   ├── decompilare-gasire-parola-user.png    # JADX decompilation & hardcoded credential discovery (M1)
│   ├── remediere-jadx-before.png             # Vulnerable code structure prior to remediation
│   ├── remediere-jadx-decompilat-before.png  # Decompiled byteclasses showing exposed secrets
│   ├── remediere-jadx-after.png              # Remediated code implementation
│   ├── frida-server-start-setup.png          # Environment preparation & Frida server initialization
│   ├── bypass-script.png                     # Frida dynamic hooking logic (bypass.js)
│   └── injecting-bypass-into-test-app.png    # Dynamic script injection & login bypass PoC
└── README.md
```
