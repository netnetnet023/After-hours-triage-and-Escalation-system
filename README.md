# After-Hours Call Triage & Escalation System for HVAC Businesses

A serverless Twilio-based system that captures after-hours calls, records job details, performs emergency triage, and escalates urgent cases via SMS.

---

## Problem

- HVAC businesses miss revenue after hours or get woken up for non-urgent calls.
- Missed emergency calls can lead to customer churn and safety risks.

---

## Solution

- Answers after-hours calls
- Records caller issue
- Classifies emergencies via keypad (DTMF) input
- Sends structured SMS summaries
- Escalates emergencies immediately

---

## Call Flow

1. Incoming call hits Twilio Function  
2. Caller describes the issue (recorded + transcribed)  
3. System asks emergency triage question  
4. Logic routes to:
   - **Emergency**: SMS + escalation  
   - **Non-emergency**: SMS summary only  

---

## Tech Stack

- Twilio Voice (TwiML, Functions)
- Node.js
- Serverless architecture
- Environment-based configuration

---

## Design Decisions

- One service per client to reduce blast radius
- No database in v1 to maximize reliability
- Explicit keypad-based triage to avoid false emergencies
- Deterministic logic over AI/NLP for production safety

---

## What I Learned

- Event-driven serverless flows
- Telephony primitives and constraints
- Production-safe environment configuration
- Designing systems for real-world user behavior
